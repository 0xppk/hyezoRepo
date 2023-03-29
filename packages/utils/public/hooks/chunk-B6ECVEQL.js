'use strict';

var chunk7OZBYWMU_js = require('./chunk-7OZBYWMU.js');
var react = require('react');

function u(e){let[n,c]=react.useState({});return chunk7OZBYWMU_js.a(()=>{if(e?.current==null)return;let t=new ResizeObserver(([s])=>c(s.contentRect));return t.observe(e.current),()=>t.disconnect()}),n}

exports.a = u;
