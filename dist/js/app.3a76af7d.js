(function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&f.push(s[u][0]),s[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);a&&a(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},s={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var a=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"31f2":function(e,t,n){"use strict";var r=n("ebce"),s=n.n(r);s.a},"405b":function(e,t,n){e.exports=n.p+"img/dy_full.c652bb98.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("ul",{staticClass:"puzzle-wrap"},e._l(e.puzzles,(function(t,n){return r("li",{key:n,class:{puzzle:!0,"puzzle-empty":!t},on:{click:function(r){return e.moveFn(n,t)}}},[r("canvas",{attrs:{width:"100px",height:"100px",id:"canvas"+t}})])})),0),r("img",{staticStyle:{display:"none"},attrs:{src:n("405b"),id:"imgs"},on:{load:e.showImage}}),r("button",{staticClass:"reset",on:{click:e.reset}},[e._v("重新开始")])])},i=[],c=(n("a623"),n("fb6a"),{data:function(){return{puzzles:[],imgURL:n("405b")}},methods:{reset:function(){this.reRender(),this.showImage()},reRender:function(){for(var e=[],t=1;t<9;t++)e.push(t);e=e.sort((function(){return Math.random()-.5})),this.puzzles=e,this.puzzles.push("")},showImage:function(){for(var e=document.querySelector("#imgs"),t=1,n=function(n){for(var r=function(r){var s=document.querySelector("#canvas"+t++);if(s){var o=s.getContext("2d");setTimeout((function(){o.drawImage(e,100*r,100*n,100,100,0,0,100,100)}),50)}},s=0;s<3;s++)r(s)},r=0;r<3;r++)n(r);setTimeout((function(){var e=document.querySelector("#canvas"),t=e.getContext("2d");t.clearRect(0,0,100,100)}),1)},moveFn:function(e,t){var n=this.puzzles[e],r=this.puzzles[e-3],s=this.puzzles[e+3],o=this.puzzles[e-1],u=this.puzzles[e+1],i=!1;if(""===o?(this.$set(this.puzzles,e-1,n),this.$set(this.puzzles,e,""),i=!0):""===u?(this.$set(this.puzzles,e+1,n),this.$set(this.puzzles,e,""),i=!0):""===r?(this.$set(this.puzzles,e-3,n),this.$set(this.puzzles,e,""),i=!0):""===s&&(this.$set(this.puzzles,e+3,n),this.$set(this.puzzles,e,""),i=!0),i){var c=document.querySelector("#canvas"+t),l=document.querySelector("#canvas"),a=c.getContext("2d"),p=l.getContext("2d");p.drawImage(c,0,0),a.clearRect(0,0,100,100),this.passFn()}},passFn:function(){if(""===this.puzzles[this.puzzles.length-1]){var e=this.puzzles.slice(0,this.puzzles.length-1),t=e.every((function(e,t){return e===t+1}));t&&setTimeout((function(){return alert("*-*党艳真棒*-*")}),20)}}},created:function(){this.reRender()},mounted:function(){this.showImage()},destroyed:function(){this.reset()}}),l=c,a=(n("31f2"),n("2877")),p=Object(a["a"])(l,u,i,!1,null,null,null),f=p.exports,h={name:"App",components:{HelloWorld:f}},d=h,z=(n("034f"),Object(a["a"])(d,s,o,!1,null,null,null)),v=z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){},ebce:function(e,t,n){}});
//# sourceMappingURL=app.3a76af7d.js.map