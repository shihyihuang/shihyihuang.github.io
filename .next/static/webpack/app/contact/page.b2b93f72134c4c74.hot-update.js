"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-pages-browser)/./app/component/countdownTimer.tsx":
/*!******************************************!*\
  !*** ./app/component/countdownTimer.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CountdownTimer = ()=>{\n    _s();\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            setCounter((prevCounter)=>{\n                if (prevCounter <= 1) {\n                    return 60;\n                }\n                return prevCounter - 1;\n            });\n        }, 1000);\n        return ()=>clearInterval(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-full overflow-x-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"!text-3xl !mt-16 text-info text-center\",\n                gutterBottom: true,\n                children: \"Beat the Buzzer\"\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center gap-2 text-center mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col p-3 rounded-box bg-secondary text-primary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"countdown text-5xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        \"--value\": 0\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 17\n                            }, undefined),\n                            \"hours\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col p-3 rounded-box bg-secondary text-primary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"countdown text-5xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        \"--value\": 0\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, undefined),\n                            \"min\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col p-3 rounded-box bg-neutral text-primary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"countdown text-5xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        \"--value\": counter\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, undefined),\n                            \"sec\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"!text-xl !mt-5 text-info text-center\",\n                gutterBottom: true,\n                children: [\n                    \"Time to connect is slipping away !\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    \"Missed chances: [count]\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/countdownTimer.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"o/4bGzfQektemY9KRWsA815TKmw=\");\n_c = CountdownTimer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvY291bnRkb3duVGltZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUUzQyxNQUFNSSxpQkFBMkI7O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBUztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxRQUFRQyxZQUFZO1lBQ3hCRixXQUFXLENBQUNHO2dCQUNWLElBQUlBLGVBQWUsR0FBRztvQkFDcEIsT0FBTztnQkFDVDtnQkFDQSxPQUFPQSxjQUFjO1lBQ3ZCO1FBQ0YsR0FBRztRQUVILE9BQU8sSUFBTUMsY0FBY0g7SUFDN0IsR0FBRyxFQUFFO0lBRVAscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDVCxzRkFBVUE7Z0JBQUNTLFdBQVU7Z0JBQXlDQyxZQUFZOzBCQUFDOzs7Ozs7MEJBRzVFLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQ2hCLDRFQUFDRTtvQ0FBS0MsT0FBTzt3Q0FBRSxXQUFXO29DQUFFOzs7Ozs7Ozs7Ozs0QkFDckI7Ozs7Ozs7a0NBR1gsOERBQUNKO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQ2hCLDRFQUFDRTtvQ0FBS0MsT0FBTzt3Q0FBRSxXQUFXO29DQUFFOzs7Ozs7Ozs7Ozs0QkFDckI7Ozs7Ozs7a0NBR1gsOERBQUNKO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQ2hCLDRFQUFDRTtvQ0FBS0MsT0FBTzt3Q0FBRSxXQUFXVjtvQ0FBUTs7Ozs7Ozs7Ozs7NEJBQzNCOzs7Ozs7Ozs7Ozs7OzBCQUlmLDhEQUFDRixzRkFBVUE7Z0JBQUNTLFdBQVU7Z0JBQXVDQyxZQUFZOztvQkFBQztrQ0FFdEUsOERBQUNHOzs7OztvQkFBSTs7Ozs7Ozs7Ozs7OztBQUtqQjtHQWhETVo7S0FBQUE7QUFrRE4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudC9jb3VudGRvd25UaW1lci50c3g/NDBiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuY29uc3QgQ291bnRkb3duVGltZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlPG51bWJlcj4oNjApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudGVyKChwcmV2Q291bnRlcikgPT4ge1xuICAgICAgICAgIGlmIChwcmV2Q291bnRlciA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gNjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcmV2Q291bnRlciAtIDE7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1mdWxsIG92ZXJmbG93LXgtaGlkZGVuXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0nIXRleHQtM3hsICFtdC0xNiB0ZXh0LWluZm8gdGV4dC1jZW50ZXInIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIEJlYXQgdGhlIEJ1enplclxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTIgdGV4dC1jZW50ZXIgbXQtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMyByb3VuZGVkLWJveCBiZy1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duIHRleHQtNXhsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgJy0tdmFsdWUnOiAwIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc30+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICBob3Vyc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC0zIHJvdW5kZWQtYm94IGJnLXNlY29uZGFyeSB0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24gdGV4dC01eGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAnLS12YWx1ZSc6IDAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIG1pblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC0zIHJvdW5kZWQtYm94IGJnLW5ldXRyYWwgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duIHRleHQtNXhsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgJy0tdmFsdWUnOiBjb3VudGVyIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc30+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICBzZWNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPSchdGV4dC14bCAhbXQtNSB0ZXh0LWluZm8gdGV4dC1jZW50ZXInIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIFRpbWUgdG8gY29ubmVjdCBpcyBzbGlwcGluZyBhd2F5ICEgXG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgTWlzc2VkIGNoYW5jZXM6IFtjb3VudF1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duVGltZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUeXBvZ3JhcGh5IiwiQ291bnRkb3duVGltZXIiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2Q291bnRlciIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJndXR0ZXJCb3R0b20iLCJzcGFuIiwic3R5bGUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/countdownTimer.tsx\n"));

/***/ })

});