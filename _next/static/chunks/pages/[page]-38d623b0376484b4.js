(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{5868:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[page]",function(){return e(9413)}])},9964:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var r=e(5944),c=e(9008),o=e(1163),i=e(9321);function a(t){var n=t.title,e=t.description,a=t.image,u=(0,o.useRouter)(),s=n?"".concat(n," | ").concat(i.px):i.px,l=u.pathname.startsWith("/blog/"),p="".concat(i.y0).concat(u.asPath);return(0,r.BX)(c.default,{children:[(0,r.tZ)("title",{children:s}),(0,r.tZ)("meta",{name:"description",content:e}),(0,r.tZ)("meta",{property:"og:title",content:n}),(0,r.tZ)("meta",{property:"og:description",content:e}),(0,r.tZ)("meta",{property:"og:type",content:l?"article":"website"}),(0,r.tZ)("meta",{property:"og:url",content:p}),(0,r.tZ)("meta",{property:"og:image",content:"".concat(i.y0).concat(a||"/images/icon.jpg")}),(0,r.tZ)("meta",{property:"og:site_name",content:i.px}),(0,r.tZ)("meta",{name:"twitter:card",content:"summary"})]})}},1125:function(t,n,e){"use strict";e.d(n,{Z:function(){return p}});var r=e(5944),c=e(917),o=e(5659),i=e(222),a=(e(1720),e(4049));function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){u(t,n,e[n])}))}return t}var l=(0,c.iv)("display:flex;justify-content:center;");function p(t){var n=t.page,e=t.count,c=t.basePath;return(0,r.tZ)(i.Z,{css:l,page:n,count:e,renderItem:function(t){return null==t.page||t.page<=0||e<t.page?(0,r.tZ)(o.Z,s({component:"span"},t)):(0,r.tZ)(o.Z,s({component:a.Z,href:"".concat(c).concat(1===t.page?"":"p".concat(t.page))},t))}})}},7146:function(t,n,e){"use strict";e.d(n,{Z:function(){return d}});var r=e(5944),c=e(917),o=e(4918),i=e(1334),a=e(65),u=e(3020),s=e(1720);function l(t){var n=t.dateTime,e=(0,s.useMemo)((function(){return function(t){var n=new Date(t),e=n.getFullYear(),r="0".concat(n.getMonth()+1).slice(-2),c="0".concat(n.getDate()).slice(-2);return"".concat(e,"-").concat(r,"-").concat(c)}(n)}),[n]);return(0,r.tZ)(a.Z,{component:"time",variant:"body2",dateTime:n,children:e})}var p=e(3376),f=function(t){return(0,c.iv)("display:flex;align-items:center;margin:",t.spacing(1,0),";")};function d(t){var n=t.post,e=t.link;return(0,r.BX)("header",{children:[(0,r.BX)("div",{css:f,children:[(0,r.tZ)(o.Z,{fontSize:"small",sx:{mr:.5}}),(0,r.tZ)(l,{dateTime:n.date}),n.update&&(0,r.BX)(r.HY,{children:[(0,r.tZ)(i.Z,{fontSize:"small",sx:{ml:2,mr:.5}}),(0,r.tZ)(l,{dateTime:n.update})]})]}),(0,r.tZ)(a.Z,{component:"h1",variant:"h5",gutterBottom:!0,children:e?(0,r.tZ)(u.Z,{href:"/blog/".concat(n.slug,"/"),children:n.title}):n.title}),(0,r.tZ)(p.Z,{tags:n.tags})]})}},3376:function(t,n,e){"use strict";e.d(n,{Z:function(){return l}});var r=e(5944),c=e(917),o=(e(1720),e(3020));function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=(0,c.iv)("padding:0;margin:0;"),s=(0,c.iv)("display:inline;padding:0;margin:0;");function l(t){var n,e,c=t.tags;return(0,r.tZ)("ul",{css:u,children:(n=" ",e=c.map((function(t){return(0,r.tZ)("li",{css:s,children:(0,r.tZ)(o.Z,{href:"/tags/".concat(t,"/"),color:"textSecondary",underline:"hover",children:"#".concat(t)})},t)})),e.reduce((function(t,e){return a(t).concat([n,e])}),[]))})}},2378:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var r=e(5944),c=e(917),o=e(7146),i=(0,c.iv)("list-style:none;padding:0;margin:0;"),a=function(t){return(0,c.iv)("padding:",t.spacing(2,3),";margin:",t.spacing(2,0),";border:1px solid #bbb;")};function u(t){var n=t.posts;return(0,r.tZ)("ul",{css:i,children:n.map((function(t){return(0,r.tZ)("li",{css:a,children:(0,r.tZ)("article",{children:(0,r.tZ)(o.Z,{post:t,link:!0})})},t.slug)}))})}},9413:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return l},config:function(){return p}});var r=e(5944),c=e(8238),o=e(1163),i=e(1720),a=e(2378),u=e(9964),s=e(1125),l=!0,p={amp:"hybrid"};n.default=function(t){var n=t.posts,e=t.pager,l=(0,o.useRouter)(),p=l.query.page;return(0,i.useEffect)((function(){"p1"===p&&l.replace("/")}),[p,l]),(0,r.BX)(c.Z,{component:"main",children:[(0,r.tZ)(u.Z,{description:"\u6280\u8853\u30d6\u30ed\u30b0\u6539\u3081\u3001Qiita\u306e\u4e0b\u66f8\u304d"}),(0,r.tZ)(a.Z,{posts:n}),(0,r.tZ)(s.Z,{page:e.page,count:e.count,basePath:"/"})]})}}},function(t){t.O(0,[256,774,888,179],(function(){return n=5868,t(t.s=n);var n}));var n=t.O();_N_E=n}]);