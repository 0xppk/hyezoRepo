'use strict';

var react = require('react');

function d(r,e){return u(r,e,globalThis.localStorage)}function g(r,e){return u(r,e,globalThis.sessionStorage)}function u(r,e,t){let[o,s]=react.useState(()=>{if(typeof window>"u")return e;try{let n=t.getItem(r);return n?JSON.parse(n):e instanceof Function?e():e}catch(n){return console.error(n),e}});return react.useEffect(()=>{typeof window<"u"&&o!==void 0&&t.setItem(r,JSON.stringify(o));},[r,o,t]),[o,s,()=>{t.removeItem(r),s(e);}]}

exports.a = d;
exports.b = g;
exports.c = u;
