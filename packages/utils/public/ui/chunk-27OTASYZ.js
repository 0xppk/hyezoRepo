'use strict';

var chunkJXVHRG3Y_js = require('./chunk-JXVHRG3Y.js');
var chunk73S5ABK5_js = require('./chunk-73S5ABK5.js');
var react$1 = require('react');
var react = require('@headlessui/react');
var jsxRuntime = require('react/jsx-runtime');

function M({children:n}){let o=react.Menu.Button;return jsxRuntime.jsxs(react.Menu,{as:"div",className:"relative",children:[jsxRuntime.jsx(o,{as:chunkJXVHRG3Y_js.a,children:"Menu Button"}),jsxRuntime.jsx(react.Transition,{as:react$1.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:jsxRuntime.jsx(react.Menu.Items,{className:"absolute left-0 z-20 mt-2 w-56 origin-top-left rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700",children:n})})]})}function y({children:n,...o}){return jsxRuntime.jsx(react.Menu.Item,{children:({active:s})=>jsxRuntime.jsx(chunk73S5ABK5_js.a,{className:`flex w-full items-center gap-2 px-4 py-2 text-sm text-blue-400 ${s?"bg-gray-300 text-black dark:bg-gray-600":""}`,...o,children:n})})}

exports.a = M;
exports.b = y;
