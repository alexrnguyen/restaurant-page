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
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

h1 {
  text-align: center;
  margin-top: 0;
}

label {
  display: block;
}

#content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#content > div {
  margin: 1rem 5vw;
}

.contact-page,
.reservation-page,
.about-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.nav-link.active {
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
  text-align: center;
}

.divider {
  background-color: var(--primary-color);
}

/* || About Page */

.about-paragraph {
  padding: 2rem;
  border-radius: 20px;
  width: fit-content;
  background-color: var(--secondary-color);
}

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

.reservation-container {
  padding: 2rem;
  border-radius: 20px;
  width: fit-content;
  background-color: var(--secondary-color);
}

.reservation-container form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.reservation-container input,
.reservation-container select {
  border-radius: 5px;
  min-height: 1.5rem;
  width: 100%;
  font-size: 1rem;
  border: 1px solid black;
}

.submit-button {
  align-self: center;
  padding: 1rem 2rem;
  font-size: 1rem;
}

/* || Contact Page */

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 2rem;
  border-radius: 20px;
  width: fit-content;
  background-color: var(--secondary-color);
}

.content-container form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.content-container form h3 {
  text-align: center;
}

.content-container input,
textarea {
  border-radius: 5px;
  min-height: 1.5rem;
  width: 100%;
  font-size: 1rem;
  border: 1px solid black;
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
  resize: none;
}

.send-button {
  align-self: center;
  padding: 1rem 3rem;
  font-size: 1rem;
}

iframe {
  border: none;
}

/* || Footer */

.footer {
  margin-top: auto;
  height: max(5vh, 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/* || General Styles */\r\n:root {\r\n  --primary-color: white;\r\n  --secondary-color: lightgray;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin: 0;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin-top: 0;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n}\r\n\r\n#content {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#content > div {\r\n  margin: 1rem 5vw;\r\n}\r\n\r\n.contact-page,\r\n.reservation-page,\r\n.about-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/* || Navigation Bar */\r\n\r\n.nav-bar {\r\n  position: sticky;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem 3rem;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.logo {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-links {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 3rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav-link {\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: white;\r\n}\r\n\r\n.nav-link.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* || Home Page */\r\n\r\n.home {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.image-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 50%;\r\n}\r\n\r\n.home-img {\r\n  place-self: center;\r\n  width: 100%;\r\n}\r\n\r\n.book-table {\r\n  position: absolute;\r\n  bottom: 0%;\r\n  right: 0%;\r\n  transform: translate(-1rem, -1rem);\r\n  background-color: var(--secondary-color);\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 4px rgba(0, 0, 0, 0.5);\r\n  padding: 1em 2em;\r\n}\r\n\r\n.book-table:hover {\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.description {\r\n  text-align: center;\r\n}\r\n\r\n.location-hours-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2px 1fr;\r\n  gap: 1rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 10px;\r\n  padding: 2rem;\r\n}\r\n\r\n.location-hours-container h3 {\r\n  margin-top: 0;\r\n}\r\n\r\n.location-container,\r\n.hours-container {\r\n  text-align: center;\r\n}\r\n\r\n.divider {\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n/* || About Page */\r\n\r\n.about-paragraph {\r\n  padding: 2rem;\r\n  border-radius: 20px;\r\n  width: fit-content;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n/* || Menu Page */\r\n\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n.menu-item-container {\r\n  background-color: var(--secondary-color);\r\n  display: grid;\r\n  grid-template-columns: 200px 1fr;\r\n  grid-template-rows: 1fr 2fr 1fr;\r\n  gap: 1rem;\r\n  min-height: 10rem;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n}\r\n\r\n.item-name {\r\n  justify-self: start;\r\n  align-self: end;\r\n  grid-row: 1;\r\n  grid-column: 2;\r\n}\r\n\r\n.item-img {\r\n  align-self: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n  grid-row: span 3;\r\n}\r\n\r\n.item-description {\r\n  justify-self: start;\r\n  align-self: center;\r\n  grid-row: 2;\r\n  grid-column: 2;\r\n}\r\n\r\n.item-price {\r\n  justify-self: start;\r\n  grid-row: 3;\r\n  grid-column: 2;\r\n}\r\n\r\n/* || Reservations Page */\r\n\r\n.reservation-container {\r\n  padding: 2rem;\r\n  border-radius: 20px;\r\n  width: fit-content;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.reservation-container form {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.reservation-container input,\r\n.reservation-container select {\r\n  border-radius: 5px;\r\n  min-height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  border: 1px solid black;\r\n}\r\n\r\n.submit-button {\r\n  align-self: center;\r\n  padding: 1rem 2rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* || Contact Page */\r\n\r\n.content-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 5rem;\r\n  padding: 2rem;\r\n  border-radius: 20px;\r\n  width: fit-content;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.content-container form {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.content-container form h3 {\r\n  text-align: center;\r\n}\r\n\r\n.content-container input,\r\ntextarea {\r\n  border-radius: 5px;\r\n  min-height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  border: 1px solid black;\r\n}\r\n\r\ntextarea {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  resize: none;\r\n}\r\n\r\n.send-button {\r\n  align-self: center;\r\n  padding: 1rem 3rem;\r\n  font-size: 1rem;\r\n}\r\n\r\niframe {\r\n  border: none;\r\n}\r\n\r\n/* || Footer */\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  height: max(5vh, 1rem);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: lightgray;\r\n}\r\n"],"sourceRoot":""}]);
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

const setLinkActive = (link, navLinks) => {
  Array.from(navLinks).forEach((navLink) => navLink.classList.remove("active"));
  link.classList.add("active");
};

const initializeWebsite = () => {
  (0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const content = document.getElementById("content");
  const mainContent = document.getElementById("main-content");
  loadHome(mainContent);

  // Navigation Links
  const navLinks = document.querySelectorAll(".nav-link");
  const logo = document.querySelector(".logo");
  const aboutButton = document.querySelector(".about");
  const menuButton = document.querySelector(".menu");
  const reservationsButton = document.querySelector(".reservations");
  const contactButton = document.querySelector(".contact-us");

  // Event Listeners
  logo.addEventListener("click", () => {
    Array.from(navLinks).forEach((navLink) =>
      navLink.classList.remove("active")
    );
    loadHome(mainContent);
  });
  aboutButton.addEventListener("click", () => {
    setLinkActive(aboutButton, navLinks);
    loadAbout(mainContent);
  });
  menuButton.addEventListener("click", () => {
    setLinkActive(menuButton, navLinks);
    loadMenu(mainContent);
  });
  reservationsButton.addEventListener("click", () => {
    setLinkActive(reservationsButton, navLinks);
    loadReservations(mainContent);
  });
  contactButton.addEventListener("click", () => {
    setLinkActive(contactButton, navLinks);
    loadContact(mainContent);
  });
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
  aboutContent.className = "about-page";

  const header = document.createElement("h1");
  header.textContent = "About Us";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.className = "about-paragraph";
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
  contactContent.className = "contact-page";

  const header = document.createElement("h1");
  header.textContent = "Contact Us";

  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";

  contentContainer.appendChild(createForm());
  contentContainer.appendChild(createMapSnapshot());

  contactContent.appendChild(header);
  contactContent.appendChild(contentContainer);
  return contactContent;
};

const createForm = () => {
  const contactForm = document.createElement("form");
  contactForm.id = "contact-form";
  contactForm.action = "/";
  contactForm.method = "post";

  const formHeader = document.createElement("h3");
  formHeader.className = "form-header";
  formHeader.textContent = "Message Us";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "name";
  nameInputLabel.textContent = "Full Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);

  // Email
  const emailInputContainer = document.createElement("div");
  const emailInputLabel = document.createElement("label");
  emailInputLabel.for = "email";
  emailInputLabel.textContent = "Email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.required = true;
  emailInput.placeholder = "eg. johnsmith@gmail.com";

  emailInputContainer.appendChild(emailInputLabel);
  emailInputContainer.appendChild(emailInput);

  // Message
  const messageInputContainer = document.createElement("div");
  const messageInputLabel = document.createElement("label");
  messageInputLabel.for = "message";
  messageInputLabel.textContent = "Message";

  const messageInput = document.createElement("textarea");
  messageInput.name = "message";
  messageInput.id = "message";
  messageInput.required = true;
  messageInput.rows = 10;
  messageInput.cols = 50;
  messageInput.placeholder = "Type a message...";

  messageInputContainer.appendChild(messageInputLabel);
  messageInputContainer.appendChild(messageInput);

  // Send Button
  const sendButton = document.createElement("button");
  sendButton.type = "submit";
  sendButton.className = "send-button";
  sendButton.textContent = "Send";

  contactForm.appendChild(formHeader);
  contactForm.appendChild(nameInputContainer);
  contactForm.appendChild(emailInputContainer);
  contactForm.appendChild(messageInputContainer);
  contactForm.appendChild(sendButton);

  contactForm.onsubmit = (event) => {
    event.preventDefault();
  };
  return contactForm;
};

const createMapSnapshot = () => {
  const mapSnapshot = document.createElement("iframe");
  mapSnapshot.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.08040429647184!2d-113.48963308241525!3d53.57056495070463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02309c5d8aa23%3A0xf8f4a86e5afd906f!2s9570%20118%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5G%200P1!5e0!3m2!1sen!2sca!4v1691552720657!5m2!1sen!2sca";
  mapSnapshot.width = "600";
  mapSnapshot.height = "450";
  return mapSnapshot;
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
/* harmony import */ var _assets_img_menu_items_ribs_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/menu-items/ribs.jpg */ "./src/assets/img/menu-items/ribs.jpg");
/* harmony import */ var _assets_img_menu_items_sushi_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/menu-items/sushi.jpg */ "./src/assets/img/menu-items/sushi.jpg");
/* harmony import */ var _assets_img_menu_items_burger_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/menu-items/burger.jpg */ "./src/assets/img/menu-items/burger.jpg");


// Images







const createMenu = () => {
  const menuContent = document.createElement("div");
  menuContent.className = "menu-page";

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

  const ribsDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const ribs = new _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__.MenuItem("Ribs", _assets_img_menu_items_ribs_jpg__WEBPACK_IMPORTED_MODULE_4__, ribsDescription, 23);
  menuGrid.appendChild(createMenuItem(ribs));

  const sushiDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const sushi = new _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__.MenuItem("Sushi", _assets_img_menu_items_sushi_jpg__WEBPACK_IMPORTED_MODULE_5__, sushiDescription, 25);
  menuGrid.appendChild(createMenuItem(sushi));

  const burgerDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const burger = new _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__.MenuItem("Burger", _assets_img_menu_items_burger_jpg__WEBPACK_IMPORTED_MODULE_6__, burgerDescription, 18);
  menuGrid.appendChild(createMenuItem(burger));
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
  reservationsContent.className = "reservation-page";

  const header = document.createElement("h1");
  header.textContent = "Make a Reservation";

  const reservationContainer = document.createElement("div");
  reservationContainer.className = "reservation-container";
  reservationContainer.appendChild(createForm());

  reservationsContent.appendChild(header);
  reservationsContent.appendChild(reservationContainer);
  return reservationsContent;
};

const createForm = () => {
  const reservationForm = document.createElement("form");
  reservationForm.id = "reservation-form";
  reservationForm.action = "/";
  reservationForm.method = "post";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "name";
  nameInputLabel.textContent = "Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);

  // Date
  const dateInputContainer = document.createElement("div");
  const dateInputLabel = document.createElement("label");
  dateInputLabel.for = "date";
  dateInputLabel.textContent = "Date";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "date";
  dateInput.id = "date";
  dateInput.required = true;
  dateInput.min = new Date()
    .toISOString()
    .replace(/T.*/, "")
    .split("-")
    .join("-");

  dateInputContainer.appendChild(dateInputLabel);
  dateInputContainer.appendChild(dateInput);

  // Time
  const timeInputContainer = document.createElement("div");
  const timeInputLabel = document.createElement("label");
  timeInputLabel.for = "time";
  timeInputLabel.textContent = "Time";

  const timeInput = document.createElement("select");
  timeInput.name = "time";
  timeInput.id = "time";
  timeInput.required = true;

  timeInput.add(addPlaceholder());

  dateInput.onchange = () => {
    timeInput.innerHTML = "";
    // Add placeholder back if date input is cleared
    if (dateInput.valueAsDate === null) {
      timeInput.add(addPlaceholder());
      return;
    }
    const dayOfWeek = dateInput.valueAsDate.getDay();
    let closingHour;
    // Monday - Thursday (close at 8pm -> 20:00)
    if (dayOfWeek < 4) {
      closingHour = 20;
    } else {
      closingHour = 23;
    }
    for (let time = 8; time < closingHour; time = time + 0.5) {
      const option = document.createElement("option");
      // Determine text content based on whether the time ends in :00 or :30
      option.text = `${time % 1 === 0 ? time : time - 0.5}:${
        time % 1 === 0 ? "00" : "30"
      }`;
      if (time === 8) {
        option.selected = "selected";
      }
      timeInput.add(option);
    }
  };

  timeInputContainer.appendChild(timeInputLabel);
  timeInputContainer.appendChild(timeInput);

  // Number of People
  const numPeopleContainer = document.createElement("div");
  const numPeopleLabel = document.createElement("label");
  numPeopleLabel.for = "num-people";
  numPeopleLabel.textContent = "Number of Guests (up to 10)";

  const numPeopleInput = document.createElement("select");
  numPeopleInput.name = "num-people";
  numPeopleInput.id = "num-people";
  numPeopleInput.required = true;

  for (let i = 1; i < 11; i++) {
    const option = document.createElement("option");
    option.text = i;

    // Select 2 guests by default
    if (i === 2) {
      option.selected = "selected";
    }
    numPeopleInput.add(option);
  }

  numPeopleContainer.appendChild(numPeopleLabel);
  numPeopleContainer.appendChild(numPeopleInput);
  // Submit Button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "submit-button";
  submitButton.textContent = "Submit";

  // Add components to form element
  reservationForm.appendChild(nameInputContainer);
  reservationForm.appendChild(dateInputContainer);
  reservationForm.appendChild(timeInputContainer);
  reservationForm.appendChild(numPeopleContainer);
  reservationForm.appendChild(submitButton);

  reservationForm.onsubmit = (event) => {
    event.preventDefault();
  };
  return reservationForm;
};

const addPlaceholder = () => {
  const placeholder = document.createElement("option");
  placeholder.textContent = "Please choose the date first!";
  placeholder.selected = true;
  placeholder.disabled = true;
  placeholder.hidden = true;
  return placeholder;
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

/***/ "./src/assets/img/menu-items/burger.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/menu-items/burger.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dde79c6817293b91628.jpg";

/***/ }),

/***/ "./src/assets/img/menu-items/poke-bowl.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/menu-items/poke-bowl.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6507395ce29d44d83ba4.jpg";

/***/ }),

/***/ "./src/assets/img/menu-items/ribs.jpg":
/*!********************************************!*\
  !*** ./src/assets/img/menu-items/ribs.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18323ddd8d970c003915.jpg";

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

/***/ }),

/***/ "./src/assets/img/menu-items/sushi.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/menu-items/sushi.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2103cedd004b6a66aa86.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJGQUEyRixNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckR4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kZWxzL01lbnVJdGVtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9yZXNlcnZhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHx8IEdlbmVyYWwgU3R5bGVzICovXHJcbjpyb290IHtcclxuICAtLXByaW1hcnktY29sb3I6IHdoaXRlO1xyXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNjb250ZW50ID4gZGl2IHtcclxuICBtYXJnaW46IDFyZW0gNXZ3O1xyXG59XHJcblxyXG4uY29udGFjdC1wYWdlLFxyXG4ucmVzZXJ2YXRpb24tcGFnZSxcclxuLmFib3V0LXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi8qIHx8IE5hdmlnYXRpb24gQmFyICovXHJcblxyXG4ubmF2LWJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDNyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LWxpbmsuYWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLyogfHwgSG9tZSBQYWdlICovXHJcblxyXG4uaG9tZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5ob21lLWltZyB7XHJcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9vay10YWJsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgcmlnaHQ6IDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcmVtLCAtMXJlbSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgcGFkZGluZzogMWVtIDJlbTtcclxufVxyXG5cclxuLmJvb2stdGFibGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvY2F0aW9uLWhvdXJzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAycHggMWZyO1xyXG4gIGdhcDogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmxvY2F0aW9uLWhvdXJzLWNvbnRhaW5lciBoMyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmxvY2F0aW9uLWNvbnRhaW5lcixcclxuLmhvdXJzLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi8qIHx8IEFib3V0IFBhZ2UgKi9cclxuXHJcbi5hYm91dC1wYXJhZ3JhcGgge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLyogfHwgTWVudSBQYWdlICovXHJcblxyXG4ubWVudS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTAwcHgsIDFmcikpO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLm1lbnUtaXRlbS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xyXG4gIGdhcDogMXJlbTtcclxuICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG59XHJcblxyXG4uaXRlbS1pbWcge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBncmlkLXJvdzogc3BhbiAzO1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbn1cclxuXHJcbi5pdGVtLXByaWNlIHtcclxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIGdyaWQtcm93OiAzO1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG59XHJcblxyXG4vKiB8fCBSZXNlcnZhdGlvbnMgUGFnZSAqL1xyXG5cclxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyIGZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5yZXNlcnZhdGlvbi1jb250YWluZXIgaW5wdXQsXHJcbi5yZXNlcnZhdGlvbi1jb250YWluZXIgc2VsZWN0IHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWluLWhlaWdodDogMS41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4vKiB8fCBDb250YWN0IFBhZ2UgKi9cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDVyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIgZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIGZvcm0gaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIGlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZW5kLWJ1dHRvbiB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiB8fCBGb290ZXIgKi9cclxuXHJcbi5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgaGVpZ2h0OiBtYXgoNXZoLCAxcmVtKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4v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QUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHx8IEdlbmVyYWwgU3R5bGVzICovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCA+IGRpdiB7XFxyXFxuICBtYXJnaW46IDFyZW0gNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlLFxcclxcbi5yZXNlcnZhdGlvbi1wYWdlLFxcclxcbi5hYm91dC1wYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4vKiB8fCBOYXZpZ2F0aW9uIEJhciAqL1xcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsuYWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBIb21lIFBhZ2UgKi9cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtaW1nIHtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay10YWJsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDAlO1xcclxcbiAgcmlnaHQ6IDAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFyZW0sIC0xcmVtKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBwYWRkaW5nOiAxZW0gMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay10YWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLWhvdXJzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMnB4IDFmcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLWhvdXJzLWNvbnRhaW5lciBoMyB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24tY29udGFpbmVyLFxcclxcbi5ob3Vycy1jb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2aWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgQWJvdXQgUGFnZSAqL1xcclxcblxcclxcbi5hYm91dC1wYXJhZ3JhcGgge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBNZW51IFBhZ2UgKi9cXHJcXG5cXHJcXG4ubWVudS1ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1uYW1lIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1pbWcge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgZ3JpZC1yb3c6IHNwYW4gMztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXByaWNlIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICBncmlkLXJvdzogMztcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBSZXNlcnZhdGlvbnMgUGFnZSAqL1xcclxcblxcclxcbi5yZXNlcnZhdGlvbi1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciBpbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHx8IENvbnRhY3QgUGFnZSAqL1xcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA1cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXIgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXIgZm9ybSBoMyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciBpbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbmQtYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaWZyYW1lIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgRm9vdGVyICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBtYXgoNXZoLCAxcmVtKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZS1sb2FkXCI7XHJcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gXCIuL3BhZ2VzL2Fib3V0XCI7XHJcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL3BhZ2VzL21lbnVcIjtcclxuaW1wb3J0IGNyZWF0ZVJlc2VydmF0aW9ucyBmcm9tIFwiLi9wYWdlcy9yZXNlcnZhdGlvbnNcIjtcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vcGFnZXMvY29udGFjdFwiO1xyXG5cclxuY29uc3QgbG9hZEhvbWUgPSAobWFpbkNvbnRlbnQpID0+IHtcclxuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XHJcblxyXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgQm9vayBUYWJsZSBidXR0b25cclxuICBjb25zdCBib29rVGFibGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stdGFibGVcIik7XHJcbiAgYm9va1RhYmxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgbG9hZFJlc2VydmF0aW9ucyhtYWluQ29udGVudClcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZEFib3V0ID0gKG1haW5Db250ZW50KSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYm91dCgpKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRNZW51ID0gKG1haW5Db250ZW50KSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZFJlc2VydmF0aW9ucyA9IChtYWluQ29udGVudCkgPT4ge1xyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUmVzZXJ2YXRpb25zKCkpO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZENvbnRhY3QgPSAobWFpbkNvbnRlbnQpID0+IHtcclxuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRMaW5rQWN0aXZlID0gKGxpbmssIG5hdkxpbmtzKSA9PiB7XHJcbiAgQXJyYXkuZnJvbShuYXZMaW5rcykuZm9yRWFjaCgobmF2TGluaykgPT4gbmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9ICgpID0+IHtcclxuICBwYWdlTG9hZCgpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKTtcclxuICBsb2FkSG9tZShtYWluQ29udGVudCk7XHJcblxyXG4gIC8vIE5hdmlnYXRpb24gTGlua3NcclxuICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKTtcclxuICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XHJcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuICBjb25zdCByZXNlcnZhdGlvbnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2VydmF0aW9uc1wiKTtcclxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LXVzXCIpO1xyXG5cclxuICAvLyBFdmVudCBMaXN0ZW5lcnNcclxuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKG5hdkxpbmtzKS5mb3JFYWNoKChuYXZMaW5rKSA9PlxyXG4gICAgICBuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcclxuICAgICk7XHJcbiAgICBsb2FkSG9tZShtYWluQ29udGVudCk7XHJcbiAgfSk7XHJcbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNldExpbmtBY3RpdmUoYWJvdXRCdXR0b24sIG5hdkxpbmtzKTtcclxuICAgIGxvYWRBYm91dChtYWluQ29udGVudCk7XHJcbiAgfSk7XHJcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc2V0TGlua0FjdGl2ZShtZW51QnV0dG9uLCBuYXZMaW5rcyk7XHJcbiAgICBsb2FkTWVudShtYWluQ29udGVudCk7XHJcbiAgfSk7XHJcbiAgcmVzZXJ2YXRpb25zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzZXRMaW5rQWN0aXZlKHJlc2VydmF0aW9uc0J1dHRvbiwgbmF2TGlua3MpO1xyXG4gICAgbG9hZFJlc2VydmF0aW9ucyhtYWluQ29udGVudCk7XHJcbiAgfSk7XHJcbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc2V0TGlua0FjdGl2ZShjb250YWN0QnV0dG9uLCBuYXZMaW5rcyk7XHJcbiAgICBsb2FkQ29udGFjdChtYWluQ29udGVudCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xyXG4iLCJleHBvcnQgY2xhc3MgTWVudUl0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGltZywgZGVzY3JpcHRpb24sIHByaWNlKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pbWcgPSBpbWc7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBcIi4uL3NyYy9jc3Mvc3R5bGUuY3NzXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1haW5Db250ZW50LmlkID0gXCJtYWluLWNvbnRlbnRcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcclxuXHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuICBsb2dvLnRleHRDb250ZW50ID0gXCJPZGluIFJlc3RhdXJhbnRcIjtcclxuXHJcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgbmF2TGlua3MuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKTtcclxuXHJcbiAgY29uc3QgbGlua05hbWVzID0gW1wiQWJvdXRcIiwgXCJNZW51XCIsIFwiUmVzZXJ2YXRpb25zXCIsIFwiQ29udGFjdCBVc1wiXTtcclxuXHJcbiAgZm9yIChjb25zdCBsaW5rTmFtZSBvZiBsaW5rTmFtZXMpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtcIik7XHJcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQobGlua05hbWUucmVwbGFjZShcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgbGluay50ZXh0Q29udGVudCA9IGxpbmtOYW1lO1xyXG4gICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgfVxyXG5cclxuICBuYXZCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcclxuXHJcbiAgcmV0dXJuIG5hdkJhcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG5cclxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb3B5cmlnaHQuY2xhc3NOYW1lID0gXCJjb3B5cmlnaHRcIjtcclxuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIsKpIDIwMjMgT2RpbiBSZXN0YXVyYW50LiBBbGwgcmlnaHRzIHJlc2VydmVkXCI7XHJcblxyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcclxuIiwiY29uc3QgY3JlYXRlQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dENvbnRlbnQuY2xhc3NOYW1lID0gXCJhYm91dC1wYWdlXCI7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XHJcblxyXG4gIGNvbnN0IGFib3V0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWJvdXRQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJhYm91dC1wYXJhZ3JhcGhcIjtcclxuICBhYm91dFBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCBcclxuICAgIHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBFZ2VzdGFzIGVnZXN0YXMgZnJpbmdpbGxhIHBoYXNlbGx1cyBmYXVjaWJ1cyBzY2VsZXJpc3F1ZSBlbGVpZmVuZCBkb25lYyBwcmV0aXVtLiBcclxuICAgIE5lcXVlIGdyYXZpZGEgaW4gZmVybWVudHVtIGV0IHNvbGxpY2l0dWRpbiBhYyBvcmNpLiBTb2RhbGVzIHV0IGV0aWFtIHNpdCBhbWV0IG5pc2wgcHVydXMgaW4gbW9sbGlzLiBOdW5jIGlkIGN1cnN1cyBcclxuICAgIG1ldHVzIGFsaXF1YW0gZWxlaWZlbmQgbWkgaW4gbnVsbGEuIEluIGVnZXN0YXMgZXJhdCBpbXBlcmRpZXQgc2VkIGV1aXNtb2QuIE5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYy4gQW50ZSBpbiBuaWJoIFxyXG4gICAgbWF1cmlzIGN1cnN1cy4gUmhvbmN1cyBtYXR0aXMgcmhvbmN1cyB1cm5hIG5lcXVlIHZpdmVycmEganVzdG8gbmVjIHVsdHJpY2VzIGR1aS4gTnVuYyBtaSBpcHN1bSBmYXVjaWJ1cyB2aXRhZS4gU2VkIGlkIFxyXG4gICAgc2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdCBncmF2aWRhIHJ1dHJ1bS4gRG9uZWMgZW5pbSBkaWFtIHZ1bHB1dGF0ZSB1dCBwaGFyZXRyYSBzaXQgYW1ldCBhbGlxdWFtLiBQaGFyZXRyYSB2ZWwgdHVycGlzIFxyXG4gICAgbnVuYyBlZ2V0IGxvcmVtIGRvbG9yIHNlZCB2aXZlcnJhIGlwc3VtLiBVbHRyaWNpZXMgbWkgZWdldCBtYXVyaXMgcGhhcmV0cmEuIFZpdmVycmEgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcyBcclxuICAgIHZvbHV0cGF0IGVzdC4gRmVsaXMgZG9uZWMgZXQgb2RpbyBwZWxsZW50ZXNxdWUgZGlhbSB2b2x1dHBhdCBjb21tb2RvLiBOZXF1ZSBhbGlxdWFtIHZlc3RpYnVsdW0gbW9yYmkgYmxhbmRpdC4gSW50ZWdlciBcclxuICAgIGZldWdpYXQgc2NlbGVyaXNxdWUgdmFyaXVzIG1vcmJpLiBVbHRyaWNlcyBuZXF1ZSBvcm5hcmUgYWVuZWFuIGV1aXNtb2QuYDtcclxuXHJcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcclxuICByZXR1cm4gYWJvdXRDb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQ7XHJcbiIsImNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3RDb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGFjdC1wYWdlXCI7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcclxuXHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRlbnQtY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKTtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcFNuYXBzaG90KCkpO1xyXG5cclxuICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xyXG4gIHJldHVybiBjb250YWN0Q29udGVudDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBjb250YWN0Rm9ybS5pZCA9IFwiY29udGFjdC1mb3JtXCI7XHJcbiAgY29udGFjdEZvcm0uYWN0aW9uID0gXCIvXCI7XHJcbiAgY29udGFjdEZvcm0ubWV0aG9kID0gXCJwb3N0XCI7XHJcblxyXG4gIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgZm9ybUhlYWRlci5jbGFzc05hbWUgPSBcImZvcm0taGVhZGVyXCI7XHJcbiAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVzc2FnZSBVc1wiO1xyXG5cclxuICAvLyBOYW1lXHJcbiAgY29uc3QgbmFtZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBuYW1lSW5wdXRMYWJlbC5mb3IgPSBcIm5hbWVcIjtcclxuICBuYW1lSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRnVsbCBOYW1lXCI7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIG5hbWVJbnB1dC5uYW1lID0gXCJuYW1lXCI7XHJcbiAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XHJcbiAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVJbnB1dExhYmVsKTtcclxuICBuYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgLy8gRW1haWxcclxuICBjb25zdCBlbWFpbElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBlbWFpbElucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZW1haWxJbnB1dExhYmVsLmZvciA9IFwiZW1haWxcIjtcclxuICBlbWFpbElucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkVtYWlsXCI7XHJcblxyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZW1haWxJbnB1dC50eXBlID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsSW5wdXQubmFtZSA9IFwiZW1haWxcIjtcclxuICBlbWFpbElucHV0LmlkID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSBcImVnLiBqb2huc21pdGhAZ21haWwuY29tXCI7XHJcblxyXG4gIGVtYWlsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dExhYmVsKTtcclxuICBlbWFpbElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xyXG5cclxuICAvLyBNZXNzYWdlXHJcbiAgY29uc3QgbWVzc2FnZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBtZXNzYWdlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBtZXNzYWdlSW5wdXRMYWJlbC5mb3IgPSBcIm1lc3NhZ2VcIjtcclxuICBtZXNzYWdlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiTWVzc2FnZVwiO1xyXG5cclxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbWVzc2FnZUlucHV0Lm5hbWUgPSBcIm1lc3NhZ2VcIjtcclxuICBtZXNzYWdlSW5wdXQuaWQgPSBcIm1lc3NhZ2VcIjtcclxuICBtZXNzYWdlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gIG1lc3NhZ2VJbnB1dC5yb3dzID0gMTA7XHJcbiAgbWVzc2FnZUlucHV0LmNvbHMgPSA1MDtcclxuICBtZXNzYWdlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlR5cGUgYSBtZXNzYWdlLi4uXCI7XHJcblxyXG4gIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXRMYWJlbCk7XHJcbiAgbWVzc2FnZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XHJcblxyXG4gIC8vIFNlbmQgQnV0dG9uXHJcbiAgY29uc3Qgc2VuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc2VuZEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICBzZW5kQnV0dG9uLmNsYXNzTmFtZSA9IFwic2VuZC1idXR0b25cIjtcclxuICBzZW5kQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kXCI7XHJcblxyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dENvbnRhaW5lcik7XHJcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dENvbnRhaW5lcik7XHJcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0Q29udGFpbmVyKTtcclxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChzZW5kQnV0dG9uKTtcclxuXHJcbiAgY29udGFjdEZvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuICByZXR1cm4gY29udGFjdEZvcm07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNYXBTbmFwc2hvdCA9ICgpID0+IHtcclxuICBjb25zdCBtYXBTbmFwc2hvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgbWFwU25hcHNob3Quc3JjID1cclxuICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNDk4LjA4MDQwNDI5NjQ3MTg0ITJkLTExMy40ODk2MzMwODI0MTUyNSEzZDUzLjU3MDU2NDk1MDcwNDYzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg1M2EwMjMwOWM1ZDhhYTIzJTNBMHhmOGY0YTg2ZTVhZmQ5MDZmITJzOTU3MCUyMDExOCUyMEF2ZSUyME5XJTJDJTIwRWRtb250b24lMkMlMjBBQiUyMFQ1RyUyMDBQMSE1ZTAhM20yITFzZW4hMnNjYSE0djE2OTE1NTI3MjA2NTchNW0yITFzZW4hMnNjYVwiO1xyXG4gIG1hcFNuYXBzaG90LndpZHRoID0gXCI2MDBcIjtcclxuICBtYXBTbmFwc2hvdC5oZWlnaHQgPSBcIjQ1MFwiO1xyXG4gIHJldHVybiBtYXBTbmFwc2hvdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7XHJcbiIsImltcG9ydCBIb21lSW1hZ2UgZnJvbSBcIi4uLy4uL3NyYy9hc3NldHMvaW1nL2ltYWdlLmpwZ1wiO1xyXG5pbXBvcnQgY3JlYXRlUmVzZXJ2YXRpb25zIGZyb20gXCIuL3Jlc2VydmF0aW9uc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZUNvbnRlbnQuY2xhc3NOYW1lID0gXCJob21lXCI7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk9kaW4gUmVzdGF1cmFudFwiO1xyXG5cclxuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbWFnZS1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWFnZS5zcmMgPSBIb21lSW1hZ2U7XHJcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1nXCIpO1xyXG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgY29uc3QgYm9va1RhYmxlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBib29rVGFibGVCdXR0b24uY2xhc3NOYW1lID0gXCJib29rLXRhYmxlXCI7XHJcbiAgYm9va1RhYmxlQnV0dG9uLnRleHRDb250ZW50ID0gXCJCb29rIGEgVGFibGVcIjtcclxuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib29rVGFibGVCdXR0b24pO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFxyXG4gICAgTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXJcclxuICAgIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgXHJcbiAgICBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgXHJcbiAgICB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBcclxuICAgIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5gO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25Ib3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9jYXRpb25Ib3Vyc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImxvY2F0aW9uLWhvdXJzLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlclwiO1xyXG5cclxuICBsb2NhdGlvbkhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uQ29udGFpbmVyKCkpO1xyXG4gIGxvY2F0aW9uSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XHJcbiAgbG9jYXRpb25Ib3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb3Vyc0NvbnRhaW5lcigpKTtcclxuXHJcbiAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XHJcbiAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uSG91cnNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gaG9tZUNvbnRlbnQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVMb2NhdGlvbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9jYXRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJsb2NhdGlvbi1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImxvY2F0aW9uLWhlYWRlclwiO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xyXG5cclxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhZGRyZXNzLmNsYXNzTmFtZSA9IFwiYWRkcmVzc1wiO1xyXG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjk1NzAgMTE4IEF2ZSBOVywgRWRtb250b24sIEFCXCI7XHJcblxyXG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgcmV0dXJuIGxvY2F0aW9uQ29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSG91cnNDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvdXJzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaG91cnMtY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJob3Vycy1oZWFkZXJcIjtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcblxyXG4gIGNvbnN0IHdlZWtkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2Vla2RheUhvdXJzLmNsYXNzTmFtZSA9IFwid2Vla2RheS1ob3Vyc1wiO1xyXG4gIHdlZWtkYXlIb3Vycy5pbm5lckhUTUwgPVxyXG4gICAgJzxwPjxzcGFuIGNsYXNzPVwiZGF5cy1vZi13ZWVrXCI+TW9uLVRodXJzOiA8c3Bhbi8+OGFtLThwbTxwLz4nO1xyXG5cclxuICBjb25zdCB3ZWVrZW5kSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdlZWtlbmRIb3Vycy5jbGFzc05hbWUgPSBcIndlZWtlbmQtaG91cnNcIjtcclxuICB3ZWVrZW5kSG91cnMuaW5uZXJIVE1MID1cclxuICAgICc8cD48c3BhbiBjbGFzcz1cImRheXMtb2Ytd2Vla1wiPkZyaS1TdW46IDxzcGFuLz44YW0tMTFwbTxwLz4nO1xyXG5cclxuICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtkYXlIb3Vycyk7XHJcbiAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla2VuZEhvdXJzKTtcclxuXHJcbiAgcmV0dXJuIGhvdXJzQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcclxuIiwiaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL01lbnVJdGVtXCI7XHJcblxyXG4vLyBJbWFnZXNcclxuaW1wb3J0IFBva2VCb3dsIGZyb20gXCIuLi9hc3NldHMvaW1nL21lbnUtaXRlbXMvcG9rZS1ib3dsLmpwZ1wiO1xyXG5pbXBvcnQgU2FsYWQgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvbWVudS1pdGVtcy9zYWxhZC5qcGdcIjtcclxuaW1wb3J0IFNpcmxvaW5TdGVhayBmcm9tIFwiLi4vYXNzZXRzL2ltZy9tZW51LWl0ZW1zL3NpcmxvaW5zdGVhay5qcGdcIjtcclxuaW1wb3J0IFJpYnMgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvbWVudS1pdGVtcy9yaWJzLmpwZ1wiO1xyXG5pbXBvcnQgU3VzaGkgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvbWVudS1pdGVtcy9zdXNoaS5qcGdcIjtcclxuaW1wb3J0IEJ1cmdlciBmcm9tIFwiLi4vYXNzZXRzL2ltZy9tZW51LWl0ZW1zL2J1cmdlci5qcGdcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250ZW50LmNsYXNzTmFtZSA9IFwibWVudS1wYWdlXCI7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHJcbiAgY29uc3QgbWVudUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVHcmlkLmNsYXNzTmFtZSA9IFwibWVudS1ncmlkXCI7XHJcblxyXG4gIGdlbmVyYXRlTWVudUl0ZW1zKG1lbnVHcmlkKTtcclxuXHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51R3JpZCk7XHJcbiAgcmV0dXJuIG1lbnVDb250ZW50O1xyXG59O1xyXG5cclxuY29uc3QgZ2VuZXJhdGVNZW51SXRlbXMgPSAobWVudUdyaWQpID0+IHtcclxuICBjb25zdCBwb2tlQm93bERlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3QgcG9rZUJvd2wgPSBuZXcgTWVudUl0ZW0oXCJQb2tlIEJvd2xcIiwgUG9rZUJvd2wsIHBva2VCb3dsRGVzY3JpcHRpb24sIDE1KTtcclxuICBtZW51R3JpZC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShwb2tlQm93bCkpO1xyXG5cclxuICBjb25zdCBzYWxhZERlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3Qgc2FsYWQgPSBuZXcgTWVudUl0ZW0oXCJTYWxhZFwiLCBTYWxhZCwgc2FsYWREZXNjcmlwdGlvbiwgMTIpO1xyXG4gIG1lbnVHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKHNhbGFkKSk7XHJcblxyXG4gIGNvbnN0IHNpcmxvaW5TdGVha0Rlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3Qgc2lybG9pblN0ZWFrID0gbmV3IE1lbnVJdGVtKFxyXG4gICAgXCJTaXJsb2luIFN0ZWFrXCIsXHJcbiAgICBTaXJsb2luU3RlYWssXHJcbiAgICBzaXJsb2luU3RlYWtEZXNjcmlwdGlvbixcclxuICAgIDI3XHJcbiAgKTtcclxuICBtZW51R3JpZC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShzaXJsb2luU3RlYWspKTtcclxuXHJcbiAgY29uc3Qgcmlic0Rlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3QgcmlicyA9IG5ldyBNZW51SXRlbShcIlJpYnNcIiwgUmlicywgcmlic0Rlc2NyaXB0aW9uLCAyMyk7XHJcbiAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0ocmlicykpO1xyXG5cclxuICBjb25zdCBzdXNoaURlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3Qgc3VzaGkgPSBuZXcgTWVudUl0ZW0oXCJTdXNoaVwiLCBTdXNoaSwgc3VzaGlEZXNjcmlwdGlvbiwgMjUpO1xyXG4gIG1lbnVHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKHN1c2hpKSk7XHJcblxyXG4gIGNvbnN0IGJ1cmdlckRlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLmA7XHJcbiAgY29uc3QgYnVyZ2VyID0gbmV3IE1lbnVJdGVtKFwiQnVyZ2VyXCIsIEJ1cmdlciwgYnVyZ2VyRGVzY3JpcHRpb24sIDE4KTtcclxuICBtZW51R3JpZC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShidXJnZXIpKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKHsgbmFtZSwgaW1nLCBkZXNjcmlwdGlvbiwgcHJpY2UgfSkgPT4ge1xyXG4gIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbS1jb250YWluZXJcIjtcclxuXHJcbiAgLy8gQ3JlYXRlIG1lbnUgaXRlbSBjb21wb25lbnRzIChuYW1lLCBpbWFnZSwgZGVzY3JpcHRpb24sIHByaWNlKVxyXG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGl0ZW1OYW1lLmNsYXNzTmFtZSA9IFwiaXRlbS1uYW1lXCI7XHJcbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICBjb25zdCBpdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpdGVtSW1hZ2UuY2xhc3NMaXN0ID0gXCJpdGVtLWltZ1wiO1xyXG4gIGl0ZW1JbWFnZS5zcmMgPSBpbWc7XHJcblxyXG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcIml0ZW0tZGVzY3JpcHRpb25cIjtcclxuICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpdGVtUHJpY2UuY2xhc3NOYW1lID0gXCJpdGVtLXByaWNlXCI7XHJcbiAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gYFxcJCR7cHJpY2V9YDtcclxuXHJcbiAgLy8gQWRkIG1lbnUgaXRlbSBjb21wb25lbnRzIHRvIGNvbnRhaW5lclxyXG4gIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XHJcbiAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVJdGVtQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcclxuIiwiY29uc3QgY3JlYXRlUmVzZXJ2YXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlc2VydmF0aW9uc0NvbnRlbnQuY2xhc3NOYW1lID0gXCJyZXNlcnZhdGlvbi1wYWdlXCI7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1ha2UgYSBSZXNlcnZhdGlvblwiO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmVzZXJ2YXRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJyZXNlcnZhdGlvbi1jb250YWluZXJcIjtcclxuICByZXNlcnZhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb3JtKCkpO1xyXG5cclxuICByZXNlcnZhdGlvbnNDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgcmVzZXJ2YXRpb25zQ29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkNvbnRhaW5lcik7XHJcbiAgcmV0dXJuIHJlc2VydmF0aW9uc0NvbnRlbnQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5pZCA9IFwicmVzZXJ2YXRpb24tZm9ybVwiO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hY3Rpb24gPSBcIi9cIjtcclxuICByZXNlcnZhdGlvbkZvcm0ubWV0aG9kID0gXCJwb3N0XCI7XHJcblxyXG4gIC8vIE5hbWVcclxuICBjb25zdCBuYW1lSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIG5hbWVJbnB1dExhYmVsLmZvciA9IFwibmFtZVwiO1xyXG4gIG5hbWVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIG5hbWVJbnB1dC5uYW1lID0gXCJuYW1lXCI7XHJcbiAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XHJcbiAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVJbnB1dExhYmVsKTtcclxuICBuYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgLy8gRGF0ZVxyXG4gIGNvbnN0IGRhdGVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGF0ZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZGF0ZUlucHV0TGFiZWwuZm9yID0gXCJkYXRlXCI7XHJcbiAgZGF0ZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcclxuXHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgZGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcclxuICBkYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcclxuICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGRhdGVJbnB1dC5taW4gPSBuZXcgRGF0ZSgpXHJcbiAgICAudG9JU09TdHJpbmcoKVxyXG4gICAgLnJlcGxhY2UoL1QuKi8sIFwiXCIpXHJcbiAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAuam9pbihcIi1cIik7XHJcblxyXG4gIGRhdGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXRMYWJlbCk7XHJcbiAgZGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gIC8vIFRpbWVcclxuICBjb25zdCB0aW1lSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRpbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIHRpbWVJbnB1dExhYmVsLmZvciA9IFwidGltZVwiO1xyXG4gIHRpbWVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lXCI7XHJcblxyXG4gIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgdGltZUlucHV0Lm5hbWUgPSBcInRpbWVcIjtcclxuICB0aW1lSW5wdXQuaWQgPSBcInRpbWVcIjtcclxuICB0aW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICB0aW1lSW5wdXQuYWRkKGFkZFBsYWNlaG9sZGVyKCkpO1xyXG5cclxuICBkYXRlSW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0aW1lSW5wdXQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vIEFkZCBwbGFjZWhvbGRlciBiYWNrIGlmIGRhdGUgaW5wdXQgaXMgY2xlYXJlZFxyXG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aW1lSW5wdXQuYWRkKGFkZFBsYWNlaG9sZGVyKCkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlSW5wdXQudmFsdWVBc0RhdGUuZ2V0RGF5KCk7XHJcbiAgICBsZXQgY2xvc2luZ0hvdXI7XHJcbiAgICAvLyBNb25kYXkgLSBUaHVyc2RheSAoY2xvc2UgYXQgOHBtIC0+IDIwOjAwKVxyXG4gICAgaWYgKGRheU9mV2VlayA8IDQpIHtcclxuICAgICAgY2xvc2luZ0hvdXIgPSAyMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsb3NpbmdIb3VyID0gMjM7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB0aW1lID0gODsgdGltZSA8IGNsb3NpbmdIb3VyOyB0aW1lID0gdGltZSArIDAuNSkge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAvLyBEZXRlcm1pbmUgdGV4dCBjb250ZW50IGJhc2VkIG9uIHdoZXRoZXIgdGhlIHRpbWUgZW5kcyBpbiA6MDAgb3IgOjMwXHJcbiAgICAgIG9wdGlvbi50ZXh0ID0gYCR7dGltZSAlIDEgPT09IDAgPyB0aW1lIDogdGltZSAtIDAuNX06JHtcclxuICAgICAgICB0aW1lICUgMSA9PT0gMCA/IFwiMDBcIiA6IFwiMzBcIlxyXG4gICAgICB9YDtcclxuICAgICAgaWYgKHRpbWUgPT09IDgpIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XHJcbiAgICAgIH1cclxuICAgICAgdGltZUlucHV0LmFkZChvcHRpb24pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHRpbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lSW5wdXRMYWJlbCk7XHJcbiAgdGltZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XHJcblxyXG4gIC8vIE51bWJlciBvZiBQZW9wbGVcclxuICBjb25zdCBudW1QZW9wbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG51bVBlb3BsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIG51bVBlb3BsZUxhYmVsLmZvciA9IFwibnVtLXBlb3BsZVwiO1xyXG4gIG51bVBlb3BsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOdW1iZXIgb2YgR3Vlc3RzICh1cCB0byAxMClcIjtcclxuXHJcbiAgY29uc3QgbnVtUGVvcGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIG51bVBlb3BsZUlucHV0Lm5hbWUgPSBcIm51bS1wZW9wbGVcIjtcclxuICBudW1QZW9wbGVJbnB1dC5pZCA9IFwibnVtLXBlb3BsZVwiO1xyXG4gIG51bVBlb3BsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnRleHQgPSBpO1xyXG5cclxuICAgIC8vIFNlbGVjdCAyIGd1ZXN0cyBieSBkZWZhdWx0XHJcbiAgICBpZiAoaSA9PT0gMikge1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XHJcbiAgICB9XHJcbiAgICBudW1QZW9wbGVJbnB1dC5hZGQob3B0aW9uKTtcclxuICB9XHJcblxyXG4gIG51bVBlb3BsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChudW1QZW9wbGVMYWJlbCk7XHJcbiAgbnVtUGVvcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bVBlb3BsZUlucHV0KTtcclxuICAvLyBTdWJtaXQgQnV0dG9uXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9IFwic3VibWl0LWJ1dHRvblwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XHJcblxyXG4gIC8vIEFkZCBjb21wb25lbnRzIHRvIGZvcm0gZWxlbWVudFxyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXRDb250YWluZXIpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXRDb250YWluZXIpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZCh0aW1lSW5wdXRDb250YWluZXIpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChudW1QZW9wbGVDb250YWluZXIpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICByZXNlcnZhdGlvbkZvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuICByZXR1cm4gcmVzZXJ2YXRpb25Gb3JtO1xyXG59O1xyXG5cclxuY29uc3QgYWRkUGxhY2Vob2xkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gIHBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCJQbGVhc2UgY2hvb3NlIHRoZSBkYXRlIGZpcnN0IVwiO1xyXG4gIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcclxuICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XHJcbiAgcGxhY2Vob2xkZXIuaGlkZGVuID0gdHJ1ZTtcclxuICByZXR1cm4gcGxhY2Vob2xkZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZXNlcnZhdGlvbnM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==