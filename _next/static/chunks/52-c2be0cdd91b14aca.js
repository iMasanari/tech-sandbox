"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52],{5551:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(9008),c=e(1163),a=e(8459),o=e(5944);function i(t){var n=t.title,e=t.description,i=t.image,u=(0,c.useRouter)(),s=n?"".concat(n," | ").concat(a.px):a.px,p=u.pathname.startsWith("/blog/"),l="".concat(a.y0).concat(u.asPath);return(0,o.BX)(r.default,{children:[(0,o.tZ)("title",{children:s}),(0,o.tZ)("meta",{name:"description",content:e}),(0,o.tZ)("meta",{property:"og:title",content:n}),(0,o.tZ)("meta",{property:"og:description",content:e}),(0,o.tZ)("meta",{property:"og:type",content:p?"article":"website"}),(0,o.tZ)("meta",{property:"og:url",content:l}),(0,o.tZ)("meta",{property:"og:image",content:"".concat(a.y0).concat(i||"/images/icon.jpg")}),(0,o.tZ)("meta",{property:"og:site_name",content:a.px}),(0,o.tZ)("meta",{name:"twitter:card",content:"summary"})]})}},6748:function(t,n,e){e.d(n,{Z:function(){return l}});var r=e(9499),c=e(5659),a=e(222),o=(e(1720),e(6203)),i=e(5944);function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p={name:"zl1inp",styles:"display:flex;justify-content:center"};function l(t){var n=t.page,e=t.count,r=t.basePath;return(0,i.tZ)(a.Z,{css:p,page:n,count:e,renderItem:function(t){return t.page<=0||e<t.page?(0,i.tZ)(c.Z,s({component:"span"},t)):(0,i.tZ)(c.Z,s({component:o.Z,href:"".concat(r).concat(1===t.page?"":"p".concat(t.page))},t))}})}},7022:function(t,n,e){e.d(n,{Z:function(){return f}});var r=e(917),c=e(4918),a=e(1334),o=e(65),i=e(1571),u=e(1720),s=e(5944);function p(t){var n=t.dateTime,e=(0,u.useMemo)((function(){return function(t){var n=new Date(t),e=n.getFullYear(),r="0".concat(n.getMonth()+1).slice(-2),c="0".concat(n.getDate()).slice(-2);return"".concat(e,"-").concat(r,"-").concat(c)}(n)}),[n]);return(0,s.tZ)(o.Z,{component:"time",variant:"body2",dateTime:n,children:e})}var l=e(9771),d=function(t){return(0,r.iv)("display:flex;align-items:center;margin:",t.spacing(1,0),";","")};function f(t){var n=t.post,e=t.link;return(0,s.BX)("header",{children:[(0,s.BX)("div",{css:d,children:[(0,s.tZ)(c.Z,{fontSize:"small",sx:{mr:.5}}),(0,s.tZ)(p,{dateTime:n.date}),n.update&&(0,s.BX)(s.HY,{children:[(0,s.tZ)(a.Z,{fontSize:"small",sx:{ml:2,mr:.5}}),(0,s.tZ)(p,{dateTime:n.update})]})]}),(0,s.tZ)(o.Z,{component:"h1",variant:"h5",gutterBottom:!0,children:e?(0,s.tZ)(i.Z,{href:"/blog/".concat(n.slug,"/"),children:n.title}):n.title}),(0,s.tZ)(l.Z,{tags:n.tags})]})}},9771:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(6687),c=(e(1720),e(1571)),a=e(5944);var o={name:"1772xtw",styles:"padding:0;margin:0"},i={name:"1bbvdb4",styles:"display:inline;padding:0;margin:0"};function u(t){var n,e,u=t.tags;return(0,a.tZ)("ul",{css:o,children:(n=" ",e=u.map((function(t){return(0,a.tZ)("li",{css:i,children:(0,a.tZ)(c.Z,{href:"/tags/".concat(t,"/"),color:"textSecondary",underline:"hover",children:"#".concat(t)})},t)})),e.reduce((function(t,e){return[].concat((0,r.Z)(t),[n,e])}),[]))})}},7246:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(917),c=e(7022),a=e(5944);var o={name:"v5al3",styles:"list-style:none;padding:0;margin:0"},i=function(t){return(0,r.iv)("padding:",t.spacing(2,3),";margin:",t.spacing(2,0),";border:1px solid #bbb;","")};function u(t){var n=t.posts;return(0,a.tZ)("ul",{css:o,children:n.map((function(t){return(0,a.tZ)("li",{css:i,children:(0,a.tZ)("article",{children:(0,a.tZ)(c.Z,{post:t,link:!0})})},t.slug)}))})}},52:function(t,n,e){e.r(n),e.d(n,{__N_SSG:function(){return p},config:function(){return l}});var r=e(8238),c=e(1163),a=e(1720),o=e(5551),i=e(6748),u=e(7246),s=e(5944),p=!0,l={amp:"hybrid"};n.default=function(t){var n=t.posts,e=t.pager,p=(0,c.useRouter)(),l=p.query,d=l.tag,f=l.page;return(0,a.useEffect)((function(){"p1"===f&&p.replace("/tags/".concat(d))}),[d,f,p]),(0,s.BX)(r.Z,{component:"main",children:[(0,s.tZ)(o.Z,{title:"\u300c".concat(d,"\u300d\u306e\u691c\u7d22\u7d50\u679c"),description:"\u300c".concat(d,"\u300d\u306e\u691c\u7d22\u7d50\u679c")}),(0,s.BX)("p",{children:["\u300c",d,"\u300d\u306e\u691c\u7d22\u7d50\u679c"]}),(0,s.tZ)(u.Z,{posts:n}),(0,s.tZ)(i.Z,{page:e.page,count:e.count,basePath:"/tags/".concat(d,"/")})]})}}}]);