"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2258],{6604:function(e,o,l){l.d(o,{c:function(){return b}});var n=l(828),i=l(85893),t=l(67294),a=l(26042),r=l(69396),d=l(11355),s={250:"duration-250",300:"duration-300",500:"duration-500",700:"duration-700",750:"duration-750"},c={fadeIn:{enter:"transition-all ease-in-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100",leaveTo:"opacity-0"},slideFromBottom:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 translate-y-8",enterTo:"opacity-100 translate-y-0",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-8"},fadeAndGrow:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},slideFromRight:{enter:"transition-all ease-in-out",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition-all ease-in-out",leaveFrom:"translate-x-0",leaveTo:"translate-x-full"},slideFromLeft:{enter:"transition-all ease-in-out",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition-all ease-in-out",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full"},zoomOut:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-105",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-105"},zoomIn:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},popUp:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-0",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-0"},none:{enter:"",enterFrom:"",enterTo:"",leave:"",leaveFrom:"",leaveTo:""}},u=function(e){var o,l=e.show,n=void 0===l||l,u=e.appear,v=e.children,m=e.animation,g=void 0===m?"none":m,p=e.duration,y=void 0===p?300:p,f=e.asChild,b=e.unmount,h=e.style,x=e.delay,j=null!==(o=c[g])&&void 0!==o?o:c.none,w=(0,r.Z)((0,a.Z)({},j),{enter:"".concat(j.enter," ").concat(s[y]," ").concat(x?"delay-".concat(x):""),leave:"".concat(j.leave," ").concat(s[y]," ").concat(x?"delay-".concat(x):"")}),N=f?d.u.Child:d.u;return(0,i.jsx)(N,(0,r.Z)((0,a.Z)({show:f?void 0:n,as:x?"div":t.Fragment,appear:u,unmount:b,style:h},w),{children:v}))},v=l(42708),m="default",g="medium",p="none",y="medium";var f={slow:750,medium:500,fast:250},b=function(e){var o=e.children,l=e.settings,a=e.globalSettings,r=e.unmount,d=void 0!==r&&r,s=e.delay,c=function(e,o){var l=e||{},n=l.type,i=void 0===n?m:n,t=l.speed,a=void 0===t?g:t;return"default"===i&&(i=(null===o||void 0===o?void 0:o.type)||p,a=(null===o||void 0===o?void 0:o.speed)||y),{type:i,speed:a}}(l,a),b=c.type,h=c.speed,x=(0,t.useState)(!1),j=x[0],w=x[1],N=(0,n.Z)((0,v.YD)({triggerOnce:!0}),3),F=N[0],k=N[1];N[2];return(0,t.useEffect)((function(){var e=null;return k&&(e=setTimeout((function(){return w(!0)}),400)),function(){e&&clearTimeout(e)}}),[k]),"none"===b?(0,i.jsx)(i.Fragment,{children:o}):(0,i.jsxs)(i.Fragment,{children:[!j&&(0,i.jsx)("div",{className:"absolute left-0 top-8 min-h-full min-w-full",ref:F}),(0,i.jsx)(u,{show:j,animation:b,duration:f[h],unmount:d,disableLeave:!0,delay:s,children:o}),!j&&(0,i.jsx)("div",{className:"invisible",children:o})]})}},52077:function(e,o,l){l.d(o,{Z:function(){return v}});var n=l(26042),i=l(69396),t=l(85893),a=l(41664),r=l.n(a),d=l(16494),s=l(31996),c=l(67294),u=l(7004);function v(e){var o=e.button,l=e.type,a=e.block,v=e.website,m=e.action,g=e.loading,p=e.className,y=(0,c.useState)({borderWidth:2,borderStyle:"solid",boxShadow:"none"}),f=y[0],b=y[1];return(0,c.useEffect)((function(){if(o&&a&&v){var e,l,t,r=(null===(e=v.colorPalette)||void 0===e||null===(l=e.Palette)||void 0===l?void 0:l.colors)||(null===(t=v.colorPalette)||void 0===t?void 0:t.colors)||[];if(r.length>0&&!v.noPaletteSupport){var d,c,u,m,g,p,y=r[(0,s.dz)(null===(d=a.layers)||void 0===d?void 0:d.palette)]||r[0];if(!o.style){var f=v.button||{background:v.secondaryColor,cornerRadius:8,style:"solid"};f.background||(f.background=v.secondaryColor),o.style={type:f.style,cornerRadius:f.cornerRadius,name:"custom"}}if("custom"===(null===(c=a.layers)||void 0===c?void 0:c.palette))y={color:null===(u=a.layers)||void 0===u||null===(m=u.overlay)||void 0===m?void 0:m.color1,accent:null===(g=a.layers)||void 0===g||null===(p=g.foreground)||void 0===p?void 0:p.accent};if("custom"===o.style.name)b((function(e){return(0,i.Z)((0,n.Z)({},e),{backgroundColor:"outline"===o.style.type?"transparent":y.accent,color:"outline"===o.style.type?(0,s.$O)(y.color):(0,s.$O)(y.accent),borderRadius:o.style.cornerRadius,borderColor:"outline"===o.style.type?(0,s.$O)(y.color):y.accent})}));else{var h=v.buttons&&v.buttons[o.style.name]||{type:"solid",cornerRadius:0};b((function(e){return(0,i.Z)((0,n.Z)({},e),{backgroundColor:"outline"===h.type?"transparent":y.accent,color:"outline"===h.type?(0,s.$O)(y.color):(0,s.$O)(y.accent),borderRadius:h.cornerRadius,borderColor:"outline"===h.type?(0,s.$O)(y.color):y.accent})}))}}else{var x=v.button||{background:v.secondaryColor,cornerRadius:8,style:"solid"};x.background||(x.background=v.secondaryColor),b((function(e){return(0,i.Z)((0,n.Z)({},e),{backgroundColor:"outline"===x.style?"transparent":x.background,color:"outline"===x.style?x.background:(0,s.$O)(x.background),borderRadius:isNaN(x.cornerRadius)?8:x.cornerRadius,borderColor:x.background})}))}}}),[o,a,v]),m||"submit"===l||"section"===o.type?(0,t.jsx)("button",{type:"submit"===l?"submit":"button",onClick:function(e){return(0,u.Gc)(e,o,m)},className:(0,s.AK)("button",p),style:f,disabled:g,children:g?(0,t.jsx)(d.Z,{}):o.label}):(0,t.jsx)(r(),{href:(0,u.f$)(o,v),children:(0,t.jsx)("a",{className:(0,s.AK)("button",p),target:(0,u.U9)(o,v),style:f,children:o.label})})}},7004:function(e,o,l){l.d(o,{Gc:function(){return t},U9:function(){return i},f$:function(){return n}});var n=function(e,o){if(e){if("email"===e.type)return"mailto:"+e.link;if("phone"===e.type)return"tel:"+e.link;if("page"===e.type){var l,n,i,t=null===o||void 0===o||null===(l=o.pages)||void 0===l?void 0:l.find((function(o){return o._id===e.page})),a=(null===t||void 0===t?void 0:t.Parent)?null===o||void 0===o||null===(n=o.pages)||void 0===n?void 0:n.find((function(e){return e._id===(null===t||void 0===t?void 0:t.Parent)})):null,r="";return a&&(r+="".concat(a.slug,"/")),r+=null!==(i=null===t||void 0===t?void 0:t.slug)&&void 0!==i?i:"/"}return"section"===e.type?"#"+e.link:(null===e||void 0===e||null===(d=e.link)||void 0===d?void 0:d.includes("http"))||(null===e||void 0===e||null===(s=e.link)||void 0===s?void 0:s.includes("https"))?e.link:(null===e||void 0===e?void 0:e.link)&&"#"!==(null===e||void 0===e?void 0:e.link)?"https://"+(null===e||void 0===e?void 0:e.link):"#";var d,s}return"/"},i=function(e,o){var l,n,i,t=null===o||void 0===o||null===(l=o.pages)||void 0===l?void 0:l.find((function(o){return o._id===(null===e||void 0===e?void 0:e.page)}));return(null===e||void 0===e?void 0:e.newPage)?"_blank":(null===t||void 0===t?void 0:t.forceRender)?"_parent":(null===o||void 0===o||null===(n=o.button)||void 0===n?void 0:n.target)?null===o||void 0===o||null===(i=o.button)||void 0===i?void 0:i.target:"_self"},t=function(e,o,l){if("section"===(null===o||void 0===o?void 0:o.type)){e.preventDefault();var n=document.getElementById(o.link);n&&n.scrollIntoView({behavior:"smooth"})}else"function"===typeof l&&l(e)}},16494:function(e,o,l){l.d(o,{Z:function(){return t}});var n=l(85893),i=l(31996);function t(e){var o=e.text,l=e.className,t=e.classNameChild;switch(e.variant){case"form":return(0,n.jsx)("div",{className:"w-full max-w-screen-sm my-8",children:(0,n.jsxs)("div",{className:"animate-pulse flex space-y-8 flex-col",children:[(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/2"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,n.jsx)("div",{className:"h-2 bg-gray-100 rounded w-5/6"})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/4"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,n.jsx)("div",{className:"h-2 bg-gray-100 rounded w-1/2"})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/4"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,n.jsx)("div",{className:"h-2 bg-gray-100 rounded w-1/2"})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/6"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,n.jsx)("div",{className:"h-2 bg-gray-100 rounded w-3/4"})]}),(0,n.jsx)("div",{className:"h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"})]})});case"skeleton":return(0,n.jsx)("div",{className:l,children:(0,n.jsx)("div",{className:"animate-pulse",children:(0,n.jsx)("div",{className:(0,i.AK)("h-6 bg-gray-200 rounded",t)})})});case"table":return(0,n.jsx)("div",{className:"w-full my-8",children:(0,n.jsxs)("div",{className:"animate-pulse flex space-y-2 flex-col",children:[(0,n.jsxs)("div",{className:"space-x-2 flex",children:[(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"})]}),[1,2,3,4,5,6].map((function(e){return(0,n.jsxs)("div",{className:"space-x-2 flex",children:[(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"})]},e)}))]})});default:return(0,n.jsxs)("div",{className:(0,i.AK)("inline-flex items-center",l),children:[(0,n.jsxs)("svg",{className:(0,i.AK)("animate-spin ml-1 mr-3 h-4 w-4",l&&"text-indigo-600"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),o||""===o?o:"Loading..."]})}}},21123:function(e,o,l){l.d(o,{Z:function(){return d}});var n=l(26042),i=l(69396),t=l(85893),a=l(67294),r=l(31996);function d(e){var o,l,d,s=e.block,c=e.website,u=e.setTextColor,v=e.onChange,m=(0,a.useState)(null),g=m[0],p=m[1],y=[{id:"top-down",value:"180deg",icon:"ArrowDownIcon"},{id:"left-right",value:"90deg",icon:"ArrowRightIcon"},{id:"bottom-left-top-right",value:"45deg",icon:"ArrowUpRightIcon"},{id:"bottom-right-top-left",value:"315deg",icon:"ArrowUpLeftIcon"}];return(0,a.useEffect)((function(){if(c&&s){var e,o,l,t,a=(null===c||void 0===c||null===(e=c.colorPalette)||void 0===e||null===(o=e.Palette)||void 0===o?void 0:o.colors)||(null===c||void 0===c||null===(l=c.colorPalette)||void 0===l?void 0:l.colors)||[];if(null===(t=s.layers)||void 0===t?void 0:t.palette)if("custom"===s.layers.palette)p(null===s||void 0===s?void 0:s.layers);else{var d,u,v,m,g,f,b,h,x=(0,r.dz)(s.layers.palette),j={};if("gradient"===(null===(d=s.layers.overlay)||void 0===d?void 0:d.type))j={type:"gradient",color1:null===(m=a[x])||void 0===m?void 0:m.color,color2:null===(g=a[x%2===0?x+1:x-1])||void 0===g?void 0:g.color,accent:null===(f=a[x])||void 0===f?void 0:f.accent};else j={type:"solid",color1:null===(b=a[x])||void 0===b?void 0:b.color,accent:null===(h=a[x])||void 0===h?void 0:h.accent};p((0,i.Z)((0,n.Z)({},null===s||void 0===s?void 0:s.layers),{overlay:(0,n.Z)({},null===s||void 0===s||null===(u=s.layers)||void 0===u?void 0:u.overlay,j),foreground:{accent:(null===(v=a[x])||void 0===v?void 0:v.accent)||(0,r.$O)(j.color1||"#FFFFFF")}}))}else{var w,N,F,k,Z,T,C,A,R,z,H,P={type:"solid"},S={enabled:!1};if("object"===typeof(null===s||void 0===s?void 0:s.background))if("image"===(null===s||void 0===s||null===(N=s.background)||void 0===N?void 0:N.type))P.color1=(null===(k=s.background.overlay)||void 0===k?void 0:k.color.includes("rgba"))?(0,r.s)(null===(Z=s.background.overlay)||void 0===Z?void 0:Z.color):null===(T=s.background.overlay)||void 0===T?void 0:T.color,S.enabled=!0,S.media=null===s||void 0===s||null===(C=s.background)||void 0===C?void 0:C.image,S.positionX=(null===(A=s.background)||void 0===A?void 0:A.imagePositionX)||"50%",S.positionY=(null===(R=s.background)||void 0===R?void 0:R.imagePositionY)||"50%",S.opacity=(null===(z=s.background)||void 0===z||null===(H=z.overlay)||void 0===H?void 0:H.amount)||50;else if("gradient"===(null===s||void 0===s||null===(F=s.background)||void 0===F?void 0:F.type)){var E,O,$;P.type="gradient",P.color1=null===s||void 0===s||null===(E=s.background)||void 0===E?void 0:E.color,P.color2=null===s||void 0===s||null===(O=s.background)||void 0===O?void 0:O.color2,P.direction=null===($=y.find((function(e){var o;return e.value===(null===s||void 0===s||null===(o=s.background)||void 0===o?void 0:o.direction)})))||void 0===$?void 0:$.id}else{var I;P.color1=null===s||void 0===s||null===(I=s.background)||void 0===I?void 0:I.color}else P.color1=(null===s||void 0===s?void 0:s.background)||"#FFFFFF";p({palette:"custom",image:S,overlay:P,foreground:{accent:(null===(w=a[0])||void 0===w?void 0:w.accent)||(0,r.$O)(P.color1||"#FFFFFF")}})}}}),[s,c]),(0,a.useEffect)((function(){g&&("function"===typeof u&&u((0,r.$O)(g.overlay.color1||"#FFFFFF")),"function"===typeof v&&v(g))}),[g]),(0,t.jsx)(t.Fragment,{children:g&&(0,t.jsxs)("div",{className:"absolute inset-0 pointer-events-none",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-10",style:function(){var e,o,l,n,i,t,a,r={};"solid"===(null===g||void 0===g||null===(e=g.overlay)||void 0===e?void 0:e.type)?r={backgroundColor:null===g||void 0===g||null===(l=g.overlay)||void 0===l?void 0:l.color1}:r={backgroundImage:"linear-gradient(".concat(y.find((function(e){var o;return e.id===((null===g||void 0===g||null===(o=g.overlay)||void 0===o?void 0:o.direction)||"top-down")})).value,", ").concat(null!==(t=null===g||void 0===g||null===(n=g.overlay)||void 0===n?void 0:n.color1)&&void 0!==t?t:"#FFFFFF",", ").concat(null!==(a=null===g||void 0===g||null===(i=g.overlay)||void 0===i?void 0:i.color2)&&void 0!==a?a:"#D1D5DB",")")};if(null===g||void 0===g||null===(o=g.image)||void 0===o?void 0:o.enabled){var d,s,c=isNaN(null===g||void 0===g||null===(d=g.image)||void 0===d?void 0:d.opacity)?50:null===g||void 0===g||null===(s=g.image)||void 0===s?void 0:s.opacity;r.opacity=c/100}return r}()}),(null===(o=g.image)||void 0===o?void 0:o.enabled)&&g.image.media&&(0,t.jsx)("div",{className:"absolute inset-0 z-0",style:{backgroundImage:"url(".concat((null===(l=g.image.media)||void 0===l?void 0:l.preview)||(null===(d=g.image.media)||void 0===d?void 0:d.url)||g.image.media,")"),backgroundPosition:"".concat(g.image.positionX||"center"," ").concat(g.image.positionY||"center"),backgroundSize:"cover"}})]})})}},82258:function(e,o,l){l.r(o),l.d(o,{default:function(){return u}});var n=l(26042),i=l(85893),t=l(31996),a=l(52077),r=l(399),d=l(21123),s=l(67294),c=l(6604);function u(e){var o=e.id,l=e.block,u=e.website,v=null===l||void 0===l?void 0:l.headline,m=null===l||void 0===l?void 0:l.content,g=null===l||void 0===l?void 0:l.button,p=(null===l||void 0===l?void 0:l.align)||"center",y=null===l||void 0===l?void 0:l.animation,f=null===u||void 0===u?void 0:u.animation,b=(0,s.useState)("#FFFFFF"),h=b[0],x=b[1],j=(0,r.Z)(l),w=j.minHeight,N=j.headerHeight;return(0,i.jsxs)("section",{id:o,"data-combine-with-header":1===(null===l||void 0===l?void 0:l.idx)&&(null===l||void 0===l?void 0:l.combineWithHeader),"data-text-color":h,className:(0,t.AK)("flex-shrink-0 flex relative z-10",function(e){var o={top:"items-start",center:"items-center",bottom:"items-end"};return o[e]||o.center}(null===l||void 0===l?void 0:l.verticalAlign)),style:(0,n.Z)({minHeight:w},(null===l||void 0===l?void 0:l.combineWithHeader)?{marginTop:"-".concat(N,"px"),paddingTop:"".concat(N,"px")}:{}),children:[(0,i.jsx)(d.Z,{block:l,website:u,setTextColor:x}),(0,i.jsx)("div",{className:(0,t.AK)("relative z-10 container mx-auto px-6",function(e){var o,l,n={none:{top:"pt-0",bottom:"pb-0"},small:{top:"pt-8 lg:pt-32",bottom:"pb-8 lg:pb-32"},medium:{top:"pt-12 lg:pt-40",bottom:"pb-12 lg:pb-40"},large:{top:"pt-20 lg:pt-48",bottom:"pb-20 lg:pb-48"},default:{top:"pt-12 lg:pt-32 xl:pt-40",bottom:"pb-12 lg:pb-32 xl:pb-40"}},i=(null===(o=n[null===e||void 0===e?void 0:e.top])||void 0===o?void 0:o.top)||n.default.top,t=(null===(l=n[null===e||void 0===e?void 0:e.bottom])||void 0===l?void 0:l.bottom)||n.default.bottom;return"".concat(i," ").concat(t)}(null===l||void 0===l?void 0:l.spacing)),children:(0,i.jsx)(c.c,{settings:y,globalSettings:f,children:(0,i.jsxs)("div",{className:(0,t.AK)("max-w-3xl","text-".concat(p),"left"===p?"ml-0 mr-auto":"right"===p?"ml-auto mr-0":"mx-auto"),children:[v&&(0,i.jsx)("h2",{className:(0,t.AK)("heading-xlarge mb-6 break-word","text-".concat(p)),style:(0,n.Z)({color:h},(0,t.j2)(u)),children:v}),m&&(0,i.jsx)("p",{className:(0,t.AK)("body-large"),style:(0,n.Z)({color:h},(0,t.SV)(u)),children:m}),g&&(0,i.jsx)(a.Z,{button:g,block:l,website:u,className:(0,t.AK)("xl w-full md:w-max",v||m?"mt-6 lg:mt-8":"")})]})})})]})}},399:function(e,o,l){l.d(o,{Z:function(){return i}});var n=l(67294);function i(e){var o,l,i=(0,n.useState)(0),t=i[0],a=i[1],r=(0,n.useState)([0,0]),d=r[0],s=r[1];return(0,n.useEffect)((function(){var e=function(){s([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){var o;e&&a(1===e.idx?(null===(o=null===document||void 0===document?void 0:document.getElementById("website-header"))||void 0===o?void 0:o.offsetHeight)||80:0)}),[e,d]),{minHeight:(null===e||void 0===e||null===(o=e.spacing)||void 0===o?void 0:o.minHeight)?"calc(".concat("min-h-screen"===(null===e||void 0===e||null===(l=e.spacing)||void 0===l?void 0:l.minHeight)?"100vh":"134px"," - ").concat((null===e||void 0===e?void 0:e.combineWithHeader)?0:t,"px)"):"134px",headerHeight:t}}}}]);