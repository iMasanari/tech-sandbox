(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{4918:function(e,t,n){"use strict";var r=n(2398);t.Z=void 0;var o=r(n(4938)),a=n(1032),i=(0,o.default)((0,a.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),"CalendarToday");t.Z=i},1899:function(e,t,n){"use strict";var r=n(2398);t.Z=void 0;var o=r(n(4938)),a=n(1032),i=(0,o.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=i},1334:function(e,t,n){"use strict";var r=n(2398);t.Z=void 0;var o=r(n(4938)),a=n(1032),i=(0,o.default)((0,a.jsx)("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Sync");t.Z=i},5282:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(5987),o=n(4942),a=n(7462),i=n(1720),c=(n(5697),n(6010)),s=n(713),u=n(6192),l=n(9890),d=n(4353),f=n(7320);function p(e){return e.substring(2).toLowerCase()}var m=function(e){const{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:a="onTouchEnd"}=e,c=i.useRef(!1),s=i.useRef(null),m=i.useRef(!1),v=i.useRef(!1);i.useEffect((()=>(setTimeout((()=>{m.current=!0}),0),()=>{m.current=!1})),[]);const h=(0,u.Z)(t.ref,s),g=(0,l.Z)((e=>{const t=v.current;v.current=!1;const r=(0,d.Z)(s.current);if(!m.current||!s.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,r))return;if(c.current)return void(c.current=!1);let a;a=e.composedPath?e.composedPath().indexOf(s.current)>-1:!r.documentElement.contains(e.target)||s.current.contains(e.target),a||!n&&t||o(e)})),y=e=>n=>{v.current=!0;const r=t.props[e];r&&r(n)},Z={ref:h};return!1!==a&&(Z[a]=y(a)),i.useEffect((()=>{if(!1!==a){const e=p(a),t=(0,d.Z)(s.current),n=()=>{c.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,g),t.removeEventListener("touchmove",n)}}}),[g,a]),!1!==r&&(Z[r]=y(r)),i.useEffect((()=>{if(!1!==r){const e=p(r),t=(0,d.Z)(s.current);return t.addEventListener(e,g),()=>{t.removeEventListener(e,g)}}}),[g,r]),(0,f.tZ)(i.Fragment,{children:i.cloneElement(t,Z)})},v=n(2545),h=n(8029),g=n(9543),y=n(6789),Z=n(3285),b=n(8885),w=n(6630),E=n(9808);function k(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var x={entering:{opacity:1,transform:k(1)},entered:{opacity:1,transform:"none"}},C=i.forwardRef((function(e,t){var n=e.addEndListener,o=e.appear,c=void 0===o||o,s=e.children,u=e.easing,l=e.in,d=e.onEnter,p=e.onEntered,m=e.onEntering,v=e.onExit,g=e.onExited,y=e.onExiting,Z=e.style,C=e.timeout,M=void 0===C?"auto":C,O=e.TransitionComponent,R=void 0===O?b.ZP:O,S=(0,r.Z)(e,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=i.useRef(),P=i.useRef(),H=(0,h.Z)(),z=i.useRef(null),L=(0,E.Z)(s.ref,t),j=(0,E.Z)(z,L),N=function(e){return function(t){if(e){var n=z.current;void 0===t?e(n):e(n,t)}}},A=N(m),D=N((function(e,t){(0,w.n)(e);var n,r=(0,w.C)({style:Z,timeout:M,easing:u},{mode:"enter"}),o=r.duration,a=r.delay,i=r.easing;"auto"===M?(n=H.transitions.getAutoHeightDuration(e.clientHeight),P.current=n):n=o,e.style.transition=[H.transitions.create("opacity",{duration:n,delay:a}),H.transitions.create("transform",{duration:.666*n,delay:a,easing:i})].join(","),d&&d(e,t)})),_=N(p),B=N(y),F=N((function(e){var t,n=(0,w.C)({style:Z,timeout:M,easing:u},{mode:"exit"}),r=n.duration,o=n.delay,a=n.easing;"auto"===M?(t=H.transitions.getAutoHeightDuration(e.clientHeight),P.current=t):t=r,e.style.transition=[H.transitions.create("opacity",{duration:t,delay:o}),H.transitions.create("transform",{duration:.666*t,delay:o||.333*t,easing:a})].join(","),e.style.opacity="0",e.style.transform=k(.75),v&&v(e)})),I=N(g);return i.useEffect((function(){return function(){clearTimeout(T.current)}}),[]),(0,f.tZ)(R,(0,a.Z)({appear:c,in:l,nodeRef:z,onEnter:D,onEntered:_,onEntering:A,onExit:F,onExited:I,onExiting:B,addEndListener:function(e){"auto"===M&&(T.current=setTimeout(e,P.current||0)),n&&n(z.current,e)},timeout:"auto"===M?null:M},S,{children:function(e,t){return i.cloneElement(s,(0,a.Z)({style:(0,a.Z)({opacity:0,transform:k(.75),visibility:"exited"!==e||l?void 0:"hidden"},x[e],Z,s.props.style),ref:j},t))}}))}));C.muiSupportAuto=!0;var M=C,O=n(5799),R=n(7733),S=n(8919),T=n(6288);function P(e){return(0,S.Z)("MuiSnackbarContent",e)}(0,T.Z)("MuiSnackbarContent",["root","message","action"]);var H=(0,v.ZP)(R.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme,n="light"===t.palette.mode?.8:.98,r=(0,O._4)(t.palette.background.default,n);return(0,a.Z)({},t.typography.body2,(0,o.Z)({color:t.palette.getContrastText(r),backgroundColor:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:t.shape.borderRadius,flexGrow:1},t.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),z=(0,v.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),L=(0,v.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),j=i.forwardRef((function(e,t){var n=(0,g.Z)({props:e,name:"MuiSnackbarContent"}),o=n.action,i=n.className,u=n.message,l=n.role,d=void 0===l?"alert":l,p=(0,r.Z)(n,["action","className","message","role"]),m=n,v=function(e){var t=e.classes;return(0,s.Z)({root:["root"],action:["action"],message:["message"]},P,t)}(m);return(0,f.BX)(H,(0,a.Z)({role:d,square:!0,elevation:6,className:(0,c.Z)(v.root,i),ownerState:m,ref:t},p,{children:[(0,f.tZ)(z,{className:v.message,ownerState:m,children:u}),o?(0,f.tZ)(L,{className:v.action,ownerState:m,children:o}):null]}))}));function N(e){return(0,S.Z)("MuiSnackbar",e)}(0,T.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var A=(0,v.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["anchorOrigin".concat((0,Z.Z)(n.anchorOrigin.vertical)).concat((0,Z.Z)(n.anchorOrigin.horizontal))]]}})((function(e){var t=e.theme,n=e.ownerState,r=(0,a.Z)({},!n.isRtl&&{left:"50%",right:"auto",transform:"translateX(-50%)"},n.isRtl&&{right:"50%",left:"auto",transform:"translateX(50%)"});return(0,a.Z)({zIndex:t.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===n.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===n.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===n.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,o.Z)({},t.breakpoints.up("sm"),(0,a.Z)({},"top"===n.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===n.anchorOrigin.horizontal&&r,"left"===n.anchorOrigin.horizontal&&(0,a.Z)({},!n.isRtl&&{left:24,right:"auto"},n.isRtl&&{right:24,left:"auto"}),"right"===n.anchorOrigin.horizontal&&(0,a.Z)({},!n.isRtl&&{right:24,left:"auto"},n.isRtl&&{left:24,right:"auto"}))))})),D=i.forwardRef((function(e,t){var n=(0,g.Z)({props:e,name:"MuiSnackbar"}),o=(0,h.Z)(),u={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},l=n.action,d=n.anchorOrigin,p=(d=void 0===d?{vertical:"bottom",horizontal:"left"}:d).vertical,v=d.horizontal,b=n.autoHideDuration,w=void 0===b?null:b,E=n.children,k=n.className,x=n.ClickAwayListenerProps,C=n.ContentProps,O=n.disableWindowBlurListener,R=void 0!==O&&O,S=n.message,T=n.onBlur,P=n.onClose,H=n.onFocus,z=n.onMouseEnter,L=n.onMouseLeave,D=n.open,_=n.resumeHideDuration,B=n.TransitionComponent,F=void 0===B?M:B,I=n.transitionDuration,V=void 0===I?u:I,W=n.TransitionProps,q=(W=void 0===W?{}:W).onEnter,X=W.onExited,U=(0,r.Z)(W,["onEnter","onExited"]),G=(0,r.Z)(n,["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),$="rtl"===o.direction,K=(0,a.Z)({},n,{anchorOrigin:{vertical:p,horizontal:v},isRtl:$}),J=function(e){var t=e.classes,n=e.anchorOrigin,r={root:["root","anchorOrigin".concat((0,Z.Z)(n.vertical)).concat((0,Z.Z)(n.horizontal))]};return(0,s.Z)(r,N,t)}(K),Y=i.useRef(),Q=i.useState(!0),ee=Q[0],te=Q[1],ne=(0,y.Z)((function(){P&&P.apply(void 0,arguments)})),re=(0,y.Z)((function(e){P&&null!=e&&(clearTimeout(Y.current),Y.current=setTimeout((function(){ne(null,"timeout")}),e))}));i.useEffect((function(){return D&&re(w),function(){clearTimeout(Y.current)}}),[D,w,re]);var oe=function(){clearTimeout(Y.current)},ae=i.useCallback((function(){null!=w&&re(null!=_?_:.5*w)}),[w,_,re]);return i.useEffect((function(){if(!R&&D)return window.addEventListener("focus",ae),window.addEventListener("blur",oe),function(){window.removeEventListener("focus",ae),window.removeEventListener("blur",oe)}}),[R,ae,D]),i.useEffect((function(){if(D)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||P&&P(e,"escapeKeyDown")}}),[ee,D,P]),!D&&ee?null:(0,f.tZ)(m,(0,a.Z)({onClickAway:function(e){P&&P(e,"clickaway")}},x,{children:(0,f.tZ)(A,(0,a.Z)({className:(0,c.Z)(J.root,k),onBlur:function(e){T&&T(e),ae()},onFocus:function(e){H&&H(e),oe()},onMouseEnter:function(e){z&&z(e),oe()},onMouseLeave:function(e){L&&L(e),ae()},ownerState:K,ref:t,role:"presentation"},G,{children:(0,f.tZ)(F,(0,a.Z)({appear:!0,in:D,timeout:V,direction:"top"===p?"down":"up",onEnter:function(e,t){te(!1),q&&q(e,t)},onExited:function(e){te(!0),X&&X(e)}},U,{children:E||(0,f.tZ)(j,(0,a.Z)({message:S,action:l},C))}))}))}))})),_=D},2916:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5987),o=n(7462),a=n(1720),i=(n(5697),n(6010)),c=n(713),s=n(8568),u=n(9543),l=n(2545),d=n(8919);function f(e){return(0,d.Z)("MuiTable",e)}(0,n(6288).Z)("MuiTable",["root","stickyHeader"]);var p=n(7320),m=(0,l.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"})})),v="table",h=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiTable"}),l=n.className,d=n.component,h=void 0===d?v:d,g=n.padding,y=void 0===g?"normal":g,Z=n.size,b=void 0===Z?"medium":Z,w=n.stickyHeader,E=void 0!==w&&w,k=(0,r.Z)(n,["className","component","padding","size","stickyHeader"]),x=(0,o.Z)({},n,{component:h,padding:y,size:b,stickyHeader:E}),C=function(e){var t=e.classes,n={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,c.Z)(n,f,t)}(x),M=a.useMemo((function(){return{padding:y,size:b,stickyHeader:E}}),[y,b,E]);return(0,p.tZ)(s.Z.Provider,{value:M,children:(0,p.tZ)(m,(0,o.Z)({as:h,role:h===v?null:"table",ref:t,className:(0,i.Z)(C.root,l),ownerState:x},k))})}))},8568:function(e,t,n){"use strict";var r=n(1720).createContext();t.Z=r},6656:function(e,t,n){"use strict";var r=n(1720).createContext();t.Z=r},3252:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7462),o=n(5987),a=n(1720),i=(n(5697),n(6010)),c=n(713),s=n(6656),u=n(9543),l=n(2545),d=n(8919);function f(e){return(0,d.Z)("MuiTableBody",e)}(0,n(6288).Z)("MuiTableBody",["root"]);var p=n(7320),m=(0,l.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),v={variant:"body"},h="tbody",g=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiTableBody"}),a=n.className,l=n.component,d=void 0===l?h:l,g=(0,o.Z)(n,["className","component"]),y=(0,r.Z)({},n,{component:d}),Z=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},f,t)}(y);return(0,p.tZ)(s.Z.Provider,{value:v,children:(0,p.tZ)(m,(0,r.Z)({className:(0,i.Z)(Z.root,a),as:d,ref:t,role:d===h?null:"rowgroup",ownerState:y},g))})}))},8528:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(5987),o=n(4942),a=n(7462),i=n(1720),c=(n(5697),n(6010)),s=n(713),u=n(5799),l=n(3285),d=n(8568),f=n(6656),p=n(9543),m=n(2545),v=n(8919);function h(e){return(0,v.Z)("MuiTableCell",e)}var g=(0,n(6288).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),y=n(7320),Z=(0,m.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["size".concat((0,l.Z)(n.size))],"normal"!==n.padding&&t["padding".concat((0,l.Z)(n.padding))],"inherit"!==n.align&&t["align".concat((0,l.Z)(n.align))],n.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?(0,u.$n)((0,u.Fq)(t.palette.divider,1),.88):(0,u._j)((0,u.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===n.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===n.variant&&{color:t.palette.text.primary},"footer"===n.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===n.size&&(0,o.Z)({padding:"6px 16px"},"&.".concat(g.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===n.padding&&{width:48,padding:"0 0 0 4px"},"none"===n.padding&&{padding:0},"left"===n.align&&{textAlign:"left"},"center"===n.align&&{textAlign:"center"},"right"===n.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===n.align&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),b=i.forwardRef((function(e,t){var n,o=(0,p.Z)({props:e,name:"MuiTableCell"}),u=o.align,m=void 0===u?"inherit":u,v=o.className,g=o.component,b=o.padding,w=o.scope,E=o.size,k=o.sortDirection,x=o.variant,C=(0,r.Z)(o,["align","className","component","padding","scope","size","sortDirection","variant"]),M=i.useContext(d.Z),O=i.useContext(f.Z),R=O&&"head"===O.variant;n=g||(R?"th":"td");var S=w;!S&&R&&(S="col");var T=x||O&&O.variant,P=(0,a.Z)({},o,{align:m,component:n,padding:b||(M&&M.padding?M.padding:"normal"),size:E||(M&&M.size?M.size:"medium"),sortDirection:k,stickyHeader:"head"===T&&M&&M.stickyHeader,variant:T}),H=function(e){var t=e.classes,n=e.variant,r=e.align,o=e.padding,a=e.size,i={root:["root",n,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat((0,l.Z)(r)),"normal"!==o&&"padding".concat((0,l.Z)(o)),"size".concat((0,l.Z)(a))]};return(0,s.Z)(i,h,t)}(P),z=null;return k&&(z="asc"===k?"ascending":"descending"),(0,y.tZ)(Z,(0,a.Z)({as:n,ref:t,className:(0,c.Z)(H.root,v),"aria-sort":z,scope:S,ownerState:P},C))}))},6888:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),o=n(5987),a=n(1720),i=(n(5697),n(6010)),c=n(713),s=n(9543),u=n(2545),l=n(8919);function d(e){return(0,l.Z)("MuiTableContainer",e)}(0,n(6288).Z)("MuiTableContainer",["root"]);var f=n(7320),p=(0,u.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),m=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiTableContainer"}),a=n.className,u=n.component,l=void 0===u?"div":u,m=(0,o.Z)(n,["className","component"]),v=(0,r.Z)({},n,{component:l}),h=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},d,t)}(v);return(0,f.tZ)(p,(0,r.Z)({ref:t,as:l,className:(0,i.Z)(h.root,a),ownerState:v},m))}))},1865:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7462),o=n(5987),a=n(4942),i=n(1720),c=(n(5697),n(6010)),s=n(713),u=n(5799),l=n(6656),d=n(9543),f=n(2545),p=n(8919);function m(e){return(0,p.Z)("MuiTableRow",e)}var v=(0,n(6288).Z)("MuiTableRow",["root","selected","hover","head","footer"]),h=n(7320),g=(0,f.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.head&&t.head,n.footer&&t.footer]}})((function(e){var t,n=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,a.Z)(t,"&.".concat(v.hover,":hover"),{backgroundColor:n.palette.action.hover}),(0,a.Z)(t,"&.".concat(v.selected),{backgroundColor:(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity)}}),t})),y=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiTableRow"}),a=n.className,u=n.component,f=void 0===u?"tr":u,p=n.hover,v=void 0!==p&&p,y=n.selected,Z=void 0!==y&&y,b=(0,o.Z)(n,["className","component","hover","selected"]),w=i.useContext(l.Z),E=(0,r.Z)({},n,{component:f,hover:v,selected:Z,head:w&&"head"===w.variant,footer:w&&"footer"===w.variant}),k=function(e){var t=e.classes,n={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,s.Z)(n,m,t)}(E);return(0,h.tZ)(g,(0,r.Z)({as:f,ref:t,className:(0,c.Z)(k.root,a),role:"tr"===f?null:"row",ownerState:E},b))}))},1771:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r,o=n(1720),a={"accept-charset":"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",class:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",for:"htmlFor","http-equiv":"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},i=Array.prototype.map,c=function(e,t){var n=function(e){r||(r=new DOMParser);var t=r.parseFromString("<!doctype html><body>"+e,"text/html").body.childNodes;return 1===t.length?t[0]:{nodeType:11,childNodes:t}}(e);return s(n,t)},s=function(e,t){var n=e.nodeType;return 1===n?u(e,t):9===n||11===n?l(e,t):3===n?d(e):null},u=function(e,t){var n="http://www.w3.org/1999/xhtml"===e.namespaceURI,r=n?e.tagName.toLowerCase():e.tagName,o=p(e),i=t.components&&t.components[r]||r,c={};return o.forEach((function(t){var r=e.getAttribute(t)||"";if("style"===t)c[t]=function(e){for(var t=e.trim().split(/([:;'"\\]|\/\*|\*\/)/),n={},r=null,o=!1,a="",i="",c=0,s=t.length;c<s;++c){var u=t[c];u&&("/*"!==r?o?(i+=u,o=!1):(o="\\"===u,r?(i+=u,r===u&&(r=null)):":"!==u?";"!==u?"'"!==u&&'"'!==u?"/*"!==u?i+=u:r=u:(i+=u,r=u):(n[a]=i.trim(),a="",i=""):(a=i.trim().replace(/^-ms-/,"ms-").replace(/-(.)/g,(function(e,t){return t.toUpperCase()})),i="")):"*/"===u&&(r=null))}return(i=i.trim())&&(n[a]=i),n}(r);else{var o=a[t]||t;c[o]=n&&"list"!==o&&o in e&&"string"!==typeof e[o]?e[o]:r}})),n?t.createElement.apply(t,[i,c].concat(f(e.childNodes,t))):(c.dangerouslySetInnerHTML={__html:e.innerHTML},t.createElement(i,c))},l=function(e,t){return t.createElement.apply(t,[t.Fragment,null].concat(f(e.childNodes,t)))},d=function(e){return e.data},f=function(e,t){return i.call(e,(function(e){return s(e,t)})).filter(Boolean)},p=function(e){return void 0==e.getAttributeNames?i.call(e.attributes,(function(e){return e.name})):e.getAttributeNames()};function m(e){var t=(0,o.useMemo)((function(){return c(e.source,{createElement:e.createElement||o.createElement,Fragment:e.Fragment||o.Fragment,components:e.components})}),e.deps||[e.source]);return"string"===typeof t?(0,o.createElement)(o.Fragment,null,t):t}},2717:function(e,t,n){"use strict";var r=n(930);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1720)),c=(a=n(1585))&&a.__esModule?a:{default:a},s=n(8e3),u=n(5850),l=n(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var v=function(e){var t=e.children,n=i.useContext(s.AmpStateContext),r=i.useContext(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=v},1585:function(e,t,n){"use strict";var r=n(7980),o=n(3227),a=n(8361),i=(n(2191),n(5971)),c=n(2715),s=n(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1720));var d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},9008:function(e,t,n){e.exports=n(2717)},6687:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}}]);