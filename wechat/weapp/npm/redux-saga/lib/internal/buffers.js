"use strict";exports.__esModule=!0,exports.buffers=exports.BUFFER_OVERFLOW=void 0;var _utils=require("./utils.js"),BUFFER_OVERFLOW=exports.BUFFER_OVERFLOW="Channel's Buffer overflow!",ON_OVERFLOW_THROW=1,ON_OVERFLOW_DROP=2,ON_OVERFLOW_SLIDE=3,ON_OVERFLOW_EXPAND=4,zeroBuffer={isEmpty:_utils.kTrue,put:_utils.noop,take:_utils.noop};function ringBuffer(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10,O=arguments[1],u=new Array(e),t=0,f=0,i=0,o=function(r){u[f]=r,f=(f+1)%e,t++},n=function(){if(0!=t){var r=u[i];return u[i]=null,t--,i=(i+1)%e,r}},_=function(){for(var r=[];t;)r.push(n());return r};return{isEmpty:function(){return 0==t},put:function(r){if(t<e)o(r);else{var n=void 0;switch(O){case ON_OVERFLOW_THROW:throw new Error(BUFFER_OVERFLOW);case ON_OVERFLOW_SLIDE:u[f]=r,i=f=(f+1)%e;break;case ON_OVERFLOW_EXPAND:n=2*e,u=_(),t=u.length,f=u.length,i=0,u.length=n,e=n,o(r)}}},take:n,flush:_}}var buffers=exports.buffers={none:function(){return zeroBuffer},fixed:function(r){return ringBuffer(r,ON_OVERFLOW_THROW)},dropping:function(r){return ringBuffer(r,ON_OVERFLOW_DROP)},sliding:function(r){return ringBuffer(r,ON_OVERFLOW_SLIDE)},expanding:function(r){return ringBuffer(r,ON_OVERFLOW_EXPAND)}};