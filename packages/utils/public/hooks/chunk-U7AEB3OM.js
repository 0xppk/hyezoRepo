'use strict';

var react = require('react');

function a(){let[t,e]=react.useState(null);return [t,async o=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(o),e(o),!0}catch(r){return console.warn("Copy failed",r),e(null),!1}}]}var l=a;

exports.a = l;
