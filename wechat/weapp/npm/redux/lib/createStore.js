"use strict";exports.__esModule=!0,exports.ActionTypes=void 0,exports.default=createStore;var _isPlainObject=require("../../lodash/isPlainObject.js"),_isPlainObject2=_interopRequireDefault(_isPlainObject),_symbolObservable=require("../../symbol-observable/lib/index.js"),_symbolObservable2=_interopRequireDefault(_symbolObservable);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var ActionTypes=exports.ActionTypes={INIT:"@@redux/INIT"};function createStore(e,t,r){var n;if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(createStore)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,i=t,c=[],s=c,u=!1;function a(){s===c&&(s=c.slice())}function f(){return i}function b(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var r=!0;return a(),s.push(t),function(){if(r){r=!1,a();var e=s.indexOf(t);s.splice(e,1)}}}function l(e){if(!(0,_isPlainObject2.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,i=o(i,e)}finally{u=!1}for(var t=c=s,r=0;r<t.length;r++){(0,t[r])()}return e}return l({type:ActionTypes.INIT}),(n={dispatch:l,subscribe:b,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,l({type:ActionTypes.INIT})}})[_symbolObservable2.default]=function(){var e,r=b;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(f())}return t(),{unsubscribe:r(t)}}})[_symbolObservable2.default]=function(){return this},e},n}