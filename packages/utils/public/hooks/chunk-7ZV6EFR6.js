'use strict';

var react = require('react');

function d(n){let a=e=>typeof window<"u"?window.matchMedia(e).matches:!1,[i,s]=react.useState(a(n));function t(){s(a(n));}return react.useEffect(()=>{let e=window.matchMedia(n);return t(),e.addListener?e.addListener(t):e.addEventListener("change",t),()=>{e.removeListener?e.removeListener(t):e.removeEventListener("change",t);}},[n]),i}var f=d;

exports.a = f;
