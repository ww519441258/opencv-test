"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTimerId=exports.saveTimerId=exports.getDateAttribute=void 0;var ATTR_TIMEAGO_TID="timeago-tid",ATTR_DATETIME="datetime",getAttribute=function(t,e){return t.getAttribute?t.getAttribute(e):t.attr?t.attr(e):void 0},getDateAttribute=function(t){return getAttribute(t,ATTR_DATETIME)};exports.getDateAttribute=getDateAttribute;var saveTimerId=function(t,e){return t.setAttribute?t.setAttribute(ATTR_TIMEAGO_TID,e):t.attr?t.attr(ATTR_TIMEAGO_TID,e):void 0};exports.saveTimerId=saveTimerId;var getTimerId=function(t){return getAttribute(t,ATTR_TIMEAGO_TID)};exports.getTimerId=getTimerId;