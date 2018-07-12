!function(){"use strict";var e=function(){return(e=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function l(t,n){for(var e=[],o=[],r=arguments.length;2<r--;)e.push(arguments[r]);for(;e.length;){var a=e.pop();if(a&&a.pop)for(r=a.length;r--;)e.push(a[r]);else null!=a&&!0!==a&&!1!==a&&o.push(a)}return"function"==typeof t?t(n||{},o):{nodeName:t,attributes:n||{},children:o,key:n&&n.key}}function u(t){return t.protocol+"//"+t.hostname+(t.port?":"+t.port:"")}function o(a,i){return function(t,n){var e=a.to,o=t.location,r=a.onclick;return delete a.to,delete a.location,a.href=e,a.onclick=function(t){var n;r&&r(t),t.defaultPrevented||0!==t.button||t.altKey||t.metaKey||t.ctrlKey||t.shiftKey||"_blank"===a.target||(n=t.currentTarget,u(location)!==u(n))||(t.preventDefault(),e!==o.pathname&&history.pushState(o.pathname,"",e))},l("a",a,i)}}var t={state:{pathname:window.location.pathname,previous:window.location.pathname},actions:{go:function(t){history.pushState(null,"",t)},set:function(t){return t}},subscribe:function(n){function t(t){n.set({pathname:window.location.pathname,previous:t.detail?window.location.previous=t.detail:window.location.previous})}var e=["pushState","replaceState"].reduce(function(t,n){var o=history[n];return history[n]=function(t,n,e){o.call(this,t,n,e),dispatchEvent(new CustomEvent("pushstate",{detail:t}))},function(){history[n]=o,t&&t()}},null);return addEventListener("pushstate",t),addEventListener("popstate",t),function(){removeEventListener("pushstate",t),removeEventListener("popstate",t),e()}}},r=function(t){return l("ul",{class:"PostTags"},t.tags.map(function(t){return l("li",{key:t,class:"PostTags-li"},l(o,{class:"PostTags-Link",to:"/tags/"+t+"/"},t)," ")}))},a="/blog",n=function(t){var n=t.post;return l("article",null,l("span",null,n.date),l("h1",{class:"PostThumb-title"},l(o,{to:a+"/"+n.slug+"/"},n.title)),l(r,{tags:n.tags}))},i=function(t){return l("ul",{class:"Posts"},t.posts.map(function(t){return l("li",{key:t.slug,class:"Posts-li"},l(n,{post:t}))}))},s=function(t){var n=t.prev,e=t.next;return l("div",{class:"PostPager"},l("div",{class:"PostPager-item"},n?l(o,{to:a+"/"+n.slug+"/"},n.title):null),l("div",{class:"PostPager-item"},l(o,{to:"/"},"HOME")),l("div",{class:"PostPager-item"},e?l(o,{to:a+"/"+e.slug+"/"},e.title):null))},c=[function(t){var n=t.posts;return l("div",null,l(i,{posts:n}))},function(t){var n=t.post,e=t.prev,o=t.next;return l("div",null,l("article",null,l("span",null,n.date),l("h1",null,n.title),l(r,{tags:n.tags}),l("div",{innerHTML:n.contents,oncreate:function(t){t.innerHTML=n.contents}})),l(s,{prev:e,next:o}))},function(t){var n=t.posts,e=t.tag;return l("div",null,l("div",null,l(o,{to:"/"},"TOP")," > ",l("span",null,e)),l("p",null,"「",e,"」の検索結果"),l(i,{posts:n}))}];function f(){return function(t){return l(c[t.data.component],t.data.props)}}var p=function(){return l("header",{class:"Header"},l("h1",{class:"Header-title"},l(o,{to:"/"},"Tech SANDBOX")))},d=function(){return l("footer",{class:"Footer"},l("p",null,"Author: ",l("a",{href:"https://github.com/iMasanari"},"iMasanari")),l("small",null,l("a",{href:"https://github.com/iMasanari/imasanari.github.io/"},"> Blog Repository <")))},v=function(t,n,e,o){var r,a=[].map,i=o&&o.children[0]||null,l=i&&function n(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:a.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:n(t)})}}(i),g=[],y=!0,u=w(t),s=function t(o,r,a){for(var n in a)"function"==typeof a[n]?function(t,e){a[t]=function(t){var n=e(t);return"function"==typeof n&&(n=n(d(o,u),a)),n&&n!==(r=d(o,u))&&!n.then&&f(u=p(o,w(r,n),u)),n}}(n,a[n]):t(o.concat(n),r[n]=w(r[n]),a[n]=w(a[n]));return a}([],u,w(n));return f(),s;function b(t){return"function"==typeof t?b(t(u,s)):null!=t?t:""}function c(){r=!r;var t=b(e);for(o&&!r&&(i=function t(n,e,o,r,a){if(r===o);else if(null==o||o.nodeName!==r.nodeName){var i=function t(n,e){var o="string"==typeof n||"number"==typeof n?document.createTextNode(n):(e=e||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName),r=n.attributes;if(r){r.oncreate&&g.push(function(){r.oncreate(o)});for(var a=0;a<n.children.length;a++)o.appendChild(t(n.children[a]=b(n.children[a]),e));for(var i in r)N(o,i,r[i],null,e)}return o}(r,a);n.insertBefore(i,e),null!=o&&T(n,e,o),e=i}else if(null==o.nodeName)e.nodeValue=r;else{!function(t,n,e,o){for(var r in w(n,e))e[r]!==("value"===r||"checked"===r?t[r]:n[r])&&N(t,r,e[r],n[r],o);var a=y?e.oncreate:e.onupdate;a&&g.push(function(){a(t,n)})}(e,o.attributes,r.attributes,a=a||"svg"===r.nodeName);for(var l={},u={},s=[],c=o.children,f=r.children,p=0;p<c.length;p++){s[p]=e.childNodes[p];var d=P(c[p]);null!=d&&(l[d]=[s[p],c[p]])}for(var p=0,v=0;v<f.length;){var d=P(c[p]),h=P(f[v]=b(f[v]));if(u[d])p++;else if(null==h||h!==P(c[p+1]))if(null==h||y)null==d&&(t(e,s[p],c[p],f[v],a),v++),p++;else{var m=l[h]||[];d===h?(t(e,m[0],m[1],f[v],a),p++):m[0]?t(e,e.insertBefore(m[0],s[p]),m[1],f[v],a):t(e,s[p],null,f[v],a),u[h]=f[v],v++}else null==d&&T(e,s[p],c[p]),p++}for(;p<c.length;)null==P(c[p])&&T(e,s[p],c[p]),p++;for(var p in l)u[p]||T(e,l[p][0],l[p][1])}return e}(o,i,l,l=t)),y=!1;g.length;)g.pop()()}function f(){r||(r=!0,setTimeout(c))}function w(t,n){var e={};for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}function p(t,n,e){var o={};return t.length?(o[t[0]]=1<t.length?p(t.slice(1),n,e[t[0]]):n,w(e,o)):n}function d(t,n){for(var e=0;e<t.length;)n=n[t[e++]];return n}function P(t){return t?t.key:null}function v(t){return t.currentTarget.events[t.type](t)}function N(t,n,e,o,r){if("key"===n);else if("style"===n)for(var a in w(o,e)){var i=null==e||null==e[a]?"":e[a];"-"===a[0]?t[n].setProperty(a,i):t[n][a]=i}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),t.events?o||(o=t.events[n]):t.events={},(t.events[n]=e)?o||t.addEventListener(n,v):t.removeEventListener(n,v)):n in t&&"list"!==n&&!r?t[n]=null==e?"":e:null!=e&&!1!==e&&t.setAttribute(n,e),null!=e&&!1!==e||t.removeAttribute(n)}function T(t,n,e){function o(){t.removeChild(function t(n,e){var o=e.attributes;if(o){for(var r=0;r<e.children.length;r++)t(n.childNodes[r],e.children[r]);o.ondestroy&&o.ondestroy(n)}return n}(n,e))}var r=e.attributes&&e.attributes.onremove;r?r(n,o):o()}}({location:t.state,data:window.__data||{}},{location:t.actions,setData:function(n){return function(t){return e({},t,{data:n})}}},function(){return l("div",{class:"App"},l(p,null),l("div",{class:"content"},l(f,null)),l(d,null))},document.body);t.subscribe(v.location);var h=function(t){var n,e,o,r;"pushstate"===t.type&&(n=document.documentElement.scrollTop||document.body.scrollTop,o=(0-n)/(e=10),(r=function(){scrollTo(0,Math.floor(0-o*e)),e--&&requestAnimationFrame(r)})()),window.gtag("config","UA-74494516-4",{page_path:location.pathname});var a=new XMLHttpRequest;a.open("get",location.pathname+"index.json"),a.onload=function(){var t=JSON.parse(a.responseText);document.title=t.title,v.setData(t)},a.send()};addEventListener("pushstate",h),addEventListener("popstate",h)}();
