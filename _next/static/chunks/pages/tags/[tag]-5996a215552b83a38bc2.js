_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=c,e.useAmp=function(){return c(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,a=t.hybrid,r=void 0!==a&&a,o=t.hasQuery;return n||r&&(void 0!==o&&o)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var a,r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o=a?Object.getOwnPropertyDescriptor(t,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=t[r]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var c=r.key.slice(r.key.indexOf("$")+1);t.has(c)?o=!1:t.add(c)}switch(r.type){case"title":case"base":e.has(r.type)?o=!1:e.add(r.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var u=f[i];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],d=a[u]||new Set;d.has(l)?o=!1:(d.add(l),a[u]=d)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}function m(t){var e=t.children,n=(0,r.useContext)(c.AmpStateContext),a=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},e)}m.rewind=function(){};var h=m;e.default=h},A5Ft:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return n("ZLxv")}])},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},HaOA:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("q1tI"),r=n.n(a),o=n("YFqc"),c=n.n(o),i=r.a.createElement,s=function(t){var e=t.dateTime,n=Object(a.useMemo)((function(){return function(t){var e=new Date(t),n=e.getFullYear(),a="0".concat(e.getMonth()+1).slice(-2),r="0".concat(e.getDate()).slice(-2);return"".concat(n,"-").concat(a,"-").concat(r)}(e)}),[e]);return i("time",{dateTime:e},n)},u=n("jn4O"),l=r.a.createElement,d=function(t){var e=t.post,n=t.link;return l("header",null,l(s,{dateTime:e.date}),l("h1",null,n?l(c.a,{href:"/blog/[slug]/",as:"/blog/".concat(e.slug,"/")},l("a",null,e.title)):e.title),l(u.a,{tags:e.tags}))}},Ijbi:function(t,e,n){var a=n("WkPL");t.exports=function(t){if(Array.isArray(t))return a(t)}},LEvs:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var a=n("MX0m"),r=n.n(a),o=n("q1tI"),c=n.n(o),i=n("YFqc"),s=n.n(i),u=c.a.createElement,l=function(t){var e=t.label,n=t.active,a=t.basePath,r=t.basePathAs;return n?u("span",null,e):u(s.a,{href:1===e?a||"/":"".concat(a||"","/[page]"),as:1===e?r||"/":"".concat(r||"","/p").concat(e)},u("a",null,e))},d=c.a.createElement,f=function(t){var e=t.pager,n=t.basePath,a=t.basePathAs;return d("ul",{className:"jsx-".concat(p.__hash)+" Pager"},function(t){for(var e=new Array(t),n=0;n<t;++n)e[n]=n;return e}(e.max).map((function(t){return d("li",{key:t,className:"jsx-".concat(p.__hash)+" item"},d(l,{label:t+1,active:t+1===e.current,basePath:n,basePathAs:a}))})),d(r.a,{id:p.__hash},p))},p=[".Pager.jsx-3526723532{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style:none;padding:0;margin-right:auto;margin-left:auto;}",".item.jsx-3526723532{margin-right:1rem;}",".item.jsx-3526723532:last-child{margin-right:0;}"];p.__hash="3526723532"},RIqP:function(t,e,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),c=n("Bnag");t.exports=function(t){return a(t)||r(t)||o(t)||c()}},Xuae:function(t,e,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),c=n("PJYZ"),i=n("7W2i"),s=n("a1gu"),u=n("Nsbk");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=u(t);if(e){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var d=n("q1tI"),f=!1,p=function(t){i(n,t);var e=l(n);function n(t){var o;return r(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,f&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(c(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);e.default=p},ZLxv:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return r}));var a=n("uKCu"),r=!0;e.default=a.default},j9eG:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),c=n.n(o),i=n("nOHt"),s=n("he5r"),u=r.a.createElement,l=function(t){var e=t.title,n=t.description,a=t.image,r=Object(i.useRouter)(),o=e?"".concat(e," | ").concat(s.b):s.b,l=r.pathname.startsWith("/blog/"),d="".concat(s.c).concat(r.asPath);return u(c.a,null,u("title",null,o),u("meta",{name:"description",content:n}),u("meta",{property:"og:title",content:e}),u("meta",{property:"og:description",content:n}),u("meta",{property:"og:type",content:l?"article":"website"}),u("meta",{property:"og:url",content:d}),u("meta",{property:"og:image",content:"".concat(s.c).concat(a||"/images/icon.jpg")}),u("meta",{property:"og:site_name",content:s.b}),u("meta",{name:"twitter:card",content:"summary"}))}},jn4O:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("MX0m"),r=n.n(a),o=n("q1tI"),c=n.n(o),i=n("YFqc"),s=n.n(i),u=c.a.createElement,l=function(t){var e=t.tags;return u("ul",{className:"jsx-".concat(d.__hash)+" Tags"},e.map((function(t){return u("li",{key:t,className:"jsx-".concat(d.__hash)+" item"},u(s.a,{href:"/tags/[tag]/",as:"/tags/".concat(t,"/")},u("a",{className:"jsx-".concat(d.__hash)+" link"},"#",t)))})),u(r.a,{id:d.__hash},d))},d=[".Tags.jsx-1424798431{padding:0;}",".item.jsx-1424798431{display:inline;margin:0 0.2em;}",".link.jsx-1424798431{color:var(--color-text-secondary);}"];d.__hash="1424798431"},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var a;e.__esModule=!0,e.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});e.AmpStateContext=r},pNI0:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("MX0m"),r=n.n(a),o=n("q1tI"),c=n.n(o),i=n("HaOA"),s=c.a.createElement,u=function(t){var e=t.posts;return s("ul",{className:"jsx-".concat(l.__hash)+" Posts"},e.map((function(t){return s("li",{key:t.slug,className:"jsx-".concat(l.__hash)+" Posts-item"},s("article",{className:"jsx-".concat(l.__hash)},s(i.a,{post:t,link:!0})))})),s(r.a,{id:l.__hash},l))},l=[".Posts.jsx-2000003725{list-style:none;padding:0;}",".Posts-item.jsx-2000003725{padding:1rem 1.5rem;margin:1rem 0;border:1px solid #bbb;}"];l.__hash="2000003725"},uKCu:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return l}));var a=n("q1tI"),r=n.n(a),o=n("nOHt"),c=n("j9eG"),i=n("LEvs"),s=n("pNI0"),u=r.a.createElement,l=!0;e.default=function(t){var e=t.posts,n=t.pager,r=Object(o.useRouter)(),l=r.query,d=l.tag,f=l.page;return Object(a.useEffect)((function(){"p1"===f&&r.replace("/tags/".concat(d))}),[d,f,r]),u("main",null,u(c.a,{title:"\u300c".concat(d,"\u300d\u306e\u691c\u7d22\u7d50\u679c"),description:"\u300c".concat(d,"\u300d\u306e\u691c\u7d22\u7d50\u679c")}),u("p",null,"\u300c",d,"\u300d\u306e\u691c\u7d22\u7d50\u679c"),u(s.a,{posts:e}),u(i.a,{pager:n,basePath:"/tags/[tag]",basePathAs:"/tags/".concat(d)}))}}},[["A5Ft",0,2,1,3]]]);