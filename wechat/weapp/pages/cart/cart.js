"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,o);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,o,n)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_ajax=require("../../utils/ajax.js"),_ajax2=_interopRequireDefault(_ajax),_globalData=require("../../utils/global-data.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Cart=(_temp2=_class=function(e){function a(){var e,t,i;_classCallCheck(this,a);for(var o=arguments.length,n=Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=i=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(n)))).$usedState=["loopArray3","$compid__10","$compid__11","$compid__12","price","isCheckAll","goodsList","__fn_on"],i.config={navigationBarTitleText:"购物车"},i.hasLoad=!1,i.gotoHome=function(){_index2.default.switchTab({url:"../index/index"})},i.gotoDetail=function(e){_index2.default.navigateTo({url:"../goods-detail/goods-detail?id="+e})},i.changeNumber=function(e,t){var o=i.state.goodsList;o.find(function(e){return e.id===t}).goods_number=e,i.setState({goodsList:o})},i.onChangeCheckbox=function(t,e){var o=i.state.goodsList,n=o.find(function(e){return e.id===t});n.checked=!n.checked,i.setState({goodsList:o}),e.stopPropagation()},i.onChangeCheckAll=function(){var e=i.state.goodsList,t=i.state.goodsList.every(function(e){return e.checked});e.forEach(function(e){return e.checked=!t}),i.setState({goodsList:e})},i.onSubmit=function(){var t=i.state.goodsList.filter(function(e){return e.checked}).map(function(e){return e.id});(0,_ajax2.default)({name:"submitOrder",data:{ids:t},success:function(e){(0,_globalData.setGlobalData)("submittedCartIds",t),_index2.default.navigateTo({url:"../order/order?id="+e.orderId})},fail:function(e){2===e.code&&(_index2.default.navigateTo({url:"../edit-address/edit-address"}),_index2.default.showToast({title:"当前没有收货地址，请先新建一个收货地址",icon:"none",duration:3e3}))}})},i.onDelete=function(){var e=i.state.goodsList;(0,_ajax2.default)({name:"delGoodsFromCart",data:{ids:e.filter(function(e){return e.checked}).map(function(e){return e.id})},success:function(){i.setState({goodsList:e.filter(function(e){return!e.checked})})}})},i.customComponents=["Price","Stepper","ActionBar","Tip","Loading"],_possibleConstructorReturn(i,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(e){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,e),this.state={goodsList:null},this.$$refs=[]}},{key:"componentWillMount",value:function(){var o=this,e=function(e){(0,_ajax2.default)({name:"cart",success:function(e){if(0<e.length){var t=_index2.default.getStorageSync("checkedIdsForBuyAgain");o.setState({goodsList:e.map(function(e){return _extends({},e,{checked:void 0!==t&&0<=t.indexOf(e.id)})})})}else o.setState({goodsList:[]});_index2.default.stopPullDownRefresh()}})};_index2.default.eventCenter.on("updateCart",function(){e()}),this.hasLoad||(e(),this.hasLoad=!0)}},{key:"onShareAppMessage",value:function(){}},{key:"onPullDownRefresh",value:function(){this.hasLoad=!1,this.componentWillMount()}},{key:"_createData",value:function(){var r=this;this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var a=this.$prefix,e=(0,_index.genCompid)(a+"$compid__10"),t=(0,_index.genCompid)(a+"$compid__11"),o=(0,_index.genCompid)(a+"$compid__12"),n=void 0,i=0,s=!0,c=!1;return this.__state.goodsList&&this.__state.goodsList.filter(function(e){return e.checked}).forEach(function(e){i+=parseFloat(e.shop_price)*e.goods_number}),this.__state.goodsList&&0<this.__state.goodsList.length?(s=this.__state.goodsList.every(function(e){return!e.checked}),c=this.__state.goodsList.every(function(e){return e.checked}),n=this.__state.goodsList.map(function(e,t){var o=(e={$original:(0,_index.internal_get_original)(e)}).$original.sku_type?e.$original.sku_type.replace(/,/g,", "):null,n=(0,_index.genCompid)(a+"UiDcGyRpWJ"+t);_index.propsManager.set({price:e.$original.shop_price},n);var i=(0,_index.genCompid)(a+"JlJrUnLUUa"+t);return _index.propsManager.set({value:e.$original.goods_number,min:1,param:e.$original.id,onChange:r.changeNumber.bind(e.$original.id),async:!0},i),{$loopState__temp2:o,$compid__8:n,$compid__9:i,$original:e.$original}}),_index.propsManager.set({disabledMinor:s,needMargin:!1,mainButton:"提交订单",minorButton:"删除",onClickMain:this.onSubmit,onClickMinor:this.onDelete},e),0<=i&&_index.propsManager.set({price:i},t)):this.__state.goodsList&&_index.propsManager.set({text:"购物车没有商品，快来添加商品到购物车吧。",mainAction:"去逛逛",mainActionType:"home"},o),Object.assign(this.__state,{loopArray3:n,$compid__10:e,$compid__11:t,$compid__12:o,price:i,isCheckAll:c}),this.__state}}]),a}(),_class.$$events=["onChangeCheckbox","gotoDetail","onChangeCheckAll"],_class.$$componentPath="pages/cart/cart",_temp2);exports.default=Cart,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Cart,!0));