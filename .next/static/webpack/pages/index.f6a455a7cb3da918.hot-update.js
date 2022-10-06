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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/common */ \"./src/helpers/common.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_swap_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../public/swap.png */ \"./public/swap.png\");\n/* harmony import */ var _public_swap_white_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../public/swap_white.png */ \"./public/swap_white.png\");\n/* eslint-disable */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar MainScreen = function() {\n    _s();\n    var convertWordList = [\n        \"G\",\n        \"S\",\n        \"P\",\n        \"U\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), originalText = ref1[0], setOriginalText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), copied = ref2[0], setCopied = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), reverseShow = ref3[0], setReverseShow = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), indexSelected = ref4[0], setIndexSelected = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), reverse = ref5[0], setReverse = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), keyValue = ref6[0], setKeyValue = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), languangeType = ref7[0], setLanguangeType = ref7[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ref;\n        setLanguangeType((ref = convertWordList[indexSelected]) === null || ref === void 0 ? void 0 : ref.toLowerCase());\n    }, [\n        indexSelected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (text) {\n            (0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__.convertWord)(originalText, setText, languangeType);\n        }\n    }, [\n        indexSelected,\n        originalText,\n        languangeType\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (copied) {\n            setTimeout(function() {\n                setCopied(false);\n            }, 2000);\n        }\n    }, [\n        copied\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(reverse);\n    }, [\n        reverse\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var kamnos = document.querySelectorAll(\"#kamnos\");\n        setTimeout(function() {\n            if (kamnos.length > 0) {\n                setKeyValue(keyValue + 1);\n            }\n        }, 1000);\n    }, []);\n    var handleChange = function(e) {\n        var tmp = e.target.value;\n        if (reverseShow) {\n            var tmpReverse = tmp;\n            var resultConvert;\n            var convertNonVocalAlpha = tmpReverse.split(/[aeiou]/gi);\n            var convertVocalAlpha = tmpReverse.match(/[aeiou]/gi);\n            if (convertVocalAlpha === undefined || convertVocalAlpha === null) {\n                resultConvert += tmpReverse;\n            } else {\n                for(var i = 0; i <= convertNonVocalAlpha.length; i += 2){\n                    for(var j = 0; j <= 0; j++){\n                        resultConvert += convertNonVocalAlpha[i] + convertVocalAlpha[i];\n                    }\n                }\n                setReverse(resultConvert === null || resultConvert === void 0 ? void 0 : resultConvert.split(\"undefined\"));\n            }\n        } else {\n            setOriginalText(tmp);\n            if (tmp !== \"\") {\n                (0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__.convertWord)(tmp, setText, languangeType);\n            } else {\n                setText();\n            }\n        }\n    };\n    var handleSelect = function(e) {\n        setIndexSelected(e.target.id);\n    };\n    var handleReset = function() {\n        var reset = document.getElementById(\"input\");\n        reset.value = \"\";\n        setText();\n    };\n    var reverseWord = function() {\n        setReverseShow(!reverseShow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"kamnos\",\n        className: \"main-screen__dictionary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-screen__container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__title\",\n                        children: \"Kamnos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__input\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"input\",\n                                placeholder: \"Masukkan Kata\",\n                                name: \"input\",\n                                onChange: handleChange,\n                                autoFocus: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, _this),\n                            text && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__times\",\n                                onClick: handleReset,\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 105,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__selector\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__selector-label\",\n                                children: \"Tipe Bahasa\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 108,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__selector-container\",\n                                children: convertWordList.map(function(item, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: index,\n                                            onClick: handleSelect,\n                                            className: \" main-screen__selector-input \".concat(indexSelected == index && \"main-screen__active\"),\n                                            children: item\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 37\n                                        }, _this)\n                                    }, void 0, false);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 111,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-screen__result\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__result-wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__result-label\",\n                                children: \"Hasil :\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 126,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__result-reverse\",\n                                onClick: reverseWord,\n                                children: [\n                                    \"Reverse\",\n                                    \" \",\n                                    reverseShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: _public_swap_white_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        width: 18,\n                                        height: 8\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 40\n                                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: _public_swap_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        width: 18,\n                                        height: 8\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 90\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 129,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 125,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__result-convert\",\n                        children: text && text[1]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 134,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__copy\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                            text: text && text[1],\n                            onCopy: function() {\n                                return setCopied(true);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"main-screen__button\",\n                                children: \"Salin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 141,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                            lineNumber: 139,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 137,\n                        columnNumber: 17\n                    }, _this),\n                    copied && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__toast\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"toast-text\",\n                            children: \"Berhasil menyalin!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                            lineNumber: 146,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 145,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, keyValue, true, {\n        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, _this);\n};\n_s(MainScreen, \"bAsIpsUmc1P7LH5oJiCsgEJUlg0=\");\n_c = MainScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainScreen);\nvar _c;\n$RefreshReg$(_c, \"MainScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzZDQUFJLGlCQUFHLDhEQUFDL0QsbURBQUs7d0NBQUM2RCxHQUFHLEVBQUU1RCx3REFBSTt3Q0FBRTZELEtBQUssRUFBRSxFQUFFO3dDQUFFQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7NkNBQUk7Ozs7OztxQ0FDekc7Ozs7Ozs2QkFDSjtrQ0FDTiw4REFBQ2QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDZCQUE2QjtrQ0FDdkM3QyxJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7OzZCQUNkO2tDQUNOLDhEQUFDNEMsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjtrQ0FFOUIsNEVBQUNuRCxvRUFBZTs0QkFBQ00sSUFBSSxFQUFFQSxJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ2xDMkQsTUFBTSxFQUFFO3VDQUFNdEQsU0FBUyxDQUFDLElBQUksQ0FBQzs2QkFBQTtzQ0FDN0IsNEVBQUN1RCxRQUFNO2dDQUFDZixTQUFTLEVBQUMscUJBQXFCOzBDQUFDLE9BQUs7Ozs7O3FDQUFTOzs7OztpQ0FDeEM7Ozs7OzZCQUNoQjtvQkFDTHpDLE1BQU0sa0JBQ0gsOERBQUN3QyxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0JBQW9CO2tDQUMvQiw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFlBQVk7c0NBQUMsb0JBRTVCOzs7OztpQ0FBTTs7Ozs7NkJBQ0o7Ozs7OztxQkFFUjs7T0F0REFqQyxRQUFROzs7O2FBd0RaLENBQ1I7QUFDTixDQUFDO0dBbEpLZCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFvSmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpblNjcmVlbi5qcz82ZDZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbnZlcnRXb3JkIH0gZnJvbSBcIi4uL2hlbHBlcnMvY29tbW9uXCI7XHJcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzd2FwIGZyb20gJy4vLi4vLi4vcHVibGljL3N3YXAucG5nJztcclxuaW1wb3J0IHN3YXBXaGl0ZSBmcm9tICcuLy4uLy4uL3B1YmxpYy9zd2FwX3doaXRlLnBuZyc7XHJcblxyXG5jb25zdCBNYWluU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udmVydFdvcmRMaXN0ID0gW1wiR1wiLCBcIlNcIiwgXCJQXCIsIFwiVVwiXTtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbb3JpZ2luYWxUZXh0LCBzZXRPcmlnaW5hbFRleHRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmV2ZXJzZVNob3csIHNldFJldmVyc2VTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbmRleFNlbGVjdGVkLCBzZXRJbmRleFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JldmVyc2UsIHNldFJldmVyc2VdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtrZXlWYWx1ZSwgc2V0S2V5VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGFuZ3VhbmdlVHlwZSwgc2V0TGFuZ3VhbmdlVHlwZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TGFuZ3VhbmdlVHlwZShjb252ZXJ0V29yZExpc3RbaW5kZXhTZWxlY3RlZF0/LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSwgW2luZGV4U2VsZWN0ZWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnZlcnRXb3JkKG9yaWdpbmFsVGV4dCwgc2V0VGV4dCwgbGFuZ3VhbmdlVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luZGV4U2VsZWN0ZWQsIG9yaWdpbmFsVGV4dCwgbGFuZ3VhbmdlVHlwZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvcGllZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2V0Q29waWVkKGZhbHNlKSB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29waWVkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXZlcnNlKTtcclxuICAgIH0sIFtyZXZlcnNlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBrYW1ub3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2thbW5vc1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGthbW5vcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRLZXlWYWx1ZShrZXlWYWx1ZSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgdG1wID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHJldmVyc2VTaG93KSB7XHJcbiAgICAgICAgICAgIGxldCB0bXBSZXZlcnNlID0gdG1wO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0Q29udmVydDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb252ZXJ0Tm9uVm9jYWxBbHBoYSA9IHRtcFJldmVyc2Uuc3BsaXQoL1thZWlvdV0vZ2kpO1xyXG4gICAgICAgICAgICBsZXQgY29udmVydFZvY2FsQWxwaGEgPSB0bXBSZXZlcnNlLm1hdGNoKC9bYWVpb3VdL2dpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb252ZXJ0Vm9jYWxBbHBoYSA9PT0gdW5kZWZpbmVkIHx8IGNvbnZlcnRWb2NhbEFscGhhID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRDb252ZXJ0ICs9IHRtcFJldmVyc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBjb252ZXJ0Tm9uVm9jYWxBbHBoYS5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRDb252ZXJ0ICs9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0Tm9uVm9jYWxBbHBoYVtpXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0Vm9jYWxBbHBoYVtpXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRSZXZlcnNlKHJlc3VsdENvbnZlcnQ/LnNwbGl0KCd1bmRlZmluZWQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPcmlnaW5hbFRleHQodG1wKTtcclxuICAgICAgICAgICAgaWYgKHRtcCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRXb3JkKHRtcCwgc2V0VGV4dCwgbGFuZ3VhbmdlVHlwZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4U2VsZWN0ZWQoZS50YXJnZXQuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xyXG4gICAgICAgIHJlc2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBzZXRUZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV2ZXJzZVdvcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldFJldmVyc2VTaG93KCFyZXZlcnNlU2hvdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2tleVZhbHVlfSBpZD1cImthbW5vc1wiIGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19kaWN0aW9uYXJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBLYW1ub3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJNYXN1a2thbiBLYXRhXCIgbmFtZT1cImlucHV0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXV0b0ZvY3VzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3RleHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fdGltZXNcIiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+w5c8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX3NlbGVjdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fc2VsZWN0b3ItbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGlwZSBCYWhhc2FcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19zZWxlY3Rvci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnRXb3JkTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2luZGV4fSBrZXk9e2luZGV4fSBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9IGNsYXNzTmFtZT17YCBtYWluLXNjcmVlbl9fc2VsZWN0b3ItaW5wdXQgJHtpbmRleFNlbGVjdGVkID09IGluZGV4ICYmICdtYWluLXNjcmVlbl9fYWN0aXZlJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX3Jlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fcmVzdWx0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19yZXN1bHQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGFzaWwgOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX3Jlc3VsdC1yZXZlcnNlXCIgb25DbGljaz17cmV2ZXJzZVdvcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXZlcnNle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmV2ZXJzZVNob3cgPyA8SW1hZ2Ugc3JjPXtzd2FwV2hpdGV9IHdpZHRoPXsxOH0gaGVpZ2h0PXs4fSAvPiA6IDxJbWFnZSBzcmM9e3N3YXB9IHdpZHRoPXsxOH0gaGVpZ2h0PXs4fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fcmVzdWx0LWNvbnZlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGV4dCAmJiB0ZXh0WzFdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19jb3B5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGV4dCAmJiB0ZXh0WzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHNldENvcGllZCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX2J1dHRvblwiPlNhbGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjb3BpZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX190b2FzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlcmhhc2lsIG1lbnlhbGluIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5TY3JlZW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udmVydFdvcmQiLCJDb3B5VG9DbGlwYm9hcmQiLCJJbWFnZSIsInN3YXAiLCJzd2FwV2hpdGUiLCJNYWluU2NyZWVuIiwiY29udmVydFdvcmRMaXN0IiwidGV4dCIsInNldFRleHQiLCJvcmlnaW5hbFRleHQiLCJzZXRPcmlnaW5hbFRleHQiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJyZXZlcnNlU2hvdyIsInNldFJldmVyc2VTaG93IiwiaW5kZXhTZWxlY3RlZCIsInNldEluZGV4U2VsZWN0ZWQiLCJyZXZlcnNlIiwic2V0UmV2ZXJzZSIsImtleVZhbHVlIiwic2V0S2V5VmFsdWUiLCJsYW5ndWFuZ2VUeXBlIiwic2V0TGFuZ3VhbmdlVHlwZSIsInRvTG93ZXJDYXNlIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJrYW1ub3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidG1wIiwidGFyZ2V0IiwidmFsdWUiLCJ0bXBSZXZlcnNlIiwicmVzdWx0Q29udmVydCIsImNvbnZlcnROb25Wb2NhbEFscGhhIiwic3BsaXQiLCJjb252ZXJ0Vm9jYWxBbHBoYSIsIm1hdGNoIiwidW5kZWZpbmVkIiwiaSIsImoiLCJoYW5kbGVTZWxlY3QiLCJpZCIsImhhbmRsZVJlc2V0IiwicmVzZXQiLCJnZXRFbGVtZW50QnlJZCIsInJldmVyc2VXb3JkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwib25DaGFuZ2UiLCJhdXRvRm9jdXMiLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJvbkNvcHkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MainScreen.js\n"));

/***/ })

});