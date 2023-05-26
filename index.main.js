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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Coffee.svg */ "./src/Coffee.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --yellow: rgba(255,217,127,255);\r\n    --brown: rgba(190,158,127,255);\r\n    --darkBrown: #591C02;\r\n    --transpdarkBrown: rgba(89, 28, 2, 0.5);\r\n    --middarkBrown: rgba(89, 28, 2, 0.75);\r\n}\r\nhtml, body {\r\n    height:100%;\r\n    background : var(--brown);\r\n}\r\n#content {\r\n    height: 100%;\r\n}\r\n.homepage{\r\n    height:100vh;\r\n}\r\n.menuPage {\r\n    min-height:100%;\r\n}\r\n.normalHeading {\r\n    width:fit-content;\r\n    height:fit-content;\r\n    border-top: 1px solid var(--brown);\r\n    border-left: 1px solid var(--brown);\r\n    border-right: 1px solid var(--brown);\r\n    padding:0.5em;\r\n    width:175px;\r\n    text-align:center;\r\n    font-size:max(1.8rem, 1.5vw);\r\n    cursor:pointer;\r\n}\r\n.cover {\r\n    background: linear-gradient(#e5ad74 35%, #6f280f 65%);\r\n}\r\n.cover::after, .cover::after {\r\n    pointer-events:none;\r\n    margin-top:0.70%;\r\n    margin-left:-15px;\r\n    position:absolute;\r\n    content: ' ';\r\n    width:175px;\r\n    height:80px;\r\n    display:block;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nbody, * {\r\n    box-sizing:border-box;\r\n    margin:0;\r\n    padding:0;\r\n    font-family: 'Lobster';\r\n    font-weight:lighter;\r\n\r\n}\r\n\r\n.page {\r\n    display:grid;\r\n    grid-template-rows:150px minmax(700px, 4fr) 100px;\r\n}\r\n.header {\r\n    font-weight:bolder;\r\n    padding:.75em;\r\n    background-color: var(--yellow);\r\n    display:grid;\r\n    width:100%; \r\n    justify-items:space-around;\r\n    grid-auto-flow:column;\r\n\r\n}\r\n.title {\r\n    justify-self:flex-start;\r\n    font-size:max(2.5rem, 2.5vw);\r\n}\r\n\r\n\r\n.main, .mainMenu {\r\n    padding:1.5em min(10%, 9rem);\r\n    background: linear-gradient(to bottom, var(--yellow), var(--brown));\r\n}\r\n.main {\r\n    display:grid;\r\n    grid-template-rows: minmax(400px, 1fr) minmax(350px, 1fr);\r\n}\r\n.containerOne, .containerTwo {\r\n    color:var(--darkBrown);\r\n    font-weight:bolder;\r\n}\r\n.containerOne {\r\n    display:flex;\r\n}\r\n.imageOne, .imageTwo {\r\n    min-width:150px;\r\n    max-height:350px;\r\n    z-index:1;\r\n    position:relative;\r\n}\r\n.actualImageTwo, .actualImageOne {\r\n    position:relative;\r\n    height:100%;\r\n    width:100%;\r\n    margin-top:5%;\r\n}\r\n.decoOne, .decoTwo {\r\n    margin-top:5%;\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:-20%;\r\n    left:20%;\r\n    background:var(--transpdarkBrown);\r\n\r\n}\r\n\r\n.menuButton {\r\n    background: linear-gradient(to top, var(--yellow), var(--brown));\r\n    padding:1.4em;\r\n    border-radius:14px;\r\n    font-size:1.4rem;\r\n    border:none;\r\n    cursor:pointer;\r\n    margin-top:-5%;\r\n}\r\n.imageOne {\r\n    float:right;\r\n    margin-top:min(120px, 15%)\r\n}\r\n.message, .messageTwo {\r\n    margin-top:-20%;\r\n    font-size:max(1.5rem, 2vw);\r\n    text-align:center;\r\n    width:70%;\r\n    align-self:center;\r\n}\r\n.preMessage {\r\n    font-size:6rem;\r\n}\r\n.message {\r\n    margin-top:min(65px, -7%);\r\n}\r\n.footer {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:flex-start;\r\n    background: var(--brown);\r\n    position:relative;\r\n    z-index:1--;\r\n}\r\n.footerText {\r\n    font-size: 1.65rem;\r\n    position:absolute;\r\n    bottom:0;\r\n}\r\n.containerTwo {\r\n    display:flex;\r\n    justify-content:space-between;\r\n}\r\n.buttonContainer {\r\n    width:100%;\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .page {\r\n        grid-template-rows:300px 3fr 100px;\r\n    }\r\n    .header {\r\n        justify-content:center;\r\n        grid-auto-flow:row;\r\n    }\r\n    .normalHeading {\r\n        border-right:none;\r\n    }\r\n    .imageOne {\r\n        float:left;\r\n        margin-top:0;\r\n    } \r\n    .message {\r\n        margin-top:-20%;\r\n    }\r\n}\r\n.mainMenu {\r\n    display:flex;\r\n    justify-content:center;\r\n}\r\n\r\n.products {\r\n    padding:1.5em;\r\n    background:var(--transpdarkBrown);\r\n    border-radius:20px;\r\n    display:grid;\r\n    align-items:baseline;\r\n    justify-items:center;\r\n    grid-template-columns:repeat(2, minmax(250px, 1fr));\r\n    width: max(350px, 60%);\r\n}\r\n.productCont {\r\n   padding:0.5em;\r\n   margin:2em;\r\n   cursor:pointer;\r\n}\r\n.productCont:hover {\r\n    transform:scale(1.1);\r\n}\r\n.productCont:hover::after {\r\n    content:' ';\r\n}\r\n.product {\r\n    display:flex;\r\n   flex-direction:column;\r\n   align-items:center;\r\n}\r\n.productTitle, .productPrice {\r\n    text-align:center;\r\n    font-size:1.5rem;\r\n}\r\n.productImg {\r\n    max-height:250px;\r\n}\r\n@media (max-width:1300px) {\r\n    .products {\r\n        grid-template-columns:repeat(1, minmax(250px, 1fr));\r\n    }\r\n}\r\n@media (max-width:750px) {\r\n    .containerOne, .containerTwo {\r\n        flex-direction:column;\r\n        height:100%;\r\n        justify-content:space-evenly;\r\n        align-items:center;\r\n    }\r\n    .messageTwo {\r\n        order:1;\r\n    }\r\n    .imageTwo {\r\n        order:2;\r\n    }\r\n    .imageOne, .imageTwo {\r\n        height:auto;\r\n        width:80%;\r\n    }\r\n}\r\n\r\n@media (min-width:500px) {\r\n    @media (max-width:750px) {\r\n        .imageOne, .imageTwo {\r\n            width:65%;\r\n        }\r\n        .menuButton {\r\n            margin-top: -9%;\r\n            font-size:1.2rem;\r\n        }\r\n    }\r\n}\r\n@media (max-width:900px) and (min-width:750px) {\r\n    .imageOne, .imageTwo {\r\n        max-width:270px;\r\n        margin-top:-2%;\r\n    }\r\n    .menuButton{\r\n        font-size:1.3rem;\r\n    }\r\n}\r\n.selectCont {\r\n    position:absolute;\r\n    width:20%;\r\n    left:0;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    height:fit-content;\r\n}\r\n\r\n.default_option {\r\n    background:white;\r\n    border-radius:5px;\r\n    position:relative;\r\n    cursor:pointer;\r\n    width: 80%;\r\n    height:fit-content;\r\n    padding: 10px 20px;\r\n    display:block;\r\n}\r\n.inactive {\r\n    display:none;\r\n}\r\n.active {\r\n    display:block;\r\n}\r\n\r\n\r\n.default_option:hover::after {\r\n    content:\"\\2304\";\r\n    position:absolute;\r\n    min-width:70px;\r\n    left:110%;\r\n    top:15%;\r\n    font-weight:bolder;\r\n    font-size:1.6rem;\r\n}\r\nul {\r\n    list-style:none;\r\n}\r\n.select_ul {\r\n    position:relative;\r\n    width: 80%;\r\n    background: white;\r\n    border-radius: 5px;\r\n    margin-top:2%;\r\n}\r\n\r\n.select_ul li {\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.select_ul li:first-child:hover {\r\n    border-top-left-radius:5px;\r\n    border-top-right-radius:5px;\r\n}\r\n.select_ul li:last-child:hover {\r\n    border-bottom-left-radius:5px;\r\n    border-bottom-right-radius:5px;\r\n}\r\n.select_ul li:hover {\r\n    background:var(--darkBrown);\r\n}\r\n.option {\r\n    display:flex;\r\n    align-items:center;\r\n}\r\n.option .icon {\r\n    background : url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0;\r\n    width:50%;\r\n    min-height:50px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.default_option::before {\r\n    top: 25px;\r\n    transform: rotate(-225deg);\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,8BAA8B;IAC9B,oBAAoB;IACpB,uCAAuC;IACvC,qCAAqC;AACzC;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kCAAkC;IAClC,mCAAmC;IACnC,oCAAoC;IACpC,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,4BAA4B;IAC5B,cAAc;AAClB;AACA;IACI,qDAAqD;AACzD;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,aAAa;IACb,mDAAmC;AACvC;;AAEA;IACI,qBAAqB;IACrB,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;IACZ,iDAAiD;AACrD;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,0BAA0B;IAC1B,qBAAqB;;AAEzB;AACA;IACI,uBAAuB;IACvB,4BAA4B;AAChC;;;AAGA;IACI,4BAA4B;IAC5B,mEAAmE;AACvE;AACA;IACI,YAAY;IACZ,yDAAyD;AAC7D;AACA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,aAAa;AACjB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,QAAQ;IACR,QAAQ;IACR,iCAAiC;;AAErC;;AAEA;IACI,gEAAgE;IAChE,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,cAAc;AAClB;AACA;IACI,WAAW;IACX;AACJ;AACA;IACI,eAAe;IACf,0BAA0B;IAC1B,iBAAiB;IACjB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;IACxB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,6BAA6B;AACjC;AACA;IACI,UAAU;IACV,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;;AAEtB;;AAEA;IACI;QACI,kCAAkC;IACtC;IACA;QACI,sBAAsB;QACtB,kBAAkB;IACtB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,eAAe;IACnB;AACJ;AACA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,oBAAoB;IACpB,mDAAmD;IACnD,sBAAsB;AAC1B;AACA;GACG,aAAa;GACb,UAAU;GACV,cAAc;AACjB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;GACb,qBAAqB;GACrB,kBAAkB;AACrB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI;QACI,mDAAmD;IACvD;AACJ;AACA;IACI;QACI,qBAAqB;QACrB,WAAW;QACX,4BAA4B;QAC5B,kBAAkB;IACtB;IACA;QACI,OAAO;IACX;IACA;QACI,OAAO;IACX;IACA;QACI,WAAW;QACX,SAAS;IACb;AACJ;;AAEA;IACI;QACI;YACI,SAAS;QACb;QACA;YACI,eAAe;YACf,gBAAgB;QACpB;IACJ;AACJ;AACA;IACI;QACI,eAAe;QACf,cAAc;IAClB;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI,iBAAiB;IACjB,SAAS;IACT,MAAM;IACN,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,SAAS;IACT,OAAO;IACP,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,kEAA4C;IAC5C,SAAS;IACT,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,0BAA0B;AAC9B","sourcesContent":[":root {\r\n    --yellow: rgba(255,217,127,255);\r\n    --brown: rgba(190,158,127,255);\r\n    --darkBrown: #591C02;\r\n    --transpdarkBrown: rgba(89, 28, 2, 0.5);\r\n    --middarkBrown: rgba(89, 28, 2, 0.75);\r\n}\r\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\nhtml, body {\r\n    height:100%;\r\n    background : var(--brown);\r\n}\r\n#content {\r\n    height: 100%;\r\n}\r\n.homepage{\r\n    height:100vh;\r\n}\r\n.menuPage {\r\n    min-height:100%;\r\n}\r\n.normalHeading {\r\n    width:fit-content;\r\n    height:fit-content;\r\n    border-top: 1px solid var(--brown);\r\n    border-left: 1px solid var(--brown);\r\n    border-right: 1px solid var(--brown);\r\n    padding:0.5em;\r\n    width:175px;\r\n    text-align:center;\r\n    font-size:max(1.8rem, 1.5vw);\r\n    cursor:pointer;\r\n}\r\n.cover {\r\n    background: linear-gradient(#e5ad74 35%, #6f280f 65%);\r\n}\r\n.cover::after, .cover::after {\r\n    pointer-events:none;\r\n    margin-top:0.70%;\r\n    margin-left:-15px;\r\n    position:absolute;\r\n    content: ' ';\r\n    width:175px;\r\n    height:80px;\r\n    display:block;\r\n    background: url('./firstSpill.svg');\r\n}\r\n\r\nbody, * {\r\n    box-sizing:border-box;\r\n    margin:0;\r\n    padding:0;\r\n    font-family: 'Lobster';\r\n    font-weight:lighter;\r\n\r\n}\r\n\r\n.page {\r\n    display:grid;\r\n    grid-template-rows:150px minmax(700px, 4fr) 100px;\r\n}\r\n.header {\r\n    font-weight:bolder;\r\n    padding:.75em;\r\n    background-color: var(--yellow);\r\n    display:grid;\r\n    width:100%; \r\n    justify-items:space-around;\r\n    grid-auto-flow:column;\r\n\r\n}\r\n.title {\r\n    justify-self:flex-start;\r\n    font-size:max(2.5rem, 2.5vw);\r\n}\r\n\r\n\r\n.main, .mainMenu {\r\n    padding:1.5em min(10%, 9rem);\r\n    background: linear-gradient(to bottom, var(--yellow), var(--brown));\r\n}\r\n.main {\r\n    display:grid;\r\n    grid-template-rows: minmax(400px, 1fr) minmax(350px, 1fr);\r\n}\r\n.containerOne, .containerTwo {\r\n    color:var(--darkBrown);\r\n    font-weight:bolder;\r\n}\r\n.containerOne {\r\n    display:flex;\r\n}\r\n.imageOne, .imageTwo {\r\n    min-width:150px;\r\n    max-height:350px;\r\n    z-index:1;\r\n    position:relative;\r\n}\r\n.actualImageTwo, .actualImageOne {\r\n    position:relative;\r\n    height:100%;\r\n    width:100%;\r\n    margin-top:5%;\r\n}\r\n.decoOne, .decoTwo {\r\n    margin-top:5%;\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:-20%;\r\n    left:20%;\r\n    background:var(--transpdarkBrown);\r\n\r\n}\r\n\r\n.menuButton {\r\n    background: linear-gradient(to top, var(--yellow), var(--brown));\r\n    padding:1.4em;\r\n    border-radius:14px;\r\n    font-size:1.4rem;\r\n    border:none;\r\n    cursor:pointer;\r\n    margin-top:-5%;\r\n}\r\n.imageOne {\r\n    float:right;\r\n    margin-top:min(120px, 15%)\r\n}\r\n.message, .messageTwo {\r\n    margin-top:-20%;\r\n    font-size:max(1.5rem, 2vw);\r\n    text-align:center;\r\n    width:70%;\r\n    align-self:center;\r\n}\r\n.preMessage {\r\n    font-size:6rem;\r\n}\r\n.message {\r\n    margin-top:min(65px, -7%);\r\n}\r\n.footer {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:flex-start;\r\n    background: var(--brown);\r\n    position:relative;\r\n    z-index:1--;\r\n}\r\n.footerText {\r\n    font-size: 1.65rem;\r\n    position:absolute;\r\n    bottom:0;\r\n}\r\n.containerTwo {\r\n    display:flex;\r\n    justify-content:space-between;\r\n}\r\n.buttonContainer {\r\n    width:100%;\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .page {\r\n        grid-template-rows:300px 3fr 100px;\r\n    }\r\n    .header {\r\n        justify-content:center;\r\n        grid-auto-flow:row;\r\n    }\r\n    .normalHeading {\r\n        border-right:none;\r\n    }\r\n    .imageOne {\r\n        float:left;\r\n        margin-top:0;\r\n    } \r\n    .message {\r\n        margin-top:-20%;\r\n    }\r\n}\r\n.mainMenu {\r\n    display:flex;\r\n    justify-content:center;\r\n}\r\n\r\n.products {\r\n    padding:1.5em;\r\n    background:var(--transpdarkBrown);\r\n    border-radius:20px;\r\n    display:grid;\r\n    align-items:baseline;\r\n    justify-items:center;\r\n    grid-template-columns:repeat(2, minmax(250px, 1fr));\r\n    width: max(350px, 60%);\r\n}\r\n.productCont {\r\n   padding:0.5em;\r\n   margin:2em;\r\n   cursor:pointer;\r\n}\r\n.productCont:hover {\r\n    transform:scale(1.1);\r\n}\r\n.productCont:hover::after {\r\n    content:' ';\r\n}\r\n.product {\r\n    display:flex;\r\n   flex-direction:column;\r\n   align-items:center;\r\n}\r\n.productTitle, .productPrice {\r\n    text-align:center;\r\n    font-size:1.5rem;\r\n}\r\n.productImg {\r\n    max-height:250px;\r\n}\r\n@media (max-width:1300px) {\r\n    .products {\r\n        grid-template-columns:repeat(1, minmax(250px, 1fr));\r\n    }\r\n}\r\n@media (max-width:750px) {\r\n    .containerOne, .containerTwo {\r\n        flex-direction:column;\r\n        height:100%;\r\n        justify-content:space-evenly;\r\n        align-items:center;\r\n    }\r\n    .messageTwo {\r\n        order:1;\r\n    }\r\n    .imageTwo {\r\n        order:2;\r\n    }\r\n    .imageOne, .imageTwo {\r\n        height:auto;\r\n        width:80%;\r\n    }\r\n}\r\n\r\n@media (min-width:500px) {\r\n    @media (max-width:750px) {\r\n        .imageOne, .imageTwo {\r\n            width:65%;\r\n        }\r\n        .menuButton {\r\n            margin-top: -9%;\r\n            font-size:1.2rem;\r\n        }\r\n    }\r\n}\r\n@media (max-width:900px) and (min-width:750px) {\r\n    .imageOne, .imageTwo {\r\n        max-width:270px;\r\n        margin-top:-2%;\r\n    }\r\n    .menuButton{\r\n        font-size:1.3rem;\r\n    }\r\n}\r\n.selectCont {\r\n    position:absolute;\r\n    width:20%;\r\n    left:0;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    height:fit-content;\r\n}\r\n\r\n.default_option {\r\n    background:white;\r\n    border-radius:5px;\r\n    position:relative;\r\n    cursor:pointer;\r\n    width: 80%;\r\n    height:fit-content;\r\n    padding: 10px 20px;\r\n    display:block;\r\n}\r\n.inactive {\r\n    display:none;\r\n}\r\n.active {\r\n    display:block;\r\n}\r\n\r\n\r\n.default_option:hover::after {\r\n    content:\"\\2304\";\r\n    position:absolute;\r\n    min-width:70px;\r\n    left:110%;\r\n    top:15%;\r\n    font-weight:bolder;\r\n    font-size:1.6rem;\r\n}\r\nul {\r\n    list-style:none;\r\n}\r\n.select_ul {\r\n    position:relative;\r\n    width: 80%;\r\n    background: white;\r\n    border-radius: 5px;\r\n    margin-top:2%;\r\n}\r\n\r\n.select_ul li {\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.select_ul li:first-child:hover {\r\n    border-top-left-radius:5px;\r\n    border-top-right-radius:5px;\r\n}\r\n.select_ul li:last-child:hover {\r\n    border-bottom-left-radius:5px;\r\n    border-bottom-right-radius:5px;\r\n}\r\n.select_ul li:hover {\r\n    background:var(--darkBrown);\r\n}\r\n.option {\r\n    display:flex;\r\n    align-items:center;\r\n}\r\n.option .icon {\r\n    background : url(\"Coffee.svg\") no-repeat 0 0;\r\n    width:50%;\r\n    min-height:50px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.default_option::before {\r\n    top: 25px;\r\n    transform: rotate(-225deg);\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
    const message = document.createElement('p');
    const preMessage = document.createElement('span');
    preMessage.textContent = 'A';
    preMessage.classList = 'preMessage';
    message.innerHTML = "re you ready to taste THE best coffee?"
    message.classList = 'message';
    message.prepend(preMessage);

    const message2 = document.createElement('p');
    message2.textContent = "";
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

    const buttonContainer = document.createElement('div');
    const button = document.createElement('button');
    button.classList = 'menuButton';
    button.textContent = 'CHECK IT OUT';
    buttonContainer.classList = 'buttonContainer';
    buttonContainer.append(button);

    imageContainerTwo.append(decoImg2, image2);
    containerTwo.append(imageContainerTwo, buttonContainer);

    main.append(containerOne, containerTwo);


    homePage.append(header('home'), main, footer());
    return homePage;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOption": () => (/* binding */ addOption),
/* harmony export */   "default": () => (/* binding */ menuScreen)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _espresso_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./espresso.png */ "./src/espresso.png");
/* harmony import */ var _cafeLatte_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cafeLatte.png */ "./src/cafeLatte.png");
/* harmony import */ var _capp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capp.png */ "./src/capp.png");
/* harmony import */ var _americano_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./americano.png */ "./src/americano.png");
/* harmony import */ var _caramelMacchiato_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caramelMacchiato.png */ "./src/caramelMacchiato.png");
/* harmony import */ var _irishCoffee_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./irishCoffee.png */ "./src/irishCoffee.png");











function addProduct(image, title, price) {
    const productContainer = document.createElement('div');
    productContainer.className = 'productCont'

    const product = document.createElement('div');
    product.className = 'product';

    const productImg = new Image()
    productImg.src = image;
    productImg.classList = 'productImg';

    const message = document.createElement('div');
    const titlePr = document.createElement('p');
    titlePr.textContent = title;
    titlePr.classList = 'productTitle';

    const pricePr = document.createElement('p');
    pricePr.textContent = `${price}$`;
    pricePr.classList = 'productPrice';

    message.append(titlePr, pricePr);
    product.append(productImg, message);
    productContainer.append(product);
    
    return productContainer;

}
function addOption(title) {
    const li = document.createElement('li');
    const option = document.createElement('div');
    const icon = document.createElement('div');
    icon.classList = 'icon';
    const para = document.createElement('p');
    para.textContent = title;
    if (title.includes(' ')) {
        let s = title.split(' ');
        option.classList = `option ${s[0] + s[1]}`;
    }
    else
        option.classList = `option ${title}`;
    option.append(icon, para);
    li.append(option);

    return li;
}
function menuScreen() {
    const menu = document.createElement('div');
    menu.classList = 'menuPage page';

    const selectContainer = document.createElement('div');
    selectContainer.classList = 'selectCont';

    const def = document.createElement('ul');
    def.classList = 'default_option';
    const select = document.createElement('ul');
    select.classList = 'select_ul inactive';
    def.append(addOption('Coffee'));
    select.append(addOption('Other Beverages'),
    addOption('Dessert'), addOption('Add Ons'));
    selectContainer.append(def, select);

    const mainMenu = document.createElement('div');
    mainMenu.classList = 'mainMenu';


    const products = document.createElement('div');
    products.classList = 'products';    

    products.append(addProduct(_espresso_png__WEBPACK_IMPORTED_MODULE_1__, 'Espresso', 5), 
    addProduct(_cafeLatte_png__WEBPACK_IMPORTED_MODULE_2__, 'Caffe Latte', 5),
    addProduct(_capp_png__WEBPACK_IMPORTED_MODULE_3__, 'Cappucino', 6),
    addProduct(_americano_png__WEBPACK_IMPORTED_MODULE_4__, 'Americano Coffee', 5),
    addProduct(_caramelMacchiato_png__WEBPACK_IMPORTED_MODULE_5__, 'Caramel Macchiato', 7),
    addProduct(_irishCoffee_png__WEBPACK_IMPORTED_MODULE_6__, 'Irish Coffee', 5));


    mainMenu.append(selectContainer, products);


    menu.append((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.header)('menu'), mainMenu, (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.footer)());

    return menu;
}



/***/ }),

/***/ "./src/Coffee.svg":
/*!************************!*\
  !*** ./src/Coffee.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24a682402b136f902b40.svg";

/***/ }),

/***/ "./src/americano.png":
/*!***************************!*\
  !*** ./src/americano.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54b27f8680431ab71234.png";

/***/ }),

/***/ "./src/cafe.jpg":
/*!**********************!*\
  !*** ./src/cafe.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3b7b337de495319e973.jpg";

/***/ }),

/***/ "./src/cafeLatte.png":
/*!***************************!*\
  !*** ./src/cafeLatte.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6d4048dfb13ade09064.png";

/***/ }),

/***/ "./src/capp.png":
/*!**********************!*\
  !*** ./src/capp.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "229e98dfeb30245d7413.png";

/***/ }),

/***/ "./src/caramelMacchiato.png":
/*!**********************************!*\
  !*** ./src/caramelMacchiato.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb52b96df548cf9dbded.png";

/***/ }),

/***/ "./src/coffee.jpg":
/*!************************!*\
  !*** ./src/coffee.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f702a290cc1b23586784.jpg";

/***/ }),

/***/ "./src/espresso.png":
/*!**************************!*\
  !*** ./src/espresso.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "419659ac50713b5932e2.png";

/***/ }),

/***/ "./src/firstSpill.svg":
/*!****************************!*\
  !*** ./src/firstSpill.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f88d6155397e7f39aa11.svg";

/***/ }),

/***/ "./src/irishCoffee.png":
/*!*****************************!*\
  !*** ./src/irishCoffee.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe4bf3ceb99c911c5625.png";

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
/******/ 			"index": 0
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





const output = document.querySelector('#content');

let currentPage = 'home';
function loadPage(page) {
    output.innerHTML = '';
    if (page === 'home')
        output.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])());
    else if (page === 'menu') 
        output.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    else
        output.appendChild(contactPage());
}

function onMenuLoad() {
    let def = document.querySelector('.default_option');
    let select = document.querySelector('.select_ul');
    let options = select.querySelectorAll('.option');
    
        def.addEventListener('click', function() {
            if (select.classList.value === 'select_ul inactive')
                select.classList = 'select_ul active';
            else
                select.classList = 'select_ul inactive';
            })
            
            options.forEach(option => {
                option.addEventListener('click', function() {
                    changeMenu(option);
                })
            })
    }

function changeMenu(option) {
    const options = document.querySelectorAll('.option');
    let def = document.querySelector('.default_option');
    let select = document.querySelector('.select_ul');
    def.innerHTML = '';
    select.innerHTML = '';
    def.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__.addOption)(option.classList[1]))
    options.forEach(opt => {
        if (opt !== option) {
            select.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__.addOption)(opt.classList[1]));
        }
    })
}
document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.home')) {
        loadPage('home');
        currentPage = 'home';
    }
    else if (e.target === document.querySelector('.menu') || e.target === document.querySelector('.menuButton')) {
        loadPage('menu');
        currentPage = 'menu';
        onMenuLoad();
    }
    else if (e.target === document.querySelector('.contact')) {
        loadPage('contact');
        currentPage = 'contact';
    }
})

window.onload = function() {

    output.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])('home'));

    
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBUTtBQUMvQjtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9maXJzdFNwaWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIkNvZmZlZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0teWVsbG93OiByZ2JhKDI1NSwyMTcsMTI3LDI1NSk7XFxyXFxuICAgIC0tYnJvd246IHJnYmEoMTkwLDE1OCwxMjcsMjU1KTtcXHJcXG4gICAgLS1kYXJrQnJvd246ICM1OTFDMDI7XFxyXFxuICAgIC0tdHJhbnNwZGFya0Jyb3duOiByZ2JhKDg5LCAyOCwgMiwgMC41KTtcXHJcXG4gICAgLS1taWRkYXJrQnJvd246IHJnYmEoODksIDI4LCAyLCAwLjc1KTtcXHJcXG59XFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0tYnJvd24pO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmhvbWVwYWdle1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxufVxcclxcbi5tZW51UGFnZSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuLm5vcm1hbEhlYWRpbmcge1xcclxcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBwYWRkaW5nOjAuNWVtO1xcclxcbiAgICB3aWR0aDoxNzVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMS44cmVtLCAxLjV2dyk7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG4uY292ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2U1YWQ3NCAzNSUsICM2ZjI4MGYgNjUlKTtcXHJcXG59XFxyXFxuLmNvdmVyOjphZnRlciwgLmNvdmVyOjphZnRlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6MC43MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogJyAnO1xcclxcbiAgICB3aWR0aDoxNzVweDtcXHJcXG4gICAgaGVpZ2h0OjgwcHg7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbmJvZHksICoge1xcclxcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wYWdlIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MTUwcHggbWlubWF4KDcwMHB4LCA0ZnIpIDEwMHB4O1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcclxcbiAgICBwYWRkaW5nOi43NWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIHdpZHRoOjEwMCU7IFxcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOnNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6Y29sdW1uO1xcclxcblxcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydDtcXHJcXG4gICAgZm9udC1zaXplOm1heCgyLjVyZW0sIDIuNXZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1haW4sIC5tYWluTWVudSB7XFxyXFxuICAgIHBhZGRpbmc6MS41ZW0gbWluKDEwJSwgOXJlbSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXllbGxvdyksIHZhcigtLWJyb3duKSk7XFxyXFxufVxcclxcbi5tYWluIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg0MDBweCwgMWZyKSBtaW5tYXgoMzUwcHgsIDFmcik7XFxyXFxufVxcclxcbi5jb250YWluZXJPbmUsIC5jb250YWluZXJUd28ge1xcclxcbiAgICBjb2xvcjp2YXIoLS1kYXJrQnJvd24pO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxyXFxufVxcclxcbi5jb250YWluZXJPbmUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxufVxcclxcbi5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgbWluLXdpZHRoOjE1MHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OjM1MHB4O1xcclxcbiAgICB6LWluZGV4OjE7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYWN0dWFsSW1hZ2VUd28sIC5hY3R1YWxJbWFnZU9uZSB7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDo1JTtcXHJcXG59XFxyXFxuLmRlY29PbmUsIC5kZWNvVHdvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDo1JTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB0b3A6LTIwJTtcXHJcXG4gICAgbGVmdDoyMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVCdXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB2YXIoLS15ZWxsb3cpLCB2YXIoLS1icm93bikpO1xcclxcbiAgICBwYWRkaW5nOjEuNGVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjE0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjRyZW07XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDotNSU7XFxyXFxufVxcclxcbi5pbWFnZU9uZSB7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBtYXJnaW4tdG9wOm1pbigxMjBweCwgMTUlKVxcclxcbn1cXHJcXG4ubWVzc2FnZSwgLm1lc3NhZ2VUd28ge1xcclxcbiAgICBtYXJnaW4tdG9wOi0yMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMS41cmVtLCAydncpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgd2lkdGg6NzAlO1xcclxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXHJcXG59XFxyXFxuLnByZU1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6NnJlbTtcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOm1pbig2NXB4LCAtNyUpO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OjEtLTtcXHJcXG59XFxyXFxuLmZvb3RlclRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBib3R0b206MDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lclR3byB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5idXR0b25Db250YWluZXIge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgLnBhZ2Uge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjMwMHB4IDNmciAxMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgICAgICBncmlkLWF1dG8tZmxvdzpyb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5vcm1hbEhlYWRpbmcge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0Om5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlT25lIHtcXHJcXG4gICAgICAgIGZsb2F0OmxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjA7XFxyXFxuICAgIH0gXFxyXFxuICAgIC5tZXNzYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6LTIwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubWFpbk1lbnUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyB7XFxyXFxuICAgIHBhZGRpbmc6MS41ZW07XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICB3aWR0aDogbWF4KDM1MHB4LCA2MCUpO1xcclxcbn1cXHJcXG4ucHJvZHVjdENvbnQge1xcclxcbiAgIHBhZGRpbmc6MC41ZW07XFxyXFxuICAgbWFyZ2luOjJlbTtcXHJcXG4gICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RDb250OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XFxyXFxufVxcclxcbi5wcm9kdWN0Q29udDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OicgJztcXHJcXG59XFxyXFxuLnByb2R1Y3Qge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RUaXRsZSwgLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbn1cXHJcXG4ucHJvZHVjdEltZyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6MjUwcHg7XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOjEzMDBweCkge1xcclxcbiAgICAucHJvZHVjdHMge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgxLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOjc1MHB4KSB7XFxyXFxuICAgIC5jb250YWluZXJPbmUsIC5jb250YWluZXJUd28ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZXNzYWdlVHdvIHtcXHJcXG4gICAgICAgIG9yZGVyOjE7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgIG9yZGVyOjI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgaGVpZ2h0OmF1dG87XFxyXFxuICAgICAgICB3aWR0aDo4MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NTAwcHgpIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgICAgIC5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDo2NSU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubWVudUJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTklO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjc1MHB4KSB7XFxyXFxuICAgIC5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDoyNzBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6LTIlO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51QnV0dG9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOjEuM3JlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uc2VsZWN0Q29udCB7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB3aWR0aDoyMCU7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVmYXVsdF9vcHRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRlZmF1bHRfb3B0aW9uOmhvdmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6XFxcIlxcXFwyMzA0XFxcIjtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIG1pbi13aWR0aDo3MHB4O1xcclxcbiAgICBsZWZ0OjExMCU7XFxyXFxuICAgIHRvcDoxNSU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG4gICAgZm9udC1zaXplOjEuNnJlbTtcXHJcXG59XFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOm5vbmU7XFxyXFxufVxcclxcbi5zZWxlY3RfdWwge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDoyJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdF91bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0X3VsIGxpOmZpcnN0LWNoaWxkOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDtcXHJcXG59XFxyXFxuLnNlbGVjdF91bCBsaTpsYXN0LWNoaWxkOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDtcXHJcXG59XFxyXFxuLnNlbGVjdF91bCBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFya0Jyb3duKTtcXHJcXG59XFxyXFxuLm9wdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbn1cXHJcXG4ub3B0aW9uIC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IDAgMDtcXHJcXG4gICAgd2lkdGg6NTAlO1xcclxcbiAgICBtaW4taGVpZ2h0OjUwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVmYXVsdF9vcHRpb246OmJlZm9yZSB7XFxyXFxuICAgIHRvcDogMjVweDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtJ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QTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0VBQTRDO0lBQzVDLFNBQVM7SUFDVCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0teWVsbG93OiByZ2JhKDI1NSwyMTcsMTI3LDI1NSk7XFxyXFxuICAgIC0tYnJvd246IHJnYmEoMTkwLDE1OCwxMjcsMjU1KTtcXHJcXG4gICAgLS1kYXJrQnJvd246ICM1OTFDMDI7XFxyXFxuICAgIC0tdHJhbnNwZGFya0Jyb3duOiByZ2JhKDg5LCAyOCwgMiwgMC41KTtcXHJcXG4gICAgLS1taWRkYXJrQnJvd246IHJnYmEoODksIDI4LCAyLCAwLjc1KTtcXHJcXG59XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS1icm93bik7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uaG9tZXBhZ2V7XFxyXFxuICAgIGhlaWdodDoxMDB2aDtcXHJcXG59XFxyXFxuLm1lbnVQYWdlIHtcXHJcXG4gICAgbWluLWhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG4ubm9ybWFsSGVhZGluZyB7XFxyXFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIHBhZGRpbmc6MC41ZW07XFxyXFxuICAgIHdpZHRoOjE3NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOm1heCgxLjhyZW0sIDEuNXZ3KTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcbi5jb3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTVhZDc0IDM1JSwgIzZmMjgwZiA2NSUpO1xcclxcbn1cXHJcXG4uY292ZXI6OmFmdGVyLCAuY292ZXI6OmFmdGVyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDowLjcwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6LTE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnICc7XFxyXFxuICAgIHdpZHRoOjE3NXB4O1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ZpcnN0U3BpbGwuc3ZnJyk7XFxyXFxufVxcclxcblxcclxcbmJvZHksICoge1xcclxcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wYWdlIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MTUwcHggbWlubWF4KDcwMHB4LCA0ZnIpIDEwMHB4O1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcclxcbiAgICBwYWRkaW5nOi43NWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIHdpZHRoOjEwMCU7IFxcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOnNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6Y29sdW1uO1xcclxcblxcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydDtcXHJcXG4gICAgZm9udC1zaXplOm1heCgyLjVyZW0sIDIuNXZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1haW4sIC5tYWluTWVudSB7XFxyXFxuICAgIHBhZGRpbmc6MS41ZW0gbWluKDEwJSwgOXJlbSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXllbGxvdyksIHZhcigtLWJyb3duKSk7XFxyXFxufVxcclxcbi5tYWluIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg0MDBweCwgMWZyKSBtaW5tYXgoMzUwcHgsIDFmcik7XFxyXFxufVxcclxcbi5jb250YWluZXJPbmUsIC5jb250YWluZXJUd28ge1xcclxcbiAgICBjb2xvcjp2YXIoLS1kYXJrQnJvd24pO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxyXFxufVxcclxcbi5jb250YWluZXJPbmUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxufVxcclxcbi5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgbWluLXdpZHRoOjE1MHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OjM1MHB4O1xcclxcbiAgICB6LWluZGV4OjE7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYWN0dWFsSW1hZ2VUd28sIC5hY3R1YWxJbWFnZU9uZSB7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDo1JTtcXHJcXG59XFxyXFxuLmRlY29PbmUsIC5kZWNvVHdvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDo1JTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB0b3A6LTIwJTtcXHJcXG4gICAgbGVmdDoyMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVCdXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB2YXIoLS15ZWxsb3cpLCB2YXIoLS1icm93bikpO1xcclxcbiAgICBwYWRkaW5nOjEuNGVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjE0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjRyZW07XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDotNSU7XFxyXFxufVxcclxcbi5pbWFnZU9uZSB7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBtYXJnaW4tdG9wOm1pbigxMjBweCwgMTUlKVxcclxcbn1cXHJcXG4ubWVzc2FnZSwgLm1lc3NhZ2VUd28ge1xcclxcbiAgICBtYXJnaW4tdG9wOi0yMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMS41cmVtLCAydncpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgd2lkdGg6NzAlO1xcclxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXHJcXG59XFxyXFxuLnByZU1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6NnJlbTtcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOm1pbig2NXB4LCAtNyUpO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OjEtLTtcXHJcXG59XFxyXFxuLmZvb3RlclRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBib3R0b206MDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lclR3byB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5idXR0b25Db250YWluZXIge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgLnBhZ2Uge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjMwMHB4IDNmciAxMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgICAgICBncmlkLWF1dG8tZmxvdzpyb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5vcm1hbEhlYWRpbmcge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0Om5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlT25lIHtcXHJcXG4gICAgICAgIGZsb2F0OmxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjA7XFxyXFxuICAgIH0gXFxyXFxuICAgIC5tZXNzYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6LTIwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubWFpbk1lbnUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyB7XFxyXFxuICAgIHBhZGRpbmc6MS41ZW07XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICB3aWR0aDogbWF4KDM1MHB4LCA2MCUpO1xcclxcbn1cXHJcXG4ucHJvZHVjdENvbnQge1xcclxcbiAgIHBhZGRpbmc6MC41ZW07XFxyXFxuICAgbWFyZ2luOjJlbTtcXHJcXG4gICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RDb250OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XFxyXFxufVxcclxcbi5wcm9kdWN0Q29udDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OicgJztcXHJcXG59XFxyXFxuLnByb2R1Y3Qge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RUaXRsZSwgLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbn1cXHJcXG4ucHJvZHVjdEltZyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6MjUwcHg7XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOjEzMDBweCkge1xcclxcbiAgICAucHJvZHVjdHMge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgxLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOjc1MHB4KSB7XFxyXFxuICAgIC5jb250YWluZXJPbmUsIC5jb250YWluZXJUd28ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZXNzYWdlVHdvIHtcXHJcXG4gICAgICAgIG9yZGVyOjE7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgIG9yZGVyOjI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgaGVpZ2h0OmF1dG87XFxyXFxuICAgICAgICB3aWR0aDo4MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NTAwcHgpIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgICAgIC5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDo2NSU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubWVudUJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTklO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjc1MHB4KSB7XFxyXFxuICAgIC5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDoyNzBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6LTIlO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51QnV0dG9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOjEuM3JlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uc2VsZWN0Q29udCB7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB3aWR0aDoyMCU7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVmYXVsdF9vcHRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRlZmF1bHRfb3B0aW9uOmhvdmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6XFxcIlxcXFwyMzA0XFxcIjtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIG1pbi13aWR0aDo3MHB4O1xcclxcbiAgICBsZWZ0OjExMCU7XFxyXFxuICAgIHRvcDoxNSU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG4gICAgZm9udC1zaXplOjEuNnJlbTtcXHJcXG59XFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOm5vbmU7XFxyXFxufVxcclxcbi5zZWxlY3RfdWwge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDoyJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdF91bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0X3VsIGxpOmZpcnN0LWNoaWxkOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDtcXHJcXG59XFxyXFxuLnNlbGVjdF91bCBsaTpsYXN0LWNoaWxkOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDtcXHJcXG59XFxyXFxuLnNlbGVjdF91bCBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFya0Jyb3duKTtcXHJcXG59XFxyXFxuLm9wdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbn1cXHJcXG4ub3B0aW9uIC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHVybChcXFwiQ29mZmVlLnN2Z1xcXCIpIG5vLXJlcGVhdCAwIDA7XFxyXFxuICAgIHdpZHRoOjUwJTtcXHJcXG4gICAgbWluLWhlaWdodDo1MHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmF1bHRfb3B0aW9uOjpiZWZvcmUge1xcclxcbiAgICB0b3A6IDI1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltYWdlT25lIGZyb20gJy4vY29mZmVlLmpwZyc7XHJcbmltcG9ydCBpbWFnZVR3byBmcm9tICcuL2NhZmUuanBnJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuY29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9ybWFsSGVhZGluZycpO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ292ZXJzKCkge1xyXG4gICAgaGVhZGluZ3MuZm9yRWFjaChoZWFkaW5nID0+IHtcclxuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdmVyJyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKGNvdmVyKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QgPSAnaGVhZGVyJztcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnU1VOQ0FGRSc7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QgPSAndGl0bGUnO1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSE9NRSc7XHJcbiAgICBob21lLmNsYXNzTGlzdCA9ICdob21lIG5vcm1hbEhlYWRpbmcnO1xyXG4gICAgcmVtb3ZlQWxsQ292ZXJzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb3Zlcik7XHJcbiAgICBpZiAoY292ZXIgPT09IFwiaG9tZVwiKVxyXG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnY292ZXInKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01FTlUnO1xyXG4gICAgbWVudS5jbGFzc0xpc3QgPSAnbWVudSBub3JtYWxIZWFkaW5nJztcclxuICAgIGlmIChjb3ZlciA9PT0gJ21lbnUnKVxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnY292ZXInKTtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QgPSAnY29udGFjdCBub3JtYWxIZWFkaW5nJztcclxuICAgIGlmIChjb3ZlciA9PT0gXCJjb250YWN0XCIpXHJcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmQodGl0bGUsIGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QgPSAnZm9vdGVyJztcclxuXHJcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZm9vdGVyVGV4dC5jbGFzc0xpc3QgPSAnZm9vdGVyVGV4dCc7XHJcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ0BkZWxpYXNvYXJlJztcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZVBhZ2UuY2xhc3NMaXN0ID0gJ2hvbWVwYWdlIHBhZ2UnO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1haW4uY2xhc3NMaXN0ID0gJ21haW4nO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByZU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcmVNZXNzYWdlLnRleHRDb250ZW50ID0gJ0EnO1xyXG4gICAgcHJlTWVzc2FnZS5jbGFzc0xpc3QgPSAncHJlTWVzc2FnZSc7XHJcbiAgICBtZXNzYWdlLmlubmVySFRNTCA9IFwicmUgeW91IHJlYWR5IHRvIHRhc3RlIFRIRSBiZXN0IGNvZmZlZT9cIlxyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QgPSAnbWVzc2FnZSc7XHJcbiAgICBtZXNzYWdlLnByZXBlbmQocHJlTWVzc2FnZSk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtZXNzYWdlMi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBtZXNzYWdlMi5jbGFzc0xpc3QgPSAnbWVzc2FnZVR3byc7XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyT25lLmNsYXNzTGlzdCA9ICdjb250YWluZXJPbmUnO1xyXG5cclxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWFnZUNvbnRhaW5lck9uZS5jbGFzc0xpc3QgPSAnaW1hZ2VPbmUnO1xyXG4gICAgY29uc3QgaW1hZ2UxID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTEuc3JjID0gaW1hZ2VPbmU7XHJcbiAgICBpbWFnZTEuY2xhc3NMaXN0ID0gJ2FjdHVhbEltYWdlT25lJztcclxuICAgIGNvbnN0IGRlY29JbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZWNvSW1nMS5jbGFzc0xpc3QgPSAnZGVjb09uZSc7XHJcblxyXG4gICAgaW1hZ2VDb250YWluZXJPbmUuYXBwZW5kKGRlY29JbWcxLCBpbWFnZTEpO1xyXG4gICAgY29udGFpbmVyT25lLmFwcGVuZChtZXNzYWdlLCBpbWFnZUNvbnRhaW5lck9uZSk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXJUd28uY2xhc3NMaXN0ID0gJ2NvbnRhaW5lclR3byc7XHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMi5zcmMgPSBpbWFnZVR3bztcclxuICAgIGltYWdlMi5jbGFzc0xpc3QgPSdhY3R1YWxJbWFnZVR3byc7XHJcbiAgICBpbWFnZUNvbnRhaW5lclR3by5jbGFzc0xpc3QgPSAnaW1hZ2VUd28nO1xyXG4gICAgY29uc3QgZGVjb0ltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlY29JbWcyLmNsYXNzTGlzdCA9ICdkZWNvVHdvJztcclxuXHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdCA9ICdtZW51QnV0dG9uJztcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDSEVDSyBJVCBPVVQnO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdidXR0b25Db250YWluZXInO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgIGltYWdlQ29udGFpbmVyVHdvLmFwcGVuZChkZWNvSW1nMiwgaW1hZ2UyKTtcclxuICAgIGNvbnRhaW5lclR3by5hcHBlbmQoaW1hZ2VDb250YWluZXJUd28sIGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gICAgbWFpbi5hcHBlbmQoY29udGFpbmVyT25lLCBjb250YWluZXJUd28pO1xyXG5cclxuXHJcbiAgICBob21lUGFnZS5hcHBlbmQoaGVhZGVyKCdob21lJyksIG1haW4sIGZvb3RlcigpKTtcclxuICAgIHJldHVybiBob21lUGFnZTtcclxufSIsIlxyXG5pbXBvcnQge2hlYWRlciwgZm9vdGVyfSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IEVzcHJlc3NvSW1nIGZyb20gJy4vZXNwcmVzc28ucG5nJztcclxuaW1wb3J0IENhZmZlTGF0dGVJbWcgZnJvbSAnLi9jYWZlTGF0dGUucG5nJztcclxuaW1wb3J0IENhcHB1Y2lub0ltZyBmcm9tICcuL2NhcHAucG5nJztcclxuaW1wb3J0IEFtZXJpY2Fub0ltZyBmcm9tICcuL2FtZXJpY2Fuby5wbmcnO1xyXG5pbXBvcnQgY2FyYW1lbE1hY2NoSW1nIGZyb20gJy4vY2FyYW1lbE1hY2NoaWF0by5wbmcnO1xyXG5pbXBvcnQgaXJpc2hJbWcgZnJvbSAnLi9pcmlzaENvZmZlZS5wbmcnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9kdWN0KGltYWdlLCB0aXRsZSwgcHJpY2UpIHtcclxuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb2R1Y3RDb250J1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3QuY2xhc3NOYW1lID0gJ3Byb2R1Y3QnO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RJbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgcHJvZHVjdEltZy5zcmMgPSBpbWFnZTtcclxuICAgIHByb2R1Y3RJbWcuY2xhc3NMaXN0ID0gJ3Byb2R1Y3RJbWcnO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRpdGxlUHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0aXRsZVByLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB0aXRsZVByLmNsYXNzTGlzdCA9ICdwcm9kdWN0VGl0bGUnO1xyXG5cclxuICAgIGNvbnN0IHByaWNlUHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcmljZVByLnRleHRDb250ZW50ID0gYCR7cHJpY2V9JGA7XHJcbiAgICBwcmljZVByLmNsYXNzTGlzdCA9ICdwcm9kdWN0UHJpY2UnO1xyXG5cclxuICAgIG1lc3NhZ2UuYXBwZW5kKHRpdGxlUHIsIHByaWNlUHIpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQocHJvZHVjdEltZywgbWVzc2FnZSk7XHJcbiAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZChwcm9kdWN0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHByb2R1Y3RDb250YWluZXI7XHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRPcHRpb24odGl0bGUpIHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWNvbi5jbGFzc0xpc3QgPSAnaWNvbic7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgaWYgKHRpdGxlLmluY2x1ZGVzKCcgJykpIHtcclxuICAgICAgICBsZXQgcyA9IHRpdGxlLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdCA9IGBvcHRpb24gJHtzWzBdICsgc1sxXX1gO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QgPSBgb3B0aW9uICR7dGl0bGV9YDtcclxuICAgIG9wdGlvbi5hcHBlbmQoaWNvbiwgcGFyYSk7XHJcbiAgICBsaS5hcHBlbmQob3B0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gbGk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVNjcmVlbigpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0ID0gJ21lbnVQYWdlIHBhZ2UnO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VsZWN0Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdzZWxlY3RDb250JztcclxuXHJcbiAgICBjb25zdCBkZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZGVmLmNsYXNzTGlzdCA9ICdkZWZhdWx0X29wdGlvbic7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgc2VsZWN0LmNsYXNzTGlzdCA9ICdzZWxlY3RfdWwgaW5hY3RpdmUnO1xyXG4gICAgZGVmLmFwcGVuZChhZGRPcHRpb24oJ0NvZmZlZScpKTtcclxuICAgIHNlbGVjdC5hcHBlbmQoYWRkT3B0aW9uKCdPdGhlciBCZXZlcmFnZXMnKSxcclxuICAgIGFkZE9wdGlvbignRGVzc2VydCcpLCBhZGRPcHRpb24oJ0FkZCBPbnMnKSk7XHJcbiAgICBzZWxlY3RDb250YWluZXIuYXBwZW5kKGRlZiwgc2VsZWN0KTtcclxuXHJcbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbk1lbnUuY2xhc3NMaXN0ID0gJ21haW5NZW51JztcclxuXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3RzLmNsYXNzTGlzdCA9ICdwcm9kdWN0cyc7ICAgIFxyXG5cclxuICAgIHByb2R1Y3RzLmFwcGVuZChhZGRQcm9kdWN0KEVzcHJlc3NvSW1nLCAnRXNwcmVzc28nLCA1KSwgXHJcbiAgICBhZGRQcm9kdWN0KENhZmZlTGF0dGVJbWcsICdDYWZmZSBMYXR0ZScsIDUpLFxyXG4gICAgYWRkUHJvZHVjdChDYXBwdWNpbm9JbWcsICdDYXBwdWNpbm8nLCA2KSxcclxuICAgIGFkZFByb2R1Y3QoQW1lcmljYW5vSW1nLCAnQW1lcmljYW5vIENvZmZlZScsIDUpLFxyXG4gICAgYWRkUHJvZHVjdChjYXJhbWVsTWFjY2hJbWcsICdDYXJhbWVsIE1hY2NoaWF0bycsIDcpLFxyXG4gICAgYWRkUHJvZHVjdChpcmlzaEltZywgJ0lyaXNoIENvZmZlZScsIDUpKTtcclxuXHJcblxyXG4gICAgbWFpbk1lbnUuYXBwZW5kKHNlbGVjdENvbnRhaW5lciwgcHJvZHVjdHMpO1xyXG5cclxuXHJcbiAgICBtZW51LmFwcGVuZChoZWFkZXIoJ21lbnUnKSwgbWFpbk1lbnUsIGZvb3RlcigpKTtcclxuXHJcbiAgICByZXR1cm4gbWVudTtcclxufVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQge2FkZE9wdGlvbn0gZnJvbSAnLi9tZW51JztcclxuXHJcbmNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG5sZXQgY3VycmVudFBhZ2UgPSAnaG9tZSc7XHJcbmZ1bmN0aW9uIGxvYWRQYWdlKHBhZ2UpIHtcclxuICAgIG91dHB1dC5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmIChwYWdlID09PSAnaG9tZScpXHJcbiAgICAgICAgb3V0cHV0LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpO1xyXG4gICAgZWxzZSBpZiAocGFnZSA9PT0gJ21lbnUnKSBcclxuICAgICAgICBvdXRwdXQuYXBwZW5kQ2hpbGQobWVudVBhZ2UoKSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgb3V0cHV0LmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1lbnVMb2FkKCkge1xyXG4gICAgbGV0IGRlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0X29wdGlvbicpO1xyXG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfdWwnKTtcclxuICAgIGxldCBvcHRpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKTtcclxuICAgIFxyXG4gICAgICAgIGRlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3NlbGVjdF91bCBpbmFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0ID0gJ3NlbGVjdF91bCBhY3RpdmUnO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0ID0gJ3NlbGVjdF91bCBpbmFjdGl2ZSc7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU1lbnUob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VNZW51KG9wdGlvbikge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKTtcclxuICAgIGxldCBkZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdF9vcHRpb24nKTtcclxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X3VsJyk7XHJcbiAgICBkZWYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkZWYuYXBwZW5kKGFkZE9wdGlvbihvcHRpb24uY2xhc3NMaXN0WzFdKSlcclxuICAgIG9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICAgIGlmIChvcHQgIT09IG9wdGlvbikge1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kKGFkZE9wdGlvbihvcHQuY2xhc3NMaXN0WzFdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJykpIHtcclxuICAgICAgICBsb2FkUGFnZSgnaG9tZScpO1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gJ2hvbWUnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykgfHwgZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnV0dG9uJykpIHtcclxuICAgICAgICBsb2FkUGFnZSgnbWVudScpO1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gJ21lbnUnO1xyXG4gICAgICAgIG9uTWVudUxvYWQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpKSB7XHJcbiAgICAgICAgbG9hZFBhZ2UoJ2NvbnRhY3QnKTtcclxuICAgICAgICBjdXJyZW50UGFnZSA9ICdjb250YWN0JztcclxuICAgIH1cclxufSlcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoJ2hvbWUnKSk7XHJcblxyXG4gICAgXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=