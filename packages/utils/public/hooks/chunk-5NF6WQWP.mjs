import { a as a$3 } from './chunk-BY5VY7H3.mjs';
import { a } from './chunk-NI22WTLA.mjs';
import { a as a$2 } from './chunk-67VIPO4K.mjs';
import { a as a$1 } from './chunk-YVFEJN7M.mjs';
import { useRef, useEffect } from 'react';

var c={headers:{"Content-Type":"application/json"}};function i(t,e=[],r={}){return a(async()=>await(await fetch(t,{...c,...r})).json(),e)}function d(t,e){let r=useRef(t);a$1(()=>{r.current=t;},[t]),useEffect(()=>{if(!e&&e!==0)return;let o=setTimeout(()=>r.current(),e);return ()=>clearTimeout(o)},[e]);}var l=d;function x(t,e,r="mousedown"){a$2(r,o=>{let u=t?.current;!u||u.contains(o.target)||e(o);});}var E=x;function T(t,e){let r=useRef(t);a$1(()=>{r.current=t;},[t]),useEffect(()=>{if(!e&&e!==0)return;let o=setInterval(()=>r.current(),e);return ()=>clearInterval(o)},[e]);}var C=T;function M(t,e){let r=a$3();useEffect(()=>{if(!r)return t()},e);}var O=M;

export { O as a, i as b, l as c, E as d, C as e };
