/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/PlayfairDisplay-VariableFont_wght.ttf */ "./src/font/PlayfairDisplay-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/PlayfairDisplay-Italic-VariableFont_wght.ttf */ "./src/font/PlayfairDisplay-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./font/MontserratAlternates-Regular.ttf */ "./src/font/MontserratAlternates-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hero.jpg */ "./src/img/hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/menu-up.svg */ "./src/img/icon/menu-up.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/menu-down.svg */ "./src/img/icon/menu-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    /* dark mode*/
    /* --accent: rgb(255, 175, 100);
    --dark: #121212;
    --light: #efefef;
    --mid: rgb(189, 189, 189); */
/* 
    --shadow-small: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
    --shadow-large: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */


    /* light mode */
    --accent: rgb(100, 159, 255);
    --dark: #efefef;
    --light: #101010;
    --mid: rgb(89, 89, 89);

    --shadow-small: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    --shadow-large: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;


    /* txt size */
    --size-display: 78px;
    --size-content: 33px;
}

@font-face {
    font-family: 'playfair';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'playfair';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-style: italic;
}
/*  */
@font-face {
    font-family: 'montserrat';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

/*  */

*, *::before, *::after {
    box-sizing: border-box;
    font-family: futura;
}

* {
    margin: 0;
    padding: 0;
    font: inherit;
}

img, picture, svg, video {
    display: block;
    max-width: 100%;
}

body {
    color: var(--light);
    background-color: var(--dark);
}

nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    background-color: var(--brand-main);
    position: relative;
    padding: 10px 0 0;
}

nav > button {
    /* letter-spacing: 3px; */
    border: 3px solid transparent;
    background-color: transparent;
    vertical-align: center;
    padding: 5px 15px;

    color: var(--light);
    font-size: 1rem;
    font-family: 'playfair';
    font-style: italic;

    transition: all 0.1s ease-out;
}

#content {

}

.title {
    font-family: 'playfair';
    font-size: var(--size-display);
    font-weight: bold;  
    text-transform: uppercase;
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 10px;
    margin-bottom: 25px;

    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-size: cover;
    /* background-size: 110%; */
    background-position: 0% 20%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.hero {
    height: 400px;
    width: 100%;
    margin-bottom: 25px;
}

.hero > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
}

.subtitle {
    text-align: center;
    
}

.para-wrap {
    display: flex;
    justify-content: center;

    font-family: 'playfair';
    font-weight: bold;
    text-transform: uppercase;

    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 25%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    filter: brightness(1.5);
}

.para {
    text-align: justify;
    max-width: 45ch;
    font-size: 0.9rem;
    padding: 0 15px;
    letter-spacing: 2px;
}

.menu-wrapper {
    padding: 25px 0 50px 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
    scrollbar-width: 0px;
}

.item-wrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    /* height: 200px; */
    margin: auto;
    position: relative;


    /* border-radius: 3px; */
    overflow: hidden;
    box-shadow: var(--shadow-small);


    transition: box-shadow 0.1s ease-in-out;
}

.item-photo {
    height: 0px;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    margin-bottom: 10px;

    filter: blur(2px) saturate(0.5);
    overflow: hidden;

    transition: filter 0.2s ease-in-out, height 0.5s ease-in-out; 
}

.expand-button {
    position: absolute;
    right: 2px;
    top: 2px; 

    /* width: 20px; */
    height: 20px;
    width: 20px;
    padding: 3px 0;
    margin-left: auto;

    /* background: var(--mid); */
    /* border-radius: 3px; */
    /* padding: 3px; */
    border: none;
    appearance: none;
    border-radius: 2px;



    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 25px;
    

    /* text-align: justify; */
    /* font-family: 'playfair'; */
    transition: background-color 0.3s;
    z-index: 2;
}

.itemTextContent, .guide, .section-title {
    text-align: justify;
    color: var(--light);
    font-size: 1rem;
    font-family: 'playfair';
    padding: 10px;
}

.guide {
    font-size: 0.8rem;
    width: 50%;
    margin: auto;
    padding: 10px 0;
    margin-top: 50px;
    text-align: center;
}

.guide-title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 50px 0;
}

.guide-text {
    margin-bottom: 50px;
}

.section-title, .item-title {
    font-weight: bold;
    text-transform: uppercase;

    max-width: 45ch;
    font-size: 0.9rem;
    letter-spacing: 2px;

    margin-bottom: 10px;
}

.section-title {
    width: 50%;
    margin: auto;

    color: var(--light);
    font-size: 2rem;

    /* background-image: url('./img/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 20% 5%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    filter: brightness(1); */

    padding: 10px 0;
    margin-top: 50px;
    margin-bottom: 30px;
}


.itemTextContent > .item-description {
    font-style: italic;
    margin-bottom: 50px;
}

.itemTextContent > .info-wrapper {
    vertical-align: center;
    display: flex;
    gap: 5px;

}

.itemTextContent > .info-wrapper > .price {
    margin-right: auto;
}

.gf, .df {
    color:  var(--accent);
    border-bottom: 1px solid var(--accent);
}

/* pseudos */

nav > button:hover {
    color: var(--accent);
}

nav > button:focus:not(.selected) {
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid var(--light);
    margin-top: 2px; 
    /* margin-top 2px makes up for the border shifting */
}

.selected {
    outline: none;
    box-shadow: none;

    color: var(--accent);
    border-bottom-color: var(--accent);
    border-bottom-width: 1px;
}

.item-selected {
    box-shadow: var(--shadow-large);
}


.expand-button:focus {
    outline: none;
    appearance: none;
    background-color: var(--accent);
}

.expand-button:hover:not(.expand-button:focus) {
    background-color: var(--accent);
}

.expandedBtn {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    /* height: 300px; */
    /* color: var(--accent); */
}

.expandedImg {
    height: 300px;
    width: 100%;

    filter: saturate(1);
    filter: blur(0px);

}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    /* dark mode*/\n    /* --accent: rgb(255, 175, 100);\n    --dark: #121212;\n    --light: #efefef;\n    --mid: rgb(189, 189, 189); */\n/* \n    --shadow-small: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;\n    --shadow-large: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */\n\n\n    /* light mode */\n    --accent: rgb(100, 159, 255);\n    --dark: #efefef;\n    --light: #101010;\n    --mid: rgb(89, 89, 89);\n\n    --shadow-small: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;\n    --shadow-large: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n\n\n    /* txt size */\n    --size-display: 78px;\n    --size-content: 33px;\n}\n\n@font-face {\n    font-family: 'playfair';\n    src: url('./font/PlayfairDisplay-VariableFont_wght.ttf');\n}\n\n@font-face {\n    font-family: 'playfair';\n    src: url('./font/PlayfairDisplay-Italic-VariableFont_wght.ttf');\n    font-style: italic;\n}\n/*  */\n@font-face {\n    font-family: 'montserrat';\n    src: url('./font/MontserratAlternates-Regular.ttf');\n}\n\n/*  */\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    font-family: futura;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font: inherit;\n}\n\nimg, picture, svg, video {\n    display: block;\n    max-width: 100%;\n}\n\nbody {\n    color: var(--light);\n    background-color: var(--dark);\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    width: 100%;\n    background-color: var(--brand-main);\n    position: relative;\n    padding: 10px 0 0;\n}\n\nnav > button {\n    /* letter-spacing: 3px; */\n    border: 3px solid transparent;\n    background-color: transparent;\n    vertical-align: center;\n    padding: 5px 15px;\n\n    color: var(--light);\n    font-size: 1rem;\n    font-family: 'playfair';\n    font-style: italic;\n\n    transition: all 0.1s ease-out;\n}\n\n#content {\n\n}\n\n.title {\n    font-family: 'playfair';\n    font-size: var(--size-display);\n    font-weight: bold;  \n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: underline;\n    text-underline-offset: 10px;\n    margin-bottom: 25px;\n\n    background-image: url('./img/hero.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    /* background-size: 110%; */\n    background-position: 0% 20%;\n    color: transparent;\n    background-clip: text;\n    -webkit-background-clip: text;\n}\n\n.hero {\n    height: 400px;\n    width: 100%;\n    margin-bottom: 25px;\n}\n\n.hero > img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    display: block;\n}\n\n.subtitle {\n    text-align: center;\n    \n}\n\n.para-wrap {\n    display: flex;\n    justify-content: center;\n\n    font-family: 'playfair';\n    font-weight: bold;\n    text-transform: uppercase;\n\n    background-image: url('./img/hero.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 0% 25%;\n    color: transparent;\n    background-clip: text;\n    -webkit-background-clip: text;\n    filter: brightness(1.5);\n}\n\n.para {\n    text-align: justify;\n    max-width: 45ch;\n    font-size: 0.9rem;\n    padding: 0 15px;\n    letter-spacing: 2px;\n}\n\n.menu-wrapper {\n    padding: 25px 0 50px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    scrollbar-width: 0px;\n}\n\n.item-wrapper {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    /* height: 200px; */\n    margin: auto;\n    position: relative;\n\n\n    /* border-radius: 3px; */\n    overflow: hidden;\n    box-shadow: var(--shadow-small);\n\n\n    transition: box-shadow 0.1s ease-in-out;\n}\n\n.item-photo {\n    height: 0px;\n    width: 100%;\n    object-fit: cover;\n    object-position: center center;\n    margin-bottom: 10px;\n\n    filter: blur(2px) saturate(0.5);\n    overflow: hidden;\n\n    transition: filter 0.2s ease-in-out, height 0.5s ease-in-out; \n}\n\n.expand-button {\n    position: absolute;\n    right: 2px;\n    top: 2px; \n\n    /* width: 20px; */\n    height: 20px;\n    width: 20px;\n    padding: 3px 0;\n    margin-left: auto;\n\n    /* background: var(--mid); */\n    /* border-radius: 3px; */\n    /* padding: 3px; */\n    border: none;\n    appearance: none;\n    border-radius: 2px;\n\n\n\n    background-image: url(./img/icon/menu-up.svg);\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 25px;\n    \n\n    /* text-align: justify; */\n    /* font-family: 'playfair'; */\n    transition: background-color 0.3s;\n    z-index: 2;\n}\n\n.itemTextContent, .guide, .section-title {\n    text-align: justify;\n    color: var(--light);\n    font-size: 1rem;\n    font-family: 'playfair';\n    padding: 10px;\n}\n\n.guide {\n    font-size: 0.8rem;\n    width: 50%;\n    margin: auto;\n    padding: 10px 0;\n    margin-top: 50px;\n    text-align: center;\n}\n\n.guide-title {\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 0.8rem;\n    padding: 50px 0;\n}\n\n.guide-text {\n    margin-bottom: 50px;\n}\n\n.section-title, .item-title {\n    font-weight: bold;\n    text-transform: uppercase;\n\n    max-width: 45ch;\n    font-size: 0.9rem;\n    letter-spacing: 2px;\n\n    margin-bottom: 10px;\n}\n\n.section-title {\n    width: 50%;\n    margin: auto;\n\n    color: var(--light);\n    font-size: 2rem;\n\n    /* background-image: url('./img/hero.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 20% 5%;\n    color: transparent;\n    background-clip: text;\n    -webkit-background-clip: text;\n    filter: brightness(1); */\n\n    padding: 10px 0;\n    margin-top: 50px;\n    margin-bottom: 30px;\n}\n\n\n.itemTextContent > .item-description {\n    font-style: italic;\n    margin-bottom: 50px;\n}\n\n.itemTextContent > .info-wrapper {\n    vertical-align: center;\n    display: flex;\n    gap: 5px;\n\n}\n\n.itemTextContent > .info-wrapper > .price {\n    margin-right: auto;\n}\n\n.gf, .df {\n    color:  var(--accent);\n    border-bottom: 1px solid var(--accent);\n}\n\n/* pseudos */\n\nnav > button:hover {\n    color: var(--accent);\n}\n\nnav > button:focus:not(.selected) {\n    outline: none;\n    box-shadow: none;\n    border-bottom: 1px solid var(--light);\n    margin-top: 2px; \n    /* margin-top 2px makes up for the border shifting */\n}\n\n.selected {\n    outline: none;\n    box-shadow: none;\n\n    color: var(--accent);\n    border-bottom-color: var(--accent);\n    border-bottom-width: 1px;\n}\n\n.item-selected {\n    box-shadow: var(--shadow-large);\n}\n\n\n.expand-button:focus {\n    outline: none;\n    appearance: none;\n    background-color: var(--accent);\n}\n\n.expand-button:hover:not(.expand-button:focus) {\n    background-color: var(--accent);\n}\n\n.expandedBtn {\n    background-image: url(./img/icon/menu-down.svg);\n    /* height: 300px; */\n    /* color: var(--accent); */\n}\n\n.expandedImg {\n    height: 300px;\n    width: 100%;\n\n    filter: saturate(1);\n    filter: blur(0px);\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data/menuData.js":
/*!******************************!*\
  !*** ./src/data/menuData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuImages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuImages.js */ "./src/data/menuImages.js");


const menuData = {
    "Classic Croissant": {
        description: "Indulge in our flaky and buttery classic croissant, freshly baked to perfection. Perfect for breakfast or a midday snack.",
        price: "$2.50",
        glutenFree: true,
        dairyFree: false,
        image: _menuImages_js__WEBPACK_IMPORTED_MODULE_0__["default"][0] // Assigning the first image link from the array
    },
    "Chocolate Chip Muffin": {
        description: "Satisfy your sweet tooth with our irresistible chocolate chip muffin. Moist and fluffy, packed with gooey chocolate chips.",
        price: "$3.00",
        glutenFree: true,
        dairyFree: false,
        image: _menuImages_js__WEBPACK_IMPORTED_MODULE_0__["default"][1] // Assigning the second image link from the array
    },
    "Blueberry Scone": {
        description: "Start your day right with our delectable blueberry scone. Bursting with juicy blueberries and topped with a light glaze.",
        price: "$2.75",
        glutenFree: true,
        dairyFree: true,
        image: _menuImages_js__WEBPACK_IMPORTED_MODULE_0__["default"][2] // Assigning the third image link from the array
    },
    "Cinnamon Roll": {
        description: "Treat yourself to our mouthwatering cinnamon roll, swirled with cinnamon sugar and topped with creamy icing.",
        price: "$3.50",
        glutenFree: true,
        dairyFree: true,
        image: _menuImages_js__WEBPACK_IMPORTED_MODULE_0__["default"][3] // Assigning the fourth image link from the array
    },
    "Fruit Danish": {
        description: "Enjoy the fruity goodness of our fruit danish, filled with a variety of fresh fruits and drizzled with a sweet glaze.",
        price: "$3.25",
        glutenFree: false,
        dairyFree: false,
        image: _menuImages_js__WEBPACK_IMPORTED_MODULE_0__["default"][4] // Assigning the fifth image link from the array
    },
    "Almond Croissant": {
        description: "Experience the perfect blend of buttery croissant and almond goodness with our almond croissant, topped with sliced almonds for extra crunch.",
        price: "$3.00",
        glutenFree: true,
        dairyFree: false,
        image: _menuImages_js__WEBPACK_IMPORTED_MODULE_0__["default"][5] // Assigning the sixth image link from the array
    },
    "Lemon Poppy Seed Loaf": {
        description: "Brighten your day with our tangy lemon poppy seed loaf, infused with zesty lemon flavor and dotted with poppy seeds.",
        price: "$3.25",
        glutenFree: false,
        dairyFree: false,
        image: _menuImages_js__WEBPACK_IMPORTED_MODULE_0__["default"][6] // Assigning the seventh image link from the array
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuData);

/***/ }),

/***/ "./src/data/menuImages.js":
/*!********************************!*\
  !*** ./src/data/menuImages.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_menu_alex_lvrs_aX_ljOOyWJY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/menu/alex-lvrs-aX_ljOOyWJY-unsplash.jpg */ "./src/img/menu/alex-lvrs-aX_ljOOyWJY-unsplash.jpg");
/* harmony import */ var _img_menu_alex_lvrs_On2VseHUDXw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/menu/alex-lvrs-On2VseHUDXw-unsplash.jpg */ "./src/img/menu/alex-lvrs-On2VseHUDXw-unsplash.jpg");
/* harmony import */ var _img_menu_brina_blum_surQ2mkZNxw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/menu/brina-blum-surQ2mkZNxw-unsplash.jpg */ "./src/img/menu/brina-blum-surQ2mkZNxw-unsplash.jpg");
/* harmony import */ var _img_menu_heather_barnes_WbZesfqwR_A_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/menu/heather-barnes-WbZesfqwR-A-unsplash.jpg */ "./src/img/menu/heather-barnes-WbZesfqwR-A-unsplash.jpg");
/* harmony import */ var _img_menu_nicholas_doyle_t7jTtJ9iyUE_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/menu/nicholas-doyle-t7jTtJ9iyUE-unsplash.jpg */ "./src/img/menu/nicholas-doyle-t7jTtJ9iyUE-unsplash.jpg");
/* harmony import */ var _img_menu_sergio_arze_5msGxboneMA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/menu/sergio-arze-5msGxboneMA-unsplash.jpg */ "./src/img/menu/sergio-arze-5msGxboneMA-unsplash.jpg");
/* harmony import */ var _img_menu_yulia_khlebnikova_29D6U5sZfjk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/menu/yulia-khlebnikova-29D6U5sZfjk-unsplash.jpg */ "./src/img/menu/yulia-khlebnikova-29D6U5sZfjk-unsplash.jpg");









const menuImages = [
    _img_menu_alex_lvrs_aX_ljOOyWJY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__,
    _img_menu_alex_lvrs_On2VseHUDXw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__,
    _img_menu_brina_blum_surQ2mkZNxw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__,
    _img_menu_heather_barnes_WbZesfqwR_A_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__,
    _img_menu_nicholas_doyle_t7jTtJ9iyUE_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__,
    _img_menu_sergio_arze_5msGxboneMA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__,
    _img_menu_yulia_khlebnikova_29D6U5sZfjk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuImages);

/***/ }),

/***/ "./src/loaders/loadContent.js":
/*!************************************!*\
  !*** ./src/loaders/loadContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/loaders/pages.js");


let loadContent = function(pageName) {
    const target = document.querySelector('#content')

    // remove all current content
    while (target.firstChild) {
        target.removeChild(target.firstChild)
    }

    // invoke page
    _pages__WEBPACK_IMPORTED_MODULE_0__["default"][pageName](target)
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContent);

/***/ }),

/***/ "./src/loaders/navBar.js":
/*!*******************************!*\
  !*** ./src/loaders/navBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadContent.js */ "./src/loaders/loadContent.js");
/* harmony import */ var _utility_styleSelected_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/styleSelected.js */ "./src/utility/styleSelected.js");



function navBar() {
    document.addEventListener('DOMContentLoaded', () => {
        (0,_loadContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])('about');
    });

    const nav = document.querySelector('nav')

    function handleNavBtn(btn) {
        ;(0,_utility_styleSelected_js__WEBPACK_IMPORTED_MODULE_1__["default"])(btn, nav, 'button', 'selected')
        ;(0,_loadContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(btn.id)
    }

    nav.addEventListener('click', e => {
        const button = e.target.closest('button');
        if (button === null) {
            console.log('nav tab error')
            return
        }
        // let id = button.id
        // console.log(button.id)

        handleNavBtn(button)
        
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);

/***/ }),

/***/ "./src/loaders/pages.js":
/*!******************************!*\
  !*** ./src/loaders/pages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/homePage.js */ "./src/pages/homePage.js");
/* harmony import */ var _pages_menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menuPage.js */ "./src/pages/menuPage.js");
/* harmony import */ var _pages_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/aboutPage.js */ "./src/pages/aboutPage.js");





let pages = (function() {

    let avaliable = { 
        'home' : _pages_homePage_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        'menu': _pages_menuPage_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        'about' : _pages_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__["default"]
    }

    return avaliable

})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pages);

/***/ }),

/***/ "./src/pages/aboutPage.js":
/*!********************************!*\
  !*** ./src/pages/aboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/createEl.js */ "./src/utility/createEl.js");
/* harmony import */ var _utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/attachEl.js */ "./src/utility/attachEl.js");




function aboutPage(target) {
    let test = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'testing'})
    test.textContent = 'about page'
    ;(0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(test, target, 'append')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);






// const footer = createEl.div({'class' : 'footer'});
// const contacts = createEl.element('ul', {'class' : 'contacts'})
// const phone = createEl.element('li', {'class' : 'info'})
// phone.textContent = '02 3029 1785'
// const email = createEl.element('li', {'class' : 'info'})
// email.textContent = 'bakery@bordeaux.co.nz'
// const address = createEl.element('li', {'class' : 'info'})
// address.textContent = '79 Thereux Way, Marseilles Quarter'
// contacts.appendChild(phone)
// contacts.appendChild(email)
// contacts.appendChild(address)
// footer.appendChild(contacts)

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/createEl.js */ "./src/utility/createEl.js");
/* harmony import */ var _utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/attachEl.js */ "./src/utility/attachEl.js");
/* harmony import */ var _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hero.jpg */ "./src/img/hero.jpg");




const lorem = "Consectetur adipisicing elit. Sequi quos odio error quasi omnis dignissimos maxime ipsa mollitia reiciendis accusamus. Lorem cumque ea facere debitis molestias rerum cum numquam esse architecto magni adipisci."

function homePage(target) {
    let title = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'title'})
    title.textContent = 'Bakery Bordeaux'

    const hero = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'hero'})
    const heroImg = new Image()
    heroImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__
    hero.appendChild(heroImg)

    const paraWrap = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].element('div', {'class' : 'para-wrap'})
    const para = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].element('p', {'class' : 'para'})
    para.textContent = lorem
    paraWrap.appendChild(para)
    
    ;(0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(title, target, 'append')
    ;(0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(hero, target, 'append')
    ;(0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(paraWrap, target, 'append')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);



/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/createEl.js */ "./src/utility/createEl.js");
/* harmony import */ var _utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/attachEl.js */ "./src/utility/attachEl.js");
/* harmony import */ var _data_menuData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/menuData.js */ "./src/data/menuData.js");
/* harmony import */ var _utility_styleSelected_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/styleSelected.js */ "./src/utility/styleSelected.js");










function menuPage(target) {

    let guide = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'guide'})
        let guideTitle  = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'guide-title'})
        guideTitle.textContent = `Allergens`
        guide.appendChild(guideTitle)

        let guideText =  _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'guide-text'})
        guideText.textContent = 'GF ~ Gluten free  |  DF ~ Dairy free'
        guide.appendChild(guideText)
    target.appendChild(guide)


    
    let sectionTitle = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'section-title'})
    sectionTitle.textContent = 'Sweet Items'
    target.appendChild(sectionTitle)
    
    let menuWrapper = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'menu-wrapper'})

    function handleExpandBtn(btn) {
        if (btn.classList.contains('expandedBtn')) {
            btn.classList.remove('expandedBtn')
            btn.parentElement.querySelector('img').classList.remove('expandedImg')
            btn.parentElement.classList.remove('item-selected')
        } else {
            (0,_utility_styleSelected_js__WEBPACK_IMPORTED_MODULE_3__["default"])(btn, menuWrapper, 'button', 'expandedBtn')
            ;(0,_utility_styleSelected_js__WEBPACK_IMPORTED_MODULE_3__["default"])(btn.parentElement.querySelector('img'), menuWrapper, 'img', 'expandedImg')
            ;(0,_utility_styleSelected_js__WEBPACK_IMPORTED_MODULE_3__["default"])(btn.parentElement, menuWrapper, 'div', 'item-selected')
        }
    }

    function collapseAll() {
        let btns = menuWrapper.querySelectorAll('button')
        btns.forEach(btn => {
            btn.classList.remove('expandedBtn')
            btn.textContent = ''
        })

        let images = menuWrapper.querySelectorAll('img')        
        images.forEach(image => image.classList.remove('expandedImg'))

        let items = menuWrapper.querySelectorAll('.item-wrapper')
        items.forEach(item => item.classList.remove('item-selected'))
        
    }

    menuWrapper.addEventListener('click', e => {
        const button = e.target.closest('button');
        if (button == null) {
            collapseAll()
            console.log('clicked outside')
            return
        }
        handleExpandBtn(button)
    })


    for (let entry in _data_menuData_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {

        let currentItem = _data_menuData_js__WEBPACK_IMPORTED_MODULE_2__["default"][entry]
        
        let itemWrapper = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'item-wrapper'})

        let expandBtn = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].element('button', {'class' : 'expand-button'})
        itemWrapper.appendChild(expandBtn)

        let photo = new Image()
        photo.src = currentItem.image
        photo.classList.add('item-photo')
        itemWrapper.appendChild(photo)

        let textContent = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'itemTextContent'})

        let title = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'item-title'})
            title.textContent = entry
        textContent.appendChild(title)

        let description = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'item-description'})
            description.textContent = currentItem.description
        textContent.appendChild(description)

        let infoWrapper = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'info-wrapper'})
            let price = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'price'})
                price.textContent = currentItem.price
            infoWrapper.appendChild(price)

            let gf = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'gf'})
                gf.textContent = (function() {
                    return currentItem.glutenFree === true ? 'GF' : ''
                })()
            infoWrapper.appendChild(gf)

            let df = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'df'})
            df.textContent = (function() {
                return currentItem.dairyFree === true ? 'DF' : ''
            })()
            infoWrapper.appendChild(df)
        textContent.appendChild(infoWrapper)


        ;(0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(textContent, itemWrapper, 'append')

        ;(0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(itemWrapper, menuWrapper, 'append')

    }

    // make first item open on load
    let firstBtn = menuWrapper.querySelector('button')
    handleExpandBtn(firstBtn)

    ;(0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(menuWrapper, target, 'append')
}


// MENU GENERATOR
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./src/utility/attachEl.js":
/*!*********************************!*\
  !*** ./src/utility/attachEl.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function attachEl(source, target, position) {
    switch (position) {
        case 'before': {
            target.parentNode.insertBefore(source, target);
            break;
        }
        case 'after': {
            if (target.nextSibling) {
                target.parentNode.insertBefore(source, target.nextSibling);
            } else {
                target.parentNode.appendChild(source)
            }
        }
        case 'append': {
            target.appendChild(source)
        }
    }
    // USAGE:
    // attach(table, div, 'before');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attachEl);

/***/ }),

/***/ "./src/utility/createEl.js":
/*!*********************************!*\
  !*** ./src/utility/createEl.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createEl = (function(document){
    let api = {
        element: function (name, attributes) {
            var el = document.createElement(name);

            if (attributes) {
                for (let key in attributes) {
                    if (attributes.hasOwnProperty(key)) {
                        el.setAttribute(key, attributes[key]);
                    }
                }
            }
            return el
        },

        div: function (attributes) {
            return api.element('div', attributes)
        }
    }

    return api

    // USAGE:
    // var div = createEl.div({ 'class': 'hero' });
    // var para = createEl.element('p', { 'class': 'para' });   
}(window.document));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEl);


/***/ }),

/***/ "./src/utility/styleSelected.js":
/*!**************************************!*\
  !*** ./src/utility/styleSelected.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let styleSelected = function(target, parent, childType, style) {


    let childrens = parent.querySelectorAll(childType)


    for (let child of childrens) {
        if (child === target) {
            child.classList.add(style)
        } else {
            child.classList.remove(style)
        }
    }

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleSelected);

/***/ }),

/***/ "./src/font/MontserratAlternates-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/font/MontserratAlternates-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17043267bfe178ef8921.ttf";

/***/ }),

/***/ "./src/font/PlayfairDisplay-Italic-VariableFont_wght.ttf":
/*!***************************************************************!*\
  !*** ./src/font/PlayfairDisplay-Italic-VariableFont_wght.ttf ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "597cf3569777ae281144.ttf";

/***/ }),

/***/ "./src/font/PlayfairDisplay-VariableFont_wght.ttf":
/*!********************************************************!*\
  !*** ./src/font/PlayfairDisplay-VariableFont_wght.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf46a6bcddc9999a295e.ttf";

/***/ }),

/***/ "./src/img/hero.jpg":
/*!**************************!*\
  !*** ./src/img/hero.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e55cd622868c2572661.jpg";

/***/ }),

/***/ "./src/img/icon/menu-down.svg":
/*!************************************!*\
  !*** ./src/img/icon/menu-down.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09850ba33147031eed05.svg";

/***/ }),

/***/ "./src/img/icon/menu-up.svg":
/*!**********************************!*\
  !*** ./src/img/icon/menu-up.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3afdfaf1d50e5cc8e070.svg";

/***/ }),

/***/ "./src/img/menu/alex-lvrs-On2VseHUDXw-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/img/menu/alex-lvrs-On2VseHUDXw-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c1502cf5910cf05ab33.jpg";

/***/ }),

/***/ "./src/img/menu/alex-lvrs-aX_ljOOyWJY-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/img/menu/alex-lvrs-aX_ljOOyWJY-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c700fc19a2d10e6b9fee.jpg";

/***/ }),

/***/ "./src/img/menu/brina-blum-surQ2mkZNxw-unsplash.jpg":
/*!**********************************************************!*\
  !*** ./src/img/menu/brina-blum-surQ2mkZNxw-unsplash.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "128da437419918e9238a.jpg";

/***/ }),

/***/ "./src/img/menu/heather-barnes-WbZesfqwR-A-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/img/menu/heather-barnes-WbZesfqwR-A-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "269256811872333dbf6e.jpg";

/***/ }),

/***/ "./src/img/menu/nicholas-doyle-t7jTtJ9iyUE-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/img/menu/nicholas-doyle-t7jTtJ9iyUE-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f053a123885e269c0bb3.jpg";

/***/ }),

/***/ "./src/img/menu/sergio-arze-5msGxboneMA-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/img/menu/sergio-arze-5msGxboneMA-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e51a8361d6c3534c472e.jpg";

/***/ }),

/***/ "./src/img/menu/yulia-khlebnikova-29D6U5sZfjk-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/img/menu/yulia-khlebnikova-29D6U5sZfjk-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c913d67b4793bbe89b9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loaders_navBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaders/navBar.js */ "./src/loaders/navBar.js");



(0,_loaders_navBar_js__WEBPACK_IMPORTED_MODULE_1__["default"])()




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21COztBQUV4Qyw4REFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kYXRhL21lbnVEYXRhLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kYXRhL21lbnVJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRlcnMvbG9hZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRlcnMvbmF2QmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkZXJzL3BhZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0eS9hdHRhY2hFbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0eS9jcmVhdGVFbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0eS9zdHlsZVNlbGVjdGVkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9QbGF5ZmFpckRpc3BsYXktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udC9Nb250c2VycmF0QWx0ZXJuYXRlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2hlcm8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvaWNvbi9tZW51LXVwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1nL2ljb24vbWVudS1kb3duLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLyogZGFyayBtb2RlKi9cbiAgICAvKiAtLWFjY2VudDogcmdiKDI1NSwgMTc1LCAxMDApO1xuICAgIC0tZGFyazogIzEyMTIxMjtcbiAgICAtLWxpZ2h0OiAjZWZlZmVmO1xuICAgIC0tbWlkOiByZ2IoMTg5LCAxODksIDE4OSk7ICovXG4vKiBcbiAgICAtLXNoYWRvdy1zbWFsbDogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAycHggOHB4IDBweDtcbiAgICAtLXNoYWRvdy1sYXJnZTogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4OyAqL1xuXG5cbiAgICAvKiBsaWdodCBtb2RlICovXG4gICAgLS1hY2NlbnQ6IHJnYigxMDAsIDE1OSwgMjU1KTtcbiAgICAtLWRhcms6ICNlZmVmZWY7XG4gICAgLS1saWdodDogIzEwMTAxMDtcbiAgICAtLW1pZDogcmdiKDg5LCA4OSwgODkpO1xuXG4gICAgLS1zaGFkb3ctc21hbGw6IHJnYmEoMzMsIDM1LCAzOCwgMC4xKSAwcHggMTBweCAxMHB4IC0xMHB4O1xuICAgIC0tc2hhZG93LWxhcmdlOiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCA1cHggMTVweCAwcHg7XG5cblxuICAgIC8qIHR4dCBzaXplICovXG4gICAgLS1zaXplLWRpc3BsYXk6IDc4cHg7XG4gICAgLS1zaXplLWNvbnRlbnQ6IDMzcHg7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncGxheWZhaXInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4vKiAgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi8qICAqL1xuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBmdXR1cmE7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZywgcGljdHVyZSwgc3ZnLCB2aWRlbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLW1haW4pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMDtcbn1cblxubmF2ID4gYnV0dG9uIHtcbiAgICAvKiBsZXR0ZXItc3BhY2luZzogM3B4OyAqL1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG5cbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLW91dDtcbn1cblxuI2NvbnRlbnQge1xuXG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLWRpc3BsYXkpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogMTEwJTsgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyMCU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuLmhlcm8ge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmhlcm8gPiBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN1YnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbi5wYXJhLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyNSU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcbn1cblxuLnBhcmEge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWF4LXdpZHRoOiA0NWNoO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4ubWVudS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDAgNTBweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDUwcHg7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiAwcHg7XG59XG5cbi5pdGVtLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNTAlO1xuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtYWxsKTtcblxuXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uaXRlbS1waG90byB7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICBmaWx0ZXI6IGJsdXIoMnB4KSBzYXR1cmF0ZSgwLjUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBlYXNlLWluLW91dCwgaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7IFxufVxuXG4uZXhwYW5kLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAycHg7XG4gICAgdG9wOiAycHg7IFxuXG4gICAgLyogd2lkdGg6IDIwcHg7ICovXG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBhZGRpbmc6IDNweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gICAgLyogYmFja2dyb3VuZDogdmFyKC0tbWlkKTsgKi9cbiAgICAvKiBib3JkZXItcmFkaXVzOiAzcHg7ICovXG4gICAgLyogcGFkZGluZzogM3B4OyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuXG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgICBcblxuICAgIC8qIHRleHQtYWxpZ246IGp1c3RpZnk7ICovXG4gICAgLyogZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7ICovXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5pdGVtVGV4dENvbnRlbnQsIC5ndWlkZSwgLnNlY3Rpb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmd1aWRlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ndWlkZS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbi5ndWlkZS10ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSwgLml0ZW0tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBtYXgtd2lkdGg6IDQ1Y2g7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcblxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgZm9udC1zaXplOiAycmVtO1xuXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9oZXJvLmpwZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgNSU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7ICovXG5cbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5cbi5pdGVtVGV4dENvbnRlbnQgPiAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5pdGVtVGV4dENvbnRlbnQgPiAuaW5mby13cmFwcGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG5cbn1cblxuLml0ZW1UZXh0Q29udGVudCA+IC5pbmZvLXdyYXBwZXIgPiAucHJpY2Uge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmdmLCAuZGYge1xuICAgIGNvbG9yOiAgdmFyKC0tYWNjZW50KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50KTtcbn1cblxuLyogcHNldWRvcyAqL1xuXG5uYXYgPiBidXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG5uYXYgPiBidXR0b246Zm9jdXM6bm90KC5zZWxlY3RlZCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQpO1xuICAgIG1hcmdpbi10b3A6IDJweDsgXG4gICAgLyogbWFyZ2luLXRvcCAycHggbWFrZXMgdXAgZm9yIHRoZSBib3JkZXIgc2hpZnRpbmcgKi9cbn1cblxuLnNlbGVjdGVkIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbn1cblxuLml0ZW0tc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sYXJnZSk7XG59XG5cblxuLmV4cGFuZC1idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4uZXhwYW5kLWJ1dHRvbjpob3Zlcjpub3QoLmV4cGFuZC1idXR0b246Zm9jdXMpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4uZXhwYW5kZWRCdG4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuICAgIC8qIGNvbG9yOiB2YXIoLS1hY2NlbnQpOyAqL1xufVxuXG4uZXhwYW5kZWRJbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDEpO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuXG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYjs7O2dDQUc0QjtBQUNoQzs7a01BRWtNOzs7SUFHOUwsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjs7SUFFdEIseURBQXlEO0lBQ3pELG9EQUFvRDs7O0lBR3BELGFB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LG1CQUFtQjtJQUNuQixpQkFBaUI7O0FBRXJCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLyogZGFyayBtb2RlKi9cXG4gICAgLyogLS1hY2NlbnQ6IHJnYigyNTUsIDE3NSwgMTAwKTtcXG4gICAgLS1kYXJrOiAjMTIxMjEyO1xcbiAgICAtLWxpZ2h0OiAjZWZlZmVmO1xcbiAgICAtLW1pZDogcmdiKDE4OSwgMTg5LCAxODkpOyAqL1xcbi8qIFxcbiAgICAtLXNoYWRvdy1zbWFsbDogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAycHggOHB4IDBweDtcXG4gICAgLS1zaGFkb3ctbGFyZ2U6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDsgKi9cXG5cXG5cXG4gICAgLyogbGlnaHQgbW9kZSAqL1xcbiAgICAtLWFjY2VudDogcmdiKDEwMCwgMTU5LCAyNTUpO1xcbiAgICAtLWRhcms6ICNlZmVmZWY7XFxuICAgIC0tbGlnaHQ6ICMxMDEwMTA7XFxuICAgIC0tbWlkOiByZ2IoODksIDg5LCA4OSk7XFxuXFxuICAgIC0tc2hhZG93LXNtYWxsOiByZ2JhKDMzLCAzNSwgMzgsIDAuMSkgMHB4IDEwcHggMTBweCAtMTBweDtcXG4gICAgLS1zaGFkb3ctbGFyZ2U6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDVweCAxNXB4IDBweDtcXG5cXG5cXG4gICAgLyogdHh0IHNpemUgKi9cXG4gICAgLS1zaXplLWRpc3BsYXk6IDc4cHg7XFxuICAgIC0tc2l6ZS1jb250ZW50OiAzM3B4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnQvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnQvUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiAgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udC9Nb250c2VycmF0QWx0ZXJuYXRlcy1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGZ1dHVyYTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLCBwaWN0dXJlLCBzdmcsIHZpZGVvIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtbWFpbik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweCAwIDA7XFxufVxcblxcbm5hdiA+IGJ1dHRvbiB7XFxuICAgIC8qIGxldHRlci1zcGFjaW5nOiAzcHg7ICovXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS1kaXNwbGF5KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICBcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2hlcm8uanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogMTEwJTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjAlO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi5oZXJvID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ucGFyYS13cmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAncGxheWZhaXInO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9oZXJvLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyNSU7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNSk7XFxufVxcblxcbi5wYXJhIHtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgbWF4LXdpZHRoOiA0NWNoO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMjVweCAwIDUwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IDBweDtcXG59XFxuXFxuLml0ZW0td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcbiAgICAvKiBib3JkZXItcmFkaXVzOiAzcHg7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbWFsbCk7XFxuXFxuXFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLml0ZW0tcGhvdG8ge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICAgIGZpbHRlcjogYmx1cigycHgpIHNhdHVyYXRlKDAuNSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjJzIGVhc2UtaW4tb3V0LCBoZWlnaHQgMC41cyBlYXNlLWluLW91dDsgXFxufVxcblxcbi5leHBhbmQtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMnB4O1xcbiAgICB0b3A6IDJweDsgXFxuXFxuICAgIC8qIHdpZHRoOiAyMHB4OyAqL1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAzcHggMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuXFxuICAgIC8qIGJhY2tncm91bmQ6IHZhcigtLW1pZCk7ICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDNweDsgKi9cXG4gICAgLyogcGFkZGluZzogM3B4OyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXG5cXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb24vbWVudS11cC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XFxuICAgIFxcblxcbiAgICAvKiB0ZXh0LWFsaWduOiBqdXN0aWZ5OyAqL1xcbiAgICAvKiBmb250LWZhbWlseTogJ3BsYXlmYWlyJzsgKi9cXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uaXRlbVRleHRDb250ZW50LCAuZ3VpZGUsIC5zZWN0aW9uLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmd1aWRlIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ndWlkZS10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogNTBweCAwO1xcbn1cXG5cXG4uZ3VpZGUtdGV4dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlLCAuaXRlbS10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICBtYXgtd2lkdGg6IDQ1Y2g7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2hlcm8uanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJSA1JTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7ICovXFxuXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuXFxuLml0ZW1UZXh0Q29udGVudCA+IC5pdGVtLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uaXRlbVRleHRDb250ZW50ID4gLmluZm8td3JhcHBlciB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcblxcbn1cXG5cXG4uaXRlbVRleHRDb250ZW50ID4gLmluZm8td3JhcHBlciA+IC5wcmljZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmdmLCAuZGYge1xcbiAgICBjb2xvcjogIHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4vKiBwc2V1ZG9zICovXFxuXFxubmF2ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbm5hdiA+IGJ1dHRvbjpmb2N1czpub3QoLnNlbGVjdGVkKSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodCk7XFxuICAgIG1hcmdpbi10b3A6IDJweDsgXFxuICAgIC8qIG1hcmdpbi10b3AgMnB4IG1ha2VzIHVwIGZvciB0aGUgYm9yZGVyIHNoaWZ0aW5nICovXFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5pdGVtLXNlbGVjdGVkIHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxhcmdlKTtcXG59XFxuXFxuXFxuLmV4cGFuZC1idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4uZXhwYW5kLWJ1dHRvbjpob3Zlcjpub3QoLmV4cGFuZC1idXR0b246Zm9jdXMpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLmV4cGFuZGVkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb24vbWVudS1kb3duLnN2Zyk7XFxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXFxuICAgIC8qIGNvbG9yOiB2YXIoLS1hY2NlbnQpOyAqL1xcbn1cXG5cXG4uZXhwYW5kZWRJbWcge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxKTtcXG4gICAgZmlsdGVyOiBibHVyKDBweCk7XFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1lbnVJbWFnZXMgZnJvbSAnLi9tZW51SW1hZ2VzLmpzJztcblxuY29uc3QgbWVudURhdGEgPSB7XG4gICAgXCJDbGFzc2ljIENyb2lzc2FudFwiOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZHVsZ2UgaW4gb3VyIGZsYWt5IGFuZCBidXR0ZXJ5IGNsYXNzaWMgY3JvaXNzYW50LCBmcmVzaGx5IGJha2VkIHRvIHBlcmZlY3Rpb24uIFBlcmZlY3QgZm9yIGJyZWFrZmFzdCBvciBhIG1pZGRheSBzbmFjay5cIixcbiAgICAgICAgcHJpY2U6IFwiJDIuNTBcIixcbiAgICAgICAgZ2x1dGVuRnJlZTogdHJ1ZSxcbiAgICAgICAgZGFpcnlGcmVlOiBmYWxzZSxcbiAgICAgICAgaW1hZ2U6IG1lbnVJbWFnZXNbMF0gLy8gQXNzaWduaW5nIHRoZSBmaXJzdCBpbWFnZSBsaW5rIGZyb20gdGhlIGFycmF5XG4gICAgfSxcbiAgICBcIkNob2NvbGF0ZSBDaGlwIE11ZmZpblwiOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNhdGlzZnkgeW91ciBzd2VldCB0b290aCB3aXRoIG91ciBpcnJlc2lzdGlibGUgY2hvY29sYXRlIGNoaXAgbXVmZmluLiBNb2lzdCBhbmQgZmx1ZmZ5LCBwYWNrZWQgd2l0aCBnb29leSBjaG9jb2xhdGUgY2hpcHMuXCIsXG4gICAgICAgIHByaWNlOiBcIiQzLjAwXCIsXG4gICAgICAgIGdsdXRlbkZyZWU6IHRydWUsXG4gICAgICAgIGRhaXJ5RnJlZTogZmFsc2UsXG4gICAgICAgIGltYWdlOiBtZW51SW1hZ2VzWzFdIC8vIEFzc2lnbmluZyB0aGUgc2Vjb25kIGltYWdlIGxpbmsgZnJvbSB0aGUgYXJyYXlcbiAgICB9LFxuICAgIFwiQmx1ZWJlcnJ5IFNjb25lXCI6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3RhcnQgeW91ciBkYXkgcmlnaHQgd2l0aCBvdXIgZGVsZWN0YWJsZSBibHVlYmVycnkgc2NvbmUuIEJ1cnN0aW5nIHdpdGgganVpY3kgYmx1ZWJlcnJpZXMgYW5kIHRvcHBlZCB3aXRoIGEgbGlnaHQgZ2xhemUuXCIsXG4gICAgICAgIHByaWNlOiBcIiQyLjc1XCIsXG4gICAgICAgIGdsdXRlbkZyZWU6IHRydWUsXG4gICAgICAgIGRhaXJ5RnJlZTogdHJ1ZSxcbiAgICAgICAgaW1hZ2U6IG1lbnVJbWFnZXNbMl0gLy8gQXNzaWduaW5nIHRoZSB0aGlyZCBpbWFnZSBsaW5rIGZyb20gdGhlIGFycmF5XG4gICAgfSxcbiAgICBcIkNpbm5hbW9uIFJvbGxcIjoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJUcmVhdCB5b3Vyc2VsZiB0byBvdXIgbW91dGh3YXRlcmluZyBjaW5uYW1vbiByb2xsLCBzd2lybGVkIHdpdGggY2lubmFtb24gc3VnYXIgYW5kIHRvcHBlZCB3aXRoIGNyZWFteSBpY2luZy5cIixcbiAgICAgICAgcHJpY2U6IFwiJDMuNTBcIixcbiAgICAgICAgZ2x1dGVuRnJlZTogdHJ1ZSxcbiAgICAgICAgZGFpcnlGcmVlOiB0cnVlLFxuICAgICAgICBpbWFnZTogbWVudUltYWdlc1szXSAvLyBBc3NpZ25pbmcgdGhlIGZvdXJ0aCBpbWFnZSBsaW5rIGZyb20gdGhlIGFycmF5XG4gICAgfSxcbiAgICBcIkZydWl0IERhbmlzaFwiOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVuam95IHRoZSBmcnVpdHkgZ29vZG5lc3Mgb2Ygb3VyIGZydWl0IGRhbmlzaCwgZmlsbGVkIHdpdGggYSB2YXJpZXR5IG9mIGZyZXNoIGZydWl0cyBhbmQgZHJpenpsZWQgd2l0aCBhIHN3ZWV0IGdsYXplLlwiLFxuICAgICAgICBwcmljZTogXCIkMy4yNVwiLFxuICAgICAgICBnbHV0ZW5GcmVlOiBmYWxzZSxcbiAgICAgICAgZGFpcnlGcmVlOiBmYWxzZSxcbiAgICAgICAgaW1hZ2U6IG1lbnVJbWFnZXNbNF0gLy8gQXNzaWduaW5nIHRoZSBmaWZ0aCBpbWFnZSBsaW5rIGZyb20gdGhlIGFycmF5XG4gICAgfSxcbiAgICBcIkFsbW9uZCBDcm9pc3NhbnRcIjoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJFeHBlcmllbmNlIHRoZSBwZXJmZWN0IGJsZW5kIG9mIGJ1dHRlcnkgY3JvaXNzYW50IGFuZCBhbG1vbmQgZ29vZG5lc3Mgd2l0aCBvdXIgYWxtb25kIGNyb2lzc2FudCwgdG9wcGVkIHdpdGggc2xpY2VkIGFsbW9uZHMgZm9yIGV4dHJhIGNydW5jaC5cIixcbiAgICAgICAgcHJpY2U6IFwiJDMuMDBcIixcbiAgICAgICAgZ2x1dGVuRnJlZTogdHJ1ZSxcbiAgICAgICAgZGFpcnlGcmVlOiBmYWxzZSxcbiAgICAgICAgaW1hZ2U6IG1lbnVJbWFnZXNbNV0gLy8gQXNzaWduaW5nIHRoZSBzaXh0aCBpbWFnZSBsaW5rIGZyb20gdGhlIGFycmF5XG4gICAgfSxcbiAgICBcIkxlbW9uIFBvcHB5IFNlZWQgTG9hZlwiOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJyaWdodGVuIHlvdXIgZGF5IHdpdGggb3VyIHRhbmd5IGxlbW9uIHBvcHB5IHNlZWQgbG9hZiwgaW5mdXNlZCB3aXRoIHplc3R5IGxlbW9uIGZsYXZvciBhbmQgZG90dGVkIHdpdGggcG9wcHkgc2VlZHMuXCIsXG4gICAgICAgIHByaWNlOiBcIiQzLjI1XCIsXG4gICAgICAgIGdsdXRlbkZyZWU6IGZhbHNlLFxuICAgICAgICBkYWlyeUZyZWU6IGZhbHNlLFxuICAgICAgICBpbWFnZTogbWVudUltYWdlc1s2XSAvLyBBc3NpZ25pbmcgdGhlIHNldmVudGggaW1hZ2UgbGluayBmcm9tIHRoZSBhcnJheVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVEYXRhOyIsImltcG9ydCBpbWcxIGZyb20gJy4uL2ltZy9tZW51L2FsZXgtbHZycy1hWF9sak9PeVdKWS11bnNwbGFzaC5qcGcnXG5pbXBvcnQgaW1nMiBmcm9tICcuLi9pbWcvbWVudS9hbGV4LWx2cnMtT24yVnNlSFVEWHctdW5zcGxhc2guanBnJ1xuaW1wb3J0IGltZzMgZnJvbSAnLi4vaW1nL21lbnUvYnJpbmEtYmx1bS1zdXJRMm1rWk54dy11bnNwbGFzaC5qcGcnXG5pbXBvcnQgaW1nNCBmcm9tICcuLi9pbWcvbWVudS9oZWF0aGVyLWJhcm5lcy1XYlplc2Zxd1ItQS11bnNwbGFzaC5qcGcnXG5pbXBvcnQgaW1nNSBmcm9tICcuLi9pbWcvbWVudS9uaWNob2xhcy1kb3lsZS10N2pUdEo5aXlVRS11bnNwbGFzaC5qcGcnXG5pbXBvcnQgaW1nNiBmcm9tICcuLi9pbWcvbWVudS9zZXJnaW8tYXJ6ZS01bXNHeGJvbmVNQS11bnNwbGFzaC5qcGcnXG5pbXBvcnQgaW1nNyBmcm9tICcuLi9pbWcvbWVudS95dWxpYS1raGxlYm5pa292YS0yOUQ2VTVzWmZqay11bnNwbGFzaC5qcGcnXG5cblxuY29uc3QgbWVudUltYWdlcyA9IFtcbiAgICBpbWcxLFxuICAgIGltZzIsXG4gICAgaW1nMyxcbiAgICBpbWc0LFxuICAgIGltZzUsXG4gICAgaW1nNixcbiAgICBpbWc3XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51SW1hZ2VzOyIsImltcG9ydCBwYWdlcyBmcm9tICcuL3BhZ2VzJ1xuXG5sZXQgbG9hZENvbnRlbnQgPSBmdW5jdGlvbihwYWdlTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIC8vIHJlbW92ZSBhbGwgY3VycmVudCBjb250ZW50XG4gICAgd2hpbGUgKHRhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZCh0YXJnZXQuZmlyc3RDaGlsZClcbiAgICB9XG5cbiAgICAvLyBpbnZva2UgcGFnZVxuICAgIHBhZ2VzW3BhZ2VOYW1lXSh0YXJnZXQpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRlbnQiLCJpbXBvcnQgbG9hZENvbnRlbnQgZnJvbSAnLi9sb2FkQ29udGVudC5qcyc7XG5pbXBvcnQgc3R5bGVTZWxlY3RlZCBmcm9tICcuLi91dGlsaXR5L3N0eWxlU2VsZWN0ZWQuanMnO1xuXG5mdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgbG9hZENvbnRlbnQoJ2Fib3V0Jyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2QnRuKGJ0bikge1xuICAgICAgICBzdHlsZVNlbGVjdGVkKGJ0biwgbmF2LCAnYnV0dG9uJywgJ3NlbGVjdGVkJylcbiAgICAgICAgbG9hZENvbnRlbnQoYnRuLmlkKVxuICAgIH1cblxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTtcbiAgICAgICAgaWYgKGJ1dHRvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25hdiB0YWIgZXJyb3InKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IGlkID0gYnV0dG9uLmlkXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJ1dHRvbi5pZClcblxuICAgICAgICBoYW5kbGVOYXZCdG4oYnV0dG9uKVxuICAgICAgICBcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhcjsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi4vcGFnZXMvaG9tZVBhZ2UuanMnXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi4vcGFnZXMvbWVudVBhZ2UuanMnXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gJy4uL3BhZ2VzL2Fib3V0UGFnZS5qcydcblxuXG5sZXQgcGFnZXMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgYXZhbGlhYmxlID0geyBcbiAgICAgICAgJ2hvbWUnIDogaG9tZVBhZ2UsXG4gICAgICAgICdtZW51JzogbWVudVBhZ2UsXG4gICAgICAgICdhYm91dCcgOiBhYm91dFBhZ2VcbiAgICB9XG5cbiAgICByZXR1cm4gYXZhbGlhYmxlXG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgcGFnZXMiLCJpbXBvcnQgY3JlYXRlRWwgZnJvbSAnLi4vdXRpbGl0eS9jcmVhdGVFbC5qcydcbmltcG9ydCBhdHRhY2hFbCBmcm9tICcuLi91dGlsaXR5L2F0dGFjaEVsLmpzJ1xuXG5cbmZ1bmN0aW9uIGFib3V0UGFnZSh0YXJnZXQpIHtcbiAgICBsZXQgdGVzdCA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICd0ZXN0aW5nJ30pXG4gICAgdGVzdC50ZXh0Q29udGVudCA9ICdhYm91dCBwYWdlJ1xuICAgIGF0dGFjaEVsKHRlc3QsIHRhcmdldCwgJ2FwcGVuZCcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0UGFnZTtcblxuXG5cblxuXG5cbi8vIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdmb290ZXInfSk7XG4vLyBjb25zdCBjb250YWN0cyA9IGNyZWF0ZUVsLmVsZW1lbnQoJ3VsJywgeydjbGFzcycgOiAnY29udGFjdHMnfSlcbi8vIGNvbnN0IHBob25lID0gY3JlYXRlRWwuZWxlbWVudCgnbGknLCB7J2NsYXNzJyA6ICdpbmZvJ30pXG4vLyBwaG9uZS50ZXh0Q29udGVudCA9ICcwMiAzMDI5IDE3ODUnXG4vLyBjb25zdCBlbWFpbCA9IGNyZWF0ZUVsLmVsZW1lbnQoJ2xpJywgeydjbGFzcycgOiAnaW5mbyd9KVxuLy8gZW1haWwudGV4dENvbnRlbnQgPSAnYmFrZXJ5QGJvcmRlYXV4LmNvLm56J1xuLy8gY29uc3QgYWRkcmVzcyA9IGNyZWF0ZUVsLmVsZW1lbnQoJ2xpJywgeydjbGFzcycgOiAnaW5mbyd9KVxuLy8gYWRkcmVzcy50ZXh0Q29udGVudCA9ICc3OSBUaGVyZXV4IFdheSwgTWFyc2VpbGxlcyBRdWFydGVyJ1xuLy8gY29udGFjdHMuYXBwZW5kQ2hpbGQocGhvbmUpXG4vLyBjb250YWN0cy5hcHBlbmRDaGlsZChlbWFpbClcbi8vIGNvbnRhY3RzLmFwcGVuZENoaWxkKGFkZHJlc3MpXG4vLyBmb290ZXIuYXBwZW5kQ2hpbGQoY29udGFjdHMpIiwiaW1wb3J0IGNyZWF0ZUVsIGZyb20gJy4uL3V0aWxpdHkvY3JlYXRlRWwuanMnXG5pbXBvcnQgYXR0YWNoRWwgZnJvbSAnLi4vdXRpbGl0eS9hdHRhY2hFbC5qcydcbmltcG9ydCBwaWMgZnJvbSAnLi4vaW1nL2hlcm8uanBnJ1xuXG5jb25zdCBsb3JlbSA9IFwiQ29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2VxdWkgcXVvcyBvZGlvIGVycm9yIHF1YXNpIG9tbmlzIGRpZ25pc3NpbW9zIG1heGltZSBpcHNhIG1vbGxpdGlhIHJlaWNpZW5kaXMgYWNjdXNhbXVzLiBMb3JlbSBjdW1xdWUgZWEgZmFjZXJlIGRlYml0aXMgbW9sZXN0aWFzIHJlcnVtIGN1bSBudW1xdWFtIGVzc2UgYXJjaGl0ZWN0byBtYWduaSBhZGlwaXNjaS5cIlxuXG5mdW5jdGlvbiBob21lUGFnZSh0YXJnZXQpIHtcbiAgICBsZXQgdGl0bGUgPSBjcmVhdGVFbC5kaXYoeydjbGFzcycgOiAndGl0bGUnfSlcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCYWtlcnkgQm9yZGVhdXgnXG5cbiAgICBjb25zdCBoZXJvID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2hlcm8nfSlcbiAgICBjb25zdCBoZXJvSW1nID0gbmV3IEltYWdlKClcbiAgICBoZXJvSW1nLnNyYyA9IHBpY1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltZylcblxuICAgIGNvbnN0IHBhcmFXcmFwID0gY3JlYXRlRWwuZWxlbWVudCgnZGl2JywgeydjbGFzcycgOiAncGFyYS13cmFwJ30pXG4gICAgY29uc3QgcGFyYSA9IGNyZWF0ZUVsLmVsZW1lbnQoJ3AnLCB7J2NsYXNzJyA6ICdwYXJhJ30pXG4gICAgcGFyYS50ZXh0Q29udGVudCA9IGxvcmVtXG4gICAgcGFyYVdyYXAuYXBwZW5kQ2hpbGQocGFyYSlcbiAgICBcbiAgICBhdHRhY2hFbCh0aXRsZSwgdGFyZ2V0LCAnYXBwZW5kJylcbiAgICBhdHRhY2hFbChoZXJvLCB0YXJnZXQsICdhcHBlbmQnKVxuICAgIGF0dGFjaEVsKHBhcmFXcmFwLCB0YXJnZXQsICdhcHBlbmQnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTtcblxuIiwiaW1wb3J0IGNyZWF0ZUVsIGZyb20gJy4uL3V0aWxpdHkvY3JlYXRlRWwuanMnXG5pbXBvcnQgYXR0YWNoRWwgZnJvbSAnLi4vdXRpbGl0eS9hdHRhY2hFbC5qcydcblxuaW1wb3J0IG1lbnVEYXRhIGZyb20gJy4uL2RhdGEvbWVudURhdGEuanMnXG5pbXBvcnQgc3R5bGVTZWxlY3RlZCBmcm9tICcuLi91dGlsaXR5L3N0eWxlU2VsZWN0ZWQuanMnXG5cblxuXG5cblxuZnVuY3Rpb24gbWVudVBhZ2UodGFyZ2V0KSB7XG5cbiAgICBsZXQgZ3VpZGUgPSBjcmVhdGVFbC5kaXYoeydjbGFzcycgOiAnZ3VpZGUnfSlcbiAgICAgICAgbGV0IGd1aWRlVGl0bGUgID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2d1aWRlLXRpdGxlJ30pXG4gICAgICAgIGd1aWRlVGl0bGUudGV4dENvbnRlbnQgPSBgQWxsZXJnZW5zYFxuICAgICAgICBndWlkZS5hcHBlbmRDaGlsZChndWlkZVRpdGxlKVxuXG4gICAgICAgIGxldCBndWlkZVRleHQgPSAgY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2d1aWRlLXRleHQnfSlcbiAgICAgICAgZ3VpZGVUZXh0LnRleHRDb250ZW50ID0gJ0dGIH4gR2x1dGVuIGZyZWUgIHwgIERGIH4gRGFpcnkgZnJlZSdcbiAgICAgICAgZ3VpZGUuYXBwZW5kQ2hpbGQoZ3VpZGVUZXh0KVxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChndWlkZSlcblxuXG4gICAgXG4gICAgbGV0IHNlY3Rpb25UaXRsZSA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdzZWN0aW9uLXRpdGxlJ30pXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ1N3ZWV0IEl0ZW1zJ1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzZWN0aW9uVGl0bGUpXG4gICAgXG4gICAgbGV0IG1lbnVXcmFwcGVyID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ21lbnUtd3JhcHBlcid9KVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXhwYW5kQnRuKGJ0bikge1xuICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWRCdG4nKSkge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkQnRuJylcbiAgICAgICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkSW1nJylcbiAgICAgICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW0tc2VsZWN0ZWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVTZWxlY3RlZChidG4sIG1lbnVXcmFwcGVyLCAnYnV0dG9uJywgJ2V4cGFuZGVkQnRuJylcbiAgICAgICAgICAgIHN0eWxlU2VsZWN0ZWQoYnRuLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyksIG1lbnVXcmFwcGVyLCAnaW1nJywgJ2V4cGFuZGVkSW1nJylcbiAgICAgICAgICAgIHN0eWxlU2VsZWN0ZWQoYnRuLnBhcmVudEVsZW1lbnQsIG1lbnVXcmFwcGVyLCAnZGl2JywgJ2l0ZW0tc2VsZWN0ZWQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29sbGFwc2VBbGwoKSB7XG4gICAgICAgIGxldCBidG5zID0gbWVudVdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWRCdG4nKVxuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgaW1hZ2VzID0gbWVudVdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnaW1nJykgICAgICAgIFxuICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZEltZycpKVxuXG4gICAgICAgIGxldCBpdGVtcyA9IG1lbnVXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLXdyYXBwZXInKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLXNlbGVjdGVkJykpXG4gICAgICAgIFxuICAgIH1cblxuICAgIG1lbnVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgICAgICBpZiAoYnV0dG9uID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlQWxsKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIG91dHNpZGUnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlRXhwYW5kQnRuKGJ1dHRvbilcbiAgICB9KVxuXG5cbiAgICBmb3IgKGxldCBlbnRyeSBpbiBtZW51RGF0YSkge1xuXG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IG1lbnVEYXRhW2VudHJ5XVxuICAgICAgICBcbiAgICAgICAgbGV0IGl0ZW1XcmFwcGVyID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2l0ZW0td3JhcHBlcid9KVxuXG4gICAgICAgIGxldCBleHBhbmRCdG4gPSBjcmVhdGVFbC5lbGVtZW50KCdidXR0b24nLCB7J2NsYXNzJyA6ICdleHBhbmQtYnV0dG9uJ30pXG4gICAgICAgIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGV4cGFuZEJ0bilcblxuICAgICAgICBsZXQgcGhvdG8gPSBuZXcgSW1hZ2UoKVxuICAgICAgICBwaG90by5zcmMgPSBjdXJyZW50SXRlbS5pbWFnZVxuICAgICAgICBwaG90by5jbGFzc0xpc3QuYWRkKCdpdGVtLXBob3RvJylcbiAgICAgICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQocGhvdG8pXG5cbiAgICAgICAgbGV0IHRleHRDb250ZW50ID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2l0ZW1UZXh0Q29udGVudCd9KVxuXG4gICAgICAgIGxldCB0aXRsZSA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdpdGVtLXRpdGxlJ30pXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVudHJ5XG4gICAgICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdpdGVtLWRlc2NyaXB0aW9uJ30pXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRJdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgICAgIGxldCBpbmZvV3JhcHBlciA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdpbmZvLXdyYXBwZXInfSlcbiAgICAgICAgICAgIGxldCBwcmljZSA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdwcmljZSd9KVxuICAgICAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gY3VycmVudEl0ZW0ucHJpY2VcbiAgICAgICAgICAgIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKHByaWNlKVxuXG4gICAgICAgICAgICBsZXQgZ2YgPSBjcmVhdGVFbC5kaXYoeydjbGFzcycgOiAnZ2YnfSlcbiAgICAgICAgICAgICAgICBnZi50ZXh0Q29udGVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtLmdsdXRlbkZyZWUgPT09IHRydWUgPyAnR0YnIDogJydcbiAgICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChnZilcblxuICAgICAgICAgICAgbGV0IGRmID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2RmJ30pXG4gICAgICAgICAgICBkZi50ZXh0Q29udGVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW0uZGFpcnlGcmVlID09PSB0cnVlID8gJ0RGJyA6ICcnXG4gICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChkZilcbiAgICAgICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mb1dyYXBwZXIpXG5cblxuICAgICAgICBhdHRhY2hFbCh0ZXh0Q29udGVudCwgaXRlbVdyYXBwZXIsICdhcHBlbmQnKVxuXG4gICAgICAgIGF0dGFjaEVsKGl0ZW1XcmFwcGVyLCBtZW51V3JhcHBlciwgJ2FwcGVuZCcpXG5cbiAgICB9XG5cbiAgICAvLyBtYWtlIGZpcnN0IGl0ZW0gb3BlbiBvbiBsb2FkXG4gICAgbGV0IGZpcnN0QnRuID0gbWVudVdyYXBwZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJylcbiAgICBoYW5kbGVFeHBhbmRCdG4oZmlyc3RCdG4pXG5cbiAgICBhdHRhY2hFbChtZW51V3JhcHBlciwgdGFyZ2V0LCAnYXBwZW5kJylcbn1cblxuXG4vLyBNRU5VIEdFTkVSQVRPUlxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiZnVuY3Rpb24gYXR0YWNoRWwoc291cmNlLCB0YXJnZXQsIHBvc2l0aW9uKSB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICdiZWZvcmUnOiB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc291cmNlLCB0YXJnZXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYWZ0ZXInOiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgdGFyZ2V0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc291cmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2FwcGVuZCc6IHtcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzb3VyY2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVVNBR0U6XG4gICAgLy8gYXR0YWNoKHRhYmxlLCBkaXYsICdiZWZvcmUnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXR0YWNoRWw7IiwiY29uc3QgY3JlYXRlRWwgPSAoZnVuY3Rpb24oZG9jdW1lbnQpe1xuICAgIGxldCBhcGkgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGZ1bmN0aW9uIChuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfSxcblxuICAgICAgICBkaXY6IGZ1bmN0aW9uIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBpLmVsZW1lbnQoJ2RpdicsIGF0dHJpYnV0ZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXBpXG5cbiAgICAvLyBVU0FHRTpcbiAgICAvLyB2YXIgZGl2ID0gY3JlYXRlRWwuZGl2KHsgJ2NsYXNzJzogJ2hlcm8nIH0pO1xuICAgIC8vIHZhciBwYXJhID0gY3JlYXRlRWwuZWxlbWVudCgncCcsIHsgJ2NsYXNzJzogJ3BhcmEnIH0pOyAgIFxufSh3aW5kb3cuZG9jdW1lbnQpKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWw7XG4iLCJsZXQgc3R5bGVTZWxlY3RlZCA9IGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50LCBjaGlsZFR5cGUsIHN0eWxlKSB7XG5cblxuICAgIGxldCBjaGlsZHJlbnMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChjaGlsZFR5cGUpXG5cblxuICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVucykge1xuICAgICAgICBpZiAoY2hpbGQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZVNlbGVjdGVkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG5hdkJhciBmcm9tICcuL2xvYWRlcnMvbmF2QmFyLmpzJ1xuXG5uYXZCYXIoKVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9