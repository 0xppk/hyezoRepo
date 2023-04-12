'use strict';

var react = require('react');

function K(p=new Map){let[o,t]=react.useState(new Map(p)),c={set:react.useCallback((e,s)=>{t(n=>{let a=new Map(n);return a.set(e,s),a});},[]),setAll:react.useCallback(e=>{t(()=>new Map(e));},[]),remove:react.useCallback(e=>{t(s=>{let n=new Map(s);return n.delete(e),n});},[]),reset:react.useCallback(()=>{t(()=>new Map);},[])};return [o,c]}var V=K;

exports.a = V;
