'use strict';

var react = require('react');

function s(e){let[o,t]=react.useState(!!e),a=react.useCallback(()=>t(l=>!l),[]);return [o,a,t]}

exports.a = s;
