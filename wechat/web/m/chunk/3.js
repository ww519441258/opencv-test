(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"240":function(e,t,n){e.exports=n(245)()},"245":function(e,t,n){"use strict";var r=n(246);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e,e}},"246":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"247":function(e,t,n){var r=n(248);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(75)(r,o);r.locals&&(e.exports=r.locals)},"248":function(e,t,n){(e.exports=n(74)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])},"249":function(e,t,n){var r=n(250);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(75)(r,o);r.locals&&(e.exports=r.locals)},"250":function(e,t,n){(e.exports=n(74)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""])},"258":function(e,t,n){"use strict";n(38);var r=n(1),o=n(76),i=n(10),a=n.n(i),u=(n(247),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var c=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,r["k"].Component),s(Button,[{"key":"render","value":function render(){var e,t=this,n=this.props,i=n.children,s=n.disabled,c=n.className,p=n.style,l=n.onClick,h=n.onTouchStart,f=n.onTouchEnd,d=n.hoverClass,m=void 0===d?"button-hover":d,g=n.hoverStartTime,v=void 0===g?20:g,y=n.hoverStayTime,b=void 0===y?70:y,k=n.size,_=n.plain,w=n.loading,P=void 0!==w&&w,O=n.type,x=void 0===O?"default":O,D=c||a()("weui-btn",(_defineProperty(e={},""+m,this.state.hover&&!s),_defineProperty(e,"weui-btn_plain-"+x,_),_defineProperty(e,"weui-btn_"+x,!_&&x),_defineProperty(e,"weui-btn_mini","mini"===k),_defineProperty(e,"weui-btn_loading",P),_defineProperty(e,"weui-btn_disabled",s),e));return r.k.createElement("button",u({},Object(o.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":D,"style":p,"onClick":l,"disabled":s,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),m&&!s&&setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},v),h&&h(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),m&&!s&&setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},b),f&&f(e)}}),P&&r.k.createElement("i",{"class":"weui-loading"}),i)}}]),Button}();t.a=c},"259":function(e,t,n){"use strict";n(38);var r=n(1),o=n(76),i=n(10),a=n.n(i),u=(n(249),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,r["k"].Component),s(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,i=void 0!==n&&n,s=a()("taro-text",{"taro-text__selectable":i},t);return r.k.createElement("span",u({},Object(o.a)(this.props,["selectable","className"]),{"className":s}),this.props.children)}}]),Text}();t.a=c},"276":function(e,t,n){var r=n(277);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(75)(r,o);r.locals&&(e.exports=r.locals)},"277":function(e,t,n){(e.exports=n(74)(!1)).push([e.i,"input {\n  display: block;\n  height: 1.4rem;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n}",""])},"284":function(e,t,n){"use strict";n(38);var r=n(1),o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(e){function Label(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Label),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Label.__proto__||Object.getPrototypeOf(Label)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Label,r["k"].Component),o(Label,[{"key":"render","value":function render(){var e=function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(this.props,[]);return r.k.createElement("label",e,this.props.children)}}]),Label}();t.a=i},"304":function(e,t,n){"use strict";n(38);var r=n(1),o=n(76),i=n(10),a=n.n(i),u=(n(276),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function getTrueType(e,t,n){if(!e)throw new Error("unexpected type");return"search"===t&&(e="search"),n&&(e="password"),"digit"===e&&(e="number"),e}var c=function(e){function Input(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Input);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));return e.onInput=e.onInput.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.handleComposition=e.handleComposition.bind(e),e.isOnComposition=!1,e.onInputExcuted=!1,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Input,r["k"].Component),s(Input,[{"key":"componentDidMount","value":function componentDidMount(){"file"===this.props.type&&this.inputRef.addEventListener("change",this.onInput)}},{"key":"componentWillUnMount","value":function componentWillUnMount(){"file"===this.props.type&&this.inputRef.removeEventListener("change",this.onInput)}},{"key":"onInput","value":function onInput(e){var t=this.props,n=t.type,r=t.maxLength,o=t.confirmType,i=t.password,a=t.onInput,onInput=void 0===a?"":a,u=t.onChange,s=void 0===u?"":u;if(!this.isOnComposition&&!this.onInputExcuted){var c=e.target.value,p=getTrueType(n,o,i);if(this.onInputExcuted=!0,"number"===p&&c&&r<=c.length&&(c=c.substring(0,r),e.target.value=c),Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":c}}),!(["number","file"].indexOf(p)>=0)){var l=e.target.selectionEnd;setTimeout(function(){e.target.selectionStart=l,e.target.selectionEnd=l})}if(s)return s(e);if(onInput)return onInput(e)}}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;this.onInputExcuted=!1,Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"onKeyDown","value":function onKeyDown(e){var t=this.props.onConfirm;this.onInputExcuted=!1,13===e.keyCode&&t&&(Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),t(e))}},{"key":"handleComposition","value":function handleComposition(e){e.target instanceof HTMLInputElement&&("compositionend"===e.type?(this.isOnComposition=!1,this.onInput(e)):this.isOnComposition=!0)}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.className,i=void 0===n?"":n,s=t.placeholder,c=t.type,p=void 0===c?"text":c,l=t.password,h=t.disabled,f=t.maxLength,d=t.confirmType,m=void 0===d?"":d,g=t.focus,v=void 0!==g&&g,y=t.value,b=a()("weui-input",i),k=Object(o.a)(this.props,["className","placeholder","disabled","max","onChange","onFocus","onBlur","type","focus"]);return"value"in this.props&&(k.value=function fixControlledValue(e){return void 0===e||null===e?"":e}(y)),r.k.createElement("input",u({"ref":function ref(t){e.inputRef=t,t&&v&&t.focus()}},k,{"className":b,"placeholder":s,"disabled":h,"maxlength":f,"onInput":this.onInput,"onFocus":this.onFocus,"onBlur":this.onBlur,"autofocus":v,"onKeyDown":this.onKeyDown,"type":getTrueType(p,m,l),"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition}))}}]),Input}();c.defaultProps={"type":"text"},t.a=c},"306":function(e,t,n){"use strict";n(38);var r=n(1),o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(e){function Form(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Form);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Form.__proto__||Object.getPrototypeOf(Form)).apply(this,arguments));return e.Forms=[],e.onSubmit=e.onSubmit.bind(e),e.onReset=e.onReset.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Form,r["k"].Component),o(Form,[{"key":"onSubmit","value":function onSubmit(e){e.preventDefault();for(var t=r.k.findDOMNode(this),n=[],o=t.getElementsByTagName("input"),i=0;i<o.length;i++)n.push(o[i]);var a={},u={};n.forEach(function(e){-1===e.className.indexOf("weui-switch")?"radio"!==e.type?"checkbox"!==e.type?a[e.name]=e.value:e.checked?u[e.name]?a[e.name].push(e.value):(u[e.name]=!0,a[e.name]=[e.value]):u[e.name]||(a[e.name]=[]):e.checked?(u[e.name]=!0,a[e.name]=e.value):u[e.name]||(a[e.name]=""):a[e.name]=e.checked});for(var s=t.getElementsByTagName("textarea"),c=[],p=0;p<s.length;p++)c.push(s[p]);c.forEach(function(e){a[e.name]=e.value}),Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":a}}),this.props.onSubmit(e)}},{"key":"onReset","value":function onReset(e){e.preventDefault(),this.props.onReset()}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.style;return r.k.createElement("form",{"className":t,"style":n,"onSubmit":this.onSubmit,"onReset":this.onReset},this.props.children)}}]),Form}();t.a=i},"411":function(e,t,n){var r=n(412);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(75)(r,o);r.locals&&(e.exports=r.locals)},"412":function(e,t,n){(e.exports=n(74)(!1)).push([e.i,".weui-picker,\n.weui-picker__hd {\n  font-size: 12px;\n}",""])},"536":function(e,t,n){"use strict";n(38);var r=n(1),o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(e){function PickerGroup(e){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PickerGroup),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PickerGroup.__proto__||Object.getPrototypeOf(PickerGroup)).call(this,e))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PickerGroup,r["k"].Component),o(PickerGroup,[{"key":"getPosition","value":function getPosition(e){var t=this.touchEnd?.3:0;return"transform: translate3d(0, "+this.props.height+"px, 0);transition: transform "+t+"s;"}},{"key":"formulaUnlimitedScroll","value":function formulaUnlimitedScroll(e,t,n){var r=this,o=this.props,i=o.height,a=o.updateHeight,u=o.columnId,s="up"===n?1:-1;this.touchEnd=!1,a(-e*s*34+i,u),setTimeout(function(){r.touchEnd=!0;var n=Math.round(t/-34)+e*s;a(102-34*n,u,!0)},0)}},{"key":"render","value":function render(){var e=this,t=(this.props.range||[]).map(function(t){var n=e.props.rangeKey,o=n?t[n]:t;return r.k.createElement("div",{"className":"weui-picker__item"},""+o)});return r.k.createElement("div",{"className":"weui-picker__group","onTouchStart":function onTouchStart(t){e.startY=t.changedTouches[0].clientY,e.preY=t.changedTouches[0].clientY,e.hadMove=!1},"onTouchMove":function onTouchMove(t){var n=t.changedTouches[0].clientY,r=n-e.preY;e.preY=n,e.touchEnd=!1,Math.abs(n-e.startY)>10&&(e.hadMove=!0);var o=e.props.height+r;"time"===e.props.mode&&("0"===e.props.columnId?(o>0&&(o=-816+r),o<-850&&(o=-34+r)):"1"===e.props.columnId&&(o>0&&(o=-2040+r),o<-2074&&(o=-34+r))),e.props.updateHeight(o,e.props.columnId),t.preventDefault()},"onTouchEnd":function onTouchEnd(t){var n=e.props,r=n.mode,o=n.range,i=n.height,a=n.updateHeight,u=n.onColumnChange,s=n.columnId,c=-34*(o.length-1),p=t.changedTouches[0].clientY;e.touchEnd=!0;var l=void 0;if(e.hadMove)l=i-102;else if(l=i-102-(p-(window.innerHeight-119)),"time"===e.props.mode)if("0"===e.props.columnId){if(l>-85)return void e.formulaUnlimitedScroll(24,l,"up");if(l<-969)return void e.formulaUnlimitedScroll(24,l,"down")}else if("1"===e.props.columnId){if(l>-85)return void e.formulaUnlimitedScroll(60,l,"up");if(l<-2193)return void e.formulaUnlimitedScroll(60,l,"down")}l>0&&(l=0),l<c&&(l=c);var h=Math.round(l/-34),f=102-34*h;"date"===e.props.mode&&("0"===e.props.columnId&&e.props.updateDay(+e.props.range[h].replace(/[^0-9]/gi,""),0),"1"===e.props.columnId&&e.props.updateDay(+e.props.range[h].replace(/[^0-9]/gi,""),1),"2"===e.props.columnId&&e.props.updateDay(+e.props.range[h].replace(/[^0-9]/gi,""),2)),a(f,s,"time"===r),u&&u(f,s,t)}},r.k.createElement("div",{"className":"weui-picker__mask"}),r.k.createElement("div",{"className":"weui-picker__indicator"}),r.k.createElement("div",{"className":"weui-picker__content","style":this.getPosition()},t))}}]),PickerGroup}(),a=n(10),u=n.n(a);function verifyDate(e){return!!e&&(e=new Date(e.replace(/-/g,"/")),!isNaN(e.getMonth())&&e)}n(411);n.d(t,"a",function(){return l});var s,c,p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var l=(c=s=function(e){function Picker(e){!function picker_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Picker);var t=function picker_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Picker.__proto__||Object.getPrototypeOf(Picker)).call(this,e));return t.index=[],t.handlePrpos(),t.state={"pickerValue":t.index,"hidden":!0,"fadeOut":!1,"height":[]},t}return function picker_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Picker,r["k"].Component),p(Picker,[{"key":"handlePrpos","value":function handlePrpos(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=t.value,r=t.range,o=t.mode;if("multiSelector"===o)r||(r=[],this.props.range=[]),r.length===this.index.length&&(this.index=[]),r.forEach(function(t,r){var o=n&&n.length?n[r]:void 0;e.index.push(e.verifyValue(o,t)?Math.floor(n[r]):0)});else if("time"===o){this.verifyTime(n)||(console.warn("time picker value illegal"),n="0:0");var i=n.split(":").map(function(e){return+e});this.index=i}else if("date"===o){var a=t.start,u=void 0===a?"":a,s=t.end,c=void 0===s?"":s,p=verifyDate(n),l=verifyDate(u),h=verifyDate(c);if(p||(p=new Date((new Date).setHours(0,0,0,0))),l||(l=new Date("1970/01/01")),h||(h=new Date("2999/01/01")),!(p.getTime()>=l.getTime()&&p.getTime()<=h.getTime()))throw new Error("Date Interval Error");this.index=[p.getFullYear(),p.getMonth()+1,p.getDate()],this.pickerDate&&this.pickerDate._value.getTime()===p.getTime()&&this.pickerDate._start.getTime()===l.getTime()&&this.pickerDate._end.getTime()===h.getTime()||(this.pickerDate={"_value":p,"_start":l,"_end":h,"_updateValue":[p.getFullYear(),p.getMonth()+1,p.getDate()]})}else r||(r=[],this.props.range=[]),this.index.length>=1&&(this.index=[]),this.index.push(this.verifyValue(n,r)?Math.floor(n):0)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){this.handlePrpos(e)}},{"key":"verifyValue","value":function verifyValue(e,t){return!isNaN(+e)&&e>=0&&e<t.length}},{"key":"verifyTime","value":function verifyTime(e){if(!/^\d{1,2}:\d{1,2}$/.test(e))return!1;var t=e.split(":").map(function(e){return+e});return!(t[0]<0||t[0]>23)&&!(t[1]<0||t[1]>59)}},{"key":"compareTime","value":function compareTime(e,t){return e=e.split(":").map(function(e){return+e}),t=t.split(":").map(function(e){return+e}),e[0]<t[0]||e[0]===t[0]&&e[1]<=t[1]}},{"key":"getMonthRange","value":function getMonthRange(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=1,n=12;return this.pickerDate._start.getFullYear()===this.pickerDate._end.getFullYear()?(t=this.pickerDate._start.getMonth()+1,n=this.pickerDate._end.getMonth()+1):this.pickerDate._start.getFullYear()===this.pickerDate._updateValue[0]?(t=this.pickerDate._start.getMonth()+1,n=12):this.pickerDate._end.getFullYear()===this.pickerDate._updateValue[0]&&(t=1,n=this.pickerDate._end.getMonth()+1),this.getDateRange(t,n,e)}},{"key":"getDayRange","value":function getDayRange(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=1,n=function getMaxDay(e,t){return 4===t||6===t||9===t||11===t?30:2===t?e%4==0&&e%100!=0||e%400==0?29:28:31}(this.pickerDate._updateValue[0],this.pickerDate._updateValue[1]);return this.pickerDate._start.getFullYear()===this.pickerDate._updateValue[0]&&this.pickerDate._start.getMonth()+1===this.pickerDate._updateValue[1]&&(t=this.pickerDate._start.getDate()),this.pickerDate._end.getFullYear()===this.pickerDate._updateValue[0]&&this.pickerDate._end.getMonth()+1===this.pickerDate._updateValue[1]&&(n=this.pickerDate._end.getDate()),this.getDateRange(t,n,e)}},{"key":"getDateArrIndex","value":function getDateArrIndex(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.getDateRange(this.pickerDate._start.getFullYear(),this.pickerDate._end.getFullYear()),o=this.getMonthRange(),i=this.getDayRange();return n?0===t?r[e]:1===t?o[e]:i[e]:0===t?r.indexOf(e+""):1===t?o.indexOf(e+""):i.indexOf(e+"")}},{"key":"getDateRange","value":function getDateRange(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=[],o=e;o<=t;o++)r.push(""+o+n);return r}},{"key":"hidePicker","value":function hidePicker(){var e=this;this.setState({"fadeOut":!0}),setTimeout(function(){return e.setState({"hidden":!0,"fadeOut":!1})},350)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.index=[]}},{"key":"render","value":function render(){var e=this,t=function onCancel(t){e.hidePicker();var n=o(t,"cancel",{});e.props.onCancel&&e.props.onCancel(n)},n=function onColumnChange(t,n,r){var i=e.state.height.map(function(e,r){return n===r&&(e=t),(102-e)/34}),a=e.props.range.length;if(n<a-1)for(var u=n+1;u<a;u++)i[u]=0;e.setState({"height":i.map(function(e){return 102-34*e})}),e.index=i;var s=o(r,"columnChange",{"column":n,"value":i[n]});e.props.onColumnChange&&e.props.onColumnChange(s)},o=function getEventObj(e,t,n){return Object.defineProperties(e,{"detail":{"value":n,"enumerable":!0},"type":{"value":t,"enumerable":!0}}),e},a=function updateHeight(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.setState(function(e){return e.height[n]=t,{"height":e.height}},function(){if(r){var t=e.props,n=t.start,o=t.end;if(e.verifyTime(n)||(n="00:00"),e.verifyTime(o)||(o="23:59"),!e.compareTime(n,o))return;var i=e.state.height.map(function(e){return(102-e)/34}),a=[["20","21","22","23"].concat(_toConsumableArray(s(0,23)),["00","01","02","03"]),["56","57","58","59"].concat(_toConsumableArray(s(0,59)),["00","01","02","03"])];if(i=i.map(function(e,t){return a[t][e]}).join(":"),e.compareTime(n,i)){if(!e.compareTime(i,o)){var u=o.split(":").map(function(e){return 102-34*(+e+4)});e.setState({"height":u})}}else{var c=n.split(":").map(function(e){return 102-34*(+e+4)});e.setState({"height":c})}}})},s=function getTimeRange(e,t){for(var n=[],r=e;r<=t;r++)n.push((r<10?"0":"")+r);return n},c=function updateDay(t,n){if(e.pickerDate._updateValue[n]=t,0===n)updateDay(1*e.getMonthRange()[0],1),a(102,1);else if(1===n){updateDay(1*e.getDayRange()[0],2),a(102,2)}},p=u()("weui-mask","weui-animate-fade-in",{"weui-animate-fade-out":this.state.fadeOut}),l=u()("weui-picker","weui-animate-slide-up",{"weui-animate-slide-down":this.state.fadeOut}),h=this.state.hidden?"display: none;":"",f=void 0;switch(this.props.mode){case"multiSelector":f=function getMultiSelector(){return e.props.range.map(function(t,o){return r.k.createElement(i,{"range":t,"rangeKey":e.props.rangeKey,"height":e.state.height[o],"updateHeight":a,"onColumnChange":n,"columnId":o})})}();break;case"time":f=function getTimeSelector(){var t=["20","21","22","23"].concat(_toConsumableArray(s(0,23)),["00","01","02","03"]),n=["56","57","58","59"].concat(_toConsumableArray(s(0,59)),["00","01","02","03"]);return[r.k.createElement(i,{"mode":"time","range":t,"height":e.state.height[0],"updateHeight":a,"columnId":"0"}),r.k.createElement(i,{"mode":"time","range":n,"height":e.state.height[1],"updateHeight":a,"columnId":"1"})]}();break;case"date":f=function gitDateSelector(){var t=e.getDateRange(e.pickerDate._start.getFullYear(),e.pickerDate._end.getFullYear(),"年"),n=e.getMonthRange("月"),o=e.getDayRange("日"),u=[];return"year"===e.props.fields?u.push(r.k.createElement(i,{"mode":"date","range":t,"height":e.state.height[0],"updateDay":c,"updateHeight":a,"columnId":"0"})):"month"===e.props.fields?u.push(r.k.createElement(i,{"mode":"date","range":t,"height":e.state.height[0],"updateDay":c,"updateHeight":a,"columnId":"0"}),r.k.createElement(i,{"mode":"date","range":n,"height":e.state.height[1],"updateDay":c,"updateHeight":a,"columnId":"1"})):u=[r.k.createElement(i,{"mode":"date","range":t,"height":e.state.height[0],"updateDay":c,"updateHeight":a,"columnId":"0"}),r.k.createElement(i,{"mode":"date","range":n,"height":e.state.height[1],"updateDay":c,"updateHeight":a,"columnId":"1"}),r.k.createElement(i,{"mode":"date","range":o,"updateDay":c,"height":e.state.height[2],"updateHeight":a,"columnId":"2"})],u}();break;default:f=function getSelector(){return r.k.createElement(i,{"range":e.props.range,"rangeKey":e.props.rangeKey,"height":e.state.height[0],"updateHeight":a,"columnId":"0"})}()}var d=this.props.name,m=void 0===d?"":d;return r.k.createElement("div",{"className":this.props.className},r.k.createElement("div",{"onClick":function showPicker(){if(!e.props.disabled){var t=e.index.map(function(t,n){var r=0;return"time"===e.props.mode&&(r=136),"date"===e.props.mode?102-34*e.getDateArrIndex(t,n)-r:102-34*t-r});e.setState({"hidden":!1,"height":t})}}},this.props.children),r.k.createElement("div",{"style":h,"className":p,"onClick":t}),r.k.createElement("div",{"style":h,"className":l},r.k.createElement("div",{"className":"weui-picker__hd"},r.k.createElement("div",{"className":"weui-picker__action","onClick":t},"取消"),r.k.createElement("div",{"className":"weui-picker__action","onClick":function onChange(t){e.hidePicker(),e.index=e.state.height.map(function(e){return(102-e)/34});var n=o(t,"change",{"value":e.index.length>1&&"selector"!==e.props.mode?e.index:e.index[0]});if("time"===e.props.mode){var r=[["20","21","22","23"].concat(_toConsumableArray(s(0,23)),["00","01","02","03"]),["56","57","58","59"].concat(_toConsumableArray(s(0,59)),["00","01","02","03"])];e.index=e.index.map(function(e,t){return r[t][e]}),n.detail.value=e.index.join(":")}"date"===e.props.mode&&(e.index=e.index.map(function(t,n){return e.getDateArrIndex(t,n,!0)}),"year"===e.props.fields?n.detail.value=[e.index[0]]:"month"===e.props.fields?n.detail.value=[e.index[0],e.index[1]]:n.detail.value=e.index,n.detail.value=n.detail.value.join("-")),e.setState({"pickerValue":n.detail.value}),e.props.onChange&&e.props.onChange(n)}},"确定")),r.k.createElement("div",{"className":"weui-picker__bd"},f),r.k.createElement("input",{"type":"hidden","name":m,"value":this.state.pickerValue})))}}]),Picker}(),s.defaultProps={"mode":"selector"},c)}}]);