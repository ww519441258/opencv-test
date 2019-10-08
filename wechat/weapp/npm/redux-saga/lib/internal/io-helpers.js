"use strict";exports.__esModule=!0,exports.takeEvery=takeEvery,exports.takeLatest=takeLatest,exports.throttle=throttle;var _io=require("./io.js"),_sagaHelpers=require("./sagaHelpers/index.js");function takeEvery(e,r){for(var t=arguments.length,a=Array(2<t?t-2:0),o=2;o<t;o++)a[o-2]=arguments[o];return _io.fork.apply(void 0,[_sagaHelpers.takeEveryHelper,e,r].concat(a))}function takeLatest(e,r){for(var t=arguments.length,a=Array(2<t?t-2:0),o=2;o<t;o++)a[o-2]=arguments[o];return _io.fork.apply(void 0,[_sagaHelpers.takeLatestHelper,e,r].concat(a))}function throttle(e,r,t){for(var a=arguments.length,o=Array(3<a?a-3:0),s=3;s<a;s++)o[s-3]=arguments[s];return _io.fork.apply(void 0,[_sagaHelpers.throttleHelper,e,r,t].concat(o))}