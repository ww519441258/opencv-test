(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"241":function(e,t,o){"use strict";o.d(t,"a",function(){return d});var n,r,i=o(1),a=o(2),c=o(51),s=o(10),l=o.n(s),p=o(240),u=o.n(p),f=(o(242),function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}());var d=(r=n=function(e){function loading(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,loading);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(loading.__proto__||Object.getPrototypeOf(loading)).call(this,e));return t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(loading,a["a"].Component),f(loading,[{"key":"render","value":function render(){var e=this.props,t=e.type,o=e.display,n=e.tipText,r=l()("loading",t,o);return i.k.createElement(c.a,{"className":r},i.k.createElement(c.a,{"className":"circle"}),i.k.createElement(c.a,{"className":"text"},n,"..."))}}]),loading}(),n.options={"addGlobalClass":!0},n.propTypes={"type":u.a.oneOf(["center","block","inline"]),"display":u.a.oneOf(["dark","light"]),"tipText":u.a.string},n.defaultProps={"type":"center","display":"dark","tipText":"加载中"},r)},"242":function(e,t,o){},"244":function(e,t,o){"use strict";o.d(t,"a",function(){return f});var n,r,i=o(1),a=o(2),c=o(259),s=o(51),l=o(240),p=o.n(l),u=(o(256),function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}());var f=(r=n=function(e){function Price(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Price),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Price.__proto__||Object.getPrototypeOf(Price)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Price,a["a"].Component),u(Price,[{"key":"render","value":function render(){var e=this.props,t=e.price,o=e.marketPrice,n=e.center,r=e.isExchange,a=t>0?Math.floor(t):Math.ceil(t),l=parseFloat(t).toFixed(2).toString().replace(/-?[0-9]*(\.?[0-9]*)/g,"$1"),p=parseFloat(o).toFixed(2),u=this.props.type,f=void 0;r&&(u="points");var d="price"===u;return f="price"===u?i.k.createElement(c.a,null,"￥"):"points"===u?i.k.createElement(c.a,{"className":"iconfont icon-point"}):i.k.createElement(c.a,{"className":"iconfont icon-exp"}),i.k.createElement(s.a,{"className":"price "+(n?"price-center":"")},i.k.createElement(c.a,{"className":"price__main price--"+u},f,i.k.createElement(c.a,{"className":"price__int"},a),d&&i.k.createElement(c.a,{"className":"price__dec"},l)),p>0&&i.k.createElement(c.a,{"className":"price__market-price"},"￥",p))}}]),Price}(),n.options={"addGlobalClass":!0},n.defaultProps={"price":0,"marketPrice":NaN,"isExchange":!1,"type":"price"},r);f.propTypes={"price":p.a.oneOfType([p.a.number,p.a.string]).isRequired,"marketPrice":p.a.oneOfType([p.a.number,p.a.string]),"isExchange":p.a.bool,"type":p.a.oneOf(["price","points","exp"])}},"253":function(e,t,o){"use strict";o.d(t,"a",function(){return d});var n,r,i=o(1),a=o(2),c=o(124),s=o(51),l=o(258),p=o(240),u=o.n(p),f=(o(254),function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}());var d=(r=n=function(e){function Tip(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tip);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Tip.__proto__||Object.getPrototypeOf(Tip)).call(this,e));return t.onClickButtonHandle=function(){var e=t.props,o=e.mainActionType,n=e.onClickMain;"back"===o?a.a.navigateBack():"home"===o?"WEAPP"===a.a.getEnv()?Object(c.d)({"url":"/pages/index/index"}):(a.a.redirectTo({"url":"/pages/index/index"}),window.location.reload()):"custom"===o&&n()},t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Tip,a["a"].Component),f(Tip,[{"key":"render","value":function render(){var e=this.props,t=e.type,o=e.icon,n=e.text,r=e.mainAction,a=e.height,c=e.mainActionType;return i.k.createElement(s.a,{"className":"tip "+t,"style":{"height":a}},i.k.createElement(s.a,{"className":"tip__content"},i.k.createElement(s.a,{"className":"iconfont icon-"+o}),i.k.createElement(s.a,{"className":"tip__text"},n),"none"!==c&&""!==r&&i.k.createElement(l.a,{"type":"primary","onClick":this.onClickButtonHandle},r)))}}]),Tip}(),n.options={"addGlobalClass":!0},n.defaultProps={"type":"auto","icon":"empty","text":"当前没有数据","height":"100%","mainAction":"返回上一级","mainActionType":"back"},r);d.propTypes={"type":u.a.oneOf(["full","auto"]),"icon":u.a.string,"text":u.a.string,"mainAction":u.a.string,"mainActionType":u.a.oneOf(["back","home","custom","none"]),"height":u.a.string,"onClickMain":u.a.func}},"254":function(e,t,o){},"256":function(e,t,o){},"265":function(e,t,o){"use strict";o.d(t,"a",function(){return h});var n,r,i=o(1),a=o(2),c=o(534),s=o(51),l=o(275),p=o(258),u=o(259),f=o(240),d=o.n(f),m=(o(266),o(244)),y=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}();var h=(r=n=function(e){function GoodsCell(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GoodsCell);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GoodsCell.__proto__||Object.getPrototypeOf(GoodsCell)).call(this,e));return t.gotoGoodsDetail=function(){if(t.props.disabled)return!1;if(t.props.goods.groupbooking_id)a.a.navigateTo({"url":"../goods-detail/goods-detail?is_group_booking=1&id="+t.props.goods.groupbooking_id});else{var e=t.props.goods.goods_id||t.props.goods.id,o=t.props.isExchange?"&is_exchange=1":"";a.a.navigateTo({"url":"/pages/goods-detail/goods-detail?id="+e+o})}},t.onClickMain=function(e){e.stopPropagation(),t.props.onClickMain(t.props.goods.id)},t.handleClickQrCode=function(e){var o=t.props.goods;e.stopPropagation(),Object(c.a)({"urls":o.qrCode.map(function(e){return e.qr_code})})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GoodsCell,a["a"].Component),y(GoodsCell,[{"key":"render","value":function render(){var e=this.props,t=e.goods,o=e.isExchange,n=e.disabled,r=e.mainButton,a=e.disableMainButton;return i.k.createElement(s.a,{"className":"goods-cell "+(!n&&"canClick"),"onClick":this.gotoGoodsDetail},i.k.createElement(s.a,{"className":"goods-cell--image"},i.k.createElement(l.a,{"src":t.goods_img,"mode":"aspectFit"})),i.k.createElement(s.a,{"className":"goods-cell--info"},i.k.createElement(s.a,{"className":"goods-cell--name"},t.goods_name),i.k.createElement(s.a,{"className":"row"},i.k.createElement(s.a,{"className":"left"},t.sku_type&&i.k.createElement(s.a,{"className":"goods-cell--sku"},t.sku_type.replace(/,/g,", ")),i.k.createElement(s.a,{"className":"goods-cell--data"},o?i.k.createElement(m.a,{"price":t.points||t.shop_price,"center":!0,"isExchange":!0}):i.k.createElement(m.a,{"price":t.commodity_price||t.shop_price,"marketPrice":t.market_price,"center":!0}))),void 0!==t.current_group_size&&i.k.createElement(s.a,null,t.current_group_size,"人已拼"),r&&i.k.createElement(s.a,{"className":"right"},i.k.createElement(p.a,{"type":"primary","size":"mini","hoverStopPropagation":!0,"onClick":this.onClickMain,"disabled":a},r)))),i.k.createElement(s.a,{"className":"goods-cell--number"},t.goods_number&&i.k.createElement(u.a,null,"x ",t.goods_number)),t.qrCode&&t.qrCode.length>0&&i.k.createElement(p.a,{"className":"qr-code iconfont icon-qrcode","plain":!0,"hoverStopPropagation":!0,"onClick":this.handleClickQrCode}))}}]),GoodsCell}(),n.options={"addGlobalClass":!0},n.propTypes={"goods":d.a.object.isRequired,"disabled":d.a.bool,"mainButton":d.a.string,"disableMainButton":d.a.bool,"onClickMain":d.a.func,"isExchange":d.a.bool},n.defaultProps={"goods":{},"disabled":!1,"mainButton":"","disableMainButton":!1,"onClickMain":function onClickMain(){},"isExchange":!1},r)},"266":function(e,t,o){},"495":function(e,t,o){e.exports={"page":"verify-module__page___35B6M","wrapper":"verify-module__wrapper___HFZVl","header":"verify-module__header___3_0QC","goodsInfo":"verify-module__goodsInfo___SJm-h","verifyStatus":"verify-module__verifyStatus___34VCd","button":"verify-module__button___2uJQW"}},"532":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return h});var n=o(1),r=o(2),i=o(51),a=o(258),c=o(260),s=o(495),l=o.n(s),p=o(77),u=o(265),f=o(241),d=o(253),m=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),y=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){return function step(n,r){try{var i=t[n](r),a=i.value}catch(e){return void o(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}var h=function(e){function Verify(e){var t=this;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Verify);var o=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Verify.__proto__||Object.getPrototypeOf(Verify)).call(this,e));return o.config={"navigationBarTitleText":"核销虚拟商品"},o.verify=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)({"name":"verifyVirtualGoods","data":{"code":o.$router.params.scene},"hintText":"核销"});case 2:o.setState({"hasVerified":!0});case 3:case"end":return e.stop()}},_callee,t)})),o.state={"virtualGoodsInfo":null,"hasVerified":!1,"errorMessage":null},o}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Verify,r["a"].Component),m(Verify,[{"key":"onPullDownRefresh","value":function onPullDownRefresh(){this.componentWillMount()}},{"key":"componentWillMount","value":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){var e,t,o,n,r,i,a,c;return regeneratorRuntime.wrap(function _callee2$(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(p.b)({"name":"getVerifyInfoForVirtualGoods","data":{"code":this.$router.params.scene},"hideToast":!0});case 3:e=s.sent,t=e.orderGoods,o=t.goods_id,n=t.goods_img,r=t.goods_name,i=t.shop_price,a=t.market_price,c=t.sku_type,this.setState({"virtualGoodsInfo":{"goods_id":o,"goods_img":n,"goods_name":r,"shop_price":i,"market_price":a,"sku_type":c},"errorMessage":null}),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),this.setState({"virtualGoodsInfo":null,"errorMessage":s.t0});case 11:case"end":return s.stop()}},_callee2,this,[[0,8]])}));return function componentWillMount(){return e.apply(this,arguments)}}()},{"key":"render","value":function render(){var e=this,t=this.state,o=t.virtualGoodsInfo,r=t.hasVerified,s=t.errorMessage,p=void 0;p=o?n.k.createElement(i.a,{"className":l.a.wrapper},n.k.createElement(i.a,{"className":l.a.header},"核销虚拟商品"),n.k.createElement(i.a,{"className":l.a.goodsInfo},n.k.createElement(u.a,{"goods":o})),r?n.k.createElement(i.a,{"className":l.a.verifyStatus},"已核销"):n.k.createElement(a.a,{"type":"primary","className":l.a.button,"onClick":this.verify},"确认核销")):s?n.k.createElement(d.a,{"icon":"unhappy","mainActionType":"home","text":s,"mainAction":"返回首页"}):n.k.createElement(f.a,null);var m=n.k.createElement(i.a,{"className":l.a.page},p);return n.k.createElement(c.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(t){t&&(e.pullDownRefreshRef=t)}},m)}},{"key":"componentDidMount","value":function componentDidMount(){y(Verify.prototype.__proto__||Object.getPrototypeOf(Verify.prototype),"componentDidMount",this)&&y(Verify.prototype.__proto__||Object.getPrototypeOf(Verify.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){y(Verify.prototype.__proto__||Object.getPrototypeOf(Verify.prototype),"componentDidShow",this)&&y(Verify.prototype.__proto__||Object.getPrototypeOf(Verify.prototype),"componentDidShow",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"componentDidHide","value":function componentDidHide(){y(Verify.prototype.__proto__||Object.getPrototypeOf(Verify.prototype),"componentDidHide",this)&&y(Verify.prototype.__proto__||Object.getPrototypeOf(Verify.prototype),"componentDidHide",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),Verify}()}}]);