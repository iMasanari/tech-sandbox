(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{2330:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var a=e(9008),r=e(1163),c=e(4007),o=e(917);function i(t){var n=t.title,e=t.description,i=t.image,u=(0,r.useRouter)(),s=n?"".concat(n," | ").concat(c.px):c.px,p=u.pathname.startsWith("/blog/"),l="".concat(c.y0).concat(u.asPath);return(0,o.tZ)(a.default,null,(0,o.tZ)("title",null,s),(0,o.tZ)("meta",{name:"description",content:e}),(0,o.tZ)("meta",{property:"og:title",content:n}),(0,o.tZ)("meta",{property:"og:description",content:e}),(0,o.tZ)("meta",{property:"og:type",content:p?"article":"website"}),(0,o.tZ)("meta",{property:"og:url",content:l}),(0,o.tZ)("meta",{property:"og:image",content:"".concat(c.y0).concat(i||"/images/icon.jpg")}),(0,o.tZ)("meta",{property:"og:site_name",content:c.px}),(0,o.tZ)("meta",{name:"twitter:card",content:"summary"}))}},1978:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var a=e(159),r=e(9349),c=e(491),o=(e(9748),e(1354)),i=e(917);var u={name:"zl1inp",styles:"display:flex;justify-content:center"};function s(t){var n=t.page,e=t.count,s=t.basePath;return(0,i.tZ)(c.Z,{css:u,page:n,count:e,renderItem:function(t){return t.page<=0||e<t.page?(0,i.tZ)(r.Z,(0,a.Z)({component:"span"},t)):(0,i.tZ)(r.Z,(0,a.Z)({component:o.Z,href:"".concat(s).concat(1===t.page?"":"p".concat(t.page))},t))}})}},8964:function(t,n,e){"use strict";e.d(n,{Z:function(){return Z}});var a=e(917),r=e(4918),c=e(7957),o=e(2626),i=e(9748),u=e(8918);function s(t){var n=t.dateTime,e=(0,i.useMemo)((function(){return function(t){var n=new Date(t),e=n.getFullYear(),a="0".concat(n.getMonth()+1).slice(-2),r="0".concat(n.getDate()).slice(-2);return"".concat(e,"-").concat(a,"-").concat(r)}(n)}),[n]);return(0,a.tZ)(o.Z,{component:"time",variant:"body2",dateTime:n},e)}var p=e(5594),l=function(t){return(0,a.iv)("display:flex;align-items:center;margin:",t.spacing(1,0),";","")};function Z(t){var n=t.post,e=t.link;return(0,a.tZ)("header",null,(0,a.tZ)("div",{css:l},(0,a.tZ)(r.Z,{fontSize:"small",sx:{mr:.5}}),(0,a.tZ)(s,{dateTime:n.date}),n.update&&(0,a.tZ)(i.Fragment,null,(0,a.tZ)(c.Z,{fontSize:"small",sx:{ml:2,mr:.5}}),(0,a.tZ)(s,{dateTime:n.update}))),(0,a.tZ)(o.Z,{component:"h1",variant:"h5",gutterBottom:!0},e?(0,a.tZ)(u.Z,{href:"/blog/".concat(n.slug,"/")},n.title):n.title),(0,a.tZ)(p.Z,{tags:n.tags}))}},5594:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var a=e(1508),r=(e(9748),e(8918)),c=e(917);var o={name:"1772xtw",styles:"padding:0;margin:0"},i={name:"1bbvdb4",styles:"display:inline;padding:0;margin:0"};function u(t){var n,e=t.tags;return(0,c.tZ)("ul",{css:o},(n=" ",e.map((function(t){return(0,c.tZ)("li",{key:t,css:i},(0,c.tZ)(r.Z,{href:"/tags/".concat(t,"/"),color:"textSecondary",underline:"hover"},"#".concat(t)))})).reduce((function(t,e){return[].concat((0,a.Z)(t),[n,e])}),[])))}},7906:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var a=e(917),r=e(8964);var c={name:"v5al3",styles:"list-style:none;padding:0;margin:0"},o=function(t){return(0,a.iv)("padding:",t.spacing(2,3),";margin:",t.spacing(2,0),";border:1px solid #bbb;","")};function i(t){var n=t.posts;return(0,a.tZ)("ul",{css:c},n.map((function(t){return(0,a.tZ)("li",{key:t.slug,css:o},(0,a.tZ)("article",null,(0,a.tZ)(r.Z,{post:t,link:!0})))})))}},5332:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return p},config:function(){return l}});var a=e(5693),r=e(1163),c=e(9748),o=e(2330),i=e(1978),u=e(7906),s=e(917),p=!0,l={amp:"hybrid"};n.default=function(t){var n=t.posts,e=t.pager,p=(0,r.useRouter)(),l=p.query,Z=l.tag,g=l.page;return(0,c.useEffect)((function(){"p1"===g&&p.replace("/tags/".concat(Z))}),[Z,g,p]),(0,s.tZ)(a.Z,{component:"main"},(0,s.tZ)(o.Z,{title:"\u300c".concat(Z,"\u300d\u306e\u691c\u7d22\u7d50\u679c"),description:"\u300c".concat(Z,"\u300d\u306e\u691c\u7d22\u7d50\u679c")}),(0,s.tZ)("p",null,"\u300c",Z,"\u300d\u306e\u691c\u7d22\u7d50\u679c"),(0,s.tZ)(u.Z,{posts:n}),(0,s.tZ)(i.Z,{page:e.page,count:e.count,basePath:"/tags/".concat(Z,"/")}))}},7573:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]/[page]",function(){return e(5332)}])}},function(t){t.O(0,[122,774,888,179],(function(){return n=7573,t(t.s=n);var n}));var n=t.O();_N_E=n}]);