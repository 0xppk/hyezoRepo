import { Switch } from '@headlessui/react';
import { jsxs, jsx } from 'react/jsx-runtime';

function n({enabled:o,setEnabled:a,passive:i,children:l}){return jsxs(Switch.Group,{children:[jsx(Switch.Label,{passive:i,children:l}),jsx(Switch,{checked:o,onChange:a,className:"ui-checked:bg-twitter-500 relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300",children:jsx("span",{className:"ui-checked:translate-x-7 ui-not-checked:translate-x-1 inline-block h-6 w-6 rounded-full bg-white duration-300"})})]})}

export { n as a };
