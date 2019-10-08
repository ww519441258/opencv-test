(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"241":function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a,r,o=n(1),i=n(2),s=n(51),c=n(10),l=n.n(c),u=n(240),d=n.n(u),f=(n(242),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var p=(r=a=function(e){function loading(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,loading);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(loading.__proto__||Object.getPrototypeOf(loading)).call(this,e));return t.state={},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(loading,i["a"].Component),f(loading,[{"key":"render","value":function render(){var e=this.props,t=e.type,n=e.display,a=e.tipText,r=l()("loading",t,n);return o.k.createElement(s.a,{"className":r},o.k.createElement(s.a,{"className":"circle"}),o.k.createElement(s.a,{"className":"text"},a,"..."))}}]),loading}(),a.options={"addGlobalClass":!0},a.propTypes={"type":d.a.oneOf(["center","block","inline"]),"display":d.a.oneOf(["dark","light"]),"tipText":d.a.string},a.defaultProps={"type":"center","display":"dark","tipText":"加载中"},r)},"242":function(e,t,n){},"279":function(e,t,n){"use strict";n.d(t,"b",function(){return setGlobalData}),n.d(t,"a",function(){return getGlobalData});var a={};function setGlobalData(e,t){a[e]=t}function getGlobalData(e){return a[e]}},"317":function(e,t,n){"use strict";n.d(t,"a",function(){return setNavigationBarTitle});var a=n(0);function setNavigationBarTitle(e){var t=Object(a.l)(e);if(!t.res){var n={"errMsg":"setNavigationBarTitle"+t.msg};return console.error(n.errMsg),Promise.reject(n)}var r=e.title,o=e.success,i=e.fail,s=e.complete,c={"errMsg":"setNavigationBarTitle:ok"};return r&&"string"==typeof r?(document.title!==r&&(document.title=r),"function"==typeof o&&o(c),"function"==typeof s&&s(c),Promise.resolve(c)):(c.errMsg=Object(a.e)({"name":"setNavigationBarTitle","para":"title","correct":"String","wrong":r}),console.error(c.errMsg),"function"==typeof i&&i(c),"function"==typeof s&&s(c),Promise.reject(c))}},"318":function(e,t,n){"use strict";n(38);var a=n(1),r=n(76),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var s=function(e){function Textarea(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Textarea);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Textarea.__proto__||Object.getPrototypeOf(Textarea)).apply(this,arguments));return e.onChange=e.onChange.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Textarea,a["k"].Component),i(Textarea,[{"key":"onChange","value":function onChange(e){var t=this.props,n=t.onChange,onChange=void 0===n?"":n,a=t.onInput,r=void 0===a?"":a;return Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onChange?onChange&&onChange(e):r?r&&r(e):void 0}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=void 0===t?"":t,i=e.placeholder,s=void 0===i?"":i,c=e.disabled,l=e.maxlength,u=void 0===l?140:l,d=e.autoFocus,f=void 0!==d&&d;return a.k.createElement("textarea",o({},Object(r.a)(this.props,["className","placeholder","disabled","maxlength","onChange","onInput","onFocus","onBlur","autofocus"]),{"className":n,"placeholder":s,"disabled":c,"maxlength":u,"autofocus":f,"onChange":this.onChange,"onFocus":this.onFocus,"onBlur":this.onBlur}))}}]),Textarea}();t.a=s},"409":function(e,t,n){},"504":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var a,r,o=n(1),i=n(317),s=n(239),c=n(2),l=n(236),u=n(51),d=n(259),f=n(536),p=n(258),h=n(306),m=n(284),b=n(304),v=n(318),g=(n(409),n(77)),y=n(279),k=n(241),_=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),O=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0};var E=(a=function(e){function EditAddress(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EditAddress);var t=Object(y.a)("address"),n=[],a=[];t&&6===t.area_code.length&&(a=[t.area_code.substr(0,2)+"0000",t.area_code.substr(0,4)+"00",t.area_code],n=[t.province,t.city,t.district]);var o=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(EditAddress.__proto__||Object.getPrototypeOf(EditAddress)).call(this,e));return r.call(o),o.areaData=[],o.addressInfo=t,o.state={"areaText":n,"code":a,"areaPickerData":null,"checkedArea":[],"addressInfo":Object(y.a)("address")||{"consignee":"","tel":"","address":""}},o}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(EditAddress,c["a"].Component),_(EditAddress,[{"key":"componentWillMount","value":function componentWillMount(){var e=this;Object(y.a)("address")||Object(i.a)({"title":"新建收货地址"}),Object(s.b)({"title":"加载地区数据中"}),Object(g.b)({"name":"getAreaData","success":function success(t){e.areaData=[];var n=!0,a=!1,r=void 0;try{for(var o,i=["province_list","city_list","county_list"][Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value,l=[];for(var u in t[c])l.push({"code":u,"name":t[c][u]});e.areaData.push(l)}}catch(e){a=!0,r=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw r}}e.updatePickerData(0,0,!0),Object(s.a)()}})}},{"key":"onShareAppMessage","value":function onShareAppMessage(){}},{"key":"updatePickerData","value":function updatePickerData(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.areaData,o=this.state.areaPickerData;if(n){var i=Object(y.a)("address"),s=[],c=[0,0,0];i&&6===i.area_code.length&&(s=[i.area_code.substr(0,2)+"0000",i.area_code.substr(0,4)+"00",i.area_code],this.setState({"areaPickerData":o})),(o=[])[0]=r[0].filter(function(){return!0}),i&&6===i.area_code.length&&(c[0]=o[0].findIndex(function(e){return e.code===s[0]})),o[1]=r[1].filter(function(e){return e.code.substr(0,2)===o[0][c[0]].code.substr(0,2)}),i&&6===i.area_code.length&&(c[1]=o[1].findIndex(function(e){return e.code===s[1]})),o[2]=r[2].filter(function(e){return e.code.substr(0,4)===o[1][c[1]].code.substr(0,4)}),i&&6===i.area_code.length&&(c[2]=o[2].findIndex(function(e){return e.code===s[2]}),this.setState({"checkedArea":c}))}else 0===e?(o[1]=r[1].filter(function(e){return e.code.substr(0,2)===o[0][t].code.substr(0,2)}),o[2]=r[2].filter(function(e){return e.code.substr(0,4)===o[1][0].code.substr(0,4)}),0===o[2].length&&(o[2]=o[1][0].name)):1===e&&(o[2]=r[2].filter(function(e){return e.code.substr(0,4)===o[1][t].code.substr(0,4)}),0===o[2].length&&(o[2]=o[1][t].name));if(this.setState({"areaPickerData":o}),a)return o}},{"key":"render","value":function render(){var e=this.state,t=e.addressInfo,n=e.areaText,a=e.areaPickerData,r=e.checkedArea,i=Boolean(this.$router.params.choose),s=Boolean(Object(y.a)("address")),l=void 0,g=void 0;n.length>0&&(g=o.k.createElement(u.a,null,o.k.createElement(d.a,null,n[0]),o.k.createElement(d.a,null,n[1]),o.k.createElement(d.a,null,n[2]))),l=a?o.k.createElement(f.a,{"mode":"multiSelector","range":a,"rangeKey":"name","value":r,"onColumnChange":this.handleAreaColumnChange,"onChange":this.handleAreaChange},n.length>0?g:o.k.createElement(u.a,{"className":"placeholder"},"点击选择地区")):o.k.createElement(k.a,{"type":"inline"});var _=void 0;return t&&1!==t.status&&(_=o.k.createElement(u.a,null,o.k.createElement(p.a,{"onClick":this.onSetDefault},"设为默认收货地址"),o.k.createElement(p.a,{"onClick":this.onDelete},"删除"))),o.k.createElement(u.a,{"className":"edit-address"},!1,o.k.createElement(h.a,{"onSubmit":this.handleSave},o.k.createElement(u.a,{"className":"content"},o.k.createElement(u.a,{"className":"form__cell"},o.k.createElement(m.a,null,"收货人"),o.k.createElement(b.a,{"name":"consignee","value":t.consignee,"maxLength":"6","placeholder":"请输入收货人","onInput":this.onUpdateForm.bind(void 0,"consignee")})),o.k.createElement(u.a,{"className":"form__cell"},o.k.createElement(m.a,null,"手机号码"),o.k.createElement(b.a,{"type":"number","name":"tel","value":t.tel,"maxLength":"11","placeholder":"请输入11位手机号码","onInput":this.onUpdateForm.bind(void 0,"tel")})),o.k.createElement(u.a,{"className":"form__cell"},o.k.createElement(m.a,null,"所在地区"),o.k.createElement(u.a,{"className":"area"},l)),o.k.createElement(u.a,{"className":"form__cell"},o.k.createElement(m.a,null,"详细地址"),"WEAPP"===c.a.getEnv()?o.k.createElement(v.a,{"className":"textarea","name":"detail","value":t.address,"maxlength":25,"autoHeight":!0,"placeholder":"请输入详细的收货地址","onInput":this.onUpdateForm.bind(void 0,"address")}):o.k.createElement(v.a,{"className":"textarea","name":"detail","maxlength":25,"autoHeight":!0,"placeholder":"请输入详细的收货地址"},t.address))),o.k.createElement(u.a,{"className":"handle"},o.k.createElement(p.a,{"type":"primary","form-type":"submit"},i?"保存并使用":"保存"),s&&_)))}},{"key":"componentDidMount","value":function componentDidMount(){O(EditAddress.prototype.__proto__||Object.getPrototypeOf(EditAddress.prototype),"componentDidMount",this)&&O(EditAddress.prototype.__proto__||Object.getPrototypeOf(EditAddress.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){O(EditAddress.prototype.__proto__||Object.getPrototypeOf(EditAddress.prototype),"componentDidShow",this)&&O(EditAddress.prototype.__proto__||Object.getPrototypeOf(EditAddress.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){O(EditAddress.prototype.__proto__||Object.getPrototypeOf(EditAddress.prototype),"componentDidHide",this)&&O(EditAddress.prototype.__proto__||Object.getPrototypeOf(EditAddress.prototype),"componentDidHide",this).call(this)}}]),EditAddress}(),r=function _initialiseProps(){var e=this;this.config={"navigationBarTitleText":"修改收货地址","enablePullDownRefresh":!1},this.handleAreaChange=function(t){var n=e.state.areaPickerData,a=t.detail.value,r=[n[0][a[0]]||{"name":"省","code":-1},n[1][a[1]]||{"name":"市","code":-1},n[2][a[2]]||{"name":"县/区","code":-1}];e.setState({"checkedArea":a,"areaText":[r[0].name,r[1].name,r[2].name],"code":[r[0].code,r[1].code,r[2].code]})},this.handleSave=function(t){var n=e.state.code,a=t.detail.value,r=a.consignee,o=a.tel,i=a.detail;e.saveAddress({"code":n,"consignee":r,"tel":o,"detail":i})},this.onSetDefault=function(){Object(g.b)({"name":"setDefaultAddress","data":{"id":e.addressInfo.id},"success":function success(){c.a.eventCenter.trigger("update:address"),c.a.navigateBack()},"hintText":"设置"})},this.saveAddress=function(t){var n=t.code,a=t.consignee,r=t.tel,o=t.detail,i=Object(y.a)("address");function toast(e){Object(s.d)({"title":e,"icon":"none"})}if(""===a)return toast("请填写收件人");if(a.length<2||a.length>6)return toast("收件人长度必须大于2个字符小于6个字符");if(""===r)return toast("请填写手机号码");if(11!==r.length)return toast("手机号码必须为11位");if(!n||-1===n[0])return toast("请选择所在地区");if(-1===n[1])return toast("请选择所在城市");if(-1===n[2])return toast("请选择所在县/区");if(""===o)return toast("请填写详细地址");if(o.length<4||o.length>25)return toast("详细地址长度必须大于4个字符小于25个字符");var l={"consignee":a,"tel":r,"province":n[0],"city":n[1],"district":n[2],"area_code":n[2],"address":o},u="";i?(u="editAddress",l.id=i.id):u="addAddress",Object(g.b)({"name":u,"data":l,"success":function success(t){e.$router.params.choose?Object(g.b)({"name":"chooseAddress","data":{"id":i?i.id:t.id,"orderId":e.$router.params.choose},"success":function success(){c.a.eventCenter.trigger("update:order"),c.a.navigateBack()}}):(c.a.eventCenter.trigger("update:address"),c.a.navigateBack())}})},this.onDelete=function(){var e=Object(y.a)("address");Object(s.c)({"title":"提示","content":"确定要删除此地址吗？","success":function success(t){t.confirm&&Object(g.b)({"name":"delAddress","data":{"id":e.id},"success":function success(){c.a.eventCenter.trigger("update:address"),c.a.navigateBack()}})}})},this.onUpdateForm=function(t,n){var a=e.state.addressInfo;"string"==typeof n.detail.value?a[t]=n.detail.value:"string"==typeof n.data&&(a[t]?a[t]+=n.data:a[t]=n.data),e.setState({"addressInfo":a})},this.handleAreaColumnChange=function(t){e.updatePickerData(t.detail.column,t.detail.value)},this.handleClickImport=function(){Object(l.b)({"success":function success(t){if("chooseAddress:ok"===t.errMsg){Object(s.b)({"title":"导入中"});var n,a=t.userName,r=t.telNumber,o=t.detailInfo,i=t.provinceName,c=t.cityName,l=t.countyName,u=void 0,d=void 0,f=e.areaData,p="";(n=f[0].findIndex(function(e){return e.name===i}))>=0?((u=(f=e.updatePickerData(0,n,!1,!0))[1].findIndex(function(e){return e.name===c}))>=0?-1===(d=(f=e.updatePickerData(1,u,!1,!0))[2].findIndex(function(e){return e.name===l}))&&(p="未能在数据库中找到该县/区，请手动选择"):p="未能在数据库中找到该城市，请手动选择",e.handleAreaChange({"detail":{"value":[n,u,d]}})):p="未能在数据库中找到该地区，请手动选择",Object(s.a)(),p&&Object(s.c)({"content":p,"showCancel":!1}),e.setState({"checkedArea":[n,u,d],"addressInfo":Object(y.a)("address")||{"consignee":a,"tel":r,"address":o}})}}})}},a)}}]);