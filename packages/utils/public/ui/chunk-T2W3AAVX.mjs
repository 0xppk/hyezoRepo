import { c, a } from './chunk-KFTDJPLF.mjs';
import { a as a$1 } from './chunk-MZUKW3DH.mjs';
import { useRef } from 'react';
import y from 'fuse.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function x({data:n,setData:a$2,labelKeys:i,debounceTime:f=300,placeholder:p="",className:b}){let d=new y(n,{includeScore:!0,keys:i}),m=async t=>{let k=t===""?n:d.search(t).map(v=>({...v.item}));a$2(k);},[S,h,g]=c(m,f),e=useRef(null),r=useRef(null);return a("keypress",t=>{t.key==="Enter"&&r.current?.click();},e),jsxs("div",{className:"relative flex max-w-max",children:[jsx("input",{type:"text",spellCheck:"false",ref:e,className:a$1(`h-10 resize-none rounded-full border border-black py-2 pl-3 pr-12 leading-5 text-black caret-blue-800 focus:outline-none ${b}`),placeholder:p,onChange:h}),jsx("button",{ref:r,className:"itmes-center absolute right-0 top-0 flex h-full items-center justify-center rounded-full rounded-l-none border bg-black px-4 py-2 font-medium outline-none duration-300 hover:border-black hover:bg-transparent hover:bg-white hover:text-black focus:bg-transparent focus:font-bold focus:text-black focus:ring-1 focus:ring-black disabled:cursor-not-allowed dark:hover:bg-transparent",onClick:()=>{e.current?.value&&(g(),e.current.value="");},children:"?"})]})}

export { x as a };
