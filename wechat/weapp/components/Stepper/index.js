"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}}(),_get=function e(t,o,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,o,r)}if("value"in n)return n.value;var s=n.get;return void 0!==s?s.call(r):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_ajax=require("../../utils/ajax.js"),_ajax2=_interopRequireDefault(_ajax);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Index=(_temp2=_class=function(e){function s(){var e,t,o;_classCallCheck(this,s);for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=o=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(n)))).$usedState=["async","param","value","min","max"],o.sub=function(e){o.props.async?(0,_ajax2.default)({name:"subGoodsNumberOfCart",data:{id:o.props.param},success:function(){o.props.onChange(o.props.value-1,o.props.param)}}):o.props.onChange(o.props.value-1,o.props.param),e.stopPropagation()},o.add=function(e){o.props.async?(0,_ajax2.default)({name:"plusGoodsNumberOfCart",data:{id:o.props.param},success:function(){o.props.onChange(o.props.value+1,o.props.param)}}):o.props.onChange(o.props.value+1,o.props.param),e.stopPropagation()},o.customComponents=[],_possibleConstructorReturn(o,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;return Object.assign(this.__state,{}),this.__state}}]),s}(),_class.$$events=["sub","stopPropagation","add"],_class.$$componentPath="components/Stepper/index",_temp2);exports.default=Index,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index));