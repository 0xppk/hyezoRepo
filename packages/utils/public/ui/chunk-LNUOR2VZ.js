'use strict';

var l = require('next/head');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var l__default = /*#__PURE__*/_interopDefault(l);

function c({seo:n,action:t,children:o}){let{title:r}=n;return jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx(m,{seo:n}),jsxRuntime.jsxs("div",{className:"mx-auto w-full bg-white p-6 shadow-lg dark:bg-gray-800 sm:my-8 sm:max-w-lg sm:rounded-xl",children:[(r||t)&&jsxRuntime.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[r&&jsxRuntime.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:r}),t]}),o]})]})}function m({seo:n}){let{title:t,imagePath:o,url:r,description:i}=n;return jsxRuntime.jsxs(l__default.default,{children:[t&&jsxRuntime.jsx("title",{children:t}),jsxRuntime.jsx("meta",{property:"og:title",content:t}),jsxRuntime.jsx("link",{rel:"icon",href:o}),jsxRuntime.jsx("link",{rel:"apple-touch-icon",href:o}),jsxRuntime.jsx("link",{rel:"mask-icon",href:o}),jsxRuntime.jsx("meta",{property:"og:image",content:o}),jsxRuntime.jsx("meta",{property:"og:url",content:r}),jsxRuntime.jsx("link",{rel:"canonical",href:r}),jsxRuntime.jsx("meta",{property:"og:description",content:i}),jsxRuntime.jsx("meta",{property:"og:locale",content:"ko_KR"}),jsxRuntime.jsx("meta",{property:"og:type",content:"website"}),jsxRuntime.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),jsxRuntime.jsx("meta",{name:"robots",content:"all"})]})}

exports.a = c;
