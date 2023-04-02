import { a } from './chunk-EFD3G4ZT.mjs';
import { a as a$1 } from './chunk-DWVKG34J.mjs';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { jsxs, jsx } from 'react/jsx-runtime';

function M({children:n}){let o=Menu.Button;return jsxs(Menu,{as:"div",className:"relative",children:[jsx(o,{as:a,children:"Menu Button"}),jsx(Transition,{as:Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:jsx(Menu.Items,{className:"absolute left-0 z-20 mt-2 w-56 origin-top-left rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700",children:n})})]})}function y({children:n,...o}){return jsx(Menu.Item,{children:({active:s})=>jsx(a$1,{className:`flex w-full items-center gap-2 px-4 py-2 text-sm text-blue-400 ${s?"bg-gray-300 text-black dark:bg-gray-600":""}`,...o,children:n})})}

export { M as a, y as b };
