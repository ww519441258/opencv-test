"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_ajax=require("../../utils/ajax.js"),_ajax2=_interopRequireDefault(_ajax);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var PointsShop=(_temp2=_class=function(e){function s(){var e,t,o;_classCallCheck(this,s);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=o=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(r)))).$usedState=["loopArray26","$compid__111","goodsList"],o.config={navigationBarTitleText:"积分商城"},o.customComponents=["GoodsCard","Tip","Loading"],_possibleConstructorReturn(o,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.state={goodsList:null},this.$$refs=[]}},{key:"componentWillMount",value:function(){var t=this;(0,_ajax2.default)({name:"getPointsShopGoods",success:function(e){t.setState({goodsList:e})}})}},{key:"onShareAppMessage",value:function(){}},{key:"onPullDownRefresh",value:function(){this.componentWillMount()}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var n=this.$prefix,e=(0,_index.genCompid)(n+"$compid__111"),t=void 0,o=this.__state.goodsList;return o&&0<o.length?t=o.map(function(e,t){e={$original:(0,_index.internal_get_original)(e)};var o=(0,_index.genCompid)(n+"iYGCwQQSfU"+t);return _index.propsManager.set({goods:e.$original,isExchange:!0},o),{$compid__110:o,$original:e.$original}}):o&&_index.propsManager.set({text:"暂时没有可兑换的商品"},e),Object.assign(this.__state,{loopArray26:t,$compid__111:e}),this.__state}}]),s}(),_class.$$events=[],_class.$$componentPath="pages/points-shop/points-shop",_temp2);exports.default=PointsShop,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(PointsShop,!0));