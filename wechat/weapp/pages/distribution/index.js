"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_ajax=require("../../utils/ajax.js"),_ajax2=_interopRequireDefault(_ajax);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Index=(_temp2=_class=function(e){function s(){var e,t,o;_classCallCheck(this,s);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=o=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(r)))).$usedState=["$compid__65","$compid__66","$compid__67","service","userInfo"],o.config={navigationBarTitleText:"分销中心"},o.customComponents=["Price","Loading"],_possibleConstructorReturn(o,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.state={userInfo:null},this.$$refs=[]}},{key:"componentWillMount",value:function(){var t=this;(0,_ajax2.default)({name:"getDistributionCenterInfo",success:function(e){t.setState({userInfo:e})}})}},{key:"onShareAppMessage",value:function(){}},{key:"onPullDownRefresh",value:function(){this.componentWillMount()}},{key:"goto",value:function(e){_index2.default.navigateTo({url:e+"/"+e})}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var e=this.$prefix,t=(0,_index.genCompid)(e+"$compid__65"),o=(0,_index.genCompid)(e+"$compid__66"),n=(0,_index.genCompid)(e+"$compid__67"),r=this.__state.userInfo;return r?(_index.propsManager.set({price:r.successfully_commission},t),_index.propsManager.set({price:r.cashable_commission},o)):_index.propsManager.set({type:"inline",display:"light"},n),Object.assign(this.__state,{$compid__65:t,$compid__66:o,$compid__67:n,service:[{icon:"pay",text:"佣金明细",url:"commission-detail"},{icon:"order",text:"分销订单",url:"distribution-order-list"},{icon:"detail-up",text:"提现明细",url:"withdraw-logs"},{icon:"subordinate",text:"我的下线",url:"my-subordinate"},{icon:"qrcode",text:"推广二维码",url:"qrcode-for-promotion"}]}),this.__state}}]),s}(),_class.$$events=["goto"],_class.$$componentPath="pages/distribution/index",_temp2);exports.default=Index,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index,!0));