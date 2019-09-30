import { KeyframeData } from "../keyframe/KeyframeData";

/**
 * LayerData - TODO: desciption
 */
export class LayerData {
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

        // Verify the layer data has a keyframes list.
        if (json.keyframes === undefined) {
            throw new Error(`Layer data from ${this.library}/${this.movie} is missing the layframes field.`);
        }
        this.keyframes = json.keyframes.map(keyframe => new KeyframeData(keyframe));
    }
}