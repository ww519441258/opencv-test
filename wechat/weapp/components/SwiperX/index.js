"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,o,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var logo="/images/logo.png",SwiperX=(_temp2=_class=function(e){function i(){var e,t,o;_classCallCheck(this,i);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=o=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","data","logo","layoutInfo"],o.goto=function(e){e&&_index2.default.navigateTo({url:"/"+e})},o.customComponents=[],_possibleConstructorReturn(o,t)}return _inherits(i,_index.Component),_createClass(i,[{key:"_constructor",value:function(e){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__props.layoutInfo.data,t=e&&0<e.length?e.map(function(e){return e.ratio}).reduce(function(e,t){return Math.max(e,t)}):.741,o=(0,_index.internal_inline_style)({height:750*t+"rpx;"});return Object.assign(this.__state,{anonymousState__temp:o,data:e,logo:logo}),this.__state}}]),i}(),_class.$$events=["goto"],_class.options={addGlobalClass:!0},_class.defaultProps={layoutInfo:{}},_class.propTypes={layoutInfo:_index4.default.object},_class.$$componentPath="components/SwiperX/index",_temp2);exports.default=SwiperX,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(SwiperX));