(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{2330:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9008),o=n(1163),s=n(4007),a=n(5893);function i(e){var t=e.title,n=e.description,i=e.image,c=(0,o.useRouter)(),u=t?"".concat(t," | ").concat(s.px):s.px,l=c.pathname.startsWith("/blog/"),d="".concat(s.y0).concat(c.asPath);return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:u}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:description",content:n}),(0,a.jsx)("meta",{property:"og:type",content:l?"article":"website"}),(0,a.jsx)("meta",{property:"og:url",content:d}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(s.y0).concat(i||"/images/icon.jpg")}),(0,a.jsx)("meta",{property:"og:site_name",content:s.px}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary"})]})}},8964:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1120),o=n(2318),s=n(2674),a=n(7294),i=n(8918),c=n(5893);function u(e){var t=e.dateTime,n=(0,a.useMemo)((function(){return function(e){var t=new Date(e),n=t.getFullYear(),r="0".concat(t.getMonth()+1).slice(-2),o="0".concat(t.getDate()).slice(-2);return"".concat(n,"-").concat(r,"-").concat(o)}(t)}),[t]);return(0,c.jsx)(o.Z,{component:"time",variant:"body2",dateTime:t,children:n})}var l=n(5594),d=(0,r.Z)((function(e){return{createAt:{display:"flex",alignItems:"center",margin:e.spacing(1,0)},icon:{marginRight:e.spacing(.5)}}}));function p(e){var t=e.post,n=e.link,r=d();return(0,c.jsxs)("header",{children:[(0,c.jsxs)("div",{className:r.createAt,children:[(0,c.jsx)(s.Z,{fontSize:"small",className:r.icon}),(0,c.jsx)(u,{dateTime:t.date})]}),(0,c.jsx)(o.Z,{component:"h1",variant:"h5",gutterBottom:!0,children:n?(0,c.jsx)(i.Z,{href:"/blog/".concat(t.slug,"/"),children:t.title}):t.title}),(0,c.jsx)(l.Z,{tags:t.tags})]})}},5594:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2982),o=n(1120),s=(n(7294),n(8918)),a=n(5893),i=(0,o.Z)((function(e){return{list:{padding:0,margin:0},item:{display:"inline",padding:0,margin:0}}}));function c(e){var t,n,o=e.tags,c=i();return(0,a.jsx)("ul",{className:c.list,children:(t=" ",n=o.map((function(e){return(0,a.jsx)("li",{className:c.item,children:(0,a.jsx)(s.Z,{href:"/tags/".concat(e,"/"),color:"textSecondary",children:"#".concat(e)})},e)})),n.reduce((function(e,n){return[].concat((0,r.Z)(e),[t,n])}),[]))})}},7906:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1120),o=n(8964),s=n(5893),a=(0,r.Z)((function(e){return{list:{listStyle:"none",padding:0,margin:0},item:{padding:e.spacing(2,3),margin:e.spacing(2,0),border:"1px solid #bbb"}}}));function i(e){var t=e.posts,n=a();return(0,s.jsx)("ul",{className:n.list,children:t.map((function(e){return(0,s.jsx)("li",{className:n.item,children:(0,s.jsx)("article",{children:(0,s.jsx)(o.Z,{post:e,link:!0})})},e.slug)}))})}},3003:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},config:function(){return F},default:function(){return I}});var r=n(3832),o=(n(7294),n(2330)),s=n(1120),a=n(8918),i=n(5893),c=(0,s.Z)((function(e){return{list:{display:"flex"},item:{display:"flex",alignItems:"center",padding:e.spacing(1,2)},prev:{flex:1,paddingLeft:0,justifyContent:"flex-end"},next:{flex:1,paddingRight:0},home:{borderLeft:"1px solid #6c6c6c",borderRight:"1px solid #6c6c6c"}}}));function u(e){var t=e.prev,n=e.next,o=c();return(0,i.jsxs)(r.Z,{className:o.list,children:[(0,i.jsx)("div",{className:"".concat(o.item," ").concat(o.prev),children:t?(0,i.jsx)(a.Z,{href:"/blog/".concat(t.slug),variant:"body1",children:t.title}):null}),(0,i.jsx)("div",{className:"".concat(o.item," ").concat(o.home),children:(0,i.jsx)(a.Z,{href:"/",variant:"body1",children:"HOME"})}),(0,i.jsx)("div",{className:"".concat(o.item," ").concat(o.next),children:n?(0,i.jsx)(a.Z,{href:"/blog/".concat(n.slug),variant:"body1",children:n.title}):null})]})}var l=n(2318),d=n(5594),p=n(7906),m=(0,s.Z)((function(e){return{root:{margin:e.spacing(4,"auto")}}}));function f(e){var t=e.tags,n=e.posts,r=m();return(0,i.jsxs)("aside",{className:r.root,children:[(0,i.jsxs)("header",{children:[(0,i.jsx)(l.Z,{variant:"h5",component:"h1",children:"\u540c\u3058\u30bf\u30b0\u3092\u542b\u3080\u8a18\u4e8b"}),(0,i.jsx)(d.Z,{tags:t})]}),(0,i.jsx)("main",{children:(0,i.jsx)(p.Z,{posts:n})})]})}var g=n(4942),j=n(6847),h=n(9895),x=n(2302),b=n(9613),v=n(7394),Z=n(8222),y=n(3905),w=n(6010),k=n(5152),N=n(8365),O=function(){return(0,i.jsxs)(l.Z,{gutterBottom:!0,children:[(0,i.jsx)(N.Z,{}),(0,i.jsx)(N.Z,{}),(0,i.jsx)(N.Z,{})]})},_=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:(0,i.jsx)(N.Z,{})}),(0,i.jsx)(O,{}),(0,i.jsx)(O,{}),(0,i.jsx)(O,{})]})};function G(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(O,{}),(0,i.jsx)(_,{}),(0,i.jsx)(_,{}),(0,i.jsx)(_,{}),(0,i.jsx)(_,{})]})}var P={"first-post":(0,k.default)((function(){return n.e(997).then(n.bind(n,4997))}),{loading:G,loadableGenerated:{webpack:function(){return[4997]},modules:["../../generated/posts.js -> ../contents/posts/2018-06/first-post.md"]}}),"use-technology":(0,k.default)((function(){return n.e(915).then(n.bind(n,5915))}),{loading:G,loadableGenerated:{webpack:function(){return[5915]},modules:["../../generated/posts.js -> ../contents/posts/2018-06/use-technology.md"]}}),"deploy-to-github-pages-user-page":(0,k.default)((function(){return n.e(186).then(n.bind(n,2186))}),{loading:G,loadableGenerated:{webpack:function(){return[2186]},modules:["../../generated/posts.js -> ../contents/posts/2018-07/deploy-to-github-pages-user-page.md"]}}),"html-minify":(0,k.default)((function(){return n.e(718).then(n.bind(n,6718))}),{loading:G,loadableGenerated:{webpack:function(){return[6718]},modules:["../../generated/posts.js -> ../contents/posts/2018-07/html-minify.md"]}}),"remove-object-key":(0,k.default)((function(){return n.e(461).then(n.bind(n,1461))}),{loading:G,loadableGenerated:{webpack:function(){return[1461]},modules:["../../generated/posts.js -> ../contents/posts/2018-07/remove-object-key.md"]}}),"use-hyperapp":(0,k.default)((function(){return n.e(134).then(n.bind(n,9134))}),{loading:G,loadableGenerated:{webpack:function(){return[9134]},modules:["../../generated/posts.js -> ../contents/posts/2018-07/use-hyperapp.md"]}}),"webpacks-rules-in-static-config-js":(0,k.default)((function(){return n.e(749).then(n.bind(n,1749))}),{loading:G,loadableGenerated:{webpack:function(){return[1749]},modules:["../../generated/posts.js -> ../contents/posts/2018-07/webpacks-rules-in-static-config-js.md"]}}),"difference-between-jsx-and-html":(0,k.default)((function(){return n.e(211).then(n.bind(n,9211))}),{loading:G,loadableGenerated:{webpack:function(){return[9211]},modules:["../../generated/posts.js -> ../contents/posts/2018-08/difference-between-jsx-and-html.md"]}}),"environment-construction":(0,k.default)((function(){return n.e(204).then(n.bind(n,1204))}),{loading:G,loadableGenerated:{webpack:function(){return[1204]},modules:["../../generated/posts.js -> ../contents/posts/2018-08/environment-construction.md"]}}),"wasm-bindgen-with-worker":(0,k.default)((function(){return n.e(58).then(n.bind(n,9058))}),{loading:G,loadableGenerated:{webpack:function(){return[9058]},modules:["../../generated/posts.js -> ../contents/posts/2018-12/wasm-bindgen-with-worker.md"]}}),"use-parcel":(0,k.default)((function(){return n.e(729).then(n.bind(n,9729))}),{loading:G,loadableGenerated:{webpack:function(){return[9729]},modules:["../../generated/posts.js -> ../contents/posts/2019-04/use-parcel.md"]}}),"use-next":(0,k.default)((function(){return n.e(546).then(n.bind(n,5546))}),{loading:G,loadableGenerated:{webpack:function(){return[5546]},modules:["../../generated/posts.js -> ../contents/posts/2020-09/use-next.md"]}}),"use-amp":(0,k.default)((function(){return n.e(346).then(n.bind(n,346))}),{loading:G,loadableGenerated:{webpack:function(){return[346]},modules:["../../generated/posts.js -> ../contents/posts/2020-11/use-amp.md"]}})},B=n(1163),E=n(8964);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,g.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=(0,s.Z)({"@keyframes fadein":{"0%":{transform:"scale(0.99)",opacity:0},"100%":{transform:"scale(1)",opacity:1}},p:{marginTop:"1em"},header:{marginBottom:"2em"},main:{animation:"$fadein 0.4s"}}),R=function(e){var t=D();return(0,i.jsx)(l.Z,T(T({},e),{},{className:(0,w.Z)(t.p,e.className)}))},C={p:function(e){return(0,i.jsx)(l.Z,T(T({},e),{},{gutterBottom:!0}))},h2:function(e){return(0,i.jsx)(R,T(T({},e),{},{component:"h2",variant:"h4",gutterBottom:!0}))},h3:function(e){return(0,i.jsx)(R,T(T({},e),{},{component:"h3",variant:"h5",gutterBottom:!0}))},h4:function(e){return(0,i.jsx)(R,T(T({},e),{},{component:"h4",variant:"h6",gutterBottom:!0}))},ul:function(e){return(0,i.jsx)(l.Z,T(T({},e),{},{component:"ul",gutterBottom:!0}))},ol:function(e){return(0,i.jsx)(l.Z,T(T({},e),{},{component:"ol",gutterBottom:!0}))},li:function(e){return(0,i.jsx)(l.Z,T(T({},e),{},{component:"li"}))},a:a.Z,table:function(e){return(0,i.jsx)(j.Z,{component:h.Z,variant:"outlined",children:(0,i.jsx)(x.Z,T({},e))})},tbody:b.Z,tr:v.Z,th:function(e){return(0,i.jsx)(Z.Z,T(T({component:"th"},e),{},{align:e.align||void 0}))},td:function(e){return(0,i.jsx)(Z.Z,T(T({},e),{},{align:e.align||void 0}))}};function M(e){var t=e.post,n=D(),r=(0,B.useRouter)(),o=P[t.slug];return(0,i.jsxs)("article",{children:[(0,i.jsx)("div",{className:n.header,children:(0,i.jsx)(E.Z,{post:t})}),(0,i.jsx)("main",{className:n.main,children:(0,i.jsx)(y.Zo,{components:C,children:(0,i.jsx)(o,{})})},r.asPath)]})}var A=!0,F={amp:"hybrid"};function I(e){var t=e.post,n=e.next,s=e.prev,a=e.sameTags;return(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(o.Z,{title:t.title,description:t.description}),(0,i.jsx)(M,{post:t}),(0,i.jsx)(u,{next:n,prev:s}),a.length>0&&(0,i.jsx)(f,{tags:t.tags,posts:a})]})}},3214:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(3003)}])}},function(e){e.O(0,[774,132,888,179],(function(){return t=3214,e(e.s=t);var t}));var t=e.O();_N_E=t}]);