(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{2330:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(9008),o=e(1163),i=e(4007),a=e(917);function c(t){var n=t.title,e=t.description,c=t.image,u=(0,o.useRouter)(),s=n?"".concat(n," | ").concat(i.px):i.px,l=u.pathname.startsWith("/blog/"),Z="".concat(i.y0).concat(u.asPath);return(0,a.tZ)(r.default,null,(0,a.tZ)("title",null,s),(0,a.tZ)("meta",{name:"description",content:e}),(0,a.tZ)("meta",{property:"og:title",content:n}),(0,a.tZ)("meta",{property:"og:description",content:e}),(0,a.tZ)("meta",{property:"og:type",content:l?"article":"website"}),(0,a.tZ)("meta",{property:"og:url",content:Z}),(0,a.tZ)("meta",{property:"og:image",content:"".concat(i.y0).concat(c||"/images/icon.jpg")}),(0,a.tZ)("meta",{property:"og:site_name",content:i.px}),(0,a.tZ)("meta",{name:"twitter:card",content:"summary"}))}},8964:function(t,n,e){"use strict";e.d(n,{Z:function(){return p}});var r=e(917),o=e(4918),i=e(7957),a=e(2626),c=e(9748),u=e(8918);function s(t){var n=t.dateTime,e=(0,c.useMemo)((function(){return function(t){var n=new Date(t),e=n.getFullYear(),r="0".concat(n.getMonth()+1).slice(-2),o="0".concat(n.getDate()).slice(-2);return"".concat(e,"-").concat(r,"-").concat(o)}(n)}),[n]);return(0,r.tZ)(a.Z,{component:"time",variant:"body2",dateTime:n},e)}var l=e(5594),Z=function(t){return(0,r.iv)("display:flex;align-items:center;margin:",t.spacing(1,0),";","")};function p(t){var n=t.post,e=t.link;return(0,r.tZ)("header",null,(0,r.tZ)("div",{css:Z},(0,r.tZ)(o.Z,{fontSize:"small",sx:{mr:.5}}),(0,r.tZ)(s,{dateTime:n.date}),n.update&&(0,r.tZ)(c.Fragment,null,(0,r.tZ)(i.Z,{fontSize:"small",sx:{ml:2,mr:.5}}),(0,r.tZ)(s,{dateTime:n.update}))),(0,r.tZ)(a.Z,{component:"h1",variant:"h5",gutterBottom:!0},e?(0,r.tZ)(u.Z,{href:"/blog/".concat(n.slug,"/")},n.title):n.title),(0,r.tZ)(l.Z,{tags:n.tags}))}},5594:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var r=e(1508),o=(e(9748),e(8918)),i=e(917);var a={name:"1772xtw",styles:"padding:0;margin:0"},c={name:"1bbvdb4",styles:"display:inline;padding:0;margin:0"};function u(t){var n,e=t.tags;return(0,i.tZ)("ul",{css:a},(n=" ",e.map((function(t){return(0,i.tZ)("li",{key:t,css:c},(0,i.tZ)(o.Z,{href:"/tags/".concat(t,"/"),color:"textSecondary",underline:"hover"},"#".concat(t)))})).reduce((function(t,e){return[].concat((0,r.Z)(t),[n,e])}),[])))}},7906:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(917),o=e(8964);var i={name:"v5al3",styles:"list-style:none;padding:0;margin:0"},a=function(t){return(0,r.iv)("padding:",t.spacing(2,3),";margin:",t.spacing(2,0),";border:1px solid #bbb;","")};function c(t){var n=t.posts;return(0,r.tZ)("ul",{css:i},n.map((function(t){return(0,r.tZ)("li",{key:t.slug,css:a},(0,r.tZ)("article",null,(0,r.tZ)(o.Z,{post:t,link:!0})))})))}},9477:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return F},config:function(){return O},default:function(){return P}});var r=e(5693),o=(e(9748),e(2330)),i=e(917),a=e(8918);var c=function(t){return(0,i.iv)("display:flex;padding:0;margin:",t.spacing(4,0),";","")},u=function(t){return(0,i.iv)("display:flex;align-items:center;padding:",t.spacing(1,2),";margin:0;","")},s={name:"1nwgaj0",styles:"flex:1;padding-left:0;justify-content:flex-end"},l={name:"1qjki22",styles:"flex:1;padding-right:0"},Z={name:"10gooxn",styles:"border-left:1px solid #6c6c6c;border-right:1px solid #6c6c6c"};function p(t){var n=t.prev,e=t.next;return(0,i.tZ)("ul",{css:c},(0,i.tZ)("li",{css:[u,s,"",""]},n?(0,i.tZ)(a.Z,{href:"/blog/".concat(n.slug),variant:"body1"},n.title):null),(0,i.tZ)("li",{css:[u,Z,"",""]},(0,i.tZ)(a.Z,{href:"/",variant:"body1"},"HOME")),(0,i.tZ)("li",{css:[u,l,"",""]},e?(0,i.tZ)(a.Z,{href:"/blog/".concat(e.slug),variant:"body1"},e.title):null))}var d=e(2626),m=e(5594),g=e(7906),f=function(t){return(0,i.iv)("margin:",t.spacing(4,"auto"),";","")};function v(t){var n=t.tags,e=t.posts;return(0,i.tZ)("aside",{css:f},(0,i.tZ)("header",null,(0,i.tZ)(d.Z,{variant:"h5",component:"h1"},"\u540c\u3058\u30bf\u30b0\u3092\u542b\u3080\u8a18\u4e8b"),(0,i.tZ)(m.Z,{tags:n})),(0,i.tZ)("main",null,(0,i.tZ)(g.Z,{posts:e})))}var y=e(159),h=e(2685),b=e(4774),x=e(2270),_=e(2142),w=e(1521),k=e(262),S=e(8499),T=e(4306),E=(e(8789),e(8964));var N=function(t){return(0,i.iv)("padding:",t.spacing(.5,1),";border-radius:",t.spacing(.5),';background-color:#1e1e1e;color:#d4d4d4;font-family:"SFMono-Regular",Consolas,Menlo,Courier,monospace,monospace;font-size:0.9em;pre>&{padding:0;background-color:transparent;}',"")},j={name:"1m5hyg0",styles:"word-break:break-all"},z=function(t){return(0,i.iv)("overflow:auto;padding:",t.spacing(1,4),";","")},M={name:"yerg3p",styles:"& &{margin-top:0;margin-bottom:0;}"},C={p:function(t){return(0,i.tZ)(d.Z,(0,y.Z)({my:2,textAlign:"justify",whiteSpace:"pre-line"},t))},h2:function(t){return(0,i.tZ)(d.Z,(0,y.Z)({my:4,borderBottom:"1px solid currentcolor"},t,{component:"h2",variant:"h4"}))},h3:function(t){return(0,i.tZ)(d.Z,(0,y.Z)({my:3},t,{component:"h3",variant:"h5"}))},h4:function(t){return(0,i.tZ)(d.Z,(0,y.Z)({my:3},t,{component:"h4",variant:"h6"}))},ul:function(t){return(0,i.tZ)(d.Z,(0,y.Z)({my:2,css:M},t,{component:"ul"}))},ol:function(t){return(0,i.tZ)(d.Z,(0,y.Z)({my:2,css:M},t,{component:"ol"}))},li:function(t){return(0,i.tZ)(d.Z,(0,y.Z)({},t,{component:"li"}))},code:function(t){var n="string"===typeof t.children&&/^[a-zA-Z$_][a-zA-Z0-9$_.]*$/.test(t.children);return(0,i.tZ)("code",(0,y.Z)({},t,{css:[N,n&&j,"",""]}))},pre:function(t){return(0,i.tZ)(d.Z,(0,y.Z)({component:"pre",my:2},t,{css:z}))},a:a.Z,table:function(t){return(0,i.tZ)(h.Z,{component:b.Z,variant:"outlined"},(0,i.tZ)(x.Z,t))},tbody:_.Z,tr:w.Z,th:function(t){return(0,i.tZ)(k.Z,(0,y.Z)({component:"th"},t,{align:t.align||void 0}))},td:function(t){return(0,i.tZ)(k.Z,(0,y.Z)({},t,{align:t.align||void 0}))}};function A(t){var n=t.post,e=t.content;return(0,i.tZ)("article",null,(0,i.tZ)(S.Z,{mb:4},(0,i.tZ)(E.Z,{post:n})),(0,i.tZ)("main",null,(0,i.tZ)(T.Z,{source:e,components:C})))}var F=!0,O={amp:"hybrid"};function P(t){var n=t.post,e=t.next,a=t.prev,c=t.sameTags,u=t.content;return(0,i.tZ)(r.Z,null,(0,i.tZ)(o.Z,{title:n.title,description:n.description}),(0,i.tZ)(A,{post:n,content:u}),(0,i.tZ)(p,{next:e,prev:a}),c.length>0&&(0,i.tZ)(v,{tags:n.tags,posts:c}))}},3214:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return e(9477)}])}},function(t){t.O(0,[670,774,888,179],(function(){return n=3214,t(t.s=n);var n}));var n=t.O();_N_E=n}]);