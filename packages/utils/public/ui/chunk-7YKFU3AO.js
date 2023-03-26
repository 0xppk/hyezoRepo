'use strict';

var chunkGTFUAZUN_js = require('./chunk-GTFUAZUN.js');
var chunkXF6XT5XA_js = require('./chunk-XF6XT5XA.js');
var reactHookForm = require('react-hook-form');
var zod = require('zod');
var jsxRuntime = require('react/jsx-runtime');

var f=zod.z.object({email:zod.z.string().email(),password:zod.z.string().min(8,"More than 8 characters"),url:zod.z.string().url("Starts with: https://www."),textarea:zod.z.string(),text:zod.z.string(),select:zod.z.union([zod.z.string(),zod.z.number()]).or(zod.z.array(zod.z.union([zod.z.string(),zod.z.number()]))).or(zod.z.record(zod.z.any())),combo:zod.z.string()}).partial();function c({onSubmit:o,className:n,...t}){let i=chunkGTFUAZUN_js.d({schema:f}),{formState:a,handleSubmit:p}=i;return jsxRuntime.jsx(reactHookForm.FormProvider,{...i,children:jsxRuntime.jsx("form",{onSubmit:p(o),children:jsxRuntime.jsx("fieldset",{className:chunkXF6XT5XA_js.a(`flex flex-col gap-2 disabled:cursor-progress ${n}`),disabled:a.isSubmitting,...t,children:t.children})})})}function P({name:o}){let{formState:{errors:n}}=reactHookForm.useFormContext();if(!o)return null;let t=n[o];return t?jsxRuntime.jsx("span",{children:t.message}):null}

exports.a = c;
exports.b = P;
