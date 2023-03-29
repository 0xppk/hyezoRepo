'use strict';

var p = require('next/link');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var p__default = /*#__PURE__*/_interopDefault(p);

function i({href:n,...r}){let e=typeof n<"u",t=jsxRuntime.jsx("button",{...r});return e?jsxRuntime.jsx(p__default.default,{href:n,target:"_blank",rel:"noopener noreferrer",children:t}):t}

exports.a = i;
