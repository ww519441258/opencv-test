"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_get=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Blank=(_temp2=_class=function(e){function i(){var e,t,n;_classCallCheck(this,i);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=n=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o)))).$usedState=["anonymousState__temp","height"],n.customComponents=[],_possibleConstructorReturn(n,t)}return _inherits(i,_index.Component),_createClass(i,[{key:"_constructor",value:function(e){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__props.height,t=(0,_index.internal_inline_style)({width:"100%",height:e+"rpx"});return Object.assign(this.__state,{anonymousState__temp:t}),this.__state}}]),i}(),_class.$$events=[],_class.options={addGlobalClass:!0},_class.propTypes={height:_index4.default.number},_class.defaultProps={height:20},_class.$$componentPath="components/Blank/index",_temp2);exports.default=Blank,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Blank));