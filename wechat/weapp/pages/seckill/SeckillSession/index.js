"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_get=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../npm/timeago.js/lib/index.js"),_index4=require("../../../npm/classnames/index.js"),_index5=_interopRequireDefault(_index4),_countdown=require("../../../utils/countdown.js"),_countdown2=_interopRequireDefault(_countdown),_indexModuleScssMap=require("./index.module.scss.map.js"),_indexModuleScssMap2=_interopRequireDefault(_indexModuleScssMap);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var secPerDay=864e5,SeckillSession=(_temp2=_class=function(e){function a(){var e,t,n;_classCallCheck(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o)))).$usedState=["anonymousState__temp","anonymousState__temp2","style","name","hasStarred","countdown","seckillInfo","active","width","isShowFullCountdown"],n.customComponents=[],_possibleConstructorReturn(n,t)}return _inherits(a,_index2.default.Component),_createClass(a,[{key:"_constructor",value:function(e){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,e),this.$$refs=[]}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2],this.$prefix;var e=this.__props,t=e.seckillInfo,n=void 0===t?{}:t,r=e.active,o=void 0!==r&&r,i=e.width,a=void 0===i?"30vw":i,s=e.isShowFullCountdown,u=void 0!==s&&s,l=(e.onClick,n.name),c=n.start_date_time,_=n.end_date_time,p=new Date(c)<=new Date,d=(0,_index.useState)(),f=_slicedToArray(d,2),y=f[0],v=f[1];(0,_index.useEffect)(function(){var e=new Date,t=void 0;return t=u&&Math.abs(new Date(p?_:c)-e)<secPerDay?(0,_countdown2.default)({time:p?_:c,updatedCallback:function(e,t,n,r){v((t||"00")+":"+(n||"00")+":"+(r||"00")+" 后")}}):(v((0,_index3.format)(p?_:c,"zh_CN")),setInterval(function(){v((0,_index3.format)(p?_:c,"zh_CN"))},6e4)),function(){t&&clearInterval(t)}},[p,c,_]);var h=(0,_index5.default)(_indexModuleScssMap2.default.root,_defineProperty({},_indexModuleScssMap2.default.active,o)),m=(0,_index.internal_inline_style)({width:a});return Object.assign(this.__state,{anonymousState__temp:h,anonymousState__temp2:m,style:_indexModuleScssMap2.default,name:l,hasStarred:p,countdown:y}),this.__state}},{key:"funPrivateRHMoR",value:function(){return this.props.onClick.apply(void 0,Array.prototype.slice.call(arguments,1))}}]),a}(),_class.$$events=["funPrivateRHMoR"],_class.$$componentPath="pages/seckill/SeckillSession/index",_temp2);SeckillSession.options={addGlobalClass:!0},exports.default=SeckillSession,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(SeckillSession));