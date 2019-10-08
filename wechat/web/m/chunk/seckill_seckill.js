(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"241":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o,r,i=n(1),a=n(2),c=n(51),l=n(10),s=n.n(l),u=n(240),p=n.n(u),f=(n(242),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var d=(r=o=function(e){function loading(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,loading);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(loading.__proto__||Object.getPrototypeOf(loading)).call(this,e));return t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(loading,a["a"].Component),f(loading,[{"key":"render","value":function render(){var e=this.props,t=e.type,n=e.display,o=e.tipText,r=s()("loading",t,n);return i.k.createElement(c.a,{"className":r},i.k.createElement(c.a,{"className":"circle"}),i.k.createElement(c.a,{"className":"text"},o,"..."))}}]),loading}(),o.options={"addGlobalClass":!0},o.propTypes={"type":p.a.oneOf(["center","block","inline"]),"display":p.a.oneOf(["dark","light"]),"tipText":p.a.string},o.defaultProps={"type":"center","display":"dark","tipText":"加载中"},r)},"242":function(e,t,n){},"244":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o,r,i=n(1),a=n(2),c=n(259),l=n(51),s=n(240),u=n.n(s),p=(n(256),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var f=(r=o=function(e){function Price(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Price),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Price.__proto__||Object.getPrototypeOf(Price)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Price,a["a"].Component),p(Price,[{"key":"render","value":function render(){var e=this.props,t=e.price,n=e.marketPrice,o=e.center,r=e.isExchange,a=t>0?Math.floor(t):Math.ceil(t),s=parseFloat(t).toFixed(2).toString().replace(/-?[0-9]*(\.?[0-9]*)/g,"$1"),u=parseFloat(n).toFixed(2),p=this.props.type,f=void 0;r&&(p="points");var d="price"===p;return f="price"===p?i.k.createElement(c.a,null,"￥"):"points"===p?i.k.createElement(c.a,{"className":"iconfont icon-point"}):i.k.createElement(c.a,{"className":"iconfont icon-exp"}),i.k.createElement(l.a,{"className":"price "+(o?"price-center":"")},i.k.createElement(c.a,{"className":"price__main price--"+p},f,i.k.createElement(c.a,{"className":"price__int"},a),d&&i.k.createElement(c.a,{"className":"price__dec"},s)),u>0&&i.k.createElement(c.a,{"className":"price__market-price"},"￥",u))}}]),Price}(),o.options={"addGlobalClass":!0},o.defaultProps={"price":0,"marketPrice":NaN,"isExchange":!1,"type":"price"},r);f.propTypes={"price":u.a.oneOfType([u.a.number,u.a.string]).isRequired,"marketPrice":u.a.oneOfType([u.a.number,u.a.string]),"isExchange":u.a.bool,"type":u.a.oneOf(["price","points","exp"])}},"253":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o,r,i=n(1),a=n(2),c=n(124),l=n(51),s=n(258),u=n(240),p=n.n(u),f=(n(254),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var d=(r=o=function(e){function Tip(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tip);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Tip.__proto__||Object.getPrototypeOf(Tip)).call(this,e));return t.onClickButtonHandle=function(){var e=t.props,n=e.mainActionType,o=e.onClickMain;"back"===n?a.a.navigateBack():"home"===n?"WEAPP"===a.a.getEnv()?Object(c.d)({"url":"/pages/index/index"}):(a.a.redirectTo({"url":"/pages/index/index"}),window.location.reload()):"custom"===n&&o()},t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Tip,a["a"].Component),f(Tip,[{"key":"render","value":function render(){var e=this.props,t=e.type,n=e.icon,o=e.text,r=e.mainAction,a=e.height,c=e.mainActionType;return i.k.createElement(l.a,{"className":"tip "+t,"style":{"height":a}},i.k.createElement(l.a,{"className":"tip__content"},i.k.createElement(l.a,{"className":"iconfont icon-"+n}),i.k.createElement(l.a,{"className":"tip__text"},o),"none"!==c&&""!==r&&i.k.createElement(s.a,{"type":"primary","onClick":this.onClickButtonHandle},r)))}}]),Tip}(),o.options={"addGlobalClass":!0},o.defaultProps={"type":"auto","icon":"empty","text":"当前没有数据","height":"100%","mainAction":"返回上一级","mainActionType":"back"},r);d.propTypes={"type":p.a.oneOf(["full","auto"]),"icon":p.a.string,"text":p.a.string,"mainAction":p.a.string,"mainActionType":p.a.oneOf(["back","home","custom","none"]),"height":p.a.string,"onClickMain":p.a.func}},"254":function(e,t,n){},"256":function(e,t,n){},"265":function(e,t,n){"use strict";n.d(t,"a",function(){return y});var o,r,i=n(1),a=n(2),c=n(534),l=n(51),s=n(275),u=n(258),p=n(259),f=n(240),d=n.n(f),m=(n(266),n(244)),h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var y=(r=o=function(e){function GoodsCell(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GoodsCell);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GoodsCell.__proto__||Object.getPrototypeOf(GoodsCell)).call(this,e));return t.gotoGoodsDetail=function(){if(t.props.disabled)return!1;if(t.props.goods.groupbooking_id)a.a.navigateTo({"url":"../goods-detail/goods-detail?is_group_booking=1&id="+t.props.goods.groupbooking_id});else{var e=t.props.goods.goods_id||t.props.goods.id,n=t.props.isExchange?"&is_exchange=1":"";a.a.navigateTo({"url":"/pages/goods-detail/goods-detail?id="+e+n})}},t.onClickMain=function(e){e.stopPropagation(),t.props.onClickMain(t.props.goods.id)},t.handleClickQrCode=function(e){var n=t.props.goods;e.stopPropagation(),Object(c.a)({"urls":n.qrCode.map(function(e){return e.qr_code})})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GoodsCell,a["a"].Component),h(GoodsCell,[{"key":"render","value":function render(){var e=this.props,t=e.goods,n=e.isExchange,o=e.disabled,r=e.mainButton,a=e.disableMainButton;return i.k.createElement(l.a,{"className":"goods-cell "+(!o&&"canClick"),"onClick":this.gotoGoodsDetail},i.k.createElement(l.a,{"className":"goods-cell--image"},i.k.createElement(s.a,{"src":t.goods_img,"mode":"aspectFit"})),i.k.createElement(l.a,{"className":"goods-cell--info"},i.k.createElement(l.a,{"className":"goods-cell--name"},t.goods_name),i.k.createElement(l.a,{"className":"row"},i.k.createElement(l.a,{"className":"left"},t.sku_type&&i.k.createElement(l.a,{"className":"goods-cell--sku"},t.sku_type.replace(/,/g,", ")),i.k.createElement(l.a,{"className":"goods-cell--data"},n?i.k.createElement(m.a,{"price":t.points||t.shop_price,"center":!0,"isExchange":!0}):i.k.createElement(m.a,{"price":t.commodity_price||t.shop_price,"marketPrice":t.market_price,"center":!0}))),void 0!==t.current_group_size&&i.k.createElement(l.a,null,t.current_group_size,"人已拼"),r&&i.k.createElement(l.a,{"className":"right"},i.k.createElement(u.a,{"type":"primary","size":"mini","hoverStopPropagation":!0,"onClick":this.onClickMain,"disabled":a},r)))),i.k.createElement(l.a,{"className":"goods-cell--number"},t.goods_number&&i.k.createElement(p.a,null,"x ",t.goods_number)),t.qrCode&&t.qrCode.length>0&&i.k.createElement(u.a,{"className":"qr-code iconfont icon-qrcode","plain":!0,"hoverStopPropagation":!0,"onClick":this.handleClickQrCode}))}}]),GoodsCell}(),o.options={"addGlobalClass":!0},o.propTypes={"goods":d.a.object.isRequired,"disabled":d.a.bool,"mainButton":d.a.string,"disableMainButton":d.a.bool,"onClickMain":d.a.func,"isExchange":d.a.bool},o.defaultProps={"goods":{},"disabled":!1,"mainButton":"","disableMainButton":!1,"onClickMain":function onClickMain(){},"isExchange":!1},r)},"266":function(e,t,n){},"290":function(e,t,n){"use strict";function startCountDown(e){var t=e.time,n=e.updatedCallback,o=e.endCallback,r=void 0===o?function(){}:o,i=e.delay,a=void 0===i?0:i,c=e.updateCycle,l=void 0===c?1e3:c,s=void 0,u=function update(){var e=new Date(t+a)-new Date,o=void 0,i=void 0,c=void 0,l=void 0;if(e>1e3){o=Math.floor(e/864e5);var u=e%864e5;i=Math.floor(u/36e5),u%=36e5,c=Math.floor(u/6e4),u%=6e4,l=Math.floor(u/1e3)}e>=1e3?n(o,i,c,l):(clearInterval(s),r())};return u(),s=setInterval(function(){u()},l)}n.d(t,"a",function(){return startCountDown})},"460":function(e,t,n){},"466":function(e,t,n){e.exports={"root":"index-module__root___1YhHA","active":"index-module__active___2nIZ9","name":"index-module__name___2UJrm","info":"index-module__info___29gL8"}},"549":function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(239),i=n(2),a=n(51),c=n(280),l=n(259),s=n(275),u=n(260),p=n(278),f=n.n(p),d=n(547),m=n(10),h=n.n(m),y=(n(460),n(77)),b=n(241),_=n(253),k=n(265),g=n(290),v=n(462),w=n(466),E=n.n(w),C=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),O=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var P=function(e){function SeckillSession(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SeckillSession),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SeckillSession.__proto__||Object.getPrototypeOf(SeckillSession)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SeckillSession,i["a"].Component),O(SeckillSession,[{"key":"render","value":function render(){var e=this.props,t=e.seckillInfo,n=void 0===t?{}:t,r=e.active,c=void 0!==r&&r,l=e.width,s=void 0===l?"30vw":l,u=e.isShowFullCountdown,p=void 0!==u&&u,f=e.onClick,d=void 0===f?function(){}:f,m=n.name,y=n.start_date_time,b=n.end_date_time,_=new Date(y)<=new Date,k=i.a.useState(),w=C(k,2),O=w[0],P=w[1];return i.a.useEffect(function(){var e=new Date,t=void 0;return p&&Math.abs(new Date(_?b:y)-e)<864e5?t=Object(g.a)({"time":_?b:y,"updatedCallback":function updatedCallback(e,t,n,o){P((t||"00")+":"+(n||"00")+":"+(o||"00")+" 后")}}):(P(Object(v.format)(_?b:y,"zh_CN")),t=setInterval(function(){P(Object(v.format)(_?b:y,"zh_CN"))},6e4)),function(){t&&clearInterval(t)}},[_,y,b]),o.k.createElement(a.a,{"className":h()(E.a.root,function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},E.a.active,c)),"style":{"width":s},"onClick":d},o.k.createElement(a.a,{"className":E.a.name},m),o.k.createElement(a.a,{"className":E.a.info},_?"进行中":"未开始"),o.k.createElement(a.a,{"className":E.a.info},O,_?"结束":"开始"))}}]),SeckillSession}();P.options={"addGlobalClass":!0},n.d(t,"default",function(){return D});var S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},j=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),x=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(o,r){try{var i=t[o](r),a=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}function formatDate(e){return f()(e).format("YYYY年MM月DD日 HH:mm:ss")}var D=function(e){function Seckill(e){var t=this;!function seckill_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Seckill);var n,o=function seckill_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Seckill.__proto__||Object.getPrototypeOf(Seckill)).call(this,e));return o.config={"navigationBarTitleText":"秒杀活动"},o.timerForCountdown=null,o.timerForCheck=null,o.filterValid=function(e){var t=o.state.sessionList,n=(e||t).filter(function(e){var t=e.end_date_time;return new Date<=new Date(t)});return void 0===e&&n.length<t.length?(Object(r.b)({"title":"刷新秒杀中"}),o.setState({"sessionList":n,"goodsList":null}),o.switchTo(0,n)):e&&n.length<e.length&&o.switchTo(0,n),n},o.countDown=function(e){if(e){o.timerForCountdown&&clearInterval(o.timerForCountdown);var t=e.start_date_time,n=e.end_date_time,r=new Date(t)<=new Date;o.timerForCountdown=Object(g.a)({"time":r?n:t,"updatedCallback":function updatedCallback(e,t,n,r){o.setState({"countDown":{"day":e,"hour":t,"min":n,"sec":r}})}})}},o.getData=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var e,n,r,i,a;return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.b)({"name":"getSecKillSessions"});case 2:e=t.sent,n=e.activities,r=e.goods,i=n.map(function(e){return S({},e,{"start_date_time":1e3*e.start_date_time,"end_date_time":1e3*e.end_date_time})}),a=o.filterValid(i),o.setState({"sessionList":a,"goodsList":a.length===i.length?r:null}),o.timerForCheck=setInterval(function(){o.filterValid()},1e3),o.countDown(i[0]);case 10:case"end":return t.stop()}},_callee,t)})),o.switchTo=(n=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,n){var i,a,c,l;return regeneratorRuntime.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:if(i=o.state,a=i.sessionList,c=i.currentSessionIndex,e===c&&!n){t.next=8;break}return o.setState({"currentSessionIndex":e,"goodsList":null}),o.countDown((n||a)[e]),t.next=6,Object(y.b)({"name":"getSecKillGoods","data":{"activityId":(n||a)[e].id}});case 6:l=t.sent,o.setState({"goodsList":l},function(){return Object(r.a)()});case 8:case"end":return t.stop()}},_callee2,t)})),function(e,t){return n.apply(this,arguments)}),o.state={"sessionList":null,"goodsList":null,"currentSessionIndex":0,"countDown":null},o}return function seckill_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Seckill,i["a"].Component),j(Seckill,[{"key":"componentWillMount","value":function componentWillMount(){this.getData()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.timerForCheck&&clearInterval(this.timerForCheck),this.timerForCountdown&&clearInterval(this.timerForCountdown)}},{"key":"onShareAppMessage","value":function onShareAppMessage(){}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){this.setState({"sessionList":null}),this.getData()}},{"key":"render","value":function render(){var e=this,t=this.state,n=t.sessionList,r=t.goodsList,i=t.currentSessionIndex,p=t.countDown,f=void 0,m=n&&n[i]&&n[i].banner;if(n&&n.length>0){var y=n[i],g=y.start_date_time,v=y.end_date_time,w=new Date(g)<=new Date;f=o.k.createElement(a.a,null,o.k.createElement(c.a,{"scrollX":!0,"className":"header"},o.k.createElement(a.a,{"className":h()("session-list",{"around":n.length<=3})},n.map(function(t,r){return o.k.createElement(P,{"key":t.id,"seckillInfo":t,"width":n.length<=3?100/n.length+"vw":"30vw","active":i===r,"onClick":function onClick(){return e.switchTo(r)}})}))),o.k.createElement(a.a,{"className":"content"},o.k.createElement(a.a,{"className":"session-detail"},o.k.createElement(a.a,{"className":"date"},o.k.createElement(l.a,null,formatDate(g)),o.k.createElement(l.a,null," 至 "),o.k.createElement(l.a,null,formatDate(v))),o.k.createElement(a.a,{"className":"status"},"秒杀活动",w?"进行中":"未开始"),p&&o.k.createElement(a.a,null,o.k.createElement(l.a,null,"还剩 "),o.k.createElement(d.a,{"isShowDay":!0,"isCard":!0,"format":{"day":"天","hours":":","minutes":":","seconds":""},"day":p.day,"hours":p.hours,"minutes":p.min,"seconds":p.sec}),o.k.createElement(l.a,null,w?"结束":"开始"))),m&&o.k.createElement(s.a,{"src":m,"mode":"widthFix"}),r&&r.length>0?o.k.createElement(a.a,{"className":"goods-list"},r.map(function(e){return o.k.createElement(k.a,{"key":e.id,"goods":e})})):r?o.k.createElement(_.a,{"text":"该场秒杀没有商品","mainAction":""}):o.k.createElement(b.a,null)))}else f=n?o.k.createElement(_.a,{"mainActionType":"home","mainAction":"返回首页","text":"暂无秒杀活动","height":"100vh"}):o.k.createElement(b.a,null);var E=o.k.createElement(a.a,{"className":"seckill"},f);return o.k.createElement(u.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(t){t&&(e.pullDownRefreshRef=t)}},E)}},{"key":"componentDidMount","value":function componentDidMount(){x(Seckill.prototype.__proto__||Object.getPrototypeOf(Seckill.prototype),"componentDidMount",this)&&x(Seckill.prototype.__proto__||Object.getPrototypeOf(Seckill.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){x(Seckill.prototype.__proto__||Object.getPrototypeOf(Seckill.prototype),"componentDidShow",this)&&x(Seckill.prototype.__proto__||Object.getPrototypeOf(Seckill.prototype),"componentDidShow",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"componentDidHide","value":function componentDidHide(){x(Seckill.prototype.__proto__||Object.getPrototypeOf(Seckill.prototype),"componentDidHide",this)&&x(Seckill.prototype.__proto__||Object.getPrototypeOf(Seckill.prototype),"componentDidHide",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),Seckill}()}}]);