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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _component_testimonialCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/testimonialCard */ \"(app-pages-browser)/./app/component/testimonialCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _style_testimonial_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/testimonial.css */ \"(app-pages-browser)/./app/style/testimonial.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cool-dimensions */ \"(app-pages-browser)/./node_modules/react-cool-dimensions/dist/index.esm.js\");\n/* harmony import */ var _component_flashingArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/flashingArrow */ \"(app-pages-browser)/./app/component/flashingArrow.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n//https://blog.uxfol.io/professional-portfolio/\nfunction Home() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { scrollXProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useScroll)({\n        container: ref\n    });\n    const content1 = \"Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels.\";\n    const content2 = \"even promote the best-performing videos to different marketing channels.\";\n    function arrayCeil(arr, number) {\n        const sorted = arr.sort((a, b)=>a - b);\n        for(let i = 0; i < arr.length; i++){\n            if (arr[i] > number) {\n                return sorted[i];\n            }\n        }\n        // If no index found return the last element\n        return sorted[sorted.length - 1];\n    }\n    const [heroImage, setHeroImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"hero-1920.jpg\");\n    const imageSizes = [\n        600,\n        1280,\n        1920\n    ];\n    const { observe, unobserve, width, height, entry } = (0,react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        onResize: (param)=>{\n            let { observe, unobserve, width, height, entry } = param;\n            setHeroImage(\"hero-\".concat(arrayCeil(imageSizes, width), \".jpg\"));\n            unobserve(); // To stop observing the current target element\n            observe(); // To re-start observing the current target element\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: observe,\n                    className: \"w-full h-screen flex justify-center items-center overflow-hidden relative bg-black\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            src: \"/\".concat(heroImage),\n                            alt: \"Imag of Claire\",\n                            className: \"opacity-60 object-cover\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center px-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg\",\n                                    children: [\n                                        \"Hello! \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 104\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-primary\",\n                                            children: \"This is Claire\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-5 text-center text-lg text-white opacity-90\",\n                                    children: \"a full stack developer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-25\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_flashingArrow__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center gap-4 my-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            id: \"progress\",\n                            width: \"50\",\n                            height: \"50\",\n                            viewBox: \"0 0 100 100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    cx: \"50\",\n                                    cy: \"50\",\n                                    r: \"30\",\n                                    className: \"bg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.circle, {\n                                    cx: \"50\",\n                                    cy: \"50\",\n                                    r: \"30\",\n                                    className: \"indicator\",\n                                    style: {\n                                        pathLength: scrollXProgress\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"text-3xl\",\n                            children: \"Testimonials\"\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mx-5\",\n                    ref: ref,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_testimonialCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            name: \"Claire\",\n                            position: \"Software Engineer\",\n                            content: content1\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_testimonialCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            name: \"Claire\",\n                            position: \"Software Engineer\",\n                            content: content2\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_testimonialCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            name: \"Claire\",\n                            position: \"Software Engineer\",\n                            content: \"Claire's testimonial content\"\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_testimonialCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            name: \"Claire\",\n                            position: \"Software Engineer\",\n                            content: \"Claire's testimonial content\"\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_testimonialCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            name: \"Claire\",\n                            position: \"Software Engineer\",\n                            content: \"Claire's testimonial content\"\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_testimonialCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            name: \"Claire\",\n                            position: \"Software Engineer\",\n                            content: \"Claire's testimonial content\"\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"pAhk/VBCulUtDIBDW6+Z3Nw+ir4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useScroll,\n        react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\n{}var _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U3pDOzs7Ozs7c0NBQ3JFLDhEQUFDYixrRUFBZUE7NEJBQUNvRCxNQUFLOzRCQUFTQyxVQUFTOzRCQUFvQkMsU0FBUTs7Ozs7O3NDQUNwRSw4REFBQ3RELGtFQUFlQTs0QkFBQ29ELE1BQUs7NEJBQVNDLFVBQVM7NEJBQW9CQyxTQUFROzs7Ozs7c0NBQ3BFLDhEQUFDdEQsa0VBQWVBOzRCQUFDb0QsTUFBSzs0QkFBU0MsVUFBUzs0QkFBb0JDLFNBQVE7Ozs7OztzQ0FDcEUsOERBQUN0RCxrRUFBZUE7NEJBQUNvRCxNQUFLOzRCQUFTQyxVQUFTOzRCQUFvQkMsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUU7R0FsRndCOUM7O1FBRU1KLG9EQUFTQTtRQW9CZ0JFLDZEQUFhQTs7O0tBdEI1Q0U7QUFvRmxCLENBSVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHtCb3gsIENhcmQsIFN0YWNrLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSwgQXZhdGFyLCBSYXRpbmd9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFRlc3RpbW9uaWFsQ2FyZCBmcm9tIFwiLi9jb21wb25lbnQvdGVzdGltb25pYWxDYXJkXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgXCIuL3N0eWxlL3Rlc3RpbW9uaWFsLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tICdyZWFjdC1jb29sLWRpbWVuc2lvbnMnO1xuaW1wb3J0IEZsYXNoaW5nQXJyb3cgZnJvbSBcIi4vY29tcG9uZW50L2ZsYXNoaW5nQXJyb3dcIjtcblxuXG4vL2h0dHBzOi8vYmxvZy51eGZvbC5pby9wcm9mZXNzaW9uYWwtcG9ydGZvbGlvL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB7IHNjcm9sbFhQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHsgY29udGFpbmVyOiByZWYgfSk7XG5cbiAgY29uc3QgY29udGVudDEgPSBcIlRyYWNrIHRoZSBtZXRyaWNzIGZyb20gYWxsIGVtYmVkZGVkIHZpZGVvcywgaGVscCB5b3VyIG1hcmtldGluZyB0ZWFtIHVuZGVyc3RhbmQgdGhlIHBlcmZvcm1hbmNlIGF0IGEgZ2xhbmNlLCBldmVuIHByb21vdGUgdGhlIGJlc3QtcGVyZm9ybWluZyB2aWRlb3MgdG8gZGlmZmVyZW50IG1hcmtldGluZyBjaGFubmVscyBldmVuIHByb21vdGUgdGhlIGJlc3QtcGVyZm9ybWluZyB2aWRlb3MgdG8gZGlmZmVyZW50IG1hcmtldGluZyBjaGFubmVscy4gZXZlbiBwcm9tb3RlIHRoZSBiZXN0LXBlcmZvcm1pbmcgdmlkZW9zIHRvIGRpZmZlcmVudCBtYXJrZXRpbmcgY2hhbm5lbHMuIGV2ZW4gcHJvbW90ZSB0aGUgYmVzdC1wZXJmb3JtaW5nIHZpZGVvcyB0byBkaWZmZXJlbnQgbWFya2V0aW5nIGNoYW5uZWxzLiBldmVuIHByb21vdGUgdGhlIGJlc3QtcGVyZm9ybWluZyB2aWRlb3MgdG8gZGlmZmVyZW50IG1hcmtldGluZyBjaGFubmVscy5cIlxuICBjb25zdCBjb250ZW50MiA9IFwiZXZlbiBwcm9tb3RlIHRoZSBiZXN0LXBlcmZvcm1pbmcgdmlkZW9zIHRvIGRpZmZlcmVudCBtYXJrZXRpbmcgY2hhbm5lbHMuXCJcblxuICBmdW5jdGlvbiBhcnJheUNlaWwoYXJyOiBhbnksIG51bWJlcjphbnkgKSB7XG4gICAgY29uc3Qgc29ydGVkID0gYXJyLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhIC0gYik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldID4gbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydGVkW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gaW5kZXggZm91bmQgcmV0dXJuIHRoZSBsYXN0IGVsZW1lbnRcbiAgICByZXR1cm4gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGNvbnN0IFtoZXJvSW1hZ2UsIHNldEhlcm9JbWFnZV0gPSB1c2VTdGF0ZSgnaGVyby0xOTIwLmpwZycpXG4gIGNvbnN0IGltYWdlU2l6ZXMgPSBbNjAwLCAxMjgwLCAxOTIwXVxuICBjb25zdCB7IG9ic2VydmUsIHVub2JzZXJ2ZSwgd2lkdGgsIGhlaWdodCwgZW50cnkgfSA9IHVzZURpbWVuc2lvbnMoe1xuICAgICAgb25SZXNpemU6ICh7IG9ic2VydmUsIHVub2JzZXJ2ZSwgd2lkdGgsIGhlaWdodCwgZW50cnkgfSkgPT4ge1xuICAgICAgICAgIHNldEhlcm9JbWFnZShgaGVyby0ke2FycmF5Q2VpbChpbWFnZVNpemVzLCB3aWR0aCl9LmpwZ2ApXG4gICAgICAgICAgdW5vYnNlcnZlKCk7IC8vIFRvIHN0b3Agb2JzZXJ2aW5nIHRoZSBjdXJyZW50IHRhcmdldCBlbGVtZW50XG4gICAgICAgICAgb2JzZXJ2ZSgpOyAvLyBUbyByZS1zdGFydCBvYnNlcnZpbmcgdGhlIGN1cnJlbnQgdGFyZ2V0IGVsZW1lbnRcbiAgICAgIH0sXG4gIH0pO1xuXG5cbiAgcmV0dXJuIChcbiAgPG1haW4+XG4gICAgPGRpdiA+XG4gICAgICB7LyogaGVybyBpbWFnZSBzZWN0aW9uICovfVxuICAgICAgPGRpdlxuICAgICAgcmVmPXtvYnNlcnZlfVxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSBiZy1ibGFja1wiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2AvJHtoZXJvSW1hZ2V9YH1cbiAgICAgICAgICBhbHQ9XCJJbWFnIG9mIENsYWlyZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS02MCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgIGZpbGxcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0zXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBkcm9wLXNoYWRvdy1sZ1wiPkhlbGxvISA8YnIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+VGhpcyBpcyBDbGFpcmU8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZSBvcGFjaXR5LTkwXCI+YSBmdWxsIHN0YWNrIGRldmVsb3BlcjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTI1XCI+XG4gICAgICAgICAgPEZsYXNoaW5nQXJyb3cgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFRlc3RpbW9uaWFsIHNlY3Rpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00IG15LTEwXCI+XG4gICAgICAgIDxzdmcgaWQ9XCJwcm9ncmVzc1wiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMzBcIiBjbGFzc05hbWU9XCJiZ1wiIC8+XG4gICAgICAgICAgPG1vdGlvbi5jaXJjbGVcbiAgICAgICAgICAgIGN4PVwiNTBcIlxuICAgICAgICAgICAgY3k9XCI1MFwiXG4gICAgICAgICAgICByPVwiMzBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhdGhMZW5ndGg6IHNjcm9sbFhQcm9ncmVzcyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9J3RleHQtM3hsJyA+XG4gICAgICAgICAgVGVzdGltb25pYWxzICAgICAgXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT0nbXgtNScgcmVmPXtyZWZ9PlxuICAgICAgICA8VGVzdGltb25pYWxDYXJkIG5hbWU9XCJDbGFpcmVcIiBwb3NpdGlvbj1cIlNvZnR3YXJlIEVuZ2luZWVyXCIgY29udGVudD17Y29udGVudDF9IC8+IFxuICAgICAgICA8VGVzdGltb25pYWxDYXJkIG5hbWU9XCJDbGFpcmVcIiBwb3NpdGlvbj1cIlNvZnR3YXJlIEVuZ2luZWVyXCIgY29udGVudD17Y29udGVudDJ9IC8+IFxuICAgICAgICA8VGVzdGltb25pYWxDYXJkIG5hbWU9XCJDbGFpcmVcIiBwb3NpdGlvbj1cIlNvZnR3YXJlIEVuZ2luZWVyXCIgY29udGVudD1cIkNsYWlyZSdzIHRlc3RpbW9uaWFsIGNvbnRlbnRcIiAvPiBcbiAgICAgICAgPFRlc3RpbW9uaWFsQ2FyZCBuYW1lPVwiQ2xhaXJlXCIgcG9zaXRpb249XCJTb2Z0d2FyZSBFbmdpbmVlclwiIGNvbnRlbnQ9XCJDbGFpcmUncyB0ZXN0aW1vbmlhbCBjb250ZW50XCIgLz4gXG4gICAgICAgIDxUZXN0aW1vbmlhbENhcmQgbmFtZT1cIkNsYWlyZVwiIHBvc2l0aW9uPVwiU29mdHdhcmUgRW5naW5lZXJcIiBjb250ZW50PVwiQ2xhaXJlJ3MgdGVzdGltb25pYWwgY29udGVudFwiIC8+IFxuICAgICAgICA8VGVzdGltb25pYWxDYXJkIG5hbWU9XCJDbGFpcmVcIiBwb3NpdGlvbj1cIlNvZnR3YXJlIEVuZ2luZWVyXCIgY29udGVudD1cIkNsYWlyZSdzIHRlc3RpbW9uaWFsIGNvbnRlbnRcIiAvPiBcbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cbiAgKTtcbn1cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIDxUZXN0aW1vbmlhbENhcmQgbmFtZT1cIkNsYWlyZVwiIHBvc2l0aW9uPVwiU29mdHdhcmUgRW5naW5lZXJcIiBjb250ZW50PVwiQ2xhaXJlJ3MgdGVzdGltb25pYWwgY29udGVudFwiIC8+XG4gICAgICAgIDxUZXN0aW1vbmlhbENhcmQgbmFtZT1cIkNsYWlyZVwiIHBvc2l0aW9uPVwiU29mdHdhcmUgRW5naW5lZXJcIiBjb250ZW50PVwiQ2xhaXJlJ3MgdGVzdGltb25pYWwgY29udGVudFwiIC8+XG4gICAgICAgIDxUZXN0aW1vbmlhbENhcmQgbmFtZT1cIkNsYWlyZVwiIHBvc2l0aW9uPVwiU29mdHdhcmUgRW5naW5lZXJcIiBjb250ZW50PVwiQ2xhaXJlJ3MgdGVzdGltb25pYWwgY29udGVudFwiIC8+XG4gICAgICA8L2Rpdj4gKi99XG4iXSwibmFtZXMiOlsiVHlwb2dyYXBoeSIsIlRlc3RpbW9uaWFsQ2FyZCIsInVzZVJlZiIsInVzZVN0YXRlIiwibW90aW9uIiwidXNlU2Nyb2xsIiwiSW1hZ2UiLCJ1c2VEaW1lbnNpb25zIiwiRmxhc2hpbmdBcnJvdyIsIkhvbWUiLCJyZWYiLCJzY3JvbGxYUHJvZ3Jlc3MiLCJjb250YWluZXIiLCJjb250ZW50MSIsImNvbnRlbnQyIiwiYXJyYXlDZWlsIiwiYXJyIiwibnVtYmVyIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwiaSIsImxlbmd0aCIsImhlcm9JbWFnZSIsInNldEhlcm9JbWFnZSIsImltYWdlU2l6ZXMiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwid2lkdGgiLCJoZWlnaHQiLCJlbnRyeSIsIm9uUmVzaXplIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImZpbGwiLCJoMSIsImJyIiwic3BhbiIsInAiLCJzdmciLCJpZCIsInZpZXdCb3giLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInN0eWxlIiwicGF0aExlbmd0aCIsInVsIiwibmFtZSIsInBvc2l0aW9uIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});