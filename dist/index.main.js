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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --yellow: rgba(255,217,127,255);\r\n    --brown: rgba(190,158,127,255);\r\n    --darkBrown: #591C02;\r\n    --transpdarkBrown: rgba(89, 28, 2, 0.5);\r\n    --middarkBrown: rgba(89, 28, 2, 0.75);\r\n}\r\nhtml, body {\r\n    height:100%;\r\n    background : var(--brown);\r\n}\r\nhtml::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n#content {\r\n    height: 100%;\r\n}\r\n.homepage, .contactpage {\r\n    height:100vh;\r\n}\r\n.menuPage {\r\n    min-height:100%;\r\n}\r\n.normalHeading {\r\n    width:fit-content;\r\n    height:fit-content;\r\n    border-top: 1px solid var(--brown);\r\n    border-left: 1px solid var(--brown);\r\n    border-right: 1px solid var(--brown);\r\n    padding:0.5em;\r\n    width:175px;\r\n    text-align:center;\r\n    font-size:max(1.8rem, 1.5vw);\r\n    cursor:pointer;\r\n}\r\n.normalHeading, .title, .footer,  .menuButton {\r\n    color: var(--darkBrown);\r\n}\r\n.cover {\r\n    background: linear-gradient(#e5ad74 35%, #6f280f 65%);\r\n}\r\n.cover::after, .cover::after {\r\n    pointer-events:none;\r\n    margin-top:0.70%;\r\n    margin-left:-15px;\r\n    position:absolute;\r\n    content: ' ';\r\n    width:175px;\r\n    height:80px;\r\n    display:block;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nbody, * {\r\n    box-sizing:border-box;\r\n    margin:0;\r\n    padding:0;\r\n    font-family: 'Lobster';\r\n    font-weight:lighter;\r\n\r\n}\r\n.page {\r\n    display:grid;\r\n    grid-template-rows:150px minmax(700px, 4fr) 100px;\r\n}\r\n.header {\r\n    font-weight:bolder;\r\n    padding:.75em;\r\n    background-color: var(--yellow);\r\n    display:grid;\r\n    width:100%; \r\n    justify-items:space-around;\r\n    grid-auto-flow:column;\r\n\r\n}\r\n.title {\r\n    justify-self:flex-start;\r\n    font-size:max(2.5rem, 2.5vw);\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.main, .mainMenu, .mainContact {\r\n    width:100%;\r\n    padding:1.5em min(10%, 9rem);\r\n    background: linear-gradient(to bottom, var(--yellow), var(--brown));\r\n}\r\n.main {\r\n    display:grid;\r\n    grid-template-rows: minmax(400px, 1fr) minmax(350px, 1fr);\r\n}\r\n.containerOne, .containerTwo {\r\n    color:var(--darkBrown);\r\n}\r\n.containerOne {\r\n    display:flex;\r\n}\r\n.imageOne, .imageTwo {\r\n    min-width:150px;\r\n    max-height:350px;\r\n    z-index:1;\r\n    position:relative;\r\n}\r\n.actualImageTwo, .actualImageOne {\r\n    position:relative;\r\n    height:100%;\r\n    width:100%;\r\n    margin-top:5%;\r\n}\r\n.decoOne, .decoTwo {\r\n    margin-top:5%;\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:-20%;\r\n    left:20%;\r\n    background:var(--transpdarkBrown);\r\n\r\n}\r\n\r\n.menuButton {\r\n    background: linear-gradient(to top, var(--yellow), var(--brown));\r\n    padding:1.4em;\r\n    border-radius:14px;\r\n    font-size:1.4rem;\r\n    border:none;\r\n    cursor:pointer;\r\n    margin-top:-5%;\r\n}\r\n.imageOne {\r\n    float:right;\r\n    margin-top:min(120px, 15%)\r\n}\r\n.message, .messageTwo {\r\n    margin-top:-20%;\r\n    font-size:max(1.5rem, 2vw);\r\n    text-align:center;\r\n    width:70%;\r\n    align-self:center;\r\n}\r\n.preMessage {\r\n    font-size:6rem;\r\n}\r\n.message {\r\n    margin-top:min(65px, -7%);\r\n}\r\n.footer {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:flex-start;\r\n    background: var(--brown);\r\n    position:relative;\r\n    z-index:1--;\r\n}\r\n.footerText {\r\n    font-size: 1.65rem;\r\n    position:absolute;\r\n    bottom:0;\r\n}\r\n.containerTwo {\r\n    display:flex;\r\n    justify-content:space-between;\r\n}\r\n.buttonContainer {\r\n    width:100%;\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .page {\r\n        grid-template-rows:300px 3fr 100px;\r\n    }\r\n    .header {\r\n        justify-content:center;\r\n        grid-auto-flow:row;\r\n    }\r\n    .normalHeading {\r\n        border-right:none;\r\n    }\r\n    .imageOne {\r\n        float:left;\r\n        margin-top:0;\r\n    } \r\n    .message {\r\n        margin-top:-20%;\r\n    }\r\n    .contactContainer {\r\n        min-height:600px;\r\n        margin-top:5%;\r\n    }\r\n}\r\n.mainMenu {\r\n    display:flex;\r\n    justify-content:center;\r\n}\r\n\r\n.products, .contactContainer {\r\n    padding:1.5em;\r\n    background:var(--transpdarkBrown);\r\n    border-radius:20px;\r\n    display:grid;\r\n    align-items:baseline;\r\n    justify-items:center;\r\n    grid-template-columns:repeat(2, minmax(250px, 1fr));\r\n    width: max(350px, 70%);\r\n}\r\n.mainContact {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n}\r\n.contactContainer {\r\n    height:100%;\r\n}\r\n.productCont {\r\n   padding:0.5em;\r\n   margin:2em;\r\n   cursor:pointer;\r\n}\r\n.productCont:hover {\r\n    transform:scale(1.1);\r\n    box-shadow:5px 5px 5px var(--darkBrown);\r\n}\r\n.productCont:hover::after {\r\n    content:' ';\r\n}\r\n.product {\r\n    display:flex;\r\n   flex-direction:column;\r\n   align-items:center;\r\n}\r\n.productTitle, .productPrice {\r\n    text-align:center;\r\n    font-size:1.5rem;\r\n    color: var(--yellow);\r\n}\r\n.productImg {\r\n    max-height:250px;\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .containerOne, .containerTwo {\r\n        flex-direction:column;\r\n        height:100%;\r\n        justify-content:space-evenly;\r\n        align-items:center;\r\n    }\r\n    .messageTwo {\r\n        order:1;\r\n    }\r\n    .imageTwo {\r\n        order:2;\r\n    }\r\n    .imageOne, .imageTwo {\r\n        height:auto;\r\n        width:80%;\r\n    }\r\n}\r\n\r\n@media (min-width:500px) {\r\n    @media (max-width:750px) {\r\n        .imageOne, .imageTwo {\r\n            width:65%;\r\n        }\r\n        .menuButton {\r\n            margin-top: -9%;\r\n            font-size:1.2rem;\r\n        }\r\n    }\r\n}\r\n@media (max-width:900px) and (min-width:750px) {\r\n    .imageOne, .imageTwo {\r\n        max-width:270px;\r\n        margin-top:-2%;\r\n    }\r\n    .menuButton{\r\n        font-size:1.3rem;\r\n    }\r\n}\r\n.selectCont {\r\n    position:absolute;\r\n    width:20%;\r\n    left:0;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    height:fit-content;\r\n}\r\n\r\n.default_option {\r\n    background: var(--transpdarkBrown);\r\n    border-radius:5px;\r\n    position:relative;\r\n    cursor:pointer;\r\n    width: 80%;\r\n    max-width:250px;\r\n    height:fit-content;\r\n    padding: 10px 20px;\r\n    display:block;\r\n}\r\n.inactive {\r\n    display:none;\r\n}\r\n.active {\r\n    display:block;\r\n}\r\n\r\n.default_option:hover::after {\r\n    content:\"\\2304\";\r\n    position:absolute;\r\n    min-width:70px;\r\n    left:110%;\r\n    top:10%;\r\n    font-weight:bolder;\r\n    font-size:1.6rem;\r\n    color: var(--transpdarkBrown);\r\n}\r\nul {\r\n    list-style:none;\r\n}\r\n.select_ul {\r\n    position:relative;\r\n    width: 80%;\r\n    max-width:250px;\r\n    background: var(--transpdarkBrown);\r\n    border-radius: 5px;\r\n    margin-top:0.5%;\r\n}\r\n\r\n.select_ul li {\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.select_ul li:first-child:hover {\r\n    border-top-left-radius:5px;\r\n    border-top-right-radius:5px;\r\n}\r\n.select_ul li:last-child:hover {\r\n    border-bottom-left-radius:5px;\r\n    border-bottom-right-radius:5px;\r\n}\r\n.select_ul li:hover {\r\n    background:var(--darkBrown);\r\n}\r\n.option {\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:space-between;\r\n    color: var(--yellow);\r\n}\r\n.option .icon {\r\n    width:60px;\r\n    min-height:50px;\r\n    margin-right: 5px;\r\n}\r\n.Coffee > .icon {\r\n    background : url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0;\r\n}\r\n\r\n.OtherBeverages > .icon {\r\n    background : url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 0 0; \r\n}\r\n.Dessert > .icon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat 0 0;\r\n}\r\n.default_option::before {\r\n    top: 25px;\r\n    transform: rotate(-225deg);\r\n}\r\n.AddOns > .icon {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat 0 0;\r\n}\r\n@media (max-width:1300px) {\r\n    .products {\r\n        grid-template-columns:repeat(1, minmax(250px, 1fr));\r\n    }\r\n    .mainMenu {\r\n        display:flex;\r\n        justify-content:flex-start;\r\n        align-content:center;\r\n        flex-wrap:wrap;\r\n        align-items:center;\r\n        flex-direction:column;\r\n    }\r\n    .selectCont {\r\n        position:relative;\r\n        width:100%;\r\n    }\r\n    .default_option, .select_ul {\r\n        text-align:center;\r\n        width: 250px;\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n    }\r\n    .products {\r\n        margin-top: 25px;\r\n    }\r\n}\r\n.contactContainer {\r\n    display:grid;\r\n    place-content:center;\r\n    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));\r\n    font-size:1.3rem;\r\n    color:var(--yellow);\r\n    text-align:center;\r\n    gap:10%;\r\n}\r\n.heading {\r\n    font-size:2rem;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,8BAA8B;IAC9B,oBAAoB;IACpB,uCAAuC;IACvC,qCAAqC;AACzC;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;AACA;IACI,aAAa;EACf;AACF;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kCAAkC;IAClC,mCAAmC;IACnC,oCAAoC;IACpC,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,4BAA4B;IAC5B,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qDAAqD;AACzD;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,aAAa;IACb,mDAAmC;AACvC;;AAEA;IACI,qBAAqB;IACrB,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,mBAAmB;;AAEvB;AACA;IACI,YAAY;IACZ,iDAAiD;AACrD;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,0BAA0B;IAC1B,qBAAqB;;AAEzB;AACA;IACI,uBAAuB;IACvB,4BAA4B;IAC5B,cAAc;AAClB;;;AAGA;IACI,UAAU;IACV,4BAA4B;IAC5B,mEAAmE;AACvE;AACA;IACI,YAAY;IACZ,yDAAyD;AAC7D;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,aAAa;AACjB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,QAAQ;IACR,QAAQ;IACR,iCAAiC;;AAErC;;AAEA;IACI,gEAAgE;IAChE,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,cAAc;AAClB;AACA;IACI,WAAW;IACX;AACJ;AACA;IACI,eAAe;IACf,0BAA0B;IAC1B,iBAAiB;IACjB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;IACxB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,6BAA6B;AACjC;AACA;IACI,UAAU;IACV,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;;AAEtB;;AAEA;IACI;QACI,kCAAkC;IACtC;IACA;QACI,sBAAsB;QACtB,kBAAkB;IACtB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;QACI,gBAAgB;QAChB,aAAa;IACjB;AACJ;AACA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,oBAAoB;IACpB,mDAAmD;IACnD,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;GACG,aAAa;GACb,UAAU;GACV,cAAc;AACjB;AACA;IACI,oBAAoB;IACpB,uCAAuC;AAC3C;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;GACb,qBAAqB;GACrB,kBAAkB;AACrB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,qBAAqB;QACrB,WAAW;QACX,4BAA4B;QAC5B,kBAAkB;IACtB;IACA;QACI,OAAO;IACX;IACA;QACI,OAAO;IACX;IACA;QACI,WAAW;QACX,SAAS;IACb;AACJ;;AAEA;IACI;QACI;YACI,SAAS;QACb;QACA;YACI,eAAe;YACf,gBAAgB;QACpB;IACJ;AACJ;AACA;IACI;QACI,eAAe;QACf,cAAc;IAClB;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI,iBAAiB;IACjB,SAAS;IACT,MAAM;IACN,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,SAAS;IACT,OAAO;IACP,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;AACjC;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,UAAU;IACV,eAAe;IACf,kCAAkC;IAClC,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;IAC7B,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kEAA4C;AAChD;;AAEA;IACI,kEAA8C;AAClD;AACA;IACI,iEAA4C;AAChD;AACA;IACI,SAAS;IACT,0BAA0B;AAC9B;AACA;IACI,iEAAyC;AAC7C;AACA;IACI;QACI,mDAAmD;IACvD;IACA;QACI,YAAY;QACZ,0BAA0B;QAC1B,oBAAoB;QACpB,cAAc;QACd,kBAAkB;QAClB,qBAAqB;IACzB;IACA;QACI,iBAAiB;QACjB,UAAU;IACd;IACA;QACI,iBAAiB;QACjB,YAAY;QACZ,gBAAgB;QAChB,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,0DAA0D;IAC1D,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,OAAO;AACX;AACA;IACI,cAAc;AAClB","sourcesContent":[":root {\r\n    --yellow: rgba(255,217,127,255);\r\n    --brown: rgba(190,158,127,255);\r\n    --darkBrown: #591C02;\r\n    --transpdarkBrown: rgba(89, 28, 2, 0.5);\r\n    --middarkBrown: rgba(89, 28, 2, 0.75);\r\n}\r\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\nhtml, body {\r\n    height:100%;\r\n    background : var(--brown);\r\n}\r\nhtml::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n#content {\r\n    height: 100%;\r\n}\r\n.homepage, .contactpage {\r\n    height:100vh;\r\n}\r\n.menuPage {\r\n    min-height:100%;\r\n}\r\n.normalHeading {\r\n    width:fit-content;\r\n    height:fit-content;\r\n    border-top: 1px solid var(--brown);\r\n    border-left: 1px solid var(--brown);\r\n    border-right: 1px solid var(--brown);\r\n    padding:0.5em;\r\n    width:175px;\r\n    text-align:center;\r\n    font-size:max(1.8rem, 1.5vw);\r\n    cursor:pointer;\r\n}\r\n.normalHeading, .title, .footer,  .menuButton {\r\n    color: var(--darkBrown);\r\n}\r\n.cover {\r\n    background: linear-gradient(#e5ad74 35%, #6f280f 65%);\r\n}\r\n.cover::after, .cover::after {\r\n    pointer-events:none;\r\n    margin-top:0.70%;\r\n    margin-left:-15px;\r\n    position:absolute;\r\n    content: ' ';\r\n    width:175px;\r\n    height:80px;\r\n    display:block;\r\n    background: url('./firstSpill.svg');\r\n}\r\n\r\nbody, * {\r\n    box-sizing:border-box;\r\n    margin:0;\r\n    padding:0;\r\n    font-family: 'Lobster';\r\n    font-weight:lighter;\r\n\r\n}\r\n.page {\r\n    display:grid;\r\n    grid-template-rows:150px minmax(700px, 4fr) 100px;\r\n}\r\n.header {\r\n    font-weight:bolder;\r\n    padding:.75em;\r\n    background-color: var(--yellow);\r\n    display:grid;\r\n    width:100%; \r\n    justify-items:space-around;\r\n    grid-auto-flow:column;\r\n\r\n}\r\n.title {\r\n    justify-self:flex-start;\r\n    font-size:max(2.5rem, 2.5vw);\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.main, .mainMenu, .mainContact {\r\n    width:100%;\r\n    padding:1.5em min(10%, 9rem);\r\n    background: linear-gradient(to bottom, var(--yellow), var(--brown));\r\n}\r\n.main {\r\n    display:grid;\r\n    grid-template-rows: minmax(400px, 1fr) minmax(350px, 1fr);\r\n}\r\n.containerOne, .containerTwo {\r\n    color:var(--darkBrown);\r\n}\r\n.containerOne {\r\n    display:flex;\r\n}\r\n.imageOne, .imageTwo {\r\n    min-width:150px;\r\n    max-height:350px;\r\n    z-index:1;\r\n    position:relative;\r\n}\r\n.actualImageTwo, .actualImageOne {\r\n    position:relative;\r\n    height:100%;\r\n    width:100%;\r\n    margin-top:5%;\r\n}\r\n.decoOne, .decoTwo {\r\n    margin-top:5%;\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:-20%;\r\n    left:20%;\r\n    background:var(--transpdarkBrown);\r\n\r\n}\r\n\r\n.menuButton {\r\n    background: linear-gradient(to top, var(--yellow), var(--brown));\r\n    padding:1.4em;\r\n    border-radius:14px;\r\n    font-size:1.4rem;\r\n    border:none;\r\n    cursor:pointer;\r\n    margin-top:-5%;\r\n}\r\n.imageOne {\r\n    float:right;\r\n    margin-top:min(120px, 15%)\r\n}\r\n.message, .messageTwo {\r\n    margin-top:-20%;\r\n    font-size:max(1.5rem, 2vw);\r\n    text-align:center;\r\n    width:70%;\r\n    align-self:center;\r\n}\r\n.preMessage {\r\n    font-size:6rem;\r\n}\r\n.message {\r\n    margin-top:min(65px, -7%);\r\n}\r\n.footer {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:flex-start;\r\n    background: var(--brown);\r\n    position:relative;\r\n    z-index:1--;\r\n}\r\n.footerText {\r\n    font-size: 1.65rem;\r\n    position:absolute;\r\n    bottom:0;\r\n}\r\n.containerTwo {\r\n    display:flex;\r\n    justify-content:space-between;\r\n}\r\n.buttonContainer {\r\n    width:100%;\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .page {\r\n        grid-template-rows:300px 3fr 100px;\r\n    }\r\n    .header {\r\n        justify-content:center;\r\n        grid-auto-flow:row;\r\n    }\r\n    .normalHeading {\r\n        border-right:none;\r\n    }\r\n    .imageOne {\r\n        float:left;\r\n        margin-top:0;\r\n    } \r\n    .message {\r\n        margin-top:-20%;\r\n    }\r\n    .contactContainer {\r\n        min-height:600px;\r\n        margin-top:5%;\r\n    }\r\n}\r\n.mainMenu {\r\n    display:flex;\r\n    justify-content:center;\r\n}\r\n\r\n.products, .contactContainer {\r\n    padding:1.5em;\r\n    background:var(--transpdarkBrown);\r\n    border-radius:20px;\r\n    display:grid;\r\n    align-items:baseline;\r\n    justify-items:center;\r\n    grid-template-columns:repeat(2, minmax(250px, 1fr));\r\n    width: max(350px, 70%);\r\n}\r\n.mainContact {\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n}\r\n.contactContainer {\r\n    height:100%;\r\n}\r\n.productCont {\r\n   padding:0.5em;\r\n   margin:2em;\r\n   cursor:pointer;\r\n}\r\n.productCont:hover {\r\n    transform:scale(1.1);\r\n    box-shadow:5px 5px 5px var(--darkBrown);\r\n}\r\n.productCont:hover::after {\r\n    content:' ';\r\n}\r\n.product {\r\n    display:flex;\r\n   flex-direction:column;\r\n   align-items:center;\r\n}\r\n.productTitle, .productPrice {\r\n    text-align:center;\r\n    font-size:1.5rem;\r\n    color: var(--yellow);\r\n}\r\n.productImg {\r\n    max-height:250px;\r\n}\r\n\r\n@media (max-width:750px) {\r\n    .containerOne, .containerTwo {\r\n        flex-direction:column;\r\n        height:100%;\r\n        justify-content:space-evenly;\r\n        align-items:center;\r\n    }\r\n    .messageTwo {\r\n        order:1;\r\n    }\r\n    .imageTwo {\r\n        order:2;\r\n    }\r\n    .imageOne, .imageTwo {\r\n        height:auto;\r\n        width:80%;\r\n    }\r\n}\r\n\r\n@media (min-width:500px) {\r\n    @media (max-width:750px) {\r\n        .imageOne, .imageTwo {\r\n            width:65%;\r\n        }\r\n        .menuButton {\r\n            margin-top: -9%;\r\n            font-size:1.2rem;\r\n        }\r\n    }\r\n}\r\n@media (max-width:900px) and (min-width:750px) {\r\n    .imageOne, .imageTwo {\r\n        max-width:270px;\r\n        margin-top:-2%;\r\n    }\r\n    .menuButton{\r\n        font-size:1.3rem;\r\n    }\r\n}\r\n.selectCont {\r\n    position:absolute;\r\n    width:20%;\r\n    left:0;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    height:fit-content;\r\n}\r\n\r\n.default_option {\r\n    background: var(--transpdarkBrown);\r\n    border-radius:5px;\r\n    position:relative;\r\n    cursor:pointer;\r\n    width: 80%;\r\n    max-width:250px;\r\n    height:fit-content;\r\n    padding: 10px 20px;\r\n    display:block;\r\n}\r\n.inactive {\r\n    display:none;\r\n}\r\n.active {\r\n    display:block;\r\n}\r\n\r\n.default_option:hover::after {\r\n    content:\"\\2304\";\r\n    position:absolute;\r\n    min-width:70px;\r\n    left:110%;\r\n    top:10%;\r\n    font-weight:bolder;\r\n    font-size:1.6rem;\r\n    color: var(--transpdarkBrown);\r\n}\r\nul {\r\n    list-style:none;\r\n}\r\n.select_ul {\r\n    position:relative;\r\n    width: 80%;\r\n    max-width:250px;\r\n    background: var(--transpdarkBrown);\r\n    border-radius: 5px;\r\n    margin-top:0.5%;\r\n}\r\n\r\n.select_ul li {\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.select_ul li:first-child:hover {\r\n    border-top-left-radius:5px;\r\n    border-top-right-radius:5px;\r\n}\r\n.select_ul li:last-child:hover {\r\n    border-bottom-left-radius:5px;\r\n    border-bottom-right-radius:5px;\r\n}\r\n.select_ul li:hover {\r\n    background:var(--darkBrown);\r\n}\r\n.option {\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:space-between;\r\n    color: var(--yellow);\r\n}\r\n.option .icon {\r\n    width:60px;\r\n    min-height:50px;\r\n    margin-right: 5px;\r\n}\r\n.Coffee > .icon {\r\n    background : url(\"Coffee.svg\") no-repeat 0 0;\r\n}\r\n\r\n.OtherBeverages > .icon {\r\n    background : url(\"beverage.svg\") no-repeat 0 0; \r\n}\r\n.Dessert > .icon {\r\n    background: url('dessert.svg') no-repeat 0 0;\r\n}\r\n.default_option::before {\r\n    top: 25px;\r\n    transform: rotate(-225deg);\r\n}\r\n.AddOns > .icon {\r\n    background: url('misc.svg') no-repeat 0 0;\r\n}\r\n@media (max-width:1300px) {\r\n    .products {\r\n        grid-template-columns:repeat(1, minmax(250px, 1fr));\r\n    }\r\n    .mainMenu {\r\n        display:flex;\r\n        justify-content:flex-start;\r\n        align-content:center;\r\n        flex-wrap:wrap;\r\n        align-items:center;\r\n        flex-direction:column;\r\n    }\r\n    .selectCont {\r\n        position:relative;\r\n        width:100%;\r\n    }\r\n    .default_option, .select_ul {\r\n        text-align:center;\r\n        width: 250px;\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n    }\r\n    .products {\r\n        margin-top: 25px;\r\n    }\r\n}\r\n.contactContainer {\r\n    display:grid;\r\n    place-content:center;\r\n    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));\r\n    font-size:1.3rem;\r\n    color:var(--yellow);\r\n    text-align:center;\r\n    gap:10%;\r\n}\r\n.heading {\r\n    font-size:2rem;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");


function contactPage() {
    const contactPage = document.createElement('div');
    contactPage.classList = 'contactpage page';

    const main = document.createElement('div');
    main.classList = 'mainContact';

    const container = document.createElement('div');
    container.classList = 'contactContainer';

    const location = document.createElement('div');
    location.innerHTML = '<p class="heading">Location</p> 17 SunStreet <br> 1234 The Milky Way';

    const hours = document.createElement('div');
    hours.innerHTML = '<p class="heading"> Hours</p> 7am- 10pm Monday to Friday <br> 9am - 9pm Saturday <br> Closed Sunday';

    const contact = document.createElement('div');
    contact.innerHTML = '<p class="heading">Contact</p> 1234-555-678 <br> sunCafe@yahoo.com';

    container.append(location, hours, contact);
    main.append(container);
    contactPage.append((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.header)('contact'), main,  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.footer)());

    return contactPage;
}

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const output = document.querySelector('#content');

let currentPage = 'home';
function loadPage(page) {
    output.innerHTML = '';
    if (page === 'home')
        output.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])());
    else if (page === 'menu') 
        output.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    else
        output.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
}


function changeMenu(option) {
    const options = document.querySelectorAll('.option');
    let def = document.querySelector('.default_option');
    let select = document.querySelector('.select_ul');
    def.innerHTML = '';
    def.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__.addOption)(option.querySelector('p').textContent));
    select.classList = 'select_ul inactive';
}
document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.home')) {
        loadPage('home');
        currentPage = 'home';
    }
    else if (e.target === document.querySelector('.menu') || e.target === document.querySelector('.menuButton')) {
        loadPage('menu');
        currentPage = 'menu';
    }
    else if (e.target === document.querySelector('.contact')) {
        loadPage('contact');
        currentPage = 'contact';
    }

    if (currentPage === "menu") {
        let def = document.querySelector('.default_option');
        let select = document.querySelector('.select_ul');
        let options = select.querySelectorAll('.option');
        
        if (e.target === def || e.target === def.children[0] || e.target === def.children[0].children[0] || e.target === def.children[0].children[0].children[0] || e.target === def.children[0].children[0].children[1])
            if (document.query=select.classList.value === 'select_ul inactive')
                select.classList = 'select_ul active';
            else
                select.classList = 'select_ul inactive';
        else 
            select.classList = 'select_ul inactive';


        options.forEach(option => {
            if (e.target === option || e.target === option.children[0] || e.target === option.children[1]) 
                changeMenu(option);
        })
    }
})


window.onload = function() {

    output.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])('home'));

    
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsaUNBQWlDLHdDQUF3Qyx1Q0FBdUMsNkJBQTZCLGdEQUFnRCw4Q0FBOEMsS0FBSyxpRkFBaUYsZ0JBQWdCLG9CQUFvQixrQ0FBa0MsS0FBSyw2QkFBNkIsc0JBQXNCLE9BQU8sY0FBYyxxQkFBcUIsS0FBSyw2QkFBNkIscUJBQXFCLEtBQUssZUFBZSx3QkFBd0IsS0FBSyxvQkFBb0IsMEJBQTBCLDJCQUEyQiwyQ0FBMkMsNENBQTRDLDZDQUE2QyxzQkFBc0Isb0JBQW9CLDBCQUEwQixxQ0FBcUMsdUJBQXVCLEtBQUssbURBQW1ELGdDQUFnQyxLQUFLLFlBQVksOERBQThELEtBQUssa0NBQWtDLDRCQUE0Qix5QkFBeUIsMEJBQTBCLDBCQUEwQixxQkFBcUIsb0JBQW9CLG9CQUFvQixzQkFBc0IsNENBQTRDLEtBQUssaUJBQWlCLDhCQUE4QixpQkFBaUIsa0JBQWtCLCtCQUErQiw0QkFBNEIsU0FBUyxXQUFXLHFCQUFxQiwwREFBMEQsS0FBSyxhQUFhLDJCQUEyQixzQkFBc0Isd0NBQXdDLHFCQUFxQixvQkFBb0IsbUNBQW1DLDhCQUE4QixTQUFTLFlBQVksZ0NBQWdDLHFDQUFxQyx1QkFBdUIsS0FBSyw0Q0FBNEMsbUJBQW1CLHFDQUFxQyw0RUFBNEUsS0FBSyxXQUFXLHFCQUFxQixrRUFBa0UsS0FBSyxrQ0FBa0MsK0JBQStCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLDBCQUEwQix3QkFBd0IseUJBQXlCLGtCQUFrQiwwQkFBMEIsS0FBSyxzQ0FBc0MsMEJBQTBCLG9CQUFvQixtQkFBbUIsc0JBQXNCLEtBQUssd0JBQXdCLHNCQUFzQixtQkFBbUIsb0JBQW9CLDBCQUEwQixpQkFBaUIsaUJBQWlCLDBDQUEwQyxTQUFTLHFCQUFxQix5RUFBeUUsc0JBQXNCLDJCQUEyQix5QkFBeUIsb0JBQW9CLHVCQUF1Qix1QkFBdUIsS0FBSyxlQUFlLG9CQUFvQix1Q0FBdUMsMkJBQTJCLHdCQUF3QixtQ0FBbUMsMEJBQTBCLGtCQUFrQiwwQkFBMEIsS0FBSyxpQkFBaUIsdUJBQXVCLEtBQUssY0FBYyxrQ0FBa0MsS0FBSyxhQUFhLHFCQUFxQiwrQkFBK0IsK0JBQStCLGlDQUFpQywwQkFBMEIsb0JBQW9CLEtBQUssaUJBQWlCLDJCQUEyQiwwQkFBMEIsaUJBQWlCLEtBQUssbUJBQW1CLHFCQUFxQixzQ0FBc0MsS0FBSyxzQkFBc0IsbUJBQW1CLHFCQUFxQiwrQkFBK0IsMkJBQTJCLFNBQVMsa0NBQWtDLGVBQWUsK0NBQStDLFNBQVMsaUJBQWlCLG1DQUFtQywrQkFBK0IsU0FBUyx3QkFBd0IsOEJBQThCLFNBQVMsbUJBQW1CLHVCQUF1Qix5QkFBeUIsVUFBVSxrQkFBa0IsNEJBQTRCLFNBQVMsMkJBQTJCLDZCQUE2QiwwQkFBMEIsU0FBUyxLQUFLLGVBQWUscUJBQXFCLCtCQUErQixLQUFLLHNDQUFzQyxzQkFBc0IsMENBQTBDLDJCQUEyQixxQkFBcUIsNkJBQTZCLDZCQUE2Qiw0REFBNEQsK0JBQStCLEtBQUssa0JBQWtCLHFCQUFxQiwrQkFBK0IsMkJBQTJCLEtBQUssdUJBQXVCLG9CQUFvQixLQUFLLGtCQUFrQixxQkFBcUIsa0JBQWtCLHNCQUFzQixLQUFLLHdCQUF3Qiw2QkFBNkIsZ0RBQWdELEtBQUssK0JBQStCLG9CQUFvQixLQUFLLGNBQWMscUJBQXFCLDZCQUE2QiwwQkFBMEIsS0FBSyxrQ0FBa0MsMEJBQTBCLHlCQUF5Qiw2QkFBNkIsS0FBSyxpQkFBaUIseUJBQXlCLEtBQUssa0NBQWtDLHNDQUFzQyxrQ0FBa0Msd0JBQXdCLHlDQUF5QywrQkFBK0IsU0FBUyxxQkFBcUIsb0JBQW9CLFNBQVMsbUJBQW1CLG9CQUFvQixTQUFTLDhCQUE4Qix3QkFBd0Isc0JBQXNCLFNBQVMsS0FBSyxrQ0FBa0Msa0NBQWtDLGtDQUFrQywwQkFBMEIsYUFBYSx5QkFBeUIsZ0NBQWdDLGlDQUFpQyxhQUFhLFNBQVMsS0FBSyxvREFBb0QsOEJBQThCLDRCQUE0QiwyQkFBMkIsU0FBUyxvQkFBb0IsNkJBQTZCLFNBQVMsS0FBSyxpQkFBaUIsMEJBQTBCLGtCQUFrQixlQUFlLHFCQUFxQiw4QkFBOEIsMkJBQTJCLDJCQUEyQixLQUFLLHlCQUF5QiwyQ0FBMkMsMEJBQTBCLDBCQUEwQix1QkFBdUIsbUJBQW1CLHdCQUF3QiwyQkFBMkIsMkJBQTJCLHNCQUFzQixLQUFLLGVBQWUscUJBQXFCLEtBQUssYUFBYSxzQkFBc0IsS0FBSyxzQ0FBc0MsMkJBQTJCLDBCQUEwQix1QkFBdUIsa0JBQWtCLGdCQUFnQiwyQkFBMkIseUJBQXlCLHNDQUFzQyxLQUFLLFFBQVEsd0JBQXdCLEtBQUssZ0JBQWdCLDBCQUEwQixtQkFBbUIsd0JBQXdCLDJDQUEyQywyQkFBMkIsd0JBQXdCLEtBQUssdUJBQXVCLDJCQUEyQix3QkFBd0IsS0FBSyx5Q0FBeUMsbUNBQW1DLG9DQUFvQyxLQUFLLG9DQUFvQyxzQ0FBc0MsdUNBQXVDLEtBQUsseUJBQXlCLG9DQUFvQyxLQUFLLGFBQWEscUJBQXFCLDJCQUEyQixzQ0FBc0MsNkJBQTZCLEtBQUssbUJBQW1CLG1CQUFtQix3QkFBd0IsMEJBQTBCLEtBQUsscUJBQXFCLHVEQUF1RCxLQUFLLGlDQUFpQywwREFBMEQsS0FBSyxzQkFBc0IscURBQXFELEtBQUssNkJBQTZCLGtCQUFrQixtQ0FBbUMsS0FBSyxxQkFBcUIsa0RBQWtELEtBQUssK0JBQStCLG1CQUFtQixnRUFBZ0UsU0FBUyxtQkFBbUIseUJBQXlCLHVDQUF1QyxpQ0FBaUMsMkJBQTJCLCtCQUErQixrQ0FBa0MsU0FBUyxxQkFBcUIsOEJBQThCLHVCQUF1QixTQUFTLHFDQUFxQyw4QkFBOEIseUJBQXlCLDZCQUE2Qiw4QkFBOEIsU0FBUyxtQkFBbUIsNkJBQTZCLFNBQVMsS0FBSyx1QkFBdUIscUJBQXFCLDZCQUE2QixtRUFBbUUseUJBQXlCLDRCQUE0QiwwQkFBMEIsZ0JBQWdCLEtBQUssY0FBYyx1QkFBdUIsS0FBSyxtQkFBbUI7QUFDempyQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ25CMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2IwQztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBTSxvQkFBb0IsaURBQU07QUFDdkQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJvQztBQUNGO0FBQ1o7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdDQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQ0FBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQzBDO0FBQ0Q7QUFDRztBQUNOO0FBQ0s7QUFDVTtBQUNaO0FBQ1A7QUFDUTtBQUNOO0FBQ3dCO0FBQzVCO0FBQzBCO0FBQzVCO0FBQ1k7QUFDQTtBQUNOO0FBQ3dCO0FBQ0E7QUFDOUI7QUFDRTtBQUNjO0FBQ0Y7QUFDQTtBQUNGO0FBQzFDO0FBQ087QUFDUDtBQUNBLG1CQUFtQiwwQ0FBVztBQUM5QixtQkFBbUIsMkNBQWE7QUFDaEMsbUJBQW1CLHNDQUFZO0FBQy9CLG1CQUFtQiwyQ0FBWTtBQUMvQixtQkFBbUIsa0RBQWU7QUFDbEMsbUJBQW1CLDZDQUFRO0FBQzNCO0FBQ0E7QUFDQSxtQkFBbUIsd0NBQUs7QUFDeEIsbUJBQW1CLHVDQUFJO0FBQ3ZCLG1CQUFtQixxREFBa0I7QUFDckMsbUJBQW1CLHNEQUFtQjtBQUN0QyxtQkFBbUIseUNBQU87QUFDMUIsbUJBQW1CLHdDQUFNO0FBQ3pCLG1CQUFtQiw0Q0FBVTtBQUM3QjtBQUNBO0FBQ0EsbUJBQW1CLDBDQUFPO0FBQzFCLG1CQUFtQiw2Q0FBVTtBQUM3QixtQkFBbUIsNkNBQVU7QUFDN0IsbUJBQW1CLHNEQUFtQjtBQUN0QyxtQkFBbUIsc0RBQW1CO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBbUIsdUNBQUk7QUFDdkIsbUJBQW1CLDZDQUFVO0FBQzdCLG1CQUFtQix3Q0FBSztBQUN4QixtQkFBbUIsK0NBQVk7QUFDL0IsbUJBQW1CLDhDQUFXO0FBQzlCLG1CQUFtQiw4Q0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBTSxvQkFBb0IsaURBQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNZO0FBQ0o7QUFDTTtBQUNIO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFRO0FBQ25DO0FBQ0EsMkJBQTJCLGlEQUFRO0FBQ25DO0FBQ0EsMkJBQTJCLG9EQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBUTtBQUMvQjtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZpcnN0U3BpbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiQ29mZmVlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImJldmVyYWdlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImRlc3NlcnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwibWlzYy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0teWVsbG93OiByZ2JhKDI1NSwyMTcsMTI3LDI1NSk7XFxyXFxuICAgIC0tYnJvd246IHJnYmEoMTkwLDE1OCwxMjcsMjU1KTtcXHJcXG4gICAgLS1kYXJrQnJvd246ICM1OTFDMDI7XFxyXFxuICAgIC0tdHJhbnNwZGFya0Jyb3duOiByZ2JhKDg5LCAyOCwgMiwgMC41KTtcXHJcXG4gICAgLS1taWRkYXJrQnJvd246IHJnYmEoODksIDI4LCAyLCAwLjc1KTtcXHJcXG59XFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0tYnJvd24pO1xcclxcbn1cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5ob21lcGFnZSwgLmNvbnRhY3RwYWdlIHtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbn1cXHJcXG4ubWVudVBhZ2Uge1xcclxcbiAgICBtaW4taGVpZ2h0OjEwMCU7XFxyXFxufVxcclxcbi5ub3JtYWxIZWFkaW5nIHtcXHJcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDpmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXHJcXG4gICAgcGFkZGluZzowLjVlbTtcXHJcXG4gICAgd2lkdGg6MTc1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBmb250LXNpemU6bWF4KDEuOHJlbSwgMS41dncpO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuLm5vcm1hbEhlYWRpbmcsIC50aXRsZSwgLmZvb3RlciwgIC5tZW51QnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmtCcm93bik7XFxyXFxufVxcclxcbi5jb3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTVhZDc0IDM1JSwgIzZmMjgwZiA2NSUpO1xcclxcbn1cXHJcXG4uY292ZXI6OmFmdGVyLCAuY292ZXI6OmFmdGVyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDowLjcwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6LTE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnICc7XFxyXFxuICAgIHdpZHRoOjE3NXB4O1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgKiB7XFxyXFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLnBhZ2Uge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxNTBweCBtaW5tYXgoNzAwcHgsIDRmcikgMTAwcHg7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxyXFxuICAgIHBhZGRpbmc6Ljc1ZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgd2lkdGg6MTAwJTsgXFxyXFxuICAgIGp1c3RpZnktaXRlbXM6c3BhY2UtYXJvdW5kO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzpjb2x1bW47XFxyXFxuXFxyXFxufVxcclxcbi50aXRsZSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjpmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6bWF4KDIuNXJlbSwgMi41dncpO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1haW4sIC5tYWluTWVudSwgLm1haW5Db250YWN0IHtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgcGFkZGluZzoxLjVlbSBtaW4oMTAlLCA5cmVtKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0teWVsbG93KSwgdmFyKC0tYnJvd24pKTtcXHJcXG59XFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDQwMHB4LCAxZnIpIG1pbm1heCgzNTBweCwgMWZyKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lck9uZSwgLmNvbnRhaW5lclR3byB7XFxyXFxuICAgIGNvbG9yOnZhcigtLWRhcmtCcm93bik7XFxyXFxufVxcclxcbi5jb250YWluZXJPbmUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxufVxcclxcbi5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgbWluLXdpZHRoOjE1MHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OjM1MHB4O1xcclxcbiAgICB6LWluZGV4OjE7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYWN0dWFsSW1hZ2VUd28sIC5hY3R1YWxJbWFnZU9uZSB7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDo1JTtcXHJcXG59XFxyXFxuLmRlY29PbmUsIC5kZWNvVHdvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDo1JTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB0b3A6LTIwJTtcXHJcXG4gICAgbGVmdDoyMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVCdXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB2YXIoLS15ZWxsb3cpLCB2YXIoLS1icm93bikpO1xcclxcbiAgICBwYWRkaW5nOjEuNGVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjE0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjRyZW07XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDotNSU7XFxyXFxufVxcclxcbi5pbWFnZU9uZSB7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBtYXJnaW4tdG9wOm1pbigxMjBweCwgMTUlKVxcclxcbn1cXHJcXG4ubWVzc2FnZSwgLm1lc3NhZ2VUd28ge1xcclxcbiAgICBtYXJnaW4tdG9wOi0yMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMS41cmVtLCAydncpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgd2lkdGg6NzAlO1xcclxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXHJcXG59XFxyXFxuLnByZU1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6NnJlbTtcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOm1pbig2NXB4LCAtNyUpO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OjEtLTtcXHJcXG59XFxyXFxuLmZvb3RlclRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuNjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBib3R0b206MDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lclR3byB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5idXR0b25Db250YWluZXIge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgLnBhZ2Uge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjMwMHB4IDNmciAxMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgICAgICBncmlkLWF1dG8tZmxvdzpyb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5vcm1hbEhlYWRpbmcge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0Om5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmltYWdlT25lIHtcXHJcXG4gICAgICAgIGZsb2F0OmxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjA7XFxyXFxuICAgIH0gXFxyXFxuICAgIC5tZXNzYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6LTIwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdENvbnRhaW5lciB7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OjYwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDo1JTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubWFpbk1lbnUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cywgLmNvbnRhY3RDb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOjEuNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczpiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG4gICAgd2lkdGg6IG1heCgzNTBweCwgNzAlKTtcXHJcXG59XFxyXFxuLm1haW5Db250YWN0IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxufVxcclxcbi5jb250YWN0Q29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxufVxcclxcbi5wcm9kdWN0Q29udCB7XFxyXFxuICAgcGFkZGluZzowLjVlbTtcXHJcXG4gICBtYXJnaW46MmVtO1xcclxcbiAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvZHVjdENvbnQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcXHJcXG4gICAgYm94LXNoYWRvdzo1cHggNXB4IDVweCB2YXIoLS1kYXJrQnJvd24pO1xcclxcbn1cXHJcXG4ucHJvZHVjdENvbnQ6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDonICc7XFxyXFxufVxcclxcbi5wcm9kdWN0IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxufVxcclxcbi5wcm9kdWN0VGl0bGUsIC5wcm9kdWN0UHJpY2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxufVxcclxcbi5wcm9kdWN0SW1nIHtcXHJcXG4gICAgbWF4LWhlaWdodDoyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lck9uZSwgLmNvbnRhaW5lclR3byB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lc3NhZ2VUd28ge1xcclxcbiAgICAgICAgb3JkZXI6MTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgb3JkZXI6MjtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICBoZWlnaHQ6YXV0bztcXHJcXG4gICAgICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDo1MDBweCkge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo3NTBweCkge1xcclxcbiAgICAgICAgLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOjY1JTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5tZW51QnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOSU7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOjEuMnJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDo5MDBweCkgYW5kIChtaW4td2lkdGg6NzUwcHgpIHtcXHJcXG4gICAgLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOjI3MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDotMiU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVCdXR0b257XFxyXFxuICAgICAgICBmb250LXNpemU6MS4zcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zZWxlY3RDb250IHtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOjIwJTtcXHJcXG4gICAgbGVmdDowO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0X29wdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDoyNTBweDtcXHJcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxufVxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG59XFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0X29wdGlvbjpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OlxcXCJcXFxcMjMwNFxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBtaW4td2lkdGg6NzBweDtcXHJcXG4gICAgbGVmdDoxMTAlO1xcclxcbiAgICB0b3A6MTAlO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjZyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BkYXJrQnJvd24pO1xcclxcbn1cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcXHJcXG59XFxyXFxuLnNlbGVjdF91bCB7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6MjUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDowLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0X3VsIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RfdWwgbGk6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O1xcclxcbn1cXHJcXG4uc2VsZWN0X3VsIGxpOmxhc3QtY2hpbGQ6aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4O1xcclxcbn1cXHJcXG4uc2VsZWN0X3VsIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1kYXJrQnJvd24pO1xcclxcbn1cXHJcXG4ub3B0aW9uIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG59XFxyXFxuLm9wdGlvbiAuaWNvbiB7XFxyXFxuICAgIHdpZHRoOjYwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6NTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi5Db2ZmZWUgPiAuaWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQgOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5PdGhlckJldmVyYWdlcyA+IC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IDAgMDsgXFxyXFxufVxcclxcbi5EZXNzZXJ0ID4gLmljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIG5vLXJlcGVhdCAwIDA7XFxyXFxufVxcclxcbi5kZWZhdWx0X29wdGlvbjo6YmVmb3JlIHtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcXHJcXG59XFxyXFxuLkFkZE9ucyA+IC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBuby1yZXBlYXQgMCAwO1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDoxMzAwcHgpIHtcXHJcXG4gICAgLnByb2R1Y3RzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMSwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG4gICAgfVxcclxcbiAgICAubWFpbk1lbnUge1xcclxcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWxlY3RDb250IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVmYXVsdF9vcHRpb24sIC5zZWxlY3RfdWwge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2R1Y3RzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmNvbnRhY3RDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6Y2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICBmb250LXNpemU6MS4zcmVtO1xcclxcbiAgICBjb2xvcjp2YXIoLS15ZWxsb3cpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZ2FwOjEwJTtcXHJcXG59XFxyXFxuLmhlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6MnJlbTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQix1Q0FBdUM7SUFDdkMscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0VBQ2Y7QUFDRjtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIs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Q2hEO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxpRUFBeUM7QUFDN0M7QUFDQTtJQUNJO1FBQ0ksbURBQW1EO0lBQ3ZEO0lBQ0E7UUFDSSxZQUFZO1FBQ1osMEJBQTBCO1FBQzFCLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwwREFBMEQ7SUFDMUQsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsT0FBTztBQUNYO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS15ZWxsb3c6IHJnYmEoMjU1LDIxNywxMjcsMjU1KTtcXHJcXG4gICAgLS1icm93bjogcmdiYSgxOTAsMTU4LDEyNywyNTUpO1xcclxcbiAgICAtLWRhcmtCcm93bjogIzU5MUMwMjtcXHJcXG4gICAgLS10cmFuc3BkYXJrQnJvd246IHJnYmEoODksIDI4LCAyLCAwLjUpO1xcclxcbiAgICAtLW1pZGRhcmtCcm93bjogcmdiYSg4OSwgMjgsIDIsIDAuNzUpO1xcclxcbn1cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLWJyb3duKTtcXHJcXG59XFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uaG9tZXBhZ2UsIC5jb250YWN0cGFnZSB7XFxyXFxuICAgIGhlaWdodDoxMDB2aDtcXHJcXG59XFxyXFxuLm1lbnVQYWdlIHtcXHJcXG4gICAgbWluLWhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG4ubm9ybWFsSGVhZGluZyB7XFxyXFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIHBhZGRpbmc6MC41ZW07XFxyXFxuICAgIHdpZHRoOjE3NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOm1heCgxLjhyZW0sIDEuNXZ3KTtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcbi5ub3JtYWxIZWFkaW5nLCAudGl0bGUsIC5mb290ZXIsICAubWVudUJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrQnJvd24pO1xcclxcbn1cXHJcXG4uY292ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2U1YWQ3NCAzNSUsICM2ZjI4MGYgNjUlKTtcXHJcXG59XFxyXFxuLmNvdmVyOjphZnRlciwgLmNvdmVyOjphZnRlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6MC43MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogJyAnO1xcclxcbiAgICB3aWR0aDoxNzVweDtcXHJcXG4gICAgaGVpZ2h0OjgwcHg7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9maXJzdFNwaWxsLnN2ZycpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCAqIHtcXHJcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xcclxcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xcclxcblxcclxcbn1cXHJcXG4ucGFnZSB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjE1MHB4IG1pbm1heCg3MDBweCwgNGZyKSAxMDBweDtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG4gICAgcGFkZGluZzouNzVlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICB3aWR0aDoxMDAlOyBcXHJcXG4gICAganVzdGlmeS1pdGVtczpzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OmNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuLnRpdGxlIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOmZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTptYXgoMi41cmVtLCAyLjV2dyk7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWFpbiwgLm1haW5NZW51LCAubWFpbkNvbnRhY3Qge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOjEuNWVtIG1pbigxMCUsIDlyZW0pO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS15ZWxsb3cpLCB2YXIoLS1icm93bikpO1xcclxcbn1cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNDAwcHgsIDFmcikgbWlubWF4KDM1MHB4LCAxZnIpO1xcclxcbn1cXHJcXG4uY29udGFpbmVyT25lLCAuY29udGFpbmVyVHdvIHtcXHJcXG4gICAgY29sb3I6dmFyKC0tZGFya0Jyb3duKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lck9uZSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG59XFxyXFxuLmltYWdlT25lLCAuaW1hZ2VUd28ge1xcclxcbiAgICBtaW4td2lkdGg6MTUwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6MzUwcHg7XFxyXFxuICAgIHotaW5kZXg6MTtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbi5hY3R1YWxJbWFnZVR3bywgLmFjdHVhbEltYWdlT25lIHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOjUlO1xcclxcbn1cXHJcXG4uZGVjb09uZSwgLmRlY29Ud28ge1xcclxcbiAgICBtYXJnaW4tdG9wOjUlO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIHRvcDotMjAlO1xcclxcbiAgICBsZWZ0OjIwJTtcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS10cmFuc3BkYXJrQnJvd24pO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWVudUJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLXllbGxvdyksIHZhcigtLWJyb3duKSk7XFxyXFxuICAgIHBhZGRpbmc6MS40ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MTRweDtcXHJcXG4gICAgZm9udC1zaXplOjEuNHJlbTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOi01JTtcXHJcXG59XFxyXFxuLmltYWdlT25lIHtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxuICAgIG1hcmdpbi10b3A6bWluKDEyMHB4LCAxNSUpXFxyXFxufVxcclxcbi5tZXNzYWdlLCAubWVzc2FnZVR3byB7XFxyXFxuICAgIG1hcmdpbi10b3A6LTIwJTtcXHJcXG4gICAgZm9udC1zaXplOm1heCgxLjVyZW0sIDJ2dyk7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICB3aWR0aDo3MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcclxcbn1cXHJcXG4ucHJlTWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTo2cmVtO1xcclxcbn1cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6bWluKDY1cHgsIC03JSk7XFxyXFxufVxcclxcbi5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJyb3duKTtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6MS0tO1xcclxcbn1cXHJcXG4uZm9vdGVyVGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTowO1xcclxcbn1cXHJcXG4uY29udGFpbmVyVHdvIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDo3NTBweCkge1xcclxcbiAgICAucGFnZSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MzAwcHggM2ZyIDEwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OnJvdztcXHJcXG4gICAgfVxcclxcbiAgICAubm9ybWFsSGVhZGluZyB7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6bm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1hZ2VPbmUge1xcclxcbiAgICAgICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MDtcXHJcXG4gICAgfSBcXHJcXG4gICAgLm1lc3NhZ2Uge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDotMjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6NjAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tYWluTWVudSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RzLCAuY29udGFjdENvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6MS41ZW07XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgICB3aWR0aDogbWF4KDM1MHB4LCA3MCUpO1xcclxcbn1cXHJcXG4ubWFpbkNvbnRhY3Qge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRhY3RDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuLnByb2R1Y3RDb250IHtcXHJcXG4gICBwYWRkaW5nOjAuNWVtO1xcclxcbiAgIG1hcmdpbjoyZW07XFxyXFxuICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9kdWN0Q29udDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xcclxcbiAgICBib3gtc2hhZG93OjVweCA1cHggNXB4IHZhcigtLWRhcmtCcm93bik7XFxyXFxufVxcclxcbi5wcm9kdWN0Q29udDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OicgJztcXHJcXG59XFxyXFxuLnByb2R1Y3Qge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RUaXRsZSwgLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG59XFxyXFxuLnByb2R1Y3RJbWcge1xcclxcbiAgICBtYXgtaGVpZ2h0OjI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDo3NTBweCkge1xcclxcbiAgICAuY29udGFpbmVyT25lLCAuY29udGFpbmVyVHdvIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubWVzc2FnZVR3byB7XFxyXFxuICAgICAgICBvcmRlcjoxO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICBvcmRlcjoyO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbWFnZU9uZSwgLmltYWdlVHdvIHtcXHJcXG4gICAgICAgIGhlaWdodDphdXRvO1xcclxcbiAgICAgICAgd2lkdGg6ODAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOjUwMHB4KSB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjc1MHB4KSB7XFxyXFxuICAgICAgICAuaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6NjUlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLm1lbnVCdXR0b24ge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC05JTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6MS4ycmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDo3NTBweCkge1xcclxcbiAgICAuaW1hZ2VPbmUsIC5pbWFnZVR3byB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6MjcwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOi0yJTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudUJ1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxLjNyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnNlbGVjdENvbnQge1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6MjAlO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGhlaWdodDpmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmF1bHRfb3B0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWF4LXdpZHRoOjI1MHB4O1xcclxcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmF1bHRfb3B0aW9uOmhvdmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6XFxcIlxcXFwyMzA0XFxcIjtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIG1pbi13aWR0aDo3MHB4O1xcclxcbiAgICBsZWZ0OjExMCU7XFxyXFxuICAgIHRvcDoxMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXHJcXG4gICAgZm9udC1zaXplOjEuNnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGRhcmtCcm93bik7XFxyXFxufVxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTpub25lO1xcclxcbn1cXHJcXG4uc2VsZWN0X3VsIHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDoyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwZGFya0Jyb3duKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjAuNSU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RfdWwgbGkge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdF91bCBsaTpmaXJzdC1jaGlsZDpob3ZlciB7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7XFxyXFxufVxcclxcbi5zZWxlY3RfdWwgbGk6bGFzdC1jaGlsZDpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7XFxyXFxufVxcclxcbi5zZWxlY3RfdWwgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWRhcmtCcm93bik7XFxyXFxufVxcclxcbi5vcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbn1cXHJcXG4ub3B0aW9uIC5pY29uIHtcXHJcXG4gICAgd2lkdGg6NjBweDtcXHJcXG4gICAgbWluLWhlaWdodDo1MHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLkNvZmZlZSA+IC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHVybChcXFwiQ29mZmVlLnN2Z1xcXCIpIG5vLXJlcGVhdCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5PdGhlckJldmVyYWdlcyA+IC5pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZCA6IHVybChcXFwiYmV2ZXJhZ2Uuc3ZnXFxcIikgbm8tcmVwZWF0IDAgMDsgXFxyXFxufVxcclxcbi5EZXNzZXJ0ID4gLmljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Rlc3NlcnQuc3ZnJykgbm8tcmVwZWF0IDAgMDtcXHJcXG59XFxyXFxuLmRlZmF1bHRfb3B0aW9uOjpiZWZvcmUge1xcclxcbiAgICB0b3A6IDI1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xcclxcbn1cXHJcXG4uQWRkT25zID4gLmljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ21pc2Muc3ZnJykgbm8tcmVwZWF0IDAgMDtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6MTMwMHB4KSB7XFxyXFxuICAgIC5wcm9kdWN0cyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDEsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1haW5NZW51IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6d3JhcDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAuc2VsZWN0Q29udCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlZmF1bHRfb3B0aW9uLCAuc2VsZWN0X3VsIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5wcm9kdWN0cyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jb250YWN0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwbGFjZS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG4gICAgZm9udC1zaXplOjEuM3JlbTtcXHJcXG4gICAgY29sb3I6dmFyKC0teWVsbG93KTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGdhcDoxMCU7XFxyXFxufVxcclxcbi5oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOjJyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2hlYWRlciwgZm9vdGVyfSBmcm9tICcuL2hvbWVwYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RQYWdlLmNsYXNzTGlzdCA9ICdjb250YWN0cGFnZSBwYWdlJztcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdCA9ICdtYWluQ29udGFjdCc7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRhY3RDb250YWluZXInO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJoZWFkaW5nXCI+TG9jYXRpb248L3A+IDE3IFN1blN0cmVldCA8YnI+IDEyMzQgVGhlIE1pbGt5IFdheSc7XHJcblxyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJzLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImhlYWRpbmdcIj4gSG91cnM8L3A+IDdhbS0gMTBwbSBNb25kYXkgdG8gRnJpZGF5IDxicj4gOWFtIC0gOXBtIFNhdHVyZGF5IDxicj4gQ2xvc2VkIFN1bmRheSc7XHJcblxyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdC5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJoZWFkaW5nXCI+Q29udGFjdDwvcD4gMTIzNC01NTUtNjc4IDxicj4gc3VuQ2FmZUB5YWhvby5jb20nO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQobG9jYXRpb24sIGhvdXJzLCBjb250YWN0KTtcclxuICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICBjb250YWN0UGFnZS5hcHBlbmQoaGVhZGVyKCdjb250YWN0JyksIG1haW4sICBmb290ZXIoKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3RQYWdlO1xyXG59IiwiaW1wb3J0IGltYWdlT25lIGZyb20gJy4vY29mZmVlLmpwZyc7XHJcbmltcG9ydCBpbWFnZVR3byBmcm9tICcuL2NhZmUuanBnJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuY29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9ybWFsSGVhZGluZycpO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ292ZXJzKCkge1xyXG4gICAgaGVhZGluZ3MuZm9yRWFjaChoZWFkaW5nID0+IHtcclxuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdmVyJyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKGNvdmVyKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QgPSAnaGVhZGVyJztcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnU1VOQ0FGRSc7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QgPSAndGl0bGUnO1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSE9NRSc7XHJcbiAgICBob21lLmNsYXNzTGlzdCA9ICdob21lIG5vcm1hbEhlYWRpbmcnO1xyXG4gICAgcmVtb3ZlQWxsQ292ZXJzKCk7XHJcbiAgICBpZiAoY292ZXIgPT09IFwiaG9tZVwiKVxyXG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnY292ZXInKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01FTlUnO1xyXG4gICAgbWVudS5jbGFzc0xpc3QgPSAnbWVudSBub3JtYWxIZWFkaW5nJztcclxuICAgIGlmIChjb3ZlciA9PT0gJ21lbnUnKVxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnY292ZXInKTtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QgPSAnY29udGFjdCBub3JtYWxIZWFkaW5nJztcclxuICAgIGlmIChjb3ZlciA9PT0gXCJjb250YWN0XCIpXHJcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpO1xyXG4gICAgY29uc29sZS5sb2coY292ZXIpO1xyXG5cclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlLCBob21lLCBtZW51LCBjb250YWN0KTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0ID0gJ2Zvb3Rlcic7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb3RlclRleHQuY2xhc3NMaXN0ID0gJ2Zvb3RlclRleHQnO1xyXG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICdAZGVsaWFzb2FyZSc7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKCkge1xyXG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVQYWdlLmNsYXNzTGlzdCA9ICdob21lcGFnZSBwYWdlJztcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdCA9ICdtYWluJztcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBwcmVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJlTWVzc2FnZS50ZXh0Q29udGVudCA9ICdBJztcclxuICAgIHByZU1lc3NhZ2UuY2xhc3NMaXN0ID0gJ3ByZU1lc3NhZ2UnO1xyXG4gICAgbWVzc2FnZS5pbm5lckhUTUwgPSBcInJlIHlvdSByZWFkeSB0byB0YXN0ZSBUSEUgYmVzdCBjb2ZmZWU/XCJcclxuICAgIG1lc3NhZ2UuY2xhc3NMaXN0ID0gJ21lc3NhZ2UnO1xyXG4gICAgbWVzc2FnZS5wcmVwZW5kKHByZU1lc3NhZ2UpO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWVzc2FnZTIudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgbWVzc2FnZTIuY2xhc3NMaXN0ID0gJ21lc3NhZ2VUd28nO1xyXG5cclxuXHJcbiAgICBjb25zdCBjb250YWluZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QgPSAnY29udGFpbmVyT25lJztcclxuXHJcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1hZ2VDb250YWluZXJPbmUuY2xhc3NMaXN0ID0gJ2ltYWdlT25lJztcclxuICAgIGNvbnN0IGltYWdlMSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UxLnNyYyA9IGltYWdlT25lO1xyXG4gICAgaW1hZ2UxLmNsYXNzTGlzdCA9ICdhY3R1YWxJbWFnZU9uZSc7XHJcbiAgICBjb25zdCBkZWNvSW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVjb0ltZzEuY2xhc3NMaXN0ID0gJ2RlY29PbmUnO1xyXG5cclxuICAgIGltYWdlQ29udGFpbmVyT25lLmFwcGVuZChkZWNvSW1nMSwgaW1hZ2UxKTtcclxuICAgIGNvbnRhaW5lck9uZS5hcHBlbmQobWVzc2FnZSwgaW1hZ2VDb250YWluZXJPbmUpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyVHdvLmNsYXNzTGlzdCA9ICdjb250YWluZXJUd28nO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaW1hZ2UyID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTIuc3JjID0gaW1hZ2VUd287XHJcbiAgICBpbWFnZTIuY2xhc3NMaXN0ID0nYWN0dWFsSW1hZ2VUd28nO1xyXG4gICAgaW1hZ2VDb250YWluZXJUd28uY2xhc3NMaXN0ID0gJ2ltYWdlVHdvJztcclxuICAgIGNvbnN0IGRlY29JbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZWNvSW1nMi5jbGFzc0xpc3QgPSAnZGVjb1R3byc7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QgPSAnbWVudUJ1dHRvbic7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ0hFQ0sgSVQgT1VUJztcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnYnV0dG9uQ29udGFpbmVyJztcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICBpbWFnZUNvbnRhaW5lclR3by5hcHBlbmQoZGVjb0ltZzIsIGltYWdlMik7XHJcbiAgICBjb250YWluZXJUd28uYXBwZW5kKGltYWdlQ29udGFpbmVyVHdvLCBidXR0b25Db250YWluZXIpO1xyXG5cclxuICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lck9uZSwgY29udGFpbmVyVHdvKTtcclxuXHJcblxyXG4gICAgaG9tZVBhZ2UuYXBwZW5kKGhlYWRlcignaG9tZScpLCBtYWluLCBmb290ZXIoKSk7XHJcbiAgICByZXR1cm4gaG9tZVBhZ2U7XHJcbn0iLCJcclxuaW1wb3J0IHtoZWFkZXIsIGZvb3Rlcn0gZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCBFc3ByZXNzb0ltZyBmcm9tICcuL2VzcHJlc3NvLnBuZyc7XHJcbmltcG9ydCBDYWZmZUxhdHRlSW1nIGZyb20gJy4vY2FmZUxhdHRlLnBuZyc7XHJcbmltcG9ydCBDYXBwdWNpbm9JbWcgZnJvbSAnLi9jYXBwLnBuZyc7XHJcbmltcG9ydCBBbWVyaWNhbm9JbWcgZnJvbSAnLi9hbWVyaWNhbm8ucG5nJztcclxuaW1wb3J0IGNhcmFtZWxNYWNjaEltZyBmcm9tICcuL2NhcmFtZWxNYWNjaGlhdG8ucG5nJztcclxuaW1wb3J0IGlyaXNoSW1nIGZyb20gJy4vaXJpc2hDb2ZmZWUucG5nJztcclxuaW1wb3J0IE1vaml0byBmcm9tICcuL01vaml0by5wbmcnO1xyXG5pbXBvcnQgUGluYUNvbGFkYSBmcm9tICcuL3BpbmFDb2xhZGEucG5nJztcclxuaW1wb3J0IFNsdXNoaWUgZnJvbSAnLi9TbHVzaGllLnBuZyc7XHJcbmltcG9ydCBTdHJhd2JlcnJ5TWlsa3NoYWtlIGZyb20gJy4vc3RyYXdiZXJyeU1pbGtzaGFrZS5wbmcnO1xyXG5pbXBvcnQgV2F0ZXIgZnJvbSAnLi93YXRlci5wbmcnO1xyXG5pbXBvcnQgV2F0ZXJtZWxvbkxlbW9uYWRlIGZyb20gJy4vd2F0ZXJtZWxvbkxlbW9uYWRlLnBuZyc7XHJcbmltcG9ydCBDb2tlIGZyb20gJy4vY29rZS5wbmcnO1xyXG5pbXBvcnQgQ2hlZXNlY2FrZSBmcm9tICcuL0NoZWVzZWNha2UucG5nJztcclxuaW1wb3J0IFBhbm5hQ290dGEgZnJvbSAnLi9QYW5uYUNvdHRhLnBuZyc7XHJcbmltcG9ydCBDdXBjYWtlIGZyb20gJy4vQ3VwY2FrZS5wbmcnO1xyXG5pbXBvcnQgUHVkZGluZ0NyZW1lQ2FyYW1lbCBmcm9tICcuL1B1ZGRpbmdDcmVtZUNhcmFtZWwucG5nJztcclxuaW1wb3J0IFJlZFZlbHZldENoZWVzZWNha2UgZnJvbSAnLi9SZWRWZWx2ZXRDaGVlc2VjYWtlLnBuZyc7XHJcbmltcG9ydCBNaWxrIGZyb20gJy4vTWlsay5wbmcnO1xyXG5pbXBvcnQgU3VnYXIgZnJvbSAnLi9TdWdhci5wbmcnO1xyXG5pbXBvcnQgV2hpcHBlZENyZWFtIGZyb20gJy4vV2hpcHBlZENyZWFtLnBuZyc7XHJcbmltcG9ydCBDb2ZmZWVCZWFucyBmcm9tICcuL0NvZmZlZUJlYW5zLnBuZyc7XHJcbmltcG9ydCBDb2NvYVBvd2RlciBmcm9tICcuL0NvY29hUG93ZGVyLnBuZyc7XHJcbmltcG9ydCBBbG1vbmRNaWxrIGZyb20gJy4vQWxtb25kTWlsay5wbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2QgPSB7XHJcbiAgICBDb2ZmZWU6IFtcclxuICAgICAgICBhZGRQcm9kdWN0KEVzcHJlc3NvSW1nLCAnRXNwcmVzc28nLCA1KSwgXHJcbiAgICAgICAgYWRkUHJvZHVjdChDYWZmZUxhdHRlSW1nLCAnQ2FmZmUgTGF0dGUnLCA1KSxcclxuICAgICAgICBhZGRQcm9kdWN0KENhcHB1Y2lub0ltZywgJ0NhcHB1Y2lubycsIDYpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoQW1lcmljYW5vSW1nLCAnQW1lcmljYW5vIENvZmZlZScsIDUpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoY2FyYW1lbE1hY2NoSW1nLCAnQ2FyYW1lbCBNYWNjaGlhdG8nLCA3KSxcclxuICAgICAgICBhZGRQcm9kdWN0KGlyaXNoSW1nLCAnSXJpc2ggQ29mZmVlJywgNSkgXHJcbiAgICAgICAgXSxcclxuICAgIFwiT3RoZXIgQmV2ZXJhZ2VzXCI6IFtcclxuICAgICAgICBhZGRQcm9kdWN0KFdhdGVyLCAnV2F0ZXInLCAzKSxcclxuICAgICAgICBhZGRQcm9kdWN0KENva2UsICdDb2tlJywgNCksXHJcbiAgICAgICAgYWRkUHJvZHVjdChXYXRlcm1lbG9uTGVtb25hZGUsIFwiV2F0ZXJtZWxvbiBMZW1vbmFkZVwiLCA4KSxcclxuICAgICAgICBhZGRQcm9kdWN0KFN0cmF3YmVycnlNaWxrc2hha2UsICdTdHJhd2JlcnJ5IE1pbGtzaGFrZScsIDkpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoU2x1c2hpZSwgJ1NsdXNoaWUnLCA3KSxcclxuICAgICAgICBhZGRQcm9kdWN0KE1vaml0bywgJ01vaml0bycsIDkpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoUGluYUNvbGFkYSwgJ1BpbmEgQ29sYWRhJywgOSlcclxuICAgIF0sXHJcbiAgICBEZXNzZXJ0OiBbXHJcbiAgICAgICAgYWRkUHJvZHVjdChDdXBjYWtlLCAnQ3VwY2FrZScsIDYpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoUGFubmFDb3R0YSwgJ1Bhbm5hIENvdHRhJywgOCksXHJcbiAgICAgICAgYWRkUHJvZHVjdChDaGVlc2VjYWtlLCAnQ2hlZXNlY2FrZScsIDkpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoUHVkZGluZ0NyZW1lQ2FyYW1lbCwgJ1B1ZGRpbmcgQ3JlbWUgQ2FyYW1lbCcsIDkpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoUmVkVmVsdmV0Q2hlZXNlY2FrZSwgJ1JlZCBWZWx2ZXQgQ2hlZXNlY2FrZScsIDEwKVxyXG4gICAgXSxcclxuICAgIFwiQWRkIE9uc1wiOiBbXHJcbiAgICAgICAgYWRkUHJvZHVjdChNaWxrLCAnRXh0cmEgTWlsaycsIDIpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoQWxtb25kTWlsaywgJ0FsbW9uZCBNaWxrJywgNCksXHJcbiAgICAgICAgYWRkUHJvZHVjdChTdWdhciwgJ0V4dHJhIHN1Z2FyJywgMiksXHJcbiAgICAgICAgYWRkUHJvZHVjdChXaGlwcGVkQ3JlYW0sICdXaGlwcGVkIENyZWFtJywgNCksXHJcbiAgICAgICAgYWRkUHJvZHVjdChDb2ZmZWVCZWFucywgJ0NvZmZlZSBCZWFucycsIDQpLFxyXG4gICAgICAgIGFkZFByb2R1Y3QoQ29jb2FQb3dkZXIsICdDb2NvYSBQb3dkZXInLCAzKVxyXG4gICAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9kdWN0KGltYWdlLCB0aXRsZSwgcHJpY2UpIHtcclxuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb2R1Y3RDb250J1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2R1Y3QuY2xhc3NOYW1lID0gJ3Byb2R1Y3QnO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RJbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgcHJvZHVjdEltZy5zcmMgPSBpbWFnZTtcclxuICAgIHByb2R1Y3RJbWcuY2xhc3NMaXN0ID0gJ3Byb2R1Y3RJbWcnO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRpdGxlUHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0aXRsZVByLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB0aXRsZVByLmNsYXNzTGlzdCA9ICdwcm9kdWN0VGl0bGUnO1xyXG5cclxuICAgIGNvbnN0IHByaWNlUHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcmljZVByLnRleHRDb250ZW50ID0gYCR7cHJpY2V9JGA7XHJcbiAgICBwcmljZVByLmNsYXNzTGlzdCA9ICdwcm9kdWN0UHJpY2UnO1xyXG5cclxuICAgIG1lc3NhZ2UuYXBwZW5kKHRpdGxlUHIsIHByaWNlUHIpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQocHJvZHVjdEltZywgbWVzc2FnZSk7XHJcbiAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZChwcm9kdWN0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHByb2R1Y3RDb250YWluZXI7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE9wdGlvbih0aXRsZSkge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpY29uLmNsYXNzTGlzdCA9ICdpY29uJztcclxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBpZiAodGl0bGUuaW5jbHVkZXMoJyAnKSkge1xyXG4gICAgICAgIGxldCBzID0gdGl0bGUuc3BsaXQoJyAnKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0ID0gYG9wdGlvbiAke3NbMF0gKyBzWzFdfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdCA9IGBvcHRpb24gJHt0aXRsZX1gO1xyXG4gICAgb3B0aW9uLmFwcGVuZChpY29uLCBwYXJhKTtcclxuICAgIGxpLmFwcGVuZChvcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBsaTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51U2NyZWVuKCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QgPSAnbWVudVBhZ2UgcGFnZSc7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWxlY3RDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NlbGVjdENvbnQnO1xyXG5cclxuICAgIGNvbnN0IGRlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBkZWYuY2xhc3NMaXN0ID0gJ2RlZmF1bHRfb3B0aW9uJztcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBzZWxlY3QuY2xhc3NMaXN0ID0gJ3NlbGVjdF91bCBpbmFjdGl2ZSc7XHJcbiAgICBkZWYuYXBwZW5kKGFkZE9wdGlvbignQ29mZmVlJykpO1xyXG4gICAgc2VsZWN0LmFwcGVuZChhZGRPcHRpb24oJ0NvZmZlZScpLCBhZGRPcHRpb24oJ090aGVyIEJldmVyYWdlcycpLFxyXG4gICAgYWRkT3B0aW9uKCdEZXNzZXJ0JyksIGFkZE9wdGlvbignQWRkIE9ucycpKTtcclxuICAgIHNlbGVjdENvbnRhaW5lci5hcHBlbmQoZGVmLCBzZWxlY3QpO1xyXG5cclxuICAgIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluTWVudS5jbGFzc0xpc3QgPSAnbWFpbk1lbnUnO1xyXG5cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvZHVjdHMuY2xhc3NMaXN0ID0gJ3Byb2R1Y3RzJzsgIFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZW51T3B0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBwcm9kdWN0cy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZiAocHJvZFtvcHRpb25zXSkgXHJcbiAgICAgICAgICAgIHByb2Rbb3B0aW9uc10uZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMuYXBwZW5kKG9wdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgICBjaGFuZ2VNZW51T3B0aW9uKFwiQ29mZmVlXCIpO1xyXG4gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKTtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlTWVudU9wdGlvbihvcHRpb24udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgfSwgMCk7XHJcblxyXG4gICAgIFxyXG5cclxuICAgIG1haW5NZW51LmFwcGVuZChzZWxlY3RDb250YWluZXIsIHByb2R1Y3RzKTtcclxuXHJcblxyXG4gICAgbWVudS5hcHBlbmQoaGVhZGVyKCdtZW51JyksIG1haW5NZW51LCBmb290ZXIoKSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZXBhZ2UnO1xyXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XHJcbmltcG9ydCB7YWRkT3B0aW9ufSBmcm9tICcuL21lbnUnO1xyXG5cclxuY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbmxldCBjdXJyZW50UGFnZSA9ICdob21lJztcclxuZnVuY3Rpb24gbG9hZFBhZ2UocGFnZSkge1xyXG4gICAgb3V0cHV0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKHBhZ2UgPT09ICdob21lJylcclxuICAgICAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XHJcbiAgICBlbHNlIGlmIChwYWdlID09PSAnbWVudScpIFxyXG4gICAgICAgIG91dHB1dC5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcclxuICAgIGVsc2VcclxuICAgICAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UoKSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VNZW51KG9wdGlvbikge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKTtcclxuICAgIGxldCBkZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdF9vcHRpb24nKTtcclxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X3VsJyk7XHJcbiAgICBkZWYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkZWYuYXBwZW5kKGFkZE9wdGlvbihvcHRpb24ucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50KSk7XHJcbiAgICBzZWxlY3QuY2xhc3NMaXN0ID0gJ3NlbGVjdF91bCBpbmFjdGl2ZSc7XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpKSB7XHJcbiAgICAgICAgbG9hZFBhZ2UoJ2hvbWUnKTtcclxuICAgICAgICBjdXJyZW50UGFnZSA9ICdob21lJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpIHx8IGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ1dHRvbicpKSB7XHJcbiAgICAgICAgbG9hZFBhZ2UoJ21lbnUnKTtcclxuICAgICAgICBjdXJyZW50UGFnZSA9ICdtZW51JztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpKSB7XHJcbiAgICAgICAgbG9hZFBhZ2UoJ2NvbnRhY3QnKTtcclxuICAgICAgICBjdXJyZW50UGFnZSA9ICdjb250YWN0JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IFwibWVudVwiKSB7XHJcbiAgICAgICAgbGV0IGRlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0X29wdGlvbicpO1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X3VsJyk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZGVmIHx8IGUudGFyZ2V0ID09PSBkZWYuY2hpbGRyZW5bMF0gfHwgZS50YXJnZXQgPT09IGRlZi5jaGlsZHJlblswXS5jaGlsZHJlblswXSB8fCBlLnRhcmdldCA9PT0gZGVmLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdIHx8IGUudGFyZ2V0ID09PSBkZWYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeT1zZWxlY3QuY2xhc3NMaXN0LnZhbHVlID09PSAnc2VsZWN0X3VsIGluYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QgPSAnc2VsZWN0X3VsIGFjdGl2ZSc7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QgPSAnc2VsZWN0X3VsIGluYWN0aXZlJztcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0ID0gJ3NlbGVjdF91bCBpbmFjdGl2ZSc7XHJcblxyXG5cclxuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBvcHRpb24gfHwgZS50YXJnZXQgPT09IG9wdGlvbi5jaGlsZHJlblswXSB8fCBlLnRhcmdldCA9PT0gb3B0aW9uLmNoaWxkcmVuWzFdKSBcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1lbnUob3B0aW9uKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoJ2hvbWUnKSk7XHJcblxyXG4gICAgXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=