(this["webpackJsonpmanganyaa-react"]=this["webpackJsonpmanganyaa-react"]||[]).push([[2],{13:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return g})),t.d(n,"c",(function(){return h}));var a=t(10),c=t(18),o=t(0),r=t(3),i={darkmode:function(){return!localStorage.getItem("darkmode")||JSON.parse(localStorage.getItem("darkmode"))},fullscreen:function(){return!!sessionStorage.getItem("fullscreen")&&JSON.parse(sessionStorage.getItem("fullscreen"))},mangaPageWidth:function(){return NaN!==Number(localStorage.getItem("mangaPageWidth"))&&0!==Number(localStorage.getItem("mangaPageWidth"))?Number(localStorage.getItem("mangaPageWidth")):70}},s=t(30),l=t(7),u=t(1),d=Object(o.createContext)(),p=function(e,n,t){var a=t?"https://".concat(t,".manganyaa.com"):l.isMainSite||t?"/".concat(n):"https://manganyaa.com/".concat(n);return{en:"".concat(a,"/read-online-free-english"),es:"".concat(a,"/leer-online-gratis-espanol"),pt:"".concat(a,"/ler-online-gratis-portugues")}[e]},m=function(e,n,t,a,c){var o=t;if(c){var r=a?"https://".concat(a,".manganyaa.com"):l.isMainSite||a?"":"https://manganyaa.com";return(a?{en:"".concat(r,"/read-online-free-english/chapter/").concat(o),es:"".concat(r,"/leer-online-gratis-espanol/capitulo/").concat(o),pt:"".concat(r,"/ler-online-gratis-portugues/capitulo/").concat(o)}:{en:"".concat(r,"/").concat(n,"/read-online-free-english/chapter/").concat(o),es:"".concat(r,"/").concat(n,"/leer-online-gratis-espanol/capitulo/").concat(o),pt:"".concat(r,"/").concat(n,"/ler-online-gratis-portugues/capitulo/").concat(o)})[e]}var i=l.isMainSite?"".concat(n,"/"):"",s=a?"https://".concat(a,".manganyaa.com"):"";return(a?{en:"".concat(s,"/read-online-free-english/chapter/").concat(o),es:"".concat(s,"/leer-online-gratis-espanol/capitulo/").concat(o),pt:"".concat(s,"/ler-online-gratis-portugues/capitulo/").concat(o)}:{en:"".concat(s,"/").concat(i,"read-online-free-english/chapter/").concat(o),es:"".concat(s,"/").concat(i,"leer-online-gratis-espanol/capitulo/").concat(o),pt:"".concat(s,"/").concat(i,"ler-online-gratis-portugues/capitulo/").concat(o)})[e]},g=function(e,n,t,a){for(var o=[],r=function(r){var i=n[r],u=i.folderName;if(!u)return"continue";var d=s.find((function(e){return e.name===i.mangaName}))||{};o.push(Object(c.a)(Object(c.a)({},i),{},{descriptionImg:"".concat(u,"/description/1.jpg"),chLink:t?null:l.isMainSite&&a?p(e,u,d.subdomain):m(e,u,i.orderNumber.toString(),d.subdomain,a),mLink:p(e,u,d.subdomain)}))},i=0;i<n.length;i++)r(i);return o},h=function(e,n,t,a){for(var c={list:[]},o=0;o<t.length;o++){var r=t[o],i=r.orderNumber,s={orderNumber:i,pages:r.pages,url:m(e,n,i.toString())};0===o&&"Completed"!==a||c.list.push(s),o===t.length-1&&(c.first=s),"Completed"!==a?(1===o&&(c.last=s),0===o&&(c.upcoming=s)):0===o&&(c.last=s)}return c},f={en:t(24).eni18nGeneric,es:t(24).esi18nGeneric,pt:t(24).pti18nGeneric};n.b=function(e){var n=e.children,c=l.siteUrl,s=l.isMainSite,p=l.mainSiteUrl,m=Object(r.f)().pathname;t.e(1).then(t.bind(null,144)).then((function(e){return e.pageview(m)}));var g=function(e){var n="en";return e.includes("/es")||e.includes("leer")?n="es":(e.includes("/pt")||e.includes("ler"))&&(n="pt"),n}(m),h=function(e,n){return["/","/".concat(n),"/".concat(n,"/")].includes(e)?"home":e.includes("/popular")?"popular":e.includes("/random")?"random":e.includes("/last")||e.includes("/ultimos")?"last":e.includes("/new")||e.includes("/nuevo")||e.includes("/novo")?"new":e.includes("/genre")||e.includes("/genero")||e.includes("/g\xeanero")?"genre":e.includes("/mangaka")?"mangaka":e.includes("/chapter/")||e.includes("/capitulo/")?"chapter":"serie"}(m,g),b={en:f.en,es:f.es,pt:f.pt},j=Object(o.useState)((function(){return i.darkmode()})),v=Object(a.a)(j,2),O=v[0],x=v[1],w=Object(o.useState)((function(){return i.fullscreen()})),k=Object(a.a)(w,2),S=k[0],I=k[1],y={darkmode:O,fullscreen:S,set:{darkmodeOn:function(){return x(!0)},darkmodeOff:function(){return x(!1)},fullscreenOn:function(){return I(!0)},fullscreenOff:function(){return I(!1)}},siteMetadata:{lang:g,isMainSite:s,mainSiteUrl:p,page:h,homes:{en:s?"/en":"/read-online-free-english",es:s?"/es":"/leer-online-gratis-espanol",pt:s?"/pt":"/ler-online-gratis-portugues"},storage:{origin:"https://content.manganyaa.com",fullPath:"https://content.manganyaa.com/file/mnyaaa/"},currentPath:m,adsEnabled:!1},siteUrl:c,genericTranslations:b[g]};return Object(u.jsx)(d.Provider,{value:y,children:n})}},19:function(e,n,t){"use strict";t(0);var a=t(1);n.a=function(){return Object(a.jsx)("div",{style:{width:"100vw",display:"flex",justifyContent:"center"},children:Object(a.jsx)("div",{className:"loader"})})}},20:function(e,n,t){"use strict";var a=t(10),c=t(0),o=t(13),r=(t(57),t(1));n.a=function(e){var n=e.icon,t=e.name,i=e.children,s=e.click,l=void 0===s?function(){return!1}:s,u=Object(c.useContext)(o.a).genericTranslations,d=Object(c.useState)(!1),p=Object(a.a)(d,2),m=p[0],g=p[1],h=m?"visible":"hidden";return Object(r.jsxs)("div",{className:"nav-container",role:"button",tabIndex:0,"aria-label":u.translate,onClick:function(){if(i)return g(!m);l()},onKeyPress:function(e){13!==e.which&&13!==e.keyCode&&13!==e.code||g(!0)},onBlur:function(){return setTimeout((function(){return g(!1)}),300)},children:[n,i&&Object(r.jsx)("div",{className:"dropdownmenu ".concat(t," ").concat(h," bg100"),children:i})]})}},24:function(e,n,t){"use strict";t.r(n),t.d(n,"eni18nGeneric",(function(){return a})),t.d(n,"esi18nGeneric",(function(){return c})),t.d(n,"pti18nGeneric",(function(){return o}));var a={activate:"Activate",chapter:"Chapter",chap:"Chap",chaptersAvailables:"Chapters Availables",darkmode:"Dark Mode",deactivate:"Deactivate",homepage:"Homepage",lightmode:"Light Mode",filterChapters:"Filter chapters",fullscreen:"Fullscreen",read:"Read",nextChapter:"Next Chapter",prevChapter:"Previous Chapter",settings:"Settings",translate:"Switch language",otherPopularSeries:"Other Popular Series",in:"in",free:"Free"},c={activate:"Activar",chapter:"Capitulo",chap:"Cap",chaptersAvailables:"Capitulos Disponibles",darkmode:"Modo Oscuro",deactivate:"Desactivar",homepage:"Pagina de Inicio",lightmode:"Modo Claro",filterChapters:"Filtrar capitulos",fullscreen:"Pantalla Completa",read:"Leer",nextChapter:"Siguiente Capitulo",prevChapter:"Anterior Capitulo",settings:"Configuracion",translate:"Cambiar lenguaje",otherPopularSeries:"Otras Series Populares",in:"en",free:"Gratis"},o={activate:"Ativar",chapter:"Cap\xedtulo",chap:"Cap",chaptersAvailables:"Cap\xedtulos Dispon\xedveis",darkmode:"Modo Escuro",deactivate:"Desativar",homepage:"Pagina Inicial",lightmode:"Modo Claro",filterChapters:"Filtrar cap\xedtulos",fullscreen:"Tela Completa",read:"Ler",nextChapter:"Pr\xf3ximo Cap\xedtulo",prevChapter:"Cap\xedtulo Anterior",settings:"Configura\xe7\xf5es",translate:"Mudar idioma",otherPopularSeries:"Outras S\xe9ries Populares",in:"em",free:"Gr\xe1tis"}},26:function(e,n,t){"use strict";function a(){var e=document.documentElement;return e.requestFullscreen?(e.requestFullscreen(),!0):e.mozRequestFullScreen?(e.mozRequestFullScreen(),!0):e.webkitRequestFullscreen?(e.webkitRequestFullscreen(),!0):!!e.msRequestFullscreen&&(e.msRequestFullscreen(),!0)}function c(){return document.exitFullscreen?(document.exitFullscreen(),!0):document.mozCancelFullScreen?(document.mozCancelFullScreen(),!0):document.webkitExitFullscreen?(document.webkitExitFullscreen(),!0):!!document.msExitFullscreen&&(document.msExitFullscreen(),!0)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return c}))},29:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(18),c=t(37),o=t(38),r=t(44),i=t(43),s=t(0),l=t(17),u=t(7),d=t(1),p=function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=u.isMainSite,n=this.props.to;return n.includes(".manganyaa")||!e?Object(d.jsx)("a",Object(a.a)({href:n.includes(".com")?n:"".concat(u.mainSiteUrl).concat(n)},this.props)):Object(d.jsx)(l.b,Object(a.a)({},this.props))}}]),t}(s.Component)},30:function(e){e.exports=JSON.parse('[{"name":"Enen no Shouboutai","subdomain":"fireforce"},{"name":"Jujutsu Kaisen","subdomain":"jujutsukaisen"},{"name":"Kanojo Okarishimasu","subdomain":"kanokari"},{"name":"Kimetsu no Yaiba","subdomain":"kny"},{"name":"Maou-jou de Oyasumi","subdomain":"maouoyasumi"},{"name":"Noblesse","subdomain":"noblesse"},{"name":"One Punch-Man","subdomain":"onepunchman"},{"name":"Shingeki no Kyojin","subdomain":"snk"},{"name":"Tonikaku Kawaii","subdomain":"tonikawa"},{"name":"Horimiya","subdomain":"horimiya"},{"name":"Dragon Ball Super","subdomain":"dbsuper"},{"name":"One Piece","subdomain":"onepiece"},{"name":"Solo Leveling","subdomain":"sololeveling"},{"name":"Tensei Shitara Slime Datta Ken","subdomain":"tensura"},{"name":"Ijiranaide, Nagatoro-san","subdomain":"nagatoro"},{"name":"Boku no Hero Academia","subdomain":"bokunohero"}]')},36:function(e){e.exports=JSON.parse('{"en":{"Android":"https://drive.google.com/file/d/1OsNU1rNdJ7UOwLKIsuMhgScWRb66SMk_/view?usp=sharing","Windows":"https://mega.nz/file/CnYEDZxS#k4xH61r5HxVwoHjjBNMsk9qNEZUkilKEjhabKK9lwPA","MacOS":"https://mega.nz/file/6ywQyajJ#gj7Dh1-FudXQjr25JP-nwkwRiQhbQRsGp3uAgiiQhEI","Linux":"https://mega.nz/file/K6IEWZ4C#lScGIX2VUx0BNMLVTv8a6ghI3i8DcU3KpR57-WKiJgs"},"es":{"Android":"https://drive.google.com/file/d/1OsNU1rNdJ7UOwLKIsuMhgScWRb66SMk_/view?usp=sharing","Windows":"https://mega.nz/file/TmQk2LqZ#MBlW06ZBJgD6N7WeyuKoZupecPy6j05xsFeP2JmU-Mw","MacOS":"https://mega.nz/file/7igCwSpR#Qcqu1slNwF5Sq_du7rK8GUYy-e7-jXZtMinhTNA1ZmY","Linux":"https://mega.nz/file/L2QiWDxS#l0xTOYu99apJAvfpgFxNeoZen6qHDavq-GI0UkDNi_k"},"pt":{"Android":"https://drive.google.com/file/d/1OsNU1rNdJ7UOwLKIsuMhgScWRb66SMk_/view?usp=sharing","Windows":"https://mega.nz/file/mmB2VTTS#DSFPI9-mGUwz01-Eq_wvmuNRH7GZozRg8LoXRHr2UTc","MacOS":"https://mega.nz/file/Hn4G2YDT#vhe_6O4MS4gXL0ELNmC1HoOcKjIi5HjeQSto0Ywv8FQ","Linux":"https://mega.nz/file/r7BkkLBR#YD1w1daLe9ZNLMRIrhYmu7N_G90HW6BEiIm_p40ZLDY"}}')},51:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){},60:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(21),r=t.n(o),i=(t(51),t(17)),s=t(3);var l=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(c,o){n().then(c).catch((function(r){setTimeout((function(){if(1===t)return o(r),void window.location.reload();e(n,t-1,a).then(c,o)}),a)}))}))},u=t(13),d=t(10);var p=function(e,n){var t=!1;return function(){t||(e.call(),t=!0,setTimeout((function(){t=!1}),n))}},m=function(){Object(a.useContext)(u.a).siteMetadata.page;var e="scroll-up",n="scroll-down",t=0;Object(a.useEffect)((function(){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var a=[].slice.call(document.querySelectorAll(".undernav")),c=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(document.body.classList.remove(e),document.body.classList.remove(n))}))}));a.forEach((function(e){c.observe(e)}))}function o(){var a=document.body,c=window.pageYOffset;c<=window.innerHeight/2||(c>t&&!a.classList.contains(n)?(a.classList.remove(e),a.classList.add(n)):c<t&&a.classList.contains(n)&&(a.classList.remove(n),a.classList.add(e)),t=c)}window.addEventListener("scroll",window.innerWidth<1200?p(o,250):o)}),[])},g=t(39),h=t.n(g),f=t(35),b=t.n(f),j=t(42),v=t.n(j),O=t(33),x=t.n(O),w=t(34),k=t.n(w),S=t(40),I=t.n(S),y=t(41),C=t.n(y),N=t(26),F=t(36),M=t(20),P=t(29),L=(t(58),t(1)),E=Object(a.lazy)((function(){return t.e(10).then(t.bind(null,148))})),A=function(e){var n=e.children;m();var t=Object(a.useContext)(u.a),c=t.genericTranslations,o=t.darkmode,r=t.fullscreen,s=t.set,l=t.siteMetadata,p=l.lang,g=l.page,f=l.currentPath,j=l.homes,O=(l.mainSiteUrl,Object(a.useState)(!1)),w=Object(d.a)(O,2),S=w[0],y=w[1],A=Object(a.useState)("d"),W=Object(d.a)(A,2),T=W[0],U=W[1];Object(a.useEffect)((function(){o&&"d"!==T?U("d"):o||"l"===T||U("l")}),[o,T]),Object(a.useEffect)((function(){S&&y(!1)}),[f]);var z={MacOS:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coding-dude.com%2Fwp%2Fwp-content%2Fuploads%2F2013%2F09%2Fapple.png&f=1&nofb=1",Linux:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fuploads%2Fthumbnail%2Flinux-penguin-logo-vector-free-11574199918czvodo5n1d.png&f=1&nofb=1",Windows:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Faccessfirefox.org%2Fimages%2Findex_page%2FWindows-10-logo-larger.png&f=1&nofb=1",Android:"https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/OS_Android.png"},D={darkmode:o,fullscreen:r},R=[{name:"darkmode",Icon:x.a,onCallback:function(){return window.localStorage.setItem("darkmode","true")},offCallback:function(){return window.localStorage.setItem("darkmode","false")}},{name:"fullscreen",Icon:k.a,onCallback:N.b,offCallback:N.a}];return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{id:"L",className:"".concat(g," ").concat(T),style:{minHeight:"101vh"},children:[Object(L.jsx)("nav",{className:"navbar bg100",children:S?Object(L.jsx)(a.Suspense,{fallback:Object(L.jsx)("div",{className:"search-loader-container",children:Object(L.jsx)("div",{className:"loader",style:{marginTop:0}})}),children:Object(L.jsx)(E,{setShowSearch:y})}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(P.a,{tabIndex:0,to:"/".concat(p),title:"Home",children:Object(L.jsx)(h.a,{})}),Object(L.jsx)(M.a,{icon:Object(L.jsx)(b.a,{alt:c.translate}),name:"search",click:function(){return y(!S)}}),Object(L.jsx)(M.a,{icon:Object(L.jsx)(I.a,{alt:c.translate}),name:"langs",children:[{code:"en",title:"English Site",text:"English",iconType:"svg"},{code:"es",title:"Sitio Espa\xf1ol",text:"Espa\xf1ol",iconType:"svg"},{code:"pt",title:"Site em Portugu\xeas",text:"Portugu\xeas",iconType:"webp"}].map((function(e){var n=e.code,t=e.title,a=e.text,c=e.iconType;return Object(L.jsxs)(i.b,{className:"option",tabIndex:0,to:j[n],title:t,hrefLang:n,rel:"alternate",children:["webp"===c?Object(L.jsxs)("picture",{children:[Object(L.jsx)("source",{srcSet:"/flags/".concat(n,".webp"),type:"image/webp"}),Object(L.jsx)("source",{srcSet:"/flags/".concat(n,".jpg"),type:"image/jpeg"}),Object(L.jsx)("img",{"data-src":"/flags/".concat(n,".jpg"),src:"",className:"lazy",alt:""})]}):Object(L.jsx)("img",{"data-src":"/flags/".concat(n,".").concat(c),src:"",className:"lazy",alt:"",role:"presentation"}),Object(L.jsx)("span",{children:a})]},t)}))}),Object(L.jsx)(M.a,{icon:Object(L.jsx)(C.a,{alt:"MangaNyaa Apps"}),name:"langs",children:Object.entries(F[p]).map((function(e){var n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(L.jsxs)("a",{className:"option",tabIndex:0,href:a,title:"MangaNyaa ".concat(t," App"),onMouseDown:function(){return window.open(a,"_blank")},target:"_blank",rel:"noopener noreferrer",children:[Object(L.jsx)("img",{src:"",className:"lazy","data-src":z[t],alt:"",role:"presentation"}),Object(L.jsxs)("span",{style:{wordSpacing:50},children:[t," ","App"]})]},a)}))}),Object(L.jsx)(M.a,{icon:Object(L.jsx)(v.a,{alt:c.settings}),name:"settings",children:R.map((function(e){var n=e.name,t=e.Icon,a=e.onCallback,o=e.offCallback,r=function(){D[n]?(s["".concat(n,"Off")](),o()):(s["".concat(n,"On")](),a())};return Object(L.jsxs)("div",{className:"option ".concat(!0===D[n]?"on":"off"),role:"button",tabIndex:0,"aria-label":c[n],onMouseDown:r,onKeyPress:function(e){var n=e.which,t=e.keyCode,a=e.code;return(13===n||13===t||13===a)&&r()},title:D[n]?"".concat(c.deactivate," ").concat(c[n]):"".concat(c.activate," ").concat(c[n]),children:[Object(L.jsx)(t,{alt:!0===D[n]?"".concat(c.deactivate," ").concat(c[n]):"".concat(c.activate," ").concat(c[n])}),Object(L.jsx)("span",{children:c[n]})]},n)}))})]})}),Object(L.jsx)("div",{className:"undernav"}),n]})})},W=t(19),T=(t(60),Object(a.lazy)((function(){return l((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,146))}))}))),U=Object(a.lazy)((function(){return l((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,147))}))})),z=Object(a.lazy)((function(){return l((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,145))}))})),D=Object(a.lazy)((function(){return l((function(){return Promise.all([t.e(0),t.e(6),t.e(5)]).then(t.bind(null,143))}))}));function R(){return t.e(1).then(t.bind(null,144)).then((function(e){return e.initialize("UA-162789689-1")})),Object(L.jsx)(i.a,{children:Object(L.jsx)(u.b,{children:Object(L.jsx)(A,{children:Object(L.jsxs)(s.c,{children:[Object(L.jsx)(s.a,{path:["/popular","/en/popular","/es/popular","/pt/popular","/last","/en/last","/es/ultimos","/pt/ultimos","/new","/en/new","/es/nuevo","/pt/novo","/random","/en/random","/es/random","/pt/random","/en/genre/:genreId","/es/genero/:genreId","/pt/g\xeanero/:genreId","/en/mangaka/:mangakaId","/es/mangaka/:mangakaId","/pt/mangaka/:mangakaId"],children:Object(L.jsx)(a.Suspense,{fallback:Object(L.jsx)(W.a,{}),children:Object(L.jsx)(U,{})})}),Object(L.jsx)(s.a,{path:["/en","/en/","/es","/es/","/pt","/pt/"],children:Object(L.jsx)(a.Suspense,{fallback:Object(L.jsx)(W.a,{}),children:Object(L.jsx)(T,{})})}),Object(L.jsx)(s.a,{path:["/:mangaId/chapter/:chId","/:mangaId/chapter/:chId/","/:mangaId/read-online-free-english/chapter/:chId","/:mangaId/read-online-free-english/chapter/:chId/","/:mangaId/leer-online-gratis-espanol/capitulo/:chId","/:mangaId/leer-online-gratis-espanol/capitulo/:chId/","/:mangaId/ler-online-gratis-portugues/capitulo/:chId","/:mangaId/ler-online-gratis-portugues/capitulo/:chId/"],children:Object(L.jsx)(a.Suspense,{fallback:Object(L.jsx)(W.a,{}),children:Object(L.jsx)(D,{})})}),Object(L.jsx)(s.a,{path:["/:mangaId","/:mangaId/","/:mangaId/read-online-free-english","/:mangaId/read-online-free-english/","/:mangaId/leer-online-gratis-espanol","/:mangaId/leer-online-gratis-espanol/","/:mangaId/ler-online-gratis-portugues","/:mangaId/ler-online-gratis-portugues/"],children:Object(L.jsx)(a.Suspense,{fallback:Object(L.jsx)(W.a,{}),children:Object(L.jsx)(z,{})})}),Object(L.jsx)(s.a,{path:"/",children:Object(L.jsx)(a.Suspense,{fallback:Object(L.jsx)(W.a,{}),children:Object(L.jsx)(T,{})})})]})})})})}var K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=function(e){e&&e instanceof Function&&t.e(11).then(t.bind(null,142)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");K?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(n,e)}))}}(),q(console.log)},7:function(e){e.exports=JSON.parse('{"siteUrl":"https://manganyaa.com","isMainSite":true,"mainSiteUrl":"https://manganyaa.com"}')}},[[62,3,4]]]);