"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nextInterval=exports.diffSec=exports.formatDiff=exports.toDate=exports.toInt=void 0;var SEC_ARRAY=[60,60,24,7,4.345238095238096,12],toInt=function(t){return parseInt(t)};exports.toInt=toInt;var toDate=function(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(toInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(t))};exports.toDate=toDate;var formatDiff=function(t,e){for(var r=0,a=t<0?1:0,n=t=Math.abs(t);t>=SEC_ARRAY[r]&&r<SEC_ARRAY.length;r++)t/=SEC_ARRAY[r];return(0===(r*=2)?9:1)<(t=toInt(t))&&(r+=1),e(t,r,n)[a].replace("%s",t)};exports.formatDiff=formatDiff;var diffSec=function(t,e){return((e=e?toDate(e):new Date)-toDate(t))/1e3};exports.diffSec=diffSec;var nextInterval=function(t){for(var e=1,r=0,a=Math.abs(t);t>=SEC_ARRAY[r]&&r<SEC_ARRAY.length;r++)t/=SEC_ARRAY[r],e*=SEC_ARRAY[r];return a=(a%=e)?e-a:e,Math.ceil(a)};exports.nextInterval=nextInterval;