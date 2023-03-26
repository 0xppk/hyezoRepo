'use strict';

var chunkESYWQ27G_js = require('./chunk-ESYWQ27G.js');
var react = require('react');

function M(n,t,i,o){let d=react.useRef(t);chunkESYWQ27G_js.a(()=>{d.current=t;},[t]),react.useEffect(()=>{let e=i?.current??window;if(!(e&&e.addEventListener))return;let s=r=>d.current(r);return e.addEventListener(n,s,o),()=>{e.removeEventListener(n,s,o);}},[n,i,o]);}var L=M;

exports.a = L;
