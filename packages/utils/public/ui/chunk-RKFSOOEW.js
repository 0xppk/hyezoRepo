'use strict';

var react = require('@headlessui/react');
var jsxRuntime = require('react/jsx-runtime');

function n({enabled:o,setEnabled:a,passive:i,children:l}){return jsxRuntime.jsxs(react.Switch.Group,{children:[jsxRuntime.jsx(react.Switch.Label,{passive:i,children:l}),jsxRuntime.jsx(react.Switch,{checked:o,onChange:a,className:"ui-checked:bg-twitter-500 relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300",children:jsxRuntime.jsx("span",{className:"ui-checked:translate-x-7 ui-not-checked:translate-x-1 inline-block h-6 w-6 rounded-full bg-white duration-300"})})]})}

exports.a = n;
