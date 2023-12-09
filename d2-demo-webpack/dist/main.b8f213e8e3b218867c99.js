"use strict";
(self["webpackChunkp3_demo_webpack"] = self["webpackChunkp3_demo_webpack"] || []).push([["main"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ 569);



function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(
    ["Hello", "webpack.", "It's", "Tom!", "Node.js"],
    " "
  );

  element.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(null, "Hello webpack!");

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());


/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
function print(text) {
  console.log(text);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iOGYyMTNlOGUzYjIxODg2N2M5OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ1E7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isa0RBQU07QUFDNUI7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpREFBSzs7QUFFekI7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3AzLWRlbW8td2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wMy1kZW1vLXdlYnBhY2svLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFByaW50IGZyb20gXCIuL3ByaW50LmpzXCI7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oXG4gICAgW1wiSGVsbG9cIiwgXCJ3ZWJwYWNrLlwiLCBcIkl0J3NcIiwgXCJUb20hXCIsIFwiTm9kZS5qc1wiXSxcbiAgICBcIiBcIlxuICApO1xuXG4gIGVsZW1lbnQub25jbGljayA9IFByaW50LmJpbmQobnVsbCwgXCJIZWxsbyB3ZWJwYWNrIVwiKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnQodGV4dCkge1xuICBjb25zb2xlLmxvZyh0ZXh0KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==