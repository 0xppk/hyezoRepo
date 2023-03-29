'use strict';

var chunkGTFUAZUN_js = require('./chunk-GTFUAZUN.js');
var c = require('next/image');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var c__default = /*#__PURE__*/_interopDefault(c);

function u({columns:e,src:t}){let n=react.useMemo(()=>g(t),[t]),r=react.useMemo(()=>p(e,n),[e,n]);return jsxRuntime.jsx(jsxRuntime.Fragment,{children:r.map((s,i)=>jsxRuntime.jsx("div",{"data-col-index":i,className:"masonryColumn",children:s.map(o=>jsxRuntime.jsxs("div",{className:"masonryImageWrapper",children:[jsxRuntime.jsx("div",{className:"masonryOverlay z-10",children:o.title}),jsxRuntime.jsx(d,{src:o.src,alt:o.title,width:9999,height:9999})]},o.id))},i))})}function g(e){return e.reduce((t,n,r)=>{let s={id:r,title:`Image ${r+1}`,src:n};return [...t,s]},[])}function p(e,t){let n=Array.from({length:e},(r,s)=>[]);for(let r=0;r<t.length;r++){let s=r%e;n[s].push(t[r]);}return n}function d({...e}){let[t,n]=chunkGTFUAZUN_js.f();return jsxRuntime.jsx(c__default.default,{...e,ref:t,className:`transform-gpu duration-1000 will-change-transform ${n?"opacity-1 translate-y-0 scale-100":"translate-y-20 scale-50 opacity-0"}`})}

exports.a = u;
