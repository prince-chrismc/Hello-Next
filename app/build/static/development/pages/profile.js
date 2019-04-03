((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/profile.js"],{

/***/ "../node_modules/react/index.js":
/*!********************************************************************************************!*\
  !*** delegated ../node_modules/react/index.js from dll-reference dll_73e8bfded11ff8003f2f ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_73e8bfded11ff8003f2f */ "dll-reference dll_73e8bfded11ff8003f2f"))("../node_modules/react/index.js");

/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);




// Just another page.
var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Profile");
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/profile")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/profile', function() {
module.exports = __webpack_require__(/*! ./pages/profile.js */"./pages/profile.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_73e8bfded11ff8003f2f":
/*!*******************************************!*\
  !*** external "dll_73e8bfded11ff8003f2f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_73e8bfded11ff8003f2f;

/***/ })

},[[4,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=profile.js.map