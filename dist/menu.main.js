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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! beverage.svg */ "./src/beverage.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! dessert.svg */ "./src/dessert.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! misc.svg */ "./src/misc.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --yellow: rgba(255,217,127,255);\r\n    --brown: rgba(190,158,127,255);\r\n    --darkBrown:rgb(89, 28, 2);\r\n    --transpdarkBrown: rgba(89, 28, 2, 0.5);\r\n    --middarkBrown: rgba(89, 28, 2, 0.75);\r\n    --coverYellow:rgb(229, 173, 116);\r\n    --coverBrown:rgb(112, 41, 15);\r\n\r\n}\r\nhtml, body {\r\n    height:100%;\r\n    background : var(--brown);\r\n}\r\nhtml::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n#content {\r\n    height: 100%;\r\n}\r\n.homepage, .contactpage {\r\n    height:100vh;\r\n}\r\n.menuPage {\r\n    min-height:100%;\r\n}\r\n.normalHeading {\r\n    width:fit-content;\r\n    height:fit-content;\r\n    border-top: 1px solid var(--brown);\r\n    border-left: 1px solid var(--brown);\r\n    border-right: 1px solid var(--brown);\r\n    padding:0.5em;\r\n    width:175px;\r\n    text-align:center;\r\n    font-size:max(1.8rem, 1.5vw);\r\n    cursor:pointer;\r\n}\r\n.normalHeading, .title, .footer,  .menuButton {\r\n    color: var(--darkBrown);\r\n}\r\n.cover {\r\n    background: linear-gradient(var(--coverYellow) 35%, var(--coverBrown) 65%);\r\n}\r\n.cover::after, .cover::after {\r\n    pointer-events:none;\r\n    margin-top:0.70%;\r\n    margin-left:-15px;\r\n    position:absolute;\r\n    content: ' ';\r\n    width:175px;\r\n    height:80px;\r\n    display:block;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nbody, * {\r\n    box-sizing:border-box;\r\n    margin:0;\r\n    padding:0;\r\n    font-family: 'Lobster';\r\n    font-weight:lighter;\r\n\r\n}\r\n.page {\r\n    display:grid;\r\n    grid-template-rows:150px minmax(700px, 4fr) 100px;\r\n}\r\n.header {\r\n    font-weight:bolder;\r\n    padding:.75em;\r\n    background-color: var(--yellow);\r\n    display:grid;\r\n    width:100%; \r\n    justify-items:space-around;\r\n    grid-auto-flow:column;\r\n\r\n}\r\n.title {\r\n    justify-self:flex-start;\r\n    font-size:max(2.5rem, 2.5vw);\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.main, .mainMenu, .mainContact {\r\n    width:100%;\r\n    padding:1.5em min(10%, 9rem);\r\n    background: linear-gradient(to bottom, var(--yellow), var(--brown));\r\n}\r\n.main {\r\n    display:grid;\r\n    grid-template-rows: minmax(400px, 1fr) minmax(350px, 1fr);\r\n}\r\n.containerOne, .containerTwo {\r\n    color:var(--darkBrown);\r\n}\r\n.containerOne {\r\n    display:flex;\r\n}\r\n.imageOne, .imageTwo {\r\n    min-width:150px;\r\n    max-height:350px;\r\n    z-index:1;\r\n    position:relative;\r\n}\r\n.actualImageTwo, .actualImageOne {\r\n    position:relative;\r\n    height:100%;\r\n    width:100%;\r\n    margin-top:5%;\r\n}\r\n.decoOne, .decoTwo {\r\n    margin-top:5%;\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:-20%;\r\n    left:20%;\r\n    background:var(--transpdarkBrown);\r\n\r\n}\r\n\r\n.menuButton {\r\n    background: linear-gradient(to top, var(--yellow), var(--brown));\r\n    padding:1.4em;\r\n    border-radius:14px;\r\n    font-size:1.4rem;\r\n    border:none;\r\n    cursor:pointer;\r\n    margin-top:-5%;\r\n}\r\n.imageOne {\r\n    float:right;\r\n    margin-top:min(120px, 15%)\r\n}\r\n.message, .messageTwo {\r\n    margin-top:-20%;\r\n    font-size:max(1.5rem, 2vw);\r\n    text-align:center;\r\n    width:70%;\r\n    align-self:center;\r\n}\r\n.preMessage {\r\n    font-size:6rem;\r\n}\r\n.message {\r\n    margin-top:min(65px, -7%);\r\n}\r\n.footer {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:flex-start;\r\n    background: var(--brown);\r\n    position:relative;\r\n    z-index:1--;\r\n}\r\n.footerText {\r\n    font-size: 1.65rem;\r\n    position:absolute;\r\n    bottom:0;\r\n    text-decoration:none;\r\n    color:var(--darkBrown);\r\n}\r\n.containerTwo {\r\n    display:flex;\r\n    justify-content:space-between;\r\n}\r\n.buttonContainer {\r\n    width:100%;\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .page {\r\n        grid-template-rows:300px 3fr 100px;\r\n    }\r\n    .header {\r\n        justify-content:center;\r\n        grid-auto-flow:row;\r\n    }\r\n    .normalHeading {\r\n        border-right:none;\r\n    }\r\n    .imageOne {\r\n        float:left;\r\n        margin-top:0;\r\n    } \r\n    .message {\r\n        margin-top:-20%;\r\n    }\r\n    .contactContainer {\r\n        min-height:600px;\r\n        margin-top:5%;\r\n    }\r\n}\r\n.mainMenu {\r\n    display:flex;\r\n    justify-content:center;\r\n}\r\n\r\n.products, .contactContainer {\r\n    padding:1.5em;\r\n    background:var(--transpdarkBrown);\r\n    border-radius:20px;\r\n    display:grid;\r\n    align-items:baseline;\r\n    justify-items:center;\r\n    grid-template-columns:repeat(2, minmax(250px, 1fr));\r\n    width: max(350px, 70%);\r\n}\r\n.mainContact {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n}\r\n.contactContainer {\r\n    height:100%;\r\n}\r\n.productCont {\r\n   padding:0.5em;\r\n   margin:2em;\r\n   cursor:pointer;\r\n}\r\n.productCont:hover {\r\n    transform:scale(1.1);\r\n    box-shadow:5px 5px 5px var(--darkBrown);\r\n}\r\n.productCont:hover::after {\r\n    content:' ';\r\n}\r\n.product {\r\n    display:flex;\r\n   flex-direction:column;\r\n   align-items:center;\r\n}\r\n.productTitle, .productPrice {\r\n    text-align:center;\r\n    font-size:1.5rem;\r\n    color: var(--yellow);\r\n}\r\n.productImg {\r\n    max-height:250px;\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .containerOne, .containerTwo {\r\n        flex-direction:column;\r\n        height:100%;\r\n        justify-content:space-evenly;\r\n        align-items:center;\r\n    }\r\n    .messageTwo {\r\n        order:1;\r\n    }\r\n    .imageTwo {\r\n        order:2;\r\n    }\r\n    .imageOne, .imageTwo {\r\n        height:auto;\r\n        width:80%;\r\n    }\r\n}\r\n\r\n@media (min-width:500px) {\r\n    @media (max-width:750px) {\r\n        .imageOne, .imageTwo {\r\n            width:65%;\r\n        }\r\n        .menuButton {\r\n            margin-top: -9%;\r\n            font-size:1.2rem;\r\n        }\r\n    }\r\n}\r\n@media (max-width:900px) and (min-width:750px) {\r\n    .imageOne, .imageTwo {\r\n        max-width:270px;\r\n        margin-top:-2%;\r\n    }\r\n    .menuButton{\r\n        font-size:1.3rem;\r\n    }\r\n}\r\n.selectCont {\r\n    position:absolute;\r\n    width:20%;\r\n    left:0;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    height:fit-content;\r\n}\r\n\r\n.default_option {\r\n    background: var(--transpdarkBrown);\r\n    border-radius:5px;\r\n    position:relative;\r\n    cursor:pointer;\r\n    width: 80%;\r\n    max-width:250px;\r\n    height:fit-content;\r\n    padding: 10px 20px;\r\n    display:block;\r\n}\r\n.inactive {\r\n    display:none;\r\n}\r\n.active {\r\n    display:block;\r\n}\r\n\r\n.default_option:hover::after {\r\n    content:\"\\2304\";\r\n    position:absolute;\r\n    min-width:70px;\r\n    left:110%;\r\n    top:10%;\r\n    font-weight:bolder;\r\n    font-size:1.6rem;\r\n    color: var(--transpdarkBrown);\r\n}\r\nul {\r\n    list-style:none;\r\n}\r\n.select_ul {\r\n    position:relative;\r\n    width: 80%;\r\n    max-width:250px;\r\n    background: var(--transpdarkBrown);\r\n    border-radius: 5px;\r\n    margin-top:0.5%;\r\n}\r\n\r\n.select_ul li {\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.select_ul li:first-child:hover {\r\n    border-top-left-radius:5px;\r\n    border-top-right-radius:5px;\r\n}\r\n.select_ul li:last-child:hover {\r\n    border-bottom-left-radius:5px;\r\n    border-bottom-right-radius:5px;\r\n}\r\n.select_ul li:hover {\r\n    background:var(--darkBrown);\r\n}\r\n.option {\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:space-between;\r\n    color: var(--yellow);\r\n}\r\n.option .icon {\r\n    width:60px;\r\n    min-height:50px;\r\n    margin-right: 5px;\r\n}\r\n.Coffee > .icon {\r\n    background : url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0;\r\n}\r\n\r\n.OtherBeverages > .icon {\r\n    background : url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 0 0; \r\n}\r\n.Dessert > .icon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat 0 0;\r\n}\r\n.default_option::before {\r\n    top: 25px;\r\n    transform: rotate(-225deg);\r\n}\r\n.AddOns > .icon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat 0 0;\r\n}\r\n@media (max-width:1300px) {\r\n    .products {\r\n        grid-template-columns:repeat(1, minmax(250px, 1fr));\r\n    }\r\n    .mainMenu {\r\n        display:flex;\r\n        justify-content:flex-start;\r\n        align-content:center;\r\n        flex-wrap:wrap;\r\n        align-items:center;\r\n        flex-direction:column;\r\n    }\r\n    .selectCont {\r\n        position:relative;\r\n        width:100%;\r\n    }\r\n    .default_option, .select_ul {\r\n        text-align:center;\r\n        width: 250px;\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n    }\r\n    .products {\r\n        margin-top: 25px;\r\n    }\r\n}\r\n.contactContainer {\r\n    display:grid;\r\n    place-content:center;\r\n    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));\r\n    font-size:1.3rem;\r\n    color:var(--yellow);\r\n    text-align:center;\r\n    gap:10%;\r\n}\r\n.contactContainer > div {\r\n    line-height:200%;\r\n}\r\n.heading {\r\n    font-size:2rem;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,8BAA8B;IAC9B,0BAA0B;IAC1B,uCAAuC;IACvC,qCAAqC;IACrC,gCAAgC;IAChC,6BAA6B;;AAEjC;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;AACA;IACI,aAAa;EACf;AACF;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kCAAkC;IAClC,mCAAmC;IACnC,oCAAoC;IACpC,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,4BAA4B;IAC5B,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,0EAA0E;AAC9E;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,aAAa;IACb,mDAAmC;AACvC;;AAEA;IACI,qBAAqB;IACrB,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,mBAAmB;;AAEvB;AACA;IACI,YAAY;IACZ,iDAAiD;AACrD;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,0BAA0B;IAC1B,qBAAqB;;AAEzB;AACA;IACI,uBAAuB;IACvB,4BAA4B;IAC5B,cAAc;AAClB;;;AAGA;IACI,UAAU;IACV,4BAA4B;IAC5B,mEAAmE;AACvE;AACA;IACI,YAAY;IACZ,yDAAyD;AAC7D;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,aAAa;AACjB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,QAAQ;IACR,QAAQ;IACR,iCAAiC;;AAErC;;AAEA;IACI,gEAAgE;IAChE,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,cAAc;AAClB;AACA;IACI,WAAW;IACX;AACJ;AACA;IACI,eAAe;IACf,0BAA0B;IAC1B,iBAAiB;IACjB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;IACxB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,QAAQ;IACR,oBAAoB;IACpB,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,6BAA6B;AACjC;AACA;IACI,UAAU;IACV,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;;AAEtB;;AAEA;IACI;QACI,kCAAkC;IACtC;IACA;QACI,sBAAsB;QACtB,kBAAkB;IACtB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;QACI,gBAAgB;QAChB,aAAa;IACjB;AACJ;AACA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,oBAAoB;IACpB,mDAAmD;IACnD,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;GACG,aAAa;GACb,UAAU;GACV,cAAc;AACjB;AACA;IACI,oBAAoB;IACpB,uCAAuC;AAC3C;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;GACb,qBAAqB;GACrB,kBAAkB;AACrB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,qBAAqB;QACrB,WAAW;QACX,4BAA4B;QAC5B,kBAAkB;IACtB;IACA;QACI,OAAO;IACX;IACA;QACI,OAAO;IACX;IACA;QACI,WAAW;QACX,SAAS;IACb;AACJ;;AAEA;IACI;QACI;YACI,SAAS;QACb;QACA;YACI,eAAe;YACf,gBAAgB;QACpB;IACJ;AACJ;AACA;IACI;QACI,eAAe;QACf,cAAc;IAClB;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI,iBAAiB;IACjB,SAAS;IACT,MAAM;IACN,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,SAAS;IACT,OAAO;IACP,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;AACjC;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,UAAU;IACV,eAAe;IACf,kCAAkC;IAClC,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;IAC7B,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kEAA4C;AAChD;;AAEA;IACI,kEAA8C;AAClD;AACA;IACI,iEAA4C;AAChD;AACA;IACI,SAAS;IACT,0BAA0B;AAC9B;AACA;IACI,iEAAyC;AAC7C;AACA;IACI;QACI,mDAAmD;IACvD;IACA;QACI,YAAY;QACZ,0BAA0B;QAC1B,oBAAoB;QACpB,cAAc;QACd,kBAAkB;QAClB,qBAAqB;IACzB;IACA;QACI,iBAAiB;QACjB,UAAU;IACd;IACA;QACI,iBAAiB;QACjB,YAAY;QACZ,gBAAgB;QAChB,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,0DAA0D;IAC1D,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,OAAO;AACX;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB","sourcesContent":[":root {\r\n    --yellow: rgba(255,217,127,255);\r\n    --brown: rgba(190,158,127,255);\r\n    --darkBrown:rgb(89, 28, 2);\r\n    --transpdarkBrown: rgba(89, 28, 2, 0.5);\r\n    --middarkBrown: rgba(89, 28, 2, 0.75);\r\n    --coverYellow:rgb(229, 173, 116);\r\n    --coverBrown:rgb(112, 41, 15);\r\n\r\n}\r\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\nhtml, body {\r\n    height:100%;\r\n    background : var(--brown);\r\n}\r\nhtml::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n#content {\r\n    height: 100%;\r\n}\r\n.homepage, .contactpage {\r\n    height:100vh;\r\n}\r\n.menuPage {\r\n    min-height:100%;\r\n}\r\n.normalHeading {\r\n    width:fit-content;\r\n    height:fit-content;\r\n    border-top: 1px solid var(--brown);\r\n    border-left: 1px solid var(--brown);\r\n    border-right: 1px solid var(--brown);\r\n    padding:0.5em;\r\n    width:175px;\r\n    text-align:center;\r\n    font-size:max(1.8rem, 1.5vw);\r\n    cursor:pointer;\r\n}\r\n.normalHeading, .title, .footer,  .menuButton {\r\n    color: var(--darkBrown);\r\n}\r\n.cover {\r\n    background: linear-gradient(var(--coverYellow) 35%, var(--coverBrown) 65%);\r\n}\r\n.cover::after, .cover::after {\r\n    pointer-events:none;\r\n    margin-top:0.70%;\r\n    margin-left:-15px;\r\n    position:absolute;\r\n    content: ' ';\r\n    width:175px;\r\n    height:80px;\r\n    display:block;\r\n    background: url('./firstSpill.svg');\r\n}\r\n\r\nbody, * {\r\n    box-sizing:border-box;\r\n    margin:0;\r\n    padding:0;\r\n    font-family: 'Lobster';\r\n    font-weight:lighter;\r\n\r\n}\r\n.page {\r\n    display:grid;\r\n    grid-template-rows:150px minmax(700px, 4fr) 100px;\r\n}\r\n.header {\r\n    font-weight:bolder;\r\n    padding:.75em;\r\n    background-color: var(--yellow);\r\n    display:grid;\r\n    width:100%; \r\n    justify-items:space-around;\r\n    grid-auto-flow:column;\r\n\r\n}\r\n.title {\r\n    justify-self:flex-start;\r\n    font-size:max(2.5rem, 2.5vw);\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.main, .mainMenu, .mainContact {\r\n    width:100%;\r\n    padding:1.5em min(10%, 9rem);\r\n    background: linear-gradient(to bottom, var(--yellow), var(--brown));\r\n}\r\n.main {\r\n    display:grid;\r\n    grid-template-rows: minmax(400px, 1fr) minmax(350px, 1fr);\r\n}\r\n.containerOne, .containerTwo {\r\n    color:var(--darkBrown);\r\n}\r\n.containerOne {\r\n    display:flex;\r\n}\r\n.imageOne, .imageTwo {\r\n    min-width:150px;\r\n    max-height:350px;\r\n    z-index:1;\r\n    position:relative;\r\n}\r\n.actualImageTwo, .actualImageOne {\r\n    position:relative;\r\n    height:100%;\r\n    width:100%;\r\n    margin-top:5%;\r\n}\r\n.decoOne, .decoTwo {\r\n    margin-top:5%;\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:-20%;\r\n    left:20%;\r\n    background:var(--transpdarkBrown);\r\n\r\n}\r\n\r\n.menuButton {\r\n    background: linear-gradient(to top, var(--yellow), var(--brown));\r\n    padding:1.4em;\r\n    border-radius:14px;\r\n    font-size:1.4rem;\r\n    border:none;\r\n    cursor:pointer;\r\n    margin-top:-5%;\r\n}\r\n.imageOne {\r\n    float:right;\r\n    margin-top:min(120px, 15%)\r\n}\r\n.message, .messageTwo {\r\n    margin-top:-20%;\r\n    font-size:max(1.5rem, 2vw);\r\n    text-align:center;\r\n    width:70%;\r\n    align-self:center;\r\n}\r\n.preMessage {\r\n    font-size:6rem;\r\n}\r\n.message {\r\n    margin-top:min(65px, -7%);\r\n}\r\n.footer {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:flex-start;\r\n    background: var(--brown);\r\n    position:relative;\r\n    z-index:1--;\r\n}\r\n.footerText {\r\n    font-size: 1.65rem;\r\n    position:absolute;\r\n    bottom:0;\r\n    text-decoration:none;\r\n    color:var(--darkBrown);\r\n}\r\n.containerTwo {\r\n    display:flex;\r\n    justify-content:space-between;\r\n}\r\n.buttonContainer {\r\n    width:100%;\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .page {\r\n        grid-template-rows:300px 3fr 100px;\r\n    }\r\n    .header {\r\n        justify-content:center;\r\n        grid-auto-flow:row;\r\n    }\r\n    .normalHeading {\r\n        border-right:none;\r\n    }\r\n    .imageOne {\r\n        float:left;\r\n        margin-top:0;\r\n    } \r\n    .message {\r\n        margin-top:-20%;\r\n    }\r\n    .contactContainer {\r\n        min-height:600px;\r\n        margin-top:5%;\r\n    }\r\n}\r\n.mainMenu {\r\n    display:flex;\r\n    justify-content:center;\r\n}\r\n\r\n.products, .contactContainer {\r\n    padding:1.5em;\r\n    background:var(--transpdarkBrown);\r\n    border-radius:20px;\r\n    display:grid;\r\n    align-items:baseline;\r\n    justify-items:center;\r\n    grid-template-columns:repeat(2, minmax(250px, 1fr));\r\n    width: max(350px, 70%);\r\n}\r\n.mainContact {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n}\r\n.contactContainer {\r\n    height:100%;\r\n}\r\n.productCont {\r\n   padding:0.5em;\r\n   margin:2em;\r\n   cursor:pointer;\r\n}\r\n.productCont:hover {\r\n    transform:scale(1.1);\r\n    box-shadow:5px 5px 5px var(--darkBrown);\r\n}\r\n.productCont:hover::after {\r\n    content:' ';\r\n}\r\n.product {\r\n    display:flex;\r\n   flex-direction:column;\r\n   align-items:center;\r\n}\r\n.productTitle, .productPrice {\r\n    text-align:center;\r\n    font-size:1.5rem;\r\n    color: var(--yellow);\r\n}\r\n.productImg {\r\n    max-height:250px;\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .containerOne, .containerTwo {\r\n        flex-direction:column;\r\n        height:100%;\r\n        justify-content:space-evenly;\r\n        align-items:center;\r\n    }\r\n    .messageTwo {\r\n        order:1;\r\n    }\r\n    .imageTwo {\r\n        order:2;\r\n    }\r\n    .imageOne, .imageTwo {\r\n        height:auto;\r\n        width:80%;\r\n    }\r\n}\r\n\r\n@media (min-width:500px) {\r\n    @media (max-width:750px) {\r\n        .imageOne, .imageTwo {\r\n            width:65%;\r\n        }\r\n        .menuButton {\r\n            margin-top: -9%;\r\n            font-size:1.2rem;\r\n        }\r\n    }\r\n}\r\n@media (max-width:900px) and (min-width:750px) {\r\n    .imageOne, .imageTwo {\r\n        max-width:270px;\r\n        margin-top:-2%;\r\n    }\r\n    .menuButton{\r\n        font-size:1.3rem;\r\n    }\r\n}\r\n.selectCont {\r\n    position:absolute;\r\n    width:20%;\r\n    left:0;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    height:fit-content;\r\n}\r\n\r\n.default_option {\r\n    background: var(--transpdarkBrown);\r\n    border-radius:5px;\r\n    position:relative;\r\n    cursor:pointer;\r\n    width: 80%;\r\n    max-width:250px;\r\n    height:fit-content;\r\n    padding: 10px 20px;\r\n    display:block;\r\n}\r\n.inactive {\r\n    display:none;\r\n}\r\n.active {\r\n    display:block;\r\n}\r\n\r\n.default_option:hover::after {\r\n    content:\"\\2304\";\r\n    position:absolute;\r\n    min-width:70px;\r\n    left:110%;\r\n    top:10%;\r\n    font-weight:bolder;\r\n    font-size:1.6rem;\r\n    color: var(--transpdarkBrown);\r\n}\r\nul {\r\n    list-style:none;\r\n}\r\n.select_ul {\r\n    position:relative;\r\n    width: 80%;\r\n    max-width:250px;\r\n    background: var(--transpdarkBrown);\r\n    border-radius: 5px;\r\n    margin-top:0.5%;\r\n}\r\n\r\n.select_ul li {\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.select_ul li:first-child:hover {\r\n    border-top-left-radius:5px;\r\n    border-top-right-radius:5px;\r\n}\r\n.select_ul li:last-child:hover {\r\n    border-bottom-left-radius:5px;\r\n    border-bottom-right-radius:5px;\r\n}\r\n.select_ul li:hover {\r\n    background:var(--darkBrown);\r\n}\r\n.option {\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:space-between;\r\n    color: var(--yellow);\r\n}\r\n.option .icon {\r\n    width:60px;\r\n    min-height:50px;\r\n    margin-right: 5px;\r\n}\r\n.Coffee > .icon {\r\n    background : url(\"Coffee.svg\") no-repeat 0 0;\r\n}\r\n\r\n.OtherBeverages > .icon {\r\n    background : url(\"beverage.svg\") no-repeat 0 0; \r\n}\r\n.Dessert > .icon {\r\n    background: url('dessert.svg') no-repeat 0 0;\r\n}\r\n.default_option::before {\r\n    top: 25px;\r\n    transform: rotate(-225deg);\r\n}\r\n.AddOns > .icon {\r\n    background: url('misc.svg') no-repeat 0 0;\r\n}\r\n@media (max-width:1300px) {\r\n    .products {\r\n        grid-template-columns:repeat(1, minmax(250px, 1fr));\r\n    }\r\n    .mainMenu {\r\n        display:flex;\r\n        justify-content:flex-start;\r\n        align-content:center;\r\n        flex-wrap:wrap;\r\n        align-items:center;\r\n        flex-direction:column;\r\n    }\r\n    .selectCont {\r\n        position:relative;\r\n        width:100%;\r\n    }\r\n    .default_option, .select_ul {\r\n        text-align:center;\r\n        width: 250px;\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n    }\r\n    .products {\r\n        margin-top: 25px;\r\n    }\r\n}\r\n.contactContainer {\r\n    display:grid;\r\n    place-content:center;\r\n    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));\r\n    font-size:1.3rem;\r\n    color:var(--yellow);\r\n    text-align:center;\r\n    gap:10%;\r\n}\r\n.contactContainer > div {\r\n    line-height:200%;\r\n}\r\n.heading {\r\n    font-size:2rem;\r\n}"],"sourceRoot":""}]);
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
    console.log(cover);


    header.append(title, home, menu, contact);

    return header;
}

function footer() {
    const footer = document.createElement('div');
    footer.classList = 'footer';
    const footerText = document.createElement('a');
    footerText.classList = 'footerText';
    footerText.textContent = '@deliasoare';
    footerText.href = 'https://github.com/deliasoare';

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

/***/ "./src/AlmondMilk.png":
/*!****************************!*\
  !*** ./src/AlmondMilk.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ef978f615cdcca4280.png";

/***/ }),

/***/ "./src/Cheesecake.png":
/*!****************************!*\
  !*** ./src/Cheesecake.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d2142683f6494f4ad65.png";

/***/ }),

/***/ "./src/CocoaPowder.png":
/*!*****************************!*\
  !*** ./src/CocoaPowder.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04e5953f1d62143b564e.png";

/***/ }),

/***/ "./src/Coffee.svg":
/*!************************!*\
  !*** ./src/Coffee.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47d8b3ed5216a6075caa.svg";

/***/ }),

/***/ "./src/CoffeeBeans.png":
/*!*****************************!*\
  !*** ./src/CoffeeBeans.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cb0abb0dba61506fbfc.png";

/***/ }),

/***/ "./src/Cupcake.png":
/*!*************************!*\
  !*** ./src/Cupcake.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "719c23e16ebb64a8f83b.png";

/***/ }),

/***/ "./src/Milk.png":
/*!**********************!*\
  !*** ./src/Milk.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c322923602c238d8738.png";

/***/ }),

/***/ "./src/Mojito.png":
/*!************************!*\
  !*** ./src/Mojito.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "858c4eb842847807e30f.png";

/***/ }),

/***/ "./src/PannaCotta.png":
/*!****************************!*\
  !*** ./src/PannaCotta.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d277f8d7af76b15b56d.png";

/***/ }),

/***/ "./src/PuddingCremeCaramel.png":
/*!*************************************!*\
  !*** ./src/PuddingCremeCaramel.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39590593a884a2857e02.png";

/***/ }),

/***/ "./src/RedVelvetCheesecake.png":
/*!*************************************!*\
  !*** ./src/RedVelvetCheesecake.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e20ba0b649c6c794e356.png";

/***/ }),

/***/ "./src/Slushie.png":
/*!*************************!*\
  !*** ./src/Slushie.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ce5980376c6d99f2699.png";

/***/ }),

/***/ "./src/Sugar.png":
/*!***********************!*\
  !*** ./src/Sugar.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e0be4519ec520b60e38.png";

/***/ }),

/***/ "./src/WhippedCream.png":
/*!******************************!*\
  !*** ./src/WhippedCream.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0a76142e67002723079.png";

/***/ }),

/***/ "./src/americano.png":
/*!***************************!*\
  !*** ./src/americano.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54b27f8680431ab71234.png";

/***/ }),

/***/ "./src/beverage.svg":
/*!**************************!*\
  !*** ./src/beverage.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e2acfff09cd13784dea.svg";

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

/***/ "./src/coke.png":
/*!**********************!*\
  !*** ./src/coke.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3042c4bfced750633cb1.png";

/***/ }),

/***/ "./src/dessert.svg":
/*!*************************!*\
  !*** ./src/dessert.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1fc0f15fabf737f08e3.svg";

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

/***/ }),

/***/ "./src/misc.svg":
/*!**********************!*\
  !*** ./src/misc.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f5741f647d09ed88d38.svg";

/***/ }),

/***/ "./src/pinaColada.png":
/*!****************************!*\
  !*** ./src/pinaColada.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e187ad02fe1d27b2b36c.png";

/***/ }),

/***/ "./src/strawberryMilkshake.png":
/*!*************************************!*\
  !*** ./src/strawberryMilkshake.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c2a3e6e4283c334cf10.png";

/***/ }),

/***/ "./src/water.png":
/*!***********************!*\
  !*** ./src/water.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56d0e196092600a0ebbf.png";

/***/ }),

/***/ "./src/watermelonLemonade.png":
/*!************************************!*\
  !*** ./src/watermelonLemonade.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fd08791c88fbbae276b.png";

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
/* harmony export */   "addOption": () => (/* binding */ addOption),
/* harmony export */   "default": () => (/* binding */ menuScreen),
/* harmony export */   "prod": () => (/* binding */ prod)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _espresso_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./espresso.png */ "./src/espresso.png");
/* harmony import */ var _cafeLatte_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cafeLatte.png */ "./src/cafeLatte.png");
/* harmony import */ var _capp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capp.png */ "./src/capp.png");
/* harmony import */ var _americano_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./americano.png */ "./src/americano.png");
/* harmony import */ var _caramelMacchiato_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caramelMacchiato.png */ "./src/caramelMacchiato.png");
/* harmony import */ var _irishCoffee_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./irishCoffee.png */ "./src/irishCoffee.png");
/* harmony import */ var _Mojito_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Mojito.png */ "./src/Mojito.png");
/* harmony import */ var _pinaColada_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pinaColada.png */ "./src/pinaColada.png");
/* harmony import */ var _Slushie_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Slushie.png */ "./src/Slushie.png");
/* harmony import */ var _strawberryMilkshake_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./strawberryMilkshake.png */ "./src/strawberryMilkshake.png");
/* harmony import */ var _water_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./water.png */ "./src/water.png");
/* harmony import */ var _watermelonLemonade_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./watermelonLemonade.png */ "./src/watermelonLemonade.png");
/* harmony import */ var _coke_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coke.png */ "./src/coke.png");
/* harmony import */ var _Cheesecake_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Cheesecake.png */ "./src/Cheesecake.png");
/* harmony import */ var _PannaCotta_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PannaCotta.png */ "./src/PannaCotta.png");
/* harmony import */ var _Cupcake_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Cupcake.png */ "./src/Cupcake.png");
/* harmony import */ var _PuddingCremeCaramel_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PuddingCremeCaramel.png */ "./src/PuddingCremeCaramel.png");
/* harmony import */ var _RedVelvetCheesecake_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RedVelvetCheesecake.png */ "./src/RedVelvetCheesecake.png");
/* harmony import */ var _Milk_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Milk.png */ "./src/Milk.png");
/* harmony import */ var _Sugar_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Sugar.png */ "./src/Sugar.png");
/* harmony import */ var _WhippedCream_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./WhippedCream.png */ "./src/WhippedCream.png");
/* harmony import */ var _CoffeeBeans_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./CoffeeBeans.png */ "./src/CoffeeBeans.png");
/* harmony import */ var _CocoaPowder_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./CocoaPowder.png */ "./src/CocoaPowder.png");
/* harmony import */ var _AlmondMilk_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./AlmondMilk.png */ "./src/AlmondMilk.png");



























const prod = {
    Coffee: [
        addProduct(_espresso_png__WEBPACK_IMPORTED_MODULE_1__, 'Espresso', 5), 
        addProduct(_cafeLatte_png__WEBPACK_IMPORTED_MODULE_2__, 'Caffe Latte', 5),
        addProduct(_capp_png__WEBPACK_IMPORTED_MODULE_3__, 'Cappucino', 6),
        addProduct(_americano_png__WEBPACK_IMPORTED_MODULE_4__, 'Americano Coffee', 5),
        addProduct(_caramelMacchiato_png__WEBPACK_IMPORTED_MODULE_5__, 'Caramel Macchiato', 7),
        addProduct(_irishCoffee_png__WEBPACK_IMPORTED_MODULE_6__, 'Irish Coffee', 5) 
        ],
    "Other Beverages": [
        addProduct(_water_png__WEBPACK_IMPORTED_MODULE_11__, 'Water', 3),
        addProduct(_coke_png__WEBPACK_IMPORTED_MODULE_13__, 'Coke', 4),
        addProduct(_watermelonLemonade_png__WEBPACK_IMPORTED_MODULE_12__, "Watermelon Lemonade", 8),
        addProduct(_strawberryMilkshake_png__WEBPACK_IMPORTED_MODULE_10__, 'Strawberry Milkshake', 9),
        addProduct(_Slushie_png__WEBPACK_IMPORTED_MODULE_9__, 'Slushie', 7),
        addProduct(_Mojito_png__WEBPACK_IMPORTED_MODULE_7__, 'Mojito', 9),
        addProduct(_pinaColada_png__WEBPACK_IMPORTED_MODULE_8__, 'Pina Colada', 9)
    ],
    Dessert: [
        addProduct(_Cupcake_png__WEBPACK_IMPORTED_MODULE_16__, 'Cupcake', 6),
        addProduct(_PannaCotta_png__WEBPACK_IMPORTED_MODULE_15__, 'Panna Cotta', 8),
        addProduct(_Cheesecake_png__WEBPACK_IMPORTED_MODULE_14__, 'Cheesecake', 9),
        addProduct(_PuddingCremeCaramel_png__WEBPACK_IMPORTED_MODULE_17__, 'Pudding Creme Caramel', 9),
        addProduct(_RedVelvetCheesecake_png__WEBPACK_IMPORTED_MODULE_18__, 'Red Velvet Cheesecake', 10)
    ],
    "Add Ons": [
        addProduct(_Milk_png__WEBPACK_IMPORTED_MODULE_19__, 'Extra Milk', 2),
        addProduct(_AlmondMilk_png__WEBPACK_IMPORTED_MODULE_24__, 'Almond Milk', 4),
        addProduct(_Sugar_png__WEBPACK_IMPORTED_MODULE_20__, 'Extra sugar', 2),
        addProduct(_WhippedCream_png__WEBPACK_IMPORTED_MODULE_21__, 'Whipped Cream', 4),
        addProduct(_CoffeeBeans_png__WEBPACK_IMPORTED_MODULE_22__, 'Coffee Beans', 4),
        addProduct(_CocoaPowder_png__WEBPACK_IMPORTED_MODULE_23__, 'Cocoa Powder', 3)
    ]
}

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
    select.append(addOption('Coffee'), addOption('Other Beverages'),
    addOption('Dessert'), addOption('Add Ons'));
    selectContainer.append(def, select);

    const mainMenu = document.createElement('div');
    mainMenu.classList = 'mainMenu';


    const products = document.createElement('div');
    products.classList = 'products';  
    
    function changeMenuOption(options) {
        products.innerHTML = '';
        if (prod[options]) 
            prod[options].forEach(opt => {
                products.append(opt);
            })
    }
    
     changeMenuOption("Coffee");
     setTimeout(function() {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                changeMenuOption(option.textContent);
            })
        })
     }, 0);

     

    mainMenu.append(selectContainer, products);


    menu.append((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.header)('menu'), mainMenu, (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.footer)());

    return menu;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVks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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU0sb0JBQW9CLGlEQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZpcnN0U3BpbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiQ29mZmVlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImJldmVyYWdlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImRlc3NlcnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwibWlzYy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0teWVsbG93OiByZ2JhKDI1NSwyMTcsMTI3LDI1NSk7XFxyXFxuICAgIC0tYnJvd246IHJnYmEoMTkwLDE1OCwxMjcsMjU1KTtcXHJcXG4gICAgLS1kYXJrQnJvd246cmdiKDg5LCAyOCwgMik7XFxyXFxuICAgIC0tdHJhbnNwZGFya0Jyb3duOiByZ2JhKDg5LCAyOCwgMiwgMC41KTtcXHJcXG4gICAgLS1taWRkYXJrQnJvd246IHJnYmEoODksIDI4LCAyLCAwLjc1KTtcXHJcXG4gICAgLS1jb3ZlclllbGxvdzpyZ2IoMjI5LCAxNzMsIDExNik7XFxyXFxuICAgIC0tY292ZXJCcm93bjpyZ2IoMTEyLCA0MSwgMTUpO1xcclxcblxcclxcbn1cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS1icm93bik7XFxyXFxufVxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmhvbWVwYWdlLCAuY29udGFjdHBhZ2Uge1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxufVxcclxcbi5tZW51UGFnZSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuLm5vcm1hbEhlYWRpbmcge1xcclxcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBwYWRkaW5nOjAuNWVtO1xcclxcbiAgICB3aWR0aDoxNzVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMS44cmVtLCAxLjV2dyk7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG4ubm9ybWFsSGVhZGluZywgLnRpdGxlLCAuZm9vdGVyLCAgLm1lbnVCdXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFya0Jyb3duKTtcXHJcXG59XFxyXFxuLmNvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWNvdmVyWWVsbG93KSAzNSUsIHZhcigtLWNvdmVyQnJvd24pIDY1JSk7XFxyXFxufVxcclxcbi5jb3Zlcjo6YWZ0ZXIsIC5jb3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOjAuNzAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDotMTVweDtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICcgJztcXHJcXG4gICAgd2lkdGg6MTc1cHg7XFxyXFxuICAgIGhlaWdodDo4MHB4O1xcclxcbiAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCAqIHtcXHJcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xcclxcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xcclxcblxcclxcbn1cXHJcXG4ucGFnZSB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjE1MHB4IG1pbm1heCg3MDBweCwgNGZyKSAxMDBweDtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG4gICAgcGFkZGluZzouNzVlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICB3aWR0aDoxMDAlOyBcXHJcXG4gICAganVzdGlmeS1pdGVtczpzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OmNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuLnRpdGxlIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOmZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMi41cmVtLCAyLjV2dyk7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWFpbiwgLm1haW5NZW51LCAubWFpbkNvbnRhY3Qge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOjEuNWVtIG1pbigxMCUsIDlyZW0pO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS15ZWxsb3cpLCB2YXIoLS1icm93bikpO1xcclxcbn1cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNDAwcHgsIDFmcikgbWlubWF4KDM1MHB4LCAxZnIpO1xcclxcbn1cXHJcXG4uY29udGFpbmVyT25lLCAuY29udGFpbmVyVHdvIHtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGFya0Jyb3duKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lck9uZSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG59XFxyXFxuLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICBtaW4td2lkdGg6MTUwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6MzUwcHg7XFxyXFxuICAgIHotaW5kZXg6MTtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbi5hY3R1YWxJbWFnZVR3bywgLmFjdHVhbEltYWdlT25lIHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOjUlO1xcclxcbn1cXHJcXG4uZGVjb09uZSwgLmRlY29Ud28ge1xcclxcbiAgICBtYXJnaW4tdG9wOjUlO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIHRvcDotMjAlO1xcclxcbiAgICBsZWZ0OjIwJTtcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS10cmFuc3BkYXJrQnJvd24pO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWVudUJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLXllbGxvdyksIHZhcigtLWJyb3duKSk7XFxyXFxuICAgIHBhZGRpbmc6MS40ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MTRweDtcXHJcXG4gICAgZm9udC1zaXplOjEuNHJlbTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOi01JTtcXHJcXG59XFxyXFxuLmltYWdlT25lIHtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxuICAgIG1hcmdpbi10b3A6bWluKDEyMHB4LCAxNSUpXFxyXFxufVxcclxcbi5tZXNzYWdlLCAubWVzc2FnZVR3byB7XFxyXFxuICAgIG1hcmdpbi10b3A6LTIwJTtcXHJcXG4gICAgZm9udC1zaXplOm1heCgxLjVyZW0sIDJ2dyk7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICB3aWR0aDo3MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcclxcbn1cXHJcXG4ucHJlTWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTo2cmVtO1xcclxcbn1cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6bWluKDY1cHgsIC03JSk7XFxyXFxufVxcclxcbi5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJyb3duKTtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6MS0tO1xcclxcbn1cXHJcXG4uZm9vdGVyVGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTowO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGFya0Jyb3duKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lclR3byB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5idXR0b25Db250YWluZXIge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgLnBhZ2Uge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjMwMHB4IDNmciAxMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgICAgICBncmlkLWF1dG8tZmxvdzpyb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5vcm1hbEhlYWRpbmcge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0Om5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlT25lIHtcXHJcXG4gICAgICAgIGZsb2F0OmxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjA7XFxyXFxuICAgIH0gXFxyXFxuICAgIC5tZXNzYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6LTIwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdENvbnRhaW5lciB7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OjYwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDo1JTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubWFpbk1lbnUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cywgLmNvbnRhY3RDb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOjEuNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczpiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG4gICAgd2lkdGg6IG1heCgzNTBweCwgNzAlKTtcXHJcXG59XFxyXFxuLm1haW5Db250YWN0IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxufVxcclxcbi5jb250YWN0Q29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxufVxcclxcbi5wcm9kdWN0Q29udCB7XFxyXFxuICAgcGFkZGluZzowLjVlbTtcXHJcXG4gICBtYXJnaW46MmVtO1xcclxcbiAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvZHVjdENvbnQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcXHJcXG4gICAgYm94LXNoYWRvdzo1cHggNXB4IDVweCB2YXIoLS1kYXJrQnJvd24pO1xcclxcbn1cXHJcXG4ucHJvZHVjdENvbnQ6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDonICc7XFxyXFxufVxcclxcbi5wcm9kdWN0IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxufVxcclxcbi5wcm9kdWN0VGl0bGUsIC5wcm9kdWN0UHJpY2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxufVxcclxcbi5wcm9kdWN0SW1nIHtcXHJcXG4gICAgbWF4LWhlaWdodDoyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lck9uZSwgLmNvbnRhaW5lclR3byB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lc3NhZ2VUd28ge1xcclxcbiAgICAgICAgb3JkZXI6MTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgb3JkZXI6MjtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICBoZWlnaHQ6YXV0bztcXHJcXG4gICAgICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDo1MDBweCkge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo3NTBweCkge1xcclxcbiAgICAgICAgLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOjY1JTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5tZW51QnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOSU7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOjEuMnJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDo5MDBweCkgYW5kIChtaW4td2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOjI3MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDotMiU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVCdXR0b257XFxyXFxuICAgICAgICBmb250LXNpemU6MS4zcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zZWxlY3RDb250IHtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOjIwJTtcXHJcXG4gICAgbGVmdDowO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0X29wdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDoyNTBweDtcXHJcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxufVxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG59XFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0X29wdGlvbjpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OlxcXCJcXFxcMjMwNFxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBtaW4td2lkdGg6NzBweDtcXHJcXG4gICAgbGVmdDoxMTAlO1xcclxcbiAgICB0b3A6MTAlO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjZyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BkYXJrQnJvd24pO1xcclxcbn1cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcXHJcXG59XFxyXFxuLnNlbGVjdF91bCB7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6MjUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDowLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0X3VsIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RfdWwgbGk6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O1xcclxcbn1cXHJcXG4uc2VsZWN0X3VsIGxpOmxhc3QtY2hpbGQ6aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4O1xcclxcbn1cXHJcXG4uc2VsZWN0X3VsIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1kYXJrQnJvd24pO1xcclxcbn1cXHJcXG4ub3B0aW9uIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG59XFxyXFxuLm9wdGlvbiAuaWNvbiB7XFxyXFxuICAgIHdpZHRoOjYwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6NTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5Db2ZmZWUgPiAuaWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQgOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5PdGhlckJldmVyYWdlcyA+IC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IDAgMDsgXFxyXFxufVxcclxcbi5EZXNzZXJ0ID4gLmljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIG5vLXJlcGVhdCAwIDA7XFxyXFxufVxcclxcbi5kZWZhdWx0X29wdGlvbjo6YmVmb3JlIHtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcXHJcXG59XFxyXFxuLkFkZE9ucyA+IC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBuby1yZXBlYXQgMCAwO1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDoxMzAwcHgpIHtcXHJcXG4gICAgLnByb2R1Y3RzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMSwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG4gICAgfVxcclxcbiAgICAubWFpbk1lbnUge1xcclxcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWxlY3RDb250IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVmYXVsdF9vcHRpb24sIC5zZWxlY3RfdWwge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2R1Y3RzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmNvbnRhY3RDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICBmb250LXNpemU6MS4zcmVtO1xcclxcbiAgICBjb2xvcjp2YXIoLS15ZWxsb3cpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZ2FwOjEwJTtcXHJcXG59XFxyXFxuLmNvbnRhY3RDb250YWluZXIgPiBkaXYge1xcclxcbiAgICBsaW5lLWhlaWdodDoyMDAlO1xcclxcbn1cXHJcXG4uaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZToycmVtO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHVDQUF1QztJQUN2QyxxQ0FBcUM7SUFDckMsZ0NBQWdDO0lBQ2hDLDZCQUE2Qjs7QUFFakM7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7RUFDZjtBQUNGO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwwRUFBMEU7QUFDOUU7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbURBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxVQUFV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Q0o7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsMERBQTBEO0lBQzFELGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLE9BQU87QUFDWDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS15ZWxsb3c6IHJnYmEoMjU1LDIxNywxMjcsMjU1KTtcXHJcXG4gICAgLS1icm93bjogcmdiYSgxOTAsMTU4LDEyNywyNTUpO1xcclxcbiAgICAtLWRhcmtCcm93bjpyZ2IoODksIDI4LCAyKTtcXHJcXG4gICAgLS10cmFuc3BkYXJrQnJvd246IHJnYmEoODksIDI4LCAyLCAwLjUpO1xcclxcbiAgICAtLW1pZGRhcmtCcm93bjogcmdiYSg4OSwgMjgsIDIsIDAuNzUpO1xcclxcbiAgICAtLWNvdmVyWWVsbG93OnJnYigyMjksIDE3MywgMTE2KTtcXHJcXG4gICAgLS1jb3ZlckJyb3duOnJnYigxMTIsIDQxLCAxNSk7XFxyXFxuXFxyXFxufVxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0tYnJvd24pO1xcclxcbn1cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5ob21lcGFnZSwgLmNvbnRhY3RwYWdlIHtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbn1cXHJcXG4ubWVudVBhZ2Uge1xcclxcbiAgICBtaW4taGVpZ2h0OjEwMCU7XFxyXFxufVxcclxcbi5ub3JtYWxIZWFkaW5nIHtcXHJcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDpmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXHJcXG4gICAgcGFkZGluZzowLjVlbTtcXHJcXG4gICAgd2lkdGg6MTc1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBmb250LXNpemU6bWF4KDEuOHJlbSwgMS41dncpO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuLm5vcm1hbEhlYWRpbmcsIC50aXRsZSwgLmZvb3RlciwgIC5tZW51QnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmtCcm93bik7XFxyXFxufVxcclxcbi5jb3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jb3ZlclllbGxvdykgMzUlLCB2YXIoLS1jb3ZlckJyb3duKSA2NSUpO1xcclxcbn1cXHJcXG4uY292ZXI6OmFmdGVyLCAuY292ZXI6OmFmdGVyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDowLjcwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6LTE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnICc7XFxyXFxuICAgIHdpZHRoOjE3NXB4O1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ZpcnN0U3BpbGwuc3ZnJyk7XFxyXFxufVxcclxcblxcclxcbmJvZHksICoge1xcclxcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxuXFxyXFxufVxcclxcbi5wYWdlIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MTUwcHggbWlubWF4KDcwMHB4LCA0ZnIpIDEwMHB4O1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcclxcbiAgICBwYWRkaW5nOi43NWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIHdpZHRoOjEwMCU7IFxcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOnNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6Y29sdW1uO1xcclxcblxcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydDtcXHJcXG4gICAgZm9udC1zaXplOm1heCgyLjVyZW0sIDIuNXZ3KTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tYWluLCAubWFpbk1lbnUsIC5tYWluQ29udGFjdCB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIHBhZGRpbmc6MS41ZW0gbWluKDEwJSwgOXJlbSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXllbGxvdyksIHZhcigtLWJyb3duKSk7XFxyXFxufVxcclxcbi5tYWluIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg0MDBweCwgMWZyKSBtaW5tYXgoMzUwcHgsIDFmcik7XFxyXFxufVxcclxcbi5jb250YWluZXJPbmUsIC5jb250YWluZXJUd28ge1xcclxcbiAgICBjb2xvcjp2YXIoLS1kYXJrQnJvd24pO1xcclxcbn1cXHJcXG4uY29udGFpbmVyT25lIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbn1cXHJcXG4uaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgIG1pbi13aWR0aDoxNTBweDtcXHJcXG4gICAgbWF4LWhlaWdodDozNTBweDtcXHJcXG4gICAgei1pbmRleDoxO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmFjdHVhbEltYWdlVHdvLCAuYWN0dWFsSW1hZ2VPbmUge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6NSU7XFxyXFxufVxcclxcbi5kZWNvT25lLCAuZGVjb1R3byB7XFxyXFxuICAgIG1hcmdpbi10b3A6NSU7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgdG9wOi0yMCU7XFxyXFxuICAgIGxlZnQ6MjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tZW51QnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdmFyKC0teWVsbG93KSwgdmFyKC0tYnJvd24pKTtcXHJcXG4gICAgcGFkZGluZzoxLjRlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoxNHB4O1xcclxcbiAgICBmb250LXNpemU6MS40cmVtO1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6LTUlO1xcclxcbn1cXHJcXG4uaW1hZ2VPbmUge1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG4gICAgbWFyZ2luLXRvcDptaW4oMTIwcHgsIDE1JSlcXHJcXG59XFxyXFxuLm1lc3NhZ2UsIC5tZXNzYWdlVHdvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDotMjAlO1xcclxcbiAgICBmb250LXNpemU6bWF4KDEuNXJlbSwgMnZ3KTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIHdpZHRoOjcwJTtcXHJcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxyXFxufVxcclxcbi5wcmVNZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOjZyZW07XFxyXFxufVxcclxcbi5tZXNzYWdlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDptaW4oNjVweCwgLTclKTtcXHJcXG59XFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnJvd24pO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDoxLS07XFxyXFxufVxcclxcbi5mb290ZXJUZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOjA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcclxcbiAgICBjb2xvcjp2YXIoLS1kYXJrQnJvd24pO1xcclxcbn1cXHJcXG4uY29udGFpbmVyVHdvIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDo3NTBweCkge1xcclxcbiAgICAucGFnZSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MzAwcHggM2ZyIDEwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OnJvdztcXHJcXG4gICAgfVxcclxcbiAgICAubm9ybWFsSGVhZGluZyB7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6bm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VPbmUge1xcclxcbiAgICAgICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MDtcXHJcXG4gICAgfSBcXHJcXG4gICAgLm1lc3NhZ2Uge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDotMjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6NjAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tYWluTWVudSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RzLCAuY29udGFjdENvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6MS41ZW07XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICB3aWR0aDogbWF4KDM1MHB4LCA3MCUpO1xcclxcbn1cXHJcXG4ubWFpbkNvbnRhY3Qge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRhY3RDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuLnByb2R1Y3RDb250IHtcXHJcXG4gICBwYWRkaW5nOjAuNWVtO1xcclxcbiAgIG1hcmdpbjoyZW07XFxyXFxuICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9kdWN0Q29udDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xcclxcbiAgICBib3gtc2hhZG93OjVweCA1cHggNXB4IHZhcigtLWRhcmtCcm93bik7XFxyXFxufVxcclxcbi5wcm9kdWN0Q29udDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OicgJztcXHJcXG59XFxyXFxuLnByb2R1Y3Qge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RUaXRsZSwgLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG59XFxyXFxuLnByb2R1Y3RJbWcge1xcclxcbiAgICBtYXgtaGVpZ2h0OjI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDo3NTBweCkge1xcclxcbiAgICAuY29udGFpbmVyT25lLCAuY29udGFpbmVyVHdvIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubWVzc2FnZVR3byB7XFxyXFxuICAgICAgICBvcmRlcjoxO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICBvcmRlcjoyO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgIGhlaWdodDphdXRvO1xcclxcbiAgICAgICAgd2lkdGg6ODAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOjUwMHB4KSB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjc1MHB4KSB7XFxyXFxuICAgICAgICAuaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6NjUlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLm1lbnVCdXR0b24ge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC05JTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6MS4ycmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDo3NTBweCkge1xcclxcbiAgICAuaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6MjcwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOi0yJTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudUJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxLjNyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnNlbGVjdENvbnQge1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6MjAlO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGhlaWdodDpmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmF1bHRfb3B0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWF4LXdpZHRoOjI1MHB4O1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmF1bHRfb3B0aW9uOmhvdmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6XFxcIlxcXFwyMzA0XFxcIjtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIG1pbi13aWR0aDo3MHB4O1xcclxcbiAgICBsZWZ0OjExMCU7XFxyXFxuICAgIHRvcDoxMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG4gICAgZm9udC1zaXplOjEuNnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxufVxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTpub25lO1xcclxcbn1cXHJcXG4uc2VsZWN0X3VsIHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDoyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjAuNSU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RfdWwgbGkge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdF91bCBsaTpmaXJzdC1jaGlsZDpob3ZlciB7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7XFxyXFxufVxcclxcbi5zZWxlY3RfdWwgbGk6bGFzdC1jaGlsZDpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7XFxyXFxufVxcclxcbi5zZWxlY3RfdWwgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWRhcmtCcm93bik7XFxyXFxufVxcclxcbi5vcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbn1cXHJcXG4ub3B0aW9uIC5pY29uIHtcXHJcXG4gICAgd2lkdGg6NjBweDtcXHJcXG4gICAgbWluLWhlaWdodDo1MHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLkNvZmZlZSA+IC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHVybChcXFwiQ29mZmVlLnN2Z1xcXCIpIG5vLXJlcGVhdCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5PdGhlckJldmVyYWdlcyA+IC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHVybChcXFwiYmV2ZXJhZ2Uuc3ZnXFxcIikgbm8tcmVwZWF0IDAgMDsgXFxyXFxufVxcclxcbi5EZXNzZXJ0ID4gLmljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Rlc3NlcnQuc3ZnJykgbm8tcmVwZWF0IDAgMDtcXHJcXG59XFxyXFxuLmRlZmF1bHRfb3B0aW9uOjpiZWZvcmUge1xcclxcbiAgICB0b3A6IDI1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xcclxcbn1cXHJcXG4uQWRkT25zID4gLmljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ21pc2Muc3ZnJykgbm8tcmVwZWF0IDAgMDtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6MTMwMHB4KSB7XFxyXFxuICAgIC5wcm9kdWN0cyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDEsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1haW5NZW51IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6d3JhcDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAuc2VsZWN0Q29udCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlZmF1bHRfb3B0aW9uLCAuc2VsZWN0X3VsIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5wcm9kdWN0cyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jb250YWN0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwbGFjZS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG4gICAgZm9udC1zaXplOjEuM3JlbTtcXHJcXG4gICAgY29sb3I6dmFyKC0teWVsbG93KTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGdhcDoxMCU7XFxyXFxufVxcclxcbi5jb250YWN0Q29udGFpbmVyID4gZGl2IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6MjAwJTtcXHJcXG59XFxyXFxuLmhlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6MnJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpbWFnZU9uZSBmcm9tICcuL2NvZmZlZS5qcGcnO1xyXG5pbXBvcnQgaW1hZ2VUd28gZnJvbSAnLi9jYWZlLmpwZyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbmNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vcm1hbEhlYWRpbmcnKTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbENvdmVycygpIHtcclxuICAgIGhlYWRpbmdzLmZvckVhY2goaGVhZGluZyA9PiB7XHJcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdjb3ZlcicpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcihjb3Zlcikge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0ID0gJ2hlYWRlcic7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1NVTkNBRkUnO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0ID0gJ3RpdGxlJztcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hPTUUnO1xyXG4gICAgaG9tZS5jbGFzc0xpc3QgPSAnaG9tZSBub3JtYWxIZWFkaW5nJztcclxuICAgIHJlbW92ZUFsbENvdmVycygpO1xyXG4gICAgaWYgKGNvdmVyID09PSBcImhvbWVcIilcclxuICAgICAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2NvdmVyJyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNRU5VJztcclxuICAgIG1lbnUuY2xhc3NMaXN0ID0gJ21lbnUgbm9ybWFsSGVhZGluZyc7XHJcbiAgICBpZiAoY292ZXIgPT09ICdtZW51JylcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2NvdmVyJyk7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0ID0gJ2NvbnRhY3Qgbm9ybWFsSGVhZGluZyc7XHJcbiAgICBpZiAoY292ZXIgPT09IFwiY29udGFjdFwiKVxyXG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY292ZXInKTtcclxuICAgIGNvbnNvbGUubG9nKGNvdmVyKTtcclxuXHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgaG9tZSwgbWVudSwgY29udGFjdCk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdCA9ICdmb290ZXInO1xyXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGZvb3RlclRleHQuY2xhc3NMaXN0ID0gJ2Zvb3RlclRleHQnO1xyXG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICdAZGVsaWFzb2FyZSc7XHJcbiAgICBmb290ZXJUZXh0LmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2RlbGlhc29hcmUnO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcclxuICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lUGFnZS5jbGFzc0xpc3QgPSAnaG9tZXBhZ2UgcGFnZSc7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QgPSAnbWFpbic7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgcHJlTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHByZU1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQSc7XHJcbiAgICBwcmVNZXNzYWdlLmNsYXNzTGlzdCA9ICdwcmVNZXNzYWdlJztcclxuICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJyZSB5b3UgcmVhZHkgdG8gdGFzdGUgVEhFIGJlc3QgY29mZmVlP1wiXHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdCA9ICdtZXNzYWdlJztcclxuICAgIG1lc3NhZ2UucHJlcGVuZChwcmVNZXNzYWdlKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lc3NhZ2UyLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIG1lc3NhZ2UyLmNsYXNzTGlzdCA9ICdtZXNzYWdlVHdvJztcclxuXHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXJPbmUuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lck9uZSc7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGltYWdlQ29udGFpbmVyT25lLmNsYXNzTGlzdCA9ICdpbWFnZU9uZSc7XHJcbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlMS5zcmMgPSBpbWFnZU9uZTtcclxuICAgIGltYWdlMS5jbGFzc0xpc3QgPSAnYWN0dWFsSW1hZ2VPbmUnO1xyXG4gICAgY29uc3QgZGVjb0ltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlY29JbWcxLmNsYXNzTGlzdCA9ICdkZWNvT25lJztcclxuXHJcbiAgICBpbWFnZUNvbnRhaW5lck9uZS5hcHBlbmQoZGVjb0ltZzEsIGltYWdlMSk7XHJcbiAgICBjb250YWluZXJPbmUuYXBwZW5kKG1lc3NhZ2UsIGltYWdlQ29udGFpbmVyT25lKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lclR3by5jbGFzc0xpc3QgPSAnY29udGFpbmVyVHdvJztcclxuICAgIFxyXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGltYWdlMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UyLnNyYyA9IGltYWdlVHdvO1xyXG4gICAgaW1hZ2UyLmNsYXNzTGlzdCA9J2FjdHVhbEltYWdlVHdvJztcclxuICAgIGltYWdlQ29udGFpbmVyVHdvLmNsYXNzTGlzdCA9ICdpbWFnZVR3byc7XHJcbiAgICBjb25zdCBkZWNvSW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVjb0ltZzIuY2xhc3NMaXN0ID0gJ2RlY29Ud28nO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0ID0gJ21lbnVCdXR0b24nO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NIRUNLIElUIE9VVCc7XHJcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0ID0gJ2J1dHRvbkNvbnRhaW5lcic7XHJcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgaW1hZ2VDb250YWluZXJUd28uYXBwZW5kKGRlY29JbWcyLCBpbWFnZTIpO1xyXG4gICAgY29udGFpbmVyVHdvLmFwcGVuZChpbWFnZUNvbnRhaW5lclR3bywgYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZChjb250YWluZXJPbmUsIGNvbnRhaW5lclR3byk7XHJcblxyXG5cclxuICAgIGhvbWVQYWdlLmFwcGVuZChoZWFkZXIoJ2hvbWUnKSwgbWFpbiwgZm9vdGVyKCkpO1xyXG4gICAgcmV0dXJuIGhvbWVQYWdlO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWVudVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcclxuaW1wb3J0IHtoZWFkZXIsIGZvb3Rlcn0gZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCBFc3ByZXNzb0ltZyBmcm9tICcuL2VzcHJlc3NvLnBuZyc7XHJcbmltcG9ydCBDYWZmZUxhdHRlSW1nIGZyb20gJy4vY2FmZUxhdHRlLnBuZyc7XHJcbmltcG9ydCBDYXBwdWNpbm9JbWcgZnJvbSAnLi9jYXBwLnBuZyc7XHJcbmltcG9ydCBBbWVyaWNhbm9JbWcgZnJvbSAnLi9hbWVyaWNhbm8ucG5nJztcclxuaW1wb3J0IGNhcmFtZWxNYWNjaEltZyBmcm9tICcuL2NhcmFtZWxNYWNjaGlhdG8ucG5nJztcclxuaW1wb3J0IGlyaXNoSW1nIGZyb20gJy4vaXJpc2hDb2ZmZWUucG5nJztcclxuaW1wb3J0IE1vaml0byBmcm9tICcuL01vaml0by5wbmcnO1xyXG5pbXBvcnQgUGluYUNvbGFkYSBmcm9tICcuL3BpbmFDb2xhZGEucG5nJztcclxuaW1wb3J0IFNsdXNoaWUgZnJvbSAnLi9TbHVzaGllLnBuZyc7XHJcbmltcG9ydCBTdHJhd2JlcnJ5TWlsa3NoYWtlIGZyb20gJy4vc3RyYXdiZXJyeU1pbGtzaGFrZS5wbmcnO1xyXG5pbXBvcnQgV2F0ZXIgZnJvbSAnLi93YXRlci5wbmcnO1xyXG5pbXBvcnQgV2F0ZXJtZWxvbkxlbW9uYWRlIGZyb20gJy4vd2F0ZXJtZWxvbkxlbW9uYWRlLnBuZyc7XHJcbmltcG9ydCBDb2tlIGZyb20gJy4vY29rZS5wbmcnO1xyXG5pbXBvcnQgQ2hlZXNlY2FrZSBmcm9tICcuL0NoZWVzZWNha2UucG5nJztcclxuaW1wb3J0IFBhbm5hQ290dGEgZnJvbSAnLi9QYW5uYUNvdHRhLnBuZyc7XHJcbmltcG9ydCBDdXBjYWtlIGZyb20gJy4vQ3VwY2FrZS5wbmcnO1xyXG5pbXBvcnQgUHVkZGluZ0NyZW1lQ2FyYW1lbCBmcm9tICcuL1B1ZGRpbmdDcmVtZUNhcmFtZWwucG5nJztcclxuaW1wb3J0IFJlZFZlbHZldENoZWVzZWNha2UgZnJvbSAnLi9SZWRWZWx2ZXRDaGVlc2VjYWtlLnBuZyc7XHJcbmltcG9ydCBNaWxrIGZyb20gJy4vTWlsay5wbmcnO1xyXG5pbXBvcnQgU3VnYXIgZnJvbSAnLi9TdWdhci5wbmcnO1xyXG5pbXBvcnQgV2hpcHBlZENyZWFtIGZyb20gJy4vV2hpcHBlZENyZWFtLnBuZyc7XHJcbmltcG9ydCBDb2ZmZWVCZWFucyBmcm9tICcuL0NvZmZlZUJlYW5zLnBuZyc7XHJcbmltcG9ydCBDb2NvYVBvd2RlciBmcm9tICcuL0NvY29hUG93ZGVyLnBuZyc7XHJcbmltcG9ydCBBbG1vbmRNaWxrIGZyb20gJy4vQWxtb25kTWlsay5wbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2QgPSB7XHJcbiAgICBDb2ZmZWU6IFtcclxuICAgICAgICBhZGRQcm9kdWN0KEVzcHJlc3NvSW1nLCAnRXNwcmVzc28nLCA1KSwgXHJcbiAgICAgICAgYWRkUHJvZHVjdChDYWZmZUxhdHRlSW1nLCAnQ2FmZmUgTGF0dGUnLCA1KSxcclxuICAgICAgICBhZGRQcm9kdWN0KENhcHB1Y2lub0ltZywgJ0NhcHB1Y2lubycsIDYpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoQW1lcmljYW5vSW1nLCAnQW1lcmljYW5vIENvZmZlZScsIDUpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoY2FyYW1lbE1hY2NoSW1nLCAnQ2FyYW1lbCBNYWNjaGlhdG8nLCA3KSxcclxuICAgICAgICBhZGRQcm9kdWN0KGlyaXNoSW1nLCAnSXJpc2ggQ29mZmVlJywgNSkgXHJcbiAgICAgICAgXSxcclxuICAgIFwiT3RoZXIgQmV2ZXJhZ2VzXCI6IFtcclxuICAgICAgICBhZGRQcm9kdWN0KFdhdGVyLCAnV2F0ZXInLCAzKSxcclxuICAgICAgICBhZGRQcm9kdWN0KENva2UsICdDb2tlJywgNCksXHJcbiAgICAgICAgYWRkUHJvZHVjdChXYXRlcm1lbG9uTGVtb25hZGUsIFwiV2F0ZXJtZWxvbiBMZW1vbmFkZVwiLCA4KSxcclxuICAgICAgICBhZGRQcm9kdWN0KFN0cmF3YmVycnlNaWxrc2hha2UsICdTdHJhd2JlcnJ5IE1pbGtzaGFrZScsIDkpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoU2x1c2hpZSwgJ1NsdXNoaWUnLCA3KSxcclxuICAgICAgICBhZGRQcm9kdWN0KE1vaml0bywgJ01vaml0bycsIDkpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoUGluYUNvbGFkYSwgJ1BpbmEgQ29sYWRhJywgOSlcclxuICAgIF0sXHJcbiAgICBEZXNzZXJ0OiBbXHJcbiAgICAgICAgYWRkUHJvZHVjdChDdXBjYWtlLCAnQ3VwY2FrZScsIDYpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoUGFubmFDb3R0YSwgJ1Bhbm5hIENvdHRhJywgOCksXHJcbiAgICAgICAgYWRkUHJvZHVjdChDaGVlc2VjYWtlLCAnQ2hlZXNlY2FrZScsIDkpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoUHVkZGluZ0NyZW1lQ2FyYW1lbCwgJ1B1ZGRpbmcgQ3JlbWUgQ2FyYW1lbCcsIDkpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoUmVkVmVsdmV0Q2hlZXNlY2FrZSwgJ1JlZCBWZWx2ZXQgQ2hlZXNlY2FrZScsIDEwKVxyXG4gICAgXSxcclxuICAgIFwiQWRkIE9uc1wiOiBbXHJcbiAgICAgICAgYWRkUHJvZHVjdChNaWxrLCAnRXh0cmEgTWlsaycsIDIpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoQWxtb25kTWlsaywgJ0FsbW9uZCBNaWxrJywgNCksXHJcbiAgICAgICAgYWRkUHJvZHVjdChTdWdhciwgJ0V4dHJhIHN1Z2FyJywgMiksXHJcbiAgICAgICAgYWRkUHJvZHVjdChXaGlwcGVkQ3JlYW0sICdXaGlwcGVkIENyZWFtJywgNCksXHJcbiAgICAgICAgYWRkUHJvZHVjdChDb2ZmZWVCZWFucywgJ0NvZmZlZSBCZWFucycsIDQpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoQ29jb2FQb3dkZXIsICdDb2NvYSBQb3dkZXInLCAzKVxyXG4gICAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9kdWN0KGltYWdlLCB0aXRsZSwgcHJpY2UpIHtcclxuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb2R1Y3RDb250J1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3QuY2xhc3NOYW1lID0gJ3Byb2R1Y3QnO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RJbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgcHJvZHVjdEltZy5zcmMgPSBpbWFnZTtcclxuICAgIHByb2R1Y3RJbWcuY2xhc3NMaXN0ID0gJ3Byb2R1Y3RJbWcnO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRpdGxlUHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0aXRsZVByLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB0aXRsZVByLmNsYXNzTGlzdCA9ICdwcm9kdWN0VGl0bGUnO1xyXG5cclxuICAgIGNvbnN0IHByaWNlUHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcmljZVByLnRleHRDb250ZW50ID0gYCR7cHJpY2V9JGA7XHJcbiAgICBwcmljZVByLmNsYXNzTGlzdCA9ICdwcm9kdWN0UHJpY2UnO1xyXG5cclxuICAgIG1lc3NhZ2UuYXBwZW5kKHRpdGxlUHIsIHByaWNlUHIpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQocHJvZHVjdEltZywgbWVzc2FnZSk7XHJcbiAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZChwcm9kdWN0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHByb2R1Y3RDb250YWluZXI7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE9wdGlvbih0aXRsZSkge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpY29uLmNsYXNzTGlzdCA9ICdpY29uJztcclxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBpZiAodGl0bGUuaW5jbHVkZXMoJyAnKSkge1xyXG4gICAgICAgIGxldCBzID0gdGl0bGUuc3BsaXQoJyAnKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0ID0gYG9wdGlvbiAke3NbMF0gKyBzWzFdfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdCA9IGBvcHRpb24gJHt0aXRsZX1gO1xyXG4gICAgb3B0aW9uLmFwcGVuZChpY29uLCBwYXJhKTtcclxuICAgIGxpLmFwcGVuZChvcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBsaTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51U2NyZWVuKCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QgPSAnbWVudVBhZ2UgcGFnZSc7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWxlY3RDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NlbGVjdENvbnQnO1xyXG5cclxuICAgIGNvbnN0IGRlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBkZWYuY2xhc3NMaXN0ID0gJ2RlZmF1bHRfb3B0aW9uJztcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBzZWxlY3QuY2xhc3NMaXN0ID0gJ3NlbGVjdF91bCBpbmFjdGl2ZSc7XHJcbiAgICBkZWYuYXBwZW5kKGFkZE9wdGlvbignQ29mZmVlJykpO1xyXG4gICAgc2VsZWN0LmFwcGVuZChhZGRPcHRpb24oJ0NvZmZlZScpLCBhZGRPcHRpb24oJ090aGVyIEJldmVyYWdlcycpLFxyXG4gICAgYWRkT3B0aW9uKCdEZXNzZXJ0JyksIGFkZE9wdGlvbignQWRkIE9ucycpKTtcclxuICAgIHNlbGVjdENvbnRhaW5lci5hcHBlbmQoZGVmLCBzZWxlY3QpO1xyXG5cclxuICAgIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluTWVudS5jbGFzc0xpc3QgPSAnbWFpbk1lbnUnO1xyXG5cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvZHVjdHMuY2xhc3NMaXN0ID0gJ3Byb2R1Y3RzJzsgIFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZW51T3B0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBwcm9kdWN0cy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZiAocHJvZFtvcHRpb25zXSkgXHJcbiAgICAgICAgICAgIHByb2Rbb3B0aW9uc10uZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMuYXBwZW5kKG9wdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgICBjaGFuZ2VNZW51T3B0aW9uKFwiQ29mZmVlXCIpO1xyXG4gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKTtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlTWVudU9wdGlvbihvcHRpb24udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgfSwgMCk7XHJcblxyXG4gICAgIFxyXG5cclxuICAgIG1haW5NZW51LmFwcGVuZChzZWxlY3RDb250YWluZXIsIHByb2R1Y3RzKTtcclxuXHJcblxyXG4gICAgbWVudS5hcHBlbmQoaGVhZGVyKCdtZW51JyksIG1haW5NZW51LCBmb290ZXIoKSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==