"use strict";var NODE_ENV="production",invariant=function(n,r,e,i,o,a,t,d){if(!n){var f;if(void 0===r)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[e,i,o,a,t,d],u=0;(f=new Error(r.replace(/%s/g,function(){return s[u++]}))).name="Invariant Violation"}throw f.framesToPop=1,f}};module.exports=invariant;