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
 * Movie - TODO: desciption
 */
export class Movie extends Symbol {
    /**
     * @type {string}
     */
    get name() { return this.data.id; }
    /**
     * @type {string}
     */
    get library() { return this.data.library; }
    /**
     * @type {Array.<Array.<string>>}
     */
    get labels() { return this.data.labels; }
    /**
     * @type {Array.<LayerData>}
     */
    get layerData() { return this.data.layers; }
    /**
     * @type {boolean}
     */
    get isFlipbook() { return this.data.isFlipbook; }
    /**
     * @type {boolean}
     */
    get isManagedByParent() { return this.parentMovie !== undefined; }
    /**
     * @type {boolean}
     */
    get isPlaying() { return this.state === PLAYING; }

    constructor(game, data, frameRate) {
        super(game);

        /**
         * @type {MovieData}
         */
        this.data = undefined;

        /**
         * @type {number}
         */
        this.frameRate = frameRate;

        /**
         * @type {number}
         */
        this.frameCount = 0;

        /**
         * @type {number}
         */
        this.duration = 0;

        /**
         * @type {Array.<Layer>}
         */
        this.layers = [];

        /**
         * Pool of unused layers.
         * @type {Array.<Layer>}
         */
        this.layerPool = [];

        /**
         * @type {Movie}
         */
        this.parentMovie = undefined;

        /**
         * @type {number}
         */
        this.framePosition = NO_FRAME;

        /**
         * @type {number}
         */
        this.stopFrame = NO_FRAME;

        /**
         * @type {number}
         */
        this.pendingGoToFrame = NO_FRAME;

        /**
         * @type {number}
         */
        this.playTime = 0;

        /**
         * @type {boolean}
         */
        this.skipAdvanceTime = false;

        /**
         * @type {boolean}
         */
        this.isUpdatingFrame = false;

        /**
         * @type {string}
         */
        this.state = PLAYING

        /**
         * @type {Phaser.Signal}
         */
        this.labelEvents = new Phaser.Signal();

        // Setup initial state of the Movie.
        this.setup(data).addedToLayer();
    }

    /**
     * Destroys the Movie and all it's layers and symbols.
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

    update() {
        if (!this.isManagedByParent) {
            this.advanceTime(this.game.time.physicsElapsed);
        }
    }

    /**
     * Returns true if the label exists in on this Movie.
     * @param {string} label 
     */
    hasLabel(label) {
        return this.getFrameOfLabel(label);
    }

    /**
     * Returns the frame the label is on.
     * @param {string} label 
     */
    getFrameOfLabel(label) {
        for (let i = 0; i < this.labels.length; i++) {
            if (this.labels.indexOf(label) >= 0) {
                return i;
            }
        }
        return NO_FRAME;
    }

    /**
     * Loop this movie.
     */
    loop() {
        this.state = PLAYING;
        this.stopFrame = NO_FRAME;
        return this;
    }

    /**
     * Plays the Movie to the last frame once.
     */
    playOnce() {
        return this.playTo(LAST_FRAME);
    }

    /**
     * Plays the movie to the provided frame number or label.
     * @param {string | number} frame Frame number or frame label to play to.
     */
    playTo(frame) {
        return this.stopAt(frame).play();
    }

    /**
     * Plays the current Movie.
     */
    play() {
        this.state = this.framePosition !== this.stopFrame ? PLAYING : STOPPED;
        return this;
    }

    /**
     * Plays only nested Movies.
     */
    playChildrenOnly() {
        this.state = PLAYING_CHILDREN_ONLY;
        return this;
    }

    /**
     * Tells the Movie to stop at a specific frame.
     * @param {string | number} frame 
     */
    stopAt(frame) {
        this.stopFrame = this.getFrame(frame);
        return this;
    }

    /**
     * Stops the current Movie.
     */
    stop() {
        this.state = STOPPED;
        return this;
    }

    /**
     * Go to a specific frame number or label. This go to does not atler the playing state of 
     * the movie. Any labels on the target frame will be fired.
     * @param {string | number} frame Frame number or label to go to.
     */
    goTo(frame) {
        return this.goToInternal(this.getFrame(frame), false);
    }

    /**
     * Same as Movie::goTo, however this will also advance nested Movie objects to the specified frame.
     * If the frame does no exist on a child Movie, then that Movie is advanced to its last frame.
     * @param {number} frame 
     */
    recursiveGoTo(frame) {
        return this.goToInternal(this.getFrame(frame), true);
    }

    /**
     * GoTo function used internally to the Movie. It's suggested to use Movie::goTo() or Movie::recursiveGoTo() instead.
     * @param {string | number} frame 
     * @param {boolean} recursive 
     */
    goToInternal(frame, recursive) {
        if (this.isUpdatingFrame) {
            this.pendingGoToFrame = frame;
        }
        else {
            let nextFrame = frame;
            if (nextFrame >= this.frameCount) {
                nextFrame = this.frameCount;
            }

            this.playTime = nextFrame / this.frameRate;
            this.updateFrame(nextFrame, 0);

            if (recursive) {
                this.layers.forEach(layer => {
                    if (layer.currentSymbol.flumpSymbolType === MOVIE_SYMBOL_TYPE) {
                        layer.currentSymbol.goToInternal(frame, recursive);
                    }
                });
            }
        }
        return this;
    }

    /**
     * Advances the animation along its timeline.
     * @param {number} dt Delta time
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

            let nextFrame = Math.round(this.playTime * this.frameRate);
            if (nextFrame < 0) {
                nextFrame = 0;
            }
            else if (nextFrame >= this.frameCount) {
                nextFrame = this.frameCount - 1;
            }

            if (this.stopFrame !== NO_FRAME) {
                const framesRemaining = this.framePosition <= this.stopFrame ? this.stopFrame - this.framePosition : this.frameCount - this.framePosition + this.stopFrame;
                const framesElapsed = Math.round(actualPlayTime * this.frameRate) - this.framePosition;
                
                if (framesElapsed >= framesRemaining) {
                    this.state = STOPPED;
                    nextFrame = this.stopFrame;
                }
            }

            this.updateFrame(nextFrame, dt);
        }

        for (let i = 0; i < this.layers.length; i++) {
            if (this.layers[i].currentSymbol.flumpSymbolType === MOVIE_SYMBOL_TYPE) {
                this.layers[i].currentSymbol.advanceTime(dt);
            }
        }
    }

    /**
     * Internal function to get the specified frame
     * @param {string | number} frame 
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
     * @returns {FlumpSymbol | Movie} Returns the current layer sumbol.
     */
    toggleLayer(name, toggle) {
        for (let i = 0; i < this.layers.length; i++) {
            if (this.layers[i].name === name) {
                this.layers[i].disabled = !toggle;
                return this.layers[i].currentSymbol;
            }
        }
        throw new Error(`Cannot find layer ${name} in Movie ${this.name}.`);
    }

    /**
     * Checks to see if the provided layer is enabled.
     * @param {string} name 
     */
    isLayerEnabled(name) {
        for (let i = 0; i < this.layers.length; i++) {
            if (this.layers[i].name === name) {
                this.layers[i].disabled = !toggle;
                return !this.layers[i].disabled;
            }
        }
        throw new Error(`Cannot find layer ${name} in Movie ${this.name}.`);
    }

    /**
     * Removes a child at the provided index. If the child is managed by one of the Layers of this Movie,
     * and if the Layer contains no other symbols, then the entire Layer will be removed from the Movie.
     * @param {number} index 
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

        let replaceSymbol = false;
        if (childLayerIndex >= 0) {
            if (child.flumpSymbolType === MOVIE_SYMBOL_TYPE) {
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
     */
    getLayerNames() {
        return this.layers.map(layer => layer.name);
    }

    /**
     * Setups up this movie to use the provided MovieData.
     * @param {MovieData} data 
     */
    setup(data) {
        if (this.data !== undefined) {
            this.cleanUpLayers();
        }
        this.data = data;
        
        if (this.isFlipbook) {
            this.layers = [this.getFreeLayer().setup(this.layerData[0])];
            this.frameCount = this.layers[0].frameCount;
        }
        else {
            for (let i = 0; i < this.layerData.length; i++) {
                this.layers.push(this.getFreeLayer().setup(this.layerData[i]));
                this.frameCount = Math.max(this.layerData[i].frameCount, this.frameCount);
            }

            this.duration = this.frameCount / this.frameRate;
            this.updateFrame(0, 0);
        }
        return this;
    }

    /**
     * Cleans up the Movie.
     * This does not destroy the movie, simply returns all layers and symbols back to their pools.
     */
    cleanUp() {
        while (this.layers.length > 0) {
            this.layers[0].cleanUp();
            this.layerPool.push(this.layers[0]);
            this.layers.shift();
        }
    }

    /**
     * Sets reference to the parent Movie. This is for Movies that are nested.
     * @param {Movie} parent 
     */
    setParentMovie(parent) {
        this.parentMovie = parent;
    }

    /**
     * Sets the initial state of the Movie.
     */
    addedToLayer() {
        this.goTo(0);
        this.skipAdvanceTime = true;
    }

    /**
     * Updates each layer to the next frame and fires any label events.
     * @param {number} nextFrame 
     * @param {number} dt
     */
    updateFrame(nextFrame, dt) {
        if (nextFrame < 0 || nextFrame >= this.frameCount) {
            throw new Error(`Invalid frame ${nextFrame}.`);
        }

        if (this.isUpdatingFrame) {
            throw new Error("Movie::updateFrame() is being called recursively");
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

        let frameIndex = startFrame;
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
    }

    /**
     * @returns {Layer}
     */
    getFreeLayer() {
        if (this.layerPool.length > 0) {
            return this.layerPool.shift();
        }
        return new Layer(this);
    }
}