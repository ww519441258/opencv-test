"use strict";var deselectCurrent=require("../toggle-selection/index.js"),defaultMessage="Copy to clipboard: #{key}, Enter";function format(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function copy(t,o){var r,n,e,s,c,a,l=!1;o||(o={}),r=o.debug||!1;try{if(e=deselectCurrent(),s=document.createRange(),c=document.getSelection(),(a=document.createElement("span")).textContent=t,a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",document.body.appendChild(a),s.selectNode(a),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(e){r&&console.error("unable to copy using execCommand: ",e),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",t),l=!0}catch(e){r&&console.error("unable to copy using clipboardData: ",e),r&&console.error("falling back to prompt"),n=format("message"in o?o.message:defaultMessage),window.prompt(n,t)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),a&&document.body.removeChild(a),e()}return l}module.exports=copy;