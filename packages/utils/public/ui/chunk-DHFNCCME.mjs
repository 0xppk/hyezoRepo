import { g, c, a } from './chunk-QM37UXGK.mjs';
import { a as a$1 } from './chunk-MZUKW3DH.mjs';
import R from 'fuse.js';
import { useId, useRef } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';
import { jsxs, jsx } from 'react/jsx-runtime';

function H({data:o,setData:s,labelKeys:d,debounceTime:b=300,placeholder:x="",className:k,history:g$1}){let[l,v,y]=g("search",[]),w=useId(),S=new R(o,{includeScore:!0,minMatchCharLength:2,threshold:.3,keys:d}),a$2=async e=>{let L=e===""?o:S.search(e).map(r=>({...r.item}));s(L),v(r=>[...new Set([e,...r])]);},[,N,T,C]=c(a$2,b),n=useRef(null),i=useRef(null);return a("keypress",e=>{e.key==="Enter"&&i.current?.click();},n),jsxs("div",{className:"relative flex max-w-max items-center",children:[jsx("button",{ref:i,onClick:()=>{T(),n.current?.value&&(n.current.value="");},className:"pointer-events-none absolute z-10 flex h-10 items-center py-2 pl-3 text-black/70 hover:text-black/90",children:jsx(RiSearchLine,{className:"h-5 w-5"})}),jsx("input",{type:"text",spellCheck:"false",ref:n,className:a$1(`text-smoke-500 h-10 resize-none rounded-full bg-white/20 py-2 pl-10 pr-10 caret-orange-500 saturate-150 backdrop-blur-md placeholder:text-white/40 focus:outline-none ${k}`),placeholder:x,onChange:N}),jsx("button",{className:"absolute right-0 flex h-10 items-center justify-center rounded-full py-2 pr-3 font-medium text-black/30 outline-none duration-300 hover:scale-125 hover:text-black",onClick:()=>{C(),y(),s(o),n.current?.value&&(n.current.value="");},children:jsx(TiDelete,{className:"h-4 w-4"})}),g$1&&jsxs("div",{className:`absolute inset-x-0 -bottom-9 line-clamp-1 flex w-full items-center gap-4 overflow-x-auto text-xs text-white/30 duration-200 ${l[0]?"opacity-100":"opacity-0"}`,children:[jsx(HiChevronRight,{className:"h-4 w-4 shrink-0"}),l.map(e=>jsx("span",{className:"cursor-pointer",onClick:()=>a$2(e),children:e},w))]})]})}

export { H as a };
