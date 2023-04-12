'use strict';

var chunkGTFUAZUN_js = require('./chunk-GTFUAZUN.js');
var d = require('next/image');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var d__default = /*#__PURE__*/_interopDefault(d);

function s({children:a}){let e=react.useRef(null);return chunkGTFUAZUN_js.a("mousemove",t=>{if(!(!e.current||e.current.dataset.mouseDownAt==="0")&&e.current.dataset.mouseDownAt&&e.current.dataset.prevPercentage){let c=parseFloat(e.current.dataset.mouseDownAt)-t.clientX,i=globalThis.innerWidth/2,u=c/i*-100,n=Math.min(Math.max(parseFloat(e.current.dataset.prevPercentage)+u,-100),0);e.current.dataset.percentage=String(n),e.current.animate({transform:`translate(${n}%, -50%)`},{duration:2e3,fill:"forwards"});for(let l of e.current.children)l?.animate({objectPosition:`${100+n}% center`},{duration:2e3,fill:"forwards"});}}),chunkGTFUAZUN_js.a("mousedown",t=>{e.current!==null&&(e.current.dataset.mouseDownAt=String(t.clientX));}),chunkGTFUAZUN_js.a("mouseup",t=>{e.current!==null&&(e.current.dataset.mouseDownAt="0",e.current.dataset.prevPercentage=e.current.dataset.percentage);}),jsxRuntime.jsx("div",{ref:e,className:"slider","data-mouse-down-at":"0","data-prev-percentage":"0",children:a})}s.image=({src:a,...e})=>jsxRuntime.jsx(d__default.default,{src:a,draggable:"false",className:`slider-image select-none ${e.className}`,...e});

exports.a = s;
