"use strict";var isObject=require("../isobject/index.js");function isObjectObject(t){return!0===isObject(t)&&"[object Object]"===Object.prototype.toString.call(t)}module.exports=function(t){var e,c;return!1!==isObjectObject(t)&&("function"==typeof(e=t.constructor)&&(!1!==isObjectObject(c=e.prototype)&&!1!==c.hasOwnProperty("isPrototypeOf")))};