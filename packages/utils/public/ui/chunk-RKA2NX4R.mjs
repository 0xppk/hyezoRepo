import { f } from './chunk-KFTDJPLF.mjs';
import c from 'next/image';
import { useMemo } from 'react';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';

function u({columns:e,src:t}){let n=useMemo(()=>g(t),[t]),r=useMemo(()=>p(e,n),[e,n]);return jsx(Fragment,{children:r.map((s,i)=>jsx("div",{"data-col-index":i,className:"masonryColumn",children:s.map(o=>jsxs("div",{className:"masonryImageWrapper",children:[jsx("div",{className:"masonryOverlay z-10",children:o.title}),jsx(d,{src:o.src,alt:o.title,width:9999,height:9999})]},o.id))},i))})}function g(e){return e.reduce((t,n,r)=>{let s={id:r,title:`Image ${r+1}`,src:n};return [...t,s]},[])}function p(e,t){let n=Array.from({length:e},(r,s)=>[]);for(let r=0;r<t.length;r++){let s=r%e;n[s].push(t[r]);}return n}function d({...e}){let[t,n]=f();return jsx(c,{...e,ref:t,className:`transform-gpu duration-1000 will-change-transform ${n?"opacity-1 translate-y-0 scale-100":"translate-y-20 scale-50 opacity-0"}`})}

export { u as a };
