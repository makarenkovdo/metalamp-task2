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

eval("console.log('something');\nvar $likeButtonSelector = document.querySelector('.js-like-button');\nvar $likeIconSelector = document.querySelector('.js-like-button__icon');\nvar $likeButtonCounter = document.querySelector('.js-like-button__counter');\n$likeButtonSelector.addEventListener('click', function () {\n  return handleLikeButtonClick(twoLikesButton);\n});\n\nfunction likeButtonCounter(n) {\n  var counter = n;\n  return function changeLikeButtonCounter(shift) {\n    counter += shift;\n    $likeButtonCounter.innerHTML = counter;\n  };\n}\n\nvar twoLikesButton = likeButtonCounter(2);\nvar elevenLikesButton = likeButtonCounter(11);\n\nfunction handleLikeButtonClick(currentButton) {\n  console.log('CLICK');\n\n  if ($likeButtonSelector.classList.contains('like-button_active')) {\n    $likeButtonSelector.classList.remove('like-button_active');\n    $likeButtonCounter.classList.remove('like-button__counter-active');\n    $likeIconSelector.src = './img/like-border.svg';\n    currentButton(-1);\n  } else {\n    console.log('ADD CLASS');\n    $likeButtonSelector.classList.add('like-button_active');\n    $likeButtonCounter.classList.add('like-button__counter-active');\n    $likeIconSelector.src = './img/like-active.svg';\n    currentButton(+1);\n  }\n} // $(document).ready(function () {\n//     console.log('ready!')\n// })\n\n//# sourceURL=webpack://task2/./src/components/like-button/like-button.js?");

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