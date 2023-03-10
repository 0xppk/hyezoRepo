"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58],{"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/keyboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>o});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Ye});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),render=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/render.js"),open_closed=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/internal/open-closed.js"),match=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/match.js"),use_is_mounted=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js"),use_iso_morphic_effect=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_latest_value=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-latest-value.js"),use_server_handoff_complete=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js"),use_sync_refs=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");var disposables=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/disposables.js");function v(t,...e){t&&e.length>0&&t.classList.add(...e)}function f(t,...e){t&&e.length>0&&t.classList.remove(...e)}function M(t,e,n,a){let i=n?"enter":"leave",m=(0,disposables.k)(),d=void 0!==a?function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}(a):()=>{};"enter"===i&&(t.removeAttribute("hidden"),t.style.display="");let u=(0,match.E)(i,{enter:()=>e.enter,leave:()=>e.leave}),o=(0,match.E)(i,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=(0,match.E)(i,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return f(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),v(t,...u,...r),m.nextFrame((()=>{f(t,...r),v(t,...o),function F(t,e){let n=(0,disposables.k)();if(!t)return n.dispose;let{transitionDuration:a,transitionDelay:i}=getComputedStyle(t),[m,d]=[a,i].map((o=>{let[r=0]=o.split(",").filter(Boolean).map((l=>l.includes("ms")?parseFloat(l):1e3*parseFloat(l))).sort(((l,g)=>g-l));return r}));if(m+d!==0){let o=n.addEventListener(t,"transitionend",(r=>{r.target===r.currentTarget&&(e(),o())}))}else e();return n.add((()=>e())),n.dispose}(t,(()=>(f(t,...u),v(t,...e.entered),d())))})),m.dispose}var use_disposables=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-disposables.js");var use_event=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-event.js"),class_names=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/class-names.js"),env=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/env.js");function H(i=""){return i.split(" ").filter((e=>e.trim().length>1))}let transition_M=(0,react.createContext)(null);transition_M.displayName="TransitionContext";var s,Ee=((s=Ee||{}).Visible="visible",s.Hidden="hidden",s);let I=(0,react.createContext)(null);function _(i){return"children"in i?_(i.children):i.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function re(i,e){let s=(0,use_latest_value.E)(i),n=(0,react.useRef)([]),m=(0,use_is_mounted.t)(),y=(0,use_disposables.G)(),E=(0,use_event.z)(((l,r=render.l4.Hidden)=>{let t=n.current.findIndex((({el:o})=>o===l));-1!==t&&((0,match.E)(r,{[render.l4.Unmount](){n.current.splice(t,1)},[render.l4.Hidden](){n.current[t].state="hidden"}}),y.microTask((()=>{var o;!_(n)&&m.current&&(null==(o=s.current)||o.call(s))})))})),S=(0,use_event.z)((l=>{let r=n.current.find((({el:t})=>t===l));return r?"visible"!==r.state&&(r.state="visible"):n.current.push({el:l,state:"visible"}),()=>E(l,render.l4.Unmount)})),x=(0,react.useRef)([]),u=(0,react.useRef)(Promise.resolve()),p=(0,react.useRef)({enter:[],leave:[],idle:[]}),d=(0,use_event.z)(((l,r,t)=>{x.current.splice(0),e&&(e.chains.current[r]=e.chains.current[r].filter((([o])=>o!==l))),null==e||e.chains.current[r].push([l,new Promise((o=>{x.current.push(o)}))]),null==e||e.chains.current[r].push([l,new Promise((o=>{Promise.all(p.current[r].map((([f,a])=>a))).then((()=>o()))}))]),"enter"===r?u.current=u.current.then((()=>null==e?void 0:e.wait.current)).then((()=>t(r))):t(r)})),v=(0,use_event.z)(((l,r,t)=>{Promise.all(p.current[r].splice(0).map((([o,f])=>f))).then((()=>{var o;null==(o=x.current.shift())||o()})).then((()=>t(r)))}));return(0,react.useMemo)((()=>({children:n,register:S,unregister:E,onStart:d,onStop:v,wait:u,chains:p})),[S,E,n,d,v,p,u])}function Pe(){}I.displayName="NestingContext";let He=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ie(i){var s;let e={};for(let n of He)e[n]=null!=(s=i[n])?s:Pe;return e}let oe=render.AN.RenderStrategy,se=(0,render.yV)((function(e,s){let{beforeEnter:n,afterEnter:m,beforeLeave:y,afterLeave:E,enter:S,enterFrom:x,enterTo:u,entered:p,leave:d,leaveFrom:v,leaveTo:l,...r}=e,t=(0,react.useRef)(null),o=(0,use_sync_refs.T)(t,s),f=r.unmount?render.l4.Unmount:render.l4.Hidden,{show:a,appear:P,initial:le}=function Se(){let i=(0,react.useContext)(transition_M);if(null===i)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}(),[h,j]=(0,react.useState)(a?"visible":"hidden"),Q=function xe(){let i=(0,react.useContext)(I);if(null===i)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}(),{register:F,unregister:L}=Q,U=(0,react.useRef)(null);(0,react.useEffect)((()=>F(t)),[F,t]),(0,react.useEffect)((()=>{if(f===render.l4.Hidden&&t.current)return a&&"visible"!==h?void j("visible"):(0,match.E)(h,{hidden:()=>L(t),visible:()=>F(t)})}),[h,t,F,L,a,f]);let k=(0,use_latest_value.E)({enter:H(S),enterFrom:H(x),enterTo:H(u),entered:H(p),leave:H(d),leaveFrom:H(v),leaveTo:H(l)}),O=function Ne(i){let e=(0,react.useRef)(ie(i));return(0,react.useEffect)((()=>{e.current=ie(i)}),[i]),e}({beforeEnter:n,afterEnter:m,beforeLeave:y,afterLeave:E}),G=(0,use_server_handoff_complete.H)();(0,react.useEffect)((()=>{if(G&&"visible"===h&&null===t.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[t,h,G]);let B=le&&!P,ae=!G||B||U.current===a?"idle":a?"enter":"leave",D=function b(g=0){let[t,l]=(0,react.useState)(g),u=(0,react.useCallback)((e=>l((a=>a|e))),[t]),n=(0,react.useCallback)((e=>Boolean(t&e)),[t]),o=(0,react.useCallback)((e=>l((a=>a&~e))),[l]),s=(0,react.useCallback)((e=>l((a=>a^e))),[l]);return{flags:t,addFlag:u,hasFlag:n,removeFlag:o,toggleFlag:s}}(0),ue=(0,use_event.z)((g=>(0,match.E)(g,{enter:()=>{D.addFlag(open_closed.ZM.Opening),O.current.beforeEnter()},leave:()=>{D.addFlag(open_closed.ZM.Closing),O.current.beforeLeave()},idle:()=>{}}))),de=(0,use_event.z)((g=>(0,match.E)(g,{enter:()=>{D.removeFlag(open_closed.ZM.Opening),O.current.afterEnter()},leave:()=>{D.removeFlag(open_closed.ZM.Closing),O.current.afterLeave()},idle:()=>{}}))),w=re((()=>{j("hidden"),L(t)}),Q);(function use_transition_D({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=(0,use_is_mounted.t)(),c=(0,use_disposables.G)(),r=(0,use_latest_value.E)(t);(0,use_iso_morphic_effect.e)((()=>{let e=(0,disposables.k)();c.add(e.dispose);let n=i.current;if(n&&"idle"!==r.current&&a.current)return e.dispose(),s.current(r.current),e.add(M(n,o.current,"enter"===r.current,(()=>{e.dispose(),u.current(r.current)}))),e.dispose}),[t])})({container:t,classes:k,direction:ae,onStart:(0,use_latest_value.E)((g=>{w.onStart(t,g,ue)})),onStop:(0,use_latest_value.E)((g=>{w.onStop(t,g,de),"leave"===g&&!_(w)&&(j("hidden"),L(t))}))}),(0,react.useEffect)((()=>{!B||(f===render.l4.Hidden?U.current=null:U.current=a)}),[a,B,h]);let W=r,fe={ref:o};return P&&a&&env.O.isServer&&(W={...W,className:(0,class_names.A)(r.className,...k.current.enter,...k.current.enterFrom)}),react.createElement(I.Provider,{value:w},react.createElement(open_closed.up,{value:(0,match.E)(h,{visible:open_closed.ZM.Open,hidden:open_closed.ZM.Closed})|D.flags},(0,render.sY)({ourProps:fe,theirProps:W,defaultTag:"div",features:oe,visible:"visible"===h,name:"Transition.Child"})))})),K=(0,render.yV)((function(e,s){let{show:n,appear:m=!1,unmount:y,...E}=e,S=(0,react.useRef)(null),x=(0,use_sync_refs.T)(S,s);(0,use_server_handoff_complete.H)();let u=(0,open_closed.oJ)();if(void 0===n&&null!==u&&(n=(u&open_closed.ZM.Open)===open_closed.ZM.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,d]=(0,react.useState)(n?"visible":"hidden"),v=re((()=>{d("hidden")})),[l,r]=(0,react.useState)(!0),t=(0,react.useRef)([n]);(0,use_iso_morphic_effect.e)((()=>{!1!==l&&t.current[t.current.length-1]!==n&&(t.current.push(n),r(!1))}),[t,n]);let o=(0,react.useMemo)((()=>({show:n,appear:m,initial:l})),[n,m,l]);(0,react.useEffect)((()=>{if(n)d("visible");else if(_(v)){let a=S.current;if(!a)return;let P=a.getBoundingClientRect();0===P.x&&0===P.y&&0===P.width&&0===P.height&&d("hidden")}else d("hidden")}),[n,v]);let f={unmount:y};return react.createElement(I.Provider,{value:v},react.createElement(transition_M.Provider,{value:o},(0,render.sY)({ourProps:{...f,as:react.Fragment,children:react.createElement(se,{ref:x,...f,...E})},theirProps:{},defaultTag:react.Fragment,features:oe,visible:"visible"===p,name:"Transition"})))})),ye=(0,render.yV)((function(e,s){let n=null!==(0,react.useContext)(transition_M),m=null!==(0,open_closed.oJ)();return react.createElement(react.Fragment,null,!n&&m?react.createElement(K,{ref:s,...e}):react.createElement(se,{ref:s,...e}))})),Ye=Object.assign(K,{Child:ye,Root:K})},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>p});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/disposables.js");function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>e.dispose()),[e]),e}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-event.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>o});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-latest-value.js");let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((...r)=>e.current(...r)),[e])}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-id.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>I});var o,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/env.js");let I=null!=(o=react__WEBPACK_IMPORTED_MODULE_0__.useId)?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.H)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.O.nextId():null);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.e)((()=>{null===e&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.O.nextId())}),[e]),null!=e?""+e:void 0}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>f});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/env.js");let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-latest-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{r.current=e}),[e]),r}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-outside-click.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>L});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),focus_management=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/focus-management.js"),use_latest_value=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function d(e,r,n){let o=(0,use_latest_value.E)(r);(0,react.useEffect)((()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function L(m,E,c=!0){let i=(0,react.useRef)(!1);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return"function"==typeof t?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(null!==n&&n.getRootNode().contains(n)){for(let r of l){if(null===r)continue;let t=r instanceof HTMLElement?r:r.current;if(null!=t&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!(0,focus_management.sP)(n,focus_management.tJ.Loose)&&-1!==n.tabIndex&&e.preventDefault(),E(e,n)}}(0,react.useEffect)((()=>{requestAnimationFrame((()=>{i.current=c}))}),[c]);let u=(0,react.useRef)(null);d("mousedown",(e=>{var o,l;i.current&&(u.current=(null==(l=null==(o=e.composedPath)?void 0:o.call(e))?void 0:l[0])||e.target)}),!0),d("click",(e=>{!u.current||(f(e,(()=>u.current)),u.current=null)}),!0),d("blur",(e=>f(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/env.js");function l(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isHandoffComplete);return e&&!1===_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isHandoffComplete&&f(!1),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{!0!==e&&f(!0)}),[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.handoff()),[]),e}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>y,h:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-event.js");let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{n.current=t}),[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)}));return t.every((e=>null==e||(null==e?void 0:e[u])))?void 0:c}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/internal/open-closed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZM:()=>d,oJ:()=>C,up:()=>c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var e,d=((e=d||{})[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e);function C(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function c({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/bugs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=""===(null==e?void 0:e.getAttribute("disabled"));return(!t||!function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;null!==e;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}(l))&&t}__webpack_require__.d(__webpack_exports__,{P:()=>r})},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/class-names.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function e(...n){return n.filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>e})},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>m});var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/micro-task.js");function m(){let a=[],i=[],r={enqueue(e){i.push(e)},addEventListener:(e,t,n,s)=>(e.addEventListener(t,n,s),r.add((()=>e.removeEventListener(t,n,s)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>r.requestAnimationFrame((()=>r.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return r.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return(0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.Y)((()=>{t.current&&e[0]()})),r.add((()=>{t.current=!1}))},add:e=>(a.push(e),()=>{let t=a.indexOf(e);if(t>=0){let[n]=a.splice(t,1);n()}}),dispose(){for(let e of a.splice(0))e()},async workQueue(){for(let e of i.splice(0))await e()},style(e,t,n){let s=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:s})}))}};return r}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/env.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>s});var i=Object.defineProperty,r=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);let s=new class o{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/focus-management.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C5:()=>S,EO:()=>v,TO:()=>L,fE:()=>N,jA:()=>I,sP:()=>h,tJ:()=>F,wI:()=>g,z2:()=>A});var _disposables_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/disposables.js"),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/match.js"),_owner_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/owner.js");let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var n,o,r,L=((r=L||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),N=((o=N||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),T=((n=T||{})[n.Previous=-1]="Previous",n[n.Next=1]="Next",n);function E(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(f)).sort(((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER))))}var F=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(F||{});function h(e,t=0){var n;return e!==(null==(n=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.r)(e))?void 0:n.body)&&(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(t,{0:()=>e.matches(f),1(){let l=e;for(;null!==l;){if(l.matches(f))return!0;l=l.parentElement}return!1}})}function g(e){let t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.r)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.k)().nextFrame((()=>{t&&!h(t.activeElement,0)&&S(e)}))}function S(e){null==e||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function A(e,t=(n=>n)){return e.slice().sort(((n,l)=>{let o=t(n),i=t(l);if(null===o||null===i)return 0;let r=o.compareDocumentPosition(i);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function v(e,t){return I(E(),t,{relativeTo:e})}function I(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,r=Array.isArray(e)?n?A(e):e:E(e);o.length>0&&r.length>1&&(r=r.filter((s=>!o.includes(s)))),l=null!=l?l:i.activeElement;let u,d=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,r.indexOf(l))-1;if(4&t)return Math.max(0,r.indexOf(l))+1;if(8&t)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=32&t?{preventScroll:!0}:{},c=0,a=r.length;do{if(c>=a||c+a<=0)return 0;let s=x+c;if(16&t)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=r[s],null==u||u.focus(p),c+=d}while(u!==i.activeElement);return 6&t&&function w(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,H))&&n}(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/match.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}__webpack_require__.d(__webpack_exports__,{E:()=>u})},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/micro-task.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((o=>setTimeout((()=>{throw o}))))}__webpack_require__.d(__webpack_exports__,{Y:()=>t})},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/owner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>e});var _env_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/env.js");function e(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.O.isServer?null:r instanceof Node?r.ownerDocument:null!=r&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/render.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AN:()=>j,l4:()=>w,oA:()=>P,sY:()=>X,yV:()=>V});var e,a,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_class_names_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/class-names.js"),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/match.js"),j=((a=j||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),w=((e=w||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:l}){let o=h(t,r);if(n)return m(o,e,a,l);let u=null!=s?s:0;if(2&u){let{static:i=!1,...d}=o;if(i)return m(d,e,a,l)}if(1&u){let{unmount:i=!0,...d}=o;return(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(i?0:1,{0:()=>null,1:()=>m({...d,hidden:!0,style:{display:"none"}},e,a,l)})}return m(o,e,a,l)}function m(r,t={},e,a){var y;let{as:s=e,children:n,refName:l="ref",...o}=T(r,["unmount","static"]),u=void 0!==r.ref?{[l]:r.ref}:{},i="function"==typeof n?n(t):n;o.className&&"function"==typeof o.className&&(o.className=o.className(t));let d={};if(t){let f=!1,c=[];for(let[p,F]of Object.entries(t))"boolean"==typeof F&&(f=!0),!0===F&&c.push(p);f&&(d["data-headlessui-state"]=c.join(" "))}if(s===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(P(o)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map((p=>`  - ${p}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((p=>`  - ${p}`)).join("\n")].join("\n"));let f=(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.A)(null==(y=i.props)?void 0:y.className,o.className),c=f?{className:f}:{};return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},h(i.props,P(T(o,["ref"]))),d,u,function O(...r){return{ref:r.every((t=>null==t))?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}}(i.ref,u.ref),c))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(s,Object.assign({},T(o,["ref"]),s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function h(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&"function"==typeof s[n]?(null!=e[n]||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map((s=>[s,void 0]))));for(let s in e)Object.assign(t,{[s](n,...l){let o=e[s];for(let u of o){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function V(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function P(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function T(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}}}]);