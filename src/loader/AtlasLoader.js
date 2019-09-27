/**
 * Adds library assets to the file list.
 * @param {string} key 
 * @param {string} libraryJson 
 * @param {string | Array.<string>} textureUrls 
 * @param {boolean} overwrite 
 */
export function atlasLoader(key, libraryJson, textureUrls, overwrite) {
    textureUrls = textureUrls || [];
    textureUrls.forEach(url => {
        const extension = url.substring(url.lastIndexOf("."));
        const file = url.substring(url.lastIndexOf("/") + 1);
        this.addToFileList("image", `${key}/${file}`, url, undefined, overwrite, extension);
    });
    this.addToFileList("json", key, libraryJson, undefined, overwrite, ".json");
    return this;
}

// Inject the Flump atlas loader in to the Phaser.Loader.
Phaser.Loader.prototype.flumpAtlas = atlasLoader;