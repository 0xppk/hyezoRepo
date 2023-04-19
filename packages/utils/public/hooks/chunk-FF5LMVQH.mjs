import { useState, useEffect } from 'react';

function i(t,e){return s(t,e,globalThis.localStorage)}function S(t,e){return s(t,e,globalThis.sessionStorage)}function s(t,e,o){let[n,u]=useState(()=>{if(typeof window>"u")return e;try{let r=o.getItem(t);return r?JSON.parse(r):e instanceof Function?e():e}catch(r){return console.error(r),e}});return useEffect(()=>{typeof window<"u"&&o.setItem(t,JSON.stringify(n));},[t,n,o]),[n,u]}

export { i as a, S as b, s as c };
