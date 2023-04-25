'use strict';

var chunkRWE2HM5I_js = require('./chunk-RWE2HM5I.js');
var chunkRDCO23OZ_js = require('./chunk-RDCO23OZ.js');
var R = require('fuse.js');
var react = require('react');
var hi = require('react-icons/hi');
var ri = require('react-icons/ri');
var ti = require('react-icons/ti');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var R__default = /*#__PURE__*/_interopDefault(R);

function H({data:o,setData:s,labelKeys:d,debounceTime:b=300,placeholder:x="",className:k,history:g}){let[l,v,y]=chunkRWE2HM5I_js.g("search",[]),w=react.useId(),S=new R__default.default(o,{includeScore:!0,minMatchCharLength:2,threshold:.3,keys:d}),a=async e=>{let L=e===""?o:S.search(e).map(r=>({...r.item}));s(L),v(r=>[...new Set([e,...r])]);},[,N,T,C]=chunkRWE2HM5I_js.c(a,b),n=react.useRef(null),i=react.useRef(null);return chunkRWE2HM5I_js.a("keypress",e=>{e.key==="Enter"&&i.current?.click();},n),jsxRuntime.jsxs("div",{className:"relative flex max-w-max items-center",children:[jsxRuntime.jsx("button",{ref:i,onClick:()=>{T(),n.current?.value&&(n.current.value="");},className:"pointer-events-none absolute z-10 flex h-10 items-center py-2 pl-3 text-black/70 hover:text-black/90",children:jsxRuntime.jsx(ri.RiSearchLine,{className:"h-5 w-5"})}),jsxRuntime.jsx("input",{type:"text",spellCheck:"false",ref:n,className:chunkRDCO23OZ_js.a(`text-smoke-500 h-10 resize-none rounded-full bg-white/20 py-2 pl-10 pr-10 caret-orange-500 saturate-150 backdrop-blur-md placeholder:text-white/40 focus:outline-none ${k}`),placeholder:x,onChange:N}),jsxRuntime.jsx("button",{className:"absolute right-0 flex h-10 items-center justify-center rounded-full py-2 pr-3 font-medium text-black/30 outline-none duration-300 hover:scale-125 hover:text-black",onClick:()=>{C(),y(),s(o),n.current?.value&&(n.current.value="");},children:jsxRuntime.jsx(ti.TiDelete,{className:"h-4 w-4"})}),g&&jsxRuntime.jsxs("div",{className:`absolute inset-x-0 -bottom-9 line-clamp-1 flex w-full items-center gap-4 overflow-x-auto text-xs text-white/30 duration-200 ${l[0]?"opacity-100":"opacity-0"}`,children:[jsxRuntime.jsx(hi.HiChevronRight,{className:"h-4 w-4 shrink-0"}),l.map(e=>jsxRuntime.jsx("span",{className:"cursor-pointer",onClick:()=>a(e),children:e},w))]})]})}

exports.a = H;
