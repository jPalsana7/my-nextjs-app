(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{1013:function(e,t,r){"use strict";r.d(t,{ZP:function(){return B}});var i=r(7294),s=r(8375),o=r(8878),n=r(2317),a=r(8990),c=r(9260),l=r(2903);var d=r(275),u=r(9975);const h=(0,d.zo)("div",{d:"flex",w:"100%",h:"auto",flex:"1 1 auto",fd:"column",jc:"inherit",ai:"inherit",ac:"inherit",py:"$lg",px:"$sm",oy:"auto",position:"relative",ta:"left"}),b=(0,d.zo)("div",{$$cardColor:"$colors$backgroundContrast",$$cardTextColor:"$colors$text",m:0,p:0,br:"$lg",bg:"$$cardColor",color:"$$cardTextColor",position:"relative",display:"flex",overflow:"hidden",fd:"column",width:"100%",height:"auto",boxSizing:"border-box","@motion":{transition:"none"},".nextui-image":{width:"100%"},[`& ${s.q}`]:{zIndex:"$1",".nextui-drip-filler":{opacity:.25,fill:"$accents6"}},variants:{variant:{flat:{bg:"$accents0"},shadow:{dropShadow:"$lg"},bordered:{borderStyle:"solid",borderColor:"$border"}},borderWeight:{light:{bw:"$light"},normal:{bw:"$normal"},bold:{bw:"$bold"},extrabold:{bw:"$extrabold"},black:{bw:"$black"}},disableAnimation:{true:{transition:"none"},false:{transition:"$card"}},isPressable:{true:{cursor:"pointer",us:"none",WebkitTapHighlightColor:"transparent"}},isPressed:{true:{}},isHovered:{true:{dropShadow:"$lg"}}},compoundVariants:[{isPressed:!0,disableAnimation:!1,css:{transform:"scale(0.97)"}},{isHovered:!0,disableAnimation:!1,css:{transform:"translateY(-2px)"}},{isHovered:!0,variant:"shadow",css:{dropShadow:"$xl"}}]},u.UU,u.BM),f=(0,d.zo)("div",{w:"100%",display:"flex",flexShrink:0,zIndex:"$1",jc:"flex-start",ai:"center",overflow:"hidden",color:"inherit",p:"$sm"}),m=(0,d.zo)("div",{w:"100%",h:"auto",p:"$sm",d:"flex",ai:"center",overflow:"hidden",color:"inherit",bblr:"$lg",bbrr:"$lg",variants:{isBlurred:{true:{bf:"saturate(180%) blur(10px)",bg:"$$cardColor"}}}});var g=r(3569),p=r(5893);const x=i.forwardRef((({...e},t)=>{const{as:r,css:d,children:u,...h}=e,{cardRef:f,variant:m,isFocusVisible:g,isPressable:x,isPressed:$,disableAnimation:v,disableRipple:w,borderWeight:y,isHovered:P,getCardProps:N,dripBindings:j}=(e=>{const{ref:t,disableAnimation:r=!1,disableRipple:s=!1,variant:d="shadow",isHoverable:u=!1,borderWeight:h="light",isPressable:b=!1,onClick:f,onPress:m,autoFocus:g,allowTextSelectionOnPress:p=!0,...x}=e,$=(0,l.gy)(t),{onClick:v,...w}=(0,c.Z)(!1,$),y=e=>{r||s||!$.current||v(e)},{isPressed:P,pressProps:N}=(0,a.r7)({isDisabled:!b,onPress:e=>{"keyboard"!==e.pointerType&&"virtual"!==e.pointerType||(y(e),null==f||f(e)),null==m||m(e)},allowTextSelectionOnPress:p,...x}),{hoverProps:j,isHovered:k}=(0,a.XI)({isDisabled:!u,...x}),{isFocusVisible:C,focusProps:S}=(0,o.Fx)({autoFocus:g});N.onClick=e=>{b&&(y(e),null==f||f(e))};const z=(0,i.useCallback)(((e={})=>({...(0,n.dG)(b?{...N,...S}:{},u?j:{},x,e)})),[b,u,N,S,j,x]);return{cardRef:$,variant:d,borderWeight:h,isPressable:b,isHovered:k,isPressed:P,disableAnimation:r,disableRipple:s,dripBindings:w,onDripClickHandler:v,isFocusVisible:C,getCardProps:z}})({...h,ref:t});return(0,p.jsxs)(b,{ref:f,as:r,css:d,variant:m,role:x?"button":"section",borderWeight:y,disableAnimation:v,isPressable:x,isPressed:$,isHovered:P,tabIndex:x?0:-1,isFocusVisible:g,...N(),children:[x&&!v&&!w&&(0,p.jsx)(s.Z,{...j}),u]})}));g.Ts&&(x.displayName="NextUI.Card"),x.toString=()=>".nextui-card";var $=x,v=r(88);const w=(0,d.F4)({"0%":{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}),y=(0,d.zo)("div",{opacity:0,margin:"0 auto",position:"relative",overflow:"hidden",maxWidth:"100%",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms","@motion":{transition:"none"},variants:{ready:{true:{opacity:1},false:{opacity:0}}}}),P=(0,d.zo)("img",{size:"100%",display:"block"}),N=(0,d.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",borderRadius:"inherit",backgroundImage:"linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)",backgroundSize:"400% 100%",animation:`${w} 5s ease-in-out infinite`,transition:"opacity 300ms ease-out"});var j=r(1309);const k=i.memo((({opacity:e,css:t,className:r,...i})=>(0,p.jsx)(N,{css:{opacity:e,...t},className:(0,j.Z)("nextui-image-skeleton",r),...i})));g.Ts&&(k.displayName="NextUI.ImageSkeleton"),k.toString=()=>".nextui-image-skeleton";var C=(0,v.Z)(k,{opacity:.5,className:""});const S=(e,t)=>{if(!e)return 0;const r=e.includes("px")?+e.split("px")[0]:e.includes("%")?+e.split("%")[0]*t*.01:e;return Number.isNaN(+r)?0:+r};var z=e=>{const[t,r]=(0,i.useState)({width:0,height:0}),s=()=>{const{width:t,height:i}=(e=>{if(!e||"undefined"==typeof window)return{width:0,height:0};const t=e.getBoundingClientRect(),{width:r,height:i}=window.getComputedStyle(e);return{width:S(`${r}`,t.width),height:S(`${i}`,t.height)}})(e.current);r({width:t,height:i})};return(0,i.useEffect)((()=>s()),[e.current]),[t,s]},T=e=>{const[t,r]=(0,i.useState)((()=>"function"==typeof e?e():e)),s=(0,i.useRef)(e);return(0,i.useEffect)((()=>{s.current=t}),[t]),[t,e=>{const t="function"==typeof e?e(s.current):e;s.current=t,r(t)},s]},Z=r(6693);const _=i.forwardRef(((e,t)=>{const{src:r,width:s,height:o,showSkeleton:n=!0,className:a,maxDelay:c=3e3,autoResize:d=!1,objectFit:u="scale-down",containerCss:h,css:b,...f}=e,m=(0,l.gy)(t),[g,x]=(0,i.useState)(!0),[$,v]=(0,i.useState)(n),{w:w,h:N}=(0,i.useMemo)((()=>({w:s?"number"==typeof s?`${s}px`:s:"auto",h:o?"number"==typeof o?`${o}px`:o:"auto"})),[s,o]),[k,S,_]=T(N),[E,H]=z(m),I=n&&!!s&&!!o;(0,i.useEffect)((()=>{m.current&&m.current.complete&&(x(!1),v(!1))})),(0,i.useEffect)((()=>{const e=setTimeout((()=>{I&&v(!1),clearTimeout(e)}),c);return()=>clearTimeout(e)}),[g]),(0,i.useEffect)((()=>{if(!d)return;const e=0===E.width,t="auto"===_.current;!e&&s&&o&&(E.width<s?!t&&S("auto"):t&&S(N))}),[E,s]),(0,Z.Z)((()=>{d&&H()}));const F=(0,i.useMemo)((()=>g?"loading":"ready"),[g]);return(0,p.jsxs)(y,{className:(0,j.Z)("nextui-image-container",`nextui-image--${F}`,a),"data-state":F,ready:!g||$,css:{width:w,height:k,...h},children:[$&&(0,p.jsx)(C,{opacity:1}),(0,p.jsx)(P,{ref:m,className:"nextui-image",width:s,height:o,onLoad:()=>{x(!1)},src:r,"data-state":F,alt:e.alt||"",css:{objectFit:u,...b},...f})]})}));g.Ts&&(_.displayName="NextUI.Image"),_.toString=()=>".nextui-image";var E=i.memo(_);const H=e=>`calc(${15.25*e}pt + 1px * ${e-1})`,I=(0,d.zo)("div",{width:"100%",maxWidth:"100%",position:"relative",variants:{color:{default:{bg:"$border"},primary:{bg:"$primary"},secondary:{bg:"$secondary"},success:{bg:"$success"},warning:{bg:"$warning"},error:{bg:"$error"}}},defaultVariants:{color:"default"}}),F=(0,d.zo)("span",{position:"absolute",left:"50%",top:"50%",minHeight:"100%",display:"inline-flex",jc:"center",ai:"center",transform:"translate(-50%, -50%)",padding:"0 $lg",fontSize:"$base",fontWeight:"bold",textTransform:"capitalize",backgroundColor:"$background",zIndex:"$1",variants:{color:{default:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}}}}),R=({height:e,x:t,y:r,align:s,children:o,textColor:n,css:a,...c})=>{const l=(0,i.useMemo)((()=>s&&"center"!==s?"left"===s||"start"===s?{transform:"translateY(-50%)",left:"7%"}:{transform:"translateY(-50%)",left:"auto",right:"7%"}:""),[s]),d=r?H(r/2):0,u=t?H(t/2):0;return(0,p.jsx)(I,{role:"separator",css:{margin:`${d} ${u}`,height:`calc(${e} * 1px)`,...a},...c,children:o&&(0,p.jsx)(F,{css:{...l},color:n,className:"nextui-divider-text",children:o})})};R.toString=()=>".nextui-divider";const A=i.memo(R);var W=(0,v.Z)(A,{x:0,y:0,height:1,align:"center"});$.Header=f,$.Body=h,$.Footer=m,$.Image=E,$.Divider=W;var B=$},6693:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var i=r(7294),s=(e,t=!0)=>{(0,i.useEffect)((()=>{const r=()=>e();return t&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)}),[])}},9135:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/staff/[staffdetails]/[slugId]",function(){return r(5153)}])},2103:function(e,t,r){"use strict";var i=r(5893),s=r(1664),o=r.n(s);t.Z=function(){return(0,i.jsx)("nav",{children:(0,i.jsxs)("ul",{className:"navbar",children:[(0,i.jsx)(o(),{className:"navbar-button",href:"/",children:"Home"}),(0,i.jsx)(o(),{className:"navbar-button",href:"/about",children:"About"}),(0,i.jsx)(o(),{className:"navbar-button",href:"/product",children:"Product"}),(0,i.jsx)(o(),{className:"navbar-button",href:"/contact",children:"Contact"})]})})}},5153:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a}});var i=r(5893),s=r(9214),o=r(1013),n=r(2103),a=(r(1163),!0);t.default=function(e){var t=e.data;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Z,{}),(0,i.jsx)(s.Z,{h1:!0,css:{textAlign:"center",mt:30},children:"User Posts"}),(0,i.jsx)(o.ZP,{css:{mw:"800px",m:"auto",mt:30},children:(0,i.jsxs)(o.ZP.Body,{children:[(0,i.jsxs)(s.Z,{h2:!0,children:[t.id,". ",t.title]}),(0,i.jsx)(s.Z,{h6:!0,children:t.body})]})})]})}},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[255,664,774,888,179],(function(){return t=9135,e(e.s=t);var t}));var t=e.O();_N_E=t}]);