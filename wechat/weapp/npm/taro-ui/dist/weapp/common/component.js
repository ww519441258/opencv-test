"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _class,_temp,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_index=require("../../../../@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var objectToString=function(o){if(o&&"object"===(void 0===o?"undefined":_typeof(o))){var n="";return Object.keys(o).forEach(function(e){var t=e.replace(/([A-Z])/g,"-$1").toLowerCase();n+=t+":"+o[e]+";"}),n}return o&&"string"==typeof o?o:""},AtComponent=(_temp=_class=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,_index.Component),_createClass(t,[{key:"mergeStyle",value:function(e,t){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&t&&"object"===(void 0===t?"undefined":_typeof(t))?Object.assign({},e,t):objectToString(e)+objectToString(t)}}]),t}(),_class.options={addGlobalClass:!0},_temp);exports.default=AtComponent;