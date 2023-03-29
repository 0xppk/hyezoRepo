'use strict';

var react = require('react');

function E(e={},u=[]){let r=react.useRef(null),[s,a]=react.useState(!1),[d,v]=react.useState(),I={threshold:e.threshold||0,root:e.root||null,rootMargin:e.rootMargin||"0%",freezeAfterVisible:e.freezeAfterVisible||!1},{freezeAfterVisible:O,root:o,rootMargin:i,threshold:c}=I,l=s&&O,h=t=>{let[n]=t;v(n),a(n.isIntersecting);};return react.useEffect(()=>{let t=r?.current;if(!!!globalThis.IntersectionObserver||l||!t)return;let p={threshold:c,root:o,rootMargin:i},f=new IntersectionObserver(h,p);return f.observe(t),()=>f.disconnect()},[r,c,o,i,l,...u]),[r,s,d]}

exports.a = E;
