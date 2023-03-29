'use strict';

var react = require('react');

function u(){let e=react.useRef(1);return react.useEffect(()=>{e.current++;}),e.current}

exports.a = u;
