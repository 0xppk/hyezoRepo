import { a } from './chunk-7HGXBOXR.mjs';
import { Transition, Dialog } from '@headlessui/react';
import { cva } from 'cva';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

var u=cva("w-full transform overflow-hidden rounded-xl text-left shadow-xl transition-all",{variants:{width:{narrower:"max-w-xs",narrow:"max-w-sm",regular:"max-w-md",wide:"max-w-lg",wider:"max-w-2xl"},center:{true:"flex flex-col"},"bg-color":{white:"bg-white"}},defaultVariants:{width:"regular","bg-color":"white"}});function n({isOpen:o,setIsOpen:d,title:c,center:l,width:p,children:m,className:f,...v}){return jsx(Transition,{appear:!0,show:o,as:Fragment,children:jsxs(Dialog,{as:"div",className:"relative z-10",onClose:()=>d(!1),children:[jsx(Transition.Child,{as:Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70","aria-hidden":"true"})}),jsx("div",{className:"fixed inset-0 flex items-center justify-center overflow-y-auto",children:jsx(Transition.Child,{as:Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-90",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:jsx("div",{className:"modal",children:jsxs(Dialog.Panel,{className:a(u({width:p,center:l,className:f})),children:[jsx(Dialog.Title,{as:"h3",className:`text-lg font-medium leading-6 text-gray-900 ${l&&"place-self-center"}`,children:c}),m]})})})})]})})}n.Content=({children:o})=>jsx(Dialog.Description,{as:"div",className:"mt-5 text-sm text-gray-500",children:o});

export { n as a };
