(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"af7a784e","chunk-e8f5e4a6":"1d829020","chunk-2d0af48a":"c514bf00","chunk-1ba2426e":"afc12501","chunk-3e6ba178":"6cdad4fc","chunk-41daa301":"17bc837e","chunk-461b6100":"bcd034a0"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-1ba2426e":1,"chunk-3e6ba178":1,"chunk-41daa301":1,"chunk-461b6100":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"c8674e5c","chunk-e8f5e4a6":"31d6cfe0","chunk-2d0af48a":"31d6cfe0","chunk-1ba2426e":"fec43230","chunk-3e6ba178":"9f3aa35f","chunk-41daa301":"87215f58","chunk-461b6100":"c65a25f0"}[e]+".css",r=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete i[e],h.parentNode.removeChild(h),n(o)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){i[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=o);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),l=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[e]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b9b":function(e,t,n){},"1f80":function(e,t,n){"use strict";var a=n("a538"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{lightMode:e.isLightMode,darkMode:e.isDarkMode},attrs:{id:"app"},on:{click:e.hideNav}},[n("transition",{attrs:{name:"preloader"}},[e.loading?n("pre-loader",{attrs:{id:"preloader"}}):e._e()],1),n("div",{staticClass:"main-header"},[n("div",{staticClass:"header-wrapper"},[n("router-link",{staticClass:"branding",attrs:{to:"/"}},[n("site-branding")],1),n("transition",{attrs:{name:"slide",mode:"out-in",appear:""}},["blog"===e.$route.name?n("input",{directives:[{name:"model",rawName:"v-model",value:e.blogSearch,expression:"blogSearch"}],staticClass:"blog-search",attrs:{type:"text",name:"blog-search",placeholder:"Search"},domProps:{value:e.blogSearch},on:{input:function(t){t.target.composing||(e.blogSearch=t.target.value)}}}):e._e()]),n("div",{staticClass:"nav-show",on:{click:function(t){e.closeNav=!e.closeNav}}},[n("svg",{attrs:{viewBox:"0 0 62 60",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M62 3.5H0V0.5H62V3.5ZM62 59.5H0V56.5H62V59.5ZM0 31.5H62V28.5H0V31.5Z"}})])]),n("div",{staticClass:"nav",class:{"hide-nav":e.closeNav}},[n("div",{staticClass:"nav-wrapper"},[n("router-link",{attrs:{"active-class":"active",to:"/about"}},[e._v("about")]),n("router-link",{attrs:{"active-class":"active",to:"/design"}},[e._v("design")]),n("router-link",{attrs:{"active-class":"active",to:"/blog"}},[e._v("blog")])],1),n("div",{staticClass:"nav-close",on:{click:function(t){e.closeNav=!0}}},[n("div",[n("svg",{staticClass:"nav-close-btn",attrs:{viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.8787 33L0.939331 3.06065L3.06065 0.939331L33 30.8787L62.9393 0.939331L65.0607 3.06065L35.1213 33L65.0607 62.9393L62.9393 65.0607L33 35.1213L3.06065 65.0607L0.939331 62.9393L30.8787 33Z"}})])])])])],1)]),e._m(0),n("div",{staticClass:"main-content"},[n("transition",{attrs:{name:"router-anim",mode:"out-in",appear:""}},[n("router-view",{staticClass:"content",attrs:{"blog-search":e.blogSearch},on:{fetchRoute:e.routeFetched}})],1)],1),n("main-footer")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line-wrapper"},[n("div",{staticClass:"v-line line-1"}),n("div",{staticClass:"v-line line-2"})])}],o=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preloader-wrapper"},[n("transition",{attrs:{name:"fade-preloader",appear:""}},[n("div",{staticClass:"preloader"},[n("div",{staticClass:"spinner"})])])],1)}),s=[],c=(n("e287"),n("2877")),l={},u=Object(c["a"])(l,o,s,!1,null,"369b3727",null);u.options.__file="PreLoader.vue";var d=u.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("MILES LEMON")])])}],v=(n("ad79"),{}),p=Object(c["a"])(v,h,f,!1,null,"0380935f",null);p.options.__file="SiteBranding.vue";var m=p.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-footer"},[n("div",{staticClass:"footer-wrapper"},[n("social-media"),n("p",[e._v("© "+e._s((new Date).getFullYear())+" MILES LEMON")])],1)])},b=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-media-wrapper"},[n("a",{staticClass:"github social-media-icon",attrs:{href:"https://www.github.com/mileslemon",target:"_blank",rel:"noopener noreferrer"}},[n("svg",{attrs:{width:"19px",height:"19px",viewBox:"0 0 19 19",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M3.2007849,2.89085788 C4.96865088,1.0694202 7.09809387,0.158715021 9.58917776,0.158715021 C12.0802616,0.158715021 14.2030083,1.06272384 15.9574813,2.87076859 C17.7119543,4.67881335 18.5891778,6.85513087 18.5891778,9.39978645 C18.5891778,11.4087251 18.0132907,13.2167427 16.8614992,14.8238936 C15.7097077,16.4310445 14.2365082,17.5426405 12.4418563,18.158715 L12.281142,18.158715 C11.9597118,18.158715 11.7989992,17.9980024 11.7989992,17.6765722 C11.7989992,17.6497863 11.8056955,17.3484501 11.8190884,16.7725543 C11.8324813,16.1966586 11.8391778,15.667646 11.8391778,15.1855007 C11.8391778,14.4087111 11.6248941,13.8328241 11.1963206,13.4578222 C12.4284697,13.2971071 13.4262275,12.9020218 14.1896241,12.2725543 C14.9530209,11.6430868 15.3347135,10.5247945 15.3347135,8.91764359 C15.3347135,7.95335305 15.0266808,7.12300422 14.4106063,6.42657216 C14.6784648,5.64978257 14.6516794,4.83282645 14.3302492,3.97567931 L14.1293563,3.97567931 C13.5132818,3.97567931 12.7498966,4.29710466 11.8391778,4.93996502 C11.0623882,4.72567823 10.3123956,4.61853645 9.58917776,4.61853645 C8.86595985,4.61853645 8.11596736,4.72567823 7.33917776,4.93996502 C6.42845891,4.29710466 5.6650737,3.97567931 5.04899919,3.97567931 L4.84810633,3.97567931 C4.52667615,4.83282645 4.4998907,5.64978257 4.76774919,6.42657216 C4.15167467,7.12300422 3.84364204,7.95335305 3.84364204,8.91764359 C3.84364204,10.5247945 4.2186383,11.6430868 4.96864204,12.2725543 C5.71864579,12.9020218 6.70970731,13.2971071 7.94185633,13.4578222 C7.64721199,13.7524665 7.45971387,14.167641 7.37935633,14.7033579 C7.05792615,14.864073 6.70971534,14.9444293 6.33471347,14.9444293 C5.66506727,14.9444293 5.14275105,14.6096112 4.76774919,13.939965 C4.41953316,13.3506764 3.95078785,13.029251 3.36149919,12.9756793 C2.79899637,12.9756793 2.78560365,13.1631774 3.32132061,13.5381793 C3.72310833,13.7524661 4.05792642,14.2078187 4.3257849,14.9042507 C4.35257074,15.0113941 4.40614164,15.138625 4.48649919,15.2859471 C4.56685673,15.4332693 4.78783666,15.6274638 5.14944561,15.8685364 C5.51105457,16.1096091 5.94631807,16.2301436 6.45524919,16.2301436 C6.83025105,16.2301436 7.12489097,16.2033582 7.33917776,16.1497864 L7.33917776,17.7167507 C7.33917776,18.0113951 7.1918578,18.158715 6.89721347,18.158715 L6.73649919,18.158715 C4.9150615,17.5426405 3.43516559,16.4377409 2.29676704,14.8439828 C1.15836849,13.2502249 0.589177755,11.435511 0.589177755,9.39978645 C0.589177755,6.85513087 1.45970476,4.68550971 3.2007849,2.89085788 Z",id:"ion-social-github---Ionicons"}})])])]),n("a",{staticClass:"linkedin social-media-icon",attrs:{href:"https://www.linkedin.com/in/mileslemon/",target:"_blank",rel:"noopener noreferrer"}},[n("svg",{attrs:{width:"18px",height:"18px",viewBox:"0 0 18 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M16.0573112,0.658715021 C16.4409936,0.658715021 16.7656432,0.784147795 17.0312695,1.0350171 C17.2968958,1.28588641 17.429707,1.60315755 17.429707,1.98684002 L17.429707,16.1977775 C17.429707,16.58146 17.2968958,16.9208663 17.0312695,17.2160067 C16.7656432,17.5111471 16.4409936,17.658715 16.0573112,17.658715 L1.89064455,17.658715 C1.50696207,17.658715 1.16755575,17.5111471 0.872415382,17.2160067 C0.577275016,16.9208663 0.429707046,16.58146 0.429707046,16.1977775 L0.429707046,1.98684002 C0.429707046,1.60315755 0.569896617,1.28588641 0.850279965,1.0350171 C1.13066331,0.784147795 1.47744803,0.658715021 1.89064455,0.658715021 L16.0573112,0.658715021 Z M5.6979362,14.8253817 L5.6979362,7.25506919 L3.26304038,7.25506919 L3.26304038,14.8253817 L5.6979362,14.8253817 Z M3.61720704,5.74986085 C3.85331933,5.98597314 4.16321206,6.10402752 4.54689454,6.10402752 C4.93057701,6.10402752 5.24784814,5.97859474 5.49871745,5.72772544 C5.74958676,5.47685613 5.87501953,5.17434179 5.87501953,4.82017335 C5.87501953,4.43649088 5.75696515,4.11921974 5.52085287,3.86835044 C5.28474057,3.61748113 4.97484784,3.49204835 4.59116537,3.49204835 C4.2074829,3.49204835 3.89021176,3.61748113 3.63934246,3.86835044 C3.38847314,4.11921974 3.26304038,4.43649088 3.26304038,4.82017335 C3.26304038,5.17434179 3.38109474,5.48423453 3.61720704,5.74986085 Z M14.5963737,14.8253817 L14.5963737,10.3982984 C14.5963737,9.30627901 14.3381298,8.47989838 13.8216341,7.91913169 C13.3051385,7.358365 12.6337042,7.07798585 11.8073112,7.07798585 C10.9218901,7.07798585 10.1840502,7.49117617 9.59376952,8.31756919 L9.59376952,7.25506919 L7.1588737,7.25506919 L7.1588737,14.8253817 L9.59376952,14.8253817 L9.59376952,10.5311109 C9.59376952,10.2359705 9.62328311,10.0293753 9.68231119,9.91131919 C9.91842348,9.32103846 10.3316138,9.02590252 10.9218946,9.02590252 C11.7482876,9.02590252 12.1614779,9.57190401 12.1614779,10.6639234 L12.1614779,14.8253817 L14.5963737,14.8253817 Z",id:"ion-social-linkedin---Ionicons"}})])])])])},w=[],k=(n("b2fd"),{}),L=Object(c["a"])(k,C,w,!1,null,"6b639940",null);L.options.__file="SocialMedia.vue";var _=L.exports,x={components:{SocialMedia:_}},M=x,y=(n("1f80"),Object(c["a"])(M,g,b,!1,null,"7c629024",null));y.options.__file="MainFooter.vue";var N=y.exports,E={data:function(){return{loading:!0,isLightMode:!1,isDarkMode:!0,closeNav:!0,blogSearch:""}},components:{PreLoader:d,SiteBranding:m,MainFooter:N},methods:{checkNav:function(){var e=window.matchMedia("(min-width: 560px)");e.matches&&!0===this.closeNav?this.closeNav=!1:e.matches||!1!==this.closeNav||(this.closeNav=!0)},hideNav:function(e){var t=window.matchMedia("(max-width: 560px)"),n=document.querySelector(".nav-show");!1===this.closeNav&&e.target!==n&&t.matches&&(this.closeNav=!0)}},watch:{$route:function(e,t){var n=window.matchMedia("(max-width: 560px)");n.matches&&!1===this.closeNav&&(this.closeNav=!0),"design"===e.name||"designItem"===e.name?(this.isLightMode=!0,this.isDarkMode=!1):"design"!==t.name&&"designItem"!==t.name||(this.isLightMode=!1,this.isDarkMode=!0)}},created:function(){var e=this;window.addEventListener("load",function(){e.loading=!1})},mounted:function(){var e=this,t=document.querySelector(".nav");t.addEventListener("click",function(e){e.stopPropagation()}),this.checkNav(),window.addEventListener("resize",function(){e.checkNav()})}},S=E,P=(n("5c0b"),Object(c["a"])(S,i,r,!1,null,null,null));P.options.__file="App.vue";var O=P.exports,j=n("8c4f"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("transition",{attrs:{name:"circle-anim",appear:""}},[n("div",{staticClass:"c-line-wrapper"},[n("div",{staticClass:"c-line",style:{width:e.circleWidth},attrs:{id:"c-line"}})])]),n("div",{staticClass:"intro-text"},[n("transition",{attrs:{name:"slide-fade",appear:"",mode:"out-in"}},[n("div",[n("h1",{staticClass:"home-title"},[e._v("Miles Lemon. "),n("br"),e._v("Front-end web developer and designer based in London.")])])])],1)],1)},B=[],T={name:"home",data:function(){return{circleWidth:0}},mounted:function(){var e=this;this.getCircleWidth(),window.addEventListener("resize",function(){e.getCircleWidth()})},methods:{getCircleWidth:function(){if("home"===this.$route.name){var e=document.getElementById("c-line");this.circleWidth=window.getComputedStyle(e).height}}}},Z=T,I=(n("ee73"),Object(c["a"])(Z,$,B,!1,null,"2693af8c",null));I.options.__file="Home.vue";var H=I.exports;a["a"].use(j["a"]);var V=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/design",name:"design",component:function(){return Promise.all([n.e("chunk-e8f5e4a6"),n.e("chunk-41daa301")]).then(n.bind(null,"0b64"))}},{path:"/design/:slug",name:"designItem",component:function(){return Promise.all([n.e("chunk-e8f5e4a6"),n.e("chunk-2d0af48a"),n.e("chunk-1ba2426e")]).then(n.bind(null,"2bc0"))}},{path:"/blog",name:"blog",component:function(){return Promise.all([n.e("chunk-e8f5e4a6"),n.e("chunk-461b6100")]).then(n.bind(null,"fd3f"))}},{name:"post",path:"/blog/:slug",component:function(){return Promise.all([n.e("chunk-e8f5e4a6"),n.e("chunk-2d0af48a"),n.e("chunk-3e6ba178")]).then(n.bind(null,"ad48"))}}]}),W=(n("f5df"),n("ee53")),A=(n("683e"),n("283e")),D=n.n(A);a["a"].use(W["a"]),a["a"].use(D.a),a["a"].config.productionTip=!1,new a["a"]({router:V,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(e,t,n){},"8d7b":function(e,t,n){},a538:function(e,t,n){},ad79:function(e,t,n){"use strict";var a=n("bdd9"),i=n.n(a);i.a},b2fd:function(e,t,n){"use strict";var a=n("0b9b"),i=n.n(a);i.a},bdd9:function(e,t,n){},d955:function(e,t,n){},e287:function(e,t,n){"use strict";var a=n("d955"),i=n.n(a);i.a},ee73:function(e,t,n){"use strict";var a=n("8d7b"),i=n.n(a);i.a}});
//# sourceMappingURL=app.fb392201.js.map