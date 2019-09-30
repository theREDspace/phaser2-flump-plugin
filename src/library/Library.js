import { Movie } from "../symbols/movie/Movie";
import { MovieData } from "../symbols/movie/MovieData";

/**
 * Library - TODO: desciption
 */
export class Library {
    constructor(game, key) {
        /** @type {Phaser.Game} */
        this.game = game;

        /** @type {string} */
        this.key = key;

        /** 
         * A map of what symbol belongs to which atlas png.
         * @type {Object.<string, string>}
         */
        this.symbolAtlasMap = {};

        /**
         * @type {Object.<string, Array.<Movie | Phaser.Image>}
         */
        this.symbolPools = {};

        // Verify the library.json file for this library has been loaded to cache.
        if (!this.game.cache.checkJSONKey(key)) {
            throw new Error(`Cannot find library JSON for ${key} in game cache.`);
        }

        /** @type {Object.<string, any} */
        this.data = this.game.cache.getJSON(key);

        // Verify the movies list exits in the library's data.
        if (this.data.movies === undefined) {
            throw new Error(`Library data for ${this.key} is missing the 'movies' field.`);
        }

        /**
         * @type {Object.<string, MovieData}
         */
        this.movieMap = {};
        this.data.movies.forEach((movie, i) => {
            if (movie.id === undefined) {
                throw new Error(`Movie ${i} in ${this.key} is missing the id field.`);
            }
            this.movieMap[movie.id] = new MovieData(this.key, movie);
        });

        // Generate the frame data for each texture symbol in this library.
        this.generateFrameData();
    }

    /**
     * Destroys and cleans up this library.
     */
    destroy() {
        this.game = undefined;
        this.data = undefined;
        this.symbolAtlasMap = undefined;

        for (let key in this.movieMap) {
            this.movieMap[key].destroy();
        }
        this.movieMap = undefined;
    }

    /**
     * Creates either a Movie or Image symbol from this library.
     * @param {string} key Symbol key
     */
    create(key) {
        
    }

    /**
     * Generates the frame data for the loaded library atlas pngs and updates the cached image data.
     */
    generateFrameData() {
        const textureGroups = this.data.textureGroups;
        if (textureGroups === undefined) {
            throw new Error(`Library JSON for ${this.key} is missing the 'textureGroups' field (Array).`);
        }

        // Begin generating frame data for each texture group.
        textureGroups.forEach((group, i) => {
            if (group.atlases === undefined) {
                throw new Error(`Texture group ${i} for ${this.key} is missing the 'atlases' field (Array).`);
            }

            group.atlases.forEach((atlas, j) => {
                if (atlas.file === undefined) {
                    throw new Error(`Atlas ${j} in texture group ${i} for ${this.key} is missing the 'file' field (string).`);
                }
                if (atlas.textures === undefined) {
                    throw new Error(`Atlas ${j} in texture group ${i} for ${this.key} is missing the 'textures' field (Array).`);
                }

                const imgKey = `${this.key}/${atlas.file}`;
                // Verify the atlas png has been loaded.
                if (!this.game.cache.checkImageKey(imgKey)) {
                    throw new Error(`Cannot find image ${imgKey} in game cache.`);
                }

                const frameData = new Phaser.FrameData();
                atlas.textures.forEach((texture, k) => {
                    if (texture.symbol === undefined) {
                        throw new Error(`Texture ${k} on atlas ${j} in texture group ${i} for ${this.key} is missing the 'symbol' field (string).`);
                    }
                    if (texture.rect === undefined) {
                        throw new Error(`Texture ${k} on atlas ${j} in texture group ${i} for ${this.key} is missing the 'rect' field (Array).`);
                    }
                    frameData.addFrame(new Phaser.Frame(k, texture.rect[0], texture.rect[1], texture.rect[2], texture.rect[3], texture.symbol));

                    // Set a reference to which atlas this texture symbol is in.
                    this.symbolAtlasMap[texture.symbol] = imgKey;
                });

                // Replace the current frame data on the loaded atlas image with the frame data from the library's json data.
                const image = this.game.cache._cache.image[imgKey];
                image.frameData = frameData;
                image.frame = frameData.getFrame(0);
            });
        });
    }
}