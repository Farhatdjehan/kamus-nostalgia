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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\",\\r\\n    \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\",\\r\\n    sans-serif;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n  background-color: #d5334b;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n#__next {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.main-screen__dictionary {\\r\\n  max-width: 375px;\\r\\n  display: flex;\\r\\n  height: inherit;\\r\\n  flex-direction: column;\\r\\n  margin: 0 auto;\\r\\n  overflow: auto;\\r\\n}\\r\\n.main-screen__container {\\r\\n  padding: 8px 16px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n.main-screen__title {\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bold;\\r\\n  color: #fff;\\r\\n  margin-bottom: 24px;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n.main-screen__input {\\r\\n  margin-bottom: 16px;\\r\\n  position: relative;\\r\\n}\\r\\n.main-screen__input > input {\\r\\n  width: -webkit-fill-available;\\r\\n  padding: 16px 12px;\\r\\n  border-radius: 32px;\\r\\n  border: none;\\r\\n}\\r\\n.main-screen__times {\\r\\n  position: absolute;\\r\\n  right: 16px;\\r\\n  top: 11px;\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  color: lightgray;\\r\\n}\\r\\n.main-screen__selector {\\r\\n  /* display: flex; */\\r\\n}\\r\\n.main-screen__selector-label {\\r\\n  font-weight: bold;\\r\\n  color: #fff;\\r\\n  margin-bottom: 12px;\\r\\n}\\r\\n.main-screen__selector-container {\\r\\n  display: flex;\\r\\n  margin-bottom: 24px;\\r\\n}\\r\\n.main-screen__selector-input {\\r\\n  position: relative;\\r\\n  width: 45px;\\r\\n  height: 45px;\\r\\n  margin-right: 12px;\\r\\n  background-color: #be2239;\\r\\n  border-radius: 25px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bolder;\\r\\n  color: #fff;\\r\\n}\\r\\n.coming-soon__label {\\r\\n  background-color: #ffffff;\\r\\n  position: absolute;\\r\\n  font-size: 8px;\\r\\n  color: black;\\r\\n  bottom: 0;\\r\\n  padding: 0px 4px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n.main-screen__active {\\r\\n  background-color: #fff;\\r\\n  color: #be2239;\\r\\n}\\r\\n.main-screen__result {\\r\\n  background-color: #fff;\\r\\n  border-top-left-radius: 24px;\\r\\n  border-top-right-radius: 24px;\\r\\n  height: inherit;\\r\\n  padding: 16px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.main-screen__result-wrapper {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.main-screen__result-label {\\r\\n  font-weight: bolder;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n.main-screen__result-convert {\\r\\n  padding: 16px;\\r\\n  background-color: lightgray;\\r\\n  border-radius: 24px;\\r\\n  height: 100%;\\r\\n  overflow-wrap: break-word;\\r\\n}\\r\\n.main-screen__copy {\\r\\n  padding-top: 16px;\\r\\n  text-align: end;\\r\\n}\\r\\n.main-screen__button {\\r\\n  padding: 12px 20px;\\r\\n  border: none !important;\\r\\n  border-radius: 8px;\\r\\n  color: #fff;\\r\\n  font-weight: 600;\\r\\n  background-color: #be2239;\\r\\n}\\r\\n.spacing {\\r\\n  margin-right: 8px;\\r\\n}\\r\\n.main-screen__toast {\\r\\n  position: absolute;\\r\\n  background: rgba(0, 0, 0, 0.64);\\r\\n  padding: 12px 20px;\\r\\n  border-radius: 8px;\\r\\n  transition: 1s;\\r\\n  bottom: 16px;\\r\\n  box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;\\r\\n  margin: 0 auto;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  width: -webkit-fit-content;\\r\\n  width: -moz-fit-content;\\r\\n  width: fit-content;\\r\\n  /* display: none; */\\r\\n}\\r\\n.toast-text {\\r\\n  font-weight: 600;\\r\\n  color: white;\\r\\n  opacity: 1;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/MainScreen.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;EAClC,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,cAAc;EACd,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,6BAA6B;EAC7B,eAAe;EACf,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,kDAAkD;EAClD,cAAc;EACd,OAAO;EACP,QAAQ;EACR,0BAAkB;EAAlB,uBAAkB;EAAlB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;AACZ\",\"sourcesContent\":[\"body {\\r\\n  margin: 0;\\r\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\",\\r\\n    \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\",\\r\\n    sans-serif;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n  background-color: #d5334b;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n#__next {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.main-screen__dictionary {\\r\\n  max-width: 375px;\\r\\n  display: flex;\\r\\n  height: inherit;\\r\\n  flex-direction: column;\\r\\n  margin: 0 auto;\\r\\n  overflow: auto;\\r\\n}\\r\\n.main-screen__container {\\r\\n  padding: 8px 16px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n.main-screen__title {\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bold;\\r\\n  color: #fff;\\r\\n  margin-bottom: 24px;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n.main-screen__input {\\r\\n  margin-bottom: 16px;\\r\\n  position: relative;\\r\\n}\\r\\n.main-screen__input > input {\\r\\n  width: -webkit-fill-available;\\r\\n  padding: 16px 12px;\\r\\n  border-radius: 32px;\\r\\n  border: none;\\r\\n}\\r\\n.main-screen__times {\\r\\n  position: absolute;\\r\\n  right: 16px;\\r\\n  top: 11px;\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  color: lightgray;\\r\\n}\\r\\n.main-screen__selector {\\r\\n  /* display: flex; */\\r\\n}\\r\\n.main-screen__selector-label {\\r\\n  font-weight: bold;\\r\\n  color: #fff;\\r\\n  margin-bottom: 12px;\\r\\n}\\r\\n.main-screen__selector-container {\\r\\n  display: flex;\\r\\n  margin-bottom: 24px;\\r\\n}\\r\\n.main-screen__selector-input {\\r\\n  position: relative;\\r\\n  width: 45px;\\r\\n  height: 45px;\\r\\n  margin-right: 12px;\\r\\n  background-color: #be2239;\\r\\n  border-radius: 25px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bolder;\\r\\n  color: #fff;\\r\\n}\\r\\n.coming-soon__label {\\r\\n  background-color: #ffffff;\\r\\n  position: absolute;\\r\\n  font-size: 8px;\\r\\n  color: black;\\r\\n  bottom: 0;\\r\\n  padding: 0px 4px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n.main-screen__active {\\r\\n  background-color: #fff;\\r\\n  color: #be2239;\\r\\n}\\r\\n.main-screen__result {\\r\\n  background-color: #fff;\\r\\n  border-top-left-radius: 24px;\\r\\n  border-top-right-radius: 24px;\\r\\n  height: inherit;\\r\\n  padding: 16px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.main-screen__result-wrapper {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.main-screen__result-label {\\r\\n  font-weight: bolder;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n.main-screen__result-convert {\\r\\n  padding: 16px;\\r\\n  background-color: lightgray;\\r\\n  border-radius: 24px;\\r\\n  height: 100%;\\r\\n  overflow-wrap: break-word;\\r\\n}\\r\\n.main-screen__copy {\\r\\n  padding-top: 16px;\\r\\n  text-align: end;\\r\\n}\\r\\n.main-screen__button {\\r\\n  padding: 12px 20px;\\r\\n  border: none !important;\\r\\n  border-radius: 8px;\\r\\n  color: #fff;\\r\\n  font-weight: 600;\\r\\n  background-color: #be2239;\\r\\n}\\r\\n.spacing {\\r\\n  margin-right: 8px;\\r\\n}\\r\\n.main-screen__toast {\\r\\n  position: absolute;\\r\\n  background: rgba(0, 0, 0, 0.64);\\r\\n  padding: 12px 20px;\\r\\n  border-radius: 8px;\\r\\n  transition: 1s;\\r\\n  bottom: 16px;\\r\\n  box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;\\r\\n  margin: 0 auto;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  width: fit-content;\\r\\n  /* display: none; */\\r\\n}\\r\\n.toast-text {\\r\\n  font-weight: 600;\\r\\n  color: white;\\r\\n  opacity: 1;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL01haW5TY3JlZW4uY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxnREFBZ0QsZ0JBQWdCLG1NQUFtTSwwQ0FBMEMseUNBQXlDLGdDQUFnQyxvQkFBb0IsS0FBSyxpQkFBaUIsbUJBQW1CLEtBQUssa0NBQWtDLHVCQUF1QixvQkFBb0Isc0JBQXNCLDZCQUE2QixxQkFBcUIscUJBQXFCLEtBQUssNkJBQTZCLHdCQUF3QixvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsd0JBQXdCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLEtBQUsseUJBQXlCLDBCQUEwQix5QkFBeUIsS0FBSyxpQ0FBaUMsb0NBQW9DLHlCQUF5QiwwQkFBMEIsbUJBQW1CLEtBQUsseUJBQXlCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLHNCQUFzQix3QkFBd0IsdUJBQXVCLEtBQUssNEJBQTRCLHdCQUF3QixPQUFPLGtDQUFrQyx3QkFBd0Isa0JBQWtCLDBCQUEwQixLQUFLLHNDQUFzQyxvQkFBb0IsMEJBQTBCLEtBQUssa0NBQWtDLHlCQUF5QixrQkFBa0IsbUJBQW1CLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixrQkFBa0IsS0FBSyx5QkFBeUIsZ0NBQWdDLHlCQUF5QixxQkFBcUIsbUJBQW1CLGdCQUFnQix1QkFBdUIseUJB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SywwQkFBMEIsNkJBQTZCLG1DQUFtQyxvQ0FBb0Msc0JBQXNCLG9CQUFvQixvQkFBb0IsNkJBQTZCLEtBQUssa0NBQWtDLG9CQUFvQixxQ0FBcUMsS0FBSyxnQ0FBZ0MsMEJBQTBCLDBCQUEwQixLQUFLLGtDQUFrQyxvQkFBb0Isa0NBQWtDLDBCQUEwQixtQkFBbUIsZ0NBQWdDLEtBQUssd0JBQXdCLHdCQUF3QixzQkFBc0IsS0FBSywwQkFBMEIseUJBQXlCLDhCQUE4Qix5QkFBeUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsS0FBSyxjQUFjLHdCQUF3QixLQUFLLHlCQUF5Qix5QkFBeUIsc0NBQXNDLHlCQUF5Qix5QkFBeUIscUJBQXFCLG1CQUFtQix5REFBeUQscUJBQXFCLGNBQWMsZUFBZSx5QkFBeUIsd0JBQXdCLE9BQU8saUJBQWlCLHVCQUF1QixtQkFBbUIsaUJBQWlCLEtBQUssdUJBQXVCO0FBQ2g1UTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9NYWluU2NyZWVuLmNzcz9mM2EyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIixcXHJcXG4gICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MzM0YjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNfX25leHQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zY3JlZW5fX2RpY3Rpb25hcnkge1xcclxcbiAgbWF4LXdpZHRoOiAzNzVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fdGl0bGUge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19pbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX2lucHV0ID4gaW5wdXQge1xcclxcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxyXFxuICBwYWRkaW5nOiAxNnB4IDEycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3RpbWVzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxNnB4O1xcclxcbiAgdG9wOiAxMXB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3NlbGVjdG9yIHtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fc2VsZWN0b3ItbGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fc2VsZWN0b3ItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3NlbGVjdG9yLWlucHV0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA0NXB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlMjIzOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4uY29taW5nLXNvb25fX2xhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDhweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBhZGRpbmc6IDBweCA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogI2JlMjIzOTtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19yZXN1bHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19yZXN1bHQtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3Jlc3VsdC1sYWJlbCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19yZXN1bHQtY29udmVydCB7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fY29weSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19idXR0b24ge1xcclxcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUyMjM5O1xcclxcbn1cXHJcXG4uc3BhY2luZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX190b2FzdCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjQpO1xcclxcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICBib3R0b206IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMTcgMTIgNDYgLyAxNSUpIDBweCA0OHB4IDEwMHB4IDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxyXFxufVxcclxcbi50b2FzdC10ZXh0IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL01haW5TY3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNUOztjQUVZO0VBQ1osbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtEQUFrRDtFQUNsRCxjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlJvYm90b1xcXCIsIFxcXCJPeHlnZW5cXFwiLFxcclxcbiAgICBcXFwiVWJ1bnR1XFxcIiwgXFxcIkNhbnRhcmVsbFxcXCIsIFxcXCJGaXJhIFNhbnNcXFwiLCBcXFwiRHJvaWQgU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUzMzRiO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI19fbmV4dCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXNjcmVlbl9fZGljdGlvbmFyeSB7XFxyXFxuICBtYXgtd2lkdGg6IDM3NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX2NvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX190aXRsZSB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX2lucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9faW5wdXQgPiBpbnB1dCB7XFxyXFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXHJcXG4gIHBhZGRpbmc6IDE2cHggMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fdGltZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDE2cHg7XFxyXFxuICB0b3A6IDExcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fc2VsZWN0b3Ige1xcclxcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19zZWxlY3Rvci1sYWJlbCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19zZWxlY3Rvci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fc2VsZWN0b3ItaW5wdXQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDQ1cHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUyMjM5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5jb21pbmctc29vbl9fbGFiZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZzogMHB4IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjYmUyMjM5O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3Jlc3VsdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3Jlc3VsdC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tYWluLXNjcmVlbl9fcmVzdWx0LWxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3Jlc3VsdC1jb252ZXJ0IHtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLm1haW4tc2NyZWVuX19jb3B5IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX2J1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTIyMzk7XFxyXFxufVxcclxcbi5zcGFjaW5nIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG4ubWFpbi1zY3JlZW5fX3RvYXN0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NCk7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIGJvdHRvbTogMTZweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigxNyAxMiA0NiAvIDE1JSkgMHB4IDQ4cHggMTAwcHggMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbn1cXHJcXG4udG9hc3QtdGV4dCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/MainScreen.css\n"));

/***/ })

});