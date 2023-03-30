import { Combobox } from '@headlessui/react';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var x=({commands:r,group:s})=>jsxs(Fragment,{children:[r.filter(e=>e.group===s).length>=1&&jsx("div",{className:"bg-accent/50 flex h-6 flex-shrink-0 items-center",children:jsx("span",{className:"px-3.5 text-xs text-slate-100",children:s})}),r.filter(e=>e.group===s).map((e,i)=>jsx(Combobox.Option,{value:e,children:({active:n})=>jsx("div",{className:`hover:bg-primary/40 flex h-[46px] w-full cursor-default items-center text-white transition-colors duration-100 ease-in 
                 ${n?"bg-primary/40":""}`,children:jsxs("div",{className:"flex w-full items-center px-3.5",children:[jsx("span",{className:"flex flex-auto text-left text-sm",children:e.name}),jsx("span",{className:"text-[10px]",children:e.shortcut})]})})},i))]});

export { x as CommandGroup };
