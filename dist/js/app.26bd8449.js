(function(t){function e(e){for(var r,o,u=e[0],p=e[1],c=e[2],a=0,f=[];a<u.length;a++)o=u[a],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,u=1;u<n.length;u++){var p=n[u];0!==i[p]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=p;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0721":function(t,e,n){t.exports=n.p+"img/dy.8c92341d.png"},"0880":function(t,e,n){t.exports=n.p+"img/dy6.742750bf.png"},"31f2":function(t,e,n){"use strict";var r=n("ebce"),i=n.n(r);i.a},"393e":function(t,e,n){t.exports=n.p+"img/dy5.5e15bd58.png"},"3cb8":function(t,e,n){t.exports=n.p+"img/dy8.3ab85c51.png"},"3dfe":function(t,e,n){t.exports=n.p+"img/dy3.db5003cd.png"},4206:function(t,e,n){t.exports=n.p+"img/dy4.13ab096a.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("ul",{staticClass:"puzzle-wrap"},t._l(t.puzzles,(function(e,r){return n("li",{key:r,class:{puzzle:!0,"puzzle-empty":!e.id},style:{background:"url("+e.path+")"},on:{click:function(e){return t.moveFn(r)}}})})),0)])},u=[],p=(n("a623"),n("fb6a"),{data:function(){return{puzzles:[]}},methods:{reRender:function(){for(var t=[],e=1;e<9;e++)t.push({id:e,path:n("f068")("./dy"+e+".png")});t=t.sort((function(){return Math.random()-.5})),this.puzzles=t,this.puzzles.push({id:"",path:""}),console.log(this.puzzles)},moveFn:function(t){var e=this.puzzles[t],n=this.puzzles[t-3],r=this.puzzles[t+3],i=this.puzzles[t-1],s=this.puzzles[t+1];i&&""===i.id?(this.$set(this.puzzles,t-1,e),this.$set(this.puzzles,t,{id:"",path:""})):s&&""===s.id?(this.$set(this.puzzles,t+1,e),this.$set(this.puzzles,t,{id:"",path:""})):n&&""===n.id?(this.$set(this.puzzles,t-3,e),this.$set(this.puzzles,t,{id:"",path:""})):r&&""===r.id&&(this.$set(this.puzzles,t+3,e),this.$set(this.puzzles,t,{id:"",path:""})),console.log(this.puzzles),this.passFn()},passFn:function(){if(""===this.puzzles[this.puzzles.length-1].id){var t=this.puzzles.slice(0,this.puzzles.length-1),e=t.every((function(t,e){return t.id===e+1}));e&&setTimeout((function(){return alert("*-*党艳真棒*-*")}),20)}}},created:function(){this.reRender()}}),c=p,l=(n("31f2"),n("2877")),a=Object(l["a"])(c,o,u,!1,null,null,null),f=a.exports,d={name:"App",components:{HelloWorld:f}},h=d,z=(n("034f"),Object(l["a"])(h,i,s,!1,null,null,null)),g=z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"5b03":function(t,e,n){t.exports=n.p+"img/dy7.ae51078f.png"},"5cda":function(t,e,n){t.exports=n.p+"img/dy2.d1769134.png"},"85ec":function(t,e,n){},cc85:function(t,e,n){t.exports=n.p+"img/dy1.dc8770e8.png"},ebce:function(t,e,n){},f068:function(t,e,n){var r={"./dy.png":"0721","./dy1.png":"cc85","./dy2.png":"5cda","./dy3.png":"3dfe","./dy4.png":"4206","./dy5.png":"393e","./dy6.png":"0880","./dy7.png":"5b03","./dy8.png":"3cb8"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=s,t.exports=i,i.id="f068"}});
//# sourceMappingURL=app.26bd8449.js.map