"use strict";exports.__esModule=!0,exports.default=combineReducers;var _createStore=require("./createStore.js"),_isPlainObject=require("../../lodash/isPlainObject.js"),_isPlainObject2=_interopRequireDefault(_isPlainObject),_warning=require("./utils/warning.js"),_warning2=_interopRequireDefault(_warning);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getUndefinedStateErrorMessage(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function getUnexpectedStateShapeWarningMessage(e,t,n,r){var i=Object.keys(t),o=n&&n.type===_createStore.ActionTypes.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===i.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,_isPlainObject2.default)(e))return"The "+o+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+i.join('", "')+'"';var a=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!r[e]});return a.forEach(function(e){r[e]=!0}),0<a.length?"Unexpected "+(1<a.length?"keys":"key")+' "'+a.join('", "')+'" found in '+o+'. Expected to find one of the known reducer keys instead: "'+i.join('", "')+'". Unexpected keys will be ignored.':void 0}function assertReducerShape(n){Object.keys(n).forEach(function(e){var t=n[e];if(void 0===t(void 0,{type:_createStore.ActionTypes.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+_createStore.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function combineReducers(e){for(var t=Object.keys(e),c={},n=0;n<t.length;n++){var r=t[n];"function"==typeof e[r]&&(c[r]=e[r])}var l=Object.keys(c),f=void 0;try{assertReducerShape(c)}catch(e){f=e}return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(f)throw f;for(var n=!1,r={},i=0;i<l.length;i++){var o=l[i],a=c[o],u=e[o],s=a(u,t);if(void 0===s){var d=getUndefinedStateErrorMessage(o,t);throw new Error(d)}r[o]=s,n=n||s!==u}return n?r:e}}