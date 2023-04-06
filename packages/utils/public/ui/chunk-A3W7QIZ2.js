'use strict';

var chunkGTFUAZUN_js = require('./chunk-GTFUAZUN.js');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function b(){let r=react.useRef(null),n=react.useRef(null),u=(a,e)=>{if(!r.current||!n.current)return;let{clientX:t,clientY:f}=a,d=t-r.current.offsetWidth/2,m=f-r.current.offsetHeight/2,g={transform:`translate(${d}px, ${m}px) scale(${e?4:1})`};r.current.animate(g,{duration:800,fill:"forwards"});};return chunkGTFUAZUN_js.a("pointermove",a=>{if(!r.current||!n.current)return;let e=a.target.closest(".interactable"),t=e!==null;u(a,t),r.current.dataset.type=t?e.dataset.type:"",r.current.className=t?c(e.dataset.type):c(),n.current.className=t?l(e.dataset.type):l();}),jsxRuntime.jsx(jsxRuntime.Fragment,{children:jsxRuntime.jsx("div",{className:"trailer",ref:r,children:jsxRuntime.jsx("div",{className:"trailer-cursor",ref:n})})})}var c=r=>{switch(r){case"link":return "trailer bg-transparent border border-blue-800";case"description":return "trailer bg-transparent opacity-0";case"title":return "";case"arrow":return "";default:return "trailer bg-white"}},l=r=>{switch(r){case"link":return "trailer-cursor bg-indigo-600/80 border border-indigo-700";case"description":return "trailer-cursor bg-indigo-600/80 border border-indigo-700";case"title":return "";case"arrow":return "";default:return "trailer-cursor bg-white"}};

exports.a = b;
