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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; },\n/* harmony export */   List: function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst items = [\n    {\n        id: 1,\n        subtitle: \"Programming Languages\",\n        title: \"Java\"\n    },\n    {\n        id: 2,\n        subtitle: \"Programming Languages\",\n        title: \"Python\"\n    },\n    {\n        id: 3,\n        subtitle: \"Programming Languages\",\n        title: \"JavaScript\"\n    },\n    {\n        id: 4,\n        subtitle: \"Programming Languages\",\n        title: \"C++\"\n    }\n];\nfunction Card(param) {\n    let { id, subtitle, title, isSelected } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"card \".concat(isSelected ? \"selected\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 7\n    }, this);\n}\n_c = Card;\nfunction List(param) {\n    let { selectedId, items } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"card-list\",\n        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                ...item,\n                isSelected: item.id === selectedId\n            }, item.id, false, {\n                fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/huangshiyi/Desktop/vscode/shihyihuang.github.io/app/component/tapCard.tsx\",\n        lineNumber: 34,\n        columnNumber: 7\n    }, this);\n}\n_c1 = List;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnQvdGFwQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1FLE1BQU1BLFFBQWdCO0lBQ3BCO1FBQUVDLElBQUk7UUFBR0MsVUFBVTtRQUF5QkMsT0FBTztJQUFPO0lBQzFEO1FBQUVGLElBQUk7UUFBR0MsVUFBVTtRQUF5QkMsT0FBTztJQUFTO0lBQzVEO1FBQUVGLElBQUk7UUFBR0MsVUFBVTtRQUF5QkMsT0FBTztJQUFhO0lBQ2hFO1FBQUVGLElBQUk7UUFBR0MsVUFBVTtRQUF5QkMsT0FBTztJQUFNO0NBQzFEO0FBV00sU0FBU0MsS0FBSyxLQUE4QztRQUE5QyxFQUFFSCxFQUFFLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFRSxVQUFVLEVBQWEsR0FBOUM7SUFDbkIscUJBQ0UsOERBQUNDO1FBQUdDLFdBQVcsUUFBcUMsT0FBN0JGLGFBQWEsYUFBYTs7MEJBQy9DLDhEQUFDRzswQkFBSU47Ozs7OzswQkFDTCw4REFBQ087MEJBQUlOOzs7Ozs7Ozs7Ozs7QUFHWDtLQVBnQkM7QUFTVCxTQUFTTSxLQUFLLEtBQWdDO1FBQWhDLEVBQUVDLFVBQVUsRUFBRVgsS0FBSyxFQUFhLEdBQWhDO0lBQ25CLHFCQUNFLDhEQUFDWTtRQUFHTCxXQUFVO2tCQUNYUCxNQUFNYSxHQUFHLENBQUNDLENBQUFBLHFCQUNULDhEQUFDVjtnQkFFRSxHQUFHVSxJQUFJO2dCQUNSVCxZQUFZUyxLQUFLYixFQUFFLEtBQUtVO2VBRm5CRyxLQUFLYixFQUFFOzs7Ozs7Ozs7O0FBT3RCO01BWmdCUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50L3RhcENhcmQudHN4P2FlNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEl0ZW0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgc3VidGl0bGU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICB9XG4gIFxuICBjb25zdCBpdGVtczogSXRlbVtdID0gW1xuICAgIHsgaWQ6IDEsIHN1YnRpdGxlOiBcIlByb2dyYW1taW5nIExhbmd1YWdlc1wiLCB0aXRsZTogXCJKYXZhXCIgfSxcbiAgICB7IGlkOiAyLCBzdWJ0aXRsZTogXCJQcm9ncmFtbWluZyBMYW5ndWFnZXNcIiwgdGl0bGU6IFwiUHl0aG9uXCIgfSxcbiAgICB7IGlkOiAzLCBzdWJ0aXRsZTogXCJQcm9ncmFtbWluZyBMYW5ndWFnZXNcIiwgdGl0bGU6IFwiSmF2YVNjcmlwdFwiIH0sXG4gICAgeyBpZDogNCwgc3VidGl0bGU6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzXCIsIHRpdGxlOiBcIkMrK1wiIH1cbiAgXTtcbiAgXG4gIGludGVyZmFjZSBMaXN0UHJvcHMge1xuICAgIHNlbGVjdGVkSWQ6IG51bWJlciB8IG51bGw7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgfVxuICBcbiAgaW50ZXJmYWNlIENhcmRQcm9wcyBleHRlbmRzIEl0ZW0ge1xuICAgIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBDYXJkKHsgaWQsIHN1YnRpdGxlLCB0aXRsZSwgaXNTZWxlY3RlZCB9OiBDYXJkUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17YGNhcmQgJHtpc1NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWB9PlxuICAgICAgICA8aDM+e3N1YnRpdGxlfTwvaDM+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIExpc3QoeyBzZWxlY3RlZElkLCBpdGVtcyB9OiBMaXN0UHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmQtbGlzdFwiPlxuICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfSBcbiAgICAgICAgICAgIHsuLi5pdGVtfSBcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2l0ZW0uaWQgPT09IHNlbGVjdGVkSWR9IFxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9Il0sIm5hbWVzIjpbIml0ZW1zIiwiaWQiLCJzdWJ0aXRsZSIsInRpdGxlIiwiQ2FyZCIsImlzU2VsZWN0ZWQiLCJsaSIsImNsYXNzTmFtZSIsImgzIiwiaDIiLCJMaXN0Iiwic2VsZWN0ZWRJZCIsInVsIiwibWFwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/component/tapCard.tsx\n"));

/***/ })

});