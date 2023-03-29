import { useState, useEffect } from 'react';

function d(n){let a=e=>typeof window<"u"?window.matchMedia(e).matches:!1,[i,s]=useState(a(n));function t(){s(a(n));}return useEffect(()=>{let e=window.matchMedia(n);return t(),e.addListener?e.addListener(t):e.addEventListener("change",t),()=>{e.removeListener?e.removeListener(t):e.removeEventListener("change",t);}},[n]),i}var f=d;

export { f as a };
