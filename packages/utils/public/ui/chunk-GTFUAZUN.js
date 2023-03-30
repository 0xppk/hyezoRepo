'use strict';

var react = require('react');
var lodash = require('lodash');
var zod = require('@hookform/resolvers/zod');
var reactHookForm = require('react-hook-form');

var R=typeof window<"u"?react.useLayoutEffect:react.useEffect,M=R;function C(e,n,o,t){let r=react.useRef(n);M(()=>{r.current=n;},[n]),react.useEffect(()=>{let s=o?.current??window;if(!(s&&s.addEventListener))return;let u=f=>r.current(f);return s.addEventListener(e,u,t),()=>{s.removeEventListener(e,u,t);}},[e,o,t]);}var c=C;function l(e){react.useEffect(e,[]);}function L(e,n=300){let[o,t]=react.useState(""),r=react.useCallback(lodash.debounce(i=>t(i),n),[n]),s=i=>r(i.target.value),u=react.useCallback(()=>{t(""),!(typeof e>"u")&&e(o);},[e,o]);return [o,s,u,()=>t("")]}function O({schema:e,...n}){return reactHookForm.useForm({...n,resolver:zod.zodResolver(e)})}function y(e){let[n,o]=react.useState({});return l(()=>{if(e?.current==null)return;let t=new ResizeObserver(([r])=>o(r.contentRect));return t.observe(e.current),()=>t.disconnect()}),n}function I(e={},n=[]){let o=react.useRef(null),[t,r]=react.useState(!1),[s,u]=react.useState(),f={threshold:e.threshold||0,root:e.root||null,rootMargin:e.rootMargin||"0%",freezeAfterVisible:e.freezeAfterVisible||!1},{freezeAfterVisible:i,root:p,rootMargin:m,threshold:v}=f,E=t&&i,H=a=>{let[d]=a;u(d),r(d.isIntersecting);};return react.useEffect(()=>{let a=o?.current;if(!!!globalThis.IntersectionObserver||E||!a)return;let h={threshold:v,root:p,rootMargin:m},x=new IntersectionObserver(H,h);return x.observe(a),()=>x.disconnect()},[o,v,p,m,E,...n]),[o,t,s]}function Z(e,n,o="mousedown"){c(o,t=>{let r=e?.current;!r||r.contains(t.target)||n(t);});}var Q=Z;

exports.a = c;
exports.b = Q;
exports.c = L;
exports.d = O;
exports.e = y;
exports.f = I;
