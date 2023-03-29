import { useState, useCallback } from 'react';

function K(p=new Map){let[o,t]=useState(new Map(p)),c={set:useCallback((e,s)=>{t(n=>{let a=new Map(n);return a.set(e,s),a});},[]),setAll:useCallback(e=>{t(()=>new Map(e));},[]),remove:useCallback(e=>{t(s=>{let n=new Map(s);return n.delete(e),n});},[]),reset:useCallback(()=>{t(()=>new Map);},[])};return [o,c]}var V=K;

export { V as a };
