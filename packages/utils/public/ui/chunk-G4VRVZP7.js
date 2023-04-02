'use strict';

var chunkGTFUAZUN_js = require('./chunk-GTFUAZUN.js');
var chunkRDCO23OZ_js = require('./chunk-RDCO23OZ.js');
var reactHookForm = require('react-hook-form');
var zod = require('zod');
var jsxRuntime = require('react/jsx-runtime');

var f=zod.z.object({email:zod.z.string().email(),password:zod.z.string().min(8,"More than 8 characters"),url:zod.z.string().url("Starts with: https://www."),textarea:zod.z.string(),text:zod.z.string(),select:zod.z.union([zod.z.string(),zod.z.number()]).or(zod.z.array(zod.z.union([zod.z.string(),zod.z.number()]))).or(zod.z.record(zod.z.any())),combo:zod.z.string(),nickname:zod.z.string().min(2,"\uB108\uBB34 \uC9E7\uC544\uC694 \u{1F622}").max(10,"\uB2C9\uB124\uC784\uC740 2~10\uC790 \uC0AC\uC774\uC758 \uAE38\uC774\uB85C \uC9C0\uC5B4\uC8FC\uC138\uC694.").transform(t=>t.replace(/\s/g,""))}).partial();function b({onSubmit:t,className:n,...e}){let i=chunkGTFUAZUN_js.d({schema:f}),{formState:a,handleSubmit:u,reset:l}=i;return jsxRuntime.jsx(reactHookForm.FormProvider,{...i,children:jsxRuntime.jsx("form",{onSubmit:u(p=>{t(p),l();}),children:jsxRuntime.jsx("fieldset",{className:chunkRDCO23OZ_js.a(`flex flex-col gap-2 disabled:cursor-progress ${n}`),disabled:a.isSubmitting,...e,children:e.children})})})}function w({name:t}){let{formState:{errors:n}}=reactHookForm.useFormContext();if(!t)return null;let e=n[t];return e?jsxRuntime.jsx("span",{children:e.message}):null}

exports.a = b;
exports.b = w;
