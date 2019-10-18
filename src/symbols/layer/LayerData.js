import { KeyframeData } from "../keyframe/KeyframeData";

/**
 * Layer information for a Movie symbol.
 * 
 * @version 1.0
 */
export class LayerData {
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */
    get frameCount() {
        if (this.keyframes.length === 0) {
            return 0;
        }
        const keyframe = this.keyframes[this.keyframes.length - 1];
        return keyframe.index + keyframe.duration;
    }

    constructor(library, movie, json) {
        /**
         * Library this layer data is from.
         * @type {string}
         * @version 1.0
         */
        this.library = library;

        /**
         * Movie this layer data is from.
         * @type {string}
         * @version 1.0
         */
        this.movie = movie;

        // Verify the layer data has a name.
        if (json.name === undefined) {
            throw new Error(`Layer data from ${this.library}/${this.movie} is missing the name field.`);
        }
        /**
         * @type {string}
         * @version 1.0
         */
        this.name = json.name;

        /**
         * @type {boolean}
         * @version 1.0
         */
        this.flipbook = json.flipbook || false; 

        // Verify the layer data has a keyframes list.
        if (json.keyframes === undefined) {
            throw new Error(`Layer data from ${this.library}/${this.movie} is missing the layframes field.`);
        }
        /**
         * @type {Array.<KeyframeData>}
         * @version 1.0
         */
        this.keyframes = json.keyframes.map(keyframe => new KeyframeData(keyframe));
    }

    /**
     * Clean up this LayerData.
     * @version 1.0
     */
    destroy() {
        this.keyframes = undefined;
    }

    /**
     * Returns the KeyframeData object for the given frame.
     * @param {number} frame 
     * @version 1.0
     */
    getKeyframeData(frame) {
        let i = 1;
        for (; i < this.keyframes.length && this.keyframes[i].index <= frame; i++);
        return this.keyframes[i - 1];
    }
}