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

/***/ "(app-pages-browser)/./app/component/tapCard.tsx":
/*!***********************************!*\
  !*** ./app/component/tapCard.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TapCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ \"(app-pages-browser)/./app/component/icon.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TapCard() {\n    var _items_find, _items_find1;\n    _s();\n    const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const items = [\n        {\n            id: 1,\n            title: \"Programming Languages\",\n            content: \"Java, TypeScript, Python, C#, JavaScript (ReactJS, NextJS, NodeJS)\"\n        },\n        {\n            id: 2,\n            title: \"Databases\",\n            content: \"SQL(Oracle, PostgreSQL, MySQL), MongoDB\"\n        },\n        {\n            id: 3,\n            title: \"Cloud and Containerization\",\n            content: \"AWS(Amazon Web Services), Oracle Cloud, Docker, Kubernetes\"\n        },\n        {\n            id: 4,\n            title: \"Web Development\",\n            content: \"ASP.NET MVC, HTML, CSS, TailwindCSS, RESTful API Integration, MUI\"\n        },\n        {\n            id: 5,\n            title: \"Methodologies\",\n            content: \"Agile, Waterfall, DevOps, TDD (Test-Driven Development)\"\n        },\n        {\n            id: 6,\n            title: \"Others\",\n            content: \"Git, Project Management, Figma, FCPX(Final Cut Pro X)\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:grid md:grid-cols-3 xs:grid xs:grid-cols-2 justify-items-center \",\n        children: [\n            items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    layoutId: item.id.toString(),\n                    onClick: ()=>setSelectedId(item.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"shadow-xl rounded-lg\",\n                        sx: {\n                            width: {\n                                xs: 50,\n                                sm: 100,\n                                md: 300\n                            },\n                            height: 200,\n                            margin: 2,\n                            cursor: \"pointer\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h5, {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this)\n                }, item.id, false, {\n                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                children: selectedId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        initial: {\n                            backgroundColor: \"rgba(0, 0, 0, 0)\"\n                        },\n                        animate: {\n                            backgroundColor: \"rgba(0, 0, 0, 0.5)\"\n                        },\n                        exit: {\n                            backgroundColor: \"rgba(0, 0, 0, 0)\"\n                        },\n                        style: {\n                            position: \"fixed\",\n                            top: 0,\n                            left: 0,\n                            right: 0,\n                            bottom: 0,\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            zIndex: 1000\n                        },\n                        onClick: ()=>setSelectedId(null),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            layoutId: selectedId.toString(),\n                            style: {\n                                zIndex: 1001\n                            },\n                            onClick: (e)=>e.stopPropagation(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                sx: {\n                                    width: {\n                                        xs: 320,\n                                        sm: 400,\n                                        md: 300\n                                    },\n                                    maxWidth: \"90vw\",\n                                    height: \"300\",\n                                    maxHeight: \"300vh\",\n                                    overflow: \"auto\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {\n                                                    className: \"font-extrabold\",\n                                                    children: (_items_find = items.find((item)=>item.id === selectedId)) === null || _items_find === void 0 ? void 0 : _items_find.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 45\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {\n                                                    onClick: ()=>setSelectedId(null),\n                                                    children: [\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                            name: \"closeSmall\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 97\n                                                        }, this),\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 45\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h4, {\n                                            children: (_items_find1 = items.find((item)=>item.id === selectedId)) === null || _items_find1 === void 0 ? void 0 : _items_find1.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(TapCard, \"6tRyBKpA6Tf8zEXxvntvrffDmeA=\");\n_c = TapCard;\nvar _c;\n$RefreshReg$(_c, \"TapCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvdGFwQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDcEM7QUFDTTtBQUNXO0FBQ3hCO0FBUVgsU0FBU007UUE4RDJEQyxhQUkvQkE7O0lBakVoRCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQWdCO0lBQzVELE1BQU1NLFFBQWdCO1FBQ2xCO1lBQUVHLElBQUk7WUFBR0MsT0FBTztZQUF5QkMsU0FBUztRQUFxRTtRQUN2SDtZQUFFRixJQUFJO1lBQUdDLE9BQU87WUFBYUMsU0FBUztRQUEwQztRQUNoRjtZQUFFRixJQUFJO1lBQUdDLE9BQU87WUFBOEJDLFNBQVM7UUFBNkQ7UUFDcEg7WUFBRUYsSUFBSTtZQUFHQyxPQUFPO1lBQW1CQyxTQUFTO1FBQW9FO1FBQ2hIO1lBQUVGLElBQUk7WUFBR0MsT0FBTztZQUFpQkMsU0FBUztRQUEwRDtRQUNwRztZQUFFRixJQUFJO1lBQUdDLE9BQU87WUFBVUMsU0FBUztRQUF3RDtLQUM5RjtJQUVELHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOztZQUNWUCxNQUFNUSxHQUFHLENBQUNDLENBQUFBLHFCQUNQLDhEQUFDZCxpREFBTUEsQ0FBQ1csR0FBRztvQkFBZUksVUFBVUQsS0FBS04sRUFBRSxDQUFDUSxRQUFRO29CQUFJQyxTQUFTLElBQU1WLGNBQWNPLEtBQUtOLEVBQUU7OEJBQ3hGLDRFQUFDUCw0RkFBSUE7d0JBQUNXLFdBQVU7d0JBQXVCTSxJQUFJOzRCQUN2Q0MsT0FBTztnQ0FBRUMsSUFBSTtnQ0FBSUMsSUFBSTtnQ0FBS0MsSUFBSTs0QkFBSTs0QkFDbENDLFFBQVE7NEJBQ1JDLFFBQVE7NEJBQ1JDLFFBQVE7d0JBQ1o7a0NBQ0ksNEVBQUN2Qiw0RkFBV0E7c0NBQ1IsNEVBQUNGLGlEQUFNQSxDQUFDMEIsRUFBRTswQ0FBRVosS0FBS0wsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OzttQkFSakJLLEtBQUtOLEVBQUU7Ozs7OzBCQWM1Qiw4REFBQ1YsMERBQWVBOzBCQUNYUSw0QkFDRzs4QkFDSSw0RUFBQ04saURBQU1BLENBQUNXLEdBQUc7d0JBQ1BnQixTQUFTOzRCQUFFQyxpQkFBaUI7d0JBQW1CO3dCQUMvQ0MsU0FBUzs0QkFBRUQsaUJBQWlCO3dCQUFxQjt3QkFDakRFLE1BQU07NEJBQUVGLGlCQUFpQjt3QkFBbUI7d0JBQzVDRyxPQUFPOzRCQUNIQyxVQUFVOzRCQUNWQyxLQUFLOzRCQUNMQyxNQUFNOzRCQUNOQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxTQUFTOzRCQUNUQyxZQUFZOzRCQUNaQyxnQkFBZ0I7NEJBQ2hCQyxRQUFRO3dCQUNaO3dCQUNBdkIsU0FBUyxJQUFNVixjQUFjO2tDQUU3Qiw0RUFBQ1AsaURBQU1BLENBQUNXLEdBQUc7NEJBQ1BJLFVBQVVULFdBQVdVLFFBQVE7NEJBQzdCZSxPQUFPO2dDQUFFUyxRQUFROzRCQUFLOzRCQUN0QnZCLFNBQVMsQ0FBQ3dCLElBQU1BLEVBQUVDLGVBQWU7c0NBRWpDLDRFQUFDekMsNEZBQUlBO2dDQUFDaUIsSUFBSTtvQ0FDTkMsT0FBTzt3Q0FBRUMsSUFBSTt3Q0FBS0MsSUFBSTt3Q0FBS0MsSUFBSTtvQ0FBSTtvQ0FDbkNxQixVQUFVO29DQUNWcEIsUUFBUTtvQ0FDUnFCLFdBQVc7b0NBQ1hDLFVBQVU7Z0NBQ2Q7MENBQ0ksNEVBQUMzQyw0RkFBV0E7O3NEQUNSLDhEQUFDUzs0Q0FBSUMsV0FBVTs7OERBQ1gsOERBQUNaLGlEQUFNQSxDQUFDOEMsRUFBRTtvREFBQ2xDLFdBQVU7K0RBQWtCUCxjQUFBQSxNQUFNMEMsSUFBSSxDQUFDakMsQ0FBQUEsT0FBUUEsS0FBS04sRUFBRSxLQUFLRix5QkFBL0JELGtDQUFBQSxZQUE0Q0ksS0FBSzs7Ozs7OzhEQUN4Riw4REFBQ1QsaURBQU1BLENBQUNnRCxNQUFNO29EQUFDL0IsU0FBUyxJQUFNVixjQUFjOzt3REFBTztzRUFBQyw4REFBQ0osNkNBQUlBOzREQUFDOEMsTUFBSzs7Ozs7O3dEQUFjOzs7Ozs7Ozs7Ozs7O3NEQUdqRiw4REFBQ2pELGlEQUFNQSxDQUFDa0QsRUFBRTt1REFBRTdDLGVBQUFBLE1BQU0wQyxJQUFJLENBQUNqQyxDQUFBQSxPQUFRQSxLQUFLTixFQUFFLEtBQUtGLHlCQUEvQkQsbUNBQUFBLGFBQTRDSyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdkc7R0E1RXdCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50L3RhcENhcmQudHN4P2FlNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0ZVNoYXJlZExheW91dCwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBJY29uIGZyb20gXCIuL2ljb25cIjtcblxuaW50ZXJmYWNlIEl0ZW0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhcENhcmQoKSB7XG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgaXRlbXM6IEl0ZW1bXSA9IFtcbiAgICAgICAgeyBpZDogMSwgdGl0bGU6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzXCIsIGNvbnRlbnQ6IFwiSmF2YSwgVHlwZVNjcmlwdCwgUHl0aG9uLCBDIywgSmF2YVNjcmlwdCAoUmVhY3RKUywgTmV4dEpTLCBOb2RlSlMpXCIgfSxcbiAgICAgICAgeyBpZDogMiwgdGl0bGU6IFwiRGF0YWJhc2VzXCIsIGNvbnRlbnQ6IFwiU1FMKE9yYWNsZSwgUG9zdGdyZVNRTCwgTXlTUUwpLCBNb25nb0RCXCIgfSxcbiAgICAgICAgeyBpZDogMywgdGl0bGU6IFwiQ2xvdWQgYW5kIENvbnRhaW5lcml6YXRpb25cIiwgY29udGVudDogXCJBV1MoQW1hem9uIFdlYiBTZXJ2aWNlcyksIE9yYWNsZSBDbG91ZCwgRG9ja2VyLCBLdWJlcm5ldGVzXCIgfSxcbiAgICAgICAgeyBpZDogNCwgdGl0bGU6IFwiV2ViIERldmVsb3BtZW50XCIsIGNvbnRlbnQ6IFwiQVNQLk5FVCBNVkMsIEhUTUwsIENTUywgVGFpbHdpbmRDU1MsIFJFU1RmdWwgQVBJIEludGVncmF0aW9uLCBNVUlcIiB9LFxuICAgICAgICB7IGlkOiA1LCB0aXRsZTogXCJNZXRob2RvbG9naWVzXCIsIGNvbnRlbnQ6IFwiQWdpbGUsIFdhdGVyZmFsbCwgRGV2T3BzLCBUREQgKFRlc3QtRHJpdmVuIERldmVsb3BtZW50KVwiIH0sXG4gICAgICAgIHsgaWQ6IDYsIHRpdGxlOiBcIk90aGVyc1wiLCBjb250ZW50OiBcIkdpdCwgUHJvamVjdCBNYW5hZ2VtZW50LCBGaWdtYSwgRkNQWChGaW5hbCBDdXQgUHJvIFgpXCIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0zIHhzOmdyaWQgeHM6Z3JpZC1jb2xzLTIganVzdGlmeS1pdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT17aXRlbS5pZH0gbGF5b3V0SWQ9e2l0ZW0uaWQudG9TdHJpbmcoKX0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJZChpdGVtLmlkKX0gPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1sZ1wiIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IDUwLCBzbTogMTAwLCBtZDogMzAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmg1PntpdGVtLnRpdGxlfTwvbW90aW9uLmg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgIFxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSWQobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e3NlbGVjdGVkSWQudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxMDAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogMzIwLCBzbTogNDAwLCBtZDogMzAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzkwdncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzAwJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMDB2aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5oMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZFwiPntpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRJZCk/LnRpdGxlfTwvbW90aW9uLmgxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZElkKG51bGwpfT4gPEljb24gbmFtZT1cImNsb3NlU21hbGxcIi8+IDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaDQ+e2l0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZElkKT8uY29udGVudH08L21vdGlvbi5oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJJY29uIiwiVGFwQ2FyZCIsIml0ZW1zIiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJsYXlvdXRJZCIsInRvU3RyaW5nIiwib25DbGljayIsInN4Iiwid2lkdGgiLCJ4cyIsInNtIiwibWQiLCJoZWlnaHQiLCJtYXJnaW4iLCJjdXJzb3IiLCJoNSIsImluaXRpYWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbmltYXRlIiwiZXhpdCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiekluZGV4IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoMSIsImZpbmQiLCJidXR0b24iLCJuYW1lIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/tapCard.tsx\n"));

/***/ })

});