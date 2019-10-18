import { Layer } from "../layer/Layer";
import { MovieData } from "./MovieData";
import { LayerData } from "../layer/LayerData";
import { 
    NO_FRAME, 
    PLAYING, 
    LAST_FRAME,
    MOVIE_SYMBOL_TYPE,
    STOPPED,
    PLAYING_CHILDREN_ONLY
} from "../../constants/Constants";
import { Symbol } from "../Symbol";

/**
 * Flump movie symbol plays an animation from a library. A Movie symbol manages setting up and updating
 * multiple layers. Movie symbols can play or loop its animation. Additionally, if a Movie key is provided
 * to `Movie.playOnce()` or `Movie.loop()`, then the Movie symbol will switch to a new animation. Switching
 * animations will result in the old animation being stopped and all layers will be cleaned up and pooled
 * before the new animatino is setup and played. 
 * 
 * When an animation is switched  the `MovieData` object referenced by this Movie symbol will be overriden 
 * and the movie specific fields will change to reflect the new animation.
 * 
 * Movie symbols can be standalone or be nested within other Movies depending on the confirgation of animation 
 * from the library. If a Movie symbol is nested, then it will be updated by its parent Movie. If using the
 * `Movie.playbackSpeed` property, then only apply it to the root Movie symbol.
 * 
 * @extends Symbol
 * @version 1.0
 */
export class Movie extends Symbol {
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */
    get id() { return this.data.id; }
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */
    get library() { return this.data.library; }
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */
    get frameCount() { return this.data.frameCount; }
    /**
     * @type {Array.<Array.<string>>}
     * @readonly
     * @version 1.0
     */
    get labels() { return this.data.labels; }
    /**
     * @type {Array.<LayerData>}
     * @readonly
     * @version 1.0
     */
    get layerData() { return this.data.layers; }
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */
    get isFlipbook() { return this.data.isFlipbook; }
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */
    get isManagedByParent() { return this.parentMovie !== undefined; }
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */
    get isPlaying() { return this.state === PLAYING; }

    constructor(game, frameRate) {
        super(game);

        /**
         * @type {MovieData}
         * @version 1.0
         */
        this.data = undefined;

        /**
         * @type {number}
         * @version 1.0
         */
        this.frameRate = frameRate;

        /**
         * @type {number}
         * @version 1.0
         */
        this.duration = 0;

        /**
         * @type {Array.<Layer>}
         * @version 1.0
         */
        this.layers = [];

        /**
         * Pool of unused layers.
         * @type {Array.<Layer>}
         * @version 1.0
         */
        this.layerPool = [];

        /**
         * @type {Movie}
         * @version 1.0
         */
        this.parentMovie = undefined;

        /**
         * @type {number}
         * @version 1.0
         */
        this.framePosition = NO_FRAME;

        /**
         * @type {number}
         * @version 1.0
         */
        this.stopFrame = NO_FRAME;

        /**
         * @type {number}
         * @version 1.0
         */
        this.pendingGoToFrame = NO_FRAME;

        /**
         * @type {number}
         * @version 1.0
         */
        this.lastFrameIdx = NO_FRAME;

        /**
         * @type {number}
         * @version 1.0
         */
        this.playTime = 0;

        /**
         * @type {boolean}
         * @version 1.0
         */
        this.skipAdvanceTime = false;

        /**
         * @type {boolean}
         * @version 1.0
         */
        this.isUpdatingFrame = false;

        /**
         * @type {string}
         * @version 1.0
         */
        this.fallbackLoop = undefined;

        /**
         * @type {number}
         * @version 1.0
         */
        this.playbackSpeed = 1;

        /**
         * @type {string}
         * @version 1.0
         */
        this.state = PLAYING

        /**
         * @type {Phaser.Signal}
         * @version 1.0
         */
        this.labelEvents = new Phaser.Signal();

        /**
         * @type {Phaser.Signal}
         * @version 1.0
         */
        this.playbackComplete = new Phaser.Signal();

        /**
         * @type {Phaser.Signal}
         * @version 1.0
         */
        this.playbackLoop = new Phaser.Signal();
    }

    /**
     * Destroys the Movie and all it's layers and symbols.
     * @version 1.0
     */
    destroy() {
        this.labelEvents.dispose();
        this.labelEvents = undefined;

        this.layers.forEach(layer => layer.destroy());
        this.layers = undefined;

        this.layerPool.forEach(layer => layer.destroy());
        this.layerPool = undefined;

        this.data = undefined;
        this.parentMovie = undefined;

        super.destroy();
    }

    /**
     * Updates the Movie if it is not managed by a parent Movie symbol.
     * @internal
     * @version 1.0
     */
    update() {
        if (!this.isManagedByParent) {
            this.advanceTime((this.game.time.elapsedMS * 0.001) * this.playbackSpeed);
        }
    }

    /**
     * Changes the animation this Movie is playing.
     * @param {string} key 
     * @internal
     * @version 1.0
     */
    switchMovieTo(key) {
        if (this.game.flump.libraries[this.library].hasMovieSymbol(key)) {
            this.setup(this.game.flump.libraries[this.library].getMovieData(key));
        }
    }

    /**
     * Returns true if the label exists in on this Movie.
     * @param {string} label 
     * @version 1.0
     */
    hasLabel(label) {
        return this.getFrameOfLabel(label);
    }

    /**
     * Returns the frame the label is on.
     * @param {string} label 
     * @version 1.0
     */
    getFrameOfLabel(label) {
        for (let i = 0; i < this.labels.length; i++) {
            if (this.labels[i].indexOf(label) >= 0) {
                return i;
            }
        }
        return NO_FRAME;
    }

    /**
     * Loop this movie.
     * @version 1.0
     */
    loop(key, restart = true) {
        this.fallbackLoop = undefined;

        if ((!key || key === this.id) && restart) {
            this.goToInternal(0, true);
        }
        else if (key && key !== this.id) {
            this.switchMovieTo(key);
        }

        this.state = PLAYING;
        this.stopFrame = NO_FRAME;

        return this;
    }

    /**
     * Plays the Movie to the last frame once.
     * @version 1.0
     */
    playOnce(key, restart = true, fallbackLoop = undefined) {
        this.fallbackLoop = fallbackLoop;

        if ((!key || key === this.id) && restart) {
            this.goToInternal(0, true);
        }
        else if (key && key !== this.id) {
            this.switchMovieTo(key);
        }

        return this.playTo(LAST_FRAME);
    }

    /**
     * Plays the movie to the provided frame number or label.
     * @param {string | number} frame Frame number or frame label to play to.
     * @version 1.0
     */
    playTo(frame) {
        return this.stopAt(frame).play();
    }

    /**
     * Plays the current Movie.
     * @version 1.0
     */
    play() {
        this.state = this.framePosition !== this.stopFrame ? PLAYING : STOPPED;
        return this;
    }

    /**
     * Plays only nested Movies.
     * @version 1.0
     */
    playChildrenOnly() {
        this.state = PLAYING_CHILDREN_ONLY;
        return this;
    }

    /**
     * Tells the Movie to stop at a specific frame.
     * @param {string | number} frame 
     * @version 1.0
     */
    stopAt(frame) {
        this.stopFrame = this.getFrame(frame);
        return this;
    }

    /**
     * Stops the current Movie.
     * @version 1.0
     */
    stop() {
        this.state = STOPPED;
        return this;
    }

    /**
     * Go to a specific frame number or label. This go to does not atler the playing state of 
     * the movie. Any labels on the target frame will be fired.
     * @param {string | number} frame Frame number or label to go to.
     * @version 1.0
     */
    goTo(frame) {
        return this.goToInternal(this.getFrame(frame), false);
    }

    /**
     * Same as Movie.goTo, however this will also advance nested Movie objects to the specified frame.
     * If the frame does no exist on a child Movie, then that Movie is advanced to its last frame.
     * @param {number} frame 
     * @internal
     * @version 1.0
     */
    recursiveGoTo(frame) {
        return this.goToInternal(this.getFrame(frame), true);
    }

    /**
     * GoTo function used internally to the Movie. It's suggested to use Movie.goTo() or Movie.recursiveGoTo() instead.
     * @param {string | number} frame 
     * @param {boolean} recursive 
     * @internal
     * @version 1.0
     */
    goToInternal(frame, recursive) {
        if (this.isUpdatingFrame) {
            this.pendingGoToFrame = frame;
            return this;
        }
        
        let nextFrame = frame;
        if (nextFrame >= this.frameCount) {
            nextFrame = this.frameCount;
        }

        this.playTime = nextFrame / this.frameRate;
        this.updateFrame(nextFrame, 0);

        if (recursive) {
            this.layers.forEach(layer => {
                if (layer.currentSymbol.symbolType === MOVIE_SYMBOL_TYPE) {
                    layer.currentSymbol.goToInternal(frame, recursive);
                }
            });
        }

        return this;
    }

    /**
     * Internal function to get the specified frame
     * @param {string | number} frame 
     * @version 1.0
     */
    getFrame(frame) {
        if (typeof frame === "number") {
            return frame;
        }
        else if (typeof frame ==="string") {
            frame = this.getFrameOfLabel(frame);
            if (frame < 0) {
                throw new Error(`Movie does not contain a frame label ${frame}.`);
            }
            return frame;
        }
        throw new Error("Frame must be a string or number");
    }

    /**
     * Toggle a specific layer on the Movie. 
     * @param {string} name 
     * @param {boolean} toggle 
     * @returns {Symbol | Movie} Returns the current layer sumbol.
     * @version 1.0
     */
    toggleLayer(name, toggle) {
        for (let i = 0; i < this.layers.length; i++) {
            if (this.layers[i].name === name) {
                this.layers[i].disabled = !toggle;
                return this.layers[i].currentSymbol;
            }
        }
        throw new Error(`Cannot find layer ${name} in Movie ${this.id}.`);
    }

    /**
     * Checks to see if the provided layer is enabled.
     * @param {string} name 
     * @version 1.0
     */
    isLayerEnabled(name) {
        for (let i = 0; i < this.layers.length; i++) {
            if (this.layers[i].name === name) {
                this.layers[i].disabled = !toggle;
                return !this.layers[i].disabled;
            }
        }
        throw new Error(`Cannot find layer ${name} in Movie ${this.id}.`);
    }

    /**
     * Removes a child at the provided index. If the child is managed by one of the Layers of this Movie,
     * and if the Layer contains no other symbols, then the entire Layer will be removed from the Movie.
     * @param {number} index 
     * @version 1.0
     */
    removeChildAt(index) {
        if (this.isUpdatingFrame) {
            throw new Error(`Cannot remove a layer while the Movie is updating its frame.`);
        }

        if (index < 0) {
            index = this.children.length - index;
        }

        const child = super.getChildAt(index);
        let childLayerIndex = -1;

        if (this.layers) {
            if (index < this.layers.length && this.layers[index].currentSymbol === child) {
                childLayerIndex = index;
            }
            else {
                for (let i = 0; i < this.layers.length; ++i) {
                    if (this.layers[i].currentSymbol === child) {
                        childLayerIndex = i;
                        break;
                    }
                }
            }
        }

        let replaceSymbol = false;
        if (childLayerIndex >= 0) {
            if (child.symbolType === MOVIE_SYMBOL_TYPE) {
                // Clear the nested Movie's parent reference.
                child.setParentMovie();
            }

            if (this.layers[childLayerIndex].symbolCount === 1) {
                this.layers.splice(childLayerIndex, 1);
            }
            else {
                replaceSymbol = true;
            }
        }

        super.removeChildAt(index);

        if (replaceSymbol) {
            const replacement = this.game.flump.createSymbolFrom(this.library);
            this.addChildAt(replacement, index);
            this.layers[childLayerIndex].replaceCurrentSymbol(replacement);
        }

        return child;
    }

    /**
     * Get the names of each Movie Layer.
     * @version 1.0
     */
    getLayerNames() {
        return this.layers.map(layer => layer.name);
    }

    /**
     * Cleans up the Movie.
     * This does not destroy the movie, simply returns all layers and symbols back to their pools.
     * @internal
     * @version 1.0
     */
    cleanUp() {
        while (this.layers.length > 0) {
            const layer = this.layers.shift();
            layer.cleanUp();
            this.layerPool.push(layer);
        }
    }

    /**
     * Sets reference to the parent Movie. This is for Movies that are nested.
     * @param {Movie} parent 
     * @internal
     * @version 1.0
     */
    setParentMovie(parent) {
        this.parentMovie = parent;
    }

    /**
     * Sets the initial state of the Movie.
     * @internal
     * @version 1.0
     */
    addedToLayer() {
        this.goTo(0);
        this.skipAdvanceTime = true;
    }

    /**
     * Setups up this movie to use the provided MovieData.
     * @param {MovieData} data 
     * @internal
     * @version 1.0
     */
    setup(data) {
        if (this.data !== undefined) {
            this.cleanUp();
        }

        this.data = data;
        this.duration = this.frameCount / this.frameRate;
        
        if (this.isFlipbook) {
            this.layers = [this.getFreeLayer().setup(this.layerData[0])];
        }
        else {
            for (let i = 0; i < this.layerData.length; i++) {
                this.layers.push(this.getFreeLayer().setup(this.layerData[i]));
            }
        }
        return this.goToInternal(0, true);
    }

    /**
     * Advances the animation along its timeline.
     * @param {number} dt Delta time
     * @internal
     * @version 1.0
     */
    advanceTime(dt) {
        if (dt < 0) {
            throw new Error(`Invalid time ${dt}`);
        }

        if (this.skipAdvanceTime) {
            this.skipAdvanceTime = false;
            return;
        }

        if (this.state === STOPPED) {
            return;
        }

        if (this.state === PLAYING && this.frameCount > 1) {
            this.playTime += dt;

            const actualPlayTime = this.playTime;
            if (this.playTime >= this.duration) {
                this.playTime %= this.duration;
            }

            // Originally Math.round(this.playTime * this.frameRate)
            // Removed rounding for smoother motion. Keeping this note in case
            // problems pop up down the road.
            let nextFrame = this.playTime * this.frameRate; 
            if (nextFrame < 0) {
                nextFrame = 0;
            }
            else if (nextFrame >= this.frameCount) {
                nextFrame = this.frameCount - 1;
            }

            if (this.stopFrame !== NO_FRAME) {
                const framesRemaining = this.framePosition <= this.stopFrame ? this.stopFrame - this.framePosition : this.frameCount - this.framePosition + this.stopFrame;
                // Originally Math.round(actualPlayTime * this.frameRate)
                // Removed rounding for smoother motion. Keeping this note in case
                // problems pop up down the road.
                const framesElapsed = (actualPlayTime * this.frameRate) - this.framePosition;
                
                if (framesElapsed >= framesRemaining) {
                    this.state = STOPPED;
                    nextFrame = this.stopFrame;
                }
            }

            this.updateFrame(nextFrame, dt);
        }

        for (let i = 0; i < this.layers.length; i++) {
            if (this.layers[i].currentSymbol.symbolType === MOVIE_SYMBOL_TYPE) {
                this.layers[i].currentSymbol.advanceTime(dt);
            }
        }
    }

    /**
     * Updates each layer to the next frame and fires any label events.
     * @param {number} nextFrame 
     * @param {number} dt
     * @internal
     * @version 1.0
     */
    updateFrame(nextFrame, dt) {
        if (nextFrame < 0 || nextFrame >= this.frameCount) {
            throw new Error(`Invalid frame ${nextFrame}.`);
        }

        if (this.isUpdatingFrame) {
            throw new Error("Movie.updateFrame() is being called recursively");
        }

        this.pendingGoToFrame = NO_FRAME;
        this.isUpdatingFrame = true;

        const lastFrame = this.framePosition;
        this.framePosition = nextFrame;

        let startFrame, count;

        if (dt <= 0) {
            startFrame = nextFrame;
            count = 1;
        }
        else {
            startFrame = lastFrame + 1 < this.frameCount ? lastFrame + 1 : 0;
            count = this.framePosition - lastFrame;

            if (dt >= this.duration || nextFrame < this.framePosition) {
                count += this.frameCount;
            }
        }

        const num = startFrame | 0;
        if (this.lastFrameIdx !== num) {
            this.lastFrameIdx = num;

            let frameIndex = this.lastFrameIdx;
            for (let i = 0; i < count; ++i) {
                if (this.pendingGoToFrame !== NO_FRAME) {
                    break;
                }
    
                // Fire frame label events.
                if (this.labels[frameIndex] !== undefined) {
                    for (let j = 0; j < this.labels[frameIndex].length; j++) {
                        this.labelEvents.dispatch(this.labels[frameIndex][j]);
                        if (this.pendingGoToFrame !== NO_FRAME) {
                            break;
                        }
                    }
                }
    
                // Avoid modulo division.
                if (++frameIndex === this.frameCount) {
                    frameIndex = 0;
                }
            }
        }

        this.isUpdatingFrame = false;

        if (this.pendingGoToFrame !== NO_FRAME) {
            const pending = this.pendingGoToFrame;
            this.pendingGoToFrame = NO_FRAME;

            this.goTo(pending);
        }
        else if (nextFrame !== lastFrame) {
            for (let i = 0; i < this.layers.length; i++) {
                this.layers[i].drawFrame(nextFrame);
            }
        }

        if (!this.isManagedByParent) {
            if (this.framePosition === this.stopFrame) {
                if (this.fallbackLoop !== undefined) {
                    this.loop(this.fallbackLoop);
                }
                this.playbackComplete.dispatch();
            }
            else if (this.framePosition < lastFrame) {
                this.playbackLoop.dispatch();
            }
        }
    }

    /**
     * Returns a layer not currently being used in an animation.
     * @returns {Layer}
     * @internal
     * @version 1.0
     */
    getFreeLayer() {
        if (this.layerPool.length > 0) {
            return this.layerPool.shift();
        }
        return new Layer(this);
    }

    /**
     * Restores the Movie symbol to its default state.
     * @internal
     * @version 1.0
     */
    restore() {
        this.parentMovie = undefined;
        this.framePosition = NO_FRAME;
        this.stopFrame = NO_FRAME;
        this.pendingGoToFrame = NO_FRAME;
        this.lastFrameIdx = NO_FRAME;
        this.playTime = 0;
        this.skipAdvanceTime = false;
        this.isUpdatingFrame = false;
        this.fallbackLoop = undefined;
        this.playbackSpeed = 1;
        this.state = PLAYING
        this.labelEvents.removeAll();
        this.playbackComplete.removeAll();
        this.playbackLoop.removeAll();

        return super.restore();
    }
}