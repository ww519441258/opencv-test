"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}(),_get=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,o)}if("value"in n)return n.value;var s=n.get;return void 0!==s?s.call(o):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Table=(_temp2=_class=function(e){function s(){var e,t,r;_classCallCheck(this,s);for(var o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];return(t=r=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(n)))).$usedState=["attrs","tableData","headerText","colLabels"],r.customComponents=["Loading"],_possibleConstructorReturn(r,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__props,t=e.colLabels,r=e.tableData,o=Object.keys(t),n=Object.values(t);return Object.assign(this.__state,{attrs:o,tableData:r,headerText:n}),this.__state}}]),s}(),_class.$$events=[],_class.options={addGlobalClass:!0},_class.defaultProps={colLabels:{},tableData:[]},_class.propTypes={colLabels:_index4.default.object,tableData:_index4.default.array},_class.$$componentPath="components/Table/index",_temp2);exports.default=Table,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Table));