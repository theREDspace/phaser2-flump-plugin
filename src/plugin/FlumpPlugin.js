import { Library } from "../library/Library";

/**
 * FlumpPlugin - TODO: desciption
 */
export class FlumpPlugin extends Phaser.Plugin {
    constructor(game, parent) {
        super(game, parent);

        /** 
         * @type {Phaser.Game} 
         */
        this.game.flump = this.game.flump || this;

        /** 
         * @type {Object.<string, Library>} 
         */
        this.libraries = {};
    }

    /**
     * Adds a library to the Flump plugin. 
     * All library dependencies must be loaded to cache before adding a library
     * @param {string} key Library key
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
     */
    removeLibrary(key) {
        if (this.libraries[key] !== undefined) {
            this.libraries[key].destroy();
            delete this.libraries[key];
        }
    }

    /**
     * Creates a new symbol from the specified library.
     * @param {string} library Library key
     * @param {string} key Symbol key
     */
    createSymbol(library, key) {
        if (this.libraries[library] === undefined) {
            throw new Error(`Flump library ${library} does not exist. Be sure to call 'game.flump.addLibrary("${library}")' before attempting to create a symbol.`);
        }
        return this.libraries[library].create(key);
    }
}