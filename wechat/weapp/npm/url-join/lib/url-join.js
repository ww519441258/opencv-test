!function(e,t,n){"undefined"!=typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd?define(n):t.urljoin=n()}(0,this,function(){return function(){return function(e){var t=[];if(e[0].match(/^[^/:]+:\/*$/)&&1<e.length){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var i=e[r];if("string"!=typeof i)throw new TypeError("Url must be a string. Received "+i);""!==i&&(0<r&&(i=i.replace(/^[\/]+/,"")),i=r<e.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),t.push(i))}var o=t.join("/"),l=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=l.shift()+(0<l.length?"?":"")+l.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}});