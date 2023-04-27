'use strict';

var chunkRWE2HM5I_js = require('./chunk-RWE2HM5I.js');
var chunkRDCO23OZ_js = require('./chunk-RDCO23OZ.js');
var reactHookForm = require('react-hook-form');
var zod = require('zod');
var jsxRuntime = require('react/jsx-runtime');

var g=zod.z.object({email:zod.z.string().email(),password:zod.z.string().min(8,"More than 8 characters"),url:zod.z.string().url("Starts with: https://www."),textarea:zod.z.string(),text:zod.z.string(),select:zod.z.union([zod.z.string(),zod.z.number()]).or(zod.z.array(zod.z.union([zod.z.string(),zod.z.number()]))).or(zod.z.record(zod.z.any())),combo:zod.z.string().min(1),nickname:zod.z.string().min(2,"\uB108\uBB34 \uC9E7\uC544\uC694 \u{1F622}").max(10,"\uB2C9\uB124\uC784\uC740 2~10\uC790 \uC0AC\uC774\uC758 \uAE38\uC774\uB85C \uC9C0\uC5B4\uC8FC\uC138\uC694.").transform(t=>t.replace(/\s/g,"")),title:zod.z.string().min(1,"\uD544\uC218\uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4"),price:zod.z.coerce.number().min(1,"\uB9CC\uC6D0 \uC774\uC0C1 \uD544\uC218!").max(100,"100\uB9CC\uC6D0 \uC774\uD558\uC758 \uC0C1\uD488\uB9CC \uB4F1\uB85D\uD574\uC8FC\uC138\uC694"),layout:zod.z.string().nullish(),color:zod.z.string().nullish(),message:zod.z.string().nullish(),select2:zod.z.union([zod.z.string(),zod.z.number()]).or(zod.z.array(zod.z.union([zod.z.string(),zod.z.number()]))).or(zod.z.record(zod.z.any())),select3:zod.z.union([zod.z.string(),zod.z.number()]).or(zod.z.array(zod.z.union([zod.z.string(),zod.z.number()]))).or(zod.z.record(zod.z.any())),allUsersCombo:zod.z.record(zod.z.string(),zod.z.any()),objDataCombo:zod.z.record(zod.z.string(),zod.z.any())}).partial();function b({onSubmit:t,className:o,...e}){let i=chunkRWE2HM5I_js.d({schema:g}),{formState:a,handleSubmit:l,reset:u}=i;return jsxRuntime.jsx(reactHookForm.FormProvider,{...i,children:jsxRuntime.jsx("form",{onSubmit:l(c=>{t(c),u();}),children:jsxRuntime.jsx("fieldset",{className:chunkRDCO23OZ_js.a(`flex flex-col gap-2 disabled:cursor-progress ${o}`),disabled:a.isSubmitting,...e,children:e.children})})})}function P({name:t}){let{formState:{errors:o}}=reactHookForm.useFormContext();if(!t)return null;let e=o[t];return jsxRuntime.jsx("p",{className:`pointer-events-none absolute inset-y-0 ml-3 text-xs font-light text-red-500 duration-300 ${e?"opacity-100":"opacity-0"}`,children:e?.message})}

exports.a = b;
exports.b = P;
