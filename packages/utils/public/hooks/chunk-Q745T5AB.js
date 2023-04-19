'use strict';

var react = require('react');

function i(t,e){return s(t,e,globalThis.localStorage)}function S(t,e){return s(t,e,globalThis.sessionStorage)}function s(t,e,o){let[n,u]=react.useState(()=>{if(typeof window>"u")return e;try{let r=o.getItem(t);return r?JSON.parse(r):e instanceof Function?e():e}catch(r){return console.error(r),e}});return react.useEffect(()=>{typeof window<"u"&&o.setItem(t,JSON.stringify(n));},[t,n,o]),[n,u]}

exports.a = i;
exports.b = S;
exports.c = s;
