"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(n):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var GroupBooking=(_temp2=_class=function(e){function s(){var e,t,o;_classCallCheck(this,s);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=o=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(r)))).$usedState=["regimentByShare","$compid__135","regimentId","goodsInfo","groupBookingList","__fn_onClick","onShowSkuForJoin"],o.customComponents=["Cell"],_possibleConstructorReturn(o,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var e=this.$prefix,t=(0,_index.genCompid)(e+"$compid__135"),o=this.__props,n=o.goodsInfo,r=o.regimentId,i=(o.onShowSkuForJoin,o.regimentByShare),s=n&&n.regimentInfo,a=i&&["进行中","已完成"][i.regiment_status];return i&&_index.propsManager.set({title:"拼团状态",value:a},t),n.regimentInfo,Object.assign(this.__state,{regimentByShare:i,$compid__135:t,regimentId:r,goodsInfo:n,groupBookingList:s}),this.__state}},{key:"funPrivatehRZOz",value:function(){return this.props.onShowSkuForJoin.apply(this,Array.prototype.slice.call(arguments,1))}}]),s}(),_class.$$events=["funPrivatehRZOz"],_class.options={addGlobalClass:!0},_class.defaultProps={goodsInfo:{},regimentId:0,onShowSkuForJoin:function(){}},_class.propTypes={goodsInfo:_index4.default.object.isRequired,regimentId:_index4.default.number,onShowSkuForJoin:_index4.default.func},_class.$$componentPath="pages/goods-detail/GroupBooking/index",_temp2);exports.default=GroupBooking,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(GroupBooking));