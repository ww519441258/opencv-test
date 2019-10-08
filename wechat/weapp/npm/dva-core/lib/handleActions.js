"use strict";var _interopRequireDefault=require("../../@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(require("../../@babel/runtime/helpers/toConsumableArray.js")),_keys=_interopRequireDefault(require("../../@babel/runtime/core-js/object/keys.js")),_invariant=_interopRequireDefault(require("../../invariant/invariant.js"));function identify(e){return e}function handleAction(n){var u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:identify;return function(e,r){var t=r.type;return(0,_invariant.default)(t,"dispatch: action should be a plain Object with type"),n===t?u(e,r):e}}function reduceReducers(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e,t){return r.reduce(function(e,r){return r(e,t)},e)}}function handleActions(r,t){var e=(0,_keys.default)(r).map(function(e){return handleAction(e,r[e])}),n=reduceReducers.apply(void 0,(0,_toConsumableArray2.default)(e));return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t,r=1<arguments.length?arguments[1]:void 0;return n(e,r)}}var _default=handleActions;exports.default=_default;