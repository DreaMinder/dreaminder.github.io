!function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],h=0,f=[];h<s.length;h++)i=s[h],o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/_nuxt/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([182,1]),n()}({138:function(t,e,n){"use strict";var r=n(33);n.n(r).a},140:function(t,e,n){"use strict";var r=n(34);n.n(r).a},142:function(t,e,n){"use strict";var r=n(35);n.n(r).a},144:function(t,e,n){},146:function(t,e,n){},148:function(t,e,n){},150:function(t,e,n){},152:function(t,e,n){"use strict";var r=n(36);n.n(r).a},154:function(t,e,n){"use strict";var r=n(37);n.n(r).a},156:function(t,e,n){"use strict";var r=n(38);n.n(r).a},180:function(t,e,n){"use strict";var r=n(39);n.n(r).a},182:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n.n(r),a=n(2),i=n.n(a),s=n(1),u=n.n(s),c=n(17),l=n.n(c),h=n(6),f=n.n(h),p=n(18),d=n.n(p),m=n(13),v=n.n(m),x=n(0),g={},y=n(79),w=n.n(y),_=n(22),b=n.n(_),C=(n(178),n(87)),$=n.n(C),k=n(56),E=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home"},[this._m(0)],1)};E._withStripped=!0;var R=n(80),S=n.n(R),T=(n(136),n(81)),A=n.n(T),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"domains",style:{width:t.domainsWidth+"px",columnWidth:t.columnWidth-20+"px"}},t._l(t.domains,function(e){return n("li",{key:e},[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.$modal.show("feedback")}}},[t._v("novichkam.info")])])})),t._v(" "),t._l(t.images,function(t,e){return n("div",{key:t,staticClass:"background"},[n("img",{attrs:{src:t}})])}),t._v(" "),n("div",{staticClass:"marker background"})],2)};j._withStripped=!0;var q={props:["domains","pics"],data:function(){return{settings:{useBothWheelAxes:!0,maxScrollbarLength:60},height:window.innerHeight}},computed:{images:function(){return this.pics.slice(0,Math.ceil(this.columnsCount/3))},domainsWidth:function(){return this.columnsCount*this.columnWidth},columnsCount:function(){return Math.round(this.domains/parseInt((this.height-200-50)/62))},columnWidth:function(){return parseInt(1.77*this.height/3)}},methods:{buy:function(){this.$store.commit("ADD_PRODUCT",{product:this.product._id}),this.$modal.show("cart")},handleResize:function(){this.height=window.innerHeight}},created:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},D=(n(138),n(3)),O=Object(D.a)(q,j,[],!1,null,"29ffe176",null).exports,M={components:{Ps:S.a,domains:O},data:function(){return{settings:{useBothWheelAxes:!0,maxScrollbarLength:60},domains:60,pics:["https://placeimg.com/1920/1080/tech/grayscale","https://placeimg.com/1920/1080/tech","https://placekitten.com/1920/1080?image=2","https://placebear.com/1920/1080?image=2"]}},mounted:function(){this.$nextTick(function(){A.a.scrollTo(".marker",5e4,{container:".scroll-area",easing:"ease-out",offset:-400,cancelable:!0,x:!0,y:!1})})}},L=(n(140),Object(D.a)(M,E,[function(){var t=this.$createElement,e=this._self._c||t;return e("Ps",{staticClass:"scroll-area",attrs:{settings:this.settings}},[e("domains",{attrs:{domains:this.domains,pics:this.pics}})],1)}],!1,null,"3dd538d0",null).exports);x.a.use(k.a),window.history.scrollRestoration="manual";var N=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new i.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var P={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}},I={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};U.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var h={};z.forEach(function(t){"function"==typeof c[t]&&(h[t]=c[t].bind(a))});var f=h.beforeEnter;h.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(a,t)};var p=[t("router-view",r)];return void 0!==o.keepAlive&&(p=[t("keep-alive",p)]),t("transition",{props:l,on:h},p)}},U=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],z=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],H={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},W=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"error"},[e("h1",[this._v(this._s(this.error.statusCode))]),this._v(" "),e("p",[this._v("\n      "+this._s(this.error.message)+"\n   ")])])};W._withStripped=!0;var B={props:["error"]},F=(n(180),Object(D.a)(B,W,[],!1,null,"dd9b823c",null).exports),K=function(){return{}};function Q(t,e){var n=t.options.data||K;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function J(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function V(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return d()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function X(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return d()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function Y(t){var e=this;return i.a.all(X(t,function(){var t=f()(u.a.mark(function t(n,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",o.components[a]=J(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var G=function(){var t=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y(e);case 2:return t.abrupt("return",b()({},e,{meta:V(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),Z=function(){var t=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=ct(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,G(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,G(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function tt(t,e){var n=void 0;return(n=2===t.length?new i.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof i.a||"function"==typeof n.then)||(n=i.a.resolve(n)),n}function et(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function nt(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?at:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var h,f=a[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+l()(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(h=s(f[p]),!e[u].test(h))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+l()(h)+"`");o+=(0===p?c.prefix:c.delimiter)+h}}else{if(h=c.asterisk?it(f):s(f),!e[u].test(h))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+h+'"');o+=c.prefix+h}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=ot.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var h=t[a],f=n[2],p=n[3],d=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var g=null!=f&&null!=h&&h!==f,y="+"===v||"*"===v,w="?"===v||"*"===v,_=n[2]||s,b=d||m;r.push({name:p||o++,prefix:f||"",delimiter:_,optional:w,repeat:y,partial:g,asterisk:!!x,pattern:b?ut(b):x?".*":"[^"+st(_)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function rt(t,e){var n={},r=b()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}var ot=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function at(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function it(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function st(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function ut(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function ct(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),a=(n?n+"://":"//")+o.shift(),i=o.filter(Boolean).join("/"),s=void 0;return 2===(o=i.split("#")).length&&(i=o[0],s=o[1]),a+=i?"/"+i:"",e&&"{}"!==l()(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return d()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=s?"#"+s:""}var lt={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){x.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||nt(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:I,NuxtError:F}},ht=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};ht._withStripped=!0;var ft={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#333",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,x.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},pt=(n(142),Object(D.a)(ft,ht,[],!1,null,null,null).exports),dt=(n(144),n(146),n(148),n(150),function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"transparent",attrs:{id:"wrap"}},[e("page-header"),this._v(" "),e("div",{attrs:{id:"content"}},[e("nuxt")],1),this._v(" "),e("page-footer")],1)});dt._withStripped=!0;var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",{attrs:{id:"menu"}},[n("ul",[n("li",[n("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.$modal.show("search")}}},[n("span",{staticClass:"icon-search",attrs:{title:"Search"}})])])])])])};mt._withStripped=!0;n(152);var vt=Object(D.a)({},mt,[],!1,null,null,null).exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._m(0),t._v(" "),n("nav",{staticClass:"footer-menu"},[n("ul",[n("li",[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.$modal.show("feedback")}}},[t._v("Feedback")])])])]),t._v(" "),n("modal",{attrs:{name:"feedback",adaptive:!0,reset:!0,scrollable:!0,pivotY:.14,height:"auto",width:"600px"}},[n("feedback")],1)],1)};xt._withStripped=!0;var gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feedback"},[n("button",{staticClass:"close",on:{click:function(e){t.$modal.hide("feedback")}}},[n("span",{staticClass:"icon-cross97"})]),t._v(" "),t.success?n("form",{staticClass:"form"},[n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],class:{error:"name"===t.error},attrs:{placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{error:"email"===t.error},attrs:{placeholder:"Email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"row"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{rows:"8",placeholder:"Message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.error?n("section",{staticClass:"error-message"},[t.error.length>30?n("div",{staticClass:"error-msg"},[t._v("\n              "+t._s(t.error)+"\n            ")]):n("div",{staticClass:"error-msg"},[t._v("\n              "+t._s("error-"+t.error)+"\n            ")])]):t._e()]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"label"}),t._v(" "),n("div",{staticClass:"field"},[n("input",{staticClass:"btn",attrs:{type:"submit",value:"Send"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}}),t._v(" "),t.loading?n("div",{staticClass:"loader"},[n("spinner")],1):t._e()])])],1):n("h3",[t._v("\n      "+t._s("Feedback")+"\n    ")])])};gt._withStripped=!0;var yt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader loader--style1",attrs:{title:"0"}},[e("svg",{attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"}},[e("path",{attrs:{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}}),this._v(" "),e("path",{attrs:{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n    C22.32,8.481,24.301,9.057,26.013,10.047z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}})],1)])])};yt._withStripped=!0;for(var wt={components:{spinner:Object(D.a)({},yt,[],!1,null,null,null).exports},data:function(){return{loading:!1,success:null,error:null,name:null,email:null,message:null}},methods:{submit:function(){var t=f()(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,this.validate(),e={message:this.message,name:this.name,email:this.email},t.next=6,this.$axios.$post("/form/feedback_form",e);case 6:t.sent,this.success=!0,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),this.error=t.t0.message;case 14:this.loading=!1;case 15:case"end":return t.stop()}},t,this,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),validate:function(){if(!this.name)throw new Error("name");if(!this.email)throw new Error("email");if(!this.message)throw new Error("message")}}},_t=(n(154),{components:{feedback:Object(D.a)(wt,gt,[],!1,null,"9ad0bb68",null).exports}}),bt=(n(156),{components:{pageHeader:vt,pageFooter:Object(D.a)(_t,xt,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"social_icons"}},[e("a",{staticClass:"icon-uniE603",attrs:{href:"//instagram.com/odesd2",target:"_blank",rel:"nofollow"}},[this._v(" ")]),this._v(" "),e("a",{staticClass:"icon-uniE606",attrs:{href:"//twitter.com/odesd2",target:"_blank",rel:"nofollow"}},[this._v(" ")]),this._v(" "),e("a",{staticClass:"icon-uniE602",attrs:{href:"//facebook.com/odesd2",target:"_blank",rel:"nofollow"}},[this._v(" ")])])}],!1,null,null,null).exports}}),Ct={_default:Object(D.a)(bt,dt,[],!1,null,null,null).exports},$t={head:{title:"Demo",titleTemplate:"%s :: Domains",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}],link:[{rel:"icon",type:"image/png",href:"/favicon.png"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){x.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){x.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&Ct["_"+t]||(t="default"),this.layoutName=t,this.layout=Ct["_"+t],this.layout},loadLayout:function(t){return t&&Ct["_"+t]||(t="default"),i.a.resolve(Ct["_"+t])}},components:{NuxtLoading:pt}},kt=n(82),Et=n.n(kt),Rt=n(83),St=n.n(Rt),Tt={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,a=void 0;try{for(var i,s=Et()(Array.isArray(n)?n:[n]);!(r=(i=s.next()).done);r=!0){var u=i.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||i.a.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||i.a.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},At=function(t){Tt["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},jt=["request","delete","get","head","options","post","put","patch"],qt=0;qt<jt.length;qt++){At(jt[qt])}var Dt=function(t,e){var n={baseURL:"http://localhost:3020/api/site",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?v()({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host;var r=St.a.create(n);!function(t){for(var e in Tt)t[e]=Tt[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var a=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=a,t.defaults.onDownloadProgress=a}(r),t.$axios=r,e("axios",r)},Ot=n(85),Mt=n.n(Ot);x.a.use(Mt.a);var Lt=n(86),Nt=n.n(Lt);x.a.use(Nt.a,{observer:!0});var Pt=n(84),It=n.n(Pt);x.a.use(It.a);var Ut=function(){var t=f()(u.a.mark(function t(e){var n,r,o,a,i,s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new k.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:N,routes:[{path:"/",component:function(){return L.default||L},name:"index"}],fallback:!1});case 2:return n=t.sent,r=b()({router:n,nuxt:{defaultTransition:zt,transitions:[zt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?v()({},zt,{name:t}):v()({},zt,t):zt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},$t),o=e?e.next:function(t){return r.router.push(t)},a=void 0,e?a=n.resolve(e.url).route:(i=et(n.options.base),a=n.resolve(i).route),t.next=9,Z(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 9:return s=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";x.a[n]||(x.a[n]=!0,x.a.use(function(){x.a.prototype.hasOwnProperty(t)||w()(x.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},t.next=13,Dt(r.context,s);case 13:t.next=16;break;case 16:0,t.next=20;break;case 20:t.next=23;break;case 23:t.next=26;break;case 26:return t.abrupt("return",{app:r,router:n});case 27:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();x.a.component(P.name,P),x.a.component(I.name,I),x.a.component(H.name,H),x.a.component(lt.name,lt),x.a.use($.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var zt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"},Ht=function(){var t=f()(u.a.mark(function t(e,n,r){var o,a,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Kt.nuxt.err||n.path!==e.path,this._queryChanged=l()(e.query)!==l()(n.query),this._diffQuery=this._queryChanged?rt(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Y(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),Wt=function(){var t=f()(u.a.mark(function t(e,n,r){var o,a,s,c,l,h,f,p,d,m=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Ft=e===n?[]:V(n,o=[]).map(function(t,e){return nt(n.matched[o[e]].path)(n.params)}),a=!1,s=function(t){n.path===t.path&&m.$loading.finish&&m.$loading.finish(),n.path!==t.path&&m.$loading.pause&&m.$loading.pause(),a||(a=!0,r(t))},t.next=7,Z(Kt,{route:e,from:n,next:s.bind(this)});case 7:if(this._dateLastError=Kt.nuxt.dateErr,this._hadError=!!Kt.nuxt.err,(l=V(e,c=[])).length){t.next=25;break}return t.next=14,Zt.call(this,l,Kt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof F.layout?F.layout(Kt.context):F.layout);case 18:return h=t.sent,t.next=21,Zt.call(this,l,Kt.context,h);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return Kt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return l.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Xt(l,e,n)),t.prev=27,t.next=30,Zt.call(this,l,Kt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!Kt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=l[0].options.layout)&&(f=f(Kt.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,Zt.call(this,l,Kt.context,f);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!Kt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:if(p=!0,l.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate(Kt.context))}),p){t.next=50;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 50:return t.next=52,i.a.all(l.map(function(t,n){if(t._path=nt(e.matched[c[n]].path)(e.params),t._dataRefresh=!1,m._pathChanged&&t._path!==Ft[n])t._dataRefresh=!0;else if(!m._pathChanged&&m._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return m._diffQuery[t]}))}if(!m._hadError&&m._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=a&&s?30:45;if(a){var l=tt(t.options.asyncData,Kt.context).then(function(e){Q(t,e),m.$loading.increase&&m.$loading.increase(u)});o.push(l)}if(s){var h=t.options.fetch(Kt.context);h&&(h instanceof i.a||"function"==typeof h.then)||(h=i.a.resolve(h)),h.then(function(t){m.$loading.increase&&m.$loading.increase(u)}),o.push(h)}return i.a.all(o)}));case 52:a||(this.$loading.finish&&this.$loading.finish(),r()),t.next=67;break;case 55:return t.prev=55,t.t0=t.catch(27),t.t0||(t.t0={}),Ft=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(d=F.layout)&&(d=d(Kt.context)),t.next=64,this.loadLayout(d);case 64:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 67:case"end":return t.stop()}},t,this,[[27,55]])}));return function(e,n,r){return t.apply(this,arguments)}}(),Bt=function(){var t=f()(u.a.mark(function t(e){var n,r,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Kt=e.app,Qt=e.router,t.next=4,i.a.all(Gt(Qt));case 4:if(n=t.sent,r=new x.a(Kt),o=function(){r.$mount("#__nuxt"),x.a.nextTick(function(){re(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Xt(n,Qt.currentRoute)),Ft=Qt.currentRoute.matched.map(function(t){return nt(t.path)(Qt.currentRoute.params)})),r.$loading={},Jt.error&&r.error(Jt.error),Qt.beforeEach(Ht.bind(r)),Qt.beforeEach(Wt.bind(r)),Qt.afterEach(te),Qt.afterEach(ne.bind(r)),!Jt.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:Wt.call(r,Qt.currentRoute,Qt.currentRoute,function(t){if(!t)return te(Qt.currentRoute,Qt.currentRoute),ee.call(r,Qt.currentRoute),void o();Qt.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 19:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),Ft=[],Kt=void 0,Qt=void 0,Jt=window.__NUXT__||{},Vt=x.a.config.errorHandler;function Xt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=v()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);d()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Yt(t,e){return Jt.serverRendered&&e&&Q(t,e),t._Ctor=t,t}function Gt(t){var e=this,n=et(t.options.base,t.options.mode);return X(t.match(n),function(){var t=f()(u.a.mark(function t(n,r,o,a,i){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=Yt(J(n),Jt.data?Jt.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())}function Zt(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?i.a.resolve():tt(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function te(t,e){X(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=x.a.extend(t))._Ctor=t,n.components[r]=t),t})}function ee(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?F.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Kt.context)),this.setLayout(e)}function ne(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||x.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return d()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=V(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)x.a.set(t.$data,r,n[r])}}),ee.call(n,t)})}function re(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Qt.afterEach(function(e,n){x.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}x.a.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()},o=null;return"function"==typeof Vt&&(o=Vt.apply(void 0,arguments)),!0===o?o:(e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error&&"render function"!==n&&e.$root.$nuxt.error(r),"function"==typeof Vt?o:void console.error(t.message||r.message))},Ut().then(Bt).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){}});