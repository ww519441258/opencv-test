(global.webpackJsonp=global.webpackJsonp||[]).push([[9],{267:function(t,s,a){"use strict";a.r(s);var r=a(268),e=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(s,t,function(){return r[t]})}(i);s.default=e.a},268:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=i(a(11)),e=i(a(12));function i(t){return t&&t.__esModule?t:{default:t}}s.default={mpType:"page",data:function(){return{istips:!1,start:0,data:{},user:{}}},created:function(){var t=this;return(0,e.default)(r.default.mark(function s(){return r.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.user=t.$store.state.user,s.next=3,t.$store.dispatch("distributionQrcode");case 3:t.data=s.sent,console.log(t.data);case 5:case"end":return s.stop()}},s,t)}))()},methods:{startFu:function(){this.start=0},moveFu:function(){this.start=1},tipsFu:function(){1!=this.start&&(this.istips=!this.istips)}}}},360:function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"app",attrs:{_hid:0}},[a("dl",{staticClass:"app-con",attrs:{_hid:1}},[a("dt",{attrs:{_hid:2}},[a("img",{attrs:{src:t.user.avatar,_hid:3,_batrs:"src"}}),a("span",{attrs:{_hid:5}},[t._v(t._s(t.user.nickname),6)])]),a("dd",{attrs:{_hid:8}},[a("img",{attrs:{src:t.imgSrc+t.data.qrcode,_hid:9,_batrs:"src"}})]),a("p",{attrs:{_hid:11},on:{click:t.tipsFu}},[])],1),t._ri(!!t.istips,14)?a("div",{staticClass:"app-tips",attrs:{_hid:14},on:{click:t.tipsFu}},[a("div",{staticClass:"app-tips-text",attrs:{_hid:15}},[a("b",{attrs:{_hid:16}},[]),a("p",{attrs:{_hid:19}},[])],1)]):t._e()],1)},e=[];r._withStripped=!0,a.d(s,"a",function(){return r}),a.d(s,"b",function(){return e})},677:function(t,s,a){"use strict";var r=i(a(678)),e=i(a(17));function i(t){return t&&t.__esModule?t:{default:t}}r.default.mpType="page",new e.default(r.default).$mount()},678:function(t,s,a){"use strict";a.r(s);var r=a(360),e=a(267);for(var i in e)"default"!==i&&function(t){a.d(s,t,function(){return e[t]})}(i);a(679);var n=a(0),u=Object(n.a)(e.default,r.a,r.b,!1,null,"33974f36",null);u.options.__file="src/packageA/pages/distribution/qrcode/index.vue",s.default=u.exports},679:function(t,s,a){"use strict";var r=a(868);a.n(r).a},868:function(t,s){}},[[677,0,1]]]);