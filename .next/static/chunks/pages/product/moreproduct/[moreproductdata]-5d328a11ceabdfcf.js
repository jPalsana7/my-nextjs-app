(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{1013:function(e,t,i){"use strict";i.d(t,{ZP:function(){return G}});var r=i(7294),s=i(8375),n=i(8878),o=i(2317),a=i(8990),c=i(9260),l=i(2903);var d=i(275),u=i(9975);const m=(0,d.zo)("div",{d:"flex",w:"100%",h:"auto",flex:"1 1 auto",fd:"column",jc:"inherit",ai:"inherit",ac:"inherit",py:"$lg",px:"$sm",oy:"auto",position:"relative",ta:"left"}),h=(0,d.zo)("div",{$$cardColor:"$colors$backgroundContrast",$$cardTextColor:"$colors$text",m:0,p:0,br:"$lg",bg:"$$cardColor",color:"$$cardTextColor",position:"relative",display:"flex",overflow:"hidden",fd:"column",width:"100%",height:"auto",boxSizing:"border-box","@motion":{transition:"none"},".nextui-image":{width:"100%"},[`& ${s.q}`]:{zIndex:"$1",".nextui-drip-filler":{opacity:.25,fill:"$accents6"}},variants:{variant:{flat:{bg:"$accents0"},shadow:{dropShadow:"$lg"},bordered:{borderStyle:"solid",borderColor:"$border"}},borderWeight:{light:{bw:"$light"},normal:{bw:"$normal"},bold:{bw:"$bold"},extrabold:{bw:"$extrabold"},black:{bw:"$black"}},disableAnimation:{true:{transition:"none"},false:{transition:"$card"}},isPressable:{true:{cursor:"pointer",us:"none",WebkitTapHighlightColor:"transparent"}},isPressed:{true:{}},isHovered:{true:{dropShadow:"$lg"}}},compoundVariants:[{isPressed:!0,disableAnimation:!1,css:{transform:"scale(0.97)"}},{isHovered:!0,disableAnimation:!1,css:{transform:"translateY(-2px)"}},{isHovered:!0,variant:"shadow",css:{dropShadow:"$xl"}}]},u.UU,u.BM),g=(0,d.zo)("div",{w:"100%",display:"flex",flexShrink:0,zIndex:"$1",jc:"flex-start",ai:"center",overflow:"hidden",color:"inherit",p:"$sm"}),x=(0,d.zo)("div",{w:"100%",h:"auto",p:"$sm",d:"flex",ai:"center",overflow:"hidden",color:"inherit",bblr:"$lg",bbrr:"$lg",variants:{isBlurred:{true:{bf:"saturate(180%) blur(10px)",bg:"$$cardColor"}}}});var f=i(3569),p=i(5893);const b=r.forwardRef((({...e},t)=>{const{as:i,css:d,children:u,...m}=e,{cardRef:g,variant:x,isFocusVisible:f,isPressable:b,isPressed:v,disableAnimation:$,disableRipple:w,borderWeight:y,isHovered:j,getCardProps:N,dripBindings:P}=(e=>{const{ref:t,disableAnimation:i=!1,disableRipple:s=!1,variant:d="shadow",isHoverable:u=!1,borderWeight:m="light",isPressable:h=!1,onClick:g,onPress:x,autoFocus:f,allowTextSelectionOnPress:p=!0,...b}=e,v=(0,l.gy)(t),{onClick:$,...w}=(0,c.Z)(!1,v),y=e=>{i||s||!v.current||$(e)},{isPressed:j,pressProps:N}=(0,a.r7)({isDisabled:!h,onPress:e=>{"keyboard"!==e.pointerType&&"virtual"!==e.pointerType||(y(e),null==g||g(e)),null==x||x(e)},allowTextSelectionOnPress:p,...b}),{hoverProps:P,isHovered:Z}=(0,a.XI)({isDisabled:!u,...b}),{isFocusVisible:k,focusProps:z}=(0,n.Fx)({autoFocus:f});N.onClick=e=>{h&&(y(e),null==g||g(e))};const C=(0,r.useCallback)(((e={})=>({...(0,o.dG)(h?{...N,...z}:{},u?P:{},b,e)})),[h,u,N,z,P,b]);return{cardRef:v,variant:d,borderWeight:m,isPressable:h,isHovered:Z,isPressed:j,disableAnimation:i,disableRipple:s,dripBindings:w,onDripClickHandler:$,isFocusVisible:k,getCardProps:C}})({...m,ref:t});return(0,p.jsxs)(h,{ref:g,as:i,css:d,variant:x,role:b?"button":"section",borderWeight:y,disableAnimation:$,isPressable:b,isPressed:v,isHovered:j,tabIndex:b?0:-1,isFocusVisible:f,...N(),children:[b&&!$&&!w&&(0,p.jsx)(s.Z,{...P}),u]})}));f.Ts&&(b.displayName="NextUI.Card"),b.toString=()=>".nextui-card";var v=b,$=i(88);const w=(0,d.F4)({"0%":{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}),y=(0,d.zo)("div",{opacity:0,margin:"0 auto",position:"relative",overflow:"hidden",maxWidth:"100%",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms","@motion":{transition:"none"},variants:{ready:{true:{opacity:1},false:{opacity:0}}}}),j=(0,d.zo)("img",{size:"100%",display:"block"}),N=(0,d.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",borderRadius:"inherit",backgroundImage:"linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)",backgroundSize:"400% 100%",animation:`${w} 5s ease-in-out infinite`,transition:"opacity 300ms ease-out"});var P=i(1309);const Z=r.memo((({opacity:e,css:t,className:i,...r})=>(0,p.jsx)(N,{css:{opacity:e,...t},className:(0,P.Z)("nextui-image-skeleton",i),...r})));f.Ts&&(Z.displayName="NextUI.ImageSkeleton"),Z.toString=()=>".nextui-image-skeleton";var k=(0,$.Z)(Z,{opacity:.5,className:""});const z=(e,t)=>{if(!e)return 0;const i=e.includes("px")?+e.split("px")[0]:e.includes("%")?+e.split("%")[0]*t*.01:e;return Number.isNaN(+i)?0:+i};var C=e=>{const[t,i]=(0,r.useState)({width:0,height:0}),s=()=>{const{width:t,height:r}=(e=>{if(!e||"undefined"==typeof window)return{width:0,height:0};const t=e.getBoundingClientRect(),{width:i,height:r}=window.getComputedStyle(e);return{width:z(`${i}`,t.width),height:z(`${r}`,t.height)}})(e.current);i({width:t,height:r})};return(0,r.useEffect)((()=>s()),[e.current]),[t,s]},S=e=>{const[t,i]=(0,r.useState)((()=>"function"==typeof e?e():e)),s=(0,r.useRef)(e);return(0,r.useEffect)((()=>{s.current=t}),[t]),[t,e=>{const t="function"==typeof e?e(s.current):e;s.current=t,i(t)},s]},I=i(6693);const R=r.forwardRef(((e,t)=>{const{src:i,width:s,height:n,showSkeleton:o=!0,className:a,maxDelay:c=3e3,autoResize:d=!1,objectFit:u="scale-down",containerCss:m,css:h,...g}=e,x=(0,l.gy)(t),[f,b]=(0,r.useState)(!0),[v,$]=(0,r.useState)(o),{w:w,h:N}=(0,r.useMemo)((()=>({w:s?"number"==typeof s?`${s}px`:s:"auto",h:n?"number"==typeof n?`${n}px`:n:"auto"})),[s,n]),[Z,z,R]=S(N),[T,_]=C(x),W=o&&!!s&&!!n;(0,r.useEffect)((()=>{x.current&&x.current.complete&&(b(!1),$(!1))})),(0,r.useEffect)((()=>{const e=setTimeout((()=>{W&&$(!1),clearTimeout(e)}),c);return()=>clearTimeout(e)}),[f]),(0,r.useEffect)((()=>{if(!d)return;const e=0===T.width,t="auto"===R.current;!e&&s&&n&&(T.width<s?!t&&z("auto"):t&&z(N))}),[T,s]),(0,I.Z)((()=>{d&&_()}));const F=(0,r.useMemo)((()=>f?"loading":"ready"),[f]);return(0,p.jsxs)(y,{className:(0,P.Z)("nextui-image-container",`nextui-image--${F}`,a),"data-state":F,ready:!f||v,css:{width:w,height:Z,...m},children:[v&&(0,p.jsx)(k,{opacity:1}),(0,p.jsx)(j,{ref:x,className:"nextui-image",width:s,height:n,onLoad:()=>{b(!1)},src:i,"data-state":F,alt:e.alt||"",css:{objectFit:u,...h},...g})]})}));f.Ts&&(R.displayName="NextUI.Image"),R.toString=()=>".nextui-image";var T=r.memo(R);const _=e=>`calc(${15.25*e}pt + 1px * ${e-1})`,W=(0,d.zo)("div",{width:"100%",maxWidth:"100%",position:"relative",variants:{color:{default:{bg:"$border"},primary:{bg:"$primary"},secondary:{bg:"$secondary"},success:{bg:"$success"},warning:{bg:"$warning"},error:{bg:"$error"}}},defaultVariants:{color:"default"}}),F=(0,d.zo)("span",{position:"absolute",left:"50%",top:"50%",minHeight:"100%",display:"inline-flex",jc:"center",ai:"center",transform:"translate(-50%, -50%)",padding:"0 $lg",fontSize:"$base",fontWeight:"bold",textTransform:"capitalize",backgroundColor:"$background",zIndex:"$1",variants:{color:{default:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}}}}),E=({height:e,x:t,y:i,align:s,children:n,textColor:o,css:a,...c})=>{const l=(0,r.useMemo)((()=>s&&"center"!==s?"left"===s||"start"===s?{transform:"translateY(-50%)",left:"7%"}:{transform:"translateY(-50%)",left:"auto",right:"7%"}:""),[s]),d=i?_(i/2):0,u=t?_(t/2):0;return(0,p.jsx)(W,{role:"separator",css:{margin:`${d} ${u}`,height:`calc(${e} * 1px)`,...a},...c,children:n&&(0,p.jsx)(F,{css:{...l},color:o,className:"nextui-divider-text",children:n})})};E.toString=()=>".nextui-divider";const H=r.memo(E);var U=(0,$.Z)(H,{x:0,y:0,height:1,align:"center"});v.Header=g,v.Body=m,v.Footer=x,v.Image=T,v.Divider=U;var G=v},2553:function(e,t,i){"use strict";i.d(t,{ZP:function(){return f}});var r=i(7294),s=i(275);(0,s.zo)("div",{});const n=(0,s.zo)("div",{margin:0,boxSizing:"border-box",padding:"$$gridGapUnit"});var o=i(1309),a=i(88),c=i(5893);const l=e=>{const t=0===e?"none":"inherit";if("number"==typeof e){const i=100/12*e,r=i>100?"100%":i<0?"0":`${i}%`;return{flexGrow:0,display:t,maxWidth:r,flexBasis:r}}return{flexGrow:1,display:t,maxWidth:"100%",flexBasis:"0"}},d=r.forwardRef((({xs:e,sm:t,md:i,lg:s,xl:a,css:d,justify:u,direction:m,alignItems:h,alignContent:g,children:x,className:f,...p},b)=>{const v=(0,r.useMemo)((()=>{const r={xs:e,sm:t,md:i,lg:s,xl:a};return Object.keys(r).reduce(((e,t)=>void 0!==r[t]&&!1!==r[t]?`${e} ${t}`:e),"").trim()}),[e,t,i,s,a]);return(0,c.jsx)(n,{ref:b,className:(0,o.Z)("nextui-grid-item",v,f),css:{alignItems:h,alignContent:g,justifyContent:u,flexDirection:m,"&.xs":{...l(e)},"@xsMax":{"&.xs":{...l(e)}},"@sm":{"&.sm":{...l(t)}},"@md":{"&.md":{...l(i)}},"@lg":{"&.lg":{...l(s)}},"@xl":{"&.xl":{...l(a)}},...d},...p,children:x})}));d.displayName="NextUI.GridItem",d.toString=()=>".nextui-grid-item";var u=(0,a.Z)(d,{xs:!1,sm:!1,md:!1,lg:!1,xl:!1,className:""});const m=r.forwardRef((({children:e,css:t,...i},r)=>(0,c.jsx)(u,{ref:r,css:{...t},...i,children:e})));m.displayName="NextUI.Grid",m.toString=()=>".nextui-grid";var h=m;const g=r.forwardRef((({gap:e,wrap:t,css:i,children:s,className:n,...a},l)=>{const d=(0,r.useMemo)((()=>`calc(${e} * $space$3)`),[e]);return(0,c.jsx)(u,{ref:l,className:(0,o.Z)("nextui-grid-container",n),css:{$$gridGapUnit:d,display:"flex",flexWrap:t,boxSizing:"border-box",margin:"calc(-1 * $$gridGapUnit)",width:"calc(100% + $$gridGapUnit * 2)",...i},...a,children:s})}));g.displayName="NextUI.GridContainer",g.toString=()=>".nextui-grid-container";var x=(0,a.Z)(g,{gap:0,wrap:"wrap",className:""});h.Container=x;var f=h},4040:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var r=i(7294),s=i(88);var n=(0,i(275).zo)("div",{display:"flex",position:"relative",boxSizing:"border-box",variants:{fluid:{true:{width:"100%"}}},defaultVariants:{fluid:!0}}),o=i(5893);const a=({children:e,gap:t,justify:i,align:r,wrap:s,css:a,...c})=>(0,o.jsx)(n,{css:{flexWrap:s,$$rowGap:`calc(${t} * $space$lg)`,marginLeft:`calc(${t} * $space$lg / 2)`,marginRight:`calc(${t} * $space$lg / 2)`,justifyContent:i,alignItems:r,...a},...c,children:e});a.toString=()=>".nextui-row";const c=r.memo(a);var l=(0,s.Z)(c,{gap:0,wrap:"nowrap",justify:"flex-start",align:"flex-start"})},6693:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var r=i(7294),s=(e,t=!0)=>{(0,r.useEffect)((()=>{const i=()=>e();return t&&i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}),[])}},429:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/moreproduct/[moreproductdata]",function(){return i(4843)}])},2103:function(e,t,i){"use strict";var r=i(5893),s=i(1664),n=i.n(s);t.Z=function(){return(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"navbar",children:[(0,r.jsx)(n(),{className:"navbar-button",href:"/",children:"Home"}),(0,r.jsx)(n(),{className:"navbar-button",href:"/about",children:"About"}),(0,r.jsx)(n(),{className:"navbar-button",href:"/product",children:"Product"}),(0,r.jsx)(n(),{className:"navbar-button",href:"/contact",children:"Contact"})]})})}},4843:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return u}});var r=i(5893),s=i(6932),n=i(2553),o=i(1013),a=i(4040),c=i(9214),l=(i(9008),i(2103)),d=i(1163),u=!0;t.default=function(e){var t=e.data,i=(0,d.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)("div",{className:"back-button",children:(0,r.jsx)(s.ZP,{size:"sm",css:{ml:250},onClick:function(){return i.push("/product/moreproduct")},children:"back"})}),(0,r.jsxs)("div",{className:"myblog_data",children:[(0,r.jsx)(n.ZP.Container,{gap:2,justify:"flex-start",children:(0,r.jsx)(n.ZP,{xs:6,sm:3,className:"item-details",children:(0,r.jsxs)(o.ZP,{isPressable:!0,children:[(0,r.jsx)(o.ZP.Body,{css:{p:0},children:(0,r.jsx)(o.ZP.Image,{src:null===t||void 0===t?void 0:t.thumbnail,objectFit:"cover",width:"100%",height:500,alt:null===t||void 0===t?void 0:t.title,className:"item-details-image"})}),(0,r.jsx)(o.ZP.Footer,{css:{justifyItems:"flex-start"},children:(0,r.jsxs)(a.Z,{wrap:"wrap",justify:"space-between",align:"center",children:[(0,r.jsxs)(c.Z,{b:!0,children:[null===t||void 0===t?void 0:t.title," (",null===t||void 0===t?void 0:t.brand,")"]}),(0,r.jsx)(c.Z,{css:{color:"$accents7",fontWeight:"$semibold",fontSize:"$sm"},children:"Rating: ".concat(null===t||void 0===t?void 0:t.rating)})]})})]})})}),(0,r.jsxs)("div",{className:"product-details",children:[(0,r.jsx)(c.Z,{h3:!0,color:"black",css:{m:20},children:null===t||void 0===t?void 0:t.title}),(0,r.jsxs)(c.Z,{h6:!0,size:15,color:"black",className:"rating-text",children:[(0,r.jsxs)(c.Z,{span:!0,size:15,color:"black",children:[" ",null===t||void 0===t?void 0:t.rating," \u2606"," "]}),(0,r.jsx)(c.Z,{span:!0,size:15,color:"#878787",css:{m:5},children:"Ratings"})]}),(0,r.jsxs)(c.Z,{h3:!0,color:"black",css:{m:20},children:["$ ",null===t||void 0===t?void 0:t.price]}),(0,r.jsxs)(c.Z,{h3:!0,color:"black",css:{m:20},children:["Discount: ",null===t||void 0===t?void 0:t.discountPercentage," %"]}),(0,r.jsx)(c.Z,{h4:!0,color:"black",css:{m:20},children:null===t||void 0===t?void 0:t.category}),(0,r.jsx)(c.Z,{h5:!0,color:"black",css:{m:20},children:null===t||void 0===t?void 0:t.description}),(0,r.jsxs)("div",{className:"card-button",children:[(0,r.jsxs)(s.ZP,{className:"addtocard-class",color:"warning",size:"sm",children:["ADD TO CART"," "]}),(0,r.jsxs)(s.ZP,{color:"gradient",size:"sm",children:["BUY NOW"," "]})]})]})]})]})}},1163:function(e,t,i){e.exports=i(880)}},function(e){e.O(0,[255,932,664,774,888,179],(function(){return t=429,e(e.s=t);var t}));var t=e.O();_N_E=t}]);