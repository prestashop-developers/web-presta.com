"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6848],{6604:function(e,o,i){i.d(o,{c:function(){return h}});var n=i(828),l=i(85893),t=i(67294),a=i(26042),d=i(69396),r=i(11355),v={250:"duration-250",300:"duration-300",500:"duration-500",700:"duration-700",750:"duration-750"},u={fadeIn:{enter:"transition-all ease-in-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100",leaveTo:"opacity-0"},slideFromBottom:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 translate-y-8",enterTo:"opacity-100 translate-y-0",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-8"},fadeAndGrow:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},slideFromRight:{enter:"transition-all ease-in-out",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition-all ease-in-out",leaveFrom:"translate-x-0",leaveTo:"translate-x-full"},slideFromLeft:{enter:"transition-all ease-in-out",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition-all ease-in-out",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full"},zoomOut:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-105",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-105"},zoomIn:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},popUp:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-0",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-0"},none:{enter:"",enterFrom:"",enterTo:"",leave:"",leaveFrom:"",leaveTo:""}},c=function(e){var o,i=e.show,n=void 0===i||i,c=e.appear,s=e.children,m=e.animation,f=void 0===m?"none":m,g=e.duration,p=void 0===g?300:g,y=e.asChild,h=e.unmount,F=e.style,b=e.delay,x=null!==(o=u[f])&&void 0!==o?o:u.none,w=(0,d.Z)((0,a.Z)({},x),{enter:"".concat(x.enter," ").concat(v[p]," ").concat(b?"delay-".concat(b):""),leave:"".concat(x.leave," ").concat(v[p]," ").concat(b?"delay-".concat(b):"")}),k=y?r.u.Child:r.u;return(0,l.jsx)(k,(0,d.Z)((0,a.Z)({show:y?void 0:n,as:b?"div":t.Fragment,appear:c,unmount:h,style:F},w),{children:s}))},s=i(42708),m="default",f="medium",g="none",p="medium";var y={slow:750,medium:500,fast:250},h=function(e){var o=e.children,i=e.settings,a=e.globalSettings,d=e.unmount,r=void 0!==d&&d,v=e.delay,u=function(e,o){var i=e||{},n=i.type,l=void 0===n?m:n,t=i.speed,a=void 0===t?f:t;return"default"===l&&(l=(null===o||void 0===o?void 0:o.type)||g,a=(null===o||void 0===o?void 0:o.speed)||p),{type:l,speed:a}}(i,a),h=u.type,F=u.speed,b=(0,t.useState)(!1),x=b[0],w=b[1],k=(0,n.Z)((0,s.YD)({triggerOnce:!0}),3),j=k[0],T=k[1];k[2];return(0,t.useEffect)((function(){var e=null;return T&&(e=setTimeout((function(){return w(!0)}),400)),function(){e&&clearTimeout(e)}}),[T]),"none"===h?(0,l.jsx)(l.Fragment,{children:o}):(0,l.jsxs)(l.Fragment,{children:[!x&&(0,l.jsx)("div",{className:"absolute left-0 top-8 min-h-full min-w-full",ref:j}),(0,l.jsx)(c,{show:x,animation:h,duration:y[F],unmount:r,disableLeave:!0,delay:v,children:o}),!x&&(0,l.jsx)("div",{className:"invisible",children:o})]})}},21123:function(e,o,i){i.d(o,{Z:function(){return r}});var n=i(26042),l=i(69396),t=i(85893),a=i(67294),d=i(31996);function r(e){var o,i,r,v=e.block,u=e.website,c=e.setTextColor,s=e.onChange,m=(0,a.useState)(null),f=m[0],g=m[1],p=[{id:"top-down",value:"180deg",icon:"ArrowDownIcon"},{id:"left-right",value:"90deg",icon:"ArrowRightIcon"},{id:"bottom-left-top-right",value:"45deg",icon:"ArrowUpRightIcon"},{id:"bottom-right-top-left",value:"315deg",icon:"ArrowUpLeftIcon"}];return(0,a.useEffect)((function(){if(u&&v){var e,o,i,t,a=(null===u||void 0===u||null===(e=u.colorPalette)||void 0===e||null===(o=e.Palette)||void 0===o?void 0:o.colors)||(null===u||void 0===u||null===(i=u.colorPalette)||void 0===i?void 0:i.colors)||[];if(null===(t=v.layers)||void 0===t?void 0:t.palette)if("custom"===v.layers.palette)g(null===v||void 0===v?void 0:v.layers);else{var r,c,s,m,f,y,h,F,b=(0,d.dz)(v.layers.palette),x={};if("gradient"===(null===(r=v.layers.overlay)||void 0===r?void 0:r.type))x={type:"gradient",color1:null===(m=a[b])||void 0===m?void 0:m.color,color2:null===(f=a[b%2===0?b+1:b-1])||void 0===f?void 0:f.color,accent:null===(y=a[b])||void 0===y?void 0:y.accent};else x={type:"solid",color1:null===(h=a[b])||void 0===h?void 0:h.color,accent:null===(F=a[b])||void 0===F?void 0:F.accent};g((0,l.Z)((0,n.Z)({},null===v||void 0===v?void 0:v.layers),{overlay:(0,n.Z)({},null===v||void 0===v||null===(c=v.layers)||void 0===c?void 0:c.overlay,x),foreground:{accent:(null===(s=a[b])||void 0===s?void 0:s.accent)||(0,d.$O)(x.color1||"#FFFFFF")}}))}else{var w,k,j,T,N,H,A,Z,z,E,W,I={type:"solid"},P={enabled:!1};if("object"===typeof(null===v||void 0===v?void 0:v.background))if("image"===(null===v||void 0===v||null===(k=v.background)||void 0===k?void 0:k.type))I.color1=(null===(T=v.background.overlay)||void 0===T?void 0:T.color.includes("rgba"))?(0,d.s)(null===(N=v.background.overlay)||void 0===N?void 0:N.color):null===(H=v.background.overlay)||void 0===H?void 0:H.color,P.enabled=!0,P.media=null===v||void 0===v||null===(A=v.background)||void 0===A?void 0:A.image,P.positionX=(null===(Z=v.background)||void 0===Z?void 0:Z.imagePositionX)||"50%",P.positionY=(null===(z=v.background)||void 0===z?void 0:z.imagePositionY)||"50%",P.opacity=(null===(E=v.background)||void 0===E||null===(W=E.overlay)||void 0===W?void 0:W.amount)||50;else if("gradient"===(null===v||void 0===v||null===(j=v.background)||void 0===j?void 0:j.type)){var C,S,D;I.type="gradient",I.color1=null===v||void 0===v||null===(C=v.background)||void 0===C?void 0:C.color,I.color2=null===v||void 0===v||null===(S=v.background)||void 0===S?void 0:S.color2,I.direction=null===(D=p.find((function(e){var o;return e.value===(null===v||void 0===v||null===(o=v.background)||void 0===o?void 0:o.direction)})))||void 0===D?void 0:D.id}else{var R;I.color1=null===v||void 0===v||null===(R=v.background)||void 0===R?void 0:R.color}else I.color1=(null===v||void 0===v?void 0:v.background)||"#FFFFFF";g({palette:"custom",image:P,overlay:I,foreground:{accent:(null===(w=a[0])||void 0===w?void 0:w.accent)||(0,d.$O)(I.color1||"#FFFFFF")}})}}}),[v,u]),(0,a.useEffect)((function(){f&&("function"===typeof c&&c((0,d.$O)(f.overlay.color1||"#FFFFFF")),"function"===typeof s&&s(f))}),[f]),(0,t.jsx)(t.Fragment,{children:f&&(0,t.jsxs)("div",{className:"absolute inset-0 pointer-events-none",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-10",style:function(){var e,o,i,n,l,t,a,d={};"solid"===(null===f||void 0===f||null===(e=f.overlay)||void 0===e?void 0:e.type)?d={backgroundColor:null===f||void 0===f||null===(i=f.overlay)||void 0===i?void 0:i.color1}:d={backgroundImage:"linear-gradient(".concat(p.find((function(e){var o;return e.id===((null===f||void 0===f||null===(o=f.overlay)||void 0===o?void 0:o.direction)||"top-down")})).value,", ").concat(null!==(t=null===f||void 0===f||null===(n=f.overlay)||void 0===n?void 0:n.color1)&&void 0!==t?t:"#FFFFFF",", ").concat(null!==(a=null===f||void 0===f||null===(l=f.overlay)||void 0===l?void 0:l.color2)&&void 0!==a?a:"#D1D5DB",")")};if(null===f||void 0===f||null===(o=f.image)||void 0===o?void 0:o.enabled){var r,v,u=isNaN(null===f||void 0===f||null===(r=f.image)||void 0===r?void 0:r.opacity)?50:null===f||void 0===f||null===(v=f.image)||void 0===v?void 0:v.opacity;d.opacity=u/100}return d}()}),(null===(o=f.image)||void 0===o?void 0:o.enabled)&&f.image.media&&(0,t.jsx)("div",{className:"absolute inset-0 z-0",style:{backgroundImage:"url(".concat((null===(i=f.image.media)||void 0===i?void 0:i.preview)||(null===(r=f.image.media)||void 0===r?void 0:r.url)||f.image.media,")"),backgroundPosition:"".concat(f.image.positionX||"center"," ").concat(f.image.positionY||"center"),backgroundSize:"cover"}})]})})}},16848:function(e,o,i){i.r(o),i.d(o,{default:function(){return u}});var n=i(85893),l=i(31996),t=i(29260),a=i.n(t),d=i(399),r=i(21123),v=i(6604);function u(e){var o,i,t,u,c=e.id,s=e.website,m=e.block,f=(0,d.Z)(m).minHeight,g=null===m||void 0===m?void 0:m.animation,p=null===s||void 0===s?void 0:s.animation;return(0,n.jsxs)("section",{id:c,className:(0,l.AK)("flex flex-none relative z-10",(0,l.A2)((null===m||void 0===m?void 0:m.verticalAlign)||"center")),style:{minHeight:f},children:[(0,n.jsx)(r.Z,{block:m,website:s}),(0,n.jsx)("div",{className:(0,l.AK)("relative z-10",(null===m||void 0===m?void 0:m.fullWidth)?"w-full":"container ".concat((0,l.bG)(null===m||void 0===m?void 0:m.spacing)),"mx-auto"),children:(0,n.jsx)(v.c,{settings:g,globalSettings:p,children:(0,n.jsx)("div",{className:(0,l.AK)("relative z-10",!m.fullWidth&&("min-h-screen"!==(null===m||void 0===m||null===(o=m.spacing)||void 0===o?void 0:o.minHeight)?"max-h-250 mx-auto overflow-hidden":"mx-auto"),"flex justify-center items-center"),children:(null===m||void 0===m||null===(i=m.media)||void 0===i?void 0:i.url)&&(0,n.jsx)("div",{className:(0,l.AK)("relative overflow-hidden w-full",(null===m||void 0===m?void 0:m.fullWidth)?"w-full "+("min-h-screen"===(null===m||void 0===m||null===(t=m.spacing)||void 0===t?void 0:t.minHeight)?"":"h-60 md:h-80 lg:h-120 xl:h-150"):(0,l.n3)(null===m||void 0===m?void 0:m.aspectRatio),!(null===m||void 0===m?void 0:m.fullWidth)&&(0,l.yW)(null===m||void 0===m?void 0:m.cornerRadius,null===s||void 0===s?void 0:s.cornerRadius)),style:"min-h-screen"===(null===m||void 0===m||null===(u=m.spacing)||void 0===u?void 0:u.minHeight)&&(null===m||void 0===m?void 0:m.fullWidth)?{minHeight:f}:{},children:(0,l.QW)(null===m||void 0===m?void 0:m.media)&&(0,n.jsx)(a(),{onContextMenu:function(e){return e.preventDefault()},src:(0,l.QW)(null===m||void 0===m?void 0:m.media),alt:null===m||void 0===m?void 0:m.media.author,layout:"fill",objectFit:(null===m||void 0===m?void 0:m.imageFit)||"cover",objectPosition:"".concat((null===m||void 0===m?void 0:m.imagePositionX)||"center"," ").concat((null===m||void 0===m?void 0:m.imagePositionY)||"center"),className:(0,l.AK)("w-full h-full")})})})})})]})}},399:function(e,o,i){i.d(o,{Z:function(){return l}});var n=i(67294);function l(e){var o,i,l=(0,n.useState)(0),t=l[0],a=l[1],d=(0,n.useState)([0,0]),r=d[0],v=d[1];return(0,n.useEffect)((function(){var e=function(){v([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){var o;e&&a(1===e.idx?(null===(o=null===document||void 0===document?void 0:document.getElementById("website-header"))||void 0===o?void 0:o.offsetHeight)||80:0)}),[e,r]),{minHeight:(null===e||void 0===e||null===(o=e.spacing)||void 0===o?void 0:o.minHeight)?"calc(".concat("min-h-screen"===(null===e||void 0===e||null===(i=e.spacing)||void 0===i?void 0:i.minHeight)?"100vh":"134px"," - ").concat((null===e||void 0===e?void 0:e.combineWithHeader)?0:t,"px)"):"134px",headerHeight:t}}}}]);