'use strict';

var chunkRWE2HM5I_js = require('./chunk-RWE2HM5I.js');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function i(){let e=react.useRef(null);return chunkRWE2HM5I_js.a("pointermove",r=>{let{pageX:l,pageY:n}=r;e.current!==null&&e.current?.animate({left:`${l}px`,top:`${n}px`},{duration:2e3,fill:"forwards"});}),jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx("div",{className:"bg-blur"}),jsxRuntime.jsx("div",{ref:e,className:"blob animate-rot"})]})}

exports.a = i;
