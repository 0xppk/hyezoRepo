'use strict';

var chunkL2SEOKD5_js = require('./chunk-L2SEOKD5.js');
var chunk7YKFU3AO_js = require('./chunk-7YKFU3AO.js');
var chunkGTFUAZUN_js = require('./chunk-GTFUAZUN.js');
var chunkXF6XT5XA_js = require('./chunk-XF6XT5XA.js');
var react = require('react');
var zod = require('zod');
var cva = require('cva');
var reactHookForm = require('react-hook-form');
var jsxRuntime = require('react/jsx-runtime');

var S=cva.cva("peer z-20 w-full appearance-none duration-300 rounded-md border bg-white p-4 pb-1 text-gray-800 focus:ring-2 focus:outline-none disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200",{variants:{color:{twitter:"focus:border-twitter-600 focus:ring-twitter-500",orange:"focus:border-orange-300 focus:ring-orange-200",pink:"focus:border-rose-300 focus:ring-rose-200"}},defaultVariants:{color:"pink"}});function c({label:t,type:e="text",placeholder:r=" ",color:s,fullWidth:l,className:i,...a}){let{register:h}=reactHookForm.useFormContext();return jsxRuntime.jsxs("div",{className:`relative ${l&&"w-full"}`,children:[jsxRuntime.jsx("input",{spellCheck:!1,className:chunkXF6XT5XA_js.a(S({color:s,className:i})),type:e,placeholder:" ",...a,...h(e)}),jsxRuntime.jsx("label",{htmlFor:t,className:"pointer-events-none absolute -top-1 left-3 z-0 origin-[0] scale-75 text-sm text-gray-400 decoration-orange-600 decoration-wavy decoration-1 underline-offset-4 duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:underline sm:translate-y-1 sm:peer-focus:translate-y-1 md:translate-y-0 md:peer-focus:translate-y-0",children:t}),jsxRuntime.jsx("div",{className:"pt-2 pl-2 text-xs font-semibold text-rose-500",children:jsxRuntime.jsx(chunk7YKFU3AO_js.b,{name:e})})]})}function y({children:t,...e}){let{formState:r}=reactHookForm.useFormContext();return jsxRuntime.jsxs(chunkL2SEOKD5_js.a,{type:"submit",disabled:r.isSubmitting,...e,children:[r.isSubmitting&&jsxRuntime.jsxs("svg",{className:"-ml-1 mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[jsxRuntime.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),jsxRuntime.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),t]})}zod.z.object({submitAction:zod.z.function().args(zod.z.string()).returns(zod.z.void()).optional(),debounceTime:zod.z.number().optional(),placeholder:zod.z.string({coerce:!0}).optional()});function b({submitAction:t,debounceTime:e=300,placeholder:r=""}){let[s,l,i]=chunkGTFUAZUN_js.c(t,e),a=react.useRef(null);return jsxRuntime.jsxs("div",{className:"flex",children:[jsxRuntime.jsx("input",{type:"text",spellCheck:"false",ref:a,className:"mr-2 h-10 resize-none rounded-lg border-[1px] border-black/10 px-3 py-2 leading-5 caret-rose-500",placeholder:r,onChange:l}),jsxRuntime.jsx(chunkL2SEOKD5_js.a,{onClick:()=>{a.current?.value&&(i(),a.current.value="");},disabled:s==="",children:"Btn"})]})}

exports.a = b;
exports.b = y;
exports.c = c;
