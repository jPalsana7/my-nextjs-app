(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{1013:function(e,t,r){"use strict";r.d(t,{ZP:function(){return G}});var s=r(7294),i=r(8375),a=r(8878),n=r(2317),o=r(8990),c=r(9260),l=r(2903);var d=r(275),u=r(9975);const f=(0,d.zo)("div",{d:"flex",w:"100%",h:"auto",flex:"1 1 auto",fd:"column",jc:"inherit",ai:"inherit",ac:"inherit",py:"$lg",px:"$sm",oy:"auto",position:"relative",ta:"left"}),g=(0,d.zo)("div",{$$cardColor:"$colors$backgroundContrast",$$cardTextColor:"$colors$text",m:0,p:0,br:"$lg",bg:"$$cardColor",color:"$$cardTextColor",position:"relative",display:"flex",overflow:"hidden",fd:"column",width:"100%",height:"auto",boxSizing:"border-box","@motion":{transition:"none"},".nextui-image":{width:"100%"},[`& ${i.q}`]:{zIndex:"$1",".nextui-drip-filler":{opacity:.25,fill:"$accents6"}},variants:{variant:{flat:{bg:"$accents0"},shadow:{dropShadow:"$lg"},bordered:{borderStyle:"solid",borderColor:"$border"}},borderWeight:{light:{bw:"$light"},normal:{bw:"$normal"},bold:{bw:"$bold"},extrabold:{bw:"$extrabold"},black:{bw:"$black"}},disableAnimation:{true:{transition:"none"},false:{transition:"$card"}},isPressable:{true:{cursor:"pointer",us:"none",WebkitTapHighlightColor:"transparent"}},isPressed:{true:{}},isHovered:{true:{dropShadow:"$lg"}}},compoundVariants:[{isPressed:!0,disableAnimation:!1,css:{transform:"scale(0.97)"}},{isHovered:!0,disableAnimation:!1,css:{transform:"translateY(-2px)"}},{isHovered:!0,variant:"shadow",css:{dropShadow:"$xl"}}]},u.UU,u.BM),m=(0,d.zo)("div",{w:"100%",display:"flex",flexShrink:0,zIndex:"$1",jc:"flex-start",ai:"center",overflow:"hidden",color:"inherit",p:"$sm"}),h=(0,d.zo)("div",{w:"100%",h:"auto",p:"$sm",d:"flex",ai:"center",overflow:"hidden",color:"inherit",bblr:"$lg",bbrr:"$lg",variants:{isBlurred:{true:{bf:"saturate(180%) blur(10px)",bg:"$$cardColor"}}}});var x=r(3569),p=r(5893);const b=s.forwardRef((({...e},t)=>{const{as:r,css:d,children:u,...f}=e,{cardRef:m,variant:h,isFocusVisible:x,isPressable:b,isPressed:$,disableAnimation:v,disableRipple:w,borderWeight:y,isHovered:j,getCardProps:N,dripBindings:P}=(e=>{const{ref:t,disableAnimation:r=!1,disableRipple:i=!1,variant:d="shadow",isHoverable:u=!1,borderWeight:f="light",isPressable:g=!1,onClick:m,onPress:h,autoFocus:x,allowTextSelectionOnPress:p=!0,...b}=e,$=(0,l.gy)(t),{onClick:v,...w}=(0,c.Z)(!1,$),y=e=>{r||i||!$.current||v(e)},{isPressed:j,pressProps:N}=(0,o.r7)({isDisabled:!g,onPress:e=>{"keyboard"!==e.pointerType&&"virtual"!==e.pointerType||(y(e),null==m||m(e)),null==h||h(e)},allowTextSelectionOnPress:p,...b}),{hoverProps:P,isHovered:C}=(0,o.XI)({isDisabled:!u,...b}),{isFocusVisible:S,focusProps:k}=(0,a.Fx)({autoFocus:x});N.onClick=e=>{g&&(y(e),null==m||m(e))};const Z=(0,s.useCallback)(((e={})=>({...(0,n.dG)(g?{...N,...k}:{},u?P:{},b,e)})),[g,u,N,k,P,b]);return{cardRef:$,variant:d,borderWeight:f,isPressable:g,isHovered:C,isPressed:j,disableAnimation:r,disableRipple:i,dripBindings:w,onDripClickHandler:v,isFocusVisible:S,getCardProps:Z}})({...f,ref:t});return(0,p.jsxs)(g,{ref:m,as:r,css:d,variant:h,role:b?"button":"section",borderWeight:y,disableAnimation:v,isPressable:b,isPressed:$,isHovered:j,tabIndex:b?0:-1,isFocusVisible:x,...N(),children:[b&&!v&&!w&&(0,p.jsx)(i.Z,{...P}),u]})}));x.Ts&&(b.displayName="NextUI.Card"),b.toString=()=>".nextui-card";var $=b,v=r(88);const w=(0,d.F4)({"0%":{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}),y=(0,d.zo)("div",{opacity:0,margin:"0 auto",position:"relative",overflow:"hidden",maxWidth:"100%",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms","@motion":{transition:"none"},variants:{ready:{true:{opacity:1},false:{opacity:0}}}}),j=(0,d.zo)("img",{size:"100%",display:"block"}),N=(0,d.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",borderRadius:"inherit",backgroundImage:"linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)",backgroundSize:"400% 100%",animation:`${w} 5s ease-in-out infinite`,transition:"opacity 300ms ease-out"});var P=r(1309);const C=s.memo((({opacity:e,css:t,className:r,...s})=>(0,p.jsx)(N,{css:{opacity:e,...t},className:(0,P.Z)("nextui-image-skeleton",r),...s})));x.Ts&&(C.displayName="NextUI.ImageSkeleton"),C.toString=()=>".nextui-image-skeleton";var S=(0,v.Z)(C,{opacity:.5,className:""});const k=(e,t)=>{if(!e)return 0;const r=e.includes("px")?+e.split("px")[0]:e.includes("%")?+e.split("%")[0]*t*.01:e;return Number.isNaN(+r)?0:+r};var Z=e=>{const[t,r]=(0,s.useState)({width:0,height:0}),i=()=>{const{width:t,height:s}=(e=>{if(!e||"undefined"==typeof window)return{width:0,height:0};const t=e.getBoundingClientRect(),{width:r,height:s}=window.getComputedStyle(e);return{width:k(`${r}`,t.width),height:k(`${s}`,t.height)}})(e.current);r({width:t,height:s})};return(0,s.useEffect)((()=>i()),[e.current]),[t,i]},z=e=>{const[t,r]=(0,s.useState)((()=>"function"==typeof e?e():e)),i=(0,s.useRef)(e);return(0,s.useEffect)((()=>{i.current=t}),[t]),[t,e=>{const t="function"==typeof e?e(i.current):e;i.current=t,r(t)},i]},I=r(6693);const R=s.forwardRef(((e,t)=>{const{src:r,width:i,height:a,showSkeleton:n=!0,className:o,maxDelay:c=3e3,autoResize:d=!1,objectFit:u="scale-down",containerCss:f,css:g,...m}=e,h=(0,l.gy)(t),[x,b]=(0,s.useState)(!0),[$,v]=(0,s.useState)(n),{w:w,h:N}=(0,s.useMemo)((()=>({w:i?"number"==typeof i?`${i}px`:i:"auto",h:a?"number"==typeof a?`${a}px`:a:"auto"})),[i,a]),[C,k,R]=z(N),[T,F]=Z(h),_=n&&!!i&&!!a;(0,s.useEffect)((()=>{h.current&&h.current.complete&&(b(!1),v(!1))})),(0,s.useEffect)((()=>{const e=setTimeout((()=>{_&&v(!1),clearTimeout(e)}),c);return()=>clearTimeout(e)}),[x]),(0,s.useEffect)((()=>{if(!d)return;const e=0===T.width,t="auto"===R.current;!e&&i&&a&&(T.width<i?!t&&k("auto"):t&&k(N))}),[T,i]),(0,I.Z)((()=>{d&&F()}));const E=(0,s.useMemo)((()=>x?"loading":"ready"),[x]);return(0,p.jsxs)(y,{className:(0,P.Z)("nextui-image-container",`nextui-image--${E}`,o),"data-state":E,ready:!x||$,css:{width:w,height:C,...f},children:[$&&(0,p.jsx)(S,{opacity:1}),(0,p.jsx)(j,{ref:h,className:"nextui-image",width:i,height:a,onLoad:()=>{b(!1)},src:r,"data-state":E,alt:e.alt||"",css:{objectFit:u,...g},...m})]})}));x.Ts&&(R.displayName="NextUI.Image"),R.toString=()=>".nextui-image";var T=s.memo(R);const F=e=>`calc(${15.25*e}pt + 1px * ${e-1})`,_=(0,d.zo)("div",{width:"100%",maxWidth:"100%",position:"relative",variants:{color:{default:{bg:"$border"},primary:{bg:"$primary"},secondary:{bg:"$secondary"},success:{bg:"$success"},warning:{bg:"$warning"},error:{bg:"$error"}}},defaultVariants:{color:"default"}}),E=(0,d.zo)("span",{position:"absolute",left:"50%",top:"50%",minHeight:"100%",display:"inline-flex",jc:"center",ai:"center",transform:"translate(-50%, -50%)",padding:"0 $lg",fontSize:"$base",fontWeight:"bold",textTransform:"capitalize",backgroundColor:"$background",zIndex:"$1",variants:{color:{default:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}}}}),H=({height:e,x:t,y:r,align:i,children:a,textColor:n,css:o,...c})=>{const l=(0,s.useMemo)((()=>i&&"center"!==i?"left"===i||"start"===i?{transform:"translateY(-50%)",left:"7%"}:{transform:"translateY(-50%)",left:"auto",right:"7%"}:""),[i]),d=r?F(r/2):0,u=t?F(t/2):0;return(0,p.jsx)(_,{role:"separator",css:{margin:`${d} ${u}`,height:`calc(${e} * 1px)`,...o},...c,children:a&&(0,p.jsx)(E,{css:{...l},color:n,className:"nextui-divider-text",children:a})})};H.toString=()=>".nextui-divider";const U=s.memo(H);var W=(0,v.Z)(U,{x:0,y:0,height:1,align:"center"});$.Header=m,$.Body=f,$.Footer=h,$.Image=T,$.Divider=W;var G=$},2553:function(e,t,r){"use strict";r.d(t,{ZP:function(){return x}});var s=r(7294),i=r(275);(0,i.zo)("div",{});const a=(0,i.zo)("div",{margin:0,boxSizing:"border-box",padding:"$$gridGapUnit"});var n=r(1309),o=r(88),c=r(5893);const l=e=>{const t=0===e?"none":"inherit";if("number"==typeof e){const r=100/12*e,s=r>100?"100%":r<0?"0":`${r}%`;return{flexGrow:0,display:t,maxWidth:s,flexBasis:s}}return{flexGrow:1,display:t,maxWidth:"100%",flexBasis:"0"}},d=s.forwardRef((({xs:e,sm:t,md:r,lg:i,xl:o,css:d,justify:u,direction:f,alignItems:g,alignContent:m,children:h,className:x,...p},b)=>{const $=(0,s.useMemo)((()=>{const s={xs:e,sm:t,md:r,lg:i,xl:o};return Object.keys(s).reduce(((e,t)=>void 0!==s[t]&&!1!==s[t]?`${e} ${t}`:e),"").trim()}),[e,t,r,i,o]);return(0,c.jsx)(a,{ref:b,className:(0,n.Z)("nextui-grid-item",$,x),css:{alignItems:g,alignContent:m,justifyContent:u,flexDirection:f,"&.xs":{...l(e)},"@xsMax":{"&.xs":{...l(e)}},"@sm":{"&.sm":{...l(t)}},"@md":{"&.md":{...l(r)}},"@lg":{"&.lg":{...l(i)}},"@xl":{"&.xl":{...l(o)}},...d},...p,children:h})}));d.displayName="NextUI.GridItem",d.toString=()=>".nextui-grid-item";var u=(0,o.Z)(d,{xs:!1,sm:!1,md:!1,lg:!1,xl:!1,className:""});const f=s.forwardRef((({children:e,css:t,...r},s)=>(0,c.jsx)(u,{ref:s,css:{...t},...r,children:e})));f.displayName="NextUI.Grid",f.toString=()=>".nextui-grid";var g=f;const m=s.forwardRef((({gap:e,wrap:t,css:r,children:i,className:a,...o},l)=>{const d=(0,s.useMemo)((()=>`calc(${e} * $space$3)`),[e]);return(0,c.jsx)(u,{ref:l,className:(0,n.Z)("nextui-grid-container",a),css:{$$gridGapUnit:d,display:"flex",flexWrap:t,boxSizing:"border-box",margin:"calc(-1 * $$gridGapUnit)",width:"calc(100% + $$gridGapUnit * 2)",...r},...o,children:i})}));m.displayName="NextUI.GridContainer",m.toString=()=>".nextui-grid-container";var h=(0,o.Z)(m,{gap:0,wrap:"wrap",className:""});g.Container=h;var x=g},4040:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(7294),i=r(88);var a=(0,r(275).zo)("div",{display:"flex",position:"relative",boxSizing:"border-box",variants:{fluid:{true:{width:"100%"}}},defaultVariants:{fluid:!0}}),n=r(5893);const o=({children:e,gap:t,justify:r,align:s,wrap:i,css:o,...c})=>(0,n.jsx)(a,{css:{flexWrap:i,$$rowGap:`calc(${t} * $space$lg)`,marginLeft:`calc(${t} * $space$lg / 2)`,marginRight:`calc(${t} * $space$lg / 2)`,justifyContent:r,alignItems:s,...o},...c,children:e});o.toString=()=>".nextui-row";const c=s.memo(o);var l=(0,i.Z)(c,{gap:0,wrap:"nowrap",justify:"flex-start",align:"flex-start"})},6693:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var s=r(7294),i=(e,t=!0)=>{(0,s.useEffect)((()=>{const r=()=>e();return t&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)}),[])}},1810:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/staff",function(){return r(3890)}])},2103:function(e,t,r){"use strict";var s=r(5893),i=r(1664),a=r.n(i);t.Z=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:"navbar",children:[(0,s.jsx)(a(),{className:"navbar-button",href:"/",children:"Home"}),(0,s.jsx)(a(),{className:"navbar-button",href:"/about",children:"About"}),(0,s.jsx)(a(),{className:"navbar-button",href:"/product",children:"Product"}),(0,s.jsx)(a(),{className:"navbar-button",href:"/contact",children:"Contact"})]})})}},3890:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u}});var s=r(5893),i=r(2103),a=r(9214),n=r(2553),o=r(1013),c=r(4040),l=r(6932),d=(r(9008),r(1664),r(1163)),u=!0;t.default=function(e){var t=e.data,r=(0,d.useRouter)();return console.log("======user",t),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(a.Z,{h1:!0,css:{textAlign:"center",mt:25},children:"OUR STAFF"}),(0,s.jsx)(n.ZP.Container,{gap:2,justify:"flex-start",className:"staff-page-class",children:t.users.map((function(e,t){return(0,s.jsxs)(n.ZP,{xs:6,sm:3,children:[console.log("=========itemStaff",e),(0,s.jsxs)(o.ZP,{isPressable:!0,children:[(0,s.jsx)(o.ZP.Body,{css:{p:0},children:(0,s.jsx)(o.ZP.Image,{src:e.image,objectFit:"cover",width:"100%",height:140,alt:e.firstName,className:"staff-page-card-image"})}),(0,s.jsx)(o.ZP.Footer,{css:{justifyItems:"flex-start"},children:(0,s.jsxs)(c.Z,{wrap:"wrap",justify:"space-between",align:"center",children:[(0,s.jsxs)(a.Z,{b:!0,children:[e.firstName," ",e.lastName," "]}),(0,s.jsx)(l.ZP,{color:"error",onClick:function(){return r.push("/about/staff/".concat(null===e||void 0===e?void 0:e.id))},auto:!0,ghost:!0,children:"more Details"})]})})]})]},t)}))})]})}},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[255,932,664,774,888,179],(function(){return t=1810,e(e.s=t);var t}));var t=e.O();_N_E=t}]);