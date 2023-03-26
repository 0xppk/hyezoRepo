import { a } from './chunk-KFTDJPLF.mjs';
import d from 'next/image';
import { useRef } from 'react';
import { jsx } from 'react/jsx-runtime';

function s({children:a$1}){let e=useRef(null);return a("mousemove",t=>{if(!(e.current===null||e.current.dataset.mouseDownAt==="0")&&e.current.dataset.mouseDownAt&&e.current.dataset.prevPercentage){let c=parseFloat(e.current.dataset.mouseDownAt)-t.clientX,i=globalThis.innerWidth/2,u=c/i*-100,n=Math.min(Math.max(parseFloat(e.current.dataset.prevPercentage)+u,-100),0);e.current.dataset.percentage=String(n),e.current.animate({transform:`translate(${n}%, -50%)`},{duration:2e3,fill:"forwards"});for(let l of e.current.children)l?.animate({objectPosition:`${100+n}% center`},{duration:2e3,fill:"forwards"});}}),a("mousedown",t=>{e.current!==null&&(e.current.dataset.mouseDownAt=String(t.clientX));}),a("mouseup",t=>{e.current!==null&&(e.current.dataset.mouseDownAt="0",e.current.dataset.prevPercentage=e.current.dataset.percentage);}),jsx("div",{ref:e,className:"slider","data-mouse-down-at":"0","data-prev-percentage":"0",children:a$1})}s.image=({src:a,...e})=>jsx(d,{src:a,draggable:"false",className:`slider-image select-none ${e.className}`,...e});

export { s as a };
