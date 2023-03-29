import { a } from './chunk-AHPCMTJG.mjs';
import { useState } from 'react';

function u(e){let[n,c]=useState({});return a(()=>{if(e?.current==null)return;let t=new ResizeObserver(([s])=>c(s.contentRect));return t.observe(e.current),()=>t.disconnect()}),n}

export { u as a };
