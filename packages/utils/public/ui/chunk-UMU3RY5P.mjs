import l from 'next/head';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

function c({seo:n,action:t,children:o}){let{title:r}=n;return jsxs(Fragment,{children:[jsx(m,{seo:n}),jsxs("div",{className:"mx-auto w-full bg-white p-6 shadow-lg dark:bg-gray-800 sm:my-8 sm:max-w-lg sm:rounded-xl",children:[(r||t)&&jsxs("div",{className:"mb-4 flex items-center justify-between",children:[r&&jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:r}),t]}),o]})]})}function m({seo:n}){let{title:t,imagePath:o,url:r,description:i}=n;return jsxs(l,{children:[t&&jsx("title",{children:t}),jsx("meta",{property:"og:title",content:t}),jsx("link",{rel:"icon",href:o}),jsx("link",{rel:"apple-touch-icon",href:o}),jsx("link",{rel:"mask-icon",href:o}),jsx("meta",{property:"og:image",content:o}),jsx("meta",{property:"og:url",content:r}),jsx("link",{rel:"canonical",href:r}),jsx("meta",{property:"og:description",content:i}),jsx("meta",{property:"og:locale",content:"ko_KR"}),jsx("meta",{property:"og:type",content:"website"}),jsx("meta",{name:"twitter:card",content:"summary_large_image"}),jsx("meta",{name:"robots",content:"all"})]})}

export { c as a };
