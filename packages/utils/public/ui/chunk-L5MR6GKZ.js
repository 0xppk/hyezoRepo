'use strict';

var jsxRuntime = require('react/jsx-runtime');

function l({wrapperClassName:s,textClassName:a,borderClassName:t,children:r}){return jsxRuntime.jsxs("div",{className:`relative w-full ${s}`,children:[jsxRuntime.jsx("div",{className:"absolute inset-0 flex items-center",children:jsxRuntime.jsx("span",{className:`w-full border-t ${t??"border-white"}`})}),jsxRuntime.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:jsxRuntime.jsx("span",{className:`px-2 ${a??"bg-slate-900 text-gray-200"}`,children:r})})]})}

exports.a = l;
