"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=prefixType;var _constants=require("./constants.js");function prefixType(e,t){var c="".concat(t.namespace).concat(_constants.NAMESPACE_SEP).concat(e),r=c.replace(/\/@@[^/]+?$/,"");return t.reducers&&t.reducers[r]||t.effects&&t.effects[r]?c:e}