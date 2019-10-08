(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"241":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r,o,i=n(1),a=n(2),s=n(51),l=n(10),c=n.n(l),p=n(240),u=n.n(p),f=(n(242),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var d=(o=r=function(e){function loading(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,loading);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(loading.__proto__||Object.getPrototypeOf(loading)).call(this,e));return t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(loading,a["a"].Component),f(loading,[{"key":"render","value":function render(){var e=this.props,t=e.type,n=e.display,r=e.tipText,o=c()("loading",t,n);return i.k.createElement(s.a,{"className":o},i.k.createElement(s.a,{"className":"circle"}),i.k.createElement(s.a,{"className":"text"},r,"..."))}}]),loading}(),r.options={"addGlobalClass":!0},r.propTypes={"type":u.a.oneOf(["center","block","inline"]),"display":u.a.oneOf(["dark","light"]),"tipText":u.a.string},r.defaultProps={"type":"center","display":"dark","tipText":"加载中"},o)},"242":function(e,t,n){},"244":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r,o,i=n(1),a=n(2),s=n(259),l=n(51),c=n(240),p=n.n(c),u=(n(256),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var f=(o=r=function(e){function Price(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Price),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Price.__proto__||Object.getPrototypeOf(Price)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Price,a["a"].Component),u(Price,[{"key":"render","value":function render(){var e=this.props,t=e.price,n=e.marketPrice,r=e.center,o=e.isExchange,a=t>0?Math.floor(t):Math.ceil(t),c=parseFloat(t).toFixed(2).toString().replace(/-?[0-9]*(\.?[0-9]*)/g,"$1"),p=parseFloat(n).toFixed(2),u=this.props.type,f=void 0;o&&(u="points");var d="price"===u;return f="price"===u?i.k.createElement(s.a,null,"￥"):"points"===u?i.k.createElement(s.a,{"className":"iconfont icon-point"}):i.k.createElement(s.a,{"className":"iconfont icon-exp"}),i.k.createElement(l.a,{"className":"price "+(r?"price-center":"")},i.k.createElement(s.a,{"className":"price__main price--"+u},f,i.k.createElement(s.a,{"className":"price__int"},a),d&&i.k.createElement(s.a,{"className":"price__dec"},c)),p>0&&i.k.createElement(s.a,{"className":"price__market-price"},"￥",p))}}]),Price}(),r.options={"addGlobalClass":!0},r.defaultProps={"price":0,"marketPrice":NaN,"isExchange":!1,"type":"price"},o);f.propTypes={"price":p.a.oneOfType([p.a.number,p.a.string]).isRequired,"marketPrice":p.a.oneOfType([p.a.number,p.a.string]),"isExchange":p.a.bool,"type":p.a.oneOf(["price","points","exp"])}},"253":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r,o,i=n(1),a=n(2),s=n(124),l=n(51),c=n(258),p=n(240),u=n.n(p),f=(n(254),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var d=(o=r=function(e){function Tip(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tip);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Tip.__proto__||Object.getPrototypeOf(Tip)).call(this,e));return t.onClickButtonHandle=function(){var e=t.props,n=e.mainActionType,r=e.onClickMain;"back"===n?a.a.navigateBack():"home"===n?"WEAPP"===a.a.getEnv()?Object(s.d)({"url":"/pages/index/index"}):(a.a.redirectTo({"url":"/pages/index/index"}),window.location.reload()):"custom"===n&&r()},t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Tip,a["a"].Component),f(Tip,[{"key":"render","value":function render(){var e=this.props,t=e.type,n=e.icon,r=e.text,o=e.mainAction,a=e.height,s=e.mainActionType;return i.k.createElement(l.a,{"className":"tip "+t,"style":{"height":a}},i.k.createElement(l.a,{"className":"tip__content"},i.k.createElement(l.a,{"className":"iconfont icon-"+n}),i.k.createElement(l.a,{"className":"tip__text"},r),"none"!==s&&""!==o&&i.k.createElement(c.a,{"type":"primary","onClick":this.onClickButtonHandle},o)))}}]),Tip}(),r.options={"addGlobalClass":!0},r.defaultProps={"type":"auto","icon":"empty","text":"当前没有数据","height":"100%","mainAction":"返回上一级","mainActionType":"back"},o);d.propTypes={"type":u.a.oneOf(["full","auto"]),"icon":u.a.string,"text":u.a.string,"mainAction":u.a.string,"mainActionType":u.a.oneOf(["back","home","custom","none"]),"height":u.a.string,"onClickMain":u.a.func}},"254":function(e,t,n){},"256":function(e,t,n){},"263":function(e,t,n){var r=n(264);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(75)(r,o);r.locals&&(e.exports=r.locals)},"264":function(e,t,n){(e.exports=n(74)(!1)).push([e.i,".taro-scroll {\n  -webkit-overflow-scrolling: touch;\n}\n\n.taro-scroll::-webkit-scrollbar {\n  display: none;\n}\n\n.taro-scroll-view {\n  overflow: hidden;\n}\n\n.taro-scroll-view__scroll-x {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.taro-scroll-view__scroll-y {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}",""])},"265":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r,o,i=n(1),a=n(2),s=n(534),l=n(51),c=n(275),p=n(258),u=n(259),f=n(240),d=n.n(f),h=(n(266),n(244)),m=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var b=(o=r=function(e){function GoodsCell(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GoodsCell);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GoodsCell.__proto__||Object.getPrototypeOf(GoodsCell)).call(this,e));return t.gotoGoodsDetail=function(){if(t.props.disabled)return!1;if(t.props.goods.groupbooking_id)a.a.navigateTo({"url":"../goods-detail/goods-detail?is_group_booking=1&id="+t.props.goods.groupbooking_id});else{var e=t.props.goods.goods_id||t.props.goods.id,n=t.props.isExchange?"&is_exchange=1":"";a.a.navigateTo({"url":"/pages/goods-detail/goods-detail?id="+e+n})}},t.onClickMain=function(e){e.stopPropagation(),t.props.onClickMain(t.props.goods.id)},t.handleClickQrCode=function(e){var n=t.props.goods;e.stopPropagation(),Object(s.a)({"urls":n.qrCode.map(function(e){return e.qr_code})})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GoodsCell,a["a"].Component),m(GoodsCell,[{"key":"render","value":function render(){var e=this.props,t=e.goods,n=e.isExchange,r=e.disabled,o=e.mainButton,a=e.disableMainButton;return i.k.createElement(l.a,{"className":"goods-cell "+(!r&&"canClick"),"onClick":this.gotoGoodsDetail},i.k.createElement(l.a,{"className":"goods-cell--image"},i.k.createElement(c.a,{"src":t.goods_img,"mode":"aspectFit"})),i.k.createElement(l.a,{"className":"goods-cell--info"},i.k.createElement(l.a,{"className":"goods-cell--name"},t.goods_name),i.k.createElement(l.a,{"className":"row"},i.k.createElement(l.a,{"className":"left"},t.sku_type&&i.k.createElement(l.a,{"className":"goods-cell--sku"},t.sku_type.replace(/,/g,", ")),i.k.createElement(l.a,{"className":"goods-cell--data"},n?i.k.createElement(h.a,{"price":t.points||t.shop_price,"center":!0,"isExchange":!0}):i.k.createElement(h.a,{"price":t.commodity_price||t.shop_price,"marketPrice":t.market_price,"center":!0}))),void 0!==t.current_group_size&&i.k.createElement(l.a,null,t.current_group_size,"人已拼"),o&&i.k.createElement(l.a,{"className":"right"},i.k.createElement(p.a,{"type":"primary","size":"mini","hoverStopPropagation":!0,"onClick":this.onClickMain,"disabled":a},o)))),i.k.createElement(l.a,{"className":"goods-cell--number"},t.goods_number&&i.k.createElement(u.a,null,"x ",t.goods_number)),t.qrCode&&t.qrCode.length>0&&i.k.createElement(p.a,{"className":"qr-code iconfont icon-qrcode","plain":!0,"hoverStopPropagation":!0,"onClick":this.handleClickQrCode}))}}]),GoodsCell}(),r.options={"addGlobalClass":!0},r.propTypes={"goods":d.a.object.isRequired,"disabled":d.a.bool,"mainButton":d.a.string,"disableMainButton":d.a.bool,"onClickMain":d.a.func,"isExchange":d.a.bool},r.defaultProps={"goods":{},"disabled":!1,"mainButton":"","disableMainButton":!1,"onClickMain":function onClickMain(){},"isExchange":!1},o)},"266":function(e,t,n){},"268":function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r,o,i=n(1),a=n(2),s=n(51),l=n(280),c=n(10),p=n.n(c),u=n(240),f=n.n(u),d=(n(269),n(77)),h=n(241),m=n(253),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var v=(o=r=function(e){function List(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,List);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(List.__proto__||Object.getPrototypeOf(List)).call(this,e));return t.getData=function(){if(!t.loading&&!t.isFinished&&!t.showLoading){var e=t.apiName,n=t.params;t.loading=!0,Object(d.b)({"name":e,"data":b({"page":t.page++},n),"success":function success(e){var n=Array.isArray(e)?e:e.data||e.order,r=t.listData;r||(r=[]),r=r.concat(n),t.listData=r,t.props.onLoadData(r,e),0===r.length&&0===n.length&&t.setState({"isEmpty":!0}),n.length<t.props.numberPerPage&&(t.isFinished=!0,t.setState({"showLoading":!1})),t.loading=!1}})}},t.refreshData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.apiName,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.params;t.isFinished=!1,t.loading=!1,t.page=0,t.listData=[],t.apiName=e,t.params=n,t.setState({"showLoading":!0,"isEmpty":!1}),t.getData()},t.onClickButtonHandle=function(){t.props.onClickButton?t.props.onClickButton():a.a.navigateBack()},t.onScroll=function(e){var n=e.detail,r=n.scrollTop;n.scrollHeight-r<800&&t.getData()},t.page=0,t.isFinished=!1,t.loading=!1,t.listData=[],t.apiName="",t.params={},t.state={"isEmpty":!1,"showLoading":!0},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(List,a["a"].Component),y(List,[{"key":"componentWillMount","value":function componentWillMount(){var e=this,t=this.props,n=t.event,r=t.onMount;a.a.eventCenter.on("load:"+n,function(){e.getData()}),a.a.eventCenter.on("reload:"+n,function(t,n){e.refreshData(t,n)}),r()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){var e=this.props.event;a.a.eventCenter.off("load:"+e),a.a.eventCenter.off("reload:"+e)}},{"key":"render","value":function render(){var e=this.listData,t=void 0;this.willReload&&(this.willReload=!1),t=e.length>0?i.k.createElement(s.a,null,i.k.createElement(l.a,{"scrollY":!0,"onScroll":this.onScroll,"className":"scroll-content"},this.props.children,e&&this.state.showLoading&&i.k.createElement(h.a,{"type":"inline"}))):this.state.isEmpty?i.k.createElement(m.a,{"icon":"empty","text":this.props.emptyTip,"mainActionType":"back","mainAction":this.props.buttonText,"onClickMain":this.onClickButtonHandle,"type":"full"===this.props.mode?"full":"auto"}):i.k.createElement(h.a,{"type":"block"===this.props.mode?"block":void 0});var n=p()("list",{"block":"block"===this.props.mode,"empty":this.state.isEmpty,"full":"full"===this.props.mode});return i.k.createElement(s.a,{"className":n},t)}}]),List}(),r.options={"addGlobalClass":!0},r.defaultProps={"event":"page","apiName":"","numberPerPage":10,"data":{},"emptyTip":"没有内容","buttonText":"返回上一级","mode":"full","onLoadData":function onLoadData(){},"onMount":function onMount(){}},r.propTypes={"event":f.a.string,"numberPerPage":f.a.number,"emptyTip":f.a.string,"buttonText":f.a.string,"mode":f.a.string,"onLoadData":f.a.func,"onMount":f.a.func},o)},"269":function(e,t,n){},"271":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r,o,i=n(1),a=n(2),s=n(259),l=n(51),c=n(240),p=n.n(c),u=(n(281),n(244)),f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var d=(o=r=function(e){function Cell(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Cell);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Cell.__proto__||Object.getPrototypeOf(Cell)).call(this,e));return t.onClick=function(){var e=t.props,n=e.disabled,r=e.onClick;n||r&&r()},t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Cell,a["a"].Component),f(Cell,[{"key":"render","value":function render(){var e=this.props,t=e.title,n=e.type,r=e.isExchange,o=e.isPrice,a=e.isLink,c=e.icon,p=e.disabled,f=e.value,d="cell "+(p?"disabled":a?"can-click ":""),h=void 0,m=void 0;return h="text"!==n?i.k.createElement(u.a,{"price":f,"type":n}):r?i.k.createElement(u.a,{"price":f,"isExchange":!0}):o?i.k.createElement(u.a,{"price":f}):i.k.createElement(s.a,null,f),!p&&a&&(m=i.k.createElement(s.a,{"className":"iconfont icon-right"})),i.k.createElement(l.a,{"className":d,"onClick":this.onClick},i.k.createElement(s.a,{"className":"left"},c&&i.k.createElement(s.a,{"className":"iconfont icon-"+c}),i.k.createElement(s.a,{"className":"text"},t)),i.k.createElement(l.a,null,h,this.props.children,m))}}]),Cell}(),r.options={"addGlobalClass":!0},r.defaultProps={"disabled":!1,"title":"","value":"","type":"text","isPrice":!1,"isExchange":!1,"isLink":!1},r.propTypes={"title":p.a.string.isRequired,"value":p.a.oneOfType([p.a.string,p.a.number]),"type":p.a.string,"isPrice":p.a.bool,"isExchange":p.a.bool,"isLink":p.a.bool,"disabled":p.a.bool,"onClick":p.a.func},o)},"272":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r,o,i=n(1),a=n(2),s=n(51),l=(n(273),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var c=(o=r=function(e){function Tabs(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tabs);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Tabs.__proto__||Object.getPrototypeOf(Tabs)).call(this,e));return t.onChange=function(e){e!==t.props.active&&t.props.onChange(e)},t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Tabs,a["a"].Component),l(Tabs,[{"key":"render","value":function render(){var e=this,t=this.props.tabs.map(function(t,n){return i.k.createElement(s.a,{"key":n,"className":n===e.props.active?"active":"","onClick":e.onChange.bind(void 0,n)},t)});return i.k.createElement(s.a,{"className":"tabs"},i.k.createElement(s.a,{"className":"nav-tabs"},t),i.k.createElement(s.a,{"className":"content"},this.props.children))}}]),Tabs}(),r.options={"addGlobalClass":!0},r.defaultProps={"active":0,"tabs":[],"children":void 0,"onChange":function onChange(){}},o)},"273":function(e,t,n){},"280":function(e,t,n){"use strict";n(38);var r=n(1),o=n(76),i=n(10),a=n.n(i),s=(n(263),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function easeOutScroll(e,t,n){if(e!==t&&"number"==typeof e){var r=t-e,o=500,i=+new Date,a=t>=e;!function step(){e=function linear(e,t,n,r){return n*e/r+t}(+new Date-i,e,r,o),a&&e>=t||!a&&t>=e?n(t):(n(e),requestAnimationFrame(step))}()}}var c=function(e){function ScrollView(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ScrollView);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ScrollView.__proto__||Object.getPrototypeOf(ScrollView)).apply(this,arguments));return e.onTouchMove=function(e){e.stopPropagation()},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ScrollView,r["k"].Component),l(ScrollView,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;setTimeout(function(){var t=e.props;t.scrollY&&"number"==typeof t.scrollTop&&("scrollWithAnimation"in t?easeOutScroll(0,t.scrollTop,function(t){e.container.scrollTop=t}):e.container.scrollTop=t.scrollTop,e._scrollTop=t.scrollTop),t.scrollX&&"number"==typeof t.scrollLeft&&("scrollWithAnimation"in t?easeOutScroll(0,t.scrollLeft,function(t){e.container.scrollLeft=t}):e.container.scrollLeft=t.scrollLeft,e._scrollLeft=t.scrollLeft)},10)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=this,n=this.props;e.scrollY&&"number"==typeof e.scrollTop&&e.scrollTop!==this._scrollTop&&("scrollWithAnimation"in e?easeOutScroll(this._scrollTop,e.scrollTop,function(e){t.container.scrollTop=e}):this.container.scrollTop=e.scrollTop,this._scrollTop=e.scrollTop),e.scrollX&&"number"==typeof n.scrollLeft&&e.scrollLeft!==this._scrollLeft&&("scrollWithAnimation"in e?easeOutScroll(this._scrollLeft,e.scrollLeft,function(e){t.container.scrollLeft=e}):this.container.scrollLeft=e.scrollLeft,this._scrollLeft=e.scrollLeft)}},{"key":"render","value":function render(){var e,t=this,n=this.props,i=n.className,l=n.onScroll,c=n.onScrollToUpper,p=n.onScrollToLower,u=n.onTouchMove,f=n.scrollX,d=n.scrollY,h=this.props,m=h.upperThreshold,b=void 0===m?50:m,y=h.lowerThreshold,v=void 0===y?50:y,g=a()("taro-scroll",(_defineProperty(e={},"taro-scroll-view__scroll-x",f),_defineProperty(e,"taro-scroll-view__scroll-y",d),e),i);b=parseInt(b),v=parseInt(v);var _=function throttle(e,t){var n=null;return function(){clearTimeout(n),n=setTimeout(function(){e()},t)}}(function uperAndLower(){var e=t.container,n=e.offsetWidth,r=e.offsetHeight,o=e.scrollLeft,i=e.scrollTop,a=e.scrollHeight,s=e.scrollWidth;p&&(t.props.scrollY&&r+i+v>=a||t.props.scrollX&&n+o+v>=s)&&p(),c&&(t.props.scrollY&&i<=b||t.props.scrollX&&o<=b)&&c()},200);return r.k.createElement("div",s({"ref":function ref(e){t.container=e}},Object(o.a)(this.props,["className","scrollTop","scrollLeft"]),{"className":g,"onScroll":function _onScroll(e){var n=t.container,r=n.scrollLeft,o=n.scrollTop,i=n.scrollHeight,a=n.scrollWidth;t._scrollLeft=r,t._scrollTop=o,e.detail={"scrollLeft":r,"scrollTop":o,"scrollHeight":i,"scrollWidth":a},_(),l&&l(e)},"onTouchMove":function _onTouchMove(e){u?u(e):t.onTouchMove(e)}}),this.props.children)}}]),ScrollView}();t.a=c},"281":function(e,t,n){},"283":function(e,t,n){"use strict";n.d(t,"a",function(){return getOrderType}),n.d(t,"b",function(){return getPayWay}),n.d(t,"c",function(){return getStatus});var r=["普通订单","拼团订单","余额充值订单","积分兑换订单"],o=["微信支付","余额支付","积分兑换"];function getOrderType(e){var t=e.order||e;return t&&r[t.order_type-1]}function getPayWay(e){var t=e.order||e;return t&&o[t.pay_type-1]}function getStatus(e){if(!e)return"无";var t=e.order||e,n=parseInt(t.order_status),r=parseInt(t.pay_status),o=parseInt(t.shipping_status),i=1===n&&2===r,a="未知";if(i&&"拼团订单"===getOrderType(e)){var s=t.regimentInfo,l=s.regiment_status;if("拼团进行中"===(a=null===s.regiment_end_date?"待付款":["拼团进行中","拼团已完成","拼团失败"][l]))return a}if(1===n&&1===r)return"付款确认中";if(i&&("拼团订单"!==getOrderType(e)||"拼团已完成"===a)){return(0===t.shipping_type?["待提货","待核销","已收货","正在退货中"]:1===t.shipping_type?["待提货","待提货","已收货","正在退货中"]:(t.shipping_type,["待发货","待收货","已收货","正在退货中"]))[o]||"已付款"}return["未确认","积分兑换订单"===getOrderType(e)?"待兑换":"待付款","已取消","申请退款中","已关闭","已退款","已完成"][n]||"未知"}},"285":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r,o,i=n(1),a=n(2),s=n(288),l=n(275),c=n(51),p=n(259),u=n(240),f=n.n(u),d=n(10),h=n.n(d),m=(n(286),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var b=(o=r=function(e){function UserCell(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserCell);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserCell.__proto__||Object.getPrototypeOf(UserCell)).call(this,e));return t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserCell,a["a"].Component),m(UserCell,[{"key":"render","value":function render(){var e=this.state.rightText,t=this.props,n=t.avatar,r=t.nickname,o=t.isOpenData,a=t.errorText,u=t.size,f=t.text,d=void 0;return d=o?i.k.createElement(s.a,{"type":"userAvatarUrl","className":"avatar"}):n?i.k.createElement(l.a,{"src":this.props.avatar,"className":"avatar"}):i.k.createElement(c.a,{"className":"avatar-placeholder"}),i.k.createElement(c.a,{"className":h()("user-cell",u)},i.k.createElement(c.a,{"className":"left"},i.k.createElement(c.a,null,d),i.k.createElement(c.a,null,o?i.k.createElement(s.a,{"className":"nickname","type":"userNickName"}):i.k.createElement(p.a,{"className":"nickname"},r||a),f&&i.k.createElement(p.a,{"className":"text"},f))),e&&i.k.createElement(c.a,{"className":"right"},e),i.k.createElement(c.a,{"className":"right"},this.props.children))}}]),UserCell}(),r.options={"addGlobalClass":!0},r.defaultProps={"nickname":"","avatar":"","text":"","rightText":"","errorText":"无法获取昵称","isOpenData":!1,"size":"normal"},r.propTypes={"avatar":f.a.string,"nickname":f.a.string,"isOpenData":f.a.bool,"errorText":f.a.string,"size":f.a.string},o)},"286":function(e,t,n){},"288":function(e,t,n){"use strict";var r=n(1),o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(e){function OpenData(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,OpenData),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(OpenData.__proto__||Object.getPrototypeOf(OpenData)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(OpenData,r["k"].Component),o(OpenData,[{"key":"componentDidMount","value":function componentDidMount(){console.error("H5 暂不支持 OpenData 组件！")}},{"key":"render","value":function render(){var e=function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(this.props,[]);return r.k.createElement("div",e,this.props.children)}}]),OpenData}();t.a=i},"427":function(e,t,n){},"541":function(e,t,n){"use strict";n.r(t);var r,o,i=n(1),a=n(2),s=n(51),l=n(260),c=(n(427),n(272)),p=n(268),u=n(244),f=n(240),d=n.n(f),h=n(285),m=n(271),b=n(265),y=n(283),v=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var g=(o=r=function(e){function OrderItem(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,OrderItem);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(OrderItem.__proto__||Object.getPrototypeOf(OrderItem)).call(this,e));return t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(OrderItem,a["a"].Component),v(OrderItem,[{"key":"render","value":function render(){var e=this.props.order,t=Object(y.c)(e);if(e)return i.k.createElement(s.a,{"className":"order-item"},i.k.createElement(h.a,{"nickname":e.nickname,"avatar":e.avatar},i.k.createElement(s.a,{"className":"order-status"},t)),i.k.createElement(s.a,{"className":"goods-list"},i.k.createElement(b.a,{"goods":e,"disabled":!0})),i.k.createElement(s.a,{"className":"detail"},i.k.createElement(m.a,{"title":"订单号","value":e.order_sn}),i.k.createElement(m.a,{"title":"下单时间","value":e.created_at})),i.k.createElement(s.a,null,i.k.createElement(m.a,{"title":"预计佣金","value":e.allcommission,"isPrice":!0})))}}]),OrderItem}(),r.options={"addGlobalClass":!0},r.defaultProps={},r.propTypes={"order":d.a.object},o);n.d(t,"default",function(){return O});var _=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),k=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0};var O=function(e){function DistributionOrderList(e){!function distribution_order_list_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DistributionOrderList);var t=function distribution_order_list_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DistributionOrderList.__proto__||Object.getPrototypeOf(DistributionOrderList)).call(this,e));return t.config={"navigationBarTitleText":"分销订单"},t.reload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.active,n=0===e?"getAllCommissionOrders":"getCommissionOrdersByStatus",r={"type":e};a.a.eventCenter.trigger("reload:dol",n,r)},t.onReachBottom=function(){a.a.eventCenter.trigger("load:dol")},t.onChangeTab=function(e){t.setState({"active":e}),t.reload(e)},t.onLoadData=function(e,n){var r=t.state.orderList;r[t.state.active]=e,t.setState({"orderList":r,"commission":n.cumulative_commission})},t.state={"active":0,"orderList":[[],[],[],[]],"commission":-1},t}return function distribution_order_list_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DistributionOrderList,a["a"].Component),_(DistributionOrderList,[{"key":"componentDidMount","value":function componentDidMount(){this.reload()}},{"key":"onShareAppMessage","value":function onShareAppMessage(){}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){this.componentDidMount()}},{"key":"render","value":function render(){var e=this,t=this.state,n=t.active,r=t.commission,o=t.orderList,a=["所有","待付款","已付款","已完成"],f=void 0;o[n]&&(f=o[n].map(function(e){return i.k.createElement(g,{"key":e.id,"order":e})}));var d=i.k.createElement(s.a,{"className":"distribution-order-list"},i.k.createElement(s.a,{"className":"header"},"累计佣金：",r>=0?i.k.createElement(u.a,{"price":r}):i.k.createElement(s.a,{"className":"price__main"},"----")),i.k.createElement(c.a,{"tabs":a,"active":n,"onChange":this.onChangeTab},i.k.createElement(p.a,{"event":"dol","emptyTip":0===n?"当前没有订单":"没有"+a[n]+"的订单","onLoadData":this.onLoadData},f)));return i.k.createElement(l.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(t){t&&(e.pullDownRefreshRef=t)}},d)}},{"key":"componentDidShow","value":function componentDidShow(){k(DistributionOrderList.prototype.__proto__||Object.getPrototypeOf(DistributionOrderList.prototype),"componentDidShow",this)&&k(DistributionOrderList.prototype.__proto__||Object.getPrototypeOf(DistributionOrderList.prototype),"componentDidShow",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"componentDidHide","value":function componentDidHide(){k(DistributionOrderList.prototype.__proto__||Object.getPrototypeOf(DistributionOrderList.prototype),"componentDidHide",this)&&k(DistributionOrderList.prototype.__proto__||Object.getPrototypeOf(DistributionOrderList.prototype),"componentDidHide",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),DistributionOrderList}()}}]);