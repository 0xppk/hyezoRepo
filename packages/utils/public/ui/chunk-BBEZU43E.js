'use strict';

var react$1 = require('@headlessui/react');
var solid = require('@heroicons/react/20/solid');
var cva = require('cva');
var N = require('fuse.js');
var react = require('react');
var reactHookForm = require('react-hook-form');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var N__default = /*#__PURE__*/_interopDefault(N);

var x=cva.cva("",{variants:{color:{twitter:"bg-twitter-100 text-twitter-900",orange:"bg-amber-100 text-amber-900",pink:"bg-rose-100 text-rose-900",emerald:"bg-emerald-100 text-emerald-900"},iconColor:{twitter:"text-twitter-600",orange:"text-amber-600",pink:"text-rose-600",emerald:"text-emerald-600"},width:{narrower:"w-44 max-w-xs",narrow:"w-52 max-w-sm",regular:"w-64 max-w-md",wide:"w-72 max-w-lg",wider:"w-80 max-w-xl"}}});function O(n){return n.filter((l,u,m)=>u===m.findIndex(o=>o.id===l.id||o.title===l.title))}function I({list:n,color:s="pink",width:l="regular",...u}){let{control:m}=reactHookForm.useFormContext(),[o,p]=react.useState(""),d=react.useMemo(()=>O(n),[n]),g=new N__default.default(d,{includeScore:!0,keys:["title"]}),f=o===""?d:g.search(o).map(r=>({...r.item})),w=s;return jsxRuntime.jsx(reactHookForm.Controller,{name:"combo",control:m,render:({field:r})=>jsxRuntime.jsx(react$1.Combobox,{defaultValue:r.value,onChange:r.onChange,refName:r.name,children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:jsxRuntime.jsxs("div",{className:"relative mt-1 flex-1",children:[jsxRuntime.jsxs("div",{className:"relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm",children:[jsxRuntime.jsx(react$1.Combobox.Input,{className:"w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0",placeholder:"Search...",spellCheck:"false",displayValue:t=>t,onChange:t=>p(t.target.value)}),jsxRuntime.jsx(react$1.Combobox.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-2",children:jsxRuntime.jsx(solid.ChevronUpDownIcon,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),jsxRuntime.jsx(react$1.Transition,{as:react.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>p(""),children:jsxRuntime.jsx(react$1.Combobox.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:f.length===0&&o!==""?jsxRuntime.jsx("div",{className:"relative cursor-default select-none py-2 px-4 text-gray-700",children:"Nothing found."}):f.map(t=>jsxRuntime.jsx(react$1.Combobox.Option,{className:({active:i})=>`relative z-10 cursor-default select-none py-2 pl-10 pr-4 ${i?x({color:s}):"text-gray-900"}`,value:t.title,children:({selected:i,active:L})=>jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx("span",{className:`block truncate ${i?"font-extrabold":"font-normal"}`,children:t.title}),i?jsxRuntime.jsx("span",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${x({iconColor:w})}`,children:jsxRuntime.jsx(solid.CheckIcon,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},t.id))})})]})})})})}

exports.a = O;
exports.b = I;
