(function(t){function n(n){for(var r,i,s=n[0],u=n[1],l=n[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,s=1;s<e.length;s++){var u=e[s];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var c=u;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h2",{staticClass:"mb-3 text-center"},[t._v("Банкомат")]),e("div",{staticClass:"row justify-content-center py-3"},[e("div",{staticClass:"col-6"},[t.isWithdrawalInProgress?e("BanknotesList",{attrs:{title:"Банкноты к выдаче",banknotes:t.baknotesForWithdraw}}):[t.filteredBanknotes.length?[e("BanknotesList",{staticClass:"mb-5",attrs:{title:"Доступные номиналы банкнот:",banknotes:t.availableBanknotes}}),e("WidthdrawForm",{attrs:{error:t.error},on:{getMoney:function(n){return t.getMoney()}},model:{value:t.amount,callback:function(n){t.amount=t._n(n)},expression:"amount"}})]:e("h3",[t._v("В банкомате нет денег")])]],2)])])},a=[],i=(e("4de4"),e("4fad"),e("c1f9"),e("4160"),e("d81d"),e("13d5"),e("f4dd"),e("a9e3"),e("b64b"),e("159b"),e("5530")),s=e("3835"),u=e("2909"),l=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(t){return n.reduceRight((function(t,n){return n(t)}),t)}},c=function(t){return function(n){return Object(u["a"])(n).sort(t)}},f=function(t){return Object.keys(t)},d=function(t){return function(n){return n.map(t)}},p=function(t){return Object.entries(t).reduce((function(t,n){var e=Object(s["a"])(n,2),r=e[0],o=e[1];return t+r*o}),0)},b=function(t,n){Object.entries(n).forEach((function(n){var e=Object(s["a"])(n,2),r=e[0],o=e[1];t[r]-=o}))},v=function(t,n){return function(e){var r=Object(i["a"])({},n),o=t;return e.reduce((function(t,n){var e=function e(){r[n]>0&&o-n>=0&&(o-=n,r[n]-=1,t[n]=t[n]?t[n]+1:1,e())};return e(),t}),{})}},h=function(t,n){var e=p(n);if(e<t)return{message:"В банкомате не достаточно денег для выдачи ".concat(t," гривен"),error:!0};var r=function(e){return l(v(t,n),c(e),d(Number),f)},o=r((function(t,n){return t-n})),a=r((function(t,n){return n-t})),i=p(a(n))===t?a:o,s=i(n);return p(s)===t?{banknotes:s}:{message:"Нет банкнот для выдачи ".concat(t," гривен, введите другую сумму"),error:!0}},m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h4",{staticClass:"mb-3 text-center"},[t._v(t._s(t.title))]),e("ul",{staticClass:"list-group"},t._l(t.banknotes,(function(n,r){return e("li",{key:r,staticClass:"list-group-item"},[e("p",{staticClass:"mb-0"},[t._v("Номинал "),e("strong",[t._v(t._s(r))]),t._v(" гривен")]),e("p",{staticClass:"mb-0"},[t._v("Количество "),e("strong",[t._v(t._s(n))]),t._v(" купюр")])])})),0)])},y=[],g={name:"BanknotesList",props:{title:{type:String,required:!0},banknotes:{type:Object,required:!0}}},k=g,_=e("2877"),w=Object(_["a"])(k,m,y,!1,null,null,null),O=w.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{on:{submit:function(n){return n.preventDefault(),t.$emit("getMoney")}}},[e("div",{staticClass:"mb-2"},[e("label",{attrs:{for:"amount"}},[t._v("Сумма для получения")]),e("input",{staticClass:"form-control",class:{"is-invalid":t.error},attrs:{id:"amount",min:"10",step:"10",type:"number",placeholder:"Введите сумму для получения"},domProps:{value:t.value},on:{input:function(n){return t.$emit("input",n.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(t.error)+" ")])]),e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{disabled:!t.value||t.error,type:"submit"}},[t._v(" Получить деньги ")])])},C=[],x={name:"WidthdrawForm",props:{value:{type:null|Number,required:!0},error:{type:null|String,required:!0}}},P=x,W=Object(_["a"])(P,j,C,!1,null,null,null),M=W.exports,B={name:"App",components:{WidthdrawForm:M,BanknotesList:O},data:function(){return{banknotes:{10:20,20:20,50:20,100:20,200:20,500:20},amount:null,error:null,isWithdrawalInProgress:!1,baknotesForWithdraw:null}},computed:{filteredBanknotes:function(){return Object.entries(this.banknotes).filter((function(t){return t[1]}))},availableBanknotes:function(){return Object.fromEntries(this.filteredBanknotes)}},watch:{amount:function(){this.error&&(this.error=null)}},methods:{getMoney:function(){var t=h(this.amount,this.banknotes),n=t.banknotes,e=t.message,r=t.error;n&&this.widthdrawMoney(n),r&&(this.error=e)},widthdrawMoney:function(t){var n=this;this.baknotesForWithdraw=t,this.isWithdrawalInProgress=!0,this.amount=null,b(this.banknotes,t),setTimeout((function(){n.isWithdrawalInProgress=!1,n.baknotesForWithdraw=null}),3e3)}}},F=B,S=Object(_["a"])(F,o,a,!1,null,null,null),$=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")}});
//# sourceMappingURL=app.fa6a82e8.js.map