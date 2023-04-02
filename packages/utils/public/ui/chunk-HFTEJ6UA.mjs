import { d } from './chunk-KFTDJPLF.mjs';
import { a } from './chunk-MZUKW3DH.mjs';
import { FormProvider, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { jsx } from 'react/jsx-runtime';

var f=z.object({email:z.string().email(),password:z.string().min(8,"More than 8 characters"),url:z.string().url("Starts with: https://www."),textarea:z.string(),text:z.string(),select:z.union([z.string(),z.number()]).or(z.array(z.union([z.string(),z.number()]))).or(z.record(z.any())),combo:z.string(),nickname:z.string().min(2,"\uB108\uBB34 \uC9E7\uC544\uC694 \u{1F622}").max(10,"\uB2C9\uB124\uC784\uC740 2~10\uC790 \uC0AC\uC774\uC758 \uAE38\uC774\uB85C \uC9C0\uC5B4\uC8FC\uC138\uC694.").transform(t=>t.replace(/\s/g,""))}).partial();function b({onSubmit:t,className:n,...e}){let i=d({schema:f}),{formState:a$1,handleSubmit:u,reset:l}=i;return jsx(FormProvider,{...i,children:jsx("form",{onSubmit:u(p=>{t(p),l();}),children:jsx("fieldset",{className:a(`flex flex-col gap-2 disabled:cursor-progress ${n}`),disabled:a$1.isSubmitting,...e,children:e.children})})})}function w({name:t}){let{formState:{errors:n}}=useFormContext();if(!t)return null;let e=n[t];return e?jsx("span",{children:e.message}):null}

export { b as a, w as b };
