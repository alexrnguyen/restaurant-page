"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* || General Styles */
:root {
  --primary-color: white;
  --secondary-color: lightgray;
}

body {
  margin: 0;
}

h1 {
  text-align: center;
  margin-top: 0;
}

#content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#content > div {
  margin: 1rem 5vw;
}

/* || Navigation Bar */

.nav-bar {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: var(--secondary-color);
}

.logo {
  font-size: 1.5rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 1rem;
  background-color: transparent;
  border: none;
  text-decoration: none;
}

.nav-link:hover {
  color: white;
}

.nav-link .active {
  text-decoration: underline;
}

/* || Home Page */

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
}

.home-img {
  place-self: center;
  width: 100%;
}

.book-table {
  position: absolute;
  bottom: 0%;
  right: 0%;
  transform: translate(-1rem, -1rem);
  background-color: var(--secondary-color);
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
  padding: 1em 2em;
}

.book-table:hover {
  background-color: var(--primary-color);
}

.description {
  text-align: center;
}

.location-hours-container {
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  gap: 1rem;
  background-color: var(--secondary-color);
  border-radius: 10px;
  padding: 2rem;
}

.location-hours-container h3 {
  margin-top: 0;
}

.location-container,
.hours-container {
  justify-items: center;
  text-align: center;
}

.divider {
  background-color: var(--primary-color);
}

/* || About Page */

/* || Menu Page */

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.menu-item-container {
  background-color: var(--secondary-color);
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  gap: 1rem;
  min-height: 10rem;
  border-radius: 10px;
  padding: 1rem;
}

.item-name {
  justify-self: start;
  align-self: end;
  grid-row: 1;
  grid-column: 2;
}

.item-img {
  align-self: center;
  width: 200px;
  height: 200px;
  object-fit: cover;
  grid-row: span 3;
}

.item-description {
  justify-self: start;
  align-self: center;
  grid-row: 2;
  grid-column: 2;
}

.item-price {
  justify-self: start;
  grid-row: 3;
  grid-column: 2;
}

/* || Reservations Page */

/* || Contact Page */

/* || Footer */

.footer {
  margin-top: auto;
  height: max(5vh, 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,sBAAsB;;AAEtB;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,kCAAkC;EAClC,wCAAwC;EACxC,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,sCAAsC;EACtC,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,wCAAwC;EACxC,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;AACxC;;AAEA,kBAAkB;;AAElB,iBAAiB;;AAEjB;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;;AAEA;EACE,wCAAwC;EACxC,aAAa;EACb,gCAAgC;EAChC,+BAA+B;EAC/B,SAAS;EACT,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,cAAc;AAChB;;AAEA,yBAAyB;;AAEzB,oBAAoB;;AAEpB,cAAc;;AAEd;EACE,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;AAC7B","sourcesContent":["/* || General Styles */\r\n:root {\r\n  --primary-color: white;\r\n  --secondary-color: lightgray;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin-top: 0;\r\n}\r\n\r\n#content {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#content > div {\r\n  margin: 1rem 5vw;\r\n}\r\n\r\n/* || Navigation Bar */\r\n\r\n.nav-bar {\r\n  position: sticky;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem 3rem;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.logo {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-links {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 3rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav-link {\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: white;\r\n}\r\n\r\n.nav-link .active {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* || Home Page */\r\n\r\n.home {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.image-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 50%;\r\n}\r\n\r\n.home-img {\r\n  place-self: center;\r\n  width: 100%;\r\n}\r\n\r\n.book-table {\r\n  position: absolute;\r\n  bottom: 0%;\r\n  right: 0%;\r\n  transform: translate(-1rem, -1rem);\r\n  background-color: var(--secondary-color);\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 4px rgba(0, 0, 0, 0.5);\r\n  padding: 1em 2em;\r\n}\r\n\r\n.book-table:hover {\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.description {\r\n  text-align: center;\r\n}\r\n\r\n.location-hours-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2px 1fr;\r\n  gap: 1rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 10px;\r\n  padding: 2rem;\r\n}\r\n\r\n.location-hours-container h3 {\r\n  margin-top: 0;\r\n}\r\n\r\n.location-container,\r\n.hours-container {\r\n  justify-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.divider {\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n/* || About Page */\r\n\r\n/* || Menu Page */\r\n\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n.menu-item-container {\r\n  background-color: var(--secondary-color);\r\n  display: grid;\r\n  grid-template-columns: 200px 1fr;\r\n  grid-template-rows: 1fr 2fr 1fr;\r\n  gap: 1rem;\r\n  min-height: 10rem;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n}\r\n\r\n.item-name {\r\n  justify-self: start;\r\n  align-self: end;\r\n  grid-row: 1;\r\n  grid-column: 2;\r\n}\r\n\r\n.item-img {\r\n  align-self: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n  grid-row: span 3;\r\n}\r\n\r\n.item-description {\r\n  justify-self: start;\r\n  align-self: center;\r\n  grid-row: 2;\r\n  grid-column: 2;\r\n}\r\n\r\n.item-price {\r\n  justify-self: start;\r\n  grid-row: 3;\r\n  grid-column: 2;\r\n}\r\n\r\n/* || Reservations Page */\r\n\r\n/* || Contact Page */\r\n\r\n/* || Footer */\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  height: max(5vh, 1rem);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: lightgray;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_reservations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reservations */ "./src/pages/reservations.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");







const loadHome = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])());

  // Add event listener for Book Table button
  const bookTableButton = document.querySelector(".book-table");
  bookTableButton.addEventListener("click", () =>
    loadReservations(mainContent)
  );
};

const loadAbout = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild((0,_pages_about__WEBPACK_IMPORTED_MODULE_2__["default"])());
};

const loadMenu = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild((0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
};

const loadReservations = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild((0,_pages_reservations__WEBPACK_IMPORTED_MODULE_4__["default"])());
};

const loadContact = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild((0,_pages_contact__WEBPACK_IMPORTED_MODULE_5__["default"])());
};

const initializeWebsite = () => {
  (0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const content = document.getElementById("content");
  const mainContent = document.getElementById("main-content");
  loadHome(mainContent);

  // Navigation Links
  const logo = document.querySelector(".logo");
  const aboutButton = document.querySelector(".about");
  const menuButton = document.querySelector(".menu");
  const reservationsButton = document.querySelector(".reservations");
  const contactButton = document.querySelector(".contact-us");

  // Event Listeners
  logo.addEventListener("click", () => loadHome(mainContent));
  aboutButton.addEventListener("click", () => loadAbout(mainContent));
  menuButton.addEventListener("click", () => loadMenu(mainContent));
  reservationsButton.addEventListener("click", () =>
    loadReservations(mainContent)
  );
  contactButton.addEventListener("click", () => loadContact(mainContent));
};

initializeWebsite();


/***/ }),

/***/ "./src/models/MenuItem.js":
/*!********************************!*\
  !*** ./src/models/MenuItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItem: () => (/* binding */ MenuItem)
/* harmony export */ });
class MenuItem {
  constructor(name, img, description, price) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.price = price;
  }
}


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/style.css */ "./src/css/style.css");


/**
 *
 */
const pageLoad = () => {
  const content = document.getElementById("content");
  const mainContent = document.createElement("div");
  mainContent.id = "main-content";
  content.appendChild(createNavBar());
  content.appendChild(mainContent);
  content.appendChild(createFooter());
};

const createNavBar = () => {
  const navBar = document.createElement("header");
  navBar.classList.add("nav-bar");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Odin Restaurant";

  const navLinks = document.createElement("ul");
  navLinks.classList.add("nav-links");

  const linkNames = ["About", "Menu", "Reservations", "Contact Us"];

  for (const linkName of linkNames) {
    const link = document.createElement("button");
    link.classList.add("nav-link");
    link.classList.add(linkName.replace(" ", "-").toLowerCase());
    link.textContent = linkName;
    navLinks.appendChild(link);
  }

  navBar.appendChild(logo);
  navBar.appendChild(navLinks);

  return navBar;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("span");
  copyright.className = "copyright";
  copyright.textContent = "© 2023 Odin Restaurant. All rights reserved";

  footer.appendChild(copyright);
  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAbout = () => {
  const aboutContent = document.createElement("div");
  aboutContent.className = "about";

  const header = document.createElement("h1");
  header.textContent = "About Us";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
    Neque gravida in fermentum et sollicitudin ac orci. Sodales ut etiam sit amet nisl purus in mollis. Nunc id cursus 
    metus aliquam eleifend mi in nulla. In egestas erat imperdiet sed euismod. Netus et malesuada fames ac. Ante in nibh 
    mauris cursus. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Nunc mi ipsum faucibus vitae. Sed id 
    semper risus in hendrerit gravida rutrum. Donec enim diam vulputate ut pharetra sit amet aliquam. Pharetra vel turpis 
    nunc eget lorem dolor sed viverra ipsum. Ultricies mi eget mauris pharetra. Viverra maecenas accumsan lacus vel facilisis 
    volutpat est. Felis donec et odio pellentesque diam volutpat commodo. Neque aliquam vestibulum morbi blandit. Integer 
    feugiat scelerisque varius morbi. Ultrices neque ornare aenean euismod.`;

  aboutContent.appendChild(header);
  aboutContent.appendChild(aboutParagraph);
  return aboutContent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContact = () => {
  const contactContent = document.createElement("div");
  contactContent.className = "contact-us";

  const header = document.createElement("h1");
  header.textContent = "Contact Us";

  contactContent.appendChild(header);
  return contactContent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_img_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/assets/img/image.jpg */ "./src/assets/img/image.jpg");
/* harmony import */ var _reservations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservations */ "./src/pages/reservations.js");



const createHome = () => {
  const homeContent = document.createElement("div");
  homeContent.className = "home";

  const header = document.createElement("h1");
  header.textContent = "Odin Restaurant";

  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  const image = new Image();
  image.src = _src_assets_img_image_jpg__WEBPACK_IMPORTED_MODULE_0__;
  image.classList.add("home-img");
  imageContainer.appendChild(image);

  const bookTableButton = document.createElement("button");
  bookTableButton.className = "book-table";
  bookTableButton.textContent = "Book a Table";
  imageContainer.appendChild(bookTableButton);

  const description = document.createElement("p");
  description.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum.`;
  description.classList.add("description");

  const locationHoursContainer = document.createElement("div");
  locationHoursContainer.className = "location-hours-container";

  const divider = document.createElement("div");
  divider.className = "divider";

  locationHoursContainer.appendChild(createLocationContainer());
  locationHoursContainer.appendChild(divider);
  locationHoursContainer.appendChild(createHoursContainer());

  homeContent.appendChild(header);
  homeContent.appendChild(imageContainer);
  homeContent.appendChild(description);
  homeContent.appendChild(locationHoursContainer);

  return homeContent;
};

const createLocationContainer = () => {
  const locationContainer = document.createElement("div");
  locationContainer.className = "location-container";

  const header = document.createElement("h3");
  header.className = "location-header";
  header.textContent = "Address";

  const address = document.createElement("div");
  address.className = "address";
  address.textContent = "9570 118 Ave NW, Edmonton, AB";

  locationContainer.appendChild(header);
  locationContainer.appendChild(address);
  return locationContainer;
};

const createHoursContainer = () => {
  const hoursContainer = document.createElement("div");
  hoursContainer.className = "hours-container";

  const header = document.createElement("h3");
  header.className = "hours-header";
  header.textContent = "Hours";

  const weekdayHours = document.createElement("div");
  weekdayHours.className = "weekday-hours";
  weekdayHours.innerHTML =
    '<p><span class="days-of-week">Mon-Thurs: <span/>8am-8pm<p/>';

  const weekendHours = document.createElement("div");
  weekendHours.className = "weekend-hours";
  weekendHours.innerHTML =
    '<p><span class="days-of-week">Fri-Sun: <span/>8am-11pm<p/>';

  hoursContainer.appendChild(header);
  hoursContainer.appendChild(weekdayHours);
  hoursContainer.appendChild(weekendHours);

  return hoursContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/MenuItem */ "./src/models/MenuItem.js");
/* harmony import */ var _assets_img_menu_items_poke_bowl_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/menu-items/poke-bowl.jpg */ "./src/assets/img/menu-items/poke-bowl.jpg");
/* harmony import */ var _assets_img_menu_items_salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/menu-items/salad.jpg */ "./src/assets/img/menu-items/salad.jpg");
/* harmony import */ var _assets_img_menu_items_sirloinsteak_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/menu-items/sirloinsteak.jpg */ "./src/assets/img/menu-items/sirloinsteak.jpg");


// Images




const createMenu = () => {
  const menuContent = document.createElement("div");
  menuContent.className = "menu";

  const header = document.createElement("h1");
  header.textContent = "Menu";

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  generateMenuItems(menuGrid);

  menuContent.appendChild(header);
  menuContent.appendChild(menuGrid);
  return menuContent;
};

const generateMenuItems = (menuGrid) => {
  const pokeBowlDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const pokeBowl = new _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__.MenuItem("Poke Bowl", _assets_img_menu_items_poke_bowl_jpg__WEBPACK_IMPORTED_MODULE_1__, pokeBowlDescription, 15);
  menuGrid.appendChild(createMenuItem(pokeBowl));

  const saladDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const salad = new _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__.MenuItem("Salad", _assets_img_menu_items_salad_jpg__WEBPACK_IMPORTED_MODULE_2__, saladDescription, 12);
  menuGrid.appendChild(createMenuItem(salad));

  const sirloinSteakDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const sirloinSteak = new _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__.MenuItem(
    "Sirloin Steak",
    _assets_img_menu_items_sirloinsteak_jpg__WEBPACK_IMPORTED_MODULE_3__,
    sirloinSteakDescription,
    27
  );
  menuGrid.appendChild(createMenuItem(sirloinSteak));
};

const createMenuItem = ({ name, img, description, price }) => {
  const menuItemContainer = document.createElement("div");
  menuItemContainer.className = "menu-item-container";

  // Create menu item components (name, image, description, price)
  const itemName = document.createElement("h3");
  itemName.className = "item-name";
  itemName.textContent = name;

  const itemImage = new Image();
  itemImage.classList = "item-img";
  itemImage.src = img;

  const itemDescription = document.createElement("p");
  itemDescription.className = "item-description";
  itemDescription.textContent = description;

  const itemPrice = document.createElement("div");
  itemPrice.className = "item-price";
  itemPrice.textContent = `\$${price}`;

  // Add menu item components to container
  menuItemContainer.appendChild(itemName);
  menuItemContainer.appendChild(itemImage);
  menuItemContainer.appendChild(itemDescription);
  menuItemContainer.appendChild(itemPrice);

  return menuItemContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/pages/reservations.js":
/*!***********************************!*\
  !*** ./src/pages/reservations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createReservations = () => {
  const reservationsContent = document.createElement("div");
  reservationsContent.className = "reservations";

  const header = document.createElement("h1");
  header.textContent = "Make a Reservation";

  reservationsContent.appendChild(header);
  return reservationsContent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReservations);


/***/ }),

/***/ "./src/assets/img/image.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/image.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7241b52906cfd899dc32.jpg";

/***/ }),

/***/ "./src/assets/img/menu-items/poke-bowl.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/menu-items/poke-bowl.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6507395ce29d44d83ba4.jpg";

/***/ }),

/***/ "./src/assets/img/menu-items/salad.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/menu-items/salad.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d099939c78f2a1e84d14.jpg";

/***/ }),

/***/ "./src/assets/img/menu-items/sirloinsteak.jpg":
/*!****************************************************!*\
  !*** ./src/assets/img/menu-items/sirloinsteak.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04c70580649fafa3b2da.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMkZBQTJGLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFP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Ozs7O0FDekUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZGVscy9NZW51SXRlbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvcmVzZXJ2YXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiB8fCBHZW5lcmFsIFN0eWxlcyAqL1xyXG46cm9vdCB7XHJcbiAgLS1wcmltYXJ5LWNvbG9yOiB3aGl0ZTtcclxuICAtLXNlY29uZGFyeS1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2NvbnRlbnQgPiBkaXYge1xyXG4gIG1hcmdpbjogMXJlbSA1dnc7XHJcbn1cclxuXHJcbi8qIHx8IE5hdmlnYXRpb24gQmFyICovXHJcblxyXG4ubmF2LWJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDNyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LWxpbmsgLmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8qIHx8IEhvbWUgUGFnZSAqL1xyXG5cclxuLmhvbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaG9tZS1pbWcge1xyXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvb2stdGFibGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDAlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXJlbSwgLTFyZW0pO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHBhZGRpbmc6IDFlbSAyZW07XHJcbn1cclxuXHJcbi5ib29rLXRhYmxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1ob3Vycy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMnB4IDFmcjtcclxuICBnYXA6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1ob3Vycy1jb250YWluZXIgaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1jb250YWluZXIsXHJcbi5ob3Vycy1jb250YWluZXIge1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLyogfHwgQWJvdXQgUGFnZSAqL1xyXG5cclxuLyogfHwgTWVudSBQYWdlICovXHJcblxyXG4ubWVudS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTAwcHgsIDFmcikpO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLm1lbnUtaXRlbS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xyXG4gIGdhcDogMXJlbTtcclxuICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG59XHJcblxyXG4uaXRlbS1pbWcge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBncmlkLXJvdzogc3BhbiAzO1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbn1cclxuXHJcbi5pdGVtLXByaWNlIHtcclxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIGdyaWQtcm93OiAzO1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG59XHJcblxyXG4vKiB8fCBSZXNlcnZhdGlvbnMgUGFnZSAqL1xyXG5cclxuLyogfHwgQ29udGFjdCBQYWdlICovXHJcblxyXG4vKiB8fCBGb290ZXIgKi9cclxuXHJcbi5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgaGVpZ2h0OiBtYXgoNXZoLCAxcmVtKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBLGtCQUFrQjs7QUFFbEIsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQSx5QkFBeUI7O0FBRXpCLG9CQUFvQjs7QUFFcEIsY0FBYzs7QUFFZDtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHx8IEdlbmVyYWwgU3R5bGVzICovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCA+IGRpdiB7XFxyXFxuICBtYXJnaW46IDFyZW0gNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBOYXZpZ2F0aW9uIEJhciAqL1xcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsgLmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgSG9tZSBQYWdlICovXFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWltZyB7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stdGFibGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwJTtcXHJcXG4gIHJpZ2h0OiAwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcmVtLCAtMXJlbSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbi1ob3Vycy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJweCAxZnI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbi1ob3Vycy1jb250YWluZXIgaDMge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLWNvbnRhaW5lcixcXHJcXG4uaG91cnMtY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdmlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IEFib3V0IFBhZ2UgKi9cXHJcXG5cXHJcXG4vKiB8fCBNZW51IFBhZ2UgKi9cXHJcXG5cXHJcXG4ubWVudS1ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1uYW1lIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1pbWcge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgZ3JpZC1yb3c6IHNwYW4gMztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXByaWNlIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICBncmlkLXJvdzogMztcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBSZXNlcnZhdGlvbnMgUGFnZSAqL1xcclxcblxcclxcbi8qIHx8IENvbnRhY3QgUGFnZSAqL1xcclxcblxcclxcbi8qIHx8IEZvb3RlciAqL1xcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGhlaWdodDogbWF4KDV2aCwgMXJlbSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xyXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVBYm91dCBmcm9tIFwiLi9wYWdlcy9hYm91dFwiO1xyXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9wYWdlcy9tZW51XCI7XHJcbmltcG9ydCBjcmVhdGVSZXNlcnZhdGlvbnMgZnJvbSBcIi4vcGFnZXMvcmVzZXJ2YXRpb25zXCI7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL3BhZ2VzL2NvbnRhY3RcIjtcclxuXHJcbmNvbnN0IGxvYWRIb21lID0gKG1haW5Db250ZW50KSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xyXG5cclxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIEJvb2sgVGFibGUgYnV0dG9uXHJcbiAgY29uc3QgYm9va1RhYmxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLXRhYmxlXCIpO1xyXG4gIGJvb2tUYWJsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgIGxvYWRSZXNlcnZhdGlvbnMobWFpbkNvbnRlbnQpXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRBYm91dCA9IChtYWluQ29udGVudCkgPT4ge1xyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXQoKSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkTWVudSA9IChtYWluQ29udGVudCkgPT4ge1xyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRSZXNlcnZhdGlvbnMgPSAobWFpbkNvbnRlbnQpID0+IHtcclxuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVJlc2VydmF0aW9ucygpKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRDb250YWN0ID0gKG1haW5Db250ZW50KSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSAoKSA9PiB7XHJcbiAgcGFnZUxvYWQoKTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIik7XHJcbiAgbG9hZEhvbWUobWFpbkNvbnRlbnQpO1xyXG5cclxuICAvLyBOYXZpZ2F0aW9uIExpbmtzXHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKTtcclxuICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XHJcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuICBjb25zdCByZXNlcnZhdGlvbnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2VydmF0aW9uc1wiKTtcclxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LXVzXCIpO1xyXG5cclxuICAvLyBFdmVudCBMaXN0ZW5lcnNcclxuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkSG9tZShtYWluQ29udGVudCkpO1xyXG4gIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkQWJvdXQobWFpbkNvbnRlbnQpKTtcclxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkTWVudShtYWluQ29udGVudCkpO1xyXG4gIHJlc2VydmF0aW9uc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgIGxvYWRSZXNlcnZhdGlvbnMobWFpbkNvbnRlbnQpXHJcbiAgKTtcclxuICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkQ29udGFjdChtYWluQ29udGVudCkpO1xyXG59O1xyXG5cclxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcclxuIiwiZXhwb3J0IGNsYXNzIE1lbnVJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpbWcsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaW1nID0gaW1nO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCIuLi9zcmMvY3NzL3N0eWxlLmNzc1wiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYWluQ29udGVudC5pZCA9IFwibWFpbi1jb250ZW50XCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1iYXJcIik7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiT2RpbiBSZXN0YXVyYW50XCI7XHJcblxyXG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIG5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIik7XHJcblxyXG4gIGNvbnN0IGxpbmtOYW1lcyA9IFtcIkFib3V0XCIsIFwiTWVudVwiLCBcIlJlc2VydmF0aW9uc1wiLCBcIkNvbnRhY3QgVXNcIl07XHJcblxyXG4gIGZvciAoY29uc3QgbGlua05hbWUgb2YgbGlua05hbWVzKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rXCIpO1xyXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKGxpbmtOYW1lLnJlcGxhY2UoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBsaW5rTmFtZTtcclxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gIH1cclxuXHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XHJcblxyXG4gIHJldHVybiBuYXZCYXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuXHJcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29weXJpZ2h0LmNsYXNzTmFtZSA9IFwiY29weXJpZ2h0XCI7XHJcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gXCLCqSAyMDIzIE9kaW4gUmVzdGF1cmFudC4gQWxsIHJpZ2h0cyByZXNlcnZlZFwiO1xyXG5cclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcclxuICByZXR1cm4gZm9vdGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7XHJcbiIsImNvbnN0IGNyZWF0ZUFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRDb250ZW50LmNsYXNzTmFtZSA9IFwiYWJvdXRcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcclxuXHJcbiAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhYm91dFBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCBcclxuICAgIHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBFZ2VzdGFzIGVnZXN0YXMgZnJpbmdpbGxhIHBoYXNlbGx1cyBmYXVjaWJ1cyBzY2VsZXJpc3F1ZSBlbGVpZmVuZCBkb25lYyBwcmV0aXVtLiBcclxuICAgIE5lcXVlIGdyYXZpZGEgaW4gZmVybWVudHVtIGV0IHNvbGxpY2l0dWRpbiBhYyBvcmNpLiBTb2RhbGVzIHV0IGV0aWFtIHNpdCBhbWV0IG5pc2wgcHVydXMgaW4gbW9sbGlzLiBOdW5jIGlkIGN1cnN1cyBcclxuICAgIG1ldHVzIGFsaXF1YW0gZWxlaWZlbmQgbWkgaW4gbnVsbGEuIEluIGVnZXN0YXMgZXJhdCBpbXBlcmRpZXQgc2VkIGV1aXNtb2QuIE5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYy4gQW50ZSBpbiBuaWJoIFxyXG4gICAgbWF1cmlzIGN1cnN1cy4gUmhvbmN1cyBtYXR0aXMgcmhvbmN1cyB1cm5hIG5lcXVlIHZpdmVycmEganVzdG8gbmVjIHVsdHJpY2VzIGR1aS4gTnVuYyBtaSBpcHN1bSBmYXVjaWJ1cyB2aXRhZS4gU2VkIGlkIFxyXG4gICAgc2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdCBncmF2aWRhIHJ1dHJ1bS4gRG9uZWMgZW5pbSBkaWFtIHZ1bHB1dGF0ZSB1dCBwaGFyZXRyYSBzaXQgYW1ldCBhbGlxdWFtLiBQaGFyZXRyYSB2ZWwgdHVycGlzIFxyXG4gICAgbnVuYyBlZ2V0IGxvcmVtIGRvbG9yIHNlZCB2aXZlcnJhIGlwc3VtLiBVbHRyaWNpZXMgbWkgZWdldCBtYXVyaXMgcGhhcmV0cmEuIFZpdmVycmEgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcyBcclxuICAgIHZvbHV0cGF0IGVzdC4gRmVsaXMgZG9uZWMgZXQgb2RpbyBwZWxsZW50ZXNxdWUgZGlhbSB2b2x1dHBhdCBjb21tb2RvLiBOZXF1ZSBhbGlxdWFtIHZlc3RpYnVsdW0gbW9yYmkgYmxhbmRpdC4gSW50ZWdlciBcclxuICAgIGZldWdpYXQgc2NlbGVyaXNxdWUgdmFyaXVzIG1vcmJpLiBVbHRyaWNlcyBuZXF1ZSBvcm5hcmUgYWVuZWFuIGV1aXNtb2QuYDtcclxuXHJcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcclxuICByZXR1cm4gYWJvdXRDb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQ7XHJcbiIsImNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3RDb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGFjdC11c1wiO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcblxyXG4gIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgcmV0dXJuIGNvbnRhY3RDb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcclxuIiwiaW1wb3J0IEhvbWVJbWFnZSBmcm9tIFwiLi4vLi4vc3JjL2Fzc2V0cy9pbWcvaW1hZ2UuanBnXCI7XHJcbmltcG9ydCBjcmVhdGVSZXNlcnZhdGlvbnMgZnJvbSBcIi4vcmVzZXJ2YXRpb25zXCI7XHJcblxyXG5jb25zdCBjcmVhdGVIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lQ29udGVudC5jbGFzc05hbWUgPSBcImhvbWVcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiT2RpbiBSZXN0YXVyYW50XCI7XHJcblxyXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbWFnZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImltYWdlLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltYWdlLnNyYyA9IEhvbWVJbWFnZTtcclxuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbWdcIik7XHJcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICBjb25zdCBib29rVGFibGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJvb2tUYWJsZUJ1dHRvbi5jbGFzc05hbWUgPSBcImJvb2stdGFibGVcIjtcclxuICBib29rVGFibGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkJvb2sgYSBUYWJsZVwiO1xyXG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvb2tUYWJsZUJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gXHJcbiAgICBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlclxyXG4gICAgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBcclxuICAgIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyBcclxuICAgIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIFxyXG4gICAgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLmA7XHJcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhdGlvbkhvdXJzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibG9jYXRpb24taG91cnMtY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdmlkZXIuY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XHJcblxyXG4gIGxvY2F0aW9uSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb25Db250YWluZXIoKSk7XHJcbiAgbG9jYXRpb25Ib3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZpZGVyKTtcclxuICBsb2NhdGlvbkhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzQ29udGFpbmVyKCkpO1xyXG5cclxuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcclxuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25Ib3Vyc0NvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBob21lQ29udGVudDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUxvY2F0aW9uQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImxvY2F0aW9uLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwibG9jYXRpb24taGVhZGVyXCI7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGRyZXNzXCI7XHJcblxyXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZHJlc3MuY2xhc3NOYW1lID0gXCJhZGRyZXNzXCI7XHJcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiOTU3MCAxMTggQXZlIE5XLCBFZG1vbnRvbiwgQUJcIjtcclxuXHJcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuICByZXR1cm4gbG9jYXRpb25Db250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVIb3Vyc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG91cnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJob3Vycy1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImhvdXJzLWhlYWRlclwiO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuXHJcbiAgY29uc3Qgd2Vla2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWVrZGF5SG91cnMuY2xhc3NOYW1lID0gXCJ3ZWVrZGF5LWhvdXJzXCI7XHJcbiAgd2Vla2RheUhvdXJzLmlubmVySFRNTCA9XHJcbiAgICAnPHA+PHNwYW4gY2xhc3M9XCJkYXlzLW9mLXdlZWtcIj5Nb24tVGh1cnM6IDxzcGFuLz44YW0tOHBtPHAvPic7XHJcblxyXG4gIGNvbnN0IHdlZWtlbmRIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2Vla2VuZEhvdXJzLmNsYXNzTmFtZSA9IFwid2Vla2VuZC1ob3Vyc1wiO1xyXG4gIHdlZWtlbmRIb3Vycy5pbm5lckhUTUwgPVxyXG4gICAgJzxwPjxzcGFuIGNsYXNzPVwiZGF5cy1vZi13ZWVrXCI+RnJpLVN1bjogPHNwYW4vPjhhbS0xMXBtPHAvPic7XHJcblxyXG4gIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla2RheUhvdXJzKTtcclxuICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrZW5kSG91cnMpO1xyXG5cclxuICByZXR1cm4gaG91cnNDb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xyXG4iLCJpbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gXCIuLi9tb2RlbHMvTWVudUl0ZW1cIjtcclxuXHJcbi8vIEltYWdlc1xyXG5pbXBvcnQgUG9rZUJvd2wgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvbWVudS1pdGVtcy9wb2tlLWJvd2wuanBnXCI7XHJcbmltcG9ydCBTYWxhZCBmcm9tIFwiLi4vYXNzZXRzL2ltZy9tZW51LWl0ZW1zL3NhbGFkLmpwZ1wiO1xyXG5pbXBvcnQgU2lybG9pblN0ZWFrIGZyb20gXCIuLi9hc3NldHMvaW1nL21lbnUtaXRlbXMvc2lybG9pbnN0ZWFrLmpwZ1wiO1xyXG5cclxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUNvbnRlbnQuY2xhc3NOYW1lID0gXCJtZW51XCI7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHJcbiAgY29uc3QgbWVudUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVHcmlkLmNsYXNzTmFtZSA9IFwibWVudS1ncmlkXCI7XHJcblxyXG4gIGdlbmVyYXRlTWVudUl0ZW1zKG1lbnVHcmlkKTtcclxuXHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51R3JpZCk7XHJcbiAgcmV0dXJuIG1lbnVDb250ZW50O1xyXG59O1xyXG5cclxuY29uc3QgZ2VuZXJhdGVNZW51SXRlbXMgPSAobWVudUdyaWQpID0+IHtcclxuICBjb25zdCBwb2tlQm93bERlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3QgcG9rZUJvd2wgPSBuZXcgTWVudUl0ZW0oXCJQb2tlIEJvd2xcIiwgUG9rZUJvd2wsIHBva2VCb3dsRGVzY3JpcHRpb24sIDE1KTtcclxuICBtZW51R3JpZC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShwb2tlQm93bCkpO1xyXG5cclxuICBjb25zdCBzYWxhZERlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3Qgc2FsYWQgPSBuZXcgTWVudUl0ZW0oXCJTYWxhZFwiLCBTYWxhZCwgc2FsYWREZXNjcmlwdGlvbiwgMTIpO1xyXG4gIG1lbnVHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKHNhbGFkKSk7XHJcblxyXG4gIGNvbnN0IHNpcmxvaW5TdGVha0Rlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3Qgc2lybG9pblN0ZWFrID0gbmV3IE1lbnVJdGVtKFxyXG4gICAgXCJTaXJsb2luIFN0ZWFrXCIsXHJcbiAgICBTaXJsb2luU3RlYWssXHJcbiAgICBzaXJsb2luU3RlYWtEZXNjcmlwdGlvbixcclxuICAgIDI3XHJcbiAgKTtcclxuICBtZW51R3JpZC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShzaXJsb2luU3RlYWspKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKHsgbmFtZSwgaW1nLCBkZXNjcmlwdGlvbiwgcHJpY2UgfSkgPT4ge1xyXG4gIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbS1jb250YWluZXJcIjtcclxuXHJcbiAgLy8gQ3JlYXRlIG1lbnUgaXRlbSBjb21wb25lbnRzIChuYW1lLCBpbWFnZSwgZGVzY3JpcHRpb24sIHByaWNlKVxyXG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGl0ZW1OYW1lLmNsYXNzTmFtZSA9IFwiaXRlbS1uYW1lXCI7XHJcbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICBjb25zdCBpdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpdGVtSW1hZ2UuY2xhc3NMaXN0ID0gXCJpdGVtLWltZ1wiO1xyXG4gIGl0ZW1JbWFnZS5zcmMgPSBpbWc7XHJcblxyXG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcIml0ZW0tZGVzY3JpcHRpb25cIjtcclxuICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpdGVtUHJpY2UuY2xhc3NOYW1lID0gXCJpdGVtLXByaWNlXCI7XHJcbiAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gYFxcJCR7cHJpY2V9YDtcclxuXHJcbiAgLy8gQWRkIG1lbnUgaXRlbSBjb21wb25lbnRzIHRvIGNvbnRhaW5lclxyXG4gIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XHJcbiAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVJdGVtQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcclxuIiwiY29uc3QgY3JlYXRlUmVzZXJ2YXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlc2VydmF0aW9uc0NvbnRlbnQuY2xhc3NOYW1lID0gXCJyZXNlcnZhdGlvbnNcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWFrZSBhIFJlc2VydmF0aW9uXCI7XHJcblxyXG4gIHJlc2VydmF0aW9uc0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICByZXR1cm4gcmVzZXJ2YXRpb25zQ29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlc2VydmF0aW9ucztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9