import p from 'next/link';
import { jsx } from 'react/jsx-runtime';

function i({href:n,...r}){let e=typeof n<"u",t=jsx("button",{...r});return e?jsx(p,{href:n,target:"_blank",rel:"noopener noreferrer",children:t}):t}

export { i as a };
