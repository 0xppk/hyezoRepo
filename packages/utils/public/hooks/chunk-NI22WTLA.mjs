import { useState, useCallback, useEffect } from 'react';

function l(t,o){let[u,n]=useState(!0),[c,a]=useState(),[i,r]=useState(),s=useCallback(()=>{n(!0),a(void 0),r(void 0),t().then(r).catch(a).finally(()=>n(!1));},[t,...o]);return useEffect(()=>{s();},[s]),{error:c,loading:u,data:i}}

export { l as a };
