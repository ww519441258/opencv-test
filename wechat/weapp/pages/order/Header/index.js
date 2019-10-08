"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}(),_get=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var s=n.get;return void 0!==s?s.call(o):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3),_countdown=require("../../../utils/countdown.js"),_countdown2=_interopRequireDefault(_countdown);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Header=(_temp2=_class=function(e){function s(){var e,t,i;_classCallCheck(this,s);for(var r=arguments.length,o=Array(r),n=0;n<r;n++)o[n]=arguments[n];return(t=i=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(o)))).$usedState=["tipText","icon","orderStatusText","dueTime","orderStatus","orderType"],i.refreshCountdown=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i.props,t=e.orderInfo,r=e.orderStatus;if(i.timer&&clearInterval(i.timer),i.setState({dueTime:null}),t){var o="待"===r.charAt(0);if(1===t.order.order_status&&2===t.order.order_type&&0===t.regimentInfo.regiment_status){var n=t.regimentInfo.regiment_end_date;n&&i.startCountDown(1e3*n)}else o&&t.order.dueTime&&i.startCountDown(1e3*t.order.dueTime)}},i.startCountDown=function(e){i.timer&&clearInterval(i.timer),i.timer=(0,_countdown2.default)({time:e,updateCycle:60,updatedCallback:function(e,t,r){var o="";0<e&&(o+=e+" 天 "),0<t&&(o+=t+" 小时 "),i.setState({dueTime:" "+o+r+" 分钟"})}})},i.customComponents=[],_possibleConstructorReturn(i,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.timer=null,this.state={dueTime:null},this.$$refs=[]}},{key:"componentWillMount",value:function(){this.refreshCountdown()}},{key:"componentWillReceiveProps",value:function(e){this.refreshCountdown(e)}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__props,t=e.orderStatus,r=e.orderStatusText,o=e.orderType,n={"未确认":"warning","待付款":"pay","待发货":"will-deliver","待收货":"express","待提货":"will-deliver","已完成":"finish","已取消":"close"}[t],i=void 0;return i="拼团订单"===o?"未拼满自动退款":"待付款"===t?"自动取消订单":"自动确认收货",Object.assign(this.__state,{tipText:i,icon:n,orderStatusText:r}),this.__state}}]),s}(),_class.$$events=[],_class.options={addGlobalClass:!0},_class.propTypes={orderInfo:_index4.default.object,orderStatus:_index4.default.string.isRequired,orderStatusText:_index4.default.string.isRequired,orderType:_index4.default.string.isRequired},_class.defaultProps={orderInfo:{}},_class.$$componentPath="pages/order/Header/index",_temp2);exports.default=Header,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Header));