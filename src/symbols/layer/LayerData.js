import { KeyframeData } from "../keyframe/KeyframeData";

/**
 * LayerData - TODO: desciption
 */
export class LayerData {
    /**
     * @type {number}
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
         */
        this.library = library;

        /**
         * Movie this layer data is from.
         * @type {string}
         */
        this.movie = movie;

        // Verify the layer data has a name.
        if (json.name === undefined) {
            throw new Error(`Layer data from ${this.library}/${this.movie} is missing the name field.`);
        }
        /**
         * @type {string}
         */
        this.name = json.name;

        /**
         * @type {boolean}
         */
        this.flipbook = json.flipbook === true; // Explicitly check for 'true' in case the json field is undefined.

        // Verify the layer data has a keyframes list.
        if (json.keyframes === undefined) {
            throw new Error(`Layer data from ${this.library}/${this.movie} is missing the layframes field.`);
        }
        /**
         * @type {Array.<KeyframeData>}
         */
        this.keyframes = json.keyframes.map(keyframe => new KeyframeData(keyframe));
    }

    /**
     * Clean up this LayerData.
     */
    destroy() {
        this.keyframes = undefined;
    }

    /**
     * 
     * @param {number} frame 
     */
    getKeyframeData(frame) {
        let i = 1;
        for (; i < this.keyframes.length && this.keyframes[i].index <= frame; i++);
        return this.keyframes[i - 1];
    }
}