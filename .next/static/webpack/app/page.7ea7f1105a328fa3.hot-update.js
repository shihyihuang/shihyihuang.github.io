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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TapCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ \"(app-pages-browser)/./app/component/icon.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TapCard() {\n    var _items_find, _items_find1;\n    _s();\n    const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const items = [\n        {\n            id: 1,\n            title: \"Programming Languages\",\n            content: \"Java, TypeScript, Python, C#, JavaScript (ReactJS, NextJS, NodeJS)\"\n        },\n        {\n            id: 2,\n            title: \"Databases\",\n            content: \"SQL(Oracle, PostgreSQL, MySQL), MongoDB\"\n        },\n        {\n            id: 3,\n            title: \"Cloud and Containerization\",\n            content: \"AWS(Amazon Web Services), Oracle Cloud, Docker, Kubernetes\"\n        },\n        {\n            id: 4,\n            title: \"Web Development\",\n            content: \"ASP.NET MVC, HTML, CSS, TailwindCSS, RESTful API Integration, MUI\"\n        },\n        {\n            id: 5,\n            title: \"Methodologies\",\n            content: \"Agile, Waterfall, DevOps, TDD (Test-Driven Development)\"\n        },\n        {\n            id: 6,\n            title: \"Others\",\n            content: \"Git, Project Management, Figma, FCPX(Final Cut Pro X)\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-center\",\n        children: [\n            items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    layoutId: item.id.toString(),\n                    onClick: ()=>setSelectedId(item.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"shadow-xl rounded-lg\",\n                        sx: {\n                            width: {\n                                xs: 280,\n                                sm: 200,\n                                md: 250\n                            },\n                            height: 200,\n                            margin: 2,\n                            cursor: \"pointer\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h5, {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this)\n                }, item.id, false, {\n                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                children: selectedId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        initial: {\n                            backgroundColor: \"rgba(0, 0, 0, 0)\"\n                        },\n                        animate: {\n                            backgroundColor: \"rgba(0, 0, 0, 0.5)\"\n                        },\n                        exit: {\n                            backgroundColor: \"rgba(0, 0, 0, 0)\"\n                        },\n                        style: {\n                            position: \"fixed\",\n                            top: 0,\n                            left: 0,\n                            right: 0,\n                            bottom: 0,\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            zIndex: 1000\n                        },\n                        onClick: ()=>setSelectedId(null),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            layoutId: selectedId.toString(),\n                            style: {\n                                zIndex: 1001\n                            },\n                            onClick: (e)=>e.stopPropagation(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                sx: {\n                                    width: {\n                                        xs: 320,\n                                        sm: 400,\n                                        md: 480\n                                    },\n                                    maxWidth: \"90vw\",\n                                    height: \"200\",\n                                    maxHeight: \"200vh\",\n                                    overflow: \"auto\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h2, {\n                                                    children: (_items_find = items.find((item)=>item.id === selectedId)) === null || _items_find === void 0 ? void 0 : _items_find.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 45\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {\n                                                    onClick: ()=>setSelectedId(null),\n                                                    children: [\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                            name: \"closeSmall\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 97\n                                                        }, this),\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 45\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h5, {\n                                            children: (_items_find1 = items.find((item)=>item.id === selectedId)) === null || _items_find1 === void 0 ? void 0 : _items_find1.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(TapCard, \"6tRyBKpA6Tf8zEXxvntvrffDmeA=\");\n_c = TapCard;\nvar _c;\n$RefreshReg$(_c, \"TapCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvdGFwQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDcEM7QUFDTTtBQUNXO0FBQ3hCO0FBUVgsU0FBU007UUE4RGdDQyxhQUlKQTs7SUFqRWhELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBZ0I7SUFDNUQsTUFBTU0sUUFBZ0I7UUFDbEI7WUFBRUcsSUFBSTtZQUFHQyxPQUFPO1lBQXlCQyxTQUFTO1FBQXFFO1FBQ3ZIO1lBQUVGLElBQUk7WUFBR0MsT0FBTztZQUFhQyxTQUFTO1FBQTBDO1FBQ2hGO1lBQUVGLElBQUk7WUFBR0MsT0FBTztZQUE4QkMsU0FBUztRQUE2RDtRQUNwSDtZQUFFRixJQUFJO1lBQUdDLE9BQU87WUFBbUJDLFNBQVM7UUFBb0U7UUFDaEg7WUFBRUYsSUFBSTtZQUFHQyxPQUFPO1lBQWlCQyxTQUFTO1FBQTBEO1FBQ3BHO1lBQUVGLElBQUk7WUFBR0MsT0FBTztZQUFVQyxTQUFTO1FBQXdEO0tBQzlGO0lBRUQscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7O1lBQ1ZQLE1BQU1RLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1AsOERBQUNkLGlEQUFNQSxDQUFDVyxHQUFHO29CQUFlSSxVQUFVRCxLQUFLTixFQUFFLENBQUNRLFFBQVE7b0JBQUlDLFNBQVMsSUFBTVYsY0FBY08sS0FBS04sRUFBRTs4QkFDeEYsNEVBQUNQLDRGQUFJQTt3QkFBQ1csV0FBVTt3QkFBdUJNLElBQUk7NEJBQ3ZDQyxPQUFPO2dDQUFFQyxJQUFJO2dDQUFLQyxJQUFJO2dDQUFLQyxJQUFJOzRCQUFJOzRCQUNuQ0MsUUFBUTs0QkFDUkMsUUFBUTs0QkFDUkMsUUFBUTt3QkFDWjtrQ0FDSSw0RUFBQ3ZCLDRGQUFXQTtzQ0FDUiw0RUFBQ0YsaURBQU1BLENBQUMwQixFQUFFOzBDQUFFWixLQUFLTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O21CQVJqQkssS0FBS04sRUFBRTs7Ozs7MEJBYzVCLDhEQUFDViwwREFBZUE7MEJBQ1hRLDRCQUNHOzhCQUNJLDRFQUFDTixpREFBTUEsQ0FBQ1csR0FBRzt3QkFDUGdCLFNBQVM7NEJBQUVDLGlCQUFpQjt3QkFBbUI7d0JBQy9DQyxTQUFTOzRCQUFFRCxpQkFBaUI7d0JBQXFCO3dCQUNqREUsTUFBTTs0QkFBRUYsaUJBQWlCO3dCQUFtQjt3QkFDNUNHLE9BQU87NEJBQ0hDLFVBQVU7NEJBQ1ZDLEtBQUs7NEJBQ0xDLE1BQU07NEJBQ05DLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFNBQVM7NEJBQ1RDLFlBQVk7NEJBQ1pDLGdCQUFnQjs0QkFDaEJDLFFBQVE7d0JBQ1o7d0JBQ0F2QixTQUFTLElBQU1WLGNBQWM7a0NBRTdCLDRFQUFDUCxpREFBTUEsQ0FBQ1csR0FBRzs0QkFDUEksVUFBVVQsV0FBV1UsUUFBUTs0QkFDN0JlLE9BQU87Z0NBQUVTLFFBQVE7NEJBQUs7NEJBQ3RCdkIsU0FBUyxDQUFDd0IsSUFBTUEsRUFBRUMsZUFBZTtzQ0FFakMsNEVBQUN6Qyw0RkFBSUE7Z0NBQUNpQixJQUFJO29DQUNOQyxPQUFPO3dDQUFFQyxJQUFJO3dDQUFLQyxJQUFJO3dDQUFLQyxJQUFJO29DQUFJO29DQUNuQ3FCLFVBQVU7b0NBQ1ZwQixRQUFRO29DQUNScUIsV0FBVztvQ0FDWEMsVUFBVTtnQ0FDZDswQ0FDSSw0RUFBQzNDLDRGQUFXQTs7c0RBQ1IsOERBQUNTOzRDQUFJQyxXQUFVOzs4REFDWCw4REFBQ1osaURBQU1BLENBQUM4QyxFQUFFOytEQUFFekMsY0FBQUEsTUFBTTBDLElBQUksQ0FBQ2pDLENBQUFBLE9BQVFBLEtBQUtOLEVBQUUsS0FBS0YseUJBQS9CRCxrQ0FBQUEsWUFBNENJLEtBQUs7Ozs7Ozs4REFDN0QsOERBQUNULGlEQUFNQSxDQUFDZ0QsTUFBTTtvREFBQy9CLFNBQVMsSUFBTVYsY0FBYzs7d0RBQU87c0VBQUMsOERBQUNKLDZDQUFJQTs0REFBQzhDLE1BQUs7Ozs7Ozt3REFBYzs7Ozs7Ozs7Ozs7OztzREFHakYsOERBQUNqRCxpREFBTUEsQ0FBQzBCLEVBQUU7dURBQUVyQixlQUFBQSxNQUFNMEMsSUFBSSxDQUFDakMsQ0FBQUEsT0FBUUEsS0FBS04sRUFBRSxLQUFLRix5QkFBL0JELG1DQUFBQSxhQUE0Q0ssT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXZHO0dBNUV3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudC90YXBDYXJkLnRzeD9hZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGVTaGFyZWRMYXlvdXQsIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29uXCI7XG5cbmludGVyZmFjZSBJdGVtIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXBDYXJkKCkge1xuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGl0ZW1zOiBJdGVtW10gPSBbXG4gICAgICAgIHsgaWQ6IDEsIHRpdGxlOiBcIlByb2dyYW1taW5nIExhbmd1YWdlc1wiLCBjb250ZW50OiBcIkphdmEsIFR5cGVTY3JpcHQsIFB5dGhvbiwgQyMsIEphdmFTY3JpcHQgKFJlYWN0SlMsIE5leHRKUywgTm9kZUpTKVwiIH0sXG4gICAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcIkRhdGFiYXNlc1wiLCBjb250ZW50OiBcIlNRTChPcmFjbGUsIFBvc3RncmVTUUwsIE15U1FMKSwgTW9uZ29EQlwiIH0sXG4gICAgICAgIHsgaWQ6IDMsIHRpdGxlOiBcIkNsb3VkIGFuZCBDb250YWluZXJpemF0aW9uXCIsIGNvbnRlbnQ6IFwiQVdTKEFtYXpvbiBXZWIgU2VydmljZXMpLCBPcmFjbGUgQ2xvdWQsIERvY2tlciwgS3ViZXJuZXRlc1wiIH0sXG4gICAgICAgIHsgaWQ6IDQsIHRpdGxlOiBcIldlYiBEZXZlbG9wbWVudFwiLCBjb250ZW50OiBcIkFTUC5ORVQgTVZDLCBIVE1MLCBDU1MsIFRhaWx3aW5kQ1NTLCBSRVNUZnVsIEFQSSBJbnRlZ3JhdGlvbiwgTVVJXCIgfSxcbiAgICAgICAgeyBpZDogNSwgdGl0bGU6IFwiTWV0aG9kb2xvZ2llc1wiLCBjb250ZW50OiBcIkFnaWxlLCBXYXRlcmZhbGwsIERldk9wcywgVEREIChUZXN0LURyaXZlbiBEZXZlbG9wbWVudClcIiB9LFxuICAgICAgICB7IGlkOiA2LCB0aXRsZTogXCJPdGhlcnNcIiwgY29udGVudDogXCJHaXQsIFByb2plY3QgTWFuYWdlbWVudCwgRmlnbWEsIEZDUFgoRmluYWwgQ3V0IFBybyBYKVwiIH0sXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PXtpdGVtLmlkfSBsYXlvdXRJZD17aXRlbS5pZC50b1N0cmluZygpfSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZElkKGl0ZW0uaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbGdcIiBzeD17eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAyODAsIHNtOiAyMDAsIG1kOiAyNTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaDU+e2l0ZW0udGl0bGV9PC9tb3Rpb24uaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgXG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJZChudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRJZD17c2VsZWN0ZWRJZC50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDEwMDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAzMjAsIHNtOiA0MDAsIG1kOiA0ODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnOTB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMDAnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzIwMHZoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmgyPntpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRJZCk/LnRpdGxlfTwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZElkKG51bGwpfT4gPEljb24gbmFtZT1cImNsb3NlU21hbGxcIi8+IDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaDU+e2l0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZElkKT8uY29udGVudH08L21vdGlvbi5oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJJY29uIiwiVGFwQ2FyZCIsIml0ZW1zIiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJsYXlvdXRJZCIsInRvU3RyaW5nIiwib25DbGljayIsInN4Iiwid2lkdGgiLCJ4cyIsInNtIiwibWQiLCJoZWlnaHQiLCJtYXJnaW4iLCJjdXJzb3IiLCJoNSIsImluaXRpYWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbmltYXRlIiwiZXhpdCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiekluZGV4IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoMiIsImZpbmQiLCJidXR0b24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/tapCard.tsx\n"));

/***/ })

});