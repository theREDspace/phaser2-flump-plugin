import { LayerData } from "../layer/LayerData";
import { 
    FIRST_FRAME, 
    LAST_FRAME, 
    EMPTY_LABEL 
} from "../../constants/Constants";

/**
 * Movie information for a Movie symbol.
 * 
 * @version 1.0
 */
export class MovieData {
    /**
     * @type {boolean}
     * @version 1.0
     */
    get isFlipbook() { return this.layers.length > 0 && this.layers[0].flipbook; }

    constructor(library, json) {
        /**
         * Reference to which library this movie data is from.
         * @type {string}
         * @version 1.0
         */
        this.library = library;

        /**
         * @type {string}
         * @version 1.0
         */
        this.id = json.id;

        // Verify the movie data has a list of layers.
        if (json.layers === undefined) {
            throw new Error(`Movie data ${this.id} is missing the layers field.`);
        }

        /**
         * @type {Array.<LayerData>}
         * @version 1.0
         */
        this.layers = json.layers.map(layer=> new LayerData(library, this.id, layer));

        /**
         * @type {number}
         * @version 1.0
         */
        this.frameCount = 0;

        // Get the larger frame count from the list of layers.
        this.layers.forEach(layer => this.frameCount = Math.max(this.frameCount, layer.frameCount));

        /**
         * @type {Array.<Array.<string>>}
         * @version 1.0
         */
        this.labels = Array(this.frameCount).fill().map(i => []);

        // Generate the lists of frame labels from each keyframe within the list of layers.
        this.generateFrameLabels();
    }

    /**
     * Clean up this MovieData.
     * @version 1.0
     */
    destroy() {
        this.layers.forEach(layer => layer.destroy());
        this.layers = undefined;
        this.labels = undefined;
    }

    /**
     * Generate the lists of frame labels from each keyframe within the list of layers.
     * @version 1.0
     */
    generateFrameLabels() {
        if (this.labels.length === 0) {
            return;
        }

        // Add the first and last frame labels.
        this.labels[0].push(FIRST_FRAME);
        this.labels[this.frameCount - 1].push(LAST_FRAME);

        // Add additional frame labels from each keyframe on the list of layers.
        this.layers.forEach(layer => {
            layer.keyframes.forEach(keyframe => {
                if (keyframe.label !== EMPTY_LABEL) {
                    this.labels[keyframe.index].push(keyframe.label);
                }
            });
        });
    }
}