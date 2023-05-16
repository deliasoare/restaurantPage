/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./firstSpill.svg */ "./src/firstSpill.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --yellow: rgba(224, 172, 60);;\r\n    --brown: rgb(170, 108, 60);\r\n    --darkBrown: #591C02;\r\n}\r\nhtml {\r\n    height:100%;\r\n}\r\n#content {\r\n    height: 100%;\r\n}\r\n.page{\r\n    height:100vh;\r\n}\r\n.normalHeading {\r\n    width:fit-content;\r\n    height:fit-content;\r\n    border-top: 1px solid var(--brown);\r\n    border-left: 1px solid var(--brown);\r\n    border-right: 1px solid var(--brown);\r\n    padding:0.5em;\r\n    width:175px;\r\n    text-align:center;\r\n    font-size:max(1.8rem, 1.5vw);\r\n    cursor:pointer;\r\n}\r\n.cover {\r\n    background: linear-gradient(#e5ad74 35%, #6f280f 65%);\r\n}\r\n.cover::after, .cover::after {\r\n    pointer-events:none;\r\n    margin-top:0.70%;\r\n    margin-left:-15px;\r\n    position:absolute;\r\n    content: ' ';\r\n    width:175px;\r\n    height:80px;\r\n    display:block;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\nhtml {\r\n    background-color:var(--brown);\r\n}\r\nbody, * {\r\n    box-sizing:border-box;\r\n    margin:0;\r\n    padding:0;\r\n    font-family:'Lobster';\r\n    font: weight 1500px;;\r\n}\r\n\r\n.page {\r\n    display:grid;\r\n    grid-template-rows:minmax(150px, 2fr) minmax(700px, 4fr) 0.5fr;\r\n}\r\n.header {\r\n    font-weight:bolder;\r\n    padding:.75em;\r\n    background-color: var(--yellow);\r\n    display:grid;\r\n    width:100%; \r\n    justify-items:space-around;\r\n    grid-auto-flow:column;\r\n\r\n}\r\n.title {\r\n    justify-self:flex-start;\r\n    font-size:max(2.5rem, 2.5vw);\r\n}\r\n\r\n\r\n.main, .mainMenu {\r\n    padding:1.5em min(10%, 9rem);\r\n    background: linear-gradient(to bottom, var(--yellow), var(--brown));\r\n}\r\n.main {\r\n    display:grid;\r\n    grid-template-rows: minmax(400px, 1fr) minmax(350px, 1fr);\r\n}\r\n.containerOne, .containerTwo {\r\n    color:var(--darkBrown);\r\n    font-weight:bolder;\r\n    height:50%;\r\n}\r\n.containerOne {\r\n    display:flex;\r\n}\r\n.imageOne, .imageTwo {\r\n    width:clamp(30%, 300px, 45%);\r\n    height:150%;\r\n\r\n    position:relative;\r\n}\r\n.actualImageTwo, .actualImageOne {\r\n    width:100%;\r\n    height:100%;\r\n    position:relative;\r\n    margin-top:5%;\r\n}\r\n.decoOne, .decoTwo {\r\n    margin-top:5%;\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:-20%;\r\n    left:20%;\r\n    border:0.5px solid var(--darkBrown);\r\n}\r\n.imageOne {\r\n    float:right;\r\n    margin-top:min(120px, 15%)\r\n}\r\n.message, .messageTwo {\r\n    margin-top:5%;\r\n    font-size:max(1.5rem, 2vw);\r\n    text-align:center;\r\n    width:70%;\r\n    align-self:center;\r\n}\r\n.message {\r\n    margin-top:min(65px, -7%);\r\n}\r\n.footer {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:flex-start;\r\n    background: var(--brown);\r\n}\r\n.footerText {\r\n    font-size: 1.65rem;\r\n}\r\n.containerTwo {\r\n    display:flex;\r\n    justify-content:space-between;\r\n}\r\n\r\n@media (max-width:700px) {\r\n    .page {\r\n        grid-template-rows:2fr 3fr 0.5fr;\r\n    }\r\n    .header {\r\n        justify-content:center;\r\n        grid-auto-flow:row;\r\n    }\r\n    .normalHeading {\r\n        border-right:none;\r\n        margin-top:4%;\r\n    }\r\n    .imageOne {\r\n        float:left;\r\n        margin-top:0;\r\n    } \r\n    .message, .messageTwo {\r\n        margin-top:0;\r\n    }\r\n}\r\n.mainMenu {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n}\r\n.products {\r\n    margin:1em;\r\n    display:grid;\r\n    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));\r\n    grid-template-rows:repeat(auto-fit, minmax(200px, 1fr));\r\n}\r\n.productCont {\r\n    background:var(--yellow);\r\n    display:grid;\r\n    place-items:center;\r\n    max-width:350px;\r\n}\r\n.product {\r\n    background:rgba(0, 0, 0, 0.6);\r\n    width:90%;\r\n    height:90%;\r\n}\r\n.backgroundMenu {\r\n    width:80%;\r\n    height:70%;\r\n    background:rgba(0, 0, 0, 0.6)\r\n}\r\n@media (max-width:550px) {\r\n    .containerOne, .containerTwo {\r\n        flex-direction:column;\r\n        height:100%;\r\n        justify-content:space-evenly;\r\n        align-items:center;\r\n    }\r\n    .messageTwo {\r\n        order:1;\r\n    }\r\n    .imageTwo {\r\n        order:2;\r\n    }\r\n    .imageOne, .imageTwo {\r\n        height:auto;\r\n        width:80%;\r\n    }\r\n    .backgroundMenu {\r\n        background:transparent;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,0BAA0B;IAC1B,oBAAoB;AACxB;AAEA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kCAAkC;IAClC,mCAAmC;IACnC,oCAAoC;IACpC,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,4BAA4B;IAC5B,cAAc;AAClB;AACA;IACI,qDAAqD;AACzD;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,aAAa;IACb,mDAAmC;AACvC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,qBAAqB;IACrB,QAAQ;IACR,SAAS;IACT,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,8DAA8D;AAClE;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,0BAA0B;IAC1B,qBAAqB;;AAEzB;AACA;IACI,uBAAuB;IACvB,4BAA4B;AAChC;;;AAGA;IACI,4BAA4B;IAC5B,mEAAmE;AACvE;AACA;IACI,YAAY;IACZ,yDAAyD;AAC7D;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,YAAY;AAChB;AACA;IACI,4BAA4B;IAC5B,WAAW;;IAEX,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,QAAQ;IACR,QAAQ;IACR,mCAAmC;AACvC;AACA;IACI,WAAW;IACX;AACJ;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,iBAAiB;IACjB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;AAC5B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI;QACI,gCAAgC;IACpC;IACA;QACI,sBAAsB;QACtB,kBAAkB;IACtB;IACA;QACI,iBAAiB;QACjB,aAAa;IACjB;IACA;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,YAAY;IACZ,0DAA0D;IAC1D,uDAAuD;AAC3D;AACA;IACI,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,6BAA6B;IAC7B,SAAS;IACT,UAAU;AACd;AACA;IACI,SAAS;IACT,UAAU;IACV;AACJ;AACA;IACI;QACI,qBAAqB;QACrB,WAAW;QACX,4BAA4B;QAC5B,kBAAkB;IACtB;IACA;QACI,OAAO;IACX;IACA;QACI,OAAO;IACX;IACA;QACI,WAAW;QACX,SAAS;IACb;IACA;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":[":root {\r\n    --yellow: rgba(224, 172, 60);;\r\n    --brown: rgb(170, 108, 60);\r\n    --darkBrown: #591C02;\r\n}\r\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\nhtml {\r\n    height:100%;\r\n}\r\n#content {\r\n    height: 100%;\r\n}\r\n.page{\r\n    height:100vh;\r\n}\r\n.normalHeading {\r\n    width:fit-content;\r\n    height:fit-content;\r\n    border-top: 1px solid var(--brown);\r\n    border-left: 1px solid var(--brown);\r\n    border-right: 1px solid var(--brown);\r\n    padding:0.5em;\r\n    width:175px;\r\n    text-align:center;\r\n    font-size:max(1.8rem, 1.5vw);\r\n    cursor:pointer;\r\n}\r\n.cover {\r\n    background: linear-gradient(#e5ad74 35%, #6f280f 65%);\r\n}\r\n.cover::after, .cover::after {\r\n    pointer-events:none;\r\n    margin-top:0.70%;\r\n    margin-left:-15px;\r\n    position:absolute;\r\n    content: ' ';\r\n    width:175px;\r\n    height:80px;\r\n    display:block;\r\n    background: url('./firstSpill.svg');\r\n}\r\nhtml {\r\n    background-color:var(--brown);\r\n}\r\nbody, * {\r\n    box-sizing:border-box;\r\n    margin:0;\r\n    padding:0;\r\n    font-family:'Lobster';\r\n    font: weight 1500px;;\r\n}\r\n\r\n.page {\r\n    display:grid;\r\n    grid-template-rows:minmax(150px, 2fr) minmax(700px, 4fr) 0.5fr;\r\n}\r\n.header {\r\n    font-weight:bolder;\r\n    padding:.75em;\r\n    background-color: var(--yellow);\r\n    display:grid;\r\n    width:100%; \r\n    justify-items:space-around;\r\n    grid-auto-flow:column;\r\n\r\n}\r\n.title {\r\n    justify-self:flex-start;\r\n    font-size:max(2.5rem, 2.5vw);\r\n}\r\n\r\n\r\n.main, .mainMenu {\r\n    padding:1.5em min(10%, 9rem);\r\n    background: linear-gradient(to bottom, var(--yellow), var(--brown));\r\n}\r\n.main {\r\n    display:grid;\r\n    grid-template-rows: minmax(400px, 1fr) minmax(350px, 1fr);\r\n}\r\n.containerOne, .containerTwo {\r\n    color:var(--darkBrown);\r\n    font-weight:bolder;\r\n    height:50%;\r\n}\r\n.containerOne {\r\n    display:flex;\r\n}\r\n.imageOne, .imageTwo {\r\n    width:clamp(30%, 300px, 45%);\r\n    height:150%;\r\n\r\n    position:relative;\r\n}\r\n.actualImageTwo, .actualImageOne {\r\n    width:100%;\r\n    height:100%;\r\n    position:relative;\r\n    margin-top:5%;\r\n}\r\n.decoOne, .decoTwo {\r\n    margin-top:5%;\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:-20%;\r\n    left:20%;\r\n    border:0.5px solid var(--darkBrown);\r\n}\r\n.imageOne {\r\n    float:right;\r\n    margin-top:min(120px, 15%)\r\n}\r\n.message, .messageTwo {\r\n    margin-top:5%;\r\n    font-size:max(1.5rem, 2vw);\r\n    text-align:center;\r\n    width:70%;\r\n    align-self:center;\r\n}\r\n.message {\r\n    margin-top:min(65px, -7%);\r\n}\r\n.footer {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:flex-start;\r\n    background: var(--brown);\r\n}\r\n.footerText {\r\n    font-size: 1.65rem;\r\n}\r\n.containerTwo {\r\n    display:flex;\r\n    justify-content:space-between;\r\n}\r\n\r\n@media (max-width:700px) {\r\n    .page {\r\n        grid-template-rows:2fr 3fr 0.5fr;\r\n    }\r\n    .header {\r\n        justify-content:center;\r\n        grid-auto-flow:row;\r\n    }\r\n    .normalHeading {\r\n        border-right:none;\r\n        margin-top:4%;\r\n    }\r\n    .imageOne {\r\n        float:left;\r\n        margin-top:0;\r\n    } \r\n    .message, .messageTwo {\r\n        margin-top:0;\r\n    }\r\n}\r\n.mainMenu {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n}\r\n.products {\r\n    margin:1em;\r\n    display:grid;\r\n    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));\r\n    grid-template-rows:repeat(auto-fit, minmax(200px, 1fr));\r\n}\r\n.productCont {\r\n    background:var(--yellow);\r\n    display:grid;\r\n    place-items:center;\r\n    max-width:350px;\r\n}\r\n.product {\r\n    background:rgba(0, 0, 0, 0.6);\r\n    width:90%;\r\n    height:90%;\r\n}\r\n.backgroundMenu {\r\n    width:80%;\r\n    height:70%;\r\n    background:rgba(0, 0, 0, 0.6)\r\n}\r\n@media (max-width:550px) {\r\n    .containerOne, .containerTwo {\r\n        flex-direction:column;\r\n        height:100%;\r\n        justify-content:space-evenly;\r\n        align-items:center;\r\n    }\r\n    .messageTwo {\r\n        order:1;\r\n    }\r\n    .imageTwo {\r\n        order:2;\r\n    }\r\n    .imageOne, .imageTwo {\r\n        height:auto;\r\n        width:80%;\r\n    }\r\n    .backgroundMenu {\r\n        background:transparent;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage),
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _coffee_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffee.jpg */ "./src/coffee.jpg");
/* harmony import */ var _cafe_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cafe.jpg */ "./src/cafe.jpg");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




const headings = document.querySelectorAll('.normalHeading');

function removeAllCovers() {
    headings.forEach(heading => {
        heading.classList.remove('cover');
    })
}

function header(cover) {
    const header = document.createElement('div');
    header.classList = 'header';
    const title = document.createElement('span');
    title.textContent = 'SUNCAFE';
    title.classList = 'title';
    const home = document.createElement('span');
    home.textContent = 'HOME';
    home.classList = 'home normalHeading';
    removeAllCovers();
    console.log(cover);
    if (cover === "home")
        home.classList.add('cover');
    const menu = document.createElement('span');
    menu.textContent = 'MENU';
    menu.classList = 'menu normalHeading';
    if (cover === 'menu')
        menu.classList.add('cover');
    const contact = document.createElement('span');
    contact.textContent = 'CONTACT';
    contact.classList = 'contact normalHeading';
    if (cover === "contact")
        contact.classList.add('cover');

    header.append(title, home, menu, contact);

    return header;
}

function footer() {
    const footer = document.createElement('div');
    footer.classList = 'footer';

    const footerText = document.createElement('p');
    footerText.classList = 'footerText';
    footerText.textContent = '@deliasoare';

    footer.appendChild(footerText);

    return footer;
}

function homePage() {
    const homePage = document.createElement('div');
    homePage.classList = 'homepage page';

    const main = document.createElement('div');
    main.classList = 'main';
    let message = document.createElement('p');
    message.innerHTML = "Are you ready to taste the best coffee in town?"
    message.classList = 'message';

    const message2 = document.createElement('p');
    message2.textContent = "It's just a couple clicks away!";
    message2.classList = 'messageTwo';


    const containerOne = document.createElement('div');
    containerOne.classList = 'containerOne';

    const imageContainerOne = document.createElement('div');
    imageContainerOne.classList = 'imageOne';
    const image1 = new Image();
    image1.src = _coffee_jpg__WEBPACK_IMPORTED_MODULE_0__;
    image1.classList = 'actualImageOne';
    const decoImg1 = document.createElement('div');
    decoImg1.classList = 'decoOne';

    imageContainerOne.append(decoImg1, image1);
    containerOne.append(message, imageContainerOne);

    const containerTwo = document.createElement('div');
    containerTwo.classList = 'containerTwo';
    
    const imageContainerTwo = document.createElement('div');
    const image2 = new Image();
    image2.src = _cafe_jpg__WEBPACK_IMPORTED_MODULE_1__;
    image2.classList ='actualImageTwo';
    imageContainerTwo.classList = 'imageTwo';
    const decoImg2 = document.createElement('div');
    decoImg2.classList = 'decoTwo';

    imageContainerTwo.append(decoImg2, image2);
    containerTwo.append(imageContainerTwo, message2);

    main.append(containerOne, containerTwo);


    homePage.append(header('home'), main, footer());
    return homePage;
}

/***/ }),

/***/ "./src/cafe.jpg":
/*!**********************!*\
  !*** ./src/cafe.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3b7b337de495319e973.jpg";

/***/ }),

/***/ "./src/coffee.jpg":
/*!************************!*\
  !*** ./src/coffee.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f702a290cc1b23586784.jpg";

/***/ }),

/***/ "./src/firstSpill.svg":
/*!****************************!*\
  !*** ./src/firstSpill.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f88d6155397e7f39aa11.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"menu": 0
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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuScreen)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");



function menuScreen() {
    const menu = document.createElement('div');
    menu.classList = 'menuPage page';

    const mainMenu = document.createElement('div');
    mainMenu.classList = 'mainMenu';

    const bg = document.createElement('div');
    bg.classList = 'backgroundMenu';

    const products = document.createElement('div');
    products.classList = 'products';

    const product1Container = document.createElement('div');
    product1Container.className = 'product1Cont productCont'

    const product1 = document.createElement('div');
    product1.className = 'product1 product';

    product1Container.append(product1);
    
    products.append(product1Container);
    bg.append(products);

    mainMenu.append(bg);


    menu.append((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.header)('menu'), mainMenu, (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.footer)());

    return menu;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDeUM7QUFDekM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU0sb0JBQW9CLGlEQUFNO0FBQ2hEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9maXJzdFNwaWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLXllbGxvdzogcmdiYSgyMjQsIDE3MiwgNjApOztcXHJcXG4gICAgLS1icm93bjogcmdiKDE3MCwgMTA4LCA2MCk7XFxyXFxuICAgIC0tZGFya0Jyb3duOiAjNTkxQzAyO1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4ucGFnZXtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbn1cXHJcXG4ubm9ybWFsSGVhZGluZyB7XFxyXFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIHBhZGRpbmc6MC41ZW07XFxyXFxuICAgIHdpZHRoOjE3NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOm1heCgxLjhyZW0sIDEuNXZ3KTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcbi5jb3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTVhZDc0IDM1JSwgIzZmMjgwZiA2NSUpO1xcclxcbn1cXHJcXG4uY292ZXI6OmFmdGVyLCAuY292ZXI6OmFmdGVyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDowLjcwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6LTE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnICc7XFxyXFxuICAgIHdpZHRoOjE3NXB4O1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYnJvd24pO1xcclxcbn1cXHJcXG5ib2R5LCAqIHtcXHJcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBmb250LWZhbWlseTonTG9ic3Rlcic7XFxyXFxuICAgIGZvbnQ6IHdlaWdodCAxNTAwcHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZSB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOm1pbm1heCgxNTBweCwgMmZyKSBtaW5tYXgoNzAwcHgsIDRmcikgMC41ZnI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxyXFxuICAgIHBhZGRpbmc6Ljc1ZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgd2lkdGg6MTAwJTsgXFxyXFxuICAgIGp1c3RpZnktaXRlbXM6c3BhY2UtYXJvdW5kO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzpjb2x1bW47XFxyXFxuXFxyXFxufVxcclxcbi50aXRsZSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjpmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6bWF4KDIuNXJlbSwgMi41dncpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWFpbiwgLm1haW5NZW51IHtcXHJcXG4gICAgcGFkZGluZzoxLjVlbSBtaW4oMTAlLCA5cmVtKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0teWVsbG93KSwgdmFyKC0tYnJvd24pKTtcXHJcXG59XFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDQwMHB4LCAxZnIpIG1pbm1heCgzNTBweCwgMWZyKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lck9uZSwgLmNvbnRhaW5lclR3byB7XFxyXFxuICAgIGNvbG9yOnZhcigtLWRhcmtCcm93bik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG4gICAgaGVpZ2h0OjUwJTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lck9uZSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG59XFxyXFxuLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICB3aWR0aDpjbGFtcCgzMCUsIDMwMHB4LCA0NSUpO1xcclxcbiAgICBoZWlnaHQ6MTUwJTtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbi5hY3R1YWxJbWFnZVR3bywgLmFjdHVhbEltYWdlT25lIHtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOjUlO1xcclxcbn1cXHJcXG4uZGVjb09uZSwgLmRlY29Ud28ge1xcclxcbiAgICBtYXJnaW4tdG9wOjUlO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIHRvcDotMjAlO1xcclxcbiAgICBsZWZ0OjIwJTtcXHJcXG4gICAgYm9yZGVyOjAuNXB4IHNvbGlkIHZhcigtLWRhcmtCcm93bik7XFxyXFxufVxcclxcbi5pbWFnZU9uZSB7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBtYXJnaW4tdG9wOm1pbigxMjBweCwgMTUlKVxcclxcbn1cXHJcXG4ubWVzc2FnZSwgLm1lc3NhZ2VUd28ge1xcclxcbiAgICBtYXJnaW4tdG9wOjUlO1xcclxcbiAgICBmb250LXNpemU6bWF4KDEuNXJlbSwgMnZ3KTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIHdpZHRoOjcwJTtcXHJcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxyXFxufVxcclxcbi5tZXNzYWdlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDptaW4oNjVweCwgLTclKTtcXHJcXG59XFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnJvd24pO1xcclxcbn1cXHJcXG4uZm9vdGVyVGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lclR3byB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XFxyXFxuICAgIC5wYWdlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoyZnIgM2ZyIDAuNWZyO1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OnJvdztcXHJcXG4gICAgfVxcclxcbiAgICAubm9ybWFsSGVhZGluZyB7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6bm9uZTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6NCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlT25lIHtcXHJcXG4gICAgICAgIGZsb2F0OmxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjA7XFxyXFxuICAgIH0gXFxyXFxuICAgIC5tZXNzYWdlLCAubWVzc2FnZVR3byB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLm1haW5NZW51IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxufVxcclxcbi5wcm9kdWN0cyB7XFxyXFxuICAgIG1hcmdpbjoxZW07XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuLnByb2R1Y3RDb250IHtcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS15ZWxsb3cpO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOjM1MHB4O1xcclxcbn1cXHJcXG4ucHJvZHVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICB3aWR0aDo5MCU7XFxyXFxuICAgIGhlaWdodDo5MCU7XFxyXFxufVxcclxcbi5iYWNrZ3JvdW5kTWVudSB7XFxyXFxuICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgaGVpZ2h0OjcwJTtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNilcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NTUwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lck9uZSwgLmNvbnRhaW5lclR3byB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lc3NhZ2VUd28ge1xcclxcbiAgICAgICAgb3JkZXI6MTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgb3JkZXI6MjtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICBoZWlnaHQ6YXV0bztcXHJcXG4gICAgICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmFja2dyb3VuZE1lbnUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFEQUFxRDtBQUN6RDtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixtREFBbUM7QUFDdkM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4REFBOEQ7QUFDbEU7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7QUFDaEM7OztBQUdBO0lBQ0ksNEJBQTRCO0lBQzVCLG1FQUFtRTtBQUN2RTtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlEQUF5RDtBQUM3RDtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXOztJQUVYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixRQUFRO0lBQ1IsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO1FBQ0ksZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osMERBQTBEO0lBQzFELHVEQUF1RDtBQUMzRDtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Y7QUFDSjtBQUNBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLDRCQUE0QjtRQUM1QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLE9BQU87SUFDWDtJQUNBO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsU0FBUztJQUNiO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0teWVsbG93OiByZ2JhKDIyNCwgMTcyLCA2MCk7O1xcclxcbiAgICAtLWJyb3duOiByZ2IoMTcwLCAxMDgsIDYwKTtcXHJcXG4gICAgLS1kYXJrQnJvd246ICM1OTFDMDI7XFxyXFxufVxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLnBhZ2V7XFxyXFxuICAgIGhlaWdodDoxMDB2aDtcXHJcXG59XFxyXFxuLm5vcm1hbEhlYWRpbmcge1xcclxcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBwYWRkaW5nOjAuNWVtO1xcclxcbiAgICB3aWR0aDoxNzVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMS44cmVtLCAxLjV2dyk7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG4uY292ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2U1YWQ3NCAzNSUsICM2ZjI4MGYgNjUlKTtcXHJcXG59XFxyXFxuLmNvdmVyOjphZnRlciwgLmNvdmVyOjphZnRlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6MC43MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogJyAnO1xcclxcbiAgICB3aWR0aDoxNzVweDtcXHJcXG4gICAgaGVpZ2h0OjgwcHg7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9maXJzdFNwaWxsLnN2ZycpO1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1icm93bik7XFxyXFxufVxcclxcbmJvZHksICoge1xcclxcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidMb2JzdGVyJztcXHJcXG4gICAgZm9udDogd2VpZ2h0IDE1MDBweDs7XFxyXFxufVxcclxcblxcclxcbi5wYWdlIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWlubWF4KDE1MHB4LCAyZnIpIG1pbm1heCg3MDBweCwgNGZyKSAwLjVmcjtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG4gICAgcGFkZGluZzouNzVlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICB3aWR0aDoxMDAlOyBcXHJcXG4gICAganVzdGlmeS1pdGVtczpzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OmNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuLnRpdGxlIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOmZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMi41cmVtLCAyLjV2dyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tYWluLCAubWFpbk1lbnUge1xcclxcbiAgICBwYWRkaW5nOjEuNWVtIG1pbigxMCUsIDlyZW0pO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS15ZWxsb3cpLCB2YXIoLS1icm93bikpO1xcclxcbn1cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNDAwcHgsIDFmcikgbWlubWF4KDM1MHB4LCAxZnIpO1xcclxcbn1cXHJcXG4uY29udGFpbmVyT25lLCAuY29udGFpbmVyVHdvIHtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGFya0Jyb3duKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcclxcbiAgICBoZWlnaHQ6NTAlO1xcclxcbn1cXHJcXG4uY29udGFpbmVyT25lIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbn1cXHJcXG4uaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgIHdpZHRoOmNsYW1wKDMwJSwgMzAwcHgsIDQ1JSk7XFxyXFxuICAgIGhlaWdodDoxNTAlO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmFjdHVhbEltYWdlVHdvLCAuYWN0dWFsSW1hZ2VPbmUge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi10b3A6NSU7XFxyXFxufVxcclxcbi5kZWNvT25lLCAuZGVjb1R3byB7XFxyXFxuICAgIG1hcmdpbi10b3A6NSU7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgdG9wOi0yMCU7XFxyXFxuICAgIGxlZnQ6MjAlO1xcclxcbiAgICBib3JkZXI6MC41cHggc29saWQgdmFyKC0tZGFya0Jyb3duKTtcXHJcXG59XFxyXFxuLmltYWdlT25lIHtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxuICAgIG1hcmdpbi10b3A6bWluKDEyMHB4LCAxNSUpXFxyXFxufVxcclxcbi5tZXNzYWdlLCAubWVzc2FnZVR3byB7XFxyXFxuICAgIG1hcmdpbi10b3A6NSU7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMS41cmVtLCAydncpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgd2lkdGg6NzAlO1xcclxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOm1pbig2NXB4LCAtNyUpO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxyXFxufVxcclxcbi5mb290ZXJUZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xcclxcbn1cXHJcXG4uY29udGFpbmVyVHdvIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzAwcHgpIHtcXHJcXG4gICAgLnBhZ2Uge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjJmciAzZnIgMC41ZnI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmhlYWRlciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6cm93O1xcclxcbiAgICB9XFxyXFxuICAgIC5ub3JtYWxIZWFkaW5nIHtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDpub25lO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDo0JTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VPbmUge1xcclxcbiAgICAgICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MDtcXHJcXG4gICAgfSBcXHJcXG4gICAgLm1lc3NhZ2UsIC5tZXNzYWdlVHdvIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubWFpbk1lbnUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RzIHtcXHJcXG4gICAgbWFyZ2luOjFlbTtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbn1cXHJcXG4ucHJvZHVjdENvbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXllbGxvdyk7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6Y2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6MzUwcHg7XFxyXFxufVxcclxcbi5wcm9kdWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIHdpZHRoOjkwJTtcXHJcXG4gICAgaGVpZ2h0OjkwJTtcXHJcXG59XFxyXFxuLmJhY2tncm91bmRNZW51IHtcXHJcXG4gICAgd2lkdGg6ODAlO1xcclxcbiAgICBoZWlnaHQ6NzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC42KVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDo1NTBweCkge1xcclxcbiAgICAuY29udGFpbmVyT25lLCAuY29udGFpbmVyVHdvIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubWVzc2FnZVR3byB7XFxyXFxuICAgICAgICBvcmRlcjoxO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICBvcmRlcjoyO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgIGhlaWdodDphdXRvO1xcclxcbiAgICAgICAgd2lkdGg6ODAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5iYWNrZ3JvdW5kTWVudSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW1hZ2VPbmUgZnJvbSAnLi9jb2ZmZWUuanBnJztcclxuaW1wb3J0IGltYWdlVHdvIGZyb20gJy4vY2FmZS5qcGcnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcblxyXG5jb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3JtYWxIZWFkaW5nJyk7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxDb3ZlcnMoKSB7XHJcbiAgICBoZWFkaW5ncy5mb3JFYWNoKGhlYWRpbmcgPT4ge1xyXG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnY292ZXInKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXIoY292ZXIpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdCA9ICdoZWFkZXInO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdTVU5DQUZFJztcclxuICAgIHRpdGxlLmNsYXNzTGlzdCA9ICd0aXRsZSc7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIT01FJztcclxuICAgIGhvbWUuY2xhc3NMaXN0ID0gJ2hvbWUgbm9ybWFsSGVhZGluZyc7XHJcbiAgICByZW1vdmVBbGxDb3ZlcnMoKTtcclxuICAgIGNvbnNvbGUubG9nKGNvdmVyKTtcclxuICAgIGlmIChjb3ZlciA9PT0gXCJob21lXCIpXHJcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTUVOVSc7XHJcbiAgICBtZW51LmNsYXNzTGlzdCA9ICdtZW51IG5vcm1hbEhlYWRpbmcnO1xyXG4gICAgaWYgKGNvdmVyID09PSAnbWVudScpXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpO1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdCA9ICdjb250YWN0IG5vcm1hbEhlYWRpbmcnO1xyXG4gICAgaWYgKGNvdmVyID09PSBcImNvbnRhY3RcIilcclxuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvdmVyJyk7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgaG9tZSwgbWVudSwgY29udGFjdCk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdCA9ICdmb290ZXInO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBmb290ZXJUZXh0LmNsYXNzTGlzdCA9ICdmb290ZXJUZXh0JztcclxuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnQGRlbGlhc29hcmUnO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcclxuICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lUGFnZS5jbGFzc0xpc3QgPSAnaG9tZXBhZ2UgcGFnZSc7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QgPSAnbWFpbic7XHJcbiAgICBsZXQgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJBcmUgeW91IHJlYWR5IHRvIHRhc3RlIHRoZSBiZXN0IGNvZmZlZSBpbiB0b3duP1wiXHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdCA9ICdtZXNzYWdlJztcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lc3NhZ2UyLnRleHRDb250ZW50ID0gXCJJdCdzIGp1c3QgYSBjb3VwbGUgY2xpY2tzIGF3YXkhXCI7XHJcbiAgICBtZXNzYWdlMi5jbGFzc0xpc3QgPSAnbWVzc2FnZVR3byc7XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyT25lLmNsYXNzTGlzdCA9ICdjb250YWluZXJPbmUnO1xyXG5cclxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWFnZUNvbnRhaW5lck9uZS5jbGFzc0xpc3QgPSAnaW1hZ2VPbmUnO1xyXG4gICAgY29uc3QgaW1hZ2UxID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTEuc3JjID0gaW1hZ2VPbmU7XHJcbiAgICBpbWFnZTEuY2xhc3NMaXN0ID0gJ2FjdHVhbEltYWdlT25lJztcclxuICAgIGNvbnN0IGRlY29JbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZWNvSW1nMS5jbGFzc0xpc3QgPSAnZGVjb09uZSc7XHJcblxyXG4gICAgaW1hZ2VDb250YWluZXJPbmUuYXBwZW5kKGRlY29JbWcxLCBpbWFnZTEpO1xyXG4gICAgY29udGFpbmVyT25lLmFwcGVuZChtZXNzYWdlLCBpbWFnZUNvbnRhaW5lck9uZSk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXJUd28uY2xhc3NMaXN0ID0gJ2NvbnRhaW5lclR3byc7XHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMi5zcmMgPSBpbWFnZVR3bztcclxuICAgIGltYWdlMi5jbGFzc0xpc3QgPSdhY3R1YWxJbWFnZVR3byc7XHJcbiAgICBpbWFnZUNvbnRhaW5lclR3by5jbGFzc0xpc3QgPSAnaW1hZ2VUd28nO1xyXG4gICAgY29uc3QgZGVjb0ltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlY29JbWcyLmNsYXNzTGlzdCA9ICdkZWNvVHdvJztcclxuXHJcbiAgICBpbWFnZUNvbnRhaW5lclR3by5hcHBlbmQoZGVjb0ltZzIsIGltYWdlMik7XHJcbiAgICBjb250YWluZXJUd28uYXBwZW5kKGltYWdlQ29udGFpbmVyVHdvLCBtZXNzYWdlMik7XHJcblxyXG4gICAgbWFpbi5hcHBlbmQoY29udGFpbmVyT25lLCBjb250YWluZXJUd28pO1xyXG5cclxuXHJcbiAgICBob21lUGFnZS5hcHBlbmQoaGVhZGVyKCdob21lJyksIG1haW4sIGZvb3RlcigpKTtcclxuICAgIHJldHVybiBob21lUGFnZTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1lbnVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXHJcbmltcG9ydCB7aGVhZGVyLCBmb290ZXJ9IGZyb20gJy4vaG9tZXBhZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51U2NyZWVuKCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QgPSAnbWVudVBhZ2UgcGFnZSc7XHJcblxyXG4gICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1haW5NZW51LmNsYXNzTGlzdCA9ICdtYWluTWVudSc7XHJcblxyXG4gICAgY29uc3QgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJnLmNsYXNzTGlzdCA9ICdiYWNrZ3JvdW5kTWVudSc7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3RzLmNsYXNzTGlzdCA9ICdwcm9kdWN0cyc7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdDFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3QxQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9kdWN0MUNvbnQgcHJvZHVjdENvbnQnXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3QxLmNsYXNzTmFtZSA9ICdwcm9kdWN0MSBwcm9kdWN0JztcclxuXHJcbiAgICBwcm9kdWN0MUNvbnRhaW5lci5hcHBlbmQocHJvZHVjdDEpO1xyXG4gICAgXHJcbiAgICBwcm9kdWN0cy5hcHBlbmQocHJvZHVjdDFDb250YWluZXIpO1xyXG4gICAgYmcuYXBwZW5kKHByb2R1Y3RzKTtcclxuXHJcbiAgICBtYWluTWVudS5hcHBlbmQoYmcpO1xyXG5cclxuXHJcbiAgICBtZW51LmFwcGVuZChoZWFkZXIoJ21lbnUnKSwgbWFpbk1lbnUsIGZvb3RlcigpKTtcclxuXHJcbiAgICByZXR1cm4gbWVudTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=