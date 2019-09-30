import { LayerData } from "../layer/LayerData";

/**
 * MovieData - TODO: desciption
 */
export class MovieData {
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
         * @type {LayerData[]}
         */
        this.layers = json.layers.map(layer=> new LayerData(library, this.id, layer));
    }
}