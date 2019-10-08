"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}}(),_get=function e(t,o,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,o);if(void 0===i){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,o,r)}if("value"in i)return i.value;var n=i.get;return void 0!==n?n.call(r):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../npm/prop-types/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Brick=(_temp2=_class=function(e){function n(){var e,t,o;_classCallCheck(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=o=_possibleConstructorReturn(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i)))).$usedState=["_$anonymousState__temp","_$anonymousState__temp2","$compid__147","$compid__148","$compid__149","orderInfo","isSelfTaking","shippingType","disabled","orderStatus","__fn_onClick"],o.gotoChooseSite=function(){_index2.default.navigateTo({url:"/pages/choose-self-pick-up-site/choose-self-pick-up-site"})},o.gotoAddressList=function(){var e=o.props.orderInfo;if(!o.props.disabled){var t=e.order;0===t.address_id?_index2.default.navigateTo({url:"../edit-address/edit-address?choose="+t.id}):_index2.default.navigateTo({url:"../address-list/address-list?choose="+t.id+"&current="+t.address_id})}},o.customComponents=["SiteCell","Cell","AddressCell"],_possibleConstructorReturn(o,t)}return _inherits(n,_index.Component),_createClass(n,[{key:"_constructor",value:function(e){_get(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"_constructor",this).call(this,e),this.$$refs=[]}},{key:"_createData",value:function(){var e,t;this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var o=this.$prefix,r=(0,_index.genCompid)(o+"$compid__147"),i=(0,_index.genCompid)(o+"$compid__148"),s=(0,_index.genCompid)(o+"$compid__149"),n=this.__props,p=n.orderInfo,a=n.orderStatus,d=(n.onShowExpress,p.order||{}),_=1===d.shipping_type,c=["withoutShipping","selfTaking","express"][d.shipping_type];return p.express&&p.express.length,p.express&&0<p.express.length||(_?(e=p.order.picking_site&&p.order.picking_site.id?"未确认"!==a:null,p.order.picking_site&&p.order.picking_site.id&&_index.propsManager.set({info:p.order.picking_site,disabled:e,onClick:this.gotoChooseSite},r),(!p.order.picking_site||!p.order.picking_site.id)&&_index.propsManager.set({title:"未确认"===a?"选择自提点":"没有设置自提点",isLink:!0,onClick:this.gotoChooseSite},i)):"withoutShipping"===c||p.order&&(t=0<p.order.order_status,_index.propsManager.set({type:"display",disabled:t,address:p.order,onClick:this.gotoAddressList},s))),Object.assign(this.__state,{_$anonymousState__temp:e,_$anonymousState__temp2:t,$compid__147:r,$compid__148:i,$compid__149:s,orderInfo:p,isSelfTaking:_,shippingType:c}),this.__state}},{key:"funPrivateoSTBp",value:function(){return this.props.onShowExpress.apply(void 0,Array.prototype.slice.call(arguments,1))}}]),n}(),_class.$$events=["funPrivateoSTBp"],_class.options={addGlobalClass:!0},_class.defaultProps={orderInfo:{},orderStatus:"",onShowExpress:function(){},isVerification:!1},_class.propTypes={orderInfo:_index4.default.object.isRequired,orderStatus:_index4.default.string.isRequired,onShowExpress:_index4.default.func.isRequired,isVerification:_index4.default.bool},_class.$$componentPath="pages/order/Brick/index",_temp2);exports.default=Brick,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Brick));