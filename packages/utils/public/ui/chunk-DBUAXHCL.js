'use strict';

var chunk5BC2ANPS_js = require('./chunk-5BC2ANPS.js');
var chunkRDCO23OZ_js = require('./chunk-RDCO23OZ.js');
var reactHookForm = require('react-hook-form');
var jsxRuntime = require('react/jsx-runtime');

function n({label:o,name:r,className:l,...i}){let{register:s}=reactHookForm.useFormContext();return jsxRuntime.jsxs("label",{children:[jsxRuntime.jsx("div",{className:"mb-1 font-medium text-gray-800 dark:text-gray-200",children:o}),jsxRuntime.jsx("textarea",{className:chunkRDCO23OZ_js.a(`w-full resize-none rounded-md border bg-white px-4 py-2 text-gray-800 focus:outline-none disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200 ${l}`),spellCheck:!1,placeholder:"\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694",...i,...s(r)}),jsxRuntime.jsx("div",{className:"pl-3 pt-2",children:jsxRuntime.jsx(chunk5BC2ANPS_js.b,{name:r})})]})}

exports.a = n;
