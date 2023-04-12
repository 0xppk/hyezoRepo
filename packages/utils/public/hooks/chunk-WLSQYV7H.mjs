import { useState, useCallback } from 'react';

function s(e){let[o,t]=useState(!!e),a=useCallback(()=>t(l=>!l),[]);return [o,a,t]}

export { s as a };
