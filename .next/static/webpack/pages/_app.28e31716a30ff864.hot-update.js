"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/MainScreen.css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/MainScreen.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\",\\r\\n    \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\",\\r\\n    sans-serif;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n  background-color: #d5334b;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n#__next {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.main-screen__dictionary {\\r\\n  max-width: 375px;\\r\\n  display: flex;\\r\\n  height: inherit;\\r\\n  flex-direction: column;\\r\\n  margin: 0 auto;\\r\\n  overflow: auto;\\r\\n}\\r\\n.main-screen__container {\\r\\n  padding: 8px 16px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n.main-screen__title {\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bold;\\r\\n  color: #fff;\\r\\n  margin-bottom: 24px;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n.main-screen__input {\\r\\n  margin-bottom: 16px;\\r\\n  position: relative;\\r\\n}\\r\\n.main-screen__input > input {\\r\\n  width: -webkit-fill-available;\\r\\n  padding: 16px 12px;\\r\\n  border-radius: 32px;\\r\\n  border: none;\\r\\n}\\r\\n.main-screen__times {\\r\\n  position: absolute;\\r\\n  right: 16px;\\r\\n  top: 11px;\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  color: lightgray;\\r\\n}\\r\\n.main-screen__selector {\\r\\n  /* display: flex; */\\r\\n}\\r\\n.main-screen__selector-label {\\r\\n  font-weight: bold;\\r\\n  color: #fff;\\r\\n  margin-bottom: 12px;\\r\\n}\\r\\n.main-screen__selector-container {\\r\\n  display: flex;\\r\\n  margin-bottom: 24px;\\r\\n}\\r\\n.main-screen__selector-input {\\r\\n  position: relative;\\r\\n  width: 45px;\\r\\n  height: 45px;\\r\\n  margin-right: 12px;\\r\\n  background-color: #be2239;\\r\\n  border-radius: 25px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bolder;\\r\\n  color: #fff;\\r\\n}\\r\\n.coming-soon__label {\\r\\n  background-color: #ffffff;\\r\\n  position: absolute;\\r\\n  font-size: 8px;\\r\\n  color: black;\\r\\n  bottom: 0;\\r\\n  padding: 0px 4px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n.main-screen__active {\\r\\n  background-color: #fff;\\r\\n  color: #be2239;\\r\\n}\\r\\n.main-screen__result {\\r\\n  background-color: #fff;\\r\\n  border-top-left-radius: 24px;\\r\\n  border-top-right-radius: 24px;\\r\\n  height: inherit;\\r\\n  padding: 16px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.main-screen__result-wrapper {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n.main-screen__result-label {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n.main-screen__result-reverse {\\r\\n  font-size: 12px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n.main-screen__result-convert {\\r\\n  padding: 16px;\\r\\n  background-color: lightgray;\\r\\n  border-radius: 24px;\\r\\n  height: 100%;\\r\\n  overflow-wrap: break-word;\\r\\n}\\r\\n.main-screen__copy {\\r\\n  padding-top: 16px;\\r\\n  text-align: end;\\r\\n}\\r\\n.main-screen__button {\\r\\n  padding: 12px 20px;\\r\\n  border: none !important;\\r\\n  border-radius: 8px;\\r\\n  color: #fff;\\r\\n  font-weight: 600;\\r\\n  background-color: #be2239;\\r\\n}\\r\\n.spacing {\\r\\n  margin-right: 8px;\\r\\n}\\r\\n.main-screen__toast {\\r\\n  position: absolute;\\r\\n  background: rgba(0, 0, 0, 0.64);\\r\\n  padding: 12px 20px;\\r\\n  border-radius: 8px;\\r\\n  transition: 1s;\\r\\n  bottom: 16px;\\r\\n  box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;\\r\\n  margin: 0 auto;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  width: -webkit-fit-content;\\r\\n  width: -moz-fit-content;\\r\\n  width: fit-content;\\r\\n  /* display: none; */\\r\\n}\\r\\n.toast-text {\\r\\n  font-weight: 600;\\r\\n  color: white;\\r\\n  opacity: 1;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/MainScreen.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;EAClC,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,cAAc;EACd,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,6BAA6B;EAC7B,eAAe;EACf,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,kDAAkD;EAClD,cAAc;EACd,OAAO;EACP,QAAQ;EACR,0BAAkB;EAAlB,uBAAkB;EAAlB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;AACZ\",\"sourcesContent\":[\"body {\\r\\n  margin: 0;\\r\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\",\\r\\n    \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\",\\r\\n    sans-serif;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n  background-color: #d5334b;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n#__next {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.main-screen__dictionary {\\r\\n  max-width: 375px;\\r\\n  display: flex;\\r\\n  height: inherit;\\r\\n  flex-direction: column;\\r\\n  margin: 0 auto;\\r\\n  overflow: auto;\\r\\n}\\r\\n.main-screen__container {\\r\\n  padding: 8px 16px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n.main-screen__title {\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bold;\\r\\n  color: #fff;\\r\\n  margin-bottom: 24px;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n.main-screen__input {\\r\\n  margin-bottom: 16px;\\r\\n  position: relative;\\r\\n}\\r\\n.main-screen__input > input {\\r\\n  width: -webkit-fill-available;\\r\\n  padding: 16px 12px;\\r\\n  border-radius: 32px;\\r\\n  border: none;\\r\\n}\\r\\n.main-screen__times {\\r\\n  position: absolute;\\r\\n  right: 16px;\\r\\n  top: 11px;\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  color: lightgray;\\r\\n}\\r\\n.main-screen__selector {\\r\\n  /* display: flex; */\\r\\n}\\r\\n.main-screen__selector-label {\\r\\n  font-weight: bold;\\r\\n  color: #fff;\\r\\n  margin-bottom: 12px;\\r\\n}\\r\\n.main-screen__selector-container {\\r\\n  display: flex;\\r\\n  margin-bottom: 24px;\\r\\n}\\r\\n.main-screen__selector-input {\\r\\n  position: relative;\\r\\n  width: 45px;\\r\\n  height: 45px;\\r\\n  margin-right: 12px;\\r\\n  background-color: #be2239;\\r\\n  border-radius: 25px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bolder;\\r\\n  color: #fff;\\r\\n}\\r\\n.coming-soon__label {\\r\\n  background-color: #ffffff;\\r\\n  position: absolute;\\r\\n  font-size: 8px;\\r\\n  color: black;\\r\\n  bottom: 0;\\r\\n  padding: 0px 4px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n.main-screen__active {\\r\\n  background-color: #fff;\\r\\n  color: #be2239;\\r\\n}\\r\\n.main-screen__result {\\r\\n  background-color: #fff;\\r\\n  border-top-left-radius: 24px;\\r\\n  border-top-right-radius: 24px;\\r\\n  height: inherit;\\r\\n  padding: 16px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.main-screen__result-wrapper {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n.main-screen__result-label {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n.main-screen__result-reverse {\\r\\n  font-size: 12px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n.main-screen__result-convert {\\r\\n  padding: 16px;\\r\\n  background-color: lightgray;\\r\\n  border-radius: 24px;\\r\\n  height: 100%;\\r\\n  overflow-wrap: break-word;\\r\\n}\\r\\n.main-screen__copy {\\r\\n  padding-top: 16px;\\r\\n  text-align: end;\\r\\n}\\r\\n.main-screen__button {\\r\\n  padding: 12px 20px;\\r\\n  border: none !important;\\r\\n  border-radius: 8px;\\r\\n  color: #fff;\\r\\n  font-weight: 600;\\r\\n  background-color: #be2239;\\r\\n}\\r\\n.spacing {\\r\\n  margin-right: 8px;\\r\\n}\\r\\n.main-screen__toast {\\r\\n  position: absolute;\\r\\n  background: rgba(0, 0, 0, 0.64);\\r\\n  padding: 12px 20px;\\r\\n  border-radius: 8px;\\r\\n  transition: 1s;\\r\\n  bottom: 16px;\\r\\n  box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;\\r\\n  margin: 0 auto;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  width: fit-content;\\r\\n  /* display: none; */\\r\\n}\\r\\n.toast-text {\\r\\n  font-weight: 600;\\r\\n  color: white;\\r\\n  opacity: 1;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL01haW5TY3JlZW4uY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxnREFBZ0QsZ0JBQWdCLG1NQUFtTSwwQ0FBMEMseUNBQXlDLGdDQUFnQyxvQkFBb0IsS0FBSyxpQkFBaUIsbUJBQW1CLEtBQUssa0NBQWtDLHVCQUF1QixvQkFBb0Isc0JBQXNCLDZCQUE2QixxQkFBcUIscUJBQXFCLEtBQUssNkJBQTZCLHdCQUF3QixvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsd0JBQXdCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLEtBQUsseUJBQXlCLDBCQUEwQix5QkFBeUIsS0FBSyxpQ0FBaUMsb0NBQW9DLHlCQUF5QiwwQkFBMEIsbUJBQW1CLEtBQUsseUJBQXlCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLHNCQUFzQix3QkFBd0IsdUJBQXVCLEtBQUssNEJBQTRCLHdCQUF3QixPQUFPLGtDQUFrQyx3QkFBd0Isa0JBQWtCLDBCQUEwQixLQUFLLHNDQUFzQyxvQkFBb0IsMEJBQTBCLEtBQUssa0NBQWtDLHlCQUF5QixrQkFBa0IsbUJBQW1CLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixrQkFBa0IsS0FBSyx5QkFBeUIsZ0NBQWdDLHlCQUF5QixxQkFBcUIsbUJBQW1CLGdCQUFnQix1QkFBdUIseUJB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Z0IsdUJBQXVCLHlCQUF5QixLQUFLLDBCQUEwQiw2QkFBNkIscUJBQXFCLEtBQUssMEJBQTBCLDZCQUE2QixtQ0FBbUMsb0NBQW9DLHNCQUFzQixvQkFBb0Isb0JBQW9CLDZCQUE2QixLQUFLLGtDQUFrQyxvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLGdDQUFnQywwQkFBMEIsS0FBSyxrQ0FBa0Msc0JBQXNCLHVCQUF1QixLQUFLLGtDQUFrQyxvQkFBb0Isa0NBQWtDLDBCQUEwQixtQkFBbUIsZ0NBQWdDLEtBQUssd0JBQXdCLHdCQUF3QixzQkFBc0IsS0FBSywwQkFBMEIseUJBQXlCLDhCQUE4Qix5QkFBeUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsS0FBSyxjQUFjLHdCQUF3QixLQUFLLHlCQUF5Qix5QkFBeUIsc0NBQXNDLHlCQUF5Qix5QkFBeUIscUJBQXFCLG1CQUFtQix5REFBeUQscUJBQXFCLGNBQWMsZUFBZSx5QkFBeUIsd0JBQXdCLE9BQU8saUJBQWlCLHVCQUF1QixtQkFBbUIsaUJBQWlCLEtBQUssdUJBQXVCO0FBQ3psUjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9NYWluU2NyZWVuLmNzcz9mM2EyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIixcXHJcXG4gICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MzM0YjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNfX25leHQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zY3JlZW5fX2RpY3Rpb25hcnkge1xcclxcbiAgbWF4LXdpZHRoOiAzNzVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fdGl0bGUge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19pbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX2lucHV0ID4gaW5wdXQge1xcclxcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxyXFxuICBwYWRkaW5nOiAxNnB4IDEycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3RpbWVzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxNnB4O1xcclxcbiAgdG9wOiAxMXB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3NlbGVjdG9yIHtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fc2VsZWN0b3ItbGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fc2VsZWN0b3ItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3NlbGVjdG9yLWlucHV0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA0NXB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlMjIzOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4uY29taW5nLXNvb25fX2xhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDhweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBhZGRpbmc6IDBweCA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogI2JlMjIzOTtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19yZXN1bHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19yZXN1bHQtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19yZXN1bHQtbGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19yZXN1bHQtcmV2ZXJzZSB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3Jlc3VsdC1jb252ZXJ0IHtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19jb3B5IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX2J1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTIyMzk7XFxyXFxufVxcclxcbi5zcGFjaW5nIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3RvYXN0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NCk7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIGJvdHRvbTogMTZweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigxNyAxMiA0NiAvIDE1JSkgMHB4IDQ4cHggMTAwcHggMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuLnRvYXN0LXRleHQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvTWFpblNjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1Q7O2NBRVk7RUFDWixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0RBQWtEO0VBQ2xELGNBQWM7RUFDZCxPQUFPO0VBQ1AsUUFBUTtFQUNSLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsXFxyXFxuICAgIFxcXCJVYnVudHVcXFwiLCBcXFwiQ2FudGFyZWxsXFxcIiwgXFxcIkZpcmEgU2Fuc1xcXCIsIFxcXCJEcm9pZCBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTMzNGI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jX19uZXh0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2NyZWVuX19kaWN0aW9uYXJ5IHtcXHJcXG4gIG1heC13aWR0aDogMzc1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3RpdGxlIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9faW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19pbnB1dCA+IGlucHV0IHtcXHJcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcclxcbiAgcGFkZGluZzogMTZweCAxMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX190aW1lcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTZweDtcXHJcXG4gIHRvcDogMTFweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19zZWxlY3RvciB7XFxyXFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3NlbGVjdG9yLWxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3NlbGVjdG9yLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19zZWxlY3Rvci1pbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTIyMzk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLmNvbWluZy1zb29uX19sYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZm9udC1zaXplOiA4cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwYWRkaW5nOiAwcHggNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX2FjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICNiZTIyMzk7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fcmVzdWx0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fcmVzdWx0LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fcmVzdWx0LWxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fcmVzdWx0LXJldmVyc2Uge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19yZXN1bHQtY29udmVydCB7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fY29weSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19idXR0b24ge1xcclxcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUyMjM5O1xcclxcbn1cXHJcXG4uc3BhY2luZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX190b2FzdCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjQpO1xcclxcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICBib3R0b206IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMTcgMTIgNDYgLyAxNSUpIDBweCA0OHB4IDEwMHB4IDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuLnRvYXN0LXRleHQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/MainScreen.css\n"));

/***/ })

});