"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),_get=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("../../npm/classnames/index.js"),_index6=_interopRequireDefault(_index5);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ActionBar=(_temp2=_class=function(e){function a(){var e,t,n;_classCallCheck(this,a);for(var i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o)))).$usedState=["anonymousState__temp","className","tip","minorButton","disabled","disabledMinor","mainButton","disabledMain","isButtonFill","fixed","noFixed","needMargin","__fn_onClick","renderLeft","renderRight","onClickMinor","onClickMain"],n.customComponents=[],_possibleConstructorReturn(n,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(e){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__props,t=e.isButtonFill,n=e.mainButton,i=e.minorButton,o=e.disabled,r=e.disabledMain,a=e.disabledMinor,s=(e.onClickMain,e.onClickMinor,e.tip),l=(0,_index6.default)("action-bar",{fixed:this.__props.fixed,"no-fixed":this.__props.noFixed,"need-margin":this.__props.needMargin}),u=(0,_index6.default)("action-bar--body",{"button-list--fill":t});return Object.assign(this.__state,{anonymousState__temp:u,className:l,tip:s,minorButton:i,disabled:o,disabledMinor:a,mainButton:n,disabledMain:r}),this.__state}},{key:"funPrivatejMmBS",value:function(){return this.props.onClickMinor.apply(void 0,Array.prototype.slice.call(arguments,1))}},{key:"funPrivateThCtn",value:function(){return this.props.onClickMain.apply(void 0,Array.prototype.slice.call(arguments,1))}}]),a}(),_class.$$events=["funPrivatejMmBS","funPrivateThCtn"],_class.options={addGlobalClass:!0},_class.propTypes={mainButton:_index4.default.string,minorButton:_index4.default.string,disabledMain:_index4.default.bool,disabledMinor:_index4.default.bool,renderLeft:_index4.default.node,renderRight:_index4.default.node,price:_index4.default.oneOfType([_index4.default.number,_index4.default.string]),needMargin:_index4.default.bool,fixed:_index4.default.bool,onClickMain:_index4.default.func,onClickMinor:_index4.default.func,isPoints:_index4.default.bool,isButtonFill:_index4.default.bool},_class.defaultProps={disabled:!1,noFixed:!1,fixed:!0,needMargin:!1,isButtonFill:!1,disabledMain:!1,disabledMinor:!1,tip:"",onClickMain:function(){},onClickMinor:function(){}},_class.multipleSlots=!0,_class.$$componentPath="components/ActionBar/index",_temp2);exports.default=ActionBar,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(ActionBar));