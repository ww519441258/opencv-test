"use strict";var _interopRequireDefault=require("../../@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getReducer;var _handleActions=_interopRequireDefault(require("./handleActions.js"));function getReducer(e,r,t){return Array.isArray(e)?e[1]((t||_handleActions.default)(e[0],r)):(t||_handleActions.default)(e||{},r)}