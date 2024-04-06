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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module './img/hero.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    /* colors */
    --accent: rgb(255, 175, 100);
    --dark: #121212;
    --light: #efefef;
    /* transparent colors */

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
    border: 4px solid transparent;
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

/* pseudos */

nav > button:hover {
    color: var(--accent);
}

nav > button:focus:not(.selected) {
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid var(--light);
}

.selected {
    outline: none;
    box-shadow: none;

    color: var(--accent);
    border-bottom-color: var(--accent);
    border-bottom-width: 4px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,4BAA4B;IAC5B,eAAe;IACf,gBAAgB;IAChB,uBAAuB;;IAEvB,aAAa;IACb,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,4CAAwD;AAC5D;;AAEA;IACI,uBAAuB;IACvB,4CAA+D;IAC/D,kBAAkB;AACtB;AACA,KAAK;AACL;IACI,yBAAyB;IACzB,4CAAmD;AACvD;;AAEA,KAAK;;AAEL;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,WAAW;IACX,mCAAmC;IACnC,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,6BAA6B;IAC7B,6BAA6B;IAC7B,sBAAsB;IACtB,iBAAiB;;IAEjB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,kBAAkB;;IAElB,6BAA6B;AACjC;;;AAGA;;AAEA;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;IAC9B,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,0BAA0B;IAC1B,2BAA2B;IAC3B,mBAAmB;;IAEnB,yDAAuC;IACvC,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,uBAAuB;;IAEvB,uBAAuB;IACvB,iBAAiB;IACjB,yBAAyB;;IAEzB,yDAAuC;IACvC,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,qBAAqB;IACrB,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,mBAAmB;AACvB;;AAEA,YAAY;;AAEZ;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,gBAAgB;;IAEhB,oBAAoB;IACpB,kCAAkC;IAClC,wBAAwB;AAC5B","sourcesContent":[":root {\n    /* colors */\n    --accent: rgb(255, 175, 100);\n    --dark: #121212;\n    --light: #efefef;\n    /* transparent colors */\n\n    /* txt size */\n    --size-display: 78px;\n    --size-content: 33px;\n}\n\n@font-face {\n    font-family: 'playfair';\n    src: url('./font/PlayfairDisplay-VariableFont_wght.ttf');\n}\n\n@font-face {\n    font-family: 'playfair';\n    src: url('./font/PlayfairDisplay-Italic-VariableFont_wght.ttf');\n    font-style: italic;\n}\n/*  */\n@font-face {\n    font-family: 'montserrat';\n    src: url('./font/MontserratAlternates-Regular.ttf');\n}\n\n/*  */\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    font-family: futura;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font: inherit;\n}\n\nimg, picture, svg, video {\n    display: block;\n    max-width: 100%;\n}\n\nbody {\n    color: var(--light);\n    background-color: var(--dark);\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    width: 100%;\n    background-color: var(--brand-main);\n    position: relative;\n    padding: 10px 0 0;\n}\n\nnav > button {\n    /* letter-spacing: 3px; */\n    border: 4px solid transparent;\n    background-color: transparent;\n    vertical-align: center;\n    padding: 5px 15px;\n\n    color: var(--light);\n    font-size: 1rem;\n    font-family: 'playfair';\n    font-style: italic;\n\n    transition: all 0.1s ease-out;\n}\n\n\n#content {\n\n}\n\n.title {\n    font-family: 'playfair';\n    font-size: var(--size-display);\n    font-weight: bold;  \n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: underline;\n    text-underline-offset: 10px;\n    margin-bottom: 25px;\n\n    background-image: url('./img/hero.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 0% 20%;\n    color: transparent;\n    background-clip: text;\n    -webkit-background-clip: text;\n}\n\n.hero {\n    height: 400px;\n    width: 100%;\n    margin-bottom: 25px;\n}\n\n.hero > img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    display: block;\n}\n\n.subtitle {\n    text-align: center;\n    \n}\n\n.para-wrap {\n    display: flex;\n    justify-content: center;\n\n    font-family: 'playfair';\n    font-weight: bold;\n    text-transform: uppercase;\n\n    background-image: url('./img/hero.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 0% 25%;\n    color: transparent;\n    background-clip: text;\n    -webkit-background-clip: text;\n    filter: brightness(1.5);\n}\n\n.para {\n    text-align: justify;\n    max-width: 45ch;\n    font-size: 0.9rem;\n    padding: 0 15px;\n    letter-spacing: 2px;\n}\n\n/* pseudos */\n\nnav > button:hover {\n    color: var(--accent);\n}\n\nnav > button:focus:not(.selected) {\n    outline: none;\n    box-shadow: none;\n    border-bottom: 1px solid var(--light);\n}\n\n.selected {\n    outline: none;\n    box-shadow: none;\n\n    color: var(--accent);\n    border-bottom-color: var(--accent);\n    border-bottom-width: 4px;\n}"],"sourceRoot":""}]);
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
// import img1 from '../img/aneta-voborilova-c8ovzYe3z0s-unsplash.jpg'

const menuImages = [
    // img1,
    "../img/aneta-voborilova-c8ovzYe3z0s-unsplash.jpg",
    "../img/aneta-voborilova-c8ovzYe3z0s-unsplash.jpg",
    "../img/aneta-voborilova-c8ovzYe3z0s-unsplash.jpg",
    "../img/aneta-voborilova-c8ovzYe3z0s-unsplash.jpg",
    "../img/aneta-voborilova-c8ovzYe3z0s-unsplash.jpg",
    "../img/aneta-voborilova-c8ovzYe3z0s-unsplash.jpg",
    "../img/aneta-voborilova-c8ovzYe3z0s-unsplash.jpg"
    
    // Add more image links as needed
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../img/hero.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




const lorem = "Consectetur adipisicing elit. Sequi quos odio error quasi omnis dignissimos maxime ipsa mollitia reiciendis accusamus. Lorem cumque ea facere debitis molestias rerum cum numquam esse architecto magni adipisci."

function homePage(target) {
    let title = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'title'})
    title.textContent = 'Bakery Bordeaux'

    const hero = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'hero'})
    const heroImg = new Image()
    heroImg.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../img/hero.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
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






function menuPage(target) {

    let menuWrapper = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'menu-wrapper'})
    

    for (let entry in _data_menuData_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {

        let currentItem = _data_menuData_js__WEBPACK_IMPORTED_MODULE_2__["default"][entry]
        
        let itemWrapper = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'item-wrapper'})

        let photo = new Image()
            photo.src = currentItem.image
        itemWrapper.appendChild(photo)

        let title = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'item-title'})
            title.textContent = entry

        itemWrapper.appendChild(title)

        let description = _utility_createEl_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({'class' : 'item-description'})
            description.textContent = currentItem.description

        itemWrapper.appendChild(description)


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
            
        itemWrapper.appendChild(infoWrapper)


        ;(0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(itemWrapper, menuWrapper, 'append')

    }

    (0,_utility_attachEl_js__WEBPACK_IMPORTED_MODULE_1__["default"])(menuWrapper, target, 'append')

}



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
let styleSelected = function(target, style) {

    let group = target.parentNode.children

    for (let child of group) {
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
/* harmony import */ var _loaders_loadContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaders/loadContent.js */ "./src/loaders/loadContent.js");
/* harmony import */ var _utility_styleSelected_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/styleSelected.js */ "./src/utility/styleSelected.js");





document.addEventListener('DOMContentLoaded', () => {
    (0,_loaders_loadContent_js__WEBPACK_IMPORTED_MODULE_1__["default"])('home');
});

const nav = document.querySelector('nav')


function handleNavBtn(btn) {
    ;(0,_utility_styleSelected_js__WEBPACK_IMPORTED_MODULE_2__["default"])(btn, 'selected')
    ;(0,_loaders_loadContent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(btn.id)
}

nav.addEventListener('click', e => {
    const button = e.target.closest('button');
    handleNavBtn(button)
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2Q1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzhCO0FBQ0k7OztBQUd2RDtBQUNBLElBQUksbUVBQVc7QUFDZixDQUFDOztBQUVEOzs7QUFHQTtBQUNBLElBQUksc0VBQWE7QUFDakIsSUFBSSxvRUFBVztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGF0YS9tZW51RGF0YS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGF0YS9tZW51SW1hZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkZXJzL2xvYWRDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkZXJzL3BhZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0eS9hdHRhY2hFbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0eS9jcmVhdGVFbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0eS9zdHlsZVNlbGVjdGVkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9QbGF5ZmFpckRpc3BsYXktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udC9Nb250c2VycmF0QWx0ZXJuYXRlcy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2hlcm8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLyogY29sb3JzICovXG4gICAgLS1hY2NlbnQ6IHJnYigyNTUsIDE3NSwgMTAwKTtcbiAgICAtLWRhcms6ICMxMjEyMTI7XG4gICAgLS1saWdodDogI2VmZWZlZjtcbiAgICAvKiB0cmFuc3BhcmVudCBjb2xvcnMgKi9cblxuICAgIC8qIHR4dCBzaXplICovXG4gICAgLS1zaXplLWRpc3BsYXk6IDc4cHg7XG4gICAgLS1zaXplLWNvbnRlbnQ6IDMzcHg7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncGxheWZhaXInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4vKiAgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi8qICAqL1xuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBmdXR1cmE7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZywgcGljdHVyZSwgc3ZnLCB2aWRlbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLW1haW4pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMDtcbn1cblxubmF2ID4gYnV0dG9uIHtcbiAgICAvKiBsZXR0ZXItc3BhY2luZzogM3B4OyAqL1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG5cbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLW91dDtcbn1cblxuXG4jY29udGVudCB7XG5cbn1cblxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJztcbiAgICBmb250LXNpemU6IHZhcigtLXNpemUtZGlzcGxheSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICBcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjAlO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59XG5cbi5oZXJvIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5oZXJvID4gaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuXG4ucGFyYS13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjUlO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNSk7XG59XG5cbi5wYXJhIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1heC13aWR0aDogNDVjaDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLyogcHNldWRvcyAqL1xuXG5uYXYgPiBidXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG5uYXYgPiBidXR0b246Zm9jdXM6bm90KC5zZWxlY3RlZCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQpO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7O0lBRXZCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRDQUF3RDtBQUM1RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBK0Q7SUFDL0Qsa0JBQWtCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFtRDtBQUN2RDs7QUFFQSxLQUFLOztBQUVMO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixpQkFBaUI7O0lBRWpCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7SUFFbEIsNkJBQTZCO0FBQ2pDOzs7QUFHQTs7QUFFQTs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixtQkFBbUI7O0lBRW5CLHlEQUF1QztJQUN2Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztJQUV2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHlCQUF5Qjs7SUFFekIseURBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7SUFFaEIsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAvKiBjb2xvcnMgKi9cXG4gICAgLS1hY2NlbnQ6IHJnYigyNTUsIDE3NSwgMTAwKTtcXG4gICAgLS1kYXJrOiAjMTIxMjEyO1xcbiAgICAtLWxpZ2h0OiAjZWZlZmVmO1xcbiAgICAvKiB0cmFuc3BhcmVudCBjb2xvcnMgKi9cXG5cXG4gICAgLyogdHh0IHNpemUgKi9cXG4gICAgLS1zaXplLWRpc3BsYXk6IDc4cHg7XFxuICAgIC0tc2l6ZS1jb250ZW50OiAzM3B4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnQvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnQvUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiAgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udC9Nb250c2VycmF0QWx0ZXJuYXRlcy1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGZ1dHVyYTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLCBwaWN0dXJlLCBzdmcsIHZpZGVvIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtbWFpbik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweCAwIDA7XFxufVxcblxcbm5hdiA+IGJ1dHRvbiB7XFxuICAgIC8qIGxldHRlci1zcGFjaW5nOiAzcHg7ICovXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XFxufVxcblxcblxcbiNjb250ZW50IHtcXG5cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwbGF5ZmFpcic7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS1kaXNwbGF5KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICBcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2hlcm8uanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDIwJTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4uaGVybyA+IGltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnBhcmEtd3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBmb250LWZhbWlseTogJ3BsYXlmYWlyJztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvaGVyby5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjUlO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xcbn1cXG5cXG4ucGFyYSB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIG1heC13aWR0aDogNDVjaDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLyogcHNldWRvcyAqL1xcblxcbm5hdiA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG5uYXYgPiBidXR0b246Zm9jdXM6bm90KC5zZWxlY3RlZCkge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcblxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtZW51SW1hZ2VzIGZyb20gJy4vbWVudUltYWdlcy5qcyc7XG5cbmNvbnN0IG1lbnVEYXRhID0ge1xuICAgIFwiQ2xhc3NpYyBDcm9pc3NhbnRcIjoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJJbmR1bGdlIGluIG91ciBmbGFreSBhbmQgYnV0dGVyeSBjbGFzc2ljIGNyb2lzc2FudCwgZnJlc2hseSBiYWtlZCB0byBwZXJmZWN0aW9uLiBQZXJmZWN0IGZvciBicmVha2Zhc3Qgb3IgYSBtaWRkYXkgc25hY2suXCIsXG4gICAgICAgIHByaWNlOiBcIiQyLjUwXCIsXG4gICAgICAgIGdsdXRlbkZyZWU6IHRydWUsXG4gICAgICAgIGRhaXJ5RnJlZTogZmFsc2UsXG4gICAgICAgIGltYWdlOiBtZW51SW1hZ2VzWzBdIC8vIEFzc2lnbmluZyB0aGUgZmlyc3QgaW1hZ2UgbGluayBmcm9tIHRoZSBhcnJheVxuICAgIH0sXG4gICAgXCJDaG9jb2xhdGUgQ2hpcCBNdWZmaW5cIjoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJTYXRpc2Z5IHlvdXIgc3dlZXQgdG9vdGggd2l0aCBvdXIgaXJyZXNpc3RpYmxlIGNob2NvbGF0ZSBjaGlwIG11ZmZpbi4gTW9pc3QgYW5kIGZsdWZmeSwgcGFja2VkIHdpdGggZ29vZXkgY2hvY29sYXRlIGNoaXBzLlwiLFxuICAgICAgICBwcmljZTogXCIkMy4wMFwiLFxuICAgICAgICBnbHV0ZW5GcmVlOiB0cnVlLFxuICAgICAgICBkYWlyeUZyZWU6IGZhbHNlLFxuICAgICAgICBpbWFnZTogbWVudUltYWdlc1sxXSAvLyBBc3NpZ25pbmcgdGhlIHNlY29uZCBpbWFnZSBsaW5rIGZyb20gdGhlIGFycmF5XG4gICAgfSxcbiAgICBcIkJsdWViZXJyeSBTY29uZVwiOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0YXJ0IHlvdXIgZGF5IHJpZ2h0IHdpdGggb3VyIGRlbGVjdGFibGUgYmx1ZWJlcnJ5IHNjb25lLiBCdXJzdGluZyB3aXRoIGp1aWN5IGJsdWViZXJyaWVzIGFuZCB0b3BwZWQgd2l0aCBhIGxpZ2h0IGdsYXplLlwiLFxuICAgICAgICBwcmljZTogXCIkMi43NVwiLFxuICAgICAgICBnbHV0ZW5GcmVlOiB0cnVlLFxuICAgICAgICBkYWlyeUZyZWU6IHRydWUsXG4gICAgICAgIGltYWdlOiBtZW51SW1hZ2VzWzJdIC8vIEFzc2lnbmluZyB0aGUgdGhpcmQgaW1hZ2UgbGluayBmcm9tIHRoZSBhcnJheVxuICAgIH0sXG4gICAgXCJDaW5uYW1vbiBSb2xsXCI6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVHJlYXQgeW91cnNlbGYgdG8gb3VyIG1vdXRod2F0ZXJpbmcgY2lubmFtb24gcm9sbCwgc3dpcmxlZCB3aXRoIGNpbm5hbW9uIHN1Z2FyIGFuZCB0b3BwZWQgd2l0aCBjcmVhbXkgaWNpbmcuXCIsXG4gICAgICAgIHByaWNlOiBcIiQzLjUwXCIsXG4gICAgICAgIGdsdXRlbkZyZWU6IHRydWUsXG4gICAgICAgIGRhaXJ5RnJlZTogdHJ1ZSxcbiAgICAgICAgaW1hZ2U6IG1lbnVJbWFnZXNbM10gLy8gQXNzaWduaW5nIHRoZSBmb3VydGggaW1hZ2UgbGluayBmcm9tIHRoZSBhcnJheVxuICAgIH0sXG4gICAgXCJGcnVpdCBEYW5pc2hcIjoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJFbmpveSB0aGUgZnJ1aXR5IGdvb2RuZXNzIG9mIG91ciBmcnVpdCBkYW5pc2gsIGZpbGxlZCB3aXRoIGEgdmFyaWV0eSBvZiBmcmVzaCBmcnVpdHMgYW5kIGRyaXp6bGVkIHdpdGggYSBzd2VldCBnbGF6ZS5cIixcbiAgICAgICAgcHJpY2U6IFwiJDMuMjVcIixcbiAgICAgICAgZ2x1dGVuRnJlZTogZmFsc2UsXG4gICAgICAgIGRhaXJ5RnJlZTogZmFsc2UsXG4gICAgICAgIGltYWdlOiBtZW51SW1hZ2VzWzRdIC8vIEFzc2lnbmluZyB0aGUgZmlmdGggaW1hZ2UgbGluayBmcm9tIHRoZSBhcnJheVxuICAgIH0sXG4gICAgXCJBbG1vbmQgQ3JvaXNzYW50XCI6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXhwZXJpZW5jZSB0aGUgcGVyZmVjdCBibGVuZCBvZiBidXR0ZXJ5IGNyb2lzc2FudCBhbmQgYWxtb25kIGdvb2RuZXNzIHdpdGggb3VyIGFsbW9uZCBjcm9pc3NhbnQsIHRvcHBlZCB3aXRoIHNsaWNlZCBhbG1vbmRzIGZvciBleHRyYSBjcnVuY2guXCIsXG4gICAgICAgIHByaWNlOiBcIiQzLjAwXCIsXG4gICAgICAgIGdsdXRlbkZyZWU6IHRydWUsXG4gICAgICAgIGRhaXJ5RnJlZTogZmFsc2UsXG4gICAgICAgIGltYWdlOiBtZW51SW1hZ2VzWzVdIC8vIEFzc2lnbmluZyB0aGUgc2l4dGggaW1hZ2UgbGluayBmcm9tIHRoZSBhcnJheVxuICAgIH0sXG4gICAgXCJMZW1vbiBQb3BweSBTZWVkIExvYWZcIjoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJCcmlnaHRlbiB5b3VyIGRheSB3aXRoIG91ciB0YW5neSBsZW1vbiBwb3BweSBzZWVkIGxvYWYsIGluZnVzZWQgd2l0aCB6ZXN0eSBsZW1vbiBmbGF2b3IgYW5kIGRvdHRlZCB3aXRoIHBvcHB5IHNlZWRzLlwiLFxuICAgICAgICBwcmljZTogXCIkMy4yNVwiLFxuICAgICAgICBnbHV0ZW5GcmVlOiBmYWxzZSxcbiAgICAgICAgZGFpcnlGcmVlOiBmYWxzZSxcbiAgICAgICAgaW1hZ2U6IG1lbnVJbWFnZXNbNl0gLy8gQXNzaWduaW5nIHRoZSBzZXZlbnRoIGltYWdlIGxpbmsgZnJvbSB0aGUgYXJyYXlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51RGF0YTsiLCIvLyBpbXBvcnQgaW1nMSBmcm9tICcuLi9pbWcvYW5ldGEtdm9ib3JpbG92YS1jOG92elllM3owcy11bnNwbGFzaC5qcGcnXG5cbmNvbnN0IG1lbnVJbWFnZXMgPSBbXG4gICAgLy8gaW1nMSxcbiAgICBcIi4uL2ltZy9hbmV0YS12b2Jvcmlsb3ZhLWM4b3Z6WWUzejBzLXVuc3BsYXNoLmpwZ1wiLFxuICAgIFwiLi4vaW1nL2FuZXRhLXZvYm9yaWxvdmEtYzhvdnpZZTN6MHMtdW5zcGxhc2guanBnXCIsXG4gICAgXCIuLi9pbWcvYW5ldGEtdm9ib3JpbG92YS1jOG92elllM3owcy11bnNwbGFzaC5qcGdcIixcbiAgICBcIi4uL2ltZy9hbmV0YS12b2Jvcmlsb3ZhLWM4b3Z6WWUzejBzLXVuc3BsYXNoLmpwZ1wiLFxuICAgIFwiLi4vaW1nL2FuZXRhLXZvYm9yaWxvdmEtYzhvdnpZZTN6MHMtdW5zcGxhc2guanBnXCIsXG4gICAgXCIuLi9pbWcvYW5ldGEtdm9ib3JpbG92YS1jOG92elllM3owcy11bnNwbGFzaC5qcGdcIixcbiAgICBcIi4uL2ltZy9hbmV0YS12b2Jvcmlsb3ZhLWM4b3Z6WWUzejBzLXVuc3BsYXNoLmpwZ1wiXG4gICAgXG4gICAgLy8gQWRkIG1vcmUgaW1hZ2UgbGlua3MgYXMgbmVlZGVkXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51SW1hZ2VzOyIsImltcG9ydCBwYWdlcyBmcm9tICcuL3BhZ2VzJ1xuXG5sZXQgbG9hZENvbnRlbnQgPSBmdW5jdGlvbihwYWdlTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIC8vIHJlbW92ZSBhbGwgY3VycmVudCBjb250ZW50XG4gICAgd2hpbGUgKHRhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZCh0YXJnZXQuZmlyc3RDaGlsZClcbiAgICB9XG5cbiAgICAvLyBpbnZva2UgcGFnZVxuICAgIHBhZ2VzW3BhZ2VOYW1lXSh0YXJnZXQpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRlbnQiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi4vcGFnZXMvaG9tZVBhZ2UuanMnXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi4vcGFnZXMvbWVudVBhZ2UuanMnXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gJy4uL3BhZ2VzL2Fib3V0UGFnZS5qcydcblxuXG5sZXQgcGFnZXMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgYXZhbGlhYmxlID0geyBcbiAgICAgICAgJ2hvbWUnIDogaG9tZVBhZ2UsXG4gICAgICAgICdtZW51JzogbWVudVBhZ2UsXG4gICAgICAgICdhYm91dCcgOiBhYm91dFBhZ2VcbiAgICB9XG5cbiAgICByZXR1cm4gYXZhbGlhYmxlXG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgcGFnZXMiLCJpbXBvcnQgY3JlYXRlRWwgZnJvbSAnLi4vdXRpbGl0eS9jcmVhdGVFbC5qcydcbmltcG9ydCBhdHRhY2hFbCBmcm9tICcuLi91dGlsaXR5L2F0dGFjaEVsLmpzJ1xuXG5cbmZ1bmN0aW9uIGFib3V0UGFnZSh0YXJnZXQpIHtcbiAgICBsZXQgdGVzdCA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICd0ZXN0aW5nJ30pXG4gICAgdGVzdC50ZXh0Q29udGVudCA9ICdhYm91dCBwYWdlJ1xuICAgIGF0dGFjaEVsKHRlc3QsIHRhcmdldCwgJ2FwcGVuZCcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0UGFnZTsiLCJpbXBvcnQgY3JlYXRlRWwgZnJvbSAnLi4vdXRpbGl0eS9jcmVhdGVFbC5qcydcbmltcG9ydCBhdHRhY2hFbCBmcm9tICcuLi91dGlsaXR5L2F0dGFjaEVsLmpzJ1xuaW1wb3J0IHBpYyBmcm9tICcuLi9pbWcvaGVyby5qcGcnXG5cbmNvbnN0IGxvcmVtID0gXCJDb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTZXF1aSBxdW9zIG9kaW8gZXJyb3IgcXVhc2kgb21uaXMgZGlnbmlzc2ltb3MgbWF4aW1lIGlwc2EgbW9sbGl0aWEgcmVpY2llbmRpcyBhY2N1c2FtdXMuIExvcmVtIGN1bXF1ZSBlYSBmYWNlcmUgZGViaXRpcyBtb2xlc3RpYXMgcmVydW0gY3VtIG51bXF1YW0gZXNzZSBhcmNoaXRlY3RvIG1hZ25pIGFkaXBpc2NpLlwiXG5cbmZ1bmN0aW9uIGhvbWVQYWdlKHRhcmdldCkge1xuICAgIGxldCB0aXRsZSA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICd0aXRsZSd9KVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0Jha2VyeSBCb3JkZWF1eCdcblxuICAgIGNvbnN0IGhlcm8gPSBjcmVhdGVFbC5kaXYoeydjbGFzcycgOiAnaGVybyd9KVxuICAgIGNvbnN0IGhlcm9JbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGhlcm9JbWcuc3JjID0gcGljXG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvSW1nKVxuXG4gICAgY29uc3QgcGFyYVdyYXAgPSBjcmVhdGVFbC5lbGVtZW50KCdkaXYnLCB7J2NsYXNzJyA6ICdwYXJhLXdyYXAnfSlcbiAgICBjb25zdCBwYXJhID0gY3JlYXRlRWwuZWxlbWVudCgncCcsIHsnY2xhc3MnIDogJ3BhcmEnfSlcbiAgICBwYXJhLnRleHRDb250ZW50ID0gbG9yZW1cbiAgICBwYXJhV3JhcC5hcHBlbmRDaGlsZChwYXJhKVxuICAgIFxuICAgIGF0dGFjaEVsKHRpdGxlLCB0YXJnZXQsICdhcHBlbmQnKVxuICAgIGF0dGFjaEVsKGhlcm8sIHRhcmdldCwgJ2FwcGVuZCcpXG4gICAgYXR0YWNoRWwocGFyYVdyYXAsIHRhcmdldCwgJ2FwcGVuZCcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgZm9vdGVyID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2Zvb3Rlcid9KTtcbi8vIGNvbnN0IGNvbnRhY3RzID0gY3JlYXRlRWwuZWxlbWVudCgndWwnLCB7J2NsYXNzJyA6ICdjb250YWN0cyd9KVxuLy8gY29uc3QgcGhvbmUgPSBjcmVhdGVFbC5lbGVtZW50KCdsaScsIHsnY2xhc3MnIDogJ2luZm8nfSlcbi8vIHBob25lLnRleHRDb250ZW50ID0gJzAyIDMwMjkgMTc4NSdcbi8vIGNvbnN0IGVtYWlsID0gY3JlYXRlRWwuZWxlbWVudCgnbGknLCB7J2NsYXNzJyA6ICdpbmZvJ30pXG4vLyBlbWFpbC50ZXh0Q29udGVudCA9ICdiYWtlcnlAYm9yZGVhdXguY28ubnonXG4vLyBjb25zdCBhZGRyZXNzID0gY3JlYXRlRWwuZWxlbWVudCgnbGknLCB7J2NsYXNzJyA6ICdpbmZvJ30pXG4vLyBhZGRyZXNzLnRleHRDb250ZW50ID0gJzc5IFRoZXJldXggV2F5LCBNYXJzZWlsbGVzIFF1YXJ0ZXInXG4vLyBjb250YWN0cy5hcHBlbmRDaGlsZChwaG9uZSlcbi8vIGNvbnRhY3RzLmFwcGVuZENoaWxkKGVtYWlsKVxuLy8gY29udGFjdHMuYXBwZW5kQ2hpbGQoYWRkcmVzcylcbi8vIGZvb3Rlci5hcHBlbmRDaGlsZChjb250YWN0cykiLCJpbXBvcnQgY3JlYXRlRWwgZnJvbSAnLi4vdXRpbGl0eS9jcmVhdGVFbC5qcydcbmltcG9ydCBhdHRhY2hFbCBmcm9tICcuLi91dGlsaXR5L2F0dGFjaEVsLmpzJ1xuXG5pbXBvcnQgbWVudURhdGEgZnJvbSAnLi4vZGF0YS9tZW51RGF0YS5qcydcblxuXG5mdW5jdGlvbiBtZW51UGFnZSh0YXJnZXQpIHtcblxuICAgIGxldCBtZW51V3JhcHBlciA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdtZW51LXdyYXBwZXInfSlcbiAgICBcblxuICAgIGZvciAobGV0IGVudHJ5IGluIG1lbnVEYXRhKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gbWVudURhdGFbZW50cnldXG4gICAgICAgIFxuICAgICAgICBsZXQgaXRlbVdyYXBwZXIgPSBjcmVhdGVFbC5kaXYoeydjbGFzcycgOiAnaXRlbS13cmFwcGVyJ30pXG5cbiAgICAgICAgbGV0IHBob3RvID0gbmV3IEltYWdlKClcbiAgICAgICAgICAgIHBob3RvLnNyYyA9IGN1cnJlbnRJdGVtLmltYWdlXG4gICAgICAgIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKHBob3RvKVxuXG4gICAgICAgIGxldCB0aXRsZSA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdpdGVtLXRpdGxlJ30pXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVudHJ5XG5cbiAgICAgICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2l0ZW0tZGVzY3JpcHRpb24nfSlcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY3VycmVudEl0ZW0uZGVzY3JpcHRpb25cblxuICAgICAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuXG4gICAgICAgIGxldCBpbmZvV3JhcHBlciA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdpbmZvLXdyYXBwZXInfSlcbiAgICAgICAgICAgIGxldCBwcmljZSA9IGNyZWF0ZUVsLmRpdih7J2NsYXNzJyA6ICdwcmljZSd9KVxuICAgICAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gY3VycmVudEl0ZW0ucHJpY2VcbiAgICAgICAgICAgIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKHByaWNlKVxuXG4gICAgICAgICAgICBsZXQgZ2YgPSBjcmVhdGVFbC5kaXYoeydjbGFzcycgOiAnZ2YnfSlcbiAgICAgICAgICAgICAgICBnZi50ZXh0Q29udGVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtLmdsdXRlbkZyZWUgPT09IHRydWUgPyAnR0YnIDogJydcbiAgICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChnZilcblxuICAgICAgICAgICAgbGV0IGRmID0gY3JlYXRlRWwuZGl2KHsnY2xhc3MnIDogJ2RmJ30pXG4gICAgICAgICAgICBkZi50ZXh0Q29udGVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW0uZGFpcnlGcmVlID09PSB0cnVlID8gJ0RGJyA6ICcnXG4gICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChkZilcbiAgICAgICAgICAgIFxuICAgICAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpbmZvV3JhcHBlcilcblxuXG4gICAgICAgIGF0dGFjaEVsKGl0ZW1XcmFwcGVyLCBtZW51V3JhcHBlciwgJ2FwcGVuZCcpXG5cbiAgICB9XG5cbiAgICBhdHRhY2hFbChtZW51V3JhcHBlciwgdGFyZ2V0LCAnYXBwZW5kJylcblxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiZnVuY3Rpb24gYXR0YWNoRWwoc291cmNlLCB0YXJnZXQsIHBvc2l0aW9uKSB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICdiZWZvcmUnOiB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc291cmNlLCB0YXJnZXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYWZ0ZXInOiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgdGFyZ2V0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc291cmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2FwcGVuZCc6IHtcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzb3VyY2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVVNBR0U6XG4gICAgLy8gYXR0YWNoKHRhYmxlLCBkaXYsICdiZWZvcmUnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXR0YWNoRWw7IiwiY29uc3QgY3JlYXRlRWwgPSAoZnVuY3Rpb24oZG9jdW1lbnQpe1xuICAgIGxldCBhcGkgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGZ1bmN0aW9uIChuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfSxcblxuICAgICAgICBkaXY6IGZ1bmN0aW9uIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBpLmVsZW1lbnQoJ2RpdicsIGF0dHJpYnV0ZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXBpXG5cbiAgICAvLyBVU0FHRTpcbiAgICAvLyB2YXIgZGl2ID0gY3JlYXRlRWwuZGl2KHsgJ2NsYXNzJzogJ2hlcm8nIH0pO1xuICAgIC8vIHZhciBwYXJhID0gY3JlYXRlRWwuZWxlbWVudCgncCcsIHsgJ2NsYXNzJzogJ3BhcmEnIH0pOyAgIFxufSh3aW5kb3cuZG9jdW1lbnQpKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWw7XG4iLCJsZXQgc3R5bGVTZWxlY3RlZCA9IGZ1bmN0aW9uKHRhcmdldCwgc3R5bGUpIHtcblxuICAgIGxldCBncm91cCA9IHRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuXG5cbiAgICBmb3IgKGxldCBjaGlsZCBvZiBncm91cCkge1xuICAgICAgICBpZiAoY2hpbGQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVTZWxlY3RlZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkQ29udGVudCBmcm9tICcuL2xvYWRlcnMvbG9hZENvbnRlbnQuanMnO1xuaW1wb3J0IHN0eWxlU2VsZWN0ZWQgZnJvbSAnLi91dGlsaXR5L3N0eWxlU2VsZWN0ZWQuanMnO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbG9hZENvbnRlbnQoJ2hvbWUnKTtcbn0pO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxuXG5cbmZ1bmN0aW9uIGhhbmRsZU5hdkJ0bihidG4pIHtcbiAgICBzdHlsZVNlbGVjdGVkKGJ0biwgJ3NlbGVjdGVkJylcbiAgICBsb2FkQ29udGVudChidG4uaWQpXG59XG5cbm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgIGhhbmRsZU5hdkJ0bihidXR0b24pXG59KVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==