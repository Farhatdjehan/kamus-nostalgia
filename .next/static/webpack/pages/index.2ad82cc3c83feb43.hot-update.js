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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/common */ \"./src/helpers/common.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar MainScreen = function() {\n    _s();\n    var convertWordList = [\n        \"G\",\n        \"S\",\n        \"P\",\n        \"U\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), originalText = ref1[0], setOriginalText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), copied = ref2[0], setCopied = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), indexSelected = ref3[0], setIndexSelected = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), keyValue = ref4[0], setKeyValue = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), languangeType = ref5[0], setLanguangeType = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ref;\n        setLanguangeType((ref = convertWordList[indexSelected]) === null || ref === void 0 ? void 0 : ref.toLowerCase());\n    }, [\n        indexSelected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (text) {\n            (0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__.convertWord)(originalText, setText, languangeType);\n        }\n    }, [\n        indexSelected,\n        originalText,\n        languangeType\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (copied) {\n            setTimeout(function() {\n                setCopied(false);\n            }, 2000);\n        }\n    }, [\n        copied\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var kamnos = document.querySelectorAll(\"#kamnos\");\n        setTimeout(function() {\n            if (kamnos.length > 0) {\n                setKeyValue(keyValue + 1);\n            }\n        }, 1000);\n    }, []);\n    var handleChange = function(e) {\n        var tmp = e.target.value;\n        setOriginalText(tmp);\n        if (tmp !== \"\") {\n            (0,_helpers_common__WEBPACK_IMPORTED_MODULE_2__.convertWord)(tmp, setText, languangeType);\n        } else {\n            setText();\n        }\n    };\n    var handleSelect = function(e) {\n        setIndexSelected(e.target.id);\n    };\n    var handleReset = function() {\n        var reset = document.getElementById(\"input\");\n        reset.value = \"\";\n        setText();\n    };\n    var reverseWord = function() {\n        var arr = [\n            \"ga\",\n            \"gi\",\n            \"gu\",\n            \"ge\",\n            \"go\"\n        ];\n        var tmpReverse = text[1];\n        var result = [];\n        var resultConvert;\n        // let re = new RegExp(arr, \"g\");\n        // for (let i = 0; i <= arr?.length; i++) {\n        //     // result += tmpReverse.replaceAll(arr[i], '');\n        //     tmpReverse = tmpReverse.replaceAll(arr[i], '')\n        //     result.push(tmpReverse);\n        // }\n        // console.log(result, text, originalText);\n        var convertNonVocalAlpha = tmpReverse.split(/[aeiou]/gi);\n        var convertVocalAlpha = tmpReverse.match(/[aeiou]/gi);\n        for(var i = 0; i <= convertNonVocalAlpha.length; i += 2){\n            for(var j = 0; j <= 0; j++){\n                resultConvert += convertNonVocalAlpha[i] + convertVocalAlpha[i];\n                console.log(resultConvert, i);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"kamnos\",\n        className: \"main-screen__dictionary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-screen__container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__title\",\n                        children: \"Kamnos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__input\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"input\",\n                                placeholder: \"Masukkan Kata\",\n                                name: \"input\",\n                                onChange: handleChange,\n                                autoFocus: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, _this),\n                            text && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__times\",\n                                onClick: handleReset,\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__selector\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__selector-label\",\n                                children: \"Tipe Bahasa\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__selector-container\",\n                                children: convertWordList.map(function(item, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: index,\n                                            onClick: handleSelect,\n                                            className: \" main-screen__selector-input \".concat(indexSelected == index && \"main-screen__active\"),\n                                            children: item\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 37\n                                        }, _this)\n                                    }, void 0, false);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-screen__result\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__result-wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main-screen__result-label\",\n                                children: \"Hasil :\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 121,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: reverseWord,\n                                className: \"main-screen__button spacing\",\n                                children: \"Reverse\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 124,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__result-convert\",\n                        children: text && text[1]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 126,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__copy\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                            text: text && text[1],\n                            onCopy: function() {\n                                return setCopied(true);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"main-screen__button\",\n                                children: \"Salin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                                lineNumber: 133,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                            lineNumber: 131,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 129,\n                        columnNumber: 17\n                    }, _this),\n                    copied && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-screen__toast\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"toast-text\",\n                            children: \"Berhasil menyalin!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                            lineNumber: 138,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                        lineNumber: 137,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, keyValue, true, {\n        fileName: \"C:\\\\Users\\\\Farha\\\\Documents\\\\Project\\\\kamus-nostalgia\\\\src\\\\components\\\\MainScreen.js\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, _this);\n};\n_s(MainScreen, \"0aDz3WFc0KxohdsIDvbav7wtbeo=\");\n_c = MainScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainScreen);\nvar _c;\n$RefreshReg$(_c, \"MainScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs2QkFDSjs7Ozs7O3FCQUVSOztPQW5EQWxDLFFBQVE7Ozs7YUFxRFosQ0FDUjtBQUNOLENBQUM7R0E3SUtWLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQStJaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluU2NyZWVuLmpzPzZkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29udmVydFdvcmQgfSBmcm9tIFwiLi4vaGVscGVycy9jb21tb25cIjtcclxuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xyXG5cclxuY29uc3QgTWFpblNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnZlcnRXb3JkTGlzdCA9IFtcIkdcIiwgXCJTXCIsIFwiUFwiLCBcIlVcIl07XHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW29yaWdpbmFsVGV4dCwgc2V0T3JpZ2luYWxUZXh0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2luZGV4U2VsZWN0ZWQsIHNldEluZGV4U2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBba2V5VmFsdWUsIHNldEtleVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xhbmd1YW5nZVR5cGUsIHNldExhbmd1YW5nZVR5cGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldExhbmd1YW5nZVR5cGUoY29udmVydFdvcmRMaXN0W2luZGV4U2VsZWN0ZWRdPy50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0sIFtpbmRleFNlbGVjdGVkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICBjb252ZXJ0V29yZChvcmlnaW5hbFRleHQsIHNldFRleHQsIGxhbmd1YW5nZVR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpbmRleFNlbGVjdGVkLCBvcmlnaW5hbFRleHQsIGxhbmd1YW5nZVR5cGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb3BpZWQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNldENvcGllZChmYWxzZSkgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvcGllZF0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBrYW1ub3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2thbW5vc1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGthbW5vcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRLZXlWYWx1ZShrZXlWYWx1ZSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgdG1wID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHNldE9yaWdpbmFsVGV4dCh0bXApO1xyXG4gICAgICAgIGlmICh0bXAgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnZlcnRXb3JkKHRtcCwgc2V0VGV4dCwgbGFuZ3VhbmdlVHlwZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5kZXhTZWxlY3RlZChlLnRhcmdldC5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcmVzZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHNldFRleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXZlcnNlV29yZCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gWydnYScsICdnaScsICdndScsICdnZScsICdnbyddO1xyXG5cclxuICAgICAgICBsZXQgdG1wUmV2ZXJzZSA9IHRleHRbMV07XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCByZXN1bHRDb252ZXJ0O1xyXG4gICAgICAgIC8vIGxldCByZSA9IG5ldyBSZWdFeHAoYXJyLCBcImdcIik7XHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDw9IGFycj8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgLy8gcmVzdWx0ICs9IHRtcFJldmVyc2UucmVwbGFjZUFsbChhcnJbaV0sICcnKTtcclxuICAgICAgICAvLyAgICAgdG1wUmV2ZXJzZSA9IHRtcFJldmVyc2UucmVwbGFjZUFsbChhcnJbaV0sICcnKVxyXG4gICAgICAgIC8vICAgICByZXN1bHQucHVzaCh0bXBSZXZlcnNlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCB0ZXh0LCBvcmlnaW5hbFRleHQpO1xyXG5cclxuICAgICAgICBsZXQgY29udmVydE5vblZvY2FsQWxwaGEgPSB0bXBSZXZlcnNlLnNwbGl0KC9bYWVpb3VdL2dpKTtcclxuICAgICAgICBsZXQgY29udmVydFZvY2FsQWxwaGEgPSB0bXBSZXZlcnNlLm1hdGNoKC9bYWVpb3VdL2dpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY29udmVydE5vblZvY2FsQWxwaGEubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRDb252ZXJ0ICs9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVydE5vblZvY2FsQWxwaGFbaV0gK1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRWb2NhbEFscGhhW2ldXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Q29udmVydCwgaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2tleVZhbHVlfSBpZD1cImthbW5vc1wiIGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19kaWN0aW9uYXJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBLYW1ub3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJNYXN1a2thbiBLYXRhXCIgbmFtZT1cImlucHV0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXV0b0ZvY3VzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3RleHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fdGltZXNcIiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+w5c8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX3NlbGVjdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fc2VsZWN0b3ItbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGlwZSBCYWhhc2FcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19zZWxlY3Rvci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnRXb3JkTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2luZGV4fSBrZXk9e2luZGV4fSBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9IGNsYXNzTmFtZT17YCBtYWluLXNjcmVlbl9fc2VsZWN0b3ItaW5wdXQgJHtpbmRleFNlbGVjdGVkID09IGluZGV4ICYmICdtYWluLXNjcmVlbl9fYWN0aXZlJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX3Jlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fcmVzdWx0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19yZXN1bHQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGFzaWwgOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmV2ZXJzZVdvcmR9IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19idXR0b24gc3BhY2luZ1wiPlJldmVyc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlbl9fcmVzdWx0LWNvbnZlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGV4dCAmJiB0ZXh0WzFdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX19jb3B5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGV4dCAmJiB0ZXh0WzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHNldENvcGllZCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5fX2J1dHRvblwiPlNhbGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjb3BpZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuX190b2FzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlcmhhc2lsIG1lbnlhbGluIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5TY3JlZW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udmVydFdvcmQiLCJDb3B5VG9DbGlwYm9hcmQiLCJNYWluU2NyZWVuIiwiY29udmVydFdvcmRMaXN0IiwidGV4dCIsInNldFRleHQiLCJvcmlnaW5hbFRleHQiLCJzZXRPcmlnaW5hbFRleHQiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJpbmRleFNlbGVjdGVkIiwic2V0SW5kZXhTZWxlY3RlZCIsImtleVZhbHVlIiwic2V0S2V5VmFsdWUiLCJsYW5ndWFuZ2VUeXBlIiwic2V0TGFuZ3VhbmdlVHlwZSIsInRvTG93ZXJDYXNlIiwic2V0VGltZW91dCIsImthbW5vcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0bXAiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlbGVjdCIsImlkIiwiaGFuZGxlUmVzZXQiLCJyZXNldCIsImdldEVsZW1lbnRCeUlkIiwicmV2ZXJzZVdvcmQiLCJhcnIiLCJ0bXBSZXZlcnNlIiwicmVzdWx0IiwicmVzdWx0Q29udmVydCIsImNvbnZlcnROb25Wb2NhbEFscGhhIiwic3BsaXQiLCJjb252ZXJ0Vm9jYWxBbHBoYSIsIm1hdGNoIiwiaSIsImoiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwib25DaGFuZ2UiLCJhdXRvRm9jdXMiLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYnV0dG9uIiwib25Db3B5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MainScreen.js\n"));

/***/ })

});