import { d as d$1 } from './chunk-KFTDJPLF.mjs';
import { a } from './chunk-7HGXBOXR.mjs';
import { FormProvider, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { jsx } from 'react/jsx-runtime';

var c=z.object({email:z.string().email(),password:z.string().min(8,"More than 8 characters"),url:z.string().url("Starts with: https://www."),textarea:z.string(),text:z.string(),select:z.union([z.string(),z.number()]).or(z.array(z.union([z.string(),z.number()]))).or(z.record(z.any())),combo:z.string(),nickname:z.string().min(2,"\uB108\uBB34 \uC9E7\uC544\uC694 \u{1F622}").max(10,"\uB2C9\uB124\uC784\uC740 2~10\uC790 \uC0AC\uC774\uC758 \uAE38\uC774\uB85C \uC9C0\uC5B4\uC8FC\uC138\uC694.").transform(t=>t.replace(/\s/g,""))}).partial();function d({onSubmit:t,className:n,...o}){let i=d$1({schema:c}),{formState:a$1,handleSubmit:p}=i;return jsx(FormProvider,{...i,children:jsx("form",{onSubmit:p(t),children:jsx("fieldset",{className:a(`flex flex-col gap-2 disabled:cursor-progress ${n}`),disabled:a$1.isSubmitting,...o,children:o.children})})})}function F({name:t}){let{formState:{errors:n}}=useFormContext();if(!t)return null;let o=n[t];return o?jsx("span",{children:o.message}):null}

export { d as a, F as b };
