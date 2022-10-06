"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MainScreen.js":
/*!**************************************!*\
  !*** ./src/components/MainScreen.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/common */ \"./src/helpers/common.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_swap_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../public/swap.png */ \"./public/swap.png\");\n/* eslint-disable */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar MainScreen = function() {\n    _s();\n    var convertWordList = [\n        \"G\",\n        \"S\",\n        \"P\",\n        \"U\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), originalText = ref1[0], setOriginalText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), copied = ref2[0], setCopied = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), indexSelected = ref3[0], setIndexSelected = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), keyValue = ref4[0], setKeyValue = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), languangeType = ref5[0], setLanguangeType = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ref;\n        setLanguangeType((ref = convertWordList[indexSelected]) === null || ref === void 0 ? void 0 : ref.toLowerCase());\n    }, [\n        indexSelected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (text) {\n            (0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__.convertWord)(originalText, setText, languangeType);\n        }\n    }, [\n        indexSelected,\n        originalText,\n        languangeType\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (copied) {\n            setTimeout(function() {\n                setCopied(false);\n            }, 2000);\n        }\n    }, [\n        copied\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var kamnos = document.querySelectorAll(\"#kamnos\");\n        setTimeout(function() {\n            if (kamnos.length > 0) {\n                setKeyValue(keyValue + 1);\n            }\n        }, 1000);\n    }, []);\n    var handleChange = function(e) {\n        var tmp = e.target.value;\n        setOriginalText(tmp);\n        if (tmp !== \"\") {\n            (0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__.convertWord)(tmp, setText, languangeType);\n        } else {\n            setText();\n        }\n    };\n    var handleSelect = function(e) {\n        setIndexSelected(e.target.id);\n    };\n    var handleReset = function() {\n        var reset = document.getElementById(\"input\");\n        reset.value = \"\";\n        setText();\n    };\n    var reverseWord = function() {\n        var arr = [\n            \"ga\",\n            \"gi\",\n            \"gu\",\n            \"ge\",\n            \"go\"\n        ];\n        var tmpReverse = text[1];\n        var result = [];\n        var resultConvert;\n        // let re = new RegExp(arr, \"g\");\n        // for (let i = 0; i <= arr?.length; i++) {\n        //     // result += tmpReverse.replaceAll(arr[i], '');\n        //     tmpReverse = tmpReverse.replaceAll(arr[i], '')\n        //     result.push(tmpReverse);\n        // }\n        // console.log(result, text, originalText);\n        var convertNonVocalAlpha = tmpReverse.split(/[aeiou]/gi);\n        var convertVocalAlpha = tmpReverse.match(/[aeiou]/gi);\n        for(var i = 0; i <= convertNonVocalAlpha.length; i += 2){\n            for(var j = 0; j <= 0; j++){\n                resultConvert += convertNonVocalAlpha[i] + convertVocalAlpha[i];\n                console.log(resultConvert, i);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"kamnos\",\n        className: \"main-screen__dictionary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-screen__container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__title\",\n                        children: \"Kamnos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__input\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"input\",\n                                placeholder: \"Masukkan Kata\",\n                                name: \"input\",\n                                onChange: handleChange,\n                                autoFocus: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, _this),\n                            text && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__times\",\n                                onClick: handleReset,\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 102,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__selector\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__selector-label\",\n                                children: \"Tipe Bahasa\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__selector-container\",\n                                children: convertWordList.map(function(item, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: index,\n                                            onClick: handleSelect,\n                                            className: \" main-screen__selector-input \".concat(indexSelected == index && \"main-screen__active\"),\n                                            children: item\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 37\n                                        }, _this)\n                                    }, void 0, false);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 108,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-screen__result\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__result-wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__result-label\",\n                                children: \"Hasil :\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 123,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__result-reverse\",\n                                onClick: reverseWord,\n                                children: [\n                                    \"Reverse\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: _public_swap_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        width: 18,\n                                        height: 8\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 100\n                                    }, _this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 126,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__result-convert\",\n                        children: text && text[1]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 128,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__copy\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                            text: text && text[1],\n                            onCopy: function() {\n                                return setCopied(true);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"main-screen__button\",\n                                children: \"Salin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 135,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                            lineNumber: 133,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 131,\n                        columnNumber: 17\n                    }, _this),\n                    copied && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__toast\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"toast-text\",\n                            children: \"Berhasil menyalin!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                            lineNumber: 140,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 139,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, keyValue, true, {\n        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, _this);\n};\n_s(MainScreen, \"0aDz3WFc0KxohdsIDvbav7wtbeo=\");\n_c = MainScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainScreen);\nvar _c;\n$RefreshReg$(_c, \"MainScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7aUNBQ3hDOzs7Ozs2QkFDaEI7b0JBQ0x0QyxNQUFNLGtCQUNILDhEQUFDcUMsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjtrQ0FDL0IsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxZQUFZO3NDQUFDLG9CQUU1Qjs7Ozs7aUNBQU07Ozs7OzZCQUNKOzs7Ozs7cUJBRVI7O09BbkRBbEMsUUFBUTs7OzthQXFEWixDQUNSO0FBQ04sQ0FBQztHQTdJS1YsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBK0loQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5TY3JlZW4uanM/NmQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0V29yZCB9IGZyb20gXCIuLi9oZWxwZXJzL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3dhcCBmcm9tICcuLy4uLy4uL3B1YmxpYy9zd2FwLnBuZyc7XHJcblxyXG5jb25zdCBNYWluU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udmVydFdvcmRMaXN0ID0gW1wiR1wiLCBcIlNcIiwgXCJQXCIsIFwiVVwiXTtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbb3JpZ2luYWxUZXh0LCBzZXRPcmlnaW5hbFRleHRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXhTZWxlY3RlZCwgc2V0SW5kZXhTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtrZXlWYWx1ZSwgc2V0S2V5VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFuZ3VhbmdlVHlwZSwgc2V0TGFuZ3VhbmdlVHlwZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TGFuZ3VhbmdlVHlwZShjb252ZXJ0V29yZExpc3RbaW5kZXhTZWxlY3RlZF0/LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSwgW2luZGV4U2VsZWN0ZWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnZlcnRXb3JkKG9yaWdpbmFsVGV4dCwgc2V0VGV4dCwgbGFuZ3VhbmdlVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luZGV4U2VsZWN0ZWQsIG9yaWdpbmFsVGV4dCwgbGFuZ3VhbmdlVHlwZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvcGllZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2V0Q29waWVkKGZhbHNlKSB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29waWVkXSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGthbW5vcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIja2Ftbm9zXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2Ftbm9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNldEtleVZhbHVlKGtleVZhbHVlICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCB0bXAgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgc2V0T3JpZ2luYWxUZXh0KHRtcCk7XHJcbiAgICAgICAgaWYgKHRtcCAhPT0gJycpIHtcclxuICAgICAgICAgICAgY29udmVydFdvcmQodG1wLCBzZXRUZXh0LCBsYW5ndWFuZ2VUeXBlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJbmRleFNlbGVjdGVkKGUudGFyZ2V0LmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKTtcclxuICAgICAgICByZXNldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgc2V0VGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldmVyc2VXb3JkID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbJ2dhJywgJ2dpJywgJ2d1JywgJ2dlJywgJ2dvJ107XHJcblxyXG4gICAgICAgIGxldCB0bXBSZXZlcnNlID0gdGV4dFsxXTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IHJlc3VsdENvbnZlcnQ7XHJcbiAgICAgICAgLy8gbGV0IHJlID0gbmV3IFJlZ0V4cChhcnIsIFwiZ1wiKTtcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPD0gYXJyPy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICAvLyByZXN1bHQgKz0gdG1wUmV2ZXJzZS5yZXBsYWNlQWxsKGFycltpXSwgJycpO1xyXG4gICAgICAgIC8vICAgICB0bXBSZXZlcnNlID0gdG1wUmV2ZXJzZS5yZXBsYWNlQWxsKGFycltpXSwgJycpXHJcbiAgICAgICAgLy8gICAgIHJlc3VsdC5wdXNoKHRtcFJldmVyc2UpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsIHRleHQsIG9yaWdpbmFsVGV4dCk7XHJcblxyXG4gICAgICAgIGxldCBjb252ZXJ0Tm9uVm9jYWxBbHBoYSA9IHRtcFJldmVyc2Uuc3BsaXQoL1thZWlvdV0vZ2kpO1xyXG4gICAgICAgIGxldCBjb252ZXJ0Vm9jYWxBbHBoYSA9IHRtcFJldmVyc2UubWF0Y2goL1thZWlvdV0vZ2kpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBjb252ZXJ0Tm9uVm9jYWxBbHBoYS5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSAwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdENvbnZlcnQgKz1cclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0Tm9uVm9jYWxBbHBoYVtpXSArXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVydFZvY2FsQWxwaGFbaV1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRDb252ZXJ0LCBpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17a2V5VmFsdWV9IGlkPVwia2Ftbm9zXCIgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX2RpY3Rpb25hcnlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEthbW5vc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIk1hc3Vra2FuIEthdGFcIiBuYW1lPVwiaW5wdXRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBhdXRvRm9jdXMgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGV4dCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX190aW1lc1wiIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fT7DlzwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fc2VsZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19zZWxlY3Rvci1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXBlIEJhaGFzYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX3NlbGVjdG9yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFdvcmRMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17aW5kZXh9IGtleT17aW5kZXh9IG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH0gY2xhc3NOYW1lPXtgIG1haW4tc2NyZWVuX19zZWxlY3Rvci1pbnB1dCAke2luZGV4U2VsZWN0ZWQgPT0gaW5kZXggJiYgJ21haW4tc2NyZWVuX19hY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fcmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19yZXN1bHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX3Jlc3VsdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIYXNpbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fcmVzdWx0LXJldmVyc2VcIiBvbkNsaWNrPXtyZXZlcnNlV29yZH0+UmV2ZXJzZXtcIiBcIn08SW1hZ2Ugc3JjPXtzd2FwfSB3aWR0aD17MTh9IGhlaWdodD17OH0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX3Jlc3VsdC1jb252ZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RleHQgJiYgdGV4dFsxXX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fY29weVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e3RleHQgJiYgdGV4dFsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiBzZXRDb3BpZWQodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19idXR0b25cIj5TYWxpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y29waWVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fdG9hc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZXJoYXNpbCBtZW55YWxpbiFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluU2NyZWVuO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnZlcnRXb3JkIiwiQ29weVRvQ2xpcGJvYXJkIiwiSW1hZ2UiLCJzd2FwIiwiTWFpblNjcmVlbiIsImNvbnZlcnRXb3JkTGlzdCIsInRleHQiLCJzZXRUZXh0Iiwib3JpZ2luYWxUZXh0Iiwic2V0T3JpZ2luYWxUZXh0IiwiY29waWVkIiwic2V0Q29waWVkIiwiaW5kZXhTZWxlY3RlZCIsInNldEluZGV4U2VsZWN0ZWQiLCJrZXlWYWx1ZSIsInNldEtleVZhbHVlIiwibGFuZ3VhbmdlVHlwZSIsInNldExhbmd1YW5nZVR5cGUiLCJ0b0xvd2VyQ2FzZSIsInNldFRpbWVvdXQiLCJrYW1ub3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidG1wIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWxlY3QiLCJpZCIsImhhbmRsZVJlc2V0IiwicmVzZXQiLCJnZXRFbGVtZW50QnlJZCIsInJldmVyc2VXb3JkIiwiYXJyIiwidG1wUmV2ZXJzZSIsInJlc3VsdCIsInJlc3VsdENvbnZlcnQiLCJjb252ZXJ0Tm9uVm9jYWxBbHBoYSIsInNwbGl0IiwiY29udmVydFZvY2FsQWxwaGEiLCJtYXRjaCIsImkiLCJqIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsIm9uQ2hhbmdlIiwiYXV0b0ZvY3VzIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwib25Db3B5IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MainScreen.js\n"));

/***/ })

});