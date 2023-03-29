'use strict';

var lodash = require('lodash');
var react = require('react');

function c(e,u=300){let[n,t]=react.useState(""),s=react.useCallback(lodash.debounce(r=>t(r),u),[u]),o=r=>s(r.target.value),l=react.useCallback(()=>{t(""),!(typeof e>"u")&&e(n);},[e,n]);return [n,o,l,()=>t("")]}

exports.a = c;
