"use strict";function startCountDown(e){var d=e.time,i=e.updatedCallback,t=e.endCallback,l=void 0===t?function(){}:t,o=e.delay,v=void 0===o?0:o,a=e.updateCycle,n=void 0===a?1e3:a,u=void 0,r=function(){var e=new Date(d+v)-new Date,t=void 0,o=void 0,a=void 0,n=void 0;if(1e3<e){t=Math.floor(e/864e5);var r=e%864e5;o=Math.floor(r/36e5),r%=36e5,a=Math.floor(r/6e4),r%=6e4,n=Math.floor(r/1e3)}1e3<=e?i(t,o,a,n):(clearInterval(u),l())};return r(),u=setInterval(function(){r()},n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=startCountDown;