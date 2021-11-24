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

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ (() => {

eval("var $burgerIcon = document.querySelector('.js-header__hamburger-icon');\nvar $burgerMenu = document.querySelector('.js-header__hamburger-menu');\nvar isOpen = false;\n\nvar handleClick = function handleBurgerClick() {\n  if (!isOpen) {\n    $burgerMenu.classList.remove('js-hider');\n    $burgerMenu.classList.add('js-header__hamburger_animate');\n  }\n\n  if (isOpen) {\n    $burgerMenu.classList.add('js-hider');\n    $burgerMenu.classList.remove('js-header__hamburger_animate');\n  }\n\n  isOpen = !isOpen;\n};\n\n$burgerIcon.addEventListener('click', handleClick);\n\n//# sourceURL=webpack://task2/./src/components/header/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/header/header.js"]();
/******/ 	
/******/ })()
;