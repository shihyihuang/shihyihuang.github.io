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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TapCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TapCard() {\n    var _items_find, _items_find1;\n    _s();\n    const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const items = [\n        {\n            id: 1,\n            subtitle: \"Programming Languages\",\n            title: \"Java\"\n        },\n        {\n            id: 2,\n            subtitle: \"Programming Languages\",\n            title: \"Python\"\n        },\n        {\n            id: 3,\n            subtitle: \"Programming Languages\",\n            title: \"JavaScript\"\n        },\n        {\n            id: 4,\n            subtitle: \"Programming Languages\",\n            title: \"C++\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    layoutId: item.id.toString(),\n                    onClick: ()=>setSelectedId(item.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            width: {\n                                xs: 320,\n                                sm: 350,\n                                md: 400\n                            },\n                            height: 280,\n                            display: \"flex\",\n                            flexDirection: \"column\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h5, {\n                                    children: item.subtitle\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h2, {\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                }, item.id, false, {\n                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: selectedId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    layoutId: selectedId.toString(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            width: {\n                                xs: 320,\n                                sm: 350,\n                                md: 400\n                            },\n                            maxWidth: \"100%\",\n                            height: 280\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h5, {\n                                    children: (_items_find = items.find((item)=>item.id === selectedId)) === null || _items_find === void 0 ? void 0 : _items_find.subtitle\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h2, {\n                                    children: (_items_find1 = items.find((item)=>item.id === selectedId)) === null || _items_find1 === void 0 ? void 0 : _items_find1.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n                                    onClick: ()=>setSelectedId(null),\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n// const [index, setIndex] = useState(false);\n// const handleClose = useCallback(() => {\n//   setIndex(false);\n// }, []);\n// return (\n//   <LayoutGroup>\n//     <ul className={styles.gallery}>\n//       {[0, 1, 2, 3].map((item) => (\n//         <motion.li\n//           className={styles.item}\n//           key={item}\n//           layoutId={`${item}`}\n//           onClick={() => index === false && setIndex(item)}\n//           initial={{ borderRadius: \"0.6rem\" }}\n//         >\n//           <motion.div\n//             className={styles.placeholder}\n//             layoutId={`placeholder-${item}`}\n//           >\n//             <div />\n//             <div />\n//             <div />\n//           </motion.div>\n//           <motion.div\n//             className={styles.additional}\n//             layoutId={`additional-${item}`}\n//           >\n//             <div />\n//             <div />\n//             <div />\n//           </motion.div>\n//           <motion.div\n//             className={styles.itemClose}\n//             layoutId={`close-${item}`}\n//           />\n//         </motion.li>\n//       ))}\n//     </ul>\n//     <AnimatePresence>\n//       {index !== false && (\n//         <>\n//           <motion.div className={styles.modalContainer} key=\"modal\">\n//             <motion.div\n//               className={styles.modal}\n//               layoutId={`${index}`}\n//               initial={{ borderRadius: \"1.2rem\" }}\n//             >\n//               <motion.div\n//                 className={styles.placeholder}\n//                 layoutId={`placeholder-${index}`}\n//               >\n//                 <div />\n//                 <div />\n//                 <div />\n//               </motion.div>\n//               <motion.div\n//                 className={styles.additional}\n//                 layoutId={`additional-${index}`}\n//               >\n//                 <div />\n//                 <div />\n//                 <div />\n//               </motion.div>\n//               <motion.div\n//                 className={styles.modalClose}\n//                 layoutId={`close-${index}`}\n//                 onClick={handleClose}\n//                 initial={{ opacity: 0 }}\n//                 animate={{ opacity: 1 }}\n//                 exit={{ opacity: 0 }}\n//               >\n//                 <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n//                   <path\n//                     d=\"M15 5L5 15M5 5l5.03 5.03L15 15\"\n//                     fill=\"transparent\"\n//                     strokeWidth=\"2\"\n//                     stroke=\"currentColor\"\n//                     strokeLinecap=\"round\"\n//                   />\n//                 </svg>\n//               </motion.div>\n//             </motion.div>\n//           </motion.div>\n//           <motion.div\n//             className={styles.modalBackdrop}\n//             key=\"backdrop\"\n//             onClick={handleClose}\n//             variants={{\n//               hidden: {\n//                 opacity: 0,\n//                 transition: {\n//                   duration: 0.16\n//                 }\n//               },\n//               visible: {\n//                 opacity: 0.8,\n//                 transition: {\n//                   delay: 0.04,\n//                   duration: 0.2\n//                 }\n//               }\n//             }}\n//             initial=\"hidden\"\n//             exit=\"hidden\"\n//             animate=\"visible\"\n//           />\n//         </>\n//       )}\n//     </AnimatePresence>\n//   </LayoutGroup>\n// );\n}\n_s(TapCard, \"6tRyBKpA6Tf8zEXxvntvrffDmeA=\");\n_c = TapCard;\nvar _c;\n$RefreshReg$(_c, \"TapCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvdGFwQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUN2QjtBQUNQO0FBQzRDO0FBU3BFLFNBQVNLO1FBcUNZQyxhQUNBQTs7SUFwQ2hDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBZ0I7SUFDNUQsTUFBTUssUUFBZ0I7UUFDcEI7WUFBRUcsSUFBSTtZQUFHQyxVQUFVO1lBQXlCQyxPQUFPO1FBQU87UUFDMUQ7WUFBRUYsSUFBSTtZQUFHQyxVQUFVO1lBQXlCQyxPQUFPO1FBQVM7UUFDNUQ7WUFBRUYsSUFBSTtZQUFHQyxVQUFVO1lBQXlCQyxPQUFPO1FBQWE7UUFDaEU7WUFBRUYsSUFBSTtZQUFHQyxVQUFVO1lBQXlCQyxPQUFPO1FBQU07S0FDMUQ7SUFFRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWlAsTUFBTVEsR0FBRyxDQUFDQyxDQUFBQSxxQkFDVCw4REFBQ2IsaURBQU1BLENBQUNVLEdBQUc7b0JBQWVJLFVBQVVELEtBQUtOLEVBQUUsQ0FBQ1EsUUFBUTtvQkFBSUMsU0FBUyxJQUFNVixjQUFjTyxLQUFLTixFQUFFOzhCQUN4Riw0RUFBQ04sNEZBQUlBO3dCQUFDZ0IsSUFBSTs0QkFDTkMsT0FBTztnQ0FBRUMsSUFBSTtnQ0FBS0MsSUFBSTtnQ0FBS0MsSUFBSTs0QkFBRzs0QkFDbENDLFFBQVE7NEJBQ1JDLFNBQVM7NEJBQ1RDLGVBQWU7d0JBQ25CO2tDQUNJLDRFQUFDdEIsNEZBQVdBOzs4Q0FDUiw4REFBQ0YsaURBQU1BLENBQUN5QixFQUFFOzhDQUFFWixLQUFLTCxRQUFROzs7Ozs7OENBQ3pCLDhEQUFDUixpREFBTUEsQ0FBQzBCLEVBQUU7OENBQUViLEtBQUtKLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQVRqQkksS0FBS04sRUFBRTs7Ozs7MEJBZTFCLDhEQUFDVCwwREFBZUE7MEJBQ2JPLDRCQUNDLDhEQUFDTCxpREFB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cEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQiwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLGdDQUFnQztBQUNoQyxlQUFlO0FBQ2YsY0FBYztBQUNkLFdBQVc7QUFDWCx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLEtBQUs7QUFDUDtHQWhLc0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnQvdGFwQ2FyZC50c3g/YWU0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0LCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHtDYXJkLCBTdGFjaywgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIEF2YXRhciwgUmF0aW5nfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuXG5pbnRlcmZhY2UgSXRlbSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzdWJ0aXRsZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFwQ2FyZCgpIHtcblxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGl0ZW1zOiBJdGVtW10gPSBbXG4gICAgICB7IGlkOiAxLCBzdWJ0aXRsZTogXCJQcm9ncmFtbWluZyBMYW5ndWFnZXNcIiwgdGl0bGU6IFwiSmF2YVwiIH0sXG4gICAgICB7IGlkOiAyLCBzdWJ0aXRsZTogXCJQcm9ncmFtbWluZyBMYW5ndWFnZXNcIiwgdGl0bGU6IFwiUHl0aG9uXCIgfSxcbiAgICAgIHsgaWQ6IDMsIHN1YnRpdGxlOiBcIlByb2dyYW1taW5nIExhbmd1YWdlc1wiLCB0aXRsZTogXCJKYXZhU2NyaXB0XCIgfSxcbiAgICAgIHsgaWQ6IDQsIHN1YnRpdGxlOiBcIlByb2dyYW1taW5nIExhbmd1YWdlc1wiLCB0aXRsZTogXCJDKytcIiB9XG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9e2l0ZW0uaWR9IGxheW91dElkPXtpdGVtLmlkLnRvU3RyaW5nKCl9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSWQoaXRlbS5pZCl9PlxuICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogMzIwLCBzbTogMzUwLCBtZDogNDAwfSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyODAsIFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmg1PntpdGVtLnN1YnRpdGxlfTwvbW90aW9uLmg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5oMj57aXRlbS50aXRsZX08L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKSl9XG4gICAgXG4gICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIHtzZWxlY3RlZElkICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0SWQ9e3NlbGVjdGVkSWQudG9TdHJpbmcoKX0gPlxuICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogMzIwLCBzbTogMzUwLCBtZDogNDAwfSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyODAsIFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmg1PntpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRJZCk/LnN1YnRpdGxlfTwvbW90aW9uLmg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5oMj57aXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpPy50aXRsZX08L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSWQobnVsbCl9PkNsb3NlPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIC8vIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgICAvLyBjb25zdCBoYW5kbGVDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyAgIHNldEluZGV4KGZhbHNlKTtcbiAgICAvLyB9LCBbXSk7XG4gIFxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8TGF5b3V0R3JvdXA+XG4gICAgLy8gICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5fT5cbiAgICAvLyAgICAgICB7WzAsIDEsIDIsIDNdLm1hcCgoaXRlbSkgPT4gKFxuICAgIC8vICAgICAgICAgPG1vdGlvbi5saVxuICAgIC8vICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfVxuICAgIC8vICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgLy8gICAgICAgICAgIGxheW91dElkPXtgJHtpdGVtfWB9XG4gICAgLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGluZGV4ID09PSBmYWxzZSAmJiBzZXRJbmRleChpdGVtKX1cbiAgICAvLyAgICAgICAgICAgaW5pdGlhbD17eyBib3JkZXJSYWRpdXM6IFwiMC42cmVtXCIgfX1cbiAgICAvLyAgICAgICAgID5cbiAgICAvLyAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGFjZWhvbGRlcn1cbiAgICAvLyAgICAgICAgICAgICBsYXlvdXRJZD17YHBsYWNlaG9sZGVyLSR7aXRlbX1gfVxuICAgIC8vICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgPGRpdiAvPlxuICAgIC8vICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAvLyAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgLy8gICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAvLyAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRpdGlvbmFsfVxuICAgIC8vICAgICAgICAgICAgIGxheW91dElkPXtgYWRkaXRpb25hbC0ke2l0ZW19YH1cbiAgICAvLyAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAvLyAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgLy8gICAgICAgICAgICAgPGRpdiAvPlxuICAgIC8vICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgLy8gICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUNsb3NlfVxuICAgIC8vICAgICAgICAgICAgIGxheW91dElkPXtgY2xvc2UtJHtpdGVtfWB9XG4gICAgLy8gICAgICAgICAgIC8+XG4gICAgLy8gICAgICAgICA8L21vdGlvbi5saT5cbiAgICAvLyAgICAgICApKX1cbiAgICAvLyAgICAgPC91bD5cbiAgICAvLyAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAvLyAgICAgICB7aW5kZXggIT09IGZhbHNlICYmIChcbiAgICAvLyAgICAgICAgIDw+XG4gICAgLy8gICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGFpbmVyfSBrZXk9XCJtb2RhbFwiPlxuICAgIC8vICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cbiAgICAvLyAgICAgICAgICAgICAgIGxheW91dElkPXtgJHtpbmRleH1gfVxuICAgIC8vICAgICAgICAgICAgICAgaW5pdGlhbD17eyBib3JkZXJSYWRpdXM6IFwiMS4ycmVtXCIgfX1cbiAgICAvLyAgICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGFjZWhvbGRlcn1cbiAgICAvLyAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e2BwbGFjZWhvbGRlci0ke2luZGV4fWB9XG4gICAgLy8gICAgICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiAvPlxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgLy8gICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgLy8gICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRpdGlvbmFsfVxuICAgIC8vICAgICAgICAgICAgICAgICBsYXlvdXRJZD17YGFkZGl0aW9uYWwtJHtpbmRleH1gfVxuICAgIC8vICAgICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiAvPlxuICAgIC8vICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIC8vICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAvLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDbG9zZX1cbiAgICAvLyAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e2BjbG9zZS0ke2luZGV4fWB9XG4gICAgLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgIC8vICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAvLyAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgLy8gICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgIC8vICAgICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTUgNUw1IDE1TTUgNWw1LjAzIDUuMDNMMTUgMTVcIlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAvPlxuICAgIC8vICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAvLyAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAvLyAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgLy8gICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAvLyAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJhY2tkcm9wfVxuICAgIC8vICAgICAgICAgICAgIGtleT1cImJhY2tkcm9wXCJcbiAgICAvLyAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAvLyAgICAgICAgICAgICB2YXJpYW50cz17e1xuICAgIC8vICAgICAgICAgICAgICAgaGlkZGVuOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgLy8gICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4xNlxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgICAgdmlzaWJsZToge1xuICAgIC8vICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgLy8gICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICBkZWxheTogMC4wNCxcbiAgICAvLyAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4yXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9fVxuICAgIC8vICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgIC8vICAgICAgICAgICAgIGV4aXQ9XCJoaWRkZW5cIlxuICAgIC8vICAgICAgICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAvLyAgICAgICAgICAgLz5cbiAgICAvLyAgICAgICAgIDwvPlxuICAgIC8vICAgICAgICl9XG4gICAgLy8gICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIC8vICAgPC9MYXlvdXRHcm91cD5cbiAgICAvLyApO1xuICB9Il0sIm5hbWVzIjpbIkFuaW1hdGVQcmVzZW5jZSIsInVzZVN0YXRlIiwibW90aW9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVGFwQ2FyZCIsIml0ZW1zIiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJpZCIsInN1YnRpdGxlIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwibGF5b3V0SWQiLCJ0b1N0cmluZyIsIm9uQ2xpY2siLCJzeCIsIndpZHRoIiwieHMiLCJzbSIsIm1kIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoNSIsImgyIiwibWF4V2lkdGgiLCJmaW5kIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/tapCard.tsx\n"));

/***/ })

});