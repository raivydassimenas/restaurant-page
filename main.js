/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadContactTab = function () {\n    const contactDiv = document.createElement('div');\n\n    const tobeRyota = document.createElement('div');\n\n    const tobeRyotaHeader = document.createElement('h2');\n    tobeRyotaHeader.innerText = \"Tobe Ryota\";\n    tobeRyota.appendChild(tobeRyotaHeader);\n\n    const tobeRyotaContact = document.createElement('ul');\n    const tobeRyotaPosition = document.createElement('li');\n    tobeRyotaPosition.innerText = \"Chef\";\n    tobeRyotaContact.append(tobeRyotaPosition);\n    const tobeRyotaPhone = document.createElement('li');\n    tobeRyotaPhone.innerText = \"Phone: (+370) 612 34 5670\";\n    tobeRyotaContact.appendChild(tobeRyotaPhone);\n    const tobeRyotaEmail = document.createElement('li');\n    tobeRyotaEmail.innerText = \"Email: tobe.ryota@cuterestaurant.com\";\n    tobeRyotaContact.appendChild(tobeRyotaEmail);\n    tobeRyota.appendChild(tobeRyotaContact);\n\n    tobeRyota.classList.add(\"contact\");\n\n    contactDiv.appendChild(tobeRyota);\n\n    const hataYasu = document.createElement('div');\n\n    const hataYasuHeader = document.createElement('h2');\n    hataYasuHeader.innerText = \"Hata Yasu\";\n    hataYasu.appendChild(hataYasuHeader);\n\n    const hataYasuContact = document.createElement('ul');\n    const hataYasuPosition = document.createElement('li');\n    hataYasuPosition.innerText = \"Manager\";\n    hataYasuContact.appendChild(hataYasuPosition);\n    const hataYasuPhone = document.createElement('li');\n    hataYasuPhone.innerText = \"Phone: (+370) 621 43 6587\";\n    hataYasuContact.appendChild(hataYasuPhone);\n    const hataYasuEmail = document.createElement('li');\n    hataYasuEmail.innerText = \"Email: hata.yasu@cuterestaurant.com\";\n    hataYasuContact.appendChild(hataYasuEmail);\n    hataYasu.appendChild(hataYasuContact);\n\n    hataYasu.classList.add(\"contact\");\n\n    contactDiv.appendChild(hataYasu);\n\n    contactDiv.classList.add(\"tab\");\n\n    return contactDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactTab);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst contentDiv = document.querySelector(\"#content\");\nconst menuDiv = (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst contactDiv = (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\ncontentDiv.append(contactDiv);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vinicius_benedit_sushi_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vinicius-benedit-sushi-unsplash.jpg */ \"./src/vinicius-benedit-sushi-unsplash.jpg\");\n/* harmony import */ var _crystal_jo_nigiri_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crystal-jo-nigiri-unsplash.jpg */ \"./src/crystal-jo-nigiri-unsplash.jpg\");\n\n\n\nconst loadMenuTab = function() {\n    const menuDiv = document.createElement('div');\n\n    const sushi = document.createElement('div');\n\n    const sushiHeader = document.createElement('h2');\n    sushiHeader.innerText = \"Sushi\";\n    sushi.appendChild(sushiHeader);\n\n    const sushiImage = new Image();\n    sushiImage.src = _vinicius_benedit_sushi_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    sushiImage.alt = \"Sushi image\";\n    sushi.appendChild(sushiImage);\n\n    const sushiText = document.createElement('p');\n    sushiText.innerText = \"Aliquam in nisl ac lacus placerat tincidunt. Etiam maximus pharetra cursus. Sed lectus tortor, porttitor pretium porttitor id, ultrices eu leo. Donec id diam erat. Nulla facilisi. Vestibulum viverra dolor pulvinar, congue turpis a, posuere dui.\";\n    sushi.appendChild(sushiText);\n    \n    const sushiImageCopyright = document.createElement('p');\n    sushiImageCopyright.innerHTML = 'Photo by <a href=\"https://unsplash.com/@viniciusbenedit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Vinicius Benedit</a> on <a href=\"https://unsplash.com/s/photos/sushi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n    sushi.appendChild(sushiImageCopyright);\n\n    sushi.classList.add(\"menuItem\");\n\n    menuDiv.appendChild(sushi);\n\n    const nigiri = document.createElement('div');\n\n    const nigiriHeader = document.createElement('h2');\n    nigiriHeader.innerText = \"Nigiri\";\n    nigiri.appendChild(nigiriHeader);\n\n    const nigiriImage = new Image();\n    nigiriImage.src = _crystal_jo_nigiri_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    nigiriImage.alt = \"Nigiri image\";\n    nigiri.appendChild(nigiriImage);\n\n    const nigiriText = document.createElement('p');\n    nigiriText.innerText = \"n hac habitasse platea dictumst. Ut ultricies mauris malesuada, sodales dolor et, accumsan tellus. Suspendisse potenti. Duis vitae ipsum mollis, vulputate nibh in, mollis leo. Suspendisse pharetra leo et ante porta consectetur. Donec id malesuada quam.\";\n    nigiri.appendChild(nigiriText);\n\n    const nigiriImageCopyright = document.createElement('p');\n    nigiriImageCopyright.innerHTML = 'Photo by <a href=\"https://unsplash.com/@crystalsjo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Crystal Jo</a> on <a href=\"https://unsplash.com/s/photos/nigiri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n    nigiri.appendChild(nigiriImageCopyright);\n\n    nigiri.classList.add(\"menuItem\");\n\n    menuDiv.appendChild(nigiri);\n\n    menuDiv.classList.add(\"tab\");\n\n    return menuDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuTab);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpeg */ \"./src/restaurant.jpeg\");\n\n\nconst loadRestaurantTab = function () {\n  const restaurantDiv = document.createElement(\"div\");\n\n  const headline = document.createElement(\"h2\");\n  headline.innerText = \"My cute restaurant\";\n\n  const image = new Image();\n  image.src = _restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = 'Restaurant image';\n\n  const text = document.createElement(\"p\");\n  text.innerText =\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis facilisis egestas. Donec in ante nunc. Morbi vel odio rhoncus metus faucibus maximus. Nullam eros tortor, tincidunt sed massa et, pharetra feugiat nibh. Nunc lobortis purus et euismod rhoncus. Donec tellus ex, auctor in lacus at, luctus dignissim justo. Maecenas sodales nulla eget ex faucibus rutrum a in magna. Nulla porta sagittis consequat. Nulla facilisi. Integer accumsan venenatis egestas.\";\n\n  restaurantDiv.appendChild(headline);\n  restaurantDiv.appendChild(image);\n  restaurantDiv.appendChild(text);\n\n  restaurantDiv.classList.add(\"tab\");\n\n  return restaurantDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRestaurantTab);\n\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.js?");

/***/ }),

/***/ "./src/crystal-jo-nigiri-unsplash.jpg":
/*!********************************************!*\
  !*** ./src/crystal-jo-nigiri-unsplash.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/crystal-jo-nigiri-unsplash.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/crystal-jo-nigiri-unsplash.jpg?");

/***/ }),

/***/ "./src/restaurant.jpeg":
/*!*****************************!*\
  !*** ./src/restaurant.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/restaurant.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.jpeg?");

/***/ }),

/***/ "./src/vinicius-benedit-sushi-unsplash.jpg":
/*!*************************************************!*\
  !*** ./src/vinicius-benedit-sushi-unsplash.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/vinicius-benedit-sushi-unsplash.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/vinicius-benedit-sushi-unsplash.jpg?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;