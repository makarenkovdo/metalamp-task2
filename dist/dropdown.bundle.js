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

/***/ "./src/components/dropdown-guests/dropdown-guests.js":
/*!***********************************************************!*\
  !*** ./src/components/dropdown-guests/dropdown-guests.js ***!
  \***********************************************************/
/***/ (() => {

eval("var isDropdownOpen = false;\nvar $dropdownContainerImg = document.querySelector('.js-dropdown__img-box');\nvar $dropdownContainer = document.querySelector('.js-dropdown-guests');\nvar $dropdownBoxContainer = document.querySelector('.js-dropdown__popup');\nvar $dropdownText = document.querySelector('.js-dropdown__text');\nvar $counterSelector1 = document.querySelector('.js-dropdown__counter1');\nvar $counterSelector2 = document.querySelector('.js-dropdown__counter2');\nvar $counterSelector3 = document.querySelector('.js-dropdown__counter3');\nvar $decreaseSelector1 = document.querySelector('.js-dropdown__decrease1');\nvar $increaseSelector1 = document.querySelector('.js-dropdown__increase1');\nvar $decreaseSelector2 = document.querySelector('.js-dropdown__decrease2');\nvar $increaseSelector2 = document.querySelector('.js-dropdown__increase2');\nvar $decreaseSelector3 = document.querySelector('.js-dropdown__decrease3');\nvar $increaseSelector3 = document.querySelector('.js-dropdown__increase3');\n$dropdownContainerImg.addEventListener('click', handleDropdownClick);\n\nfunction handleDropdownClick() {\n  isDropdownOpen ? closeDropdownBox() : openDropdownBox();\n\n  function closeDropdownBox() {\n    $dropdownBoxContainer.classList.add('hide');\n    isDropdownOpen = false;\n  }\n\n  function openDropdownBox() {\n    var x = $dropdownContainer.getBoundingClientRect().x;\n    var y = $dropdownContainer.getBoundingClientRect().y + $dropdownContainer.getBoundingClientRect().height;\n    $dropdownBoxContainer.classList.remove('hide');\n    $dropdownBoxContainer.style.cssText = \"left:\".concat(x, \"px; top: \").concat(y, \"px; \");\n    isDropdownOpen = true;\n  }\n}\n\nfunction makeDropdownCounter() {\n  console.log('some log!');\n  var commonCounter = 0;\n  var counter1 = 0;\n  console.log(counter1);\n  var counter2 = 0;\n  var counter3 = 0;\n  var guestWordEnding = 'ь';\n\n  function setGuestWordEnging(guestWordEnding, commonCounter) {\n    if (commonCounter > 1 && commonCounter < 5) {\n      return guestWordEnding = 'я';\n    }\n\n    if (commonCounter > 5 || commonCounter < 1) {\n      return guestWordEnding = 'ей';\n    }\n\n    if (commonCounter === 1) {\n      return guestWordEnding = 'ь';\n    }\n\n    return guestWordEnding;\n  }\n\n  return function (shift, counterSelector) {\n    switch (counterSelector.attributes[\"class\"].value) {\n      case 'dropdown__counter js-dropdown__counter1':\n        if (counter1 === 0 && shift < 0) {\n          return counter1;\n        } else {\n          counter1 += shift;\n          commonCounter += shift;\n          guestWordEnding = setGuestWordEnging(guestWordEnding, commonCounter);\n          counterSelector.innerHTML = counter1;\n          $dropdownText.innerHTML = \"\".concat(commonCounter, \" \\u0433\\u043E\\u0441\\u0442\").concat(guestWordEnding);\n        }\n\n        break;\n\n      case 'dropdown__counter js-dropdown__counter2':\n        if (counter2 === 0 && shift < 0) {\n          return counter2;\n        } else {\n          counter2 += shift;\n          commonCounter += shift;\n          guestWordEnding = setGuestWordEnging(guestWordEnding, commonCounter);\n          counterSelector.innerHTML = counter2;\n          $dropdownText.innerHTML = \"\".concat(commonCounter, \" \\u0433\\u043E\\u0441\\u0442\").concat(guestWordEnding);\n        }\n\n        break;\n\n      case 'dropdown__counter js-dropdown__counter3':\n        if (counter3 === 0 && shift < 0) {\n          return counter3;\n        } else {\n          counter3 += shift;\n          commonCounter += shift;\n          guestWordEnding = setGuestWordEnging(guestWordEnding, commonCounter);\n          counterSelector.innerHTML = counter3;\n          $dropdownText.innerHTML = \"\".concat(commonCounter, \" \\u0433\\u043E\\u0441\\u0442\").concat(guestWordEnding);\n        }\n\n        break;\n\n      default:\n        return false;\n    }\n  };\n}\n\nvar dropdownCounter = makeDropdownCounter();\n$increaseSelector1.addEventListener('click', function () {\n  return dropdownCounter(1, $counterSelector1);\n});\n$decreaseSelector1.addEventListener('click', function () {\n  return dropdownCounter(-1, $counterSelector1);\n});\n$increaseSelector2.addEventListener('click', function () {\n  return dropdownCounter(1, $counterSelector2);\n});\n$decreaseSelector2.addEventListener('click', function () {\n  return dropdownCounter(-1, $counterSelector2);\n});\n$increaseSelector3.addEventListener('click', function () {\n  dropdownCounter(1, $counterSelector3);\n});\n$decreaseSelector3.addEventListener('click', function () {\n  return dropdownCounter(-1, $counterSelector3);\n});\n\n//# sourceURL=webpack://task2/./src/components/dropdown-guests/dropdown-guests.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/dropdown-guests/dropdown-guests.js"]();
/******/ 	
/******/ })()
;