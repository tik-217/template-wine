/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/assets/js/common.js\");\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/assets/js/main.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _proba_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proba.js */ \"./src/assets/js/proba.js\");\n/* harmony import */ var _proba_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_proba_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/common.js":
/*!*********************************!*\
  !*** ./src/assets/js/common.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// up and down mobile menu\r\nlet nav = $('.head_items-wrapper_up_menu_mob > nav');\r\n\r\n$('.close').click(function(){\r\n\tif (nav.css('top') >= '0px'){\r\n\t\tnav.css({'top': '-460px'});\r\n\t}\r\n});\r\n\r\n$('.head_items-wrapper_up_menu_mob_button').click(function(){\r\n\tif (nav.css('top') <= '460px'){\r\n\t\tnav.css({'top': '0'});\r\n\t}\r\n});\r\n\r\n\r\n// button to raise (footer)\r\n$(function(){\r\n\t$('.btn-up').bind('click', function(e){\r\n\t\te.preventDefault();\r\n\t\t$('html, body').animate({scrollTop:0},\"slow\");\r\n\t});\r\n});\r\n\r\n\r\n// changing the color of the circle in the sidebar (hover)\r\n\r\n$('.ctl-content_wrapper_sidebar li').hover(function(){\r\n\t$(this).addClass('change-color');\r\n}, function(){\r\n\t$(this).removeClass('change-color');\r\n});\r\n\r\n// changing the color of the circle in the sidebar (click)\r\n\r\n$('.ctl-content_wrapper_sidebar li').click(function(e){\r\n\t// console.log(e.target.parentElement.children[0].classList[0]);\r\n\r\n\tif ($(this).hasClass('constantly-color') == false){\r\n\t\t$(this).addClass('constantly-color');\r\n\t} else {\r\n\t\t$(this).removeClass('constantly-color');\r\n\t}\r\n});\r\n\r\n// leave review\r\nfunction toggleReview(){\r\n\t// animate of hiding\r\n\t$(\".modal\").animate({\r\n\t\topacity: \"toggle\"\r\n\t}, \"slow\", function(){\r\n\t\t// cancle scrolling\r\n\t\t$('html, body').css('overflow-y', 'visible');\r\n\t});\r\n}\r\n\r\n// open review\r\n$('.btn-leave-review').click(function(){\r\n\ttoggleReview();\t\r\n});\r\n\r\n// close review\r\n$('.modal').click(function(e){\r\n\tswitch ('modal-window') {\r\n\t\tcase (e.target.parentElement.classList[0] || e.target.parentElement.parentElement.classList[0]):\r\n\t\t\t// If you dont check, there will be an error\r\n\t    \tbreak;\r\n\t\tcase e.target.children[0].classList[0]:\r\n\t\t\ttoggleReview();\r\n\t    \tbreak;\r\n\t}\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/common.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// slider\r\n$('.gallery-slider').slick({\r\n\tslidesToShow: 3,\r\n\tslidesToScroll: 1,\r\n\tautoplay: true,\r\n\tautoplaySpeed: 2000,\r\n\tarrows: false,\r\n\tinfinite: true,\r\n\tadaptiveHeight: true,\r\n\tresponsive: [\r\n\t\t{\r\n\t\t\tbreakpoint: 1080,\r\n\t\t\tsettings: {\r\n\t\t\t\tslidesToShow: 2,\r\n\t\t\t}\r\n\t\t},\r\n\t\t{\r\n\t\t\tbreakpoint: 660,\r\n\t\t\tsettings: {\r\n\t\t\t\tslidesToShow: 1,\r\n\t\t\t}\r\n\t\t},\r\n\t]\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/proba.js":
/*!********************************!*\
  !*** ./src/assets/js/proba.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function(){\r\n\t$('.proba_content_slider').slick({\r\n\t\tvertical: true,\r\n\t\tinfinite: true,\r\n\t\tslidesPerRow: 1,\r\n\t\tslidesToShow: 1,\r\n\t\t// adaptiveHeight: true,\r\n\t\tvariableWidth: true,\r\n\t\tarrows: false,\r\n\t\tfocusOnSelect: false,\r\n\t\tswipe: false,\r\n\t\tdots: false,\r\n\t\tasNavFor: '.proba_content_slider_slides_circle',\r\n\t});\r\n\r\n\t$('.proba_content_slider_slides_circle').slick({\r\n        slidesToShow: 3,\r\n\t\tswipe: false,\r\n\t\tvertical: true,\r\n        asNavFor: '.proba_content_slider',\r\n        focusOnSelect: true\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/proba.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/common.js ./src/assets/js/main.js ./src/assets/js/proba.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\tigra_000\\Desktop\\Code\\template_wine\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\tigra_000\\Desktop\\Code\\template_wine\\src\\assets\\js\\common.js */\"./src/assets/js/common.js\");\n__webpack_require__(/*! C:\\Users\\tigra_000\\Desktop\\Code\\template_wine\\src\\assets\\js\\main.js */\"./src/assets/js/main.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\tigra_000\\Desktop\\Code\\template_wine\\src\\assets\\js\\proba.js */\"./src/assets/js/proba.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/common.js_./src/assets/js/main.js_./src/assets/js/proba.js?");

/***/ })

/******/ });