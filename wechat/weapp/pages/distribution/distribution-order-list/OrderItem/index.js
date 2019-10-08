"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}(),_get=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var s=n.get;return void 0!==s?s.call(o):void 0},_index=require("../../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3),_orderStatus=require("../../../order/order-status.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var OrderItem=(_temp2=_class=function(e){function s(){var e,t,r;_classCallCheck(this,s);for(var o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=r=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(n)))).$usedState=["$compid__161","$compid__162","$compid__163","$compid__164","$compid__165","orderStatus","order"],r.customComponents=["UserCell","GoodsCell","Cell"],_possibleConstructorReturn(r,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var e=this.$prefix,t=(0,_index.genCompid)(e+"$compid__161"),r=(0,_index.genCompid)(e+"$compid__162"),o=(0,_index.genCompid)(e+"$compid__163"),n=(0,_index.genCompid)(e+"$compid__164"),i=(0,_index.genCompid)(e+"$compid__165"),s=this.__props.order,a=(0,_orderStatus.getStatus)(s);return s&&(_index.propsManager.set({nickname:s.nickname,avatar:s.avatar},t),_index.propsManager.set({goods:s,disabled:!0},r),_index.propsManager.set({title:"订单号",value:s.order_sn},o),_index.propsManager.set({title:"下单时间",value:s.created_at},n),_index.propsManager.set({title:"预计佣金",value:s.allcommission,isPrice:!0},i)),Object.assign(this.__state,{$compid__161:t,$compid__162:r,$compid__163:o,$compid__164:n,$compid__165:i,orderStatus:a,order:s}),this.__state}}]),s}(),_class.$$events=[],_class.options={addGlobalClass:!0},_class.defaultProps={},_class.propTypes={order:_index4.default.object},_class.$$componentPath="pages/distribution/distribution-order-list/OrderItem/index",_temp2);exports.default=OrderItem,Component(require("../../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(OrderItem));