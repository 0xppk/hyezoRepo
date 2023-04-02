import { a } from './chunk-MZUKW3DH.mjs';
import { cva } from 'cva';
import { jsx } from 'react/jsx-runtime';

var n=cva("",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-md",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl"},weight:{light:"font-light",normal:"font-medium",semibold:"font-semibold",bold:"font-bold"}},defaultVariants:{size:"sm",weight:"normal"}});function p({variant:e,children:o,className:s,...l}){let[i,r]=e.split("/");return jsx("div",{className:a(n({size:i,weight:r,className:s})),...l,children:o})}

export { p as a };
