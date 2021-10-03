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

/***/ "./src/components/like-button/like-button.js":
/*!***************************************************!*\
  !*** ./src/components/like-button/like-button.js ***!
  \***************************************************/
/***/ (() => {

eval("console.log('something');\nvar $likeButtonSelector = document.querySelector(\".js-like-button\");\nvar $likeIconSelector = document.querySelector('.js-like-button__icon');\nvar $likeButtonCounter = document.querySelector('.js-like-button__counter'); // $likeButtonSelector.addEventListener('click', () =>\n//     handleLikeButtonClick(twoLikesButton)\n// )\n\npar = document.querySelector('.form-elements__like-button-container');\npar.addEventListener('click', function (e) {\n  handleLikeButtonClick(twoLikesButton, e);\n});\n\nfunction likeButtonCounter(n) {\n  var counter = n;\n  return function changeLikeButtonCounter(shift) {\n    counter += shift;\n    e.target.innerHTML = counter;\n  };\n}\n\nvar twoLikesButton = likeButtonCounter(2);\nvar elevenLikesButton = likeButtonCounter(11);\n\nfunction handleLikeButtonClick(currentButton, e) {\n  console.log(e.target.parentElement);\n\n  if (e.target.classList.contains('like-button_active')) {\n    e.target.classList.remove('like-button_active');\n    e.target.classList.remove('like-button__counter-active');\n    e.currentTarget.querySelector('.js-like-button__icon').src = './img/like-border.svg';\n    currentButton(-1);\n  } else {\n    e.target.classList.add('like-button_active');\n    e.target.classList.add('like-button__counter-active');\n    e.currentTarget.querySelector('.js-like-button__icon').src = './img/like-active.svg';\n    currentButton(+1);\n  }\n} // $(document).ready(function () {\n//     console.log('ready!')\n// })\n\n//# sourceURL=webpack://task2/./src/components/like-button/like-button.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/like-button/like-button.js"]();
/******/ 	
/******/ })()
;