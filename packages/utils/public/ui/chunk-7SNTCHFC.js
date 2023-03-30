'use strict';

var chunkXF6XT5XA_js = require('./chunk-XF6XT5XA.js');
var cva = require('cva');
var jsxRuntime = require('react/jsx-runtime');

var n=cva.cva("",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-md",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl"},weight:{light:"font-light",normal:"font-medium",semibold:"font-semibold",bold:"font-bold"}},defaultVariants:{size:"sm",weight:"normal"}});function p({variant:e,children:o,className:s,...l}){let[i,r]=e.split("/");return jsxRuntime.jsx("div",{className:chunkXF6XT5XA_js.a(n({size:i,weight:r,className:s})),...l,children:o})}

exports.a = p;
