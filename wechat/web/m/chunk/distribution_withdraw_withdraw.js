(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"241":function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r,o,a=n(1),i=n(2),s=n(51),c=n(10),l=n.n(c),u=n(240),f=n.n(u),p=(n(242),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var h=(o=r=function(e){function loading(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,loading);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(loading.__proto__||Object.getPrototypeOf(loading)).call(this,e));return t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(loading,i["a"].Component),p(loading,[{"key":"render","value":function render(){var e=this.props,t=e.type,n=e.display,r=e.tipText,o=l()("loading",t,n);return a.k.createElement(s.a,{"className":o},a.k.createElement(s.a,{"className":"circle"}),a.k.createElement(s.a,{"className":"text"},r,"..."))}}]),loading}(),r.options={"addGlobalClass":!0},r.propTypes={"type":f.a.oneOf(["center","block","inline"]),"display":f.a.oneOf(["dark","light"]),"tipText":f.a.string},r.defaultProps={"type":"center","display":"dark","tipText":"加载中"},o)},"242":function(e,t,n){},"251":function(e,t,n){var r=n(252);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(75)(r,o);r.locals&&(e.exports=r.locals)},"252":function(e,t,n){(e.exports=n(74)(!1)).push([e.i,".rmc-pull-to-refresh-content {\r\n  transform-origin: left top 0px;\r\n}\r\n.rmc-pull-to-refresh-content-wrapper {\r\n  overflow: hidden;\r\n}\r\n\r\n.rmc-pull-to-refresh-transition {\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.rmc-pull-to-refresh-indicator {\r\n  color: grey;\r\n  text-align: center;\r\n  height: 25px;\r\n  line-height: 25px;\r\n}\r\n\r\n.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator {\r\n  margin-top: -25px;\r\n}",""])},"260":function(e,t,n){"use strict";var r,o,a=n(10),i=n.n(a),s=n(1),c=n(2),l=(n(251),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){function StaticRenderer(){return _classCallCheck(this,StaticRenderer),_possibleConstructorReturn(this,(StaticRenderer.__proto__||Object.getPrototypeOf(StaticRenderer)).apply(this,arguments))}return _inherits(StaticRenderer,s["k"].Component),f(StaticRenderer,[{"key":"shouldComponentUpdate","value":function shouldComponentUpdate(e){return e.shouldUpdate}},{"key":"render","value":function render(){return s.k.createElement("div",null,this.props.render())}}]),StaticRenderer}();var h="undefined"!=typeof navigator&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),d=!1;try{var m=Object.defineProperty({},"passive",{"get":function get(){d=!0}});window.addEventListener("test",null,m)}catch(e){}var y=!!d&&{"passive":!1},b=(o=r=function(e){function PullToRefresh(){var e,t,n;_classCallCheck(this,PullToRefresh);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=PullToRefresh.__proto__||Object.getPrototypeOf(PullToRefresh)).call.apply(e,[this].concat(o))),n.state={"currSt":"deactivate","dragOnEdge":!1},n.containerRef=null,n.contentRef=null,n._to=null,n._ScreenY=null,n._startScreenY=null,n._lastScreenY=null,n._isMounted=!1,n.shouldUpdateChildren=!1,n.scrollContainer=document.querySelector(".taro-tabbar__panel")||document.body,n.triggerPullDownRefresh=function(){!n.state.dragOnEdge&&n._isMounted&&(n.props.refreshing?(n._lastScreenY=n.props.distanceToRefresh+1,n.setState({"currSt":"release"},function(){return n.setContentStyle(n._lastScreenY)})):n.setState({"currSt":"finish"},function(){return n.reset()}))},n.init=function(){var e=n.scrollContainer;n._to={"touchstart":n.onTouchStart.bind(n,e),"touchmove":n.onTouchMove.bind(n,e),"touchend":n.onTouchEnd.bind(n,e),"touchcancel":n.onTouchEnd.bind(n,e)},Object.keys(n._to).forEach(function(t){e.addEventListener(t,n._to[t],y)})},n.destroy=function(){var e=n.scrollContainer;Object.keys(n._to).forEach(function(t){e.removeEventListener(t,n._to[t])})},n.onTouchStart=function(e,t){n._ScreenY=n._startScreenY=t.touches[0].screenY,n._lastScreenY=n._lastScreenY||0},n.isEdge=function(e){var t=n.scrollContainer;return t&&t===document.body?(document.scrollingElement?document.scrollingElement:document.body).scrollTop<=0:e.scrollTop<=0},n.damping=function(e){return Math.abs(n._lastScreenY)>n.props.damping?0:e*=.6*(1-Math.abs(n._ScreenY-n._startScreenY)/window.screen.height)},n.onTouchMove=function(e,t){var r=t.touches[0].screenY;if(!(n._startScreenY>r)&&n.isEdge(e)){n.state.dragOnEdge||(n._ScreenY=n._startScreenY=t.touches[0].screenY,n.setState({"dragOnEdge":!0})),t.cancelable&&t.preventDefault();var o=Math.round(r-n._ScreenY);n._ScreenY=r,n._lastScreenY+=n.damping(o),n.setContentStyle(n._lastScreenY),Math.abs(n._lastScreenY)<n.props.distanceToRefresh?"deactivate"!==n.state.currSt&&n.setState({"currSt":"deactivate"}):"deactivate"===n.state.currSt&&n.setState({"currSt":"activate"}),h&&t.changedTouches[0].clientY<0&&n.onTouchEnd()}},n.onTouchEnd=function(){n.state.dragOnEdge&&n.setState({"dragOnEdge":!1}),"activate"===n.state.currSt?(n.setState({"currSt":"release"}),n.props.onRefresh()):"release"===n.state.currSt?(n._lastScreenY=n.props.distanceToRefresh+1,n.setContentStyle(n._lastScreenY)):n.reset()},n.reset=function(){n._lastScreenY=0,n.setContentStyle(0)},n.setContentStyle=function(e){n.contentRef&&function setTransform(e,t){e.transform=t,e.webkitTransform=t,e.MozTransform=t}(n.contentRef.style,"translate3d(0px,"+e+"px,0)")},_possibleConstructorReturn(n,t)}return _inherits(PullToRefresh,s["k"].Component),f(PullToRefresh,[{"key":"shouldComponentUpdate","value":function shouldComponentUpdate(e){return this.shouldUpdateChildren=this.props.children!==e.children,!0}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){e!==this.props&&e.refreshing!==this.props.refreshing&&this.triggerPullDownRefresh()}},{"key":"componentDidMount","value":function componentDidMount(){this.triggerPullDownRefresh(),this._isMounted=!0}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"render","value":function render(){var e=this,t=u({},this.props);delete t.damping;var n=t.className,r=t.prefixCls,o=t.children,a=(t.onRefresh,t.refreshing,t.indicator,t.distanceToRefresh,function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","prefixCls","children","onRefresh","refreshing","indicator","distanceToRefresh"])),c=s.k.createElement(p,{"shouldUpdate":this.shouldUpdateChildren,"render":function render(){return o}}),l=function renderRefresh(t){var n=i()(t,!e.state.dragOnEdge&&r+"-transition");return s.k.createElement("div",{"className":r+"-content-wrapper"},s.k.createElement("div",{"className":n,"ref":function ref(t){e.contentRef=t}},c))};return this.scrollContainer?l(r+"-content "+r+"-down"):s.k.createElement("div",u({"ref":function ref(t){e.containerRef=t},"className":i()(n,r,r+"-down")},a),l(r+"-content"))}}]),PullToRefresh}(),r.defaultProps={"prefixCls":"rmc-pull-to-refresh","distanceToRefresh":50,"damping":100,"indicator":{"activate":"release","deactivate":"pull","release":"loading","finish":"finish"}},o),_=function(e){function PullDownRefresh(){var e,t,n;_classCallCheck(this,PullDownRefresh);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=PullDownRefresh.__proto__||Object.getPrototypeOf(PullDownRefresh)).call.apply(e,[this].concat(o))),n.state={"refreshing":!1},n.isBound=!1,n.listeners=[],n.startPullDownRefresh=function(){n.props.onRefresh(),n.setState({"refreshing":!0})},n.stopPullDownRefresh=function(){n.setState({"refreshing":!1})},n.getPtrRef=function(e){n.ptrRef=e},n.bindEvent=function(){n.isBound||(n.isBound=!0,n.ptrRef&&n.ptrRef.init(),n.listeners=[["__taroStartPullDownRefresh",function(e){var t=e.successHandler,r=e.errorHandler;try{n.startPullDownRefresh(),t({"errMsg":"startPullDownRefresh: ok"})}catch(e){r({"errMsg":"startPullDownRefresh: fail"})}}],["__taroStopPullDownRefresh",function(e){var t=e.successHandler,r=e.errorHandler;try{n.stopPullDownRefresh(),t({"errMsg":"stopPullDownRefresh: ok"})}catch(e){r({"errMsg":"stopPullDownRefresh: fail"})}}]],n.listeners.forEach(function(e){var t=l(e,2),n=t[0],r=t[1];c.a.eventCenter.on(n,r)}))},n.unbindEvent=function(){n.isBound=!1,n.ptrRef&&n.ptrRef.destroy(),n.listeners.forEach(function(e){var t=l(e,2),n=t[0],r=t[1];c.a.eventCenter.off(n,r)})},_possibleConstructorReturn(n,t)}return _inherits(PullDownRefresh,s["k"].Component),f(PullDownRefresh,[{"key":"componentDidMount","value":function componentDidMount(){this.bindEvent()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.unbindEvent()}},{"key":"render","value":function render(){var e={"distanceToRefresh":100,"damping":200,"refreshing":this.state.refreshing,"onRefresh":this.startPullDownRefresh,"ref":this.getPtrRef};return s.k.createElement(b,e,this.props.children)}}]),PullDownRefresh}();t.a=_},"437":function(e,t,n){},"514":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(1),o=n(239),a=n(2),i=n(51),s=n(306),c=n(284),l=n(304),u=n(536),f=n(259),p=n(258),h=n(260),d=(n(437),n(77)),m=n(241),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),_=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};var v=function(e){function Withdraw(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Withdraw);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Withdraw.__proto__||Object.getPrototypeOf(Withdraw)).call(this,e));return t.config={"navigationBarTitleText":"提现"},t.onChangeBank=function(e){t.setState({"checkedBank":e.detail.value})},t.onSubmit=function(e){var n=t.state.banks,r=e.detail.value,i=function toast(e){Object(o.d)({"title":e,"icon":"none"})};return r.name?r.tel?r.id_card?r.bank_id?r.bank_card_number?!r.name.length>2?i("姓名必须大于两个字"):11!==r.tel.length?i("手机号码必须为11位"):18!==r.id_card.length?i("身份证号必须为18位"):r.bank_card_number.length>=16&&r.bank_card_number.length<=19?void Object(d.b)({"name":"withdraw","data":y({},r,{"bank_id":n[r.bank_id].id}),"success":function success(){a.a.navigateBack()},"hintText":"提交申请"}):i("银行卡号必须为16-19位"):i("请输入银行卡号"):i("请选择开户行"):i("请输入身份证号"):i("请输入手机号码"):i("请输入姓名")},t.state={"banks":null,"checkedBank":-1},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Withdraw,a["a"].Component),b(Withdraw,[{"key":"componentWillMount","value":function componentWillMount(){var e=this;Object(d.b)({"name":"getBanks","success":function success(t){e.setState({"banks":t})}})}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){this.componentWillMount()}},{"key":"render","value":function render(){var e=this,t=this.state.banks&&this.state.banks.map(function(e){return e.bank_name}),n=this.state.checkedBank,o=t&&n>=0&&t[n],a=r.k.createElement(i.a,{"className":"withdraw"},r.k.createElement(s.a,{"onSubmit":this.onSubmit},r.k.createElement(i.a,{"className":"item"},r.k.createElement(c.a,null,"姓名"),r.k.createElement(l.a,{"name":"name","maxlength":5,"placeholder":"请输入姓名"})),r.k.createElement(i.a,{"className":"item"},r.k.createElement(c.a,null,"手机号码"),r.k.createElement(l.a,{"name":"tel","type":"number","maxlength":11,"placeholder":"请输入手机号码"})),r.k.createElement(i.a,{"className":"item"},r.k.createElement(c.a,null,"身份证号"),r.k.createElement(l.a,{"name":"id_card","type":"number","maxlength":18,"placeholder":"请输入身份证号"})),r.k.createElement(i.a,{"className":"item"},r.k.createElement(c.a,null,"开户行"),t?r.k.createElement(u.a,{"name":"bank_id","range":t,"onChange":this.onChangeBank},r.k.createElement(f.a,null,o||"请选择开户行")):r.k.createElement(m.a,{"type":"inline"})),r.k.createElement(i.a,{"className":"item"},r.k.createElement(c.a,null,"银行卡号"),r.k.createElement(l.a,{"name":"bank_card_number","type":"number","maxlength":19,"placeholder":"请输入银行卡号"})),r.k.createElement(p.a,{"type":"primary","formType":"submit","disabled":!t},"提交申请")));return r.k.createElement(h.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(t){t&&(e.pullDownRefreshRef=t)}},a)}},{"key":"componentDidMount","value":function componentDidMount(){_(Withdraw.prototype.__proto__||Object.getPrototypeOf(Withdraw.prototype),"componentDidMount",this)&&_(Withdraw.prototype.__proto__||Object.getPrototypeOf(Withdraw.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){_(Withdraw.prototype.__proto__||Object.getPrototypeOf(Withdraw.prototype),"componentDidShow",this)&&_(Withdraw.prototype.__proto__||Object.getPrototypeOf(Withdraw.prototype),"componentDidShow",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"componentDidHide","value":function componentDidHide(){_(Withdraw.prototype.__proto__||Object.getPrototypeOf(Withdraw.prototype),"componentDidHide",this)&&_(Withdraw.prototype.__proto__||Object.getPrototypeOf(Withdraw.prototype),"componentDidHide",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),Withdraw}()}}]);