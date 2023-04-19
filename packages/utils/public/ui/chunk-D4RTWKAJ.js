'use strict';

var chunkJXVHRG3Y_js = require('./chunk-JXVHRG3Y.js');
var chunk5BC2ANPS_js = require('./chunk-5BC2ANPS.js');
var chunkRDCO23OZ_js = require('./chunk-RDCO23OZ.js');
var cva = require('cva');
var react = require('react');
var reactHookForm = require('react-hook-form');
var jsxRuntime = require('react/jsx-runtime');

function i({children:e,...r}){let{formState:t}=reactHookForm.useFormContext();return jsxRuntime.jsxs(chunkJXVHRG3Y_js.a,{type:"submit",disabled:t.isSubmitting,...r,children:[t.isSubmitting&&jsxRuntime.jsxs("svg",{className:"-ml-1 mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[jsxRuntime.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),jsxRuntime.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),e]})}var B=cva.cva("peer w-full duration-300 rounded-lg border bg-white text-gray-800 focus:outline-0 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200",{variants:{color:{twitter:"focus:border-twitter-600",orange:"focus:border-orange-300",pink:"focus:border-rose-300",darkNavy:"border-gray-800 text-white/80 placeholder:text-gray-600 bg-gray-900 hover:border-gray-700/70 "},peer:{true:"peer p-4 pb-1",false:"px-3 py-2"}},defaultVariants:{color:"twitter",peer:!0}});function m({label:e,type:r="text",name:t,placeholder:d=" ",color:c,fullWidth:x,className:y,...g}){let{register:b,setFocus:s,formState:{isDirty:l}}=reactHookForm.useFormContext(),h=!!e;return react.useEffect(()=>{l||s(t);},[l,s]),jsxRuntime.jsxs("div",{className:`relative ${x?"w-full":""}`,children:[jsxRuntime.jsx("input",{spellCheck:!1,className:chunkRDCO23OZ_js.a(B({color:c,peer:h,className:y})),type:r,placeholder:d??" ",...g,...b(t)}),e&&jsxRuntime.jsx("label",{htmlFor:e,className:"pointer-events-none absolute -top-1 left-3 z-0 origin-[0] scale-75 text-sm text-gray-400 decoration-orange-600 decoration-wavy decoration-1 underline-offset-4 duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:underline sm:translate-y-1 sm:peer-focus:translate-y-1 md:translate-y-0 md:peer-focus:translate-y-0",children:e}),jsxRuntime.jsx(chunk5BC2ANPS_js.b,{name:t})]})}

exports.a = m;
exports.b = i;
