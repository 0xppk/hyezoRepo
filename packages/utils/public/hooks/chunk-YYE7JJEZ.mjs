import { useRef, useEffect } from 'react';

function u(){let e=useRef(1);return useEffect(()=>{e.current++;}),e.current}

export { u as a };
