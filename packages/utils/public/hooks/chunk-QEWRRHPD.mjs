import { useState, useEffect } from 'react';

function s(e,t){let[u,n]=useState(e);return useEffect(()=>{let o=setTimeout(()=>n(e),t||500);return ()=>{clearTimeout(o);}},[e,t]),u}var m=s;

export { m as a };
