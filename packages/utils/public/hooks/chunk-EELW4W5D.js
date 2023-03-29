'use strict';

var react = require('react');

function s(e,t){let[u,n]=react.useState(e);return react.useEffect(()=>{let o=setTimeout(()=>n(e),t||500);return ()=>{clearTimeout(o);}},[e,t]),u}var m=s;

exports.a = m;
