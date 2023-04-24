'use strict';

var chunkGTFUAZUN_js = require('./chunk-GTFUAZUN.js');
var chunkRDCO23OZ_js = require('./chunk-RDCO23OZ.js');
var react = require('react');
var y = require('fuse.js');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var y__default = /*#__PURE__*/_interopDefault(y);

function x({data:n,setData:a,labelKeys:i,debounceTime:f=300,placeholder:p="",className:b}){let d=new y__default.default(n,{includeScore:!0,keys:i}),m=async t=>{let k=t===""?n:d.search(t).map(v=>({...v.item}));a(k);},[S,h,g]=chunkGTFUAZUN_js.c(m,f),e=react.useRef(null),r=react.useRef(null);return chunkGTFUAZUN_js.a("keypress",t=>{t.key==="Enter"&&r.current?.click();},e),jsxRuntime.jsxs("div",{className:"relative flex max-w-max",children:[jsxRuntime.jsx("input",{type:"text",spellCheck:"false",ref:e,className:chunkRDCO23OZ_js.a(`h-10 resize-none rounded-full border border-black py-2 pl-3 pr-12 leading-5 text-black caret-blue-800 focus:outline-none ${b}`),placeholder:p,onChange:h}),jsxRuntime.jsx("button",{ref:r,className:"itmes-center absolute right-0 top-0 flex h-full items-center justify-center rounded-full rounded-l-none border bg-black px-4 py-2 font-medium outline-none duration-300 hover:border-black hover:bg-transparent hover:bg-white hover:text-black focus:bg-transparent focus:font-bold focus:text-black focus:ring-1 focus:ring-black disabled:cursor-not-allowed dark:hover:bg-transparent",onClick:()=>{e.current?.value&&(g(),e.current.value="");},children:"?"})]})}

exports.a = x;
