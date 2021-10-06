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

/***/ "./src/components/masked-text-field/masked-text-field.js":
/*!***************************************************************!*\
  !*** ./src/components/masked-text-field/masked-text-field.js ***!
  \***************************************************************/
/***/ (() => {

eval("var input = document.querySelectorAll('.js-masked-text-field__input')[0];\n\nvar dateInputMask = function dateInputMask(elm) {\n  elm.addEventListener('keypress', function (e) {\n    if (e.keyCode < 47 || e.keyCode > 57) {\n      e.preventDefault();\n    }\n\n    var len = elm.value.length; // If we're at a particular place, let the user type the slash\n    // i.e., 12/12/1212\n\n    if (len !== 1 || len !== 3) {\n      if (e.keyCode == 47) {\n        e.preventDefault();\n      }\n    } // If they don't add the slash, do it for them...\n\n\n    if (len === 2) {\n      elm.value += '.';\n    } // If they don't add the slash, do it for them...\n\n\n    if (len === 5) {\n      elm.value += '.';\n    }\n  });\n};\n\ndateInputMask(input);\n\n//# sourceURL=webpack://task2/./src/components/masked-text-field/masked-text-field.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/masked-text-field/masked-text-field.js"]();
/******/ 	
/******/ })()
;