"use strict";var reduce=Function.bind.call(Function.call,Array.prototype.reduce),isEnumerable=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),concat=Function.bind.call(Function.call,Array.prototype.concat),keys=Reflect.ownKeys;Object.values||(Object.values=function(t){return reduce(keys(t),function(e,n){return concat(e,"string"==typeof n&&isEnumerable(t,n)?[t[n]]:[])},[])}),Object.entries||(Object.entries=function(t){return reduce(keys(t),function(e,n){return concat(e,"string"==typeof n&&isEnumerable(t,n)?[[n,t[n]]]:[])},[])});