"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}}(),_get=function e(t,o,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,o,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_indexModuleScssMap=require("./index.module.scss.map.js"),_indexModuleScssMap2=_interopRequireDefault(_indexModuleScssMap);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Divider=(_temp2=_class=function(e){function i(){var e,t,o;_classCallCheck(this,i);for(var r=arguments.length,n=Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=o=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(n)))).$usedState=["anonymousState__temp","style","layoutInfo"],o.customComponents=[],_possibleConstructorReturn(o,t)}return _inherits(i,_index.Component),_createClass(i,[{key:"_constructor",value:function(e){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__props.layoutInfo,t=e.color,o=e.margin,r=e.style,n=(0,_index.internal_inline_style)({margin:"edge"===o?"0 30rpx":"0",borderBottomColor:t,borderBottomStyle:r});return Object.assign(this.__state,{anonymousState__temp:n,style:_indexModuleScssMap2.default}),this.__state}}]),i}(),_class.$$events=[],_class.options={addGlobalClass:!0},_class.propTypes={},_class.defaultProps={layoutInfo:{}},_class.$$componentPath="components/Divider/index",_temp2);exports.default=Divider,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Divider));