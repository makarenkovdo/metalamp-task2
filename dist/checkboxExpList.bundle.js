/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/checkbox-expandable-list/checkbox-expandable-list.js":
/*!*****************************************************************************!*\
  !*** ./src/components/checkbox-expandable-list/checkbox-expandable-list.js ***!
  \*****************************************************************************/
/***/ (() => {

eval("var $checkboxListContainer = document.querySelector('.js-checkbox-expandable-list');\nvar $checkboxListPopup = document.querySelector('.js-checkbox-expandable-list-popup');\nvar $checkboxListText = document.querySelector('.js-checkbox-expandable-list-text');\nvar $checkboxListIconSelector = document.querySelector('js-checkbox-expandable-list-icon');\nvar $checkboxListIconBox = document.querySelector('.js-checkbox-expandable-list-icon-box');\n$checkboxListIconBox.addEventListener('click', handleCheckboxListClick);\n\nfunction handleCheckboxListClick() {\n  $checkboxListPopup.classList.contains('hide') ? openCheckboxList() : closeCheckboxList();\n\n  function closeCheckboxList() {\n    $checkboxListPopup.classList.add('hide');\n    $checkboxListIconSelector.src = './img/close-checkbox-expandable-list.svg';\n  }\n\n  function openCheckboxList() {\n    var x = $checkboxListContainer.getBoundingClientRect().x;\n    var y = $checkboxListContainer.getBoundingClientRect().y + $checkboxListContainer.getBoundingClientRect().height;\n    $checkboxListPopup.classList.remove('hide');\n    $checkboxListPopup.style.cssText = \"left:\".concat(x, \"px; top: \").concat(y, \"px; \");\n    $checkboxListIconSelector.src = './img/open-checkbox-expandable-list.svg';\n  }\n}\n\n//# sourceURL=webpack://task2/./src/components/checkbox-expandable-list/checkbox-expandable-list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/checkbox-expandable-list/checkbox-expandable-list.js"]();
/******/ 	
/******/ })()
;