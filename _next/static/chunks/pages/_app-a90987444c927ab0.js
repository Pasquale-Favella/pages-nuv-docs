(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(192)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(c){l=!0,o=c}finally{try{s||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,s=(a=n(7294))&&a.__esModule?a:{default:a},l=n(6273),c=n(387),i=n(7190);var u={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var m=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=s.default.useMemo((function(){var t=o(l.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),m=a.href,f=a.as,h=e.children,g=e.replace,p=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var x=(t=s.default.Children.only(h))&&"object"===typeof t&&t.ref,y=o(i.useIntersection({rootMargin:"200px"}),2),j=y[0],w=y[1],S=s.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);s.default.useEffect((function(){var e=w&&n&&l.isLocalURL(m),t="undefined"!==typeof b?b:r&&r.locale,o=u[m+"%"+f+(t?"%"+t:"")];e&&!o&&d(r,m,f,{locale:t})}),[f,m,w,b,n,r]);var A={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:s}))}(e,r,m,f,g,p,v,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(m)&&d(r,m,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof b?b:r&&r.locale,N=r&&r.isLocaleDomain&&l.getDomainLocale(f,k,r&&r.locales,r&&r.domainLocales);A.href=N||l.addBasePath(l.addLocale(f,k,r&&r.defaultLocale))}return s.default.cloneElement(t,A)};t.default=m},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(c){l=!0,o=c}finally{try{s||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=a.useRef(),d=o(a.useState(!1),2),m=d[0],f=d[1],h=o(a.useState(t?t.current:null),2),g=h[0],p=h[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||m||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),i.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){if(s.delete(e),a.unobserve(e),0===s.size){a.disconnect(),c.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(e,(function(e){return e&&f(e)}),{root:g,rootMargin:n}))}),[r,g,n,m]);return a.useEffect((function(){if(!l&&!m){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[m]),a.useEffect((function(){t&&p(t.current)}),[t]),[v,m]};var a=n(7294),s=n(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map,i=[]},192:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),o=n(1163),a=n(4865),s=n.n(a),l=function(){return(0,r.jsx)("footer",{className:"text-gray-600 body-font ",children:(0,r.jsxs)("div",{className:"container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col",children:[(0,r.jsxs)("a",{className:"flex title-font font-medium items-center md:justify-start justify-center text-primary",children:[(0,r.jsx)("img",{src:"".concat("/pages-nuv-docs","/nuv-logo.png"),className:"w-12 h-12 p-2 rounded-full"}),(0,r.jsx)("span",{className:"ml-3 text-xl",children:"Nuvolaris"})]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",children:["\xa9 2021 Nuvolaris \u2014",(0,r.jsx)("a",{href:"#",className:"text-gray-600 ml-1",rel:"noopener noreferrer",target:"_blank",children:"@nuv"})]}),(0,r.jsxs)("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",children:[(0,r.jsx)("a",{className:"ml-3 text-gray-500",children:(0,r.jsxs)("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"0",className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),(0,r.jsx)("circle",{cx:"4",cy:"4",r:"2",stroke:"none"})]})}),(0,r.jsx)("a",{className:"ml-3 text-gray-500",children:(0,r.jsx)("svg",{fill:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"})})})]})]})})},c=n(1664),i=function(){return(0,r.jsxs)("div",{className:"dropdown",children:[(0,r.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),(0,r.jsxs)("ul",{tabIndex:0,className:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52",children:[(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:"/",children:(0,r.jsxs)("a",{className:"active:bg-info active:text-white",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),"Home"]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:"/docs",children:(0,r.jsxs)("a",{className:"active:bg-info active:text-white",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Docs"]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:"/videos",children:(0,r.jsxs)("a",{className:"active:bg-info active:text-white",children:[(0,r.jsx)("svg",{className:"h-4 w-4",stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"})}),"Video"]})})})]})]})},u=function(){return(0,r.jsx)("div",{className:"tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]","data-tip":"github",children:(0,r.jsx)("a",{className:"btn btn-ghost btn-circle normal-case btn-sm",href:"https://github.com/nuvolaris/nuvolaris",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("svg",{width:"24",height:"24",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"})})})})},d=n(7294),m=function(){var e=(0,o.useRouter)(),t=(0,d.useState)(!1),n=t[0],a=t[1],s=(0,d.useState)(""),l=s[0],c=s[1],i=function(e){return a((function(e){return!e}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("label",{htmlFor:"modal",className:"btn btn-ghost btn-circle modal-button btn-sm",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),(0,r.jsx)("input",{type:"checkbox",id:"modal",className:"modal-toggle",onChange:i,checked:n,value:"toggle search"}),(0,r.jsx)("div",{className:"modal items-baseline",children:(0,r.jsxs)("div",{className:"modal-box relative rounded-t-none rounded-b-lg sm:rounded-lg",children:[(0,r.jsx)("label",{htmlFor:"modal",className:"btn btn-sm btn-circle absolute right-2 top-2",children:"\u2715"}),(0,r.jsx)("h3",{className:"text-lg font-bold",children:"Search in the docs"}),(0,r.jsx)("br",{}),(0,r.jsx)("form",{className:"form-control",onSubmit:function(t){t.preventDefault(),e.push("/search?q=".concat(l)),c(""),i()},children:(0,r.jsxs)("div",{className:"input-group w-full",children:[(0,r.jsx)("input",{type:"text",placeholder:"Search\u2026",className:"input input-bordered w-full",value:l,onChange:function(e){return c(e.target.value)}}),(0,r.jsx)("button",{className:"btn btn-square",disabled:!Boolean(l),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})})]})})]})},f=n(3690),h=function(){var e=function(){var e=(0,d.useState)("dark"),t=e[0],n=e[1];return(0,d.useEffect)((function(){var e=localStorage.getItem("theme");e||localStorage.setItem("theme",t),"light"===e&&n("light"),(0,f.themeChange)(!1)}),[]),{theme:t,toggleTheme:function(){return(0,f.themeChange)()}}}(),t=e.theme,n=e.toggleTheme;return(0,r.jsxs)("label",{className:"swap swap-rotate",children:[(0,r.jsx)("input",{"data-toggle-theme":"dark,light","data-act-class":"ACTIVECLASS",type:"checkbox",onClick:n}),(0,r.jsx)("svg",{className:"fill-current w-6 h-6 ".concat("dark"!==t?"swap-on":"swap-off"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})}),(0,r.jsx)("svg",{className:"fill-current w-6 h-6 ".concat("dark"===t?"swap-on":"swap-off"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})})]})},g=function(){return(0,r.jsxs)("div",{className:"navbar bg-base-100 shadow-xl rounded-box fixed z-10",children:[(0,r.jsx)("div",{className:"navbar-start",children:(0,r.jsx)(i,{})}),(0,r.jsxs)("div",{className:"navbar-center align-middle",children:[(0,r.jsx)("img",{className:"h-10 w-10",src:"".concat("/pages-nuv-docs","/nuv-logo.png")}),(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{className:"normal-case text-xl ",children:"Nuv-Docs"})})]}),(0,r.jsxs)("div",{className:"navbar-end",children:[(0,r.jsx)(m,{}),(0,r.jsx)(u,{}),(0,r.jsx)(h,{})]})]})},p=function(e){var t=e.children;return(0,r.jsxs)("div",{className:"flex flex-col h-screen justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{}),(0,r.jsx)("main",{className:"container mx-auto mt-20",children:t})]}),(0,r.jsx)(l,{})]})};n(906),n(4629);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function x(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(p,{children:(0,r.jsx)(t,b({},n))})}o.default.events.on("routeChangeStart",(function(){return s().start()})),o.default.events.on("routeChangeComplete",(function(){return s().done()})),o.default.events.on("routeChangeError",(function(){return s().done()}))},4629:function(){},906:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},4865:function(e,t,n){var r,o;r=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(e,t,n){return e<t?t:e>n?n:e}function r(e){return 100*(-1+e)}function o(e,n,o){var a;return(a="translate3d"===t.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+n+"ms "+o,a}e.configure=function(e){var n,r;for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&(t[n]=r);return this},e.status=null,e.set=function(r){var l=e.isStarted();r=n(r,t.minimum,1),e.status=1===r?null:r;var c=e.render(!l),i=c.querySelector(t.barSelector),u=t.speed,d=t.easing;return c.offsetWidth,a((function(n){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),s(i,o(r,u,d)),1===r?(s(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){s(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){e.remove(),n()}),u)}),u)):setTimeout(n,u)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var n=function(){setTimeout((function(){e.status&&(e.trickle(),n())}),t.trickleSpeed)};return t.trickle&&n(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var r=e.status;return r?("number"!==typeof t&&(t=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+t,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,n=0;e.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&e.start(),t++,n++,r.always((function(){0===--n?(t=0,e.done()):e.set((t-n)/t)})),this):this}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=t.template;var a,l=o.querySelector(t.barSelector),i=n?"-100":r(e.status||0),u=document.querySelector(t.parent);return s(l,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),t.showSpinner||(a=o.querySelector(t.spinnerSelector))&&d(a),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(o),o},e.remove=function(){i(document.documentElement,"nprogress-busy"),i(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&d(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var a=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),s=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function r(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,a=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+a)in n)return r;return t}function o(e){return e=n(e),t[e]||(t[e]=r(e))}function a(e,t,n){t=o(t),e.style[t]=n}return function(e,t){var n,r,o=arguments;if(2==o.length)for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&a(e,n,r);else a(e,o[1],o[2])}}();function l(e,t){return("string"==typeof e?e:u(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=u(e),r=n+t;l(n,t)||(e.className=r.substring(1))}function i(e,t){var n,r=u(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function u(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function d(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e},void 0===(o="function"===typeof r?r.call(t,n,t,e):r)||(e.exports=o)},3690:function(e){function t(){var e=document.querySelector("[data-toggle-theme]");!function(t=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",t),e&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.classList.add(e.getAttribute("data-act-class"))})))}(),e&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((e=>{e.addEventListener("click",(function(){var t=e.getAttribute("data-toggle-theme");if(t){var n=t.split(",");document.documentElement.getAttribute("data-theme")==n[0]?1==n.length?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",n[1]),localStorage.setItem("theme",n[1])):(document.documentElement.setAttribute("data-theme",n[0]),localStorage.setItem("theme",n[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach((e=>{e.classList.toggle(this.getAttribute("data-act-class"))}))}))}))}function n(){!function(e=localStorage.getItem("theme")){var t;void 0!=e&&""!=e&&(localStorage.getItem("theme")&&""!=localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme",e),(t=document.querySelector("[data-set-theme='"+e.toString()+"']"))&&([...document.querySelectorAll("[data-set-theme]")].forEach((e=>{e.classList.remove(e.getAttribute("data-act-class"))})),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class")))):(t=document.querySelector("[data-set-theme='']")).getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class")))}(),[...document.querySelectorAll("[data-set-theme]")].forEach((e=>{e.addEventListener("click",(function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach((e=>{e.classList.remove(e.getAttribute("data-act-class"))})),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class"))}))}))}function r(){!function(e=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",e),document.querySelector("select[data-choose-theme] [value='"+e.toString()+"']")&&[...document.querySelectorAll("select[data-choose-theme] [value='"+e.toString()+"']")].forEach((e=>{e.selected=!0})))}(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach((e=>{e.addEventListener("change",(function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach((e=>{e.selected=!0}))}))}))}e.exports={themeChange:function(e=!0){!0===e?document.addEventListener("DOMContentLoaded",(function(e){t(),r(),n()})):(t(),r(),n())}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);