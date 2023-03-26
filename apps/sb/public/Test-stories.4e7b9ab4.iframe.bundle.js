"use strict";(self.webpackChunksb=self.webpackChunksb||[]).push([[511],{"../../packages/utils/src/ui/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button});var _Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),cva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/utils/src/utils/index.ts"),_ButtonOrLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/utils/src/ui/ButtonOrLink.tsx"),_excluded=["color","fullWidth","outline","size","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonStyles=(0,cva__WEBPACK_IMPORTED_MODULE_1__.j)("flex itmes-center justify-center px-4 border outline-none py-2 rounded-lg font-medium focus:bg-transparent focus:ring-2 hover:bg-transparent dark:hover:bg-transparent disabled:cursor-not-allowed disabled:hover:animate-wiggle duration-300 focus:font-bold",{variants:{color:{blue:"bg-blue-500 focus:text-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:text-blue-500",red:"bg-red-500 focus:text-red-500 focus:ring-red-500 hover:border-red-500 hover:text-red-500",orange:"bg-orange-500 focus:text-orange-500 focus:ring-orange-500 hover:border-orange-500 hover:text-orange-500",emerald:"bg-emerald-500 focus:text-emerald-500 focus:ring-emerald-500 hover:border-emerald-500 hover:text-emerald-500",twitter:"bg-twitter-500 focus:text-twitter-500 focus:ring-twitter-500 hover:border-twitter-500 hover:text-twitter-500",black:"bg-black/90 hover:bg-white hover:text-black hover:border-black focus:text-black focus:ring-black/90"},size:{xs:"text-xs",sm:"text-sm",md:"text-md",lg:"text-lg"},outline:{true:"bg-transparent dark:bg-transparent hover:text-white",false:"border-transparent text-white"},fullWidth:{true:"w-full"}},compoundVariants:[{color:"blue",outline:!0,className:"border-blue-500 text-blue-500 hover:bg-blue-500"},{color:"red",outline:!0,className:"border-red-500 text-red-500 hover:bg-red-500"},{color:"orange",outline:!0,className:"border-orange-500 text-orange-500 hover:bg-orange-500"},{color:"emerald",outline:!0,className:"border-emerald-500 text-emerald-500 hover:bg-emerald-500"},{color:"twitter",outline:!0,className:"border-twitter-500 text-twitter-500 hover:bg-twitter-500"},{color:"black",outline:!0,className:"border-white/75 text-white/90 hover:bg-white hover:text-black focus:text-black focus:bg-white focus:ring-black"}],defaultVariants:{color:"twitter",size:"xs",fullWidth:!1,outline:!1}});function Button(_ref){var color=_ref.color,fullWidth=_ref.fullWidth,outline=_ref.outline,size=_ref.size,className=_ref.className,props=(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_ButtonOrLink__WEBPACK_IMPORTED_MODULE_3__.Z,(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonStyles({color,outline,fullWidth,size,className}))},props))}Button.displayName="Button",Button.__docgenInfo={description:"Button component that can be used as a link or button. If `href` is provided, it will be rendered as a children of Next.js `<Link>` component. Otherwise, it will be rendered as a button.\n@params {string} color - The color of the button.\n@params {string} size - The size of the button. It is a combinations of `xs`, `sm`, `md`, `lg`.\n@params {boolean} outline - Whether the button should have an outline & transparent.\n@params {boolean} fullWidth - Whether the button should have a full width.",methods:[],displayName:"Button",composes:["ButtonOrLinkProps","VariantProps"]}},"../../packages/utils/src/ui/ButtonOrLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ButtonOrLink});var _Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@13.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_excluded=["href"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ButtonOrLink(_ref){var href=_ref.href,props=(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),isLink=void 0!==href,Button=__jsx("button",props);return isLink?__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href,target:"_blank",rel:"noopener noreferrer"},Button):Button}ButtonOrLink.__docgenInfo={description:"This is a base component that will render either a button or a link,\ndepending on the props that are passed to it. The link rendered will\nalso correctly get wrapped in a next/link component to ensure ideal\npage-to-page transitions.",methods:[],displayName:"ButtonOrLink",composes:["Omit"]}},"../../packages/utils/src/ui/index.ts":()=>{},"../../packages/utils/src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@1.9.1/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"./stories/Test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:()=>Sample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_hyezo_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/utils/src/ui/index.ts"),_hyezo_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/utils/src/ui/Button.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Test",component:_hyezo_ui__WEBPACK_IMPORTED_MODULE_1__.Test,tags:["autodocs"]};var list=[{id:1,name:"Javascript",group:"Korea"},{id:2,name:"React",group:"Korea"},{id:3,name:"GraphQL",group:"Japan"},{id:4,name:"Zod",group:"France"},{id:5,name:"Nextjs",group:"Brazil"}],Sample=function Template(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),open=_useState[0],setOpen=_useState[1];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fixed inset-0 flex items-center justify-center"},__jsx(_hyezo_ui__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:function onClick(){return setOpen(!0)},color:"black"},"Open Modal")),__jsx(_hyezo_ui__WEBPACK_IMPORTED_MODULE_1__.Test,{isOpen:open,setIsOpen:setOpen,list}))}.bind({});Sample.args={},Sample.parameters={...Sample.parameters,docs:{...Sample.parameters?.docs,source:{originalSource:'function Template() {\n  var _useState = useState(false),\n    open = _useState[0],\n    setOpen = _useState[1];\n  return __jsx(React.Fragment, null, __jsx("div", {\n    className: "fixed inset-0 flex items-center justify-center"\n  }, __jsx(Button, {\n    onClick: function onClick() {\n      return setOpen(true);\n    },\n    color: "black"\n  }, "Open Modal")), __jsx(Test, {\n    isOpen: open,\n    setIsOpen: setOpen,\n    list: list\n  }));\n}',...Sample.parameters?.docs?.source}}}}}]);