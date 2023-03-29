'use strict';

var chunkWDTSORHX_js = require('./chunk-WDTSORHX.js');
var chunkX3TNI256_js = require('./chunk-X3TNI256.js');
var chunkGF55KYF4_js = require('./chunk-GF55KYF4.js');
var chunkESYWQ27G_js = require('./chunk-ESYWQ27G.js');
var react = require('react');

var c={headers:{"Content-Type":"application/json"}};function i(t,e=[],r={}){return chunkX3TNI256_js.a(async()=>await(await fetch(t,{...c,...r})).json(),e)}function d(t,e){let r=react.useRef(t);chunkESYWQ27G_js.a(()=>{r.current=t;},[t]),react.useEffect(()=>{if(!e&&e!==0)return;let o=setTimeout(()=>r.current(),e);return ()=>clearTimeout(o)},[e]);}var l=d;function x(t,e,r="mousedown"){chunkGF55KYF4_js.a(r,o=>{let u=t?.current;!u||u.contains(o.target)||e(o);});}var E=x;function T(t,e){let r=react.useRef(t);chunkESYWQ27G_js.a(()=>{r.current=t;},[t]),react.useEffect(()=>{if(!e&&e!==0)return;let o=setInterval(()=>r.current(),e);return ()=>clearInterval(o)},[e]);}var C=T;function M(t,e){let r=chunkWDTSORHX_js.a();react.useEffect(()=>{if(!r)return t()},e);}var O=M;

exports.a = O;
exports.b = i;
exports.c = l;
exports.d = E;
exports.e = C;
