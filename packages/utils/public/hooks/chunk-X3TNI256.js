'use strict';

var react = require('react');

function l(t,o){let[u,n]=react.useState(!0),[c,a]=react.useState(),[i,r]=react.useState(),s=react.useCallback(()=>{n(!0),a(void 0),r(void 0),t().then(r).catch(a).finally(()=>n(!1));},[t,...o]);return react.useEffect(()=>{s();},[s]),{error:c,loading:u,data:i}}

exports.a = l;
