import { a } from './chunk-YVFEJN7M.mjs';
import { useRef, useEffect } from 'react';

function M(n,t,i,o){let d=useRef(t);a(()=>{d.current=t;},[t]),useEffect(()=>{let e=i?.current??window;if(!(e&&e.addEventListener))return;let s=r=>d.current(r);return e.addEventListener(n,s,o),()=>{e.removeEventListener(n,s,o);}},[n,i,o]);}var L=M;

export { L as a };
