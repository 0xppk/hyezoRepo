import { debounce } from 'lodash';
import { useState, useCallback } from 'react';

function c(e,u=300){let[n,t]=useState(""),s=useCallback(debounce(r=>t(r),u),[u]),o=r=>s(r.target.value),l=useCallback(()=>{t(""),!(typeof e>"u")&&e(n);},[e,n]);return [n,o,l,()=>t("")]}

export { c as a };
