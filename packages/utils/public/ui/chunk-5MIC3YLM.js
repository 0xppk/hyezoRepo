'use strict';

var chunkRDCO23OZ_js = require('./chunk-RDCO23OZ.js');
var react = require('@headlessui/react');
var cva = require('cva');
var react$1 = require('react');
var jsxRuntime = require('react/jsx-runtime');

var u=cva.cva("w-full transform overflow-hidden rounded-xl text-left shadow-xl transition-all",{variants:{width:{narrower:"max-w-xs",narrow:"max-w-sm",regular:"max-w-md",wide:"max-w-lg",wider:"max-w-2xl"},center:{true:"flex flex-col"},"bg-color":{white:"bg-white"}},defaultVariants:{width:"regular","bg-color":"white"}});function n({isOpen:a,setIsOpen:o,title:s,center:d,width:c,children:p,className:m,...v}){return jsxRuntime.jsx(react.Transition,{appear:!0,show:a,as:react$1.Fragment,children:jsxRuntime.jsxs(react.Dialog,{as:"div",className:"relative z-10",onClose:()=>o(!1),children:[jsxRuntime.jsx(react.Transition.Child,{as:react$1.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:jsxRuntime.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70","aria-hidden":"true"})}),jsxRuntime.jsx("div",{className:"fixed inset-0 flex items-center justify-center overflow-y-auto",children:jsxRuntime.jsx(react.Transition.Child,{as:react$1.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-90",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:jsxRuntime.jsx("div",{className:"modal rounded-xl",children:jsxRuntime.jsx(react.Dialog.Panel,{className:chunkRDCO23OZ_js.a(u({width:c,center:d,className:m})),children:p})})})})]})})}n.Content=({children:a,className:o})=>jsxRuntime.jsx(react.Dialog.Description,{as:"div",className:o,children:a});n.Title=({children:a,center:o,className:s})=>jsxRuntime.jsx(react.Dialog.Title,{as:"h3",className:chunkRDCO23OZ_js.a(`text-lg font-medium leading-6 text-gray-900 ${o&&"place-self-center"} ${s}`),children:a});

exports.a = n;
