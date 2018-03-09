(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CommonStyles"] = factory();
	else
		root["CommonStyles"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = { vars:\n   { '--color-white': 'rgb(255, 255, 255)',\n     '--color-black': 'rgb(25, 25, 25)',\n     '--color-gold': 'rgb(0, 0, 0)',\n     '--color-gold--light': 'rgb(219, 189, 154)',\n     '--color-blue': 'rgb(25, 103, 158)',\n     '--color-red': 'rgb(213, 84, 68)',\n     '--color-green': 'rgb(72, 213, 108)',\n     '--color-orange': 'rgb(234, 155, 82)',\n     '--color-yellow': 'rgb(236, 180, 74)',\n     '--color-focusRing': 'rgb(91, 157, 217)',\n     '--color-red--light': 'rgb(236, 94, 77)',\n     '--color-blue--light': 'rgb(41, 125, 184)',\n     '--color-greyLightest': 'rgb(245, 245, 245)',\n     '--color-greyLighter': 'rgb(221, 221, 221)',\n     '--color-greyLight': 'rgb(190, 190, 190)',\n     '--color-grey': 'rgb(139, 139, 139)',\n     '--color-greyDark': 'rgb(90, 90, 90)',\n     '--color-greyDarker': 'rgb(56, 56, 56)',\n     '--color-greyDarkest': 'rgb(35, 35, 35)',\n     '--color-transparent-black-i': 'rgba(25, 25, 25, 0.8)',\n     '--color-transparent-black-ii': 'rgba(25, 25, 25, 0.6)',\n     '--color-transparent-black-iii': 'rgba(25, 25, 25, 0.4)',\n     '--color-transparent-black-iv': 'rgba(25, 25, 25, 0.2)',\n     '--overlay-default': 'rgba(20, 20, 21, 0.5)',\n     '--color-primary': 'var(--color-gold)',\n     '--color-action': 'var(--color-blue)',\n     '--color-success': 'var(--color-green)',\n     '--color-danger': 'var(--color-red)',\n     '--color-primary--light': 'var(--color-gold--light)',\n     '--color-danger--light': 'var(--color-red--light)',\n     '--color-action--light': 'var(--color-blue--light)',\n     '--color-available': 'var(--color-green)',\n     '--color-unavailable': 'var(--color-red)',\n     '--color-underOffer': 'var(--color-orange)',\n     '--color-internal': 'var(--color-black)',\n     '--color-void': 'var(--color-yellow)',\n     '--facebook-blue': 'rgb(59, 89, 152)',\n     '--twitter-blue': 'rgb(29, 161, 242)',\n     '--pintrest-red': 'rgb(190, 9, 28)',\n     '--ios-safari-bottom-margin': '44px',\n     '--destination-listing-content-height': '7.375rem',\n     '--destination-listing-image-height': '8.4375rem',\n     '--z-1': '10',\n     '--z-2': '20',\n     '--z-3': '30',\n     '--z-4': '40',\n     '--z-5': '50',\n     '--z-6': '60',\n     '--z-7': '70',\n     '--z-8': '80',\n     '--z-9': '90',\n     '--z-modal': 'var(--z-8)',\n     '--z-floatingActionBtn': 'var(--z-6)',\n     '--z-stickyNode': 'var(--z-5)',\n     '--z-tooltip': 'var(--z-3)',\n     '--z-mapCanvas': 'var(--z-1)',\n     '--z-mapMarker': 'var(--z-2)',\n     '--z-mapControls': 'var(--z-3)',\n     '--z-offcanvasPanel': 'var(--z-7)',\n     '--z-overlay': 'var(--z-7)',\n     '--font-avenir': '\\'Avenir Next W01\\', \\'Helvetica Neue\\', \\'Helvetica\\', \\'sans-serif\\'',\n     '--font-fira-code': '\\'Fira Mono\\', monospace',\n     '--fontweight-bold': '800',\n     '--fontweight-demi': '700',\n     '--fontweight-regular': '400',\n     '--fontsize-large-v': '2.75rem',\n     '--fontsize-large-iv': '2rem',\n     '--fontsize-large-iii': '1.75rem',\n     '--fontsize-large-ii': '1.5rem',\n     '--fontsize-large-i': '1.1875rem',\n     '--fontsize-regular': '1rem',\n     '--fontsize-small-i': '0.875rem',\n     '--fontsize-small-ii': '0.6875rem',\n     '--font-large-v': 'var(--fontweight-bold) var(--fontsize-large-v)/var(--lineheight-large-v) var(--font-avenir)',\n     '--font-large-iv': 'var(--fontweight-demi) var(--fontsize-large-iv)/var(--lineheight-large-iv) var(--font-avenir)',\n     '--font-large-iii': 'var(--fontweight-demi) var(--fontsize-large-iii)/var(--lineheight-large-iii) var(--font-avenir)',\n     '--font-large-ii': 'var(--fontweight-demi) var(--fontsize-large-ii)/var(--lineheight-large-ii) var(--font-avenir)',\n     '--font-large-i': 'var(--fontweight-regular) var(--fontsize-large-i)/var(--lineheight-large-i) var(--font-avenir)',\n     '--font-regular': 'var(--fontweight-regular) var(--fontsize-regular)/var(--lineheight-regular) var(--font-avenir)',\n     '--font-small-i': 'var(--fontweight-regular) var(--fontsize-small-i)/var(--lineheight-small-i) var(--font-avenir)',\n     '--font-small-ii': 'var(--fontweight-regular) var(--fontsize-small-ii)/var(--lineheight-small-ii) var(--font-avenir)',\n     '--lineheight-large-v': '0.8148',\n     '--lineheight-large-iv': '1.34375',\n     '--lineheight-large-iii': '1.28571',\n     '--lineheight-large-ii': '1.333',\n     '--lineheight-large-i': '1.263',\n     '--lineheight-regular': '1.4375',\n     '--lineheight-small-i': '1.285',\n     '--lineheight-small-ii': '1.363',\n     '--letter-spacing-large-v': '0.32rem',\n     '--letter-spacing-large-iv': '0.01875rem',\n     '--letter-spacing-large-iii': '0.01875rem',\n     '--letter-spacing-large-ii': '0.01875rem',\n     '--letter-spacing-large-i': '0.0125rem',\n     '--letter-spacing-regular': '0.010625rem',\n     '--letter-spacing-small-i': '0.009375rem',\n     '--letter-spacing-small-ii': '0.009375rem',\n     '--letterspacing-wide': '0.125rem',\n     '--letterspacing-less-wide': '0.009375rem',\n     '--size-lg-vii': '12.5rem',\n     '--size-lg-vi': '9rem',\n     '--size-lg-v': '6rem',\n     '--size-lg-iv': '5rem',\n     '--size-lg-iii': '4rem',\n     '--size-lg-ii': '3rem',\n     '--size-lg-i': '1.5rem',\n     '--size-regular': '1rem',\n     '--size-sm-i': '0.75rem',\n     '--size-sm-ii': '0.5rem',\n     '--size-sm-iii': '0.25rem',\n     '--size-sm-iv': '0.1rem',\n     '--space-200': 'var(--size-lg-vii)',\n     '--space-144': 'var(--size-lg-vi)',\n     '--space-96': 'var(--size-lg-v)',\n     '--space-80': 'var(--size-lg-iv)',\n     '--space-64': 'var(--size-lg-iii)',\n     '--space-48': 'var(--size-lg-ii)',\n     '--size-large': 'var(--size-lg-i)',\n     '--size-medium': 'var(--size-regular)',\n     '--size-small': 'var(--size-sm-ii)',\n     '--size-micro': 'var(--size-sm-iii)',\n     '--animation-sharp': 'cubic-bezier(0,1,0.75,1)' },\n  media:\n   { '--hero-width-lg-i': '(min-width: 50rem)',\n     '--hero-height-lg-i': '(min-height: 50rem)',\n     '--hero-height-lg-ii': '(min-height: 64rem)',\n     '--wrapper-large': '(min-width: 62.25rem)',\n     '--signpost-full': '(min-width: 31.25rem)',\n     '--squareHero-lg-i': '(min-width: 25rem)',\n     '--squareHero-lg-ii': '(min-width: 46.875rem)',\n     '--squareHero-lg-iii': '(min-width: 62.5rem)',\n     '--modal-lg': '(min-width: 37.5rem)',\n     '--scaffold-dl-lg-i': '(min-width: 30rem)',\n     '--colors-2up': '(min-width: 25rem)',\n     '--colors-3up': '(min-width: 50rem)',\n     '--iconography-3up': '(min-width: 31.875rem)',\n     '--iconography-4up': '(min-width: 50rem)',\n     '--typography-2up': '(min-width: 25rem)',\n     '--typography-3up': '(min-width: 50rem)',\n     '--medallion-2up': '(min-width: 31.875rem)',\n     '--controls-transpose': '(min-width: 35rem)' },\n  selector: {} };\n\n//# sourceURL=webpack://CommonStyles/./src/index.js?");

/***/ })

/******/ });
});