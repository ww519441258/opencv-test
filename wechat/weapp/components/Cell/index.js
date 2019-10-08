"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),_get=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,n)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Cell=(_temp2=_class=function(e){function s(){var e,t,n;_classCallCheck(this,s);for(var i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=n=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(o)))).$usedState=["$compid__136","$compid__137","$compid__138","type","isExchange","isPrice","value","disabled","isLink","className","icon","title","children"],n.onClick=function(){var e=n.props,t=e.disabled,i=e.onClick;t||i&&n.props.onClick()},n.customComponents=["Price"],_possibleConstructorReturn(n,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var e=this.$prefix,t=(0,_index.genCompid)(e+"$compid__136"),i=(0,_index.genCompid)(e+"$compid__137"),n=(0,_index.genCompid)(e+"$compid__138"),o=this.__props,r=o.title,s=o.type,a=o.isExchange,l=o.isPrice,c=o.isLink,p=o.icon,_=o.disabled,u=o.value,d="cell "+(_?"disabled":c?"can-click ":"");return"text"!==s?_index.propsManager.set({price:u,type:s},t):a?_index.propsManager.set({price:u,isExchange:!0},i):l&&_index.propsManager.set({price:u},n),Object.assign(this.__state,{$compid__136:t,$compid__137:i,$compid__138:n,type:s,isExchange:a,isPrice:l,value:u,disabled:_,isLink:c,className:d,icon:p,title:r}),this.__state}}]),s}(),_class.$$events=["onClick"],_class.options={addGlobalClass:!0},_class.defaultProps={disabled:!1,title:"",value:"",type:"text",isPrice:!1,isExchange:!1,isLink:!1},_class.propTypes={title:_index4.default.string.isRequired,value:_index4.default.oneOfType([_index4.default.string,_index4.default.number]),type:_index4.default.string,isPrice:_index4.default.bool,isExchange:_index4.default.bool,isLink:_index4.default.bool,disabled:_index4.default.bool,onClick:_index4.default.func},_class.$$componentPath="components/Cell/index",_temp2);exports.default=Cell,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Cell));