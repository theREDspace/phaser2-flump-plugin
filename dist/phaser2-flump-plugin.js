(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Flump"] = factory();
	else
		root["Flump"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/Constants.js":
/*!************************************!*\
  !*** ./src/constants/Constants.js ***!
  \************************************/
/*! exports provided: EMPTY_KEYFRAME, EMPTY_LABEL, FIRST_FRAME, LAST_FRAME, EMPTY_SYMBOL_TYPE, MOVIE_SYMBOL_TYPE, IMAGE_SYMBOL_TYPE, STOPPED, PLAYING_CHILDREN_ONLY, PLAYING, NO_FRAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_KEYFRAME", function() { return EMPTY_KEYFRAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_LABEL", function() { return EMPTY_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_FRAME", function() { return FIRST_FRAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_FRAME", function() { return LAST_FRAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_SYMBOL_TYPE", function() { return EMPTY_SYMBOL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_SYMBOL_TYPE", function() { return MOVIE_SYMBOL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_SYMBOL_TYPE", function() { return IMAGE_SYMBOL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOPPED", function() { return STOPPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYING_CHILDREN_ONLY", function() { return PLAYING_CHILDREN_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYING", function() { return PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_FRAME", function() { return NO_FRAME; });
/**
 * Represents the name of an empty keyframe.
 * @type {string}
 * @version 1.0
 */
var EMPTY_KEYFRAME = "<Empty Keyframe>";
/**
 * String used for empty frame labels.
 * @type {string}
 * @version 1.0
 */

var EMPTY_LABEL = "";
/**
 * Frame label used to indicate the first frame of a Movie.
 * @type {string}
 * @version 1.0
 */

var FIRST_FRAME = "<First Frame>";
/**
 * Frame label used to indicate the last frame of a Movie.
 * @type {string}
 * @version 1.0
 */

var LAST_FRAME = "<Last Frame>";
/**
 * Name used to indicate an empty symbol type.
 * @type {string}
 * @version 1.0
 */

var EMPTY_SYMBOL_TYPE = "empty";
/**
 * Name used to indicate a Movie symbol type.
 * @type {string}
 * @version 1.0
 */

var MOVIE_SYMBOL_TYPE = "movie";
/**
 * Name used to indicate an Image symbol type.
 * @type {string}
 * @version 1.0
 */

var IMAGE_SYMBOL_TYPE = "image";
/**
 * The stopped Movie symbol state.
 * @type {string}
 * @version 1.0
 */

var STOPPED = "STOPPED";
/**
 * The playing children only Movie symbol state.
 * @type {string}
 * @version 1.0
 */

var PLAYING_CHILDREN_ONLY = "PLAYING_CHILDREN_ONLY";
/**
 * The playing Movie symbol state.
 * @type {string}
 * @version 1.0
 */

var PLAYING = "PLAYING";
/**
 * Placeholder frame index to indicate no frame.
 * @type {string}
 * @version 1.0
 */

var NO_FRAME = -1;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: atlasLoader, FlumpPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader_AtlasLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/AtlasLoader */ "./src/loader/AtlasLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "atlasLoader", function() { return _loader_AtlasLoader__WEBPACK_IMPORTED_MODULE_0__["atlasLoader"]; });

/* harmony import */ var _plugin_FlumpPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin/FlumpPlugin */ "./src/plugin/FlumpPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlumpPlugin", function() { return _plugin_FlumpPlugin__WEBPACK_IMPORTED_MODULE_1__["FlumpPlugin"]; });




/***/ }),

/***/ "./src/library/Library.js":
/*!********************************!*\
  !*** ./src/library/Library.js ***!
  \********************************/
/*! exports provided: Library */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Library", function() { return Library; });
/* harmony import */ var _symbols_movie_Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbols/movie/Movie */ "./src/symbols/movie/Movie.js");
/* harmony import */ var _symbols_movie_MovieData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbols/movie/MovieData */ "./src/symbols/movie/MovieData.js");
/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/Constants */ "./src/constants/Constants.js");
/* harmony import */ var _symbols_Symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../symbols/Symbol */ "./src/symbols/Symbol.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 * Flump library manager that stores symbol information for creating Flump movies. Symbol data stored in this library
 * is unique to the loaded 'library.json' file. All symbol names within this library should be unique to avoid naming collisions.
 * 
 * A library also pools Symbol objects that are not currently in use. When a new Movie symbol is requested from the library,
 * symbols will be pulled from the pools before new ones are created. When a Movie symbol is cleaned up, all of its symbols are
 * returned to the library and are stored for future use.
 * 
 * When a library is destroyed, all stored symbols are also destroyed. Any attempt to store symbols after the library has been
 * destroyed will result in an error. Existing Movie symbols may still play after the library is destroyed, however changing 
 * the animation in the Movie will result in the Movie attempting to access the library. It is best practice to only destroy 
 * a library when you know it will not be needed, and destroying any symbols that may be living outside of the library 
 * still in use.
 * 
 * @version 1.0
 */

var Library =
/*#__PURE__*/
function () {
  _createClass(Library, [{
    key: "frameRate",

    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */
    get: function get() {
      if (this.data.frameRate === undefined) {
        throw new Error("".concat(this.key, " is missing the 'frameRate' field in its library.json file."));
      }

      return this.data.frameRate;
    }
  }]);

  function Library(game, key) {
    var _this$symbolPools,
        _this = this;

    _classCallCheck(this, Library);

    /**
     * @type {Phaser.Game}
     * @readonly
     * @version 1.0
     */
    this.game = game;
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */

    this.key = key;
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */

    this.isDestroyed = false;
    /**
     * A map of what symbol belongs to which atlas png.
     * @type {Object.<string, string>}
     * @readonly
     * @version 1.0
     */

    this.imageAtlasMap = {};
    /**
     * A list of atlas names for this library.
     * @type {Array.<string>}
     * @readonly
     * @version 1.0
     */

    this.atlases = [];
    /**
     * Storage for unused symbols.
     * @type {Object.<string, Array.<Symbol> | Object.<string, Array.<Symbol | Movie>>>}
     * @readonly
     * @version 1.0
     */

    this.symbolPools = (_this$symbolPools = {}, _defineProperty(_this$symbolPools, _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["EMPTY_SYMBOL_TYPE"], []), _defineProperty(_this$symbolPools, _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_SYMBOL_TYPE"], []), _defineProperty(_this$symbolPools, _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MOVIE_SYMBOL_TYPE"], []), _this$symbolPools); // Verify the library.json file for this library has been loaded to cache.

    if (!this.game.cache.checkJSONKey(key)) {
      throw new Error("Cannot find library JSON for ".concat(key, " in game cache."));
    }
    /** 
     * @type {Object.<string, any}
     * @readonly
     * @version 1.0
     */


    this.data = this.game.cache.getJSON(key); // Verify the movies list exits in the library's data.

    if (this.data.movies === undefined) {
      throw new Error("Library data for ".concat(this.key, " is missing the 'movies' field."));
    }
    /**
     * @type {Object.<string, MovieData}
     * @readonly
     * @version 1.0
     */


    this.movieMap = {};
    this.data.movies.forEach(function (movie, i) {
      if (movie.id === undefined) {
        throw new Error("Movie ".concat(i, " in ").concat(_this.key, " is missing the id field."));
      }

      _this.movieMap[movie.id] = new _symbols_movie_MovieData__WEBPACK_IMPORTED_MODULE_1__["MovieData"](_this.key, movie);
    }); // Generate the frame data for each texture symbol in this library.

    this.generateFrameData();
  }
  /**
   * Destroys and cleans up this library
   * @param {boolean} unloadDependencies
   * @version 1.0
   */


  _createClass(Library, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      var unloadDependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isDestroyed) {
        // Ideally we will never get here, however throw an error in case the user tries to use the library after it was removed from the plugin.
        throw new Error("".concat(this.key, " has already been destroyed."));
      } // Clean up MovieData objects.


      for (var key in this.movieMap) {
        this.movieMap[key].destroy();
      }

      this.movieMap = undefined; // Clean up the pooled library symbols

      while (this.symbolPools[_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["EMPTY_SYMBOL_TYPE"]].length > 0) {
        this.symbolPools[_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["EMPTY_SYMBOL_TYPE"]].shift().destroy();
      }

      while (this.symbolPools[_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_SYMBOL_TYPE"]].length > 0) {
        this.symbolPools[_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_SYMBOL_TYPE"]].shift().destroy();
      }

      while (this.symbolPools[_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MOVIE_SYMBOL_TYPE"]].length > 0) {
        this.symbolPools[_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MOVIE_SYMBOL_TYPE"]].shift().destroy();
      }

      this.symbolPools = undefined; // If specified, unload cached library dependencies.

      if (unloadDependencies) {
        this.game.cache.removeJSON(this.key);
        this.atlases.forEach(function (atlas) {
          return _this2.game.cache.removeImage(atlas, true);
        });
      } // Clean up references.


      this.game = undefined;
      this.data = undefined;
      this.imageAtlasMap = undefined;
    }
    /**
     * Creates either a Movie or Image symbol from this library.
     * @param {string} key Symbol key
     * @return {Movie | Symbol}
     * @version 1.0
     */

  }, {
    key: "create",
    value: function create(key) {
      if (key === undefined) {
        return this.getFreeSymbol(_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["EMPTY_SYMBOL_TYPE"]);
      } else if (this.imageAtlasMap[key] !== undefined) {
        return this.getFreeSymbol(_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_SYMBOL_TYPE"], key);
      } else if (this.movieMap[key] !== undefined) {
        return this.getFreeSymbol(_constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MOVIE_SYMBOL_TYPE"], key);
      }

      throw new Error("Cannot find symbol ".concat(key, " in ").concat(this.key, "."));
    }
    /**
     * Check to see if this library contains a symbol for the provided key.
     * @param {string} key 
     * @version 1.0
     */

  }, {
    key: "hasSymbol",
    value: function hasSymbol(key) {
      if (this.isDestroyed) {
        // Ideally we will never get here, however throw an error in case the user tries to use the library after it was removed from the plugin.
        throw new Error("".concat(this.key, " has been destroyed and has no symbols."));
      }

      return this.hasImageSymbol(key) || this.hasMovieSymbol(key);
    }
    /**
     * Check to see if this library contains the provided Movie key.
     * @param {string} key 
     * @version 1.0
     */

  }, {
    key: "hasMovieSymbol",
    value: function hasMovieSymbol(key) {
      if (this.isDestroyed) {
        // Ideally we will never get here, however throw an error in case the user tries to use the library after it was removed from the plugin.
        throw new Error("".concat(this.key, " has been destroyed and has no symbols."));
      }

      return this.movieMap[key] !== undefined;
    }
    /**
     * Check to see if this library contains the provided Image key.
     * @param {string} key 
     * @version 1.0
     */

  }, {
    key: "hasImageSymbol",
    value: function hasImageSymbol(key) {
      if (this.isDestroyed) {
        // Ideally we will never get here, however throw an error in case the user tries to use the library after it was removed from the plugin.
        throw new Error("".concat(this.key, " has been destroyed and has no symbols."));
      }

      return this.imageAtlasMap[key] !== undefined;
    }
    /**
     * Returns the MovieData object for the provided Movie key.
     * @param {string} key 
     * @version 1.0
     */

  }, {
    key: "getMovieData",
    value: function getMovieData(key) {
      if (!this.hasMovieSymbol(key)) {
        throw new Error("".concat(this.key, " does not contain MovieData for ").concat(key, "."));
      }

      return this.movieMap[key];
    }
    /**
     * Returns a free symbol from a pool, or creates a new library symbol.
     * @param {string} type 
     * @param {string} key 
     * @version 1.0
     */

  }, {
    key: "getFreeSymbol",
    value: function getFreeSymbol(type, key) {
      if (this.isDestroyed) {
        // Ideally we will never get here, however throw an error in case the user tries to use the library after it was removed from the plugin.
        throw new Error("".concat(this.key, " has been destroyed and has no symbols."));
      }

      if (type !== _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["EMPTY_SYMBOL_TYPE"] && type !== _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_SYMBOL_TYPE"] && type !== _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MOVIE_SYMBOL_TYPE"]) {
        throw new Error("Cannot get the symbol ".concat(key, " in ").concat(this.key, "."));
      }

      var symbolKey = key || _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["EMPTY_SYMBOL_TYPE"];
      var symbol;
      this.symbolPools[type] = this.symbolPools[type] || [];

      if (this.symbolPools[type].length > 0) {
        // Pull a symbol from a pool and restore it for reuse.
        symbol = this.symbolPools[type].shift().restore();
      } else {
        // No available symbols in the pools, so now we allocate a new symbol.
        if (type === _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MOVIE_SYMBOL_TYPE"]) {
          symbol = new _symbols_movie_Movie__WEBPACK_IMPORTED_MODULE_0__["Movie"](this.game, this.frameRate); // Allocation
        } else {
          symbol = new _symbols_Symbol__WEBPACK_IMPORTED_MODULE_3__["Symbol"](this.game); // Allocation
        }
      }

      if (type === _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_SYMBOL_TYPE"]) {
        // Load the image data into this symbol.
        symbol.loadTexture(this.imageAtlasMap[key], key);
      } else if (type === _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MOVIE_SYMBOL_TYPE"]) {
        // Set this movie up with the movie data.
        symbol.setup(this.movieMap[key]);
      }

      symbol.symbolType = type;
      symbol.symbolKey = symbolKey;
      symbol.symbolLibrary = this.key; // Return the symbol.

      return symbol;
    }
    /**
     * Store the provided symbol in this library.
     * Only symbols created from this library using the Library.create() function can be store in this library.
     * @param {Symbol | Movie} symbol 
     * @version 1.0 - Added
     */

  }, {
    key: "storeSymbol",
    value: function storeSymbol(symbol) {
      if (this.isDestroyed) {
        // Ideally we will never get here, however throw an error in case the user tries to use the library after it was removed from the plugin.
        throw new Error("".concat(this.key, " has been destroyed and no longer can store symbols. Use Symbol.destroy() instead."));
      }

      if (symbol.symbolLibrary === undefined || symbol.symbolLibrary !== this.key) {
        throw new Error("The provided symbol does not belong to this library.");
      }

      if (symbol.symbolType !== _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["EMPTY_SYMBOL_TYPE"] && symbol.symbolType !== _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_SYMBOL_TYPE"] && symbol.symbolType !== _constants_Constants__WEBPACK_IMPORTED_MODULE_2__["MOVIE_SYMBOL_TYPE"]) {
        throw new Error("Cannot store the symbol ".concat(symbol.symbolKey, " in ").concat(this.key, "."));
      }

      if (this.symbolPools[symbol.symbolType].indexOf(symbol) >= 0) {
        throw new Error("Attempting to store a symbol that is already in storage. Symbols in storages should not be referenced.");
      }

      this.symbolPools[symbol.symbolType].push(symbol);
    }
    /**
     * Generates the frame data for the loaded library atlas pngs and updates the cached image data.
     * @internal
     * @version 1.0
     */

  }, {
    key: "generateFrameData",
    value: function generateFrameData() {
      var _this3 = this;

      if (this.isDestroyed) {
        return;
      }

      var textureGroups = this.data.textureGroups;

      if (textureGroups === undefined) {
        throw new Error("Library JSON for ".concat(this.key, " is missing the 'textureGroups' field (Array)."));
      } // Begin generating frame data for each texture group.


      textureGroups.forEach(function (group, i) {
        if (group.atlases === undefined) {
          throw new Error("Texture group ".concat(i, " for ").concat(_this3.key, " is missing the 'atlases' field (Array)."));
        }

        group.atlases.forEach(function (atlas, j) {
          if (atlas.file === undefined) {
            throw new Error("Atlas ".concat(j, " in texture group ").concat(i, " for ").concat(_this3.key, " is missing the 'file' field (string)."));
          }

          if (atlas.textures === undefined) {
            throw new Error("Atlas ".concat(j, " in texture group ").concat(i, " for ").concat(_this3.key, " is missing the 'textures' field (Array)."));
          }

          var imgKey = "".concat(_this3.key, "/").concat(atlas.file); // Verify the atlas png has been loaded.

          if (!_this3.game.cache.checkImageKey(imgKey)) {
            throw new Error("Cannot find image ".concat(imgKey, " in game cache."));
          } // Add this atlas key to the library's atlas list.


          _this3.atlases.push(imgKey);

          var frameData = new Phaser.FrameData();
          atlas.textures.forEach(function (texture, k) {
            if (texture.symbol === undefined) {
              throw new Error("Texture ".concat(k, " on atlas ").concat(j, " in texture group ").concat(i, " for ").concat(_this3.key, " is missing the 'symbol' field (string)."));
            }

            if (texture.rect === undefined) {
              throw new Error("Texture ".concat(k, " on atlas ").concat(j, " in texture group ").concat(i, " for ").concat(_this3.key, " is missing the 'rect' field (Array)."));
            }

            frameData.addFrame(new Phaser.Frame(k, texture.rect[0], texture.rect[1], texture.rect[2], texture.rect[3], texture.symbol)); // Set a reference to which atlas this texture symbol is in.

            _this3.imageAtlasMap[texture.symbol] = imgKey;
          }); // Replace the current frame data on the loaded atlas image with the frame data from the library's json data.

          var image = _this3.game.cache._cache.image[imgKey];
          image.frameData = frameData;
          image.frame = frameData.getFrame(0);
        });
      });
    }
  }]);

  return Library;
}();

/***/ }),

/***/ "./src/loader/AtlasLoader.js":
/*!***********************************!*\
  !*** ./src/loader/AtlasLoader.js ***!
  \***********************************/
/*! exports provided: atlasLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atlasLoader", function() { return atlasLoader; });
/**
 * Adds library assets to the file list.
 * @param {string} key 
 * @param {string} libraryJson 
 * @param {string | Array.<string>} textureUrls 
 * @param {boolean} overwrite 
 * @version 1.0
 */
function atlasLoader(key, libraryJson, textureUrls, overwrite) {
  var _this = this;

  textureUrls = textureUrls || [];

  if (!Array.isArray(textureUrls)) {
    textureUrls = [textureUrls];
  }

  textureUrls.forEach(function (url) {
    var extension = url.substring(url.lastIndexOf("."));
    var file = url.substring(url.lastIndexOf("/") + 1);

    _this.addToFileList("image", "".concat(key, "/").concat(file), url, undefined, overwrite, extension);
  });
  this.addToFileList("json", key, libraryJson, undefined, overwrite, ".json");
  return this;
} // Inject the Flump atlas loader in to the Phaser.Loader.

Phaser.Loader.prototype.flumpAtlas = atlasLoader;

/***/ }),

/***/ "./src/plugin/FlumpPlugin.js":
/*!***********************************!*\
  !*** ./src/plugin/FlumpPlugin.js ***!
  \***********************************/
/*! exports provided: FlumpPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlumpPlugin", function() { return FlumpPlugin; });
/* harmony import */ var _library_Library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/Library */ "./src/library/Library.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


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

var FlumpPlugin =
/*#__PURE__*/
function (_Phaser$Plugin) {
  _inherits(FlumpPlugin, _Phaser$Plugin);

  function FlumpPlugin(game, parent) {
    var _this;

    _classCallCheck(this, FlumpPlugin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlumpPlugin).call(this, game, parent));
    /** 
     * @type {Phaser.Game} 
     * @readonly
     * @version 1.0
     */

    _this.game.flump = _this.game.flump || _assertThisInitialized(_this);
    /** 
     * @type {Object.<string, Library>} 
     * @readonly
     * @version 1.0
     */

    _this.libraries = {};
    return _this;
  }
  /**
   * Adds a library to the Flump plugin. 
   * All library dependencies must be loaded to cache before adding a library
   * @param {string} key Library key
   * @version 1.0
   */


  _createClass(FlumpPlugin, [{
    key: "addLibrary",
    value: function addLibrary(key) {
      if (this.libraries[key] !== undefined) {
        throw new Error("Flump library ".concat(key, " already exists."));
      }

      this.libraries[key] = new _library_Library__WEBPACK_IMPORTED_MODULE_0__["Library"](this.game, key);
    }
    /**
     * Removes a library from the Flump plugin.
     * This destroys the library. All Movies and Image symbols related to this library should be considered unusable after
     * the library is removed from the plugin. It is good practice to clean up any references to Movies or Image symbols
     * before removing the library it is from.
     * @param {string} key Library key
     * @version 1.0
     */

  }, {
    key: "removeLibrary",
    value: function removeLibrary(key) {
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

  }, {
    key: "hasLibrary",
    value: function hasLibrary(key) {
      return this.libraries[key] !== undefined;
    }
    /**
     * Searches all libraries for the first instance of the symbol and returns an instance of it.
     * @param {string} key Symbol key to search for.
     * @version 1.0
     */

  }, {
    key: "createSymbol",
    value: function createSymbol(key) {
      // Search for a library that contains a symbol for the provided key.
      for (var i in this.libraries) {
        if (this.libraries[i].hasSymbol(key)) {
          return this.libraries[i].create(key);
        }
      }

      throw new Error("Cannot find a library that contains a symbol for '".concat(key, "'."));
    }
    /**
     * Creates a new symbol from the specified library.
     * Passing in 'undefined' for the symbol key will return an empty image symbol from the library.
     * @param {string} library Library key
     * @param {string} key Symbol key
     * @version 1.0
     */

  }, {
    key: "createSymbolFrom",
    value: function createSymbolFrom(library, key) {
      if (this.libraries[library] === undefined) {
        throw new Error("Flump library ".concat(library, " does not exist. Be sure to call 'game.flump.addLibrary(\"").concat(library, "\")' before attempting to create a symbol."));
      }

      return this.libraries[library].create(key);
    }
  }]);

  return FlumpPlugin;
}(Phaser.Plugin);

/***/ }),

/***/ "./src/symbols/Symbol.js":
/*!*******************************!*\
  !*** ./src/symbols/Symbol.js ***!
  \*******************************/
/*! exports provided: Symbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _Symbol; });
/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/Constants */ "./src/constants/Constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Flump symbol. This is the base symbol class for the Flump plugin. It's used to store some symbol specific
 * information that will allow the plugin to know how to manage this symbol. It's also used to implement
 * the ability to skew a `Phaser.Image` object. Its used as a generic image symbol and is extended by
 * `Movie`. 
 * 
 * @version 1.0
 */

var _Symbol =
/*#__PURE__*/
function (_Phaser$Image) {
  _inherits(_Symbol, _Phaser$Image);

  function _Symbol(game, x, y, key, frame) {
    var _this;

    _classCallCheck(this, _Symbol);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_Symbol).call(this, game, x, y, key, frame));
    /**
     * @type {string}
     * @version 1.0
     */

    _this.symbolType = undefined;
    /**
     * @type {string}
     * @version 1.0
     */

    _this.symbolKey = undefined;
    /**
     * @type {string}
     * @version 1.0
     */

    _this.symbolLibrary = undefined;
    /**
     * @type {Phaser.Point}
     * @version 1.0
     */

    _this.skew = new Phaser.Point(0, 0);
    return _this;
  }
  /**
   * Destroys this symbol object
   * @param {boolean} destroyChildren 
   * @version 1.0
   */


  _createClass(_Symbol, [{
    key: "destroy",
    value: function destroy(destroyChildren) {
      this.skew = undefined;

      _get(_getPrototypeOf(_Symbol.prototype), "destroy", this).call(this, destroyChildren);
    }
    /**
     * Restores the Symbol to its default state.
     * @internal
     * @version 1.0
     */

  }, {
    key: "restore",
    value: function restore() {
      this.position.set(0, 0);
      this.pivot.set(0, 0);
      this.skew.set(0, 0);
      this.scale.set(1, 1);
      this.alpha = 1;
      this.visible = true;
      return this;
    }
    /**
     * Phaser 2's alias for `PIXI.DisplayObject.updateTransform`.
     * @param {PIXI.DisplayObject} parent 
     * @internal
     * @version 1.0
     */

  }, {
    key: "displayObjectUpdateTransform",
    value: function displayObjectUpdateTransform(parent) {
      if (this.symbolType === _constants_Constants__WEBPACK_IMPORTED_MODULE_0__["MOVIE_SYMBOL_TYPE"]) {
        return this.calculateTransform(parent);
      }

      return _get(_getPrototypeOf(_Symbol.prototype), "displayObjectUpdateTransform", this).call(this, parent);
    }
    /**
     * Phaser 2's overriden version of `PIXI.DisplayObject.updateTransform`.
     * @param {PIXI.DisplayObject} parent 
     * @internal
     * @version 1.0
     */

  }, {
    key: "updateTransform",
    value: function updateTransform(parent) {
      if (this.symbolType === _constants_Constants__WEBPACK_IMPORTED_MODULE_0__["IMAGE_SYMBOL_TYPE"]) {
        return this.calculateTransform(parent);
      }

      return _get(_getPrototypeOf(_Symbol.prototype), "updateTransform", this).call(this, parent);
    }
    /**
     * Calculates the rendering position, scale, rotation and alpha for this symbol.
     * @param {PIXI.DisplayObject} parent 
     * @internal
     * @version 1.0
     */

  }, {
    key: "calculateTransform",
    value: function calculateTransform(parent) {
      if (!parent && !this.parent && !this.game) {
        return this;
      }

      var p = this.parent;

      if (parent) {
        p = parent;
      } else if (!this.parent) {
        p = this.game.world;
      } // create some matrix refs for easy access


      var pt = p.worldTransform;
      var wt = this.worldTransform; // temporary matrix variables

      var a, b, c, d, tx, ty; // so if rotation is between 0 then we can simplify the multiplication process..

      if (this.rotation % PIXI.PI_2 || this.skew.x || this.skew.y) {
        // get the matrix values of the displayobject based on its transform properties..
        a = this.scale.x * Math.cos(this.rotation + this.skew.y);
        b = this.scale.x * Math.sin(this.rotation + this.skew.y);
        c = this.scale.y * Math.sin(-this.rotation - this.skew.x);
        d = this.scale.y * Math.cos(this.rotation + this.skew.x);
        tx = this.position.x;
        ty = this.position.y; // check for pivot.. not often used so geared towards that fact!

        if (this.pivot.x || this.pivot.y) {
          tx -= this.pivot.x * a + this.pivot.y * c;
          ty -= this.pivot.x * b + this.pivot.y * d;
        } // concat the parent matrix with the objects transform.


        wt.a = a * pt.a + b * pt.c;
        wt.b = a * pt.b + b * pt.d;
        wt.c = c * pt.a + d * pt.c;
        wt.d = c * pt.b + d * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
      } else {
        // lets do the fast version as we know there is no rotation..
        a = this.scale.x;
        d = this.scale.y;
        tx = this.position.x - this.pivot.x * a;
        ty = this.position.y - this.pivot.y * d;
        wt.a = a * pt.a;
        wt.b = a * pt.b;
        wt.c = d * pt.c;
        wt.d = d * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
      } // multiply the alphas..

      /** @ignore */


      this.worldAlpha = this.alpha * p.worldAlpha;
      this.worldPosition.set(wt.tx, wt.ty);
      this.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
      /** @ignore */

      this.worldRotation = Math.atan2(-wt.c, wt.d); // reset the bounds each time this is called!

      this._currentBounds = null; //  Custom callback?

      if (this.transformCallback) {
        this.transformCallback.call(this.transformCallbackContext, wt, pt);
      }

      return this;
    }
  }]);

  return _Symbol;
}(Phaser.Image);



/***/ }),

/***/ "./src/symbols/keyframe/KeyframeData.js":
/*!**********************************************!*\
  !*** ./src/symbols/keyframe/KeyframeData.js ***!
  \**********************************************/
/*! exports provided: KeyframeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyframeData", function() { return KeyframeData; });
/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/Constants */ "./src/constants/Constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Symbol state information for an individual keyframe of an animation.
 * 
 * @version 1.0
 */

var KeyframeData =
/*#__PURE__*/
function () {
  _createClass(KeyframeData, [{
    key: "isEmpty",
    get: function get() {
      return this.ref === _constants_Constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_KEYFRAME"];
    }
  }, {
    key: "rotation",
    get: function get() {
      return this.skewX;
    }
  }]);

  function KeyframeData(json) {
    _classCallCheck(this, KeyframeData);

    if (json.index === undefined) {
      throw new Error("Keyframe is missing index field.");
    }
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */


    this.index = json.index;

    if (json.duration === undefined) {
      throw new Error("Keyframe is missing duration field");
    }
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */


    this.duration = json.duration;
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */

    this.ref = json.ref === undefined ? _constants_Constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_KEYFRAME"] : json.ref;
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.alpha = json.alpha === undefined ? 1 : json.alpha;
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */

    this.visible = json.visible === undefined ? true : json.visible;
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.ease = json.ease === undefined ? 0 : json.ease;
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */

    this.tweened = json.tweened === undefined ? true : json.tweened;
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */

    this.label = json.label === undefined ? _constants_Constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_LABEL"] : json.label;
    var loc = json.loc === undefined ? [0, 0] : json.loc;
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.x = loc[0];
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.y = loc[1];
    var scale = json.scale === undefined ? [1, 1] : json.scale;
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.scaleX = scale[0];
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.scaleY = scale[1];
    var skew = json.skew === undefined ? [0, 0] : json.skew;
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.skewX = skew[0];
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.skewY = skew[1];
    var pivot = json.pivot === undefined ? [0, 0] : json.pivot;
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.pivotX = pivot[0];
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

    this.pivotY = pivot[1];
  }

  return KeyframeData;
}();

/***/ }),

/***/ "./src/symbols/layer/Layer.js":
/*!************************************!*\
  !*** ./src/symbols/layer/Layer.js ***!
  \************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var _movie_Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movie/Movie */ "./src/symbols/movie/Movie.js");
/* harmony import */ var _LayerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayerData */ "./src/symbols/layer/LayerData.js");
/* harmony import */ var _keyframe_KeyframeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keyframe/KeyframeData */ "./src/symbols/keyframe/KeyframeData.js");
/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Constants */ "./src/constants/Constants.js");
/* harmony import */ var _Symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Symbol */ "./src/symbols/Symbol.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * Flump layer manager used to setup and manage symbols across multiple keyframes of an animation. A layer is
 * responsible for add/removing symbols from its parent Movie symbol, and updating the current symbol to
 * reflect the state of the animation timeline.
 * 
 * Layers are only responsible for updating one symbol at a time. When a new keyframe is hit or passed, the layer
 * will update which symbol it is managing. Layer order is determined by the parent Movie symbol.
 * 
 * Layers are pooled when the parent Movie symbol changes its animation. This means that a single layer can be
 * reused with and given new layer data.
 * 
 * Layers should be considered internal helper objects to a Movie symbol and it is not recommended to access a layer
 * outside of the Movie symbol.
 * 
 * @version 1.0
 */

var Layer =
/*#__PURE__*/
function () {
  _createClass(Layer, [{
    key: "name",

    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */
    get: function get() {
      return this.data.name;
    }
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "library",
    get: function get() {
      return this.data.library;
    }
    /**
     * @type {Array.<KeyframeData>}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "keyframes",
    get: function get() {
      return this.data.keyframes;
    }
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "frameCount",
    get: function get() {
      return this.data.frameCount;
    }
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "isFlipbook",
    get: function get() {
      return this.data.flipbook;
    }
  }]);

  function Layer(movie) {
    _classCallCheck(this, Layer);

    /**
     * @type {Movie}
     * @version 1.0
     */
    this.movie = movie;
    /**
     * @type {Phaser.Game}
     * @version 1.0
     */

    this.game = movie.game;
    /**
     * @type {LayerData}
     * @version 1.0
     */

    this.data = undefined;
    /**
     * @type {Movie | Symbol}
     * @version 1.0
     */

    this.currentSymbol = undefined;
    /**
     * @type {Array.<Symbol | Movie}
     * @version 1.0
     */

    this.symbols = [];
    /**
     * @type {number}
     * @version 1.0
     */

    this.symbolCount = 0;
    /**
     * @type {boolean}
     * @version 1.0
     */

    this.disabled = false;
    /**
     * @type {number}
     * @version 1.0
     */

    this.keyframeIdx = 0;
  }
  /**
   * Destroyings the layer and all its symbols.
   * @version 1.0
   */


  _createClass(Layer, [{
    key: "destroy",
    value: function destroy() {
      this.movie = undefined;
      this.game = undefined;
      this.data = undefined;
      this.currentSymbol = undefined; // Destroy each unique symbol reference, while skipping duplicate references.

      while (this.symbols.length > 0) {
        var destSymbol = this.symbols.shift();

        for (var i = this.symbols.length - 1; i >= 0; i--) {
          if (this.symbols[i] === destSymbol) {
            this.symbols.splice(i, 1);
          }
        }

        destSymbol.destroy();
      }

      this.symbols = undefined;
    }
    /**
     * Used to setup this layer with the provided data.
     * Reused this to assign new data to this layer. If used to
     * reassign layer data, then previous layer data will be cleaned up.
     * @param {LayerData} data 
     * @internal
     * @version 1.0
     */

  }, {
    key: "setup",
    value: function setup(data) {
      if (this.data !== undefined) {
        this.cleanUp();
      }

      this.data = data;
      this.symbolCount = 0;
      var lastSymbol = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["EMPTY_KEYFRAME"];

      for (var i = 0; i < this.keyframes.length && lastSymbol === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["EMPTY_KEYFRAME"]; i++) {
        lastSymbol = this.keyframes[i].ref;
      }

      if (!this.isFlipbook && lastSymbol === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["EMPTY_KEYFRAME"]) {
        this.currentSymbol = this.game.flump.createSymbolFrom(this.library);
        this.movie.addChild(this.currentSymbol);
        this.symbolCount = 1;
        return this.drawFrame(0);
      }

      for (var _i = 0; _i < this.keyframes.length; ++_i) {
        var keyframe = this.keyframes[_i];
        var symbol = void 0;

        if (_i > 0 && this.keyframes[_i - 1].ref === keyframe.ref) {
          symbol = this.symbols[_i - 1];
        } else {
          this.symbolCount++;

          if (keyframe.ref === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["EMPTY_KEYFRAME"]) {
            symbol = this.game.flump.createSymbolFrom(this.library);
          } else {
            symbol = this.game.flump.createSymbolFrom(this.library, keyframe.ref);

            if (symbol.symbolType === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["MOVIE_SYMBOL_TYPE"]) {
              symbol.setParentMovie(this.movie);
            }
          }
        }

        this.symbols.push(symbol);
        symbol.visible = false;
        this.movie.addChild(symbol);
      }

      this.currentSymbol = this.symbols[0];
      this.currentSymbol.visible = true;
      return this.drawFrame(0);
    }
    /**
     * Used internally to replace this layer's current symbol.
     * All references to the current symbol on additional keyframes will also be replaces.
     * @param {Symbol | Movie} symbol
     * @internal
     * @version 1.0
     */

  }, {
    key: "replaceCurrentSymbol",
    value: function replaceCurrentSymbol(symbol) {
      for (var i = 0; i < this.symbols.length; i++) {
        if (this.symbols[i] === this.currentSymbol) {
          this.symbols[i] = symbol;
        }
      }

      this.currentSymbol = symbol;
    }
    /**
     * Draw the layer at the provided frame position.
     * @param {number} frame 
     * @internal
     * @version 1.0
     */

  }, {
    key: "drawFrame",
    value: function drawFrame(frame) {
      if (!this.symbols || this.symbols.length === 0 || this.disabled) {
        return this;
      } else if (frame >= this.frameCount) {
        this.currentSymbol.visible = false;
        this.keyframeIdx = this.keyframes.length - 1;
        return this;
      }

      if (this.keyframes[this.keyframeIdx].index > frame) {
        this.keyframeIdx = 0;
      }

      while (this.keyframeIdx < this.keyframes.length - 1 && this.keyframes[this.keyframeIdx + 1].index <= frame) {
        this.keyframeIdx++;
      }

      var symbol = this.symbols[this.keyframeIdx];

      if (this.currentSymbol !== symbol) {
        ;
        this.currentSymbol.visible = false;

        if (symbol.symbolType === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["MOVIE_SYMBOL_TYPE"]) {
          symbol.goToInternal(0, true);
        }

        this.currentSymbol = symbol;
      }

      var keyframe = this.keyframes[this.keyframeIdx];
      var x = keyframe.x;
      var y = keyframe.y;
      var pivotX = keyframe.pivotX;
      var pivotY = keyframe.pivotY;
      var scaleX = keyframe.scaleX;
      var scaleY = keyframe.scaleY;
      var skewX = keyframe.skewX;
      var skewY = keyframe.skewY;
      var alpha = keyframe.alpha;
      this.currentSymbol.visible = keyframe.visible;

      if (this.keyframeIdx < this.keyframes.length - 1 && keyframe.index !== frame && keyframe.tweened) {
        var step = (frame - keyframe.index) / keyframe.duration;
        var ease = keyframe.ease;

        if (ease !== 0) {
          var time;

          if (ease < 0) {
            var inverse = 1 - step;
            time = 1 - inverse * inverse;
            ease = -ease;
          } else {
            time = step * step;
          }

          step = ease * time + (1 - ease) * step;
        }

        var next = this.keyframes[this.keyframeIdx + 1];
        x += (next.x - x) * step;
        y += (next.y - y) * step;
        pivotX += (next.pivotX - pivotX) * step;
        pivotY += (next.pivotY - pivotY) * step;
        scaleX += (next.scaleX - scaleX) * step;
        scaleY += (next.scaleY - scaleY) * step;
        skewX += (next.skewX - skewX) * step;
        skewY += (next.skewY - skewY) * step;
        alpha += (next.alpha - alpha) * step;
      }

      this.updateSymbol(x, y, pivotX, pivotY, scaleX, scaleY, skewX, skewY, alpha);
      return this;
    }
    /**
     * Used internally to update the layer's current symbol.
     * @param {number} x 
     * @param {number} y 
     * @param {number} pivotX 
     * @param {number} pivotY 
     * @param {number} scaleX 
     * @param {number} scaleY 
     * @param {number} skewX 
     * @param {number} skewY 
     * @param {number} alpha 
     * @internal
     * @version 1.0
     */

  }, {
    key: "updateSymbol",
    value: function updateSymbol(x, y, pivotX, pivotY, scaleX, scaleY, skewX, skewY, alpha) {
      if (this.currentSymbol.visible) {
        this.currentSymbol.position.set(x, y);
        this.currentSymbol.pivot.set(pivotX, pivotY);
        this.currentSymbol.skew.set(skewX, skewY);
        this.currentSymbol.scale.set(scaleX, scaleY);
        this.currentSymbol.alpha = alpha;
      }
    }
    /**
     * Used internally to clean up all symbols this layer manages.
     * @internal
     * @version 1.0
     */

  }, {
    key: "cleanUp",
    value: function cleanUp() {
      // Push current symbol into the list to make sure it gets properly cleaned up with everything else.
      this.symbols.push(this.currentSymbol);

      while (this.symbols.length > 0) {
        var symbol = this.symbols.shift();

        for (var i = this.symbols.length; i >= 0; --i) {
          if (this.symbols[i] === symbol) {
            this.symbols.splice(i, 1);
          }
        }

        if (symbol.symbolType === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["MOVIE_SYMBOL_TYPE"]) {
          symbol.cleanUp();
        }

        this.movie.removeChild(symbol);
        this.game.flump.libraries[this.library].storeSymbol(symbol);
      }

      this.keyframeIdx = 0;
      this.disabled = false;
      this.data = undefined;
      this.currentSymbol = undefined;
    }
  }]);

  return Layer;
}();

/***/ }),

/***/ "./src/symbols/layer/LayerData.js":
/*!****************************************!*\
  !*** ./src/symbols/layer/LayerData.js ***!
  \****************************************/
/*! exports provided: LayerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerData", function() { return LayerData; });
/* harmony import */ var _keyframe_KeyframeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyframe/KeyframeData */ "./src/symbols/keyframe/KeyframeData.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Layer information for a Movie symbol.
 * 
 * @version 1.0
 */

var LayerData =
/*#__PURE__*/
function () {
  _createClass(LayerData, [{
    key: "frameCount",

    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */
    get: function get() {
      if (this.keyframes.length === 0) {
        return 0;
      }

      var keyframe = this.keyframes[this.keyframes.length - 1];
      return keyframe.index + keyframe.duration;
    }
  }]);

  function LayerData(library, movie, json) {
    _classCallCheck(this, LayerData);

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

    this.movie = movie; // Verify the layer data has a name.

    if (json.name === undefined) {
      throw new Error("Layer data from ".concat(this.library, "/").concat(this.movie, " is missing the name field."));
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

    this.flipbook = json.flipbook || false; // Verify the layer data has a keyframes list.

    if (json.keyframes === undefined) {
      throw new Error("Layer data from ".concat(this.library, "/").concat(this.movie, " is missing the layframes field."));
    }
    /**
     * @type {Array.<KeyframeData>}
     * @version 1.0
     */


    this.keyframes = json.keyframes.map(function (keyframe) {
      return new _keyframe_KeyframeData__WEBPACK_IMPORTED_MODULE_0__["KeyframeData"](keyframe);
    });
  }
  /**
   * Clean up this LayerData.
   * @version 1.0
   */


  _createClass(LayerData, [{
    key: "destroy",
    value: function destroy() {
      this.keyframes = undefined;
    }
    /**
     * Returns the KeyframeData object for the given frame.
     * @param {number} frame 
     * @version 1.0
     */

  }, {
    key: "getKeyframeData",
    value: function getKeyframeData(frame) {
      var i = 1;

      for (; i < this.keyframes.length && this.keyframes[i].index <= frame; i++) {
        ;
      }

      return this.keyframes[i - 1];
    }
  }]);

  return LayerData;
}();

/***/ }),

/***/ "./src/symbols/movie/Movie.js":
/*!************************************!*\
  !*** ./src/symbols/movie/Movie.js ***!
  \************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
/* harmony import */ var _layer_Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layer/Layer */ "./src/symbols/layer/Layer.js");
/* harmony import */ var _MovieData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieData */ "./src/symbols/movie/MovieData.js");
/* harmony import */ var _layer_LayerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layer/LayerData */ "./src/symbols/layer/LayerData.js");
/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Constants */ "./src/constants/Constants.js");
/* harmony import */ var _Symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Symbol */ "./src/symbols/Symbol.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Flump movie symbol plays an animation from a library. A Movie symbol manages setting up and updating
 * multiple layers. Movie symbols can play or loop its animation. Additionally, if a Movie key is provided
 * to `Movie.playOnce()` or `Movie.loop()`, then the Movie symbol will switch to a new animation. Switching
 * animations will result in the old animation being stopped and all layers will be cleaned up and pooled
 * before the new animatino is setup and played. 
 * 
 * When an animation is switched  the `MovieData` object referenced by this Movie symbol will be overriden 
 * and the movie specific fields will change to reflect the new animation.
 * 
 * Movie symbols can be standalone or be nested within other Movies depending on the confirgation of animation 
 * from the library. If a Movie symbol is nested, then it will be updated by its parent Movie. If using the
 * `Movie.playbackSpeed` property, then only apply it to the root Movie symbol.
 * 
 * @extends Symbol
 * @version 1.0
 */

var Movie =
/*#__PURE__*/
function (_Symbol2) {
  _inherits(Movie, _Symbol2);

  _createClass(Movie, [{
    key: "id",

    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */
    get: function get() {
      return this.data.id;
    }
    /**
     * @type {string}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "library",
    get: function get() {
      return this.data.library;
    }
    /**
     * @type {number}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "frameCount",
    get: function get() {
      return this.data.frameCount;
    }
    /**
     * @type {Array.<Array.<string>>}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "labels",
    get: function get() {
      return this.data.labels;
    }
    /**
     * @type {Array.<LayerData>}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "layerData",
    get: function get() {
      return this.data.layers;
    }
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "isFlipbook",
    get: function get() {
      return this.data.isFlipbook;
    }
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "isManagedByParent",
    get: function get() {
      return this.parentMovie !== undefined;
    }
    /**
     * @type {boolean}
     * @readonly
     * @version 1.0
     */

  }, {
    key: "isPlaying",
    get: function get() {
      return this.state === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["PLAYING"];
    }
  }]);

  function Movie(game, frameRate) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this, game));
    /**
     * @type {MovieData}
     * @version 1.0
     */

    _this.data = undefined;
    /**
     * @type {number}
     * @version 1.0
     */

    _this.frameRate = frameRate;
    /**
     * @type {number}
     * @version 1.0
     */

    _this.duration = 0;
    /**
     * @type {Array.<Layer>}
     * @version 1.0
     */

    _this.layers = [];
    /**
     * Pool of unused layers.
     * @type {Array.<Layer>}
     * @version 1.0
     */

    _this.layerPool = [];
    /**
     * @type {Movie}
     * @version 1.0
     */

    _this.parentMovie = undefined;
    /**
     * @type {number}
     * @version 1.0
     */

    _this.framePosition = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
    /**
     * @type {number}
     * @version 1.0
     */

    _this.stopFrame = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
    /**
     * @type {number}
     * @version 1.0
     */

    _this.pendingGoToFrame = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
    /**
     * @type {number}
     * @version 1.0
     */

    _this.lastFrameIdx = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
    /**
     * @type {number}
     * @version 1.0
     */

    _this.playTime = 0;
    /**
     * @type {boolean}
     * @version 1.0
     */

    _this.skipAdvanceTime = false;
    /**
     * @type {boolean}
     * @version 1.0
     */

    _this.isUpdatingFrame = false;
    /**
     * @type {string}
     * @version 1.0
     */

    _this.fallbackLoop = undefined;
    /**
     * @type {number}
     * @version 1.0
     */

    _this.playbackSpeed = 1;
    /**
     * @type {string}
     * @version 1.0
     */

    _this.state = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["PLAYING"];
    /**
     * @type {Phaser.Signal}
     * @version 1.0
     */

    _this.labelEvents = new Phaser.Signal();
    /**
     * @type {Phaser.Signal}
     * @version 1.0
     */

    _this.playbackComplete = new Phaser.Signal();
    /**
     * @type {Phaser.Signal}
     * @version 1.0
     */

    _this.playbackLoop = new Phaser.Signal();
    return _this;
  }
  /**
   * Destroys the Movie and all it's layers and symbols.
   * @version 1.0
   */


  _createClass(Movie, [{
    key: "destroy",
    value: function destroy() {
      this.labelEvents.dispose();
      this.labelEvents = undefined;
      this.layers.forEach(function (layer) {
        return layer.destroy();
      });
      this.layers = undefined;
      this.layerPool.forEach(function (layer) {
        return layer.destroy();
      });
      this.layerPool = undefined;
      this.data = undefined;
      this.parentMovie = undefined;

      _get(_getPrototypeOf(Movie.prototype), "destroy", this).call(this);
    }
    /**
     * Updates the Movie if it is not managed by a parent Movie symbol.
     * @internal
     * @version 1.0
     */

  }, {
    key: "update",
    value: function update() {
      if (!this.isManagedByParent) {
        this.advanceTime(this.game.time.elapsedMS * 0.001 * this.playbackSpeed);
      }
    }
    /**
     * Changes the animation this Movie is playing.
     * @param {string} key 
     * @internal
     * @version 1.0
     */

  }, {
    key: "switchMovieTo",
    value: function switchMovieTo(key) {
      if (this.game.flump.libraries[this.library].hasMovieSymbol(key)) {
        this.setup(this.game.flump.libraries[this.library].getMovieData(key));
      }
    }
    /**
     * Returns true if the label exists in on this Movie.
     * @param {string} label 
     * @version 1.0
     */

  }, {
    key: "hasLabel",
    value: function hasLabel(label) {
      return this.getFrameOfLabel(label);
    }
    /**
     * Returns the frame the label is on.
     * @param {string} label 
     * @version 1.0
     */

  }, {
    key: "getFrameOfLabel",
    value: function getFrameOfLabel(label) {
      for (var i = 0; i < this.labels.length; i++) {
        if (this.labels[i].indexOf(label) >= 0) {
          return i;
        }
      }

      return _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
    }
    /**
     * Loop this movie.
     * @version 1.0
     */

  }, {
    key: "loop",
    value: function loop(key) {
      var restart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.fallbackLoop = undefined;

      if ((!key || key === this.id) && restart) {
        this.goToInternal(0, true);
      } else if (key && key !== this.id) {
        this.switchMovieTo(key);
      }

      this.state = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["PLAYING"];
      this.stopFrame = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
      return this;
    }
    /**
     * Plays the Movie to the last frame once.
     * @version 1.0
     */

  }, {
    key: "playOnce",
    value: function playOnce(key) {
      var restart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var fallbackLoop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      this.fallbackLoop = fallbackLoop;

      if ((!key || key === this.id) && restart) {
        this.goToInternal(0, true);
      } else if (key && key !== this.id) {
        this.switchMovieTo(key);
      }

      return this.playTo(_constants_Constants__WEBPACK_IMPORTED_MODULE_3__["LAST_FRAME"]);
    }
    /**
     * Plays the movie to the provided frame number or label.
     * @param {string | number} frame Frame number or frame label to play to.
     * @version 1.0
     */

  }, {
    key: "playTo",
    value: function playTo(frame) {
      return this.stopAt(frame).play();
    }
    /**
     * Plays the current Movie.
     * @version 1.0
     */

  }, {
    key: "play",
    value: function play() {
      this.state = this.framePosition !== this.stopFrame ? _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["PLAYING"] : _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["STOPPED"];
      return this;
    }
    /**
     * Plays only nested Movies.
     * @version 1.0
     */

  }, {
    key: "playChildrenOnly",
    value: function playChildrenOnly() {
      this.state = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["PLAYING_CHILDREN_ONLY"];
      return this;
    }
    /**
     * Tells the Movie to stop at a specific frame.
     * @param {string | number} frame 
     * @version 1.0
     */

  }, {
    key: "stopAt",
    value: function stopAt(frame) {
      this.stopFrame = this.getFrame(frame);
      return this;
    }
    /**
     * Stops the current Movie.
     * @version 1.0
     */

  }, {
    key: "stop",
    value: function stop() {
      this.state = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["STOPPED"];
      return this;
    }
    /**
     * Go to a specific frame number or label. This go to does not atler the playing state of 
     * the movie. Any labels on the target frame will be fired.
     * @param {string | number} frame Frame number or label to go to.
     * @version 1.0
     */

  }, {
    key: "goTo",
    value: function goTo(frame) {
      return this.goToInternal(this.getFrame(frame), false);
    }
    /**
     * Same as Movie.goTo, however this will also advance nested Movie objects to the specified frame.
     * If the frame does no exist on a child Movie, then that Movie is advanced to its last frame.
     * @param {number} frame 
     * @internal
     * @version 1.0
     */

  }, {
    key: "recursiveGoTo",
    value: function recursiveGoTo(frame) {
      return this.goToInternal(this.getFrame(frame), true);
    }
    /**
     * GoTo function used internally to the Movie. It's suggested to use Movie.goTo() or Movie.recursiveGoTo() instead.
     * @param {string | number} frame 
     * @param {boolean} recursive 
     * @internal
     * @version 1.0
     */

  }, {
    key: "goToInternal",
    value: function goToInternal(frame, recursive) {
      if (this.isUpdatingFrame) {
        this.pendingGoToFrame = frame;
        return this;
      }

      var nextFrame = frame;

      if (nextFrame >= this.frameCount) {
        nextFrame = this.frameCount;
      }

      this.playTime = nextFrame / this.frameRate;
      this.updateFrame(nextFrame, 0);

      if (recursive) {
        this.layers.forEach(function (layer) {
          if (layer.currentSymbol.symbolType === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["MOVIE_SYMBOL_TYPE"]) {
            layer.currentSymbol.goToInternal(frame, recursive);
          }
        });
      }

      return this;
    }
    /**
     * Internal function to get the specified frame
     * @param {string | number} frame 
     * @version 1.0
     */

  }, {
    key: "getFrame",
    value: function getFrame(frame) {
      if (typeof frame === "number") {
        return frame;
      } else if (typeof frame === "string") {
        frame = this.getFrameOfLabel(frame);

        if (frame < 0) {
          throw new Error("Movie does not contain a frame label ".concat(frame, "."));
        }

        return frame;
      }

      throw new Error("Frame must be a string or number");
    }
    /**
     * Toggle a specific layer on the Movie. 
     * @param {string} name 
     * @param {boolean} toggle 
     * @returns {Symbol | Movie} Returns the current layer sumbol.
     * @version 1.0
     */

  }, {
    key: "toggleLayer",
    value: function toggleLayer(name, toggle) {
      for (var i = 0; i < this.layers.length; i++) {
        if (this.layers[i].name === name) {
          this.layers[i].disabled = !toggle;
          return this.layers[i].currentSymbol;
        }
      }

      throw new Error("Cannot find layer ".concat(name, " in Movie ").concat(this.id, "."));
    }
    /**
     * Checks to see if the provided layer is enabled.
     * @param {string} name 
     * @version 1.0
     */

  }, {
    key: "isLayerEnabled",
    value: function isLayerEnabled(name) {
      for (var i = 0; i < this.layers.length; i++) {
        if (this.layers[i].name === name) {
          this.layers[i].disabled = !toggle;
          return !this.layers[i].disabled;
        }
      }

      throw new Error("Cannot find layer ".concat(name, " in Movie ").concat(this.id, "."));
    }
    /**
     * Removes a child at the provided index. If the child is managed by one of the Layers of this Movie,
     * and if the Layer contains no other symbols, then the entire Layer will be removed from the Movie.
     * @param {number} index 
     * @version 1.0
     */

  }, {
    key: "removeChildAt",
    value: function removeChildAt(index) {
      if (this.isUpdatingFrame) {
        throw new Error("Cannot remove a layer while the Movie is updating its frame.");
      }

      if (index < 0) {
        index = this.children.length - index;
      }

      var child = _get(_getPrototypeOf(Movie.prototype), "getChildAt", this).call(this, index);

      var childLayerIndex = -1;

      if (this.layers) {
        if (index < this.layers.length && this.layers[index].currentSymbol === child) {
          childLayerIndex = index;
        } else {
          for (var i = 0; i < this.layers.length; ++i) {
            if (this.layers[i].currentSymbol === child) {
              childLayerIndex = i;
              break;
            }
          }
        }
      }

      var replaceSymbol = false;

      if (childLayerIndex >= 0) {
        if (child.symbolType === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["MOVIE_SYMBOL_TYPE"]) {
          // Clear the nested Movie's parent reference.
          child.setParentMovie();
        }

        if (this.layers[childLayerIndex].symbolCount === 1) {
          this.layers.splice(childLayerIndex, 1);
        } else {
          replaceSymbol = true;
        }
      }

      _get(_getPrototypeOf(Movie.prototype), "removeChildAt", this).call(this, index);

      if (replaceSymbol) {
        var replacement = this.game.flump.createSymbolFrom(this.library);
        this.addChildAt(replacement, index);
        this.layers[childLayerIndex].replaceCurrentSymbol(replacement);
      }

      return child;
    }
    /**
     * Get the names of each Movie Layer.
     * @version 1.0
     */

  }, {
    key: "getLayerNames",
    value: function getLayerNames() {
      return this.layers.map(function (layer) {
        return layer.name;
      });
    }
    /**
     * Cleans up the Movie.
     * This does not destroy the movie, simply returns all layers and symbols back to their pools.
     * @internal
     * @version 1.0
     */

  }, {
    key: "cleanUp",
    value: function cleanUp() {
      while (this.layers.length > 0) {
        var layer = this.layers.shift();
        layer.cleanUp();
        this.layerPool.push(layer);
      }
    }
    /**
     * Sets reference to the parent Movie. This is for Movies that are nested.
     * @param {Movie} parent 
     * @internal
     * @version 1.0
     */

  }, {
    key: "setParentMovie",
    value: function setParentMovie(parent) {
      this.parentMovie = parent;
    }
    /**
     * Sets the initial state of the Movie.
     * @internal
     * @version 1.0
     */

  }, {
    key: "addedToLayer",
    value: function addedToLayer() {
      this.goTo(0);
      this.skipAdvanceTime = true;
    }
    /**
     * Setups up this movie to use the provided MovieData.
     * @param {MovieData} data 
     * @internal
     * @version 1.0
     */

  }, {
    key: "setup",
    value: function setup(data) {
      if (this.data !== undefined) {
        this.cleanUp();
      }

      this.data = data;
      this.duration = this.frameCount / this.frameRate;

      if (this.isFlipbook) {
        this.layers = [this.getFreeLayer().setup(this.layerData[0])];
      } else {
        for (var i = 0; i < this.layerData.length; i++) {
          this.layers.push(this.getFreeLayer().setup(this.layerData[i]));
        }
      }

      return this.goToInternal(0, true);
    }
    /**
     * Advances the animation along its timeline.
     * @param {number} dt Delta time
     * @internal
     * @version 1.0
     */

  }, {
    key: "advanceTime",
    value: function advanceTime(dt) {
      if (dt < 0) {
        throw new Error("Invalid time ".concat(dt));
      }

      if (this.skipAdvanceTime) {
        this.skipAdvanceTime = false;
        return;
      }

      if (this.state === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["STOPPED"]) {
        return;
      }

      if (this.state === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["PLAYING"] && this.frameCount > 1) {
        this.playTime += dt;
        var actualPlayTime = this.playTime;

        if (this.playTime >= this.duration) {
          this.playTime %= this.duration;
        } // Originally Math.round(this.playTime * this.frameRate)
        // Removed rounding for smoother motion. Keeping this note in case
        // problems pop up down the road.


        var nextFrame = this.playTime * this.frameRate;

        if (nextFrame < 0) {
          nextFrame = 0;
        } else if (nextFrame >= this.frameCount) {
          nextFrame = this.frameCount - 1;
        }

        if (this.stopFrame !== _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"]) {
          var framesRemaining = this.framePosition <= this.stopFrame ? this.stopFrame - this.framePosition : this.frameCount - this.framePosition + this.stopFrame; // Originally Math.round(actualPlayTime * this.frameRate)
          // Removed rounding for smoother motion. Keeping this note in case
          // problems pop up down the road.

          var framesElapsed = actualPlayTime * this.frameRate - this.framePosition;

          if (framesElapsed >= framesRemaining) {
            this.state = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["STOPPED"];
            nextFrame = this.stopFrame;
          }
        }

        this.updateFrame(nextFrame, dt);
      }

      for (var i = 0; i < this.layers.length; i++) {
        if (this.layers[i].currentSymbol.symbolType === _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["MOVIE_SYMBOL_TYPE"]) {
          this.layers[i].currentSymbol.advanceTime(dt);
        }
      }
    }
    /**
     * Updates each layer to the next frame and fires any label events.
     * @param {number} nextFrame 
     * @param {number} dt
     * @internal
     * @version 1.0
     */

  }, {
    key: "updateFrame",
    value: function updateFrame(nextFrame, dt) {
      if (nextFrame < 0 || nextFrame >= this.frameCount) {
        throw new Error("Invalid frame ".concat(nextFrame, "."));
      }

      if (this.isUpdatingFrame) {
        throw new Error("Movie.updateFrame() is being called recursively");
      }

      this.pendingGoToFrame = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
      this.isUpdatingFrame = true;
      var lastFrame = this.framePosition;
      this.framePosition = nextFrame;
      var startFrame, count;

      if (dt <= 0) {
        startFrame = nextFrame;
        count = 1;
      } else {
        startFrame = lastFrame + 1 < this.frameCount ? lastFrame + 1 : 0;
        count = this.framePosition - lastFrame;

        if (dt >= this.duration || nextFrame < this.framePosition) {
          count += this.frameCount;
        }
      }

      var num = startFrame | 0;

      if (this.lastFrameIdx !== num) {
        this.lastFrameIdx = num;
        var frameIndex = this.lastFrameIdx;

        for (var i = 0; i < count; ++i) {
          if (this.pendingGoToFrame !== _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"]) {
            break;
          } // Fire frame label events.


          if (this.labels[frameIndex] !== undefined) {
            for (var j = 0; j < this.labels[frameIndex].length; j++) {
              this.labelEvents.dispatch(this.labels[frameIndex][j]);

              if (this.pendingGoToFrame !== _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"]) {
                break;
              }
            }
          } // Avoid modulo division.


          if (++frameIndex === this.frameCount) {
            frameIndex = 0;
          }
        }
      }

      this.isUpdatingFrame = false;

      if (this.pendingGoToFrame !== _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"]) {
        var pending = this.pendingGoToFrame;
        this.pendingGoToFrame = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
        this.goTo(pending);
      } else if (nextFrame !== lastFrame) {
        for (var _i = 0; _i < this.layers.length; _i++) {
          this.layers[_i].drawFrame(nextFrame);
        }
      }

      if (!this.isManagedByParent) {
        if (this.framePosition === this.stopFrame) {
          if (this.fallbackLoop !== undefined) {
            this.loop(this.fallbackLoop);
          }

          this.playbackComplete.dispatch();
        } else if (this.framePosition < lastFrame) {
          this.playbackLoop.dispatch();
        }
      }
    }
    /**
     * Returns a layer not currently being used in an animation.
     * @returns {Layer}
     * @internal
     * @version 1.0
     */

  }, {
    key: "getFreeLayer",
    value: function getFreeLayer() {
      if (this.layerPool.length > 0) {
        return this.layerPool.shift();
      }

      return new _layer_Layer__WEBPACK_IMPORTED_MODULE_0__["Layer"](this);
    }
    /**
     * Restores the Movie symbol to its default state.
     * @internal
     * @version 1.0
     */

  }, {
    key: "restore",
    value: function restore() {
      this.parentMovie = undefined;
      this.framePosition = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
      this.stopFrame = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
      this.pendingGoToFrame = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
      this.lastFrameIdx = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["NO_FRAME"];
      this.playTime = 0;
      this.skipAdvanceTime = false;
      this.isUpdatingFrame = false;
      this.fallbackLoop = undefined;
      this.playbackSpeed = 1;
      this.state = _constants_Constants__WEBPACK_IMPORTED_MODULE_3__["PLAYING"];
      this.labelEvents.removeAll();
      this.playbackComplete.removeAll();
      this.playbackLoop.removeAll();
      return _get(_getPrototypeOf(Movie.prototype), "restore", this).call(this);
    }
  }]);

  return Movie;
}(_Symbol__WEBPACK_IMPORTED_MODULE_4__["Symbol"]);

/***/ }),

/***/ "./src/symbols/movie/MovieData.js":
/*!****************************************!*\
  !*** ./src/symbols/movie/MovieData.js ***!
  \****************************************/
/*! exports provided: MovieData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieData", function() { return MovieData; });
/* harmony import */ var _layer_LayerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layer/LayerData */ "./src/symbols/layer/LayerData.js");
/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Constants */ "./src/constants/Constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Movie information for a Movie symbol.
 * 
 * @version 1.0
 */

var MovieData =
/*#__PURE__*/
function () {
  _createClass(MovieData, [{
    key: "isFlipbook",

    /**
     * @type {boolean}
     * @version 1.0
     */
    get: function get() {
      return this.layers.length > 0 && this.layers[0].flipbook;
    }
  }]);

  function MovieData(library, json) {
    var _this = this;

    _classCallCheck(this, MovieData);

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

    this.id = json.id; // Verify the movie data has a list of layers.

    if (json.layers === undefined) {
      throw new Error("Movie data ".concat(this.id, " is missing the layers field."));
    }
    /**
     * @type {Array.<LayerData>}
     * @version 1.0
     */


    this.layers = json.layers.map(function (layer) {
      return new _layer_LayerData__WEBPACK_IMPORTED_MODULE_0__["LayerData"](library, _this.id, layer);
    });
    /**
     * @type {number}
     * @version 1.0
     */

    this.frameCount = 0; // Get the larger frame count from the list of layers.

    this.layers.forEach(function (layer) {
      return _this.frameCount = Math.max(_this.frameCount, layer.frameCount);
    });
    /**
     * @type {Array.<Array.<string>>}
     * @version 1.0
     */

    this.labels = Array(this.frameCount).fill().map(function (i) {
      return [];
    }); // Generate the lists of frame labels from each keyframe within the list of layers.

    this.generateFrameLabels();
  }
  /**
   * Clean up this MovieData.
   * @version 1.0
   */


  _createClass(MovieData, [{
    key: "destroy",
    value: function destroy() {
      this.layers.forEach(function (layer) {
        return layer.destroy();
      });
      this.layers = undefined;
      this.labels = undefined;
    }
    /**
     * Generate the lists of frame labels from each keyframe within the list of layers.
     * @version 1.0
     */

  }, {
    key: "generateFrameLabels",
    value: function generateFrameLabels() {
      var _this2 = this;

      if (this.labels.length === 0) {
        return;
      } // Add the first and last frame labels.


      this.labels[0].push(_constants_Constants__WEBPACK_IMPORTED_MODULE_1__["FIRST_FRAME"]);
      this.labels[this.frameCount - 1].push(_constants_Constants__WEBPACK_IMPORTED_MODULE_1__["LAST_FRAME"]); // Add additional frame labels from each keyframe on the list of layers.

      this.layers.forEach(function (layer) {
        layer.keyframes.forEach(function (keyframe) {
          if (keyframe.label !== _constants_Constants__WEBPACK_IMPORTED_MODULE_1__["EMPTY_LABEL"]) {
            _this2.labels[keyframe.index].push(keyframe.label);
          }
        });
      });
    }
  }]);

  return MovieData;
}();

/***/ })

/******/ });
});
//# sourceMappingURL=phaser2-flump-plugin.js.map