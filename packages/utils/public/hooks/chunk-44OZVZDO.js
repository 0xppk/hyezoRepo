'use strict';

var react = require('react');

function c(e,n){return r(e,n,globalThis.localStorage)}function g(e,n){return r(e,n,globalThis.sessionStorage)}function r(e,n,t){let[o,s]=react.useState(()=>{let i=t.getItem(e);if(i!=null&&JSON.parse(i),typeof n=="function")n();else return n});react.useEffect(()=>{o===void 0&&t.removeItem(e),t.setItem(e,JSON.stringify(o));},[e,o,t]);let u=react.useCallback(()=>{s(void 0);},[]);return [o,s,u]}

exports.a = c;
exports.b = g;
