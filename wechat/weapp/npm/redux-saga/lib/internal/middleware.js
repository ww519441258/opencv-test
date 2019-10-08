"use strict";exports.__esModule=!0,exports.default=sagaMiddlewareFactory;var _utils=require("./utils.js"),_channel=require("./channel.js"),_runSaga=require("./runSaga.js");function _objectWithoutProperties(t,e){var r={};for(var n in t)0<=e.indexOf(n)||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function sagaMiddlewareFactory(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.context,i=void 0===e?{}:e,o=_objectWithoutProperties(t,["context"]),a=o.sagaMonitor,s=o.logger,u=o.onError;if(_utils.is.func(o))throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead");if(s&&!_utils.is.func(s))throw new Error("`options.logger` passed to the Saga middleware is not a function!");if(u&&!_utils.is.func(u))throw new Error("`options.onError` passed to the Saga middleware is not a function!");if(o.emitter&&!_utils.is.func(o.emitter))throw new Error("`options.emitter` passed to the Saga middleware is not a function!");function c(t){var e=t.getState,r=t.dispatch,n=(0,_channel.emitter)();return n.emit=(o.emitter||_utils.ident)(n.emit),c.run=_runSaga.runSaga.bind(null,{context:i,subscribe:n.subscribe,dispatch:r,getState:e,sagaMonitor:a,logger:s,onError:u}),function(r){return function(t){a&&a.actionDispatched&&a.actionDispatched(t);var e=r(t);return n.emit(t),e}}}return c.run=function(){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")},c.setContext=function(t){(0,_utils.check)(t,_utils.is.object,(0,_utils.createSetContextWarning)("sagaMiddleware",t)),_utils.object.assign(i,t)},c}