(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],p=0,s=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-canvas-hashing-demo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1066:function(e,t,n){"use strict";n("4953")},4953:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function c(e,t,n,c,o,u){var i=Object(r["l"])("LazyImage");return Object(r["g"])(),Object(r["c"])("div",a,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(e.list,(function(e,t){return Object(r["g"])(),Object(r["c"])("div",{key:t,class:"image"},[Object(r["d"])(i,{width:200+t,height:200+t,url:"https://picsum.photos/".concat(200+t),placeholder:"LEHV6nWB2yk8pyo0adR*.7kCMdnj",alt:"image"},null,8,["width","height","url"])])})),128))])}n("cb29");var o=Object(r["p"])("data-v-1c11bf8e");Object(r["i"])("data-v-1c11bf8e");var u={class:"image-container"};Object(r["h"])();var i=o((function(e,t,n,a,c,o){return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["o"])(Object(r["d"])("div",u,[Object(r["d"])("img",{onLoad:t[1]||(t[1]=function(){return e.onLoadComplete&&e.onLoadComplete.apply(e,arguments)}),src:e.url,alt:e.alt},null,40,["src","alt"])],512),[[r["n"],e.isloaded]]),Object(r["o"])(Object(r["d"])("div",null,[Object(r["d"])("canvas",{class:"canvas",ref:"canvasRef",width:e.width,height:e.height,tabindex:"0",style:{border:"3px solid black"}},null,8,["width","height"])],512),[[r["n"],!e.isloaded]])],64)})),l=(n("a9e3"),n("a0bd")),d=Object(r["e"])({name:"LazyImage",props:{url:{type:String,required:!0},placeholder:{type:String,required:!0},width:{type:Number,required:!0},height:{type:Number,required:!0},alt:{type:String,required:!0}},setup:function(e){var t=Object(r["m"])(e),n=t.width,a=t.height,c=t.placeholder,o=Object(r["j"])(!1),u=Object(r["j"])(null);Object(r["f"])((function(){var e,t=Object(l["decode"])(c.value,n.value,a.value),r=null===u||void 0===u||null===(e=u.value)||void 0===e?void 0:e.getContext("2d"),o=r.createImageData(n.value,a.value);null===o||void 0===o||o.data.set(t),null===r||void 0===r||r.putImageData(o,0,0)}));var i=function(){o.value=!0};return{canvasRef:u,isloaded:o,onLoadComplete:i}}});n("e4d1");d.render=i,d.__scopeId="data-v-1c11bf8e";var p=d,s=Object(r["e"])({name:"App",components:{LazyImage:p},setup:function(){return{list:Array(20).fill(0)}}});n("1066");s.render=c;var f=s;Object(r["b"])(f).mount("#app")},cf02:function(e,t,n){},e4d1:function(e,t,n){"use strict";n("cf02")}});
//# sourceMappingURL=app.50b880f7.js.map