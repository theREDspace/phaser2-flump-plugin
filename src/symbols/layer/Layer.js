import { Movie } from "../movie/Movie";
import { LayerData } from "./LayerData";
import { KeyframeData } from "../keyframe/KeyframeData";
import { EMPTY_KEYFRAME, MOVIE_SYMBOL_TYPE } from "../../constants/Constants";
import { Symbol } from "../Symbol";

/**
 * Flump layer manager used to setup and manage symbols across multiple keyframes of an animation. A layer is
 * responsible for add/removing symbols from its parent Movie symbol, and updating the current symbol to
 * reflect the state of the animation timeline.
 * 
 * Layers are only responsible for updating one symbol at a time. When a new keyframe is hit or passed, the layer
 * will update which symbol it is managing. Layer order is determined by the parent Movie symbol.
 * 
 * Layers are pooled when the parent Movie symbol changes its animation. This means that a single layer can be
 * reused with and given new layer data.
 * 
 * Layers should be considered internal helper objects to a Movie symbol and it is not recommended to access a layer
 * outside of the Movie symbol.
 * 
 * @version 1.0
 */
export class Layer {
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */
    get name() { return this.data.name; }
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */
    get library() { return this.data.library; }
    /**
     * @type {Array.<KeyframeData>}
     * @readonly
     * @version 1.0
     */
    get keyframes() { return this.data.keyframes; }
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */
    get frameCount() { return this.data.frameCount; }
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */
    get isFlipbook() { return this.data.flipbook; }

    constructor(movie) {
        /**
         * @type {Movie}
         * @version 1.0
         */
        this.movie = movie;
        
        /**
         * @type {Phaser.Game}
         * @version 1.0
         */
        this.game = movie.game;
        
        /**
         * @type {LayerData}
         * @version 1.0
         */
        this.data = undefined;

        /**
         * @type {Movie | Symbol}
         * @version 1.0
         */
        this.currentSymbol = undefined;

        /**
         * @type {Array.<Symbol | Movie}
         * @version 1.0
         */
        this.symbols = [];

        /**
         * @type {number}
         * @version 1.0
         */
        this.symbolCount = 0;

        /**
         * @type {boolean}
         * @version 1.0
         */
        this.disabled = false;

        /**
         * @type {number}
         * @version 1.0
         */
        this.position = 0;
    }

    /**
     * Destroyings the layer and all its symbols.
     * @version 1.0
     */
    destroy() {
        this.movie = undefined;
        this.game = undefined;
        this.data = undefined;
        this.currentSymbol = undefined;

        // Destroy each unique symbol reference, while skipping duplicate references.
        while (this.symbols.length > 0) {
            const destSymbol = this.symbols.shift();
            for (let i = this.symbols.length - 1; i >= 0; i--) {
                if (this.symbols[i] === destSymbol) {
                    this.symbols.splice(i, 1);
                }
            }
            destSymbol.destroy();
        }
        this.symbols = undefined;
    }

    /**
     * Used to setup this layer with the provided data.
     * Reused this to assign new data to this layer. If used to
     * reassign layer data, then previous layer data will be cleaned up.
     * @param {LayerData} data 
     * @internal
     * @version 1.0
     */
    setup(data) {
        if (this.data !== undefined) {
            this.cleanUp();
        }

        this.data = data;
        this.symbolCount = 0;

        let lastSymbol = EMPTY_KEYFRAME;
        for (let i = 0; i < this.keyframes.length && lastSymbol === EMPTY_KEYFRAME; i++) {
            lastSymbol = this.keyframes[i].ref;
        }

        if (!this.isFlipbook && lastSymbol === EMPTY_KEYFRAME) {
            this.currentSymbol = this.game.flump.createSymbolFrom(this.library);
            this.movie.addChild(this.currentSymbol);
            this.symbolCount = 1;
        }
        else {
            for (let i = 0; i < this.keyframes.length; ++i) {
                const keyframe = this.keyframes[i];

                let symbol;
                if (i > 0 && this.keyframes[i - 1].ref === keyframe.ref) {
                    symbol = this.symbols[i - 1];
                }
                else {
                    this.symbolCount++;

                    if (keyframe.ref === EMPTY_KEYFRAME) {
                        symbol = this.game.flump.createSymbolFrom(this.library);
                    }
                    else {
                        symbol = this.game.flump.createSymbolFrom(this.library, keyframe.ref);
                        if (symbol.symbolType === MOVIE_SYMBOL_TYPE) {
                            symbol.setParentMovie(this.movie);
                        }
                    }
                }

                this.symbols.push(symbol);
                symbol.visible = false;
                this.movie.addChild(symbol);
            }

            this.currentSymbol = this.symbols[0];
            this.currentSymbol.visible = true;
        }

        return this.drawFrame(0);
    }

    /**
     * Used internally to replace this layer's current symbol.
     * All references to the current symbol on additional keyframes will also be replaces.
     * @param {Symbol | Movie} symbol
     * @internal
     * @version 1.0
     */
    replaceCurrentSymbol(symbol) {
        for (let i = 0; i < this.symbols.length; i++) {
            if (this.symbols[i] === this.currentSymbol) {
                this.symbols[i] = symbol;
            }
        }
        this.currentSymbol = symbol;
    }

    /**
     * Draw the layer at the provided frame position.
     * @param {number} frame 
     * @internal
     * @version 1.0
     */
    drawFrame(frame) {
        if (!this.symbols || this.symbols.length === 0 || this.disabled) {
            return this;
        }
        else if (frame >= this.frameCount) {
            this.currentSymbol.visible = false;
            this.position = this.keyframes.length - 1;
            return this;
        }

        if (this.keyframes[this.position].index > frame) {
            this.position = 0;
        }

        while (this.position < this.keyframes.length - 1 && this.keyframes[this.position + 1].index <= frame) {
            this.position++;
        }

        const symbol = this.symbols[this.position];
        if (this.currentSymbol !== symbol) {;
            this.currentSymbol.visible = false;

            if (symbol.symbolType === MOVIE_SYMBOL_TYPE) {
                symbol.goToInternal(0, true);
            }

            this.currentSymbol = symbol;
        }

        const keyframe = this.keyframes[this.position];
        let x = keyframe.x;
        let y = keyframe.y;
        let pivotX = keyframe.pivotX;
        let pivotY = keyframe.pivotY;
        let scaleX = keyframe.scaleX;
        let scaleY = keyframe.scaleY;
        let skewX = keyframe.skewX;
        let skewY = keyframe.skewY;
        let alpha = keyframe.alpha;

        if (this.position + 1 < this.keyframes.length && keyframe.index !== frame && keyframe.tweened) {
            let step = (frame - keyframe.index) / keyframe.duration;
            let ease = keyframe.ease;

            if (ease !== 0) {
                let time;

                if (ease < 0) {
                    const inverse = 1 - step;
                    time = 1 - inverse * inverse;
                    ease = -ease;
                }
                else {
                    time = step * step;
                }

                step = ease * time + (1 - ease) * step;
            }

            const nextKeyframe = this.keyframes[this.position + 1];
            x += (nextKeyframe.x - keyframe.x) * step;
            y += (nextKeyframe.y - keyframe.y) * step;
            pivotX += (nextKeyframe.pivotX - keyframe.pivotX) * step;
            pivotY += (nextKeyframe.pivotY - keyframe.pivotY) * step;
            scaleX += (nextKeyframe.scaleX - keyframe.scaleX) * step;
            scaleY += (nextKeyframe.scaleY - keyframe.scaleY) * step;
            skewX += (nextKeyframe.skewX - keyframe.skewX) * step;
            skewY += (nextKeyframe.skewY - keyframe.skewY) * step;
            alpha += (nextKeyframe.alpha - keyframe.alpha) * step;
        }

        this.updateSymbol(x, y, pivotX, pivotY, scaleX, scaleY, skewX, skewY, alpha);
        this.currentSymbol.visible = keyframe.visible;
        
        return this;
    }

    /**
     * Used internally to update the layer's current symbol.
     * @param {number} x 
     * @param {number} y 
     * @param {number} pivotX 
     * @param {number} pivotY 
     * @param {number} scaleX 
     * @param {number} scaleY 
     * @param {number} skewX 
     * @param {number} skewY 
     * @param {number} alpha 
     * @internal
     * @version 1.0
     */
    updateSymbol(x, y, pivotX, pivotY, scaleX, scaleY, skewX, skewY, alpha) {
        this.currentSymbol.position.set(x, y);
        this.currentSymbol.pivot.set(pivotX, pivotY);
        this.currentSymbol.skew.set(skewX, skewY);
        this.currentSymbol.scale.set(scaleX, scaleY);
        this.currentSymbol.alpha = alpha;
    }

    /**
     * Used internally to clean up all symbols this layer manages.
     * @internal
     * @version 1.0
     */
    cleanUp() {
        // Push current symbol into the list to make sure it gets properly cleaned up with everything else.
        this.symbols.push(this.currentSymbol); 

        while (this.symbols.length > 0) {
            const symbol = this.symbols.shift();

            for (let i = this.symbols.length; i >= 0; --i) {
                if (this.symbols[i] === symbol) {
                    this.symbols.splice(i, 1);
                }
            }

            if (symbol.symbolType === MOVIE_SYMBOL_TYPE) {
                symbol.cleanUp();
            }

            this.movie.removeChild(symbol);
            this.game.flump.libraries[this.library].storeSymbol(symbol);
        }

        this.position = 0;
        this.disabled = false;
        this.data = undefined;
        this.currentSymbol = undefined;
    }
}