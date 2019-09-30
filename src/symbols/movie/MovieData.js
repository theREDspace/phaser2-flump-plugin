import { LayerData } from "../layer/LayerData";
import { 
    FIRST_FRAME, 
    LAST_FRAME, 
    EMPTY_LABEL 
} from "../../constants/Constants";

/**
 * MovieData - TODO: desciption
 */
export class MovieData {
    /**
     * @type {boolean}
     */
    get isFlipbook() { return this.layers.length > 0 && this.layers[0].flipbook; }

    constructor(library, json) {
        /**
         * Reference to which library this movie data is from.
         * @type {string}
         */
        this.library = library;

        /**
         * @type {string}
         */
        this.id = json.id;

        // Verify the movie data has a list of layers.
        if (json.layers === undefined) {
            throw new Error(`Movie data ${this.id} is missing the layers field.`);
        }

        /**
         * @type {Array.<LayerData>}
         */
        this.layers = json.layers.map(layer=> new LayerData(library, this.id, layer));

        /**
         * @type {number}
         */
        this.frameCount = 0;

        // Get the larger frame count from the list of layers.
        this.layers.forEach(layer => this.frameCount = Math.max(this.frameCount, layer.frameCount));

        /**
         * @type {Array.<Array.<string>>}
         */
        this.labels = Array(this.frameCount).fill().map(i => []);

        // Generate the lists of frame labels from each keyframe within the list of layers.
        this.generateFrameLabels();

        console.log(this);
    }

    /**
     * Clean up this MovieData.
     */
    destroy() {
        this.layers.forEach(layer => layer.destroy());
        this.layers = undefined;
        this.labels = undefined;
    }

    /**
     * Generate the lists of frame labels from each keyframe within the list of layers.
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