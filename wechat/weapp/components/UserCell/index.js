"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_get=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("../../npm/classnames/index.js"),_index6=_interopRequireDefault(_index5);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var UserCell=(_temp2=_class=function(e){function i(){var e,t,r;_classCallCheck(this,i);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=r=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o)))).$usedState=["anonymousState__temp","isOpenData","avatar","text","rightText","nickname","errorText","size","children"],r.customComponents=[],_possibleConstructorReturn(r,t)}return _inherits(i,_index.Component),_createClass(i,[{key:"_constructor",value:function(e){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__state.rightText,t=this.__props,r=t.avatar,n=t.nickname,o=t.isOpenData,a=t.errorText,i=t.size,s=t.text,l=(0,_index6.default)("user-cell",i);return Object.assign(this.__state,{anonymousState__temp:l,isOpenData:o,avatar:r,text:s,rightText:e,nickname:n,errorText:a}),this.__state}}]),i}(),_class.$$events=[],_class.options={addGlobalClass:!0},_class.defaultProps={nickname:"",avatar:"",text:"",rightText:"",errorText:"无法获取昵称",isOpenData:!1,size:"normal"},_class.propTypes={avatar:_index4.default.string,nickname:_index4.default.string,isOpenData:_index4.default.bool,errorText:_index4.default.string,size:_index4.default.string},_class.$$componentPath="components/UserCell/index",_temp2);exports.default=UserCell,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(UserCell));