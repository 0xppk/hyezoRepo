'use strict';

var react = require('react');

function C(i={},d=[]){let r=react.useRef([]),[c,l]=react.useState([]),h=e=>{e&&!r.current.includes(e)&&(r.current.push(e),l(n=>[...n,!1]));},p={threshold:i.threshold||0,root:i.root||null,rootMargin:i.rootMargin||"0%",freezeAfterVisible:i.freezeAfterVisible||!1},{freezeAfterVisible:I,root:f,rootMargin:a,threshold:u}=p,b=c.every(e=>e===!0),g=e=>{e.forEach(n=>{let s=r.current.findIndex(t=>t===n.target);s!==-1&&l(t=>{let o=[...t];return o[s]=I&&o[s]||n.isIntersecting,o});});};return react.useEffect(()=>{let e=r?.current;if(!!!globalThis.IntersectionObserver||!e[0]||b)return;let s={threshold:u,root:f,rootMargin:a},t=new IntersectionObserver(g,s);return e.forEach(o=>t.observe(o)),()=>t.disconnect()},[r,u,f,a,b,...d]),console.log(c),[h,c]}

exports.a = C;
