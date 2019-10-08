"use strict";exports.__esModule=!0,exports.asEffect=exports.takem=exports.detach=void 0,exports.take=take,exports.put=put,exports.all=all,exports.race=race,exports.call=call,exports.apply=apply,exports.cps=cps,exports.fork=fork,exports.spawn=spawn,exports.join=join,exports.cancel=cancel,exports.select=select,exports.actionChannel=actionChannel,exports.cancelled=cancelled,exports.flush=flush,exports.getContext=getContext,exports.setContext=setContext;var _utils=require("./utils.js"),IO=(0,_utils.sym)("IO"),TAKE="TAKE",PUT="PUT",ALL="ALL",RACE="RACE",CALL="CALL",CPS="CPS",FORK="FORK",JOIN="JOIN",CANCEL="CANCEL",SELECT="SELECT",ACTION_CHANNEL="ACTION_CHANNEL",CANCELLED="CANCELLED",FLUSH="FLUSH",GET_CONTEXT="GET_CONTEXT",SET_CONTEXT="SET_CONTEXT",TEST_HINT="\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)",effect=function(e,t){var n;return(n={})[IO]=!0,n[e]=t,n},detach=exports.detach=function(e){return(0,_utils.check)(asEffect.fork(e),_utils.is.object,"detach(eff): argument must be a fork effect"),e[FORK].detached=!0,e};function take(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&(0,_utils.check)(arguments[0],_utils.is.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),_utils.is.pattern(e))return effect(TAKE,{pattern:e});if(_utils.is.channel(e))return effect(TAKE,{channel:e});throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}take.maybe=function(){var e=take.apply(void 0,arguments);return e[TAKE].maybe=!0,e};var takem=exports.takem=(0,_utils.deprecate)(take.maybe,(0,_utils.updateIncentive)("takem","take.maybe"));function put(e,t){return 1<arguments.length?((0,_utils.check)(e,_utils.is.notUndef,"put(channel, action): argument channel is undefined"),(0,_utils.check)(e,_utils.is.channel,"put(channel, action): argument "+e+" is not a valid channel"),(0,_utils.check)(t,_utils.is.notUndef,"put(channel, action): argument action is undefined")):((0,_utils.check)(e,_utils.is.notUndef,"put(action): argument action is undefined"),t=e,e=null),effect(PUT,{channel:e,action:t})}function all(e){return effect(ALL,e)}function race(e){return effect(RACE,e)}function getFnCallDesc(e,t,n){(0,_utils.check)(t,_utils.is.notUndef,e+": argument fn is undefined");var c=null;if(_utils.is.array(t)){var r=t;c=r[0],t=r[1]}else if(t.fn){var a=t;c=a.context,t=a.fn}return c&&_utils.is.string(t)&&_utils.is.func(c[t])&&(t=c[t]),(0,_utils.check)(t,_utils.is.func,e+": argument "+t+" is not a function"),{context:c,fn:t,args:n}}function call(e){for(var t=arguments.length,n=Array(1<t?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return effect(CALL,getFnCallDesc("call",e,n))}function apply(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];return effect(CALL,getFnCallDesc("apply",{context:e,fn:t},n))}function cps(e){for(var t=arguments.length,n=Array(1<t?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return effect(CPS,getFnCallDesc("cps",e,n))}function fork(e){for(var t=arguments.length,n=Array(1<t?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return effect(FORK,getFnCallDesc("fork",e,n))}function spawn(e){for(var t=arguments.length,n=Array(1<t?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return detach(fork.apply(void 0,[e].concat(n)))}function join(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(1<t.length)return all(t.map(function(e){return join(e)}));var c=t[0];return(0,_utils.check)(c,_utils.is.notUndef,"join(task): argument task is undefined"),(0,_utils.check)(c,_utils.is.task,"join(task): argument "+c+" is not a valid Task object "+TEST_HINT),effect(JOIN,c)}function cancel(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(1<t.length)return all(t.map(function(e){return cancel(e)}));var c=t[0];return 1===t.length&&((0,_utils.check)(c,_utils.is.notUndef,"cancel(task): argument task is undefined"),(0,_utils.check)(c,_utils.is.task,"cancel(task): argument "+c+" is not a valid Task object "+TEST_HINT)),effect(CANCEL,c||_utils.SELF_CANCELLATION)}function select(e){for(var t=arguments.length,n=Array(1<t?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return 0===arguments.length?e=_utils.ident:((0,_utils.check)(e,_utils.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,_utils.check)(e,_utils.is.func,"select(selector,[...]): argument "+e+" is not a function")),effect(SELECT,{selector:e,args:n})}function actionChannel(e,t){return(0,_utils.check)(e,_utils.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),1<arguments.length&&((0,_utils.check)(t,_utils.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,_utils.check)(t,_utils.is.buffer,"actionChannel(pattern, buffer): argument "+t+" is not a valid buffer")),effect(ACTION_CHANNEL,{pattern:e,buffer:t})}function cancelled(){return effect(CANCELLED,{})}function flush(e){return(0,_utils.check)(e,_utils.is.channel,"flush(channel): argument "+e+" is not valid channel"),effect(FLUSH,e)}function getContext(e){return(0,_utils.check)(e,_utils.is.string,"getContext(prop): argument "+e+" is not a string"),effect(GET_CONTEXT,e)}function setContext(e){return(0,_utils.check)(e,_utils.is.object,(0,_utils.createSetContextWarning)(null,e)),effect(SET_CONTEXT,e)}put.resolve=function(){var e=put.apply(void 0,arguments);return e[PUT].resolve=!0,e},put.sync=(0,_utils.deprecate)(put.resolve,(0,_utils.updateIncentive)("put.sync","put.resolve"));var createAsEffectType=function(t){return function(e){return e&&e[IO]&&e[t]}},asEffect=exports.asEffect={take:createAsEffectType(TAKE),put:createAsEffectType(PUT),all:createAsEffectType(ALL),race:createAsEffectType(RACE),call:createAsEffectType(CALL),cps:createAsEffectType(CPS),fork:createAsEffectType(FORK),join:createAsEffectType(JOIN),cancel:createAsEffectType(CANCEL),select:createAsEffectType(SELECT),actionChannel:createAsEffectType(ACTION_CHANNEL),cancelled:createAsEffectType(CANCELLED),flush:createAsEffectType(FLUSH),getContext:createAsEffectType(GET_CONTEXT),setContext:createAsEffectType(SET_CONTEXT)};