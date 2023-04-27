'use strict';

var chunkULM2NYRI_js = require('./chunk-ULM2NYRI.js');
var react$1 = require('@headlessui/react');
var hi2 = require('react-icons/hi2');
var y = require('fuse.js');
var react = require('react');
var reactHookForm = require('react-hook-form');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var y__default = /*#__PURE__*/_interopDefault(y);

function I({list:l,name:f,labelKey:o,imageKey:m,removeDuplicates:h}){let{control:x}=reactHookForm.useFormContext(),[i,u]=react.useState(""),c=h?react.useMemo(()=>chunkULM2NYRI_js.a(l,o),[l]):l,b=new y__default.default(c,{includeScore:!0,keys:[String(o)]}),p=i===""?c:b.search(i).map(a=>({...a.item}));return jsxRuntime.jsx(reactHookForm.Controller,{name:f,control:x,render:({field:a})=>jsxRuntime.jsx(react$1.Combobox,{defaultValue:a.value,onChange:a.onChange,refName:a.name,children:jsxRuntime.jsxs("div",{className:"relative flex-1",children:[jsxRuntime.jsxs("div",{className:"relative flex min-w-full items-center",children:[jsxRuntime.jsx(react$1.Combobox.Input,{className:"text-smoke-500 h-10 min-w-full rounded-full bg-white/20 py-2 pl-10 pr-10 caret-orange-500 saturate-150 backdrop-blur-md placeholder:text-white/40 focus:outline-none",placeholder:"Search...",spellCheck:"false",displayValue:t=>String(t[o]),onChange:t=>u(t.target.value)}),jsxRuntime.jsx(react$1.Combobox.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-2 text-black/70",children:jsxRuntime.jsx(hi2.HiChevronUpDown,{className:"h-5 w-5","aria-hidden":"true"})})]}),jsxRuntime.jsx(react$1.Transition,{as:react.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>u(""),children:jsxRuntime.jsx(react$1.Combobox.Options,{className:"absolute z-10 mt-1 max-h-80 w-full overflow-auto rounded-xl bg-white/20 shadow-xl ring-1 ring-black ring-opacity-5 drop-shadow-xl saturate-150 backdrop-blur-md focus:outline-none sm:text-sm",children:p.length===0&&i!==""?jsxRuntime.jsx("div",{className:"relative cursor-default select-none px-4 py-2 text-white/70",children:"Nothing found"}):p.map((t,v)=>jsxRuntime.jsx(react$1.Combobox.Option,{className:({active:n})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${n?"bg-white/10 text-white/90":"text-white/70"}`,value:t,children:({selected:n,active:P})=>jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsxs("div",{className:"flex items-center gap-3",children:[m&&jsxRuntime.jsx("img",{className:"h-10 w-10 rounded-full",src:String(t[m])}),jsxRuntime.jsx("span",{className:`block truncate ${n?"font-extrabold text-white":"font-normal"}`,children:String(t[o])})]}),n?jsxRuntime.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-white/90",children:jsxRuntime.jsx(hi2.HiCheck,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},`${String(t[o])}+ ${v}`))})})]})})})}

exports.a = I;
