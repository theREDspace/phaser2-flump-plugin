import { Library } from "../library/Library";

/**
 * Phaser 2 plugin used to play Flump animations. This plugin store Flump libraries which can be loaded
 * using Phaser 2's load manager. Simply call `game.load.flumpAtlas(libraryKey, libraryJson, atlasPNGs)` in the 
 * preload function of any state. After library assets are loaded, call `game.flump.addLibrary(libraryKey)` to
 * begin using Flump animations within Phaser 2. Create symbols by calling `game.flump.createSymbol(symbolKey)`
 * or `game.flump.createSymbolFrom(libraryKey, symbolKey)`. Remove a library from the plugin by calling
 * `game.flump.removeLibrary(libraryKey)`.
 * 
 * Please note that removing a library from the plugin will result in that library being destroyed. 
 * Once a library is destroyed it should be consider unusable. Any symbols created from a destroyed library 
 * should also be considered unusable and should be destroyed as well.
 * 
 * @version 1.0
 */
export class FlumpPlugin extends Phaser.Plugin {
    constructor(game, parent) {
        super(game, parent);

        /** 
         * @type {Phaser.Game} 
         * @readonly
         * @version 1.0
         */
        this.game.flump = this.game.flump || this;

        /** 
         * @type {Object.<string, Library>} 
         * @readonly
         * @version 1.0
         */
        this.libraries = {};
    }

    /**
     * Adds a library to the Flump plugin. 
     * All library dependencies must be loaded to cache before adding a library
     * @param {string} key Library key
     * @version 1.0
     */
    addLibrary(key) {
        if (this.libraries[key] !== undefined) {
            throw new Error(`Flump library ${key} already exists.`);
        }
        this.libraries[key] = new Library(this.game, key);
    }

    /**
     * Removes a library from the Flump plugin.
     * This destroys the library. All Movies and Image symbols related to this library should be considered unusable after
     * the library is removed from the plugin. It is good practice to clean up any references to Movies or Image symbols
     * before removing the library it is from.
     * @param {string} key Library key
     * @version 1.0
     */
    removeLibrary(key) {
        if (this.libraries[key] !== undefined) {
            this.libraries[key].destroy();
            delete this.libraries[key];
        }
    }

    /**
     * Check to see if the plugin has a Flump library for the provided key.
     * @param {string} key 
     * @version 1.0
     */
    hasLibrary(key) {
        return this.libraries[key] !== undefined;
    }

    /**
     * Searches all libraries for the first instance of the symbol and returns an instance of it.
     * @param {string} key Symbol key to search for.
     * @version 1.0
     */
    createSymbol(key) {
        // Search for a library that contains a symbol for the provided key.
        for (let i in this.libraries) {
            if (this.libraries[i].hasSymbol(key)) {
                return this.libraries[i].create(key);
            }
        }
        throw new Error(`Cannot find a library that contains a symbol for '${key}'.`);
    }

    /**
     * Creates a new symbol from the specified library.
     * Passing in 'undefined' for the symbol key will return an empty image symbol from the library.
     * @param {string} library Library key
     * @param {string} key Symbol key
     * @version 1.0
     */
    createSymbolFrom(library, key) {
        if (this.libraries[library] === undefined) {
            throw new Error(`Flump library ${library} does not exist. Be sure to call 'game.flump.addLibrary("${library}")' before attempting to create a symbol.`);
        }
        return this.libraries[library].create(key);
    }
}