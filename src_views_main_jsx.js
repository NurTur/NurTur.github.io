"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknew_react_lending"] = self["webpackChunknew_react_lending"] || []).push([["src_views_main_jsx"],{

/***/ "./src/views/main.jsx":
/*!****************************!*\
  !*** ./src/views/main.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index-esm.js\");\n\n\nvar width = Number(window.innerWidth) - 100;\nconsole.log(width);\nvar columns = [{\n  field: 'id',\n  headerName: '№',\n  width: width * 0.08\n}, {\n  field: 'lastName',\n  headerName: 'ИИН / БИН',\n  width: width * 0.2\n}, {\n  field: 'firstName',\n  headerName: 'Ф.И.О / Наименование',\n  width: width * 0.3\n} // {\n//     field: 'age',\n//     headerName: 'Age',\n//     type: 'number',\n//     width: 90\n// },\n// {\n//     field: 'fullName',\n//     headerName: 'Full name',\n//     description: 'This column has a value getter and is not sortable.',\n//     sortable: false,\n//     width: 160,\n//     valueGetter: (params) => `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`\n// }\n];\nvar rows = [{\n  id: 1,\n  lastName: '24426522315',\n  firstName: 'Арман5 Еарпа',\n  age: 35\n}, {\n  id: 2,\n  lastName: '52426522315',\n  firstName: 'Арман4 Парпа',\n  age: 42\n}, {\n  id: 3,\n  lastName: '97426522315',\n  firstName: 'Арман3 парпа',\n  age: 45\n}, {\n  id: 4,\n  lastName: '95426522315',\n  firstName: 'Арман1 парпа',\n  age: 16\n}, {\n  id: 5,\n  lastName: '90426522315',\n  firstName: 'Трман парпа',\n  age: null\n}, {\n  id: 6,\n  lastName: '82426522315',\n  firstName: 'Арман4 3парпа',\n  age: 150\n}, {\n  id: 7,\n  lastName: '81426522315',\n  firstName: 'Арман2 парпа',\n  age: 44\n}, {\n  id: 8,\n  lastName: '82426522315',\n  firstName: 'Арман2 парпа',\n  age: 36\n}, {\n  id: 9,\n  lastName: '83426522315',\n  firstName: 'Арман1 парпа',\n  age: 65\n}];\n\nfunction DataTable() {\n  console.log(window.innerHeight);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      height: \"calc(\".concat(window.innerHeight, \"px - 107px)\"),\n      width: '100%',\n      background: '#fff'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_1__.DataGrid, {\n    rows: rows,\n    columns: columns,\n    pageSize: 5,\n    rowsPerPageOptions: [5],\n    checkboxSelection: true\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTable);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkI7QUFDQSxzQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxNQUFNLGlCQUFVZCxNQUFNLENBQUNhLFdBQWpCLGdCQUFSO0FBQW1EZixNQUFBQSxLQUFLLEVBQUUsTUFBMUQ7QUFBa0VpQixNQUFBQSxVQUFVLEVBQUU7QUFBOUU7QUFBWixrQkFDSSxpREFBQyxzREFBRDtBQUFVLFFBQUksRUFBRVIsSUFBaEI7QUFBc0IsV0FBTyxFQUFFSCxPQUEvQjtBQUF3QyxZQUFRLEVBQUUsQ0FBbEQ7QUFBcUQsc0JBQWtCLEVBQUUsQ0FBQyxDQUFELENBQXpFO0FBQThFLHFCQUFpQjtBQUEvRixJQURKLENBREo7QUFLSDs7QUFFRCxpRUFBZVEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25ld19yZWFjdF9sZW5kaW5nLy4vc3JjL3ZpZXdzL21haW4uanN4PzM5OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuXHJcbmNvbnN0IHdpZHRoID0gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSAtIDEwMDtcclxuXHJcbmNvbnNvbGUubG9nKHdpZHRoKTtcclxuY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICfihJYnLCB3aWR0aDogd2lkdGggKiAwLjA4IH0sXHJcbiAgICB7IGZpZWxkOiAnbGFzdE5hbWUnLCBoZWFkZXJOYW1lOiAn0JjQmNCdIC8g0JHQmNCdJywgd2lkdGg6IHdpZHRoICogMC4yIH0sXHJcbiAgICB7IGZpZWxkOiAnZmlyc3ROYW1lJywgaGVhZGVyTmFtZTogJ9CkLtCYLtCeIC8g0J3QsNC40LzQtdC90L7QstCw0L3QuNC1Jywgd2lkdGg6IHdpZHRoICogMC4zIH1cclxuICAgIC8vIHtcclxuICAgIC8vICAgICBmaWVsZDogJ2FnZScsXHJcbiAgICAvLyAgICAgaGVhZGVyTmFtZTogJ0FnZScsXHJcbiAgICAvLyAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAvLyAgICAgd2lkdGg6IDkwXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGZpZWxkOiAnZnVsbE5hbWUnLFxyXG4gICAgLy8gICAgIGhlYWRlck5hbWU6ICdGdWxsIG5hbWUnLFxyXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBjb2x1bW4gaGFzIGEgdmFsdWUgZ2V0dGVyIGFuZCBpcyBub3Qgc29ydGFibGUuJyxcclxuICAgIC8vICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAvLyAgICAgd2lkdGg6IDE2MCxcclxuICAgIC8vICAgICB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gYCR7cGFyYW1zLmdldFZhbHVlKHBhcmFtcy5pZCwgJ2ZpcnN0TmFtZScpIHx8ICcnfSAke3BhcmFtcy5nZXRWYWx1ZShwYXJhbXMuaWQsICdsYXN0TmFtZScpIHx8ICcnfWBcclxuICAgIC8vIH1cclxuXTtcclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgICB7IGlkOiAxLCBsYXN0TmFtZTogJzI0NDI2NTIyMzE1JywgZmlyc3ROYW1lOiAn0JDRgNC80LDQvTUg0JXQsNGA0L/QsCcsIGFnZTogMzUgfSxcclxuICAgIHsgaWQ6IDIsIGxhc3ROYW1lOiAnNTI0MjY1MjIzMTUnLCBmaXJzdE5hbWU6ICfQkNGA0LzQsNC9NCDQn9Cw0YDQv9CwJywgYWdlOiA0MiB9LFxyXG4gICAgeyBpZDogMywgbGFzdE5hbWU6ICc5NzQyNjUyMjMxNScsIGZpcnN0TmFtZTogJ9CQ0YDQvNCw0L0zINC/0LDRgNC/0LAnLCBhZ2U6IDQ1IH0sXHJcbiAgICB7IGlkOiA0LCBsYXN0TmFtZTogJzk1NDI2NTIyMzE1JywgZmlyc3ROYW1lOiAn0JDRgNC80LDQvTEg0L/QsNGA0L/QsCcsIGFnZTogMTYgfSxcclxuICAgIHsgaWQ6IDUsIGxhc3ROYW1lOiAnOTA0MjY1MjIzMTUnLCBmaXJzdE5hbWU6ICfQotGA0LzQsNC9INC/0LDRgNC/0LAnLCBhZ2U6IG51bGwgfSxcclxuICAgIHsgaWQ6IDYsIGxhc3ROYW1lOiAnODI0MjY1MjIzMTUnLCBmaXJzdE5hbWU6ICfQkNGA0LzQsNC9NCAz0L/QsNGA0L/QsCcsIGFnZTogMTUwIH0sXHJcbiAgICB7IGlkOiA3LCBsYXN0TmFtZTogJzgxNDI2NTIyMzE1JywgZmlyc3ROYW1lOiAn0JDRgNC80LDQvTIg0L/QsNGA0L/QsCcsIGFnZTogNDQgfSxcclxuICAgIHsgaWQ6IDgsIGxhc3ROYW1lOiAnODI0MjY1MjIzMTUnLCBmaXJzdE5hbWU6ICfQkNGA0LzQsNC9MiDQv9Cw0YDQv9CwJywgYWdlOiAzNiB9LFxyXG4gICAgeyBpZDogOSwgbGFzdE5hbWU6ICc4MzQyNjUyMjMxNScsIGZpcnN0TmFtZTogJ9CQ0YDQvNCw0L0xINC/0LDRgNC/0LAnLCBhZ2U6IDY1IH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIERhdGFUYWJsZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgY2FsYygke3dpbmRvdy5pbm5lckhlaWdodH1weCAtIDEwN3B4KWAsIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICcjZmZmJyB9fT5cclxuICAgICAgICAgICAgPERhdGFHcmlkIHJvd3M9e3Jvd3N9IGNvbHVtbnM9e2NvbHVtbnN9IHBhZ2VTaXplPXs1fSByb3dzUGVyUGFnZU9wdGlvbnM9e1s1XX0gY2hlY2tib3hTZWxlY3Rpb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGF0YUdyaWQiLCJ3aWR0aCIsIk51bWJlciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjb25zb2xlIiwibG9nIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsInJvd3MiLCJpZCIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwiYWdlIiwiRGF0YVRhYmxlIiwiaW5uZXJIZWlnaHQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/main.jsx\n");

/***/ })

}]);