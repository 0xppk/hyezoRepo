import { jsxs, jsx } from 'react/jsx-runtime';

function l({wrapperClassName:s,textClassName:a,borderClassName:t,children:r}){return jsxs("div",{className:`relative w-full ${s}`,children:[jsx("div",{className:"absolute inset-0 flex items-center",children:jsx("span",{className:`w-full border-t ${t??"border-white"}`})}),jsx("div",{className:"relative flex justify-center text-xs uppercase",children:jsx("span",{className:`px-2 ${a??"bg-slate-900 text-gray-200"}`,children:r})})]})}

export { l as a };
