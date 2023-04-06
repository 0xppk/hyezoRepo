import { a } from './chunk-KFTDJPLF.mjs';
import { useRef } from 'react';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

function i(){let e=useRef(null);return a("pointermove",r=>{let{pageX:l,pageY:n}=r;e.current!==null&&e.current?.animate({left:`${l}px`,top:`${n}px`},{duration:2e3,fill:"forwards"});}),jsxs(Fragment,{children:[jsx("div",{className:"bg-blur"}),jsx("div",{ref:e,className:"blob animate-rot"})]})}

export { i as a };
