import { d } from './chunk-KFTDJPLF.mjs';
import { a } from './chunk-7HGXBOXR.mjs';
import { FormProvider, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { jsx } from 'react/jsx-runtime';

var f=z.object({email:z.string().email(),password:z.string().min(8,"More than 8 characters"),url:z.string().url("Starts with: https://www."),textarea:z.string(),text:z.string(),select:z.union([z.string(),z.number()]).or(z.array(z.union([z.string(),z.number()]))).or(z.record(z.any())),combo:z.string()}).partial();function c({onSubmit:o,className:n,...t}){let i=d({schema:f}),{formState:a$1,handleSubmit:p}=i;return jsx(FormProvider,{...i,children:jsx("form",{onSubmit:p(o),children:jsx("fieldset",{className:a(`flex flex-col gap-2 disabled:cursor-progress ${n}`),disabled:a$1.isSubmitting,...t,children:t.children})})})}function P({name:o}){let{formState:{errors:n}}=useFormContext();if(!o)return null;let t=n[o];return t?jsx("span",{children:t.message}):null}

export { c as a, P as b };
