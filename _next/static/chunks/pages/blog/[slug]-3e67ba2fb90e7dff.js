(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{3214:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return e(9266)}])},9964:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var r=e(5944),i=e(9008),o=e(1163),c=e(9321);function a(t){var n=t.title,e=t.description,a=t.image,u=(0,o.useRouter)(),l=n?"".concat(n," | ").concat(c.px):c.px,s=u.pathname.startsWith("/blog/"),d="".concat(c.y0).concat(u.asPath);return(0,r.BX)(i.default,{children:[(0,r.tZ)("title",{children:l}),(0,r.tZ)("meta",{name:"description",content:e}),(0,r.tZ)("meta",{property:"og:title",content:n}),(0,r.tZ)("meta",{property:"og:description",content:e}),(0,r.tZ)("meta",{property:"og:type",content:s?"article":"website"}),(0,r.tZ)("meta",{property:"og:url",content:d}),(0,r.tZ)("meta",{property:"og:image",content:"".concat(c.y0).concat(a||"/images/icon.jpg")}),(0,r.tZ)("meta",{property:"og:site_name",content:c.px}),(0,r.tZ)("meta",{name:"twitter:card",content:"summary"})]})}},7146:function(t,n,e){"use strict";e.d(n,{Z:function(){return f}});var r=e(5944),i=e(917),o=e(4918),c=e(1334),a=e(65),u=e(3020),l=e(1720);function s(t){var n=t.dateTime,e=(0,l.useMemo)((function(){return function(t){var n=new Date(t),e=n.getFullYear(),r="0".concat(n.getMonth()+1).slice(-2),i="0".concat(n.getDate()).slice(-2);return"".concat(e,"-").concat(r,"-").concat(i)}(n)}),[n]);return(0,r.tZ)(a.Z,{component:"time",variant:"body2",dateTime:n,children:e})}var d=e(3376),p=function(t){return(0,i.iv)("display:flex;align-items:center;margin:",t.spacing(1,0),";")};function f(t){var n=t.post,e=t.link;return(0,r.BX)("header",{children:[(0,r.BX)("div",{css:p,children:[(0,r.tZ)(o.Z,{fontSize:"small",sx:{mr:.5}}),(0,r.tZ)(s,{dateTime:n.date}),n.update&&(0,r.BX)(r.HY,{children:[(0,r.tZ)(c.Z,{fontSize:"small",sx:{ml:2,mr:.5}}),(0,r.tZ)(s,{dateTime:n.update})]})]}),(0,r.tZ)(a.Z,{component:"h1",variant:"h5",gutterBottom:!0,children:e?(0,r.tZ)(u.Z,{href:"/blog/".concat(n.slug,"/"),children:n.title}):n.title}),(0,r.tZ)(d.Z,{tags:n.tags})]})}},3376:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var r=e(5944),i=e(917),o=(e(1720),e(3020));function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=(0,i.iv)("padding:0;margin:0;"),l=(0,i.iv)("display:inline;padding:0;margin:0;");function s(t){var n,e,i=t.tags;return(0,r.tZ)("ul",{css:u,children:(n=" ",e=i.map((function(t){return(0,r.tZ)("li",{css:l,children:(0,r.tZ)(o.Z,{href:"/tags/".concat(t,"/"),color:"textSecondary",underline:"hover",children:"#".concat(t)})},t)})),e.reduce((function(t,e){return a(t).concat([n,e])}),[]))})}},2378:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var r=e(5944),i=e(917),o=e(7146),c=(0,i.iv)("list-style:none;padding:0;margin:0;"),a=function(t){return(0,i.iv)("padding:",t.spacing(2,3),";margin:",t.spacing(2,0),";border:1px solid #bbb;")};function u(t){var n=t.posts;return(0,r.tZ)("ul",{css:c,children:n.map((function(t){return(0,r.tZ)("li",{css:a,children:(0,r.tZ)("article",{children:(0,r.tZ)(o.Z,{post:t,link:!0})})},t.slug)}))})}},9266:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return I},config:function(){return F},default:function(){return R}});var r=e(5944),i=e(8238),o=e(1720),c=e(9964),a=e(917),u=e(3020),l=function(t){return(0,a.iv)("display:flex;padding:0;margin:",t.spacing(4,0),";")},s=function(t){return(0,a.iv)("display:flex;align-items:center;padding:",t.spacing(1,2),";margin:0;")},d=(0,a.iv)("flex:1;padding-left:0;justify-content:flex-end;"),p=(0,a.iv)("flex:1;padding-right:0;"),f=(0,a.iv)("border-left:1px solid #6c6c6c;border-right:1px solid #6c6c6c;");function Z(t){var n=t.prev,e=t.next;return(0,r.BX)("ul",{css:l,children:[(0,r.tZ)("li",{css:[s,d],children:n?(0,r.tZ)(u.Z,{href:"/blog/".concat(n.slug),variant:"body1",children:n.title}):null}),(0,r.tZ)("li",{css:[s,f],children:(0,r.tZ)(u.Z,{href:"/",variant:"body1",children:"HOME"})}),(0,r.tZ)("li",{css:[s,p],children:e?(0,r.tZ)(u.Z,{href:"/blog/".concat(e.slug),variant:"body1",children:e.title}):null})]})}var g=e(65),m=e(3376),h=e(2378),v=function(t){return(0,a.iv)("margin:",t.spacing(4,"auto"),";")};function b(t){var n=t.tags,e=t.posts;return(0,r.BX)("aside",{css:v,children:[(0,r.BX)("header",{children:[(0,r.tZ)(g.Z,{variant:"h5",component:"h1",children:"\u540c\u3058\u30bf\u30b0\u3092\u542b\u3080\u8a18\u4e8b"}),(0,r.tZ)(m.Z,{tags:n})]}),(0,r.tZ)("main",{children:(0,r.tZ)(h.Z,{posts:e})})]})}var y=e(1899),x=e(7733),w=e(3913),_=e(5282),S=e(6888),O=e(2916),k=e(3252),B=e(1865),X=e(8528),j=e(9800),A=e(1771),T=e(7146);function z(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function E(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){z(t,n,e[n])}))}return t}var C=function(t){return(0,a.iv)("padding:",t.spacing(.5,1),";border-radius:",t.spacing(.5),';background-color:#1e1e1e;color:#d4d4d4;font-family:"SFMono-Regular",Consolas,Menlo,Courier,monospace,monospace;font-size:0.9em;pre > &{padding:0;background-color:transparent;}')},P=(0,a.iv)("word-break:break-all;"),M=function(t){return(0,a.iv)("display:flex;justify-content:space-between;align-items:center;padding:",t.spacing(.5,4),";border-top-right-radius:5px;border-top-left-radius:5px;background-color:#555;color:white;")},N=function(t){return(0,a.iv)("overflow:auto;padding:",t.spacing(1,4),";border-bottom-right-radius:5px;border-bottom-left-radius:5px;")},D=(0,a.iv)("& &{margin-top:0;margin-bottom:0;}"),$={p:function(t){return(0,r.tZ)(g.Z,E({my:2,textAlign:"justify",whiteSpace:"pre-line"},t))},h2:function(t){return(0,r.tZ)(g.Z,E({my:4,borderBottom:"1px solid currentcolor"},t,{component:"h2",variant:"h4"}))},h3:function(t){return(0,r.tZ)(g.Z,E({my:3},t,{component:"h3",variant:"h5"}))},h4:function(t){return(0,r.tZ)(g.Z,E({my:3},t,{component:"h4",variant:"h6"}))},ul:function(t){return(0,r.tZ)(g.Z,E({my:2,css:D},t,{component:"ul"}))},ol:function(t){return(0,r.tZ)(g.Z,E({my:2,css:D},t,{component:"ol"}))},li:function(t){return(0,r.tZ)(g.Z,E({},t,{component:"li"}))},code:function(t){var n="string"===typeof t.children&&/^[a-zA-Z$_][a-zA-Z0-9$_.]*$/.test(t.children);return(0,r.tZ)("code",E({},t,{css:[C,n&&P]}))},pre:function(t){return(0,r.tZ)(g.Z,E({component:"pre"},t,{css:N}))},a:u.Z,table:function(t){return(0,r.tZ)(S.Z,{component:x.Z,variant:"outlined",children:(0,r.tZ)(O.Z,E({},t))})},tbody:k.Z,tr:B.Z,th:function(t){return(0,r.tZ)(X.Z,E({component:"th"},t,{align:t.align||void 0}))},td:function(t){return(0,r.tZ)(X.Z,E({},t,{align:t.align||void 0}))},"app-code-wrapper":function(t){var n=t.title,e=t.lang,i=t.code,c=t.children,a=(0,o.useState)(!1),u=a[0],l=a[1];return(0,r.BX)(x.Z,{elevation:4,sx:{my:2},children:[(0,r.BX)("div",{css:M,children:[(0,r.tZ)(g.Z,{component:"span",children:"diff"===e&&n?"diff: ".concat(n):n}),(0,r.tZ)(w.Z,{"aria-label":"copy",size:"small",sx:{color:"white"},onClick:function(){navigator.clipboard.writeText(i).then((function(){l(!0)}))},children:(0,r.tZ)(y.Z,{fontSize:"small"})})]}),c,(0,r.tZ)(_.Z,{open:u,autoHideDuration:5e3,onClose:function(){l(!1)},message:"\u30b3\u30fc\u30c9\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",anchorOrigin:{vertical:"top",horizontal:"center"}})]})}};function H(t){var n=t.post,e=t.content;return(0,r.BX)("article",{children:[(0,r.tZ)(j.Z,{mb:4,children:(0,r.tZ)(T.Z,{post:n})}),(0,r.tZ)("main",{children:(0,r.tZ)(A.Z,{source:e,components:$})})]})}var I=!0,F={amp:"hybrid"};function R(t){var n=t.post,e=t.next,o=t.prev,a=t.sameTags,u=t.content;return(0,r.BX)(i.Z,{children:[(0,r.tZ)(c.Z,{title:n.title,description:n.description}),(0,r.tZ)(H,{post:n,content:u}),(0,r.tZ)(Z,{next:e,prev:o}),a.length>0&&(0,r.tZ)(b,{tags:n.tags,posts:a})]})}}},function(t){t.O(0,[122,774,888,179],(function(){return n=3214,t(t.s=n);var n}));var n=t.O();_N_E=n}]);