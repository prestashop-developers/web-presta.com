(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6383],{6604:function(e,o,l){"use strict";l.d(o,{c:function(){return h}});var n=l(828),t=l(85893),i=l(67294),a=l(26042),r=l(69396),d=l(11355),u={250:"duration-250",300:"duration-300",500:"duration-500",700:"duration-700",750:"duration-750"},s={fadeIn:{enter:"transition-all ease-in-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100",leaveTo:"opacity-0"},slideFromBottom:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 translate-y-8",enterTo:"opacity-100 translate-y-0",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-8"},fadeAndGrow:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},slideFromRight:{enter:"transition-all ease-in-out",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition-all ease-in-out",leaveFrom:"translate-x-0",leaveTo:"translate-x-full"},slideFromLeft:{enter:"transition-all ease-in-out",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition-all ease-in-out",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full"},zoomOut:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-105",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-105"},zoomIn:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},popUp:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-0",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-0"},none:{enter:"",enterFrom:"",enterTo:"",leave:"",leaveFrom:"",leaveTo:""}},c=function(e){var o,l=e.show,n=void 0===l||l,c=e.appear,v=e.children,f=e.animation,p=void 0===f?"none":f,m=e.duration,y=void 0===m?300:m,g=e.asChild,h=e.unmount,b=e.style,x=e.delay,j=null!==(o=s[p])&&void 0!==o?o:s.none,w=(0,r.Z)((0,a.Z)({},j),{enter:"".concat(j.enter," ").concat(u[y]," ").concat(x?"delay-".concat(x):""),leave:"".concat(j.leave," ").concat(u[y]," ").concat(x?"delay-".concat(x):"")}),N=g?d.u.Child:d.u;return(0,t.jsx)(N,(0,r.Z)((0,a.Z)({show:g?void 0:n,as:x?"div":i.Fragment,appear:c,unmount:h,style:b},w),{children:v}))},v=l(42708),f="default",p="medium",m="none",y="medium";var g={slow:750,medium:500,fast:250},h=function(e){var o=e.children,l=e.settings,a=e.globalSettings,r=e.unmount,d=void 0!==r&&r,u=e.delay,s=function(e,o){var l=e||{},n=l.type,t=void 0===n?f:n,i=l.speed,a=void 0===i?p:i;return"default"===t&&(t=(null===o||void 0===o?void 0:o.type)||m,a=(null===o||void 0===o?void 0:o.speed)||y),{type:t,speed:a}}(l,a),h=s.type,b=s.speed,x=(0,i.useState)(!1),j=x[0],w=x[1],N=(0,n.Z)((0,v.YD)({triggerOnce:!0}),3),k=N[0],F=N[1];N[2];return(0,i.useEffect)((function(){var e=null;return F&&(e=setTimeout((function(){return w(!0)}),400)),function(){e&&clearTimeout(e)}}),[F]),"none"===h?(0,t.jsx)(t.Fragment,{children:o}):(0,t.jsxs)(t.Fragment,{children:[!j&&(0,t.jsx)("div",{className:"absolute left-0 top-8 min-h-full min-w-full",ref:k}),(0,t.jsx)(c,{show:j,animation:h,duration:g[b],unmount:d,disableLeave:!0,delay:u,children:o}),!j&&(0,t.jsx)("div",{className:"invisible",children:o})]})}},52077:function(e,o,l){"use strict";l.d(o,{Z:function(){return v}});var n=l(26042),t=l(69396),i=l(85893),a=l(41664),r=l.n(a),d=l(16494),u=l(31996),s=l(67294),c=l(7004);function v(e){var o=e.button,l=e.type,a=e.block,v=e.website,f=e.action,p=e.loading,m=e.className,y=(0,s.useState)({borderWidth:2,borderStyle:"solid",boxShadow:"none"}),g=y[0],h=y[1];return(0,s.useEffect)((function(){if(o&&a&&v){var e,l,i,r=(null===(e=v.colorPalette)||void 0===e||null===(l=e.Palette)||void 0===l?void 0:l.colors)||(null===(i=v.colorPalette)||void 0===i?void 0:i.colors)||[];if(r.length>0&&!v.noPaletteSupport){var d,s,c,f,p,m,y=r[(0,u.dz)(null===(d=a.layers)||void 0===d?void 0:d.palette)]||r[0];if(!o.style){var g=v.button||{background:v.secondaryColor,cornerRadius:8,style:"solid"};g.background||(g.background=v.secondaryColor),o.style={type:g.style,cornerRadius:g.cornerRadius,name:"custom"}}if("custom"===(null===(s=a.layers)||void 0===s?void 0:s.palette))y={color:null===(c=a.layers)||void 0===c||null===(f=c.overlay)||void 0===f?void 0:f.color1,accent:null===(p=a.layers)||void 0===p||null===(m=p.foreground)||void 0===m?void 0:m.accent};if("custom"===o.style.name)h((function(e){return(0,t.Z)((0,n.Z)({},e),{backgroundColor:"outline"===o.style.type?"transparent":y.accent,color:"outline"===o.style.type?(0,u.$O)(y.color):(0,u.$O)(y.accent),borderRadius:o.style.cornerRadius,borderColor:"outline"===o.style.type?(0,u.$O)(y.color):y.accent})}));else{var b=v.buttons&&v.buttons[o.style.name]||{type:"solid",cornerRadius:0};h((function(e){return(0,t.Z)((0,n.Z)({},e),{backgroundColor:"outline"===b.type?"transparent":y.accent,color:"outline"===b.type?(0,u.$O)(y.color):(0,u.$O)(y.accent),borderRadius:b.cornerRadius,borderColor:"outline"===b.type?(0,u.$O)(y.color):y.accent})}))}}else{var x=v.button||{background:v.secondaryColor,cornerRadius:8,style:"solid"};x.background||(x.background=v.secondaryColor),h((function(e){return(0,t.Z)((0,n.Z)({},e),{backgroundColor:"outline"===x.style?"transparent":x.background,color:"outline"===x.style?x.background:(0,u.$O)(x.background),borderRadius:isNaN(x.cornerRadius)?8:x.cornerRadius,borderColor:x.background})}))}}}),[o,a,v]),f||"submit"===l||"section"===o.type?(0,i.jsx)("button",{type:"submit"===l?"submit":"button",onClick:function(e){return(0,c.Gc)(e,o,f)},className:(0,u.AK)("button",m),style:g,disabled:p,children:p?(0,i.jsx)(d.Z,{}):o.label}):(0,i.jsx)(r(),{href:(0,c.f$)(o,v),children:(0,i.jsx)("a",{className:(0,u.AK)("button",m),target:(0,c.U9)(o,v),style:g,children:o.label})})}},7004:function(e,o,l){"use strict";l.d(o,{Gc:function(){return i},U9:function(){return t},f$:function(){return n}});var n=function(e,o){if(e){if("email"===e.type)return"mailto:"+e.link;if("phone"===e.type)return"tel:"+e.link;if("page"===e.type){var l,n,t,i=null===o||void 0===o||null===(l=o.pages)||void 0===l?void 0:l.find((function(o){return o._id===e.page})),a=(null===i||void 0===i?void 0:i.Parent)?null===o||void 0===o||null===(n=o.pages)||void 0===n?void 0:n.find((function(e){return e._id===(null===i||void 0===i?void 0:i.Parent)})):null,r="";return a&&(r+="".concat(a.slug,"/")),r+=null!==(t=null===i||void 0===i?void 0:i.slug)&&void 0!==t?t:"/"}return"section"===e.type?"#"+e.link:(null===e||void 0===e||null===(d=e.link)||void 0===d?void 0:d.includes("http"))||(null===e||void 0===e||null===(u=e.link)||void 0===u?void 0:u.includes("https"))?e.link:(null===e||void 0===e?void 0:e.link)&&"#"!==(null===e||void 0===e?void 0:e.link)?"https://"+(null===e||void 0===e?void 0:e.link):"#";var d,u}return"/"},t=function(e,o){var l,n,t,i=null===o||void 0===o||null===(l=o.pages)||void 0===l?void 0:l.find((function(o){return o._id===(null===e||void 0===e?void 0:e.page)}));return(null===e||void 0===e?void 0:e.newPage)?"_blank":(null===i||void 0===i?void 0:i.forceRender)?"_parent":(null===o||void 0===o||null===(n=o.button)||void 0===n?void 0:n.target)?null===o||void 0===o||null===(t=o.button)||void 0===t?void 0:t.target:"_self"},i=function(e,o,l){if("section"===(null===o||void 0===o?void 0:o.type)){e.preventDefault();var n=document.getElementById(o.link);n&&n.scrollIntoView({behavior:"smooth"})}else"function"===typeof l&&l(e)}},16494:function(e,o,l){"use strict";l.d(o,{Z:function(){return i}});var n=l(85893),t=l(31996);function i(e){var o=e.text,l=e.className,i=e.classNameChild;switch(e.variant){case"form":return(0,n.jsx)("div",{className:"w-full max-w-screen-sm my-8",children:(0,n.jsxs)("div",{className:"animate-pulse flex space-y-8 flex-col",children:[(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/2"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,n.jsx)("div",{className:"h-2 bg-gray-100 rounded w-5/6"})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/4"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,n.jsx)("div",{className:"h-2 bg-gray-100 rounded w-1/2"})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/4"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,n.jsx)("div",{className:"h-2 bg-gray-100 rounded w-1/2"})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/6"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,n.jsx)("div",{className:"h-2 bg-gray-100 rounded w-3/4"})]}),(0,n.jsx)("div",{className:"h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"})]})});case"skeleton":return(0,n.jsx)("div",{className:l,children:(0,n.jsx)("div",{className:"animate-pulse",children:(0,n.jsx)("div",{className:(0,t.AK)("h-6 bg-gray-200 rounded",i)})})});case"table":return(0,n.jsx)("div",{className:"w-full my-8",children:(0,n.jsxs)("div",{className:"animate-pulse flex space-y-2 flex-col",children:[(0,n.jsxs)("div",{className:"space-x-2 flex",children:[(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"})]}),[1,2,3,4,5,6].map((function(e){return(0,n.jsxs)("div",{className:"space-x-2 flex",children:[(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,n.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"})]},e)}))]})});default:return(0,n.jsxs)("div",{className:(0,t.AK)("inline-flex items-center",l),children:[(0,n.jsxs)("svg",{className:(0,t.AK)("animate-spin ml-1 mr-3 h-4 w-4",l&&"text-indigo-600"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),o||""===o?o:"Loading..."]})}}},21123:function(e,o,l){"use strict";l.d(o,{Z:function(){return d}});var n=l(26042),t=l(69396),i=l(85893),a=l(67294),r=l(31996);function d(e){var o,l,d,u=e.block,s=e.website,c=e.setTextColor,v=e.onChange,f=(0,a.useState)(null),p=f[0],m=f[1],y=[{id:"top-down",value:"180deg",icon:"ArrowDownIcon"},{id:"left-right",value:"90deg",icon:"ArrowRightIcon"},{id:"bottom-left-top-right",value:"45deg",icon:"ArrowUpRightIcon"},{id:"bottom-right-top-left",value:"315deg",icon:"ArrowUpLeftIcon"}];return(0,a.useEffect)((function(){if(s&&u){var e,o,l,i,a=(null===s||void 0===s||null===(e=s.colorPalette)||void 0===e||null===(o=e.Palette)||void 0===o?void 0:o.colors)||(null===s||void 0===s||null===(l=s.colorPalette)||void 0===l?void 0:l.colors)||[];if(null===(i=u.layers)||void 0===i?void 0:i.palette)if("custom"===u.layers.palette)m(null===u||void 0===u?void 0:u.layers);else{var d,c,v,f,p,g,h,b,x=(0,r.dz)(u.layers.palette),j={};if("gradient"===(null===(d=u.layers.overlay)||void 0===d?void 0:d.type))j={type:"gradient",color1:null===(f=a[x])||void 0===f?void 0:f.color,color2:null===(p=a[x%2===0?x+1:x-1])||void 0===p?void 0:p.color,accent:null===(g=a[x])||void 0===g?void 0:g.accent};else j={type:"solid",color1:null===(h=a[x])||void 0===h?void 0:h.color,accent:null===(b=a[x])||void 0===b?void 0:b.accent};m((0,t.Z)((0,n.Z)({},null===u||void 0===u?void 0:u.layers),{overlay:(0,n.Z)({},null===u||void 0===u||null===(c=u.layers)||void 0===c?void 0:c.overlay,j),foreground:{accent:(null===(v=a[x])||void 0===v?void 0:v.accent)||(0,r.$O)(j.color1||"#FFFFFF")}}))}else{var w,N,k,F,C,R,T,_,L,P,Z,A={type:"solid"},E={enabled:!1};if("object"===typeof(null===u||void 0===u?void 0:u.background))if("image"===(null===u||void 0===u||null===(N=u.background)||void 0===N?void 0:N.type))A.color1=(null===(F=u.background.overlay)||void 0===F?void 0:F.color.includes("rgba"))?(0,r.s)(null===(C=u.background.overlay)||void 0===C?void 0:C.color):null===(R=u.background.overlay)||void 0===R?void 0:R.color,E.enabled=!0,E.media=null===u||void 0===u||null===(T=u.background)||void 0===T?void 0:T.image,E.positionX=(null===(_=u.background)||void 0===_?void 0:_.imagePositionX)||"50%",E.positionY=(null===(L=u.background)||void 0===L?void 0:L.imagePositionY)||"50%",E.opacity=(null===(P=u.background)||void 0===P||null===(Z=P.overlay)||void 0===Z?void 0:Z.amount)||50;else if("gradient"===(null===u||void 0===u||null===(k=u.background)||void 0===k?void 0:k.type)){var O,S,M;A.type="gradient",A.color1=null===u||void 0===u||null===(O=u.background)||void 0===O?void 0:O.color,A.color2=null===u||void 0===u||null===(S=u.background)||void 0===S?void 0:S.color2,A.direction=null===(M=y.find((function(e){var o;return e.value===(null===u||void 0===u||null===(o=u.background)||void 0===o?void 0:o.direction)})))||void 0===M?void 0:M.id}else{var H;A.color1=null===u||void 0===u||null===(H=u.background)||void 0===H?void 0:H.color}else A.color1=(null===u||void 0===u?void 0:u.background)||"#FFFFFF";m({palette:"custom",image:E,overlay:A,foreground:{accent:(null===(w=a[0])||void 0===w?void 0:w.accent)||(0,r.$O)(A.color1||"#FFFFFF")}})}}}),[u,s]),(0,a.useEffect)((function(){p&&("function"===typeof c&&c((0,r.$O)(p.overlay.color1||"#FFFFFF")),"function"===typeof v&&v(p))}),[p]),(0,i.jsx)(i.Fragment,{children:p&&(0,i.jsxs)("div",{className:"absolute inset-0 pointer-events-none",children:[(0,i.jsx)("div",{className:"absolute inset-0 z-10",style:function(){var e,o,l,n,t,i,a,r={};"solid"===(null===p||void 0===p||null===(e=p.overlay)||void 0===e?void 0:e.type)?r={backgroundColor:null===p||void 0===p||null===(l=p.overlay)||void 0===l?void 0:l.color1}:r={backgroundImage:"linear-gradient(".concat(y.find((function(e){var o;return e.id===((null===p||void 0===p||null===(o=p.overlay)||void 0===o?void 0:o.direction)||"top-down")})).value,", ").concat(null!==(i=null===p||void 0===p||null===(n=p.overlay)||void 0===n?void 0:n.color1)&&void 0!==i?i:"#FFFFFF",", ").concat(null!==(a=null===p||void 0===p||null===(t=p.overlay)||void 0===t?void 0:t.color2)&&void 0!==a?a:"#D1D5DB",")")};if(null===p||void 0===p||null===(o=p.image)||void 0===o?void 0:o.enabled){var d,u,s=isNaN(null===p||void 0===p||null===(d=p.image)||void 0===d?void 0:d.opacity)?50:null===p||void 0===p||null===(u=p.image)||void 0===u?void 0:u.opacity;r.opacity=s/100}return r}()}),(null===(o=p.image)||void 0===o?void 0:o.enabled)&&p.image.media&&(0,i.jsx)("div",{className:"absolute inset-0 z-0",style:{backgroundImage:"url(".concat((null===(l=p.image.media)||void 0===l?void 0:l.preview)||(null===(d=p.image.media)||void 0===d?void 0:d.url)||p.image.media,")"),backgroundPosition:"".concat(p.image.positionX||"center"," ").concat(p.image.positionY||"center"),backgroundSize:"cover"}})]})})}},76383:function(e,o,l){"use strict";l.r(o),l.d(o,{default:function(){return v}});var n=l(85893),t=l(31996),i=l(29260),a=l.n(i),r=l(52077),d=l(399),u=l(67294),s=l(21123),c=l(6604);function v(e){var o=e.id,l=e.block,i=e.website,v=null===l||void 0===l?void 0:l.content,f=null===l||void 0===l?void 0:l.align,p=null===l||void 0===l?void 0:l.image,m=null===l||void 0===l?void 0:l.button,y=null===l||void 0===l?void 0:l.animation,g=null===i||void 0===i?void 0:i.animation,h=(0,u.useState)("#FFFFFF"),b=h[0],x=h[1],j=(0,d.Z)(l).minHeight;return(0,n.jsxs)("section",{id:o,className:(0,t.AK)("flex flex-none flex-shrink-0 relative z-10",(0,t.A2)(null===l||void 0===l?void 0:l.verticalAlign)),style:{minHeight:j},children:[(0,n.jsx)(s.Z,{block:l,website:i,setTextColor:x}),(0,n.jsx)("div",{className:(0,t.AK)("relative z-10 container mx-auto",(0,t.bG)(null===l||void 0===l?void 0:l.spacing)),children:(0,n.jsx)(c.c,{settings:y,globalSettings:g,children:(0,n.jsxs)("div",{className:(0,t.AK)("flex flex-col lg:flex-row w-full gap-10 lg:gap-20","top"===f?"items-start":"bottom"===f?"items-end":"items-center","left"===(null===p||void 0===p?void 0:p.align)&&"lg:!flex-row-reverse"),children:[(0,n.jsxs)("div",{className:(0,t.AK)("flex-1 flex flex-col items-center lg:items-start"),children:[(0,n.jsx)("div",{className:"rich-text-block",style:{color:b},dangerouslySetInnerHTML:{__html:v}}),m&&(0,n.jsx)(r.Z,{button:m,block:l,website:i,className:"lg mt-6 lg:mt-8 w-full md:w-max"})]}),(0,n.jsx)("div",{className:(0,t.AK)("flex-1 flex w-full justify-center lg:justify-start","left"===(null===p||void 0===p?void 0:p.align)&&"lg:!justify-end"),children:(null===p||void 0===p?void 0:p.media)&&(0,n.jsx)("div",{className:(0,t.AK)("flex-shrink-0 relative w-full mx-auto",(0,t.n3)(p.aspectRatio)),children:(0,t.QW)(null===p||void 0===p?void 0:p.media)&&(0,n.jsx)(a(),{onContextMenu:function(e){e.preventDefault()},src:(0,t.QW)(null===p||void 0===p?void 0:p.media),objectFit:(null===p||void 0===p?void 0:p.imageFit)||"cover",objectPosition:"".concat((null===p||void 0===p?void 0:p.imagePositionX)||"center"," ").concat((null===p||void 0===p?void 0:p.imagePositionY)||"center"),layout:"fill",alt:(null===i||void 0===i?void 0:i.headline)||"We provide high quality services",className:(0,t.yW)(null===p||void 0===p?void 0:p.cornerRadius,null===i||void 0===i?void 0:i.cornerRadius)})})})]})})})]})}},399:function(e,o,l){"use strict";l.d(o,{Z:function(){return t}});var n=l(67294);function t(e){var o,l,t=(0,n.useState)(0),i=t[0],a=t[1],r=(0,n.useState)([0,0]),d=r[0],u=r[1];return(0,n.useEffect)((function(){var e=function(){u([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){var o;e&&a(1===e.idx?(null===(o=null===document||void 0===document?void 0:document.getElementById("website-header"))||void 0===o?void 0:o.offsetHeight)||80:0)}),[e,d]),{minHeight:(null===e||void 0===e||null===(o=e.spacing)||void 0===o?void 0:o.minHeight)?"calc(".concat("min-h-screen"===(null===e||void 0===e||null===(l=e.spacing)||void 0===l?void 0:l.minHeight)?"100vh":"134px"," - ").concat((null===e||void 0===e?void 0:e.combineWithHeader)?0:i,"px)"):"134px",headerHeight:i}}},71210:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.getDomainLocale=function(e,o,l,n){return!1};("function"===typeof o.default||"object"===typeof o.default&&null!==o.default)&&"undefined"===typeof o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),e.exports=o.default)},48418:function(e,o,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=l(94941).Z;l(45753).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=l(92648).Z,i=l(17273).Z,a=t(l(67294)),r=l(76273),d=l(22725),u=l(63462),s=l(21018),c=l(57190),v=l(71210),f=l(98684),p={};function m(e,o,l,n){if(e&&r.isLocalURL(o)){Promise.resolve(e.prefetch(o,l,n)).catch((function(e){0}));var t=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;p[o+"%"+l+(t?"%"+t:"")]=!0}}var y=a.default.forwardRef((function(e,o){var l,t=e.href,y=e.as,g=e.children,h=e.prefetch,b=e.passHref,x=e.replace,j=e.shallow,w=e.scroll,N=e.locale,k=e.onClick,F=e.onMouseEnter,C=e.onTouchStart,R=e.legacyBehavior,T=void 0===R?!0!==Boolean(!1):R,_=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);l=g,!T||"string"!==typeof l&&"number"!==typeof l||(l=a.default.createElement("a",null,l));var L=!1!==h,P=a.default.useContext(u.RouterContext),Z=a.default.useContext(s.AppRouterContext);Z&&(P=Z);var A,E=a.default.useMemo((function(){var e=n(r.resolveHref(P,t,!0),2),o=e[0],l=e[1];return{href:o,as:y?r.resolveHref(P,y):l||o}}),[P,t,y]),O=E.href,S=E.as,M=a.default.useRef(O),H=a.default.useRef(S);T&&(A=a.default.Children.only(l));var K=T?A&&"object"===typeof A&&A.ref:o,z=n(c.useIntersection({rootMargin:"200px"}),3),I=z[0],$=z[1],D=z[2],U=a.default.useCallback((function(e){H.current===S&&M.current===O||(D(),H.current=S,M.current=O),I(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[S,K,O,D,I]);a.default.useEffect((function(){var e=$&&L&&r.isLocalURL(O),o="undefined"!==typeof N?N:P&&P.locale,l=p[O+"%"+S+(o?"%"+o:"")];e&&!l&&m(P,O,S,{locale:o})}),[S,O,$,N,L,P]);var B={ref:U,onClick:function(e){T||"function"!==typeof k||k(e),T&&A.props&&"function"===typeof A.props.onClick&&A.props.onClick(e),e.defaultPrevented||function(e,o,l,n,t,i,d,u,s,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var o=e.currentTarget.target;return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(l)){e.preventDefault();var v=function(){"beforePopState"in o?o[t?"replace":"push"](l,n,{shallow:i,locale:u,scroll:d}):o[t?"replace":"push"](l,{forceOptimisticNavigation:!c})};s?a.default.startTransition(v):v()}}(e,P,O,S,x,j,w,N,Boolean(Z),L)},onMouseEnter:function(e){T||"function"!==typeof F||F(e),T&&A.props&&"function"===typeof A.props.onMouseEnter&&A.props.onMouseEnter(e),!L&&Z||r.isLocalURL(O)&&m(P,O,S,{priority:!0})},onTouchStart:function(e){T||"function"!==typeof C||C(e),T&&A.props&&"function"===typeof A.props.onTouchStart&&A.props.onTouchStart(e),!L&&Z||r.isLocalURL(O)&&m(P,O,S,{priority:!0})}};if(!T||b||"a"===A.type&&!("href"in A.props)){var W="undefined"!==typeof N?N:P&&P.locale,G=P&&P.isLocaleDomain&&v.getDomainLocale(S,W,P.locales,P.domainLocales);B.href=G||f.addBasePath(d.addLocale(S,W,P&&P.defaultLocale))}return T?a.default.cloneElement(A,B):a.default.createElement("a",Object.assign({},_,B),l)}));o.default=y,("function"===typeof o.default||"object"===typeof o.default&&null!==o.default)&&"undefined"===typeof o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),e.exports=o.default)},21018:function(e,o,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.TemplateContext=o.GlobalLayoutRouterContext=o.LayoutRouterContext=o.AppRouterContext=void 0;var n=(0,l(92648).Z)(l(67294)),t=n.default.createContext(null);o.AppRouterContext=t;var i=n.default.createContext(null);o.LayoutRouterContext=i;var a=n.default.createContext(null);o.GlobalLayoutRouterContext=a;var r=n.default.createContext(null);o.TemplateContext=r},41664:function(e,o,l){e.exports=l(48418)}}]);