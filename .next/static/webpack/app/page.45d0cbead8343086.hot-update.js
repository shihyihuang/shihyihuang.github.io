"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/component/icon.tsx":
/*!********************************!*\
  !*** ./app/component/icon.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\n\nconst Icon = (param)=>{\n    let { name } = param;\n    switch(name){\n        case \"contact\":\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAddressBook,\n                size: \"xl\",\n                style: {\n                    color: \" #113946\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/icon.tsx\",\n                lineNumber: 12,\n                columnNumber: 20\n            }, undefined);\n        case \"menu\":\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBars,\n                size: \"xl\"\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/icon.tsx\",\n                lineNumber: 14,\n                columnNumber: 20\n            }, undefined);\n        case \"close\":\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark,\n                size: \"2xl\"\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/icon.tsx\",\n                lineNumber: 16,\n                columnNumber: 20\n            }, undefined);\n        case \"scroll down\":\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAnglesDown,\n                size: \"2xl\"\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/icon.tsx\",\n                lineNumber: 18,\n                columnNumber: 20\n            }, undefined);\n        default:\n            return null;\n    }\n};\n_c = Icon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icon);\nvar _c;\n$RefreshReg$(_c, \"Icon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvaWNvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUN1QztBQUNnQztBQUtqRyxNQUFNTSxPQUE2QjtRQUFDLEVBQUNDLElBQUksRUFBQztJQUV0QyxPQUFRQTtRQUNKLEtBQUs7WUFDRCxxQkFBTyw4REFBQ04sMkVBQWVBO2dCQUFDTyxNQUFNTiw0RUFBYUE7Z0JBQUVPLE1BQUs7Z0JBQUtDLE9BQU87b0JBQUNDLE9BQU07Z0JBQVU7Ozs7OztRQUNuRixLQUFLO1lBQ0QscUJBQU8sOERBQUNWLDJFQUFlQTtnQkFBQ08sTUFBTUwscUVBQU1BO2dCQUFFTSxNQUFLOzs7Ozs7UUFDL0MsS0FBSztZQUNELHFCQUFPLDhEQUFDUiwyRUFBZUE7Z0JBQUNPLE1BQU1KLHNFQUFPQTtnQkFBRUssTUFBSzs7Ozs7O1FBQ2hELEtBQUs7WUFDRCxxQkFBTyw4REFBQ1IsMkVBQWVBO2dCQUFDTyxNQUFNSCwyRUFBWUE7Z0JBQUVJLE1BQUs7Ozs7OztRQUNyRDtZQUNJLE9BQU87SUFDZjtBQUVKO0tBZk1IO0FBaUJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnQvaWNvbi50c3g/NjNmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQWRkcmVzc0Jvb2ssIGZhQmFycywgZmFYbWFyaywgZmFBbmdsZXNEb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5pbnRlcmZhY2UgSWNvblByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5jb25zdCBJY29uIDogUmVhY3QuRkM8SWNvblByb3BzPiA9ICh7bmFtZX0pID0+IHtcbiAgICBcbiAgICBzd2l0Y2ggKG5hbWUpe1xuICAgICAgICBjYXNlICdjb250YWN0JyA6IFxuICAgICAgICAgICAgcmV0dXJuIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBZGRyZXNzQm9va30gc2l6ZT1cInhsXCIgc3R5bGU9e3tjb2xvcjpcIiAjMTEzOTQ2XCJ9fSAvPjtcbiAgICAgICAgY2FzZSAnbWVudScgOiBcbiAgICAgICAgICAgIHJldHVybiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gc2l6ZT1cInhsXCIgLz47XG4gICAgICAgIGNhc2UgJ2Nsb3NlJyA6XG4gICAgICAgICAgICByZXR1cm4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVhtYXJrfSBzaXplPVwiMnhsXCIgLz47XG4gICAgICAgIGNhc2UgJ3Njcm9sbCBkb3duJyA6XG4gICAgICAgICAgICByZXR1cm4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFuZ2xlc0Rvd259IHNpemU9XCIyeGxcIiAvPjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAgXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGb250QXdlc29tZUljb24iLCJmYUFkZHJlc3NCb29rIiwiZmFCYXJzIiwiZmFYbWFyayIsImZhQW5nbGVzRG93biIsIkljb24iLCJuYW1lIiwiaWNvbiIsInNpemUiLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/icon.tsx\n"));

/***/ })

});