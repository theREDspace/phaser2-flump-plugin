import { Movie } from "../movie/Movie";
import { LayerData } from "./LayerData";
import { KeyframeData } from "../keyframe/KeyframeData";
import { EMPTY_KEYFRAME, MOVIE_SYMBOL_TYPE } from "../../constants/Constants";

/**
 * Layer - TODO: desciption
 */
export class Layer {
    /**
     * @type {string}
     */
    get name() { return this.data.name; }
    /**
     * @type {string}
     */
    get library() { return this.data.library; }
    /**
     * @type {Array.<KeyframeData>}
     */
    get keyframes() { return this.data.keyframes; }
    /**
     * @type {number}
     */
    get frameCount() { return this.data.frameCount; }
    /**
     * @type {boolean}
     */
    get isFlipbook() { return this.data.flipbook; }

    constructor(movie) {
        /**
         * @type {Movie}
         */
        this.movie = movie;

        /**
         * @type {Phaser.Game}
         */
        this.game = movie.game;
        
        /**
         * @type {LayerData}
         */
        this.data = undefined;

        /**
         * @type {Movie | FlumpSymbol}
         */
        this.currentSymbol = undefined;

        /**
         * @type {Array.<FlumpSymbol | Movie}
         */
        this.symbols = [];

        /**
         * @type {number}
         */
        this.symbolCount = 0;

        /**
         * @type {boolean}
         */
        this.disabled = false;

        /**
         * @type {number}
         */
        this.position = 0;
    }

    /**
     * Destroyings the layer and all its symbols.
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
                    // Reuse this symbol.
                    symbol = this.symbols[i - 1];
                }
                else {
                    this.symbolCount++;

                    if (keyframe.ref === EMPTY_KEYFRAME) {
                        symbol = this.game.flump.createSymbolFrom(this.library);
                    }
                    else {
                        symbol = this.game.flump.createSymbolFrom(this.library, keyframe.ref);
                        if (symbol.flumpSymbolType === MOVIE_SYMBOL_TYPE) {
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

        return this;
    }

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
     */
    drawFrame(frame) {
        if (this.symbols.length === 0 || this.disabled) {
            return;
        }
        else if (frame >= this.frameCount) {
            this.currentSymbol.visible = false;
            this.position = 0;
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

            if (symbol.flumpSymbolType === MOVIE_SYMBOL_TYPE) {
                symbol.addedToLayer();
            }

            this.currentSymbol = symbol;
        }

        const keyframe = this.keyframes[this.position];
        let x, y, pivotX, pivotY, scaleX, scaleY, skewX, skewY, alpha;

        if (this.position === this.keyframes.length - 1 || keyframe.index === frame || !keyframe.tweened) {
            x = keyframe.x;
            y = keyframe.y;
            pivotX = keyframe.pivotX;
            pivotY = keyframe.pivotY;
            scaleX = keyframe.scaleX;
            scaleY = keyframe.scaleY;
            skewX = keyframe.skewX;
            skewY = keyframe.skewY;
            alpha = keyframe.alpha;
        }
        else {
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
            x = keyframe.x + (nextKeyframe.x - keyframe.x) * step;
            y = keyframe.y + (nextKeyframe.y - keyframe.y) * step;
            pivotX = keyframe.pivotX + (nextKeyframe.pivotX - keyframe.pivotX) * step;
            pivotY = keyframe.pivotY + (nextKeyframe.pivotY - keyframe.pivotY) * step;
            scaleX = keyframe.scaleX + (nextKeyframe.scaleX - keyframe.scaleX) * step;
            scaleY = keyframe.scaleY + (nextKeyframe.scaleY - keyframe.scaleY) * step;
            skewX = keyframe.skewX + (nextKeyframe.skewX - keyframe.skewX) * step;
            skewY = keyframe.skewY + (nextKeyframe.skewY - keyframe.skewY) * step;
            alpha = keyframe.alpha + (nextKeyframe.alpha - keyframe.alpha) * step;
        }

        this.updateSymbol(x, y, pivotX, pivotY, scaleX, scaleY, skewX, skewY, alpha);
        this.currentSymbol.visible = keyframe.visible;
    }

    updateSymbol(x, y, pivotX, pivotY, scaleX, scaleY, skewX, skewY, alpha) {
        this.currentSymbol.position.set(x, y);
        this.currentSymbol.pivot.set(pivotX, pivotY);
        this.currentSymbol.skew.set(skewX, skewY);
        this.currentSymbol.scale.set(scaleX, scaleY);
        this.currentSymbol.alpha = alpha;
    }

    cleanUp() {
        this.symbols.forEach(symbol => {
            this.game.flump.libraries[this.library].storeSymbol(symbol)
            this.movie.removeChild(symbol);
        });
        this.symbols = [];
    }
}