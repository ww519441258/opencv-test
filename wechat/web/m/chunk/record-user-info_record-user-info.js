(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"247":function(e,t,n){var r=n(248);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(75)(r,o);r.locals&&(e.exports=r.locals)},"248":function(e,t,n){(e.exports=n(74)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])},"251":function(e,t,n){var r=n(252);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(75)(r,o);r.locals&&(e.exports=r.locals)},"252":function(e,t,n){(e.exports=n(74)(!1)).push([e.i,".rmc-pull-to-refresh-content {\r\n  transform-origin: left top 0px;\r\n}\r\n.rmc-pull-to-refresh-content-wrapper {\r\n  overflow: hidden;\r\n}\r\n\r\n.rmc-pull-to-refresh-transition {\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.rmc-pull-to-refresh-indicator {\r\n  color: grey;\r\n  text-align: center;\r\n  height: 25px;\r\n  line-height: 25px;\r\n}\r\n\r\n.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator {\r\n  margin-top: -25px;\r\n}",""])},"258":function(e,t,n){"use strict";n(38);var r=n(1),o=n(76),i=n(10),s=n.n(i),a=(n(247),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var l=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,r["k"].Component),c(Button,[{"key":"render","value":function render(){var e,t=this,n=this.props,i=n.children,c=n.disabled,l=n.className,u=n.style,f=n.onClick,p=n.onTouchStart,d=n.onTouchEnd,h=n.hoverClass,b=void 0===h?"button-hover":h,y=n.hoverStartTime,v=void 0===y?20:y,g=n.hoverStayTime,_=void 0===g?70:g,m=n.size,R=n.plain,w=n.loading,P=void 0!==w&&w,S=n.type,O=void 0===S?"default":S,k=l||s()("weui-btn",(_defineProperty(e={},""+b,this.state.hover&&!c),_defineProperty(e,"weui-btn_plain-"+O,R),_defineProperty(e,"weui-btn_"+O,!R&&O),_defineProperty(e,"weui-btn_mini","mini"===m),_defineProperty(e,"weui-btn_loading",P),_defineProperty(e,"weui-btn_disabled",c),e));return r.k.createElement("button",a({},Object(o.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":k,"style":u,"onClick":f,"disabled":c,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),b&&!c&&setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},v),p&&p(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),b&&!c&&setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},_),d&&d(e)}}),P&&r.k.createElement("i",{"class":"weui-loading"}),i)}}]),Button}();t.a=l},"260":function(e,t,n){"use strict";var r,o,i=n(10),s=n.n(i),a=n(1),c=n(2),l=(n(251),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){function StaticRenderer(){return _classCallCheck(this,StaticRenderer),_possibleConstructorReturn(this,(StaticRenderer.__proto__||Object.getPrototypeOf(StaticRenderer)).apply(this,arguments))}return _inherits(StaticRenderer,a["k"].Component),f(StaticRenderer,[{"key":"shouldComponentUpdate","value":function shouldComponentUpdate(e){return e.shouldUpdate}},{"key":"render","value":function render(){return a.k.createElement("div",null,this.props.render())}}]),StaticRenderer}();var d="undefined"!=typeof navigator&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),h=!1;try{var b=Object.defineProperty({},"passive",{"get":function get(){h=!0}});window.addEventListener("test",null,b)}catch(e){}var y=!!h&&{"passive":!1},v=(o=r=function(e){function PullToRefresh(){var e,t,n;_classCallCheck(this,PullToRefresh);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=PullToRefresh.__proto__||Object.getPrototypeOf(PullToRefresh)).call.apply(e,[this].concat(o))),n.state={"currSt":"deactivate","dragOnEdge":!1},n.containerRef=null,n.contentRef=null,n._to=null,n._ScreenY=null,n._startScreenY=null,n._lastScreenY=null,n._isMounted=!1,n.shouldUpdateChildren=!1,n.scrollContainer=document.querySelector(".taro-tabbar__panel")||document.body,n.triggerPullDownRefresh=function(){!n.state.dragOnEdge&&n._isMounted&&(n.props.refreshing?(n._lastScreenY=n.props.distanceToRefresh+1,n.setState({"currSt":"release"},function(){return n.setContentStyle(n._lastScreenY)})):n.setState({"currSt":"finish"},function(){return n.reset()}))},n.init=function(){var e=n.scrollContainer;n._to={"touchstart":n.onTouchStart.bind(n,e),"touchmove":n.onTouchMove.bind(n,e),"touchend":n.onTouchEnd.bind(n,e),"touchcancel":n.onTouchEnd.bind(n,e)},Object.keys(n._to).forEach(function(t){e.addEventListener(t,n._to[t],y)})},n.destroy=function(){var e=n.scrollContainer;Object.keys(n._to).forEach(function(t){e.removeEventListener(t,n._to[t])})},n.onTouchStart=function(e,t){n._ScreenY=n._startScreenY=t.touches[0].screenY,n._lastScreenY=n._lastScreenY||0},n.isEdge=function(e){var t=n.scrollContainer;return t&&t===document.body?(document.scrollingElement?document.scrollingElement:document.body).scrollTop<=0:e.scrollTop<=0},n.damping=function(e){return Math.abs(n._lastScreenY)>n.props.damping?0:e*=.6*(1-Math.abs(n._ScreenY-n._startScreenY)/window.screen.height)},n.onTouchMove=function(e,t){var r=t.touches[0].screenY;if(!(n._startScreenY>r)&&n.isEdge(e)){n.state.dragOnEdge||(n._ScreenY=n._startScreenY=t.touches[0].screenY,n.setState({"dragOnEdge":!0})),t.cancelable&&t.preventDefault();var o=Math.round(r-n._ScreenY);n._ScreenY=r,n._lastScreenY+=n.damping(o),n.setContentStyle(n._lastScreenY),Math.abs(n._lastScreenY)<n.props.distanceToRefresh?"deactivate"!==n.state.currSt&&n.setState({"currSt":"deactivate"}):"deactivate"===n.state.currSt&&n.setState({"currSt":"activate"}),d&&t.changedTouches[0].clientY<0&&n.onTouchEnd()}},n.onTouchEnd=function(){n.state.dragOnEdge&&n.setState({"dragOnEdge":!1}),"activate"===n.state.currSt?(n.setState({"currSt":"release"}),n.props.onRefresh()):"release"===n.state.currSt?(n._lastScreenY=n.props.distanceToRefresh+1,n.setContentStyle(n._lastScreenY)):n.reset()},n.reset=function(){n._lastScreenY=0,n.setContentStyle(0)},n.setContentStyle=function(e){n.contentRef&&function setTransform(e,t){e.transform=t,e.webkitTransform=t,e.MozTransform=t}(n.contentRef.style,"translate3d(0px,"+e+"px,0)")},_possibleConstructorReturn(n,t)}return _inherits(PullToRefresh,a["k"].Component),f(PullToRefresh,[{"key":"shouldComponentUpdate","value":function shouldComponentUpdate(e){return this.shouldUpdateChildren=this.props.children!==e.children,!0}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){e!==this.props&&e.refreshing!==this.props.refreshing&&this.triggerPullDownRefresh()}},{"key":"componentDidMount","value":function componentDidMount(){this.triggerPullDownRefresh(),this._isMounted=!0}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"render","value":function render(){var e=this,t=u({},this.props);delete t.damping;var n=t.className,r=t.prefixCls,o=t.children,i=(t.onRefresh,t.refreshing,t.indicator,t.distanceToRefresh,function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","prefixCls","children","onRefresh","refreshing","indicator","distanceToRefresh"])),c=a.k.createElement(p,{"shouldUpdate":this.shouldUpdateChildren,"render":function render(){return o}}),l=function renderRefresh(t){var n=s()(t,!e.state.dragOnEdge&&r+"-transition");return a.k.createElement("div",{"className":r+"-content-wrapper"},a.k.createElement("div",{"className":n,"ref":function ref(t){e.contentRef=t}},c))};return this.scrollContainer?l(r+"-content "+r+"-down"):a.k.createElement("div",u({"ref":function ref(t){e.containerRef=t},"className":s()(n,r,r+"-down")},i),l(r+"-content"))}}]),PullToRefresh}(),r.defaultProps={"prefixCls":"rmc-pull-to-refresh","distanceToRefresh":50,"damping":100,"indicator":{"activate":"release","deactivate":"pull","release":"loading","finish":"finish"}},o),g=function(e){function PullDownRefresh(){var e,t,n;_classCallCheck(this,PullDownRefresh);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=PullDownRefresh.__proto__||Object.getPrototypeOf(PullDownRefresh)).call.apply(e,[this].concat(o))),n.state={"refreshing":!1},n.isBound=!1,n.listeners=[],n.startPullDownRefresh=function(){n.props.onRefresh(),n.setState({"refreshing":!0})},n.stopPullDownRefresh=function(){n.setState({"refreshing":!1})},n.getPtrRef=function(e){n.ptrRef=e},n.bindEvent=function(){n.isBound||(n.isBound=!0,n.ptrRef&&n.ptrRef.init(),n.listeners=[["__taroStartPullDownRefresh",function(e){var t=e.successHandler,r=e.errorHandler;try{n.startPullDownRefresh(),t({"errMsg":"startPullDownRefresh: ok"})}catch(e){r({"errMsg":"startPullDownRefresh: fail"})}}],["__taroStopPullDownRefresh",function(e){var t=e.successHandler,r=e.errorHandler;try{n.stopPullDownRefresh(),t({"errMsg":"stopPullDownRefresh: ok"})}catch(e){r({"errMsg":"stopPullDownRefresh: fail"})}}]],n.listeners.forEach(function(e){var t=l(e,2),n=t[0],r=t[1];c.a.eventCenter.on(n,r)}))},n.unbindEvent=function(){n.isBound=!1,n.ptrRef&&n.ptrRef.destroy(),n.listeners.forEach(function(e){var t=l(e,2),n=t[0],r=t[1];c.a.eventCenter.off(n,r)})},_possibleConstructorReturn(n,t)}return _inherits(PullDownRefresh,a["k"].Component),f(PullDownRefresh,[{"key":"componentDidMount","value":function componentDidMount(){this.bindEvent()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.unbindEvent()}},{"key":"render","value":function render(){var e={"distanceToRefresh":100,"damping":200,"refreshing":this.state.refreshing,"onRefresh":this.startPullDownRefresh,"ref":this.getPtrRef};return a.k.createElement(v,e,this.props.children)}}]),PullDownRefresh}();t.a=g},"480":function(e,t,n){},"527":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(1),o=n(11),i=n(124),s=n(2),a=n(239),c=n(51),l=n(258),u=n(260),f=n(79),p=n.n(f),d=(n(480),n(77)),h=n(40),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),v=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0};function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var g=function(e){function Register(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Register);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Register.__proto__||Object.getPrototypeOf(Register)).call(this,e));return t.config={"navigationBarTitleText":"登录授权","enablePullDownRefresh":!1},t.back=function(){Object(o.e)("isRegistered",1);var e=Object(o.c)("startPath")||{"path":"pages/index/index","query":{}},t=e.path,n=e.query,r="/"+t,a=""+r+p.a.stringify(n,{"encode":!1,"addQueryPrefix":!0});console.log("startPath: ",a),Object(h.b)(t)?(Object(o.e)("startParams",n),Object(i.d)({"url":r,"success":function success(){Object(i.c)()}})):s.a.redirectTo({"url":a})},t.onGetUserInfo=function(e){if(e&&e.detail&&e.detail.userInfo){var n=e.detail,r=n.userInfo,o=_objectWithoutProperties(n,["userInfo"]),i=r.avatarUrl,s=r.nickName,c=_objectWithoutProperties(r,["avatarUrl","nickName"]);Object(d.b)({"name":"editUserInfo","data":b({"avatar":i,"nickname":s},c,o),"success":function success(){return t.back()}})}else Object(a.d)({"title":"必须进行登录授权才能进入","icon":"none"})},t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Register,s["a"].Component),y(Register,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"onShareAppMessage","value":function onShareAppMessage(){}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){this.componentWillMount()}},{"key":"render","value":function render(){var e=this,t=this.props.is_record_again,n=void 0===t?"0":t,o=r.k.createElement(c.a,{"className":"record-user-info"},r.k.createElement(c.a,{"className":"iconfont icon-user"}),r.k.createElement(c.a,{"className":"record-user-info__tip"},"1"===n?"授权已过期":"第一次进入","，请点击下方按钮进行授权登录"),r.k.createElement(l.a,{"openType":"getUserInfo","type":"primary","onGetUserInfo":this.onGetUserInfo},"授权登录"));return r.k.createElement(u.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(t){t&&(e.pullDownRefreshRef=t)}},o)}},{"key":"componentDidMount","value":function componentDidMount(){v(Register.prototype.__proto__||Object.getPrototypeOf(Register.prototype),"componentDidMount",this)&&v(Register.prototype.__proto__||Object.getPrototypeOf(Register.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){v(Register.prototype.__proto__||Object.getPrototypeOf(Register.prototype),"componentDidShow",this)&&v(Register.prototype.__proto__||Object.getPrototypeOf(Register.prototype),"componentDidShow",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"componentDidHide","value":function componentDidHide(){v(Register.prototype.__proto__||Object.getPrototypeOf(Register.prototype),"componentDidHide",this)&&v(Register.prototype.__proto__||Object.getPrototypeOf(Register.prototype),"componentDidHide",this).call(this),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),Register}()}}]);