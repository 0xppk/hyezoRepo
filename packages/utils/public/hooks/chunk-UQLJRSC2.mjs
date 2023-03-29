import { useState, useEffect, useCallback } from 'react';

function c(e,n){return r(e,n,globalThis.localStorage)}function g(e,n){return r(e,n,globalThis.sessionStorage)}function r(e,n,t){let[o,s]=useState(()=>{let i=t.getItem(e);if(i!=null&&JSON.parse(i),typeof n=="function")n();else return n});useEffect(()=>{o===void 0&&t.removeItem(e),t.setItem(e,JSON.stringify(o));},[e,o,t]);let u=useCallback(()=>{s(void 0);},[]);return [o,s,u]}

export { c as a, g as b };
