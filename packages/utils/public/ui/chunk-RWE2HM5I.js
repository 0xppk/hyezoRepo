'use strict';

var react = require('react');
var lodash = require('lodash');
var zod = require('@hookform/resolvers/zod');
var reactHookForm = require('react-hook-form');

var K=typeof window<"u"?react.useLayoutEffect:react.useEffect,M=K;function z(e,t,o,n){let r=react.useRef(t);M(()=>{r.current=t;},[t]),react.useEffect(()=>{let u=o?.current??window;if(!(u&&u.addEventListener))return;let s=i=>r.current(i);return u.addEventListener(e,s,n),()=>{u.removeEventListener(e,s,n);}},[e,o,n]);}var c=z;function l(e){react.useEffect(e,[]);}function b(e,t=300){let[o,n]=react.useState(""),r=react.useCallback(lodash.debounce(f=>n(f),t),[t]),u=f=>r(f.target.value),s=react.useCallback(()=>{n(""),!(typeof e>"u")&&e(o);},[e,o]);return [o,u,s,()=>n("")]}function L({schema:e,...t}){return reactHookForm.useForm({...t,resolver:zod.zodResolver(e)})}function y(e){let[t,o]=react.useState({});return l(()=>{if(e?.current==null)return;let n=new ResizeObserver(([r])=>o(r.contentRect));return n.observe(e.current),()=>n.disconnect()}),t}function g(e={},t=[]){let o=react.useRef(null),[n,r]=react.useState(!1),[u,s]=react.useState(),i={threshold:e.threshold||0,root:e.root||null,rootMargin:e.rootMargin||"0%",freezeAfterVisible:e.freezeAfterVisible||!1},{freezeAfterVisible:f,root:p,rootMargin:m,threshold:v}=i,E=n&&f,I=a=>{let[d]=a;s(d),r(d.isIntersecting);};return react.useEffect(()=>{let a=o?.current;if(!!!globalThis.IntersectionObserver||E||!a)return;let S={threshold:v,root:p,rootMargin:m},x=new IntersectionObserver(I,S);return x.observe(a),()=>x.disconnect()},[o,v,p,m,E,...t]),[o,n,u]}function N(e,t){return P(e,t,globalThis.localStorage)}function P(e,t,o){let[n,r]=react.useState(()=>{if(typeof window>"u")return t;try{let s=o.getItem(e);return s?JSON.parse(s):t instanceof Function?t():t}catch(s){return console.error(s),t}});return react.useEffect(()=>{typeof window<"u"&&n!==void 0&&o.setItem(e,JSON.stringify(n));},[e,n,o]),[n,r,()=>{o.removeItem(e),r(t);}]}function J(e,t,o="mousedown"){c(o,n=>{let r=e?.current;!r||r.contains(n.target)||t(n);});}var U=J;

exports.a = c;
exports.b = U;
exports.c = b;
exports.d = L;
exports.e = y;
exports.f = g;
exports.g = N;
