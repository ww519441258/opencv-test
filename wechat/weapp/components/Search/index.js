"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/classnames/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var search=(_temp2=_class=function(e){function a(){var e,t,o;_classCallCheck(this,a);for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=o=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","className","isShowPopup","layoutInfo"],o.showPopup=function(){},o.onSearch=function(e){0<e.detail.value.length?_index2.default.navigateTo({url:"../goods-list/goods-list?type=search&keyword="+e.detail.value}):_index2.default.showToast({title:"请输入搜索内容",icon:"none"})},o.customComponents=[],_possibleConstructorReturn(o,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(e){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,e),this.state={isShowPopup:!1},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__props.layoutInfo.style,t=void 0===e?"fillet":e,o=(0,_index4.default)("search-popup",{show:this.__state.isShowPopup}),n=(0,_index4.default)("search-bar",t);return Object.assign(this.__state,{anonymousState__temp:n,className:o}),this.__state}}]),a}(),_class.$$events=["showPopup","onSearch"],_class.options={addGlobalClass:!0},_class.defaultProps={layoutInfo:{}},_class.$$componentPath="components/Search/index",_temp2);exports.default=search,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(search));