(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52b2ad94"],{"2bc0":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"design"},[e.design?i("div",{staticClass:"design-item-detail"},[i("div",{staticClass:"design-item-detail-text"},[i("div",{staticClass:"design-item-text-detail-wrapper",style:{width:e.sideTextWidth}},[i("p",{staticClass:"design-type"},[e._v(e._s(e.design.type))]),i("h1",[e._v(e._s(e.design.title))]),i("p",{staticClass:"design-body",domProps:{innerHTML:e._s(e.renderDesignBody)}})])]),i("div",{staticClass:"design-item-detail-portfolio"},e._l(e.design.images,function(e){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url,expression:"image.url"}],key:e.id})}),0)]):e._e()])},n=[],d=(i("7f7f"),i("cadf"),i("551c"),i("097d"),i("bc3a")),a=i.n(d),r=i("0e54"),o=i.n(r),c={data:function(){return{designSlug:this.$route.params.slug,design:null,errors:[],sideTextWidth:"33.33%"}},created:function(){var e=this;a.a.get("https://cdn.mileslemon.com/designs?slug="+this.designSlug).then(function(t){e.design=t.data[0],setTimeout(function(){e.getSideTextWidth()},1)}).catch(function(t){e.errors.push(t)})},mounted:function(){var e=this;window.addEventListener("resize",function(){e.getSideTextWidth()})},computed:{renderDesignBody:function(){return o()(this.design.body)}},methods:{getSideTextWidth:function(){if("designItem"===this.$route.name){var e=document.querySelector(".design-item-detail-text");this.sideTextWidth=window.getComputedStyle(e).width}}}},u=c,l=(i("a1dc"),i("2877")),g=Object(l["a"])(u,s,n,!1,null,"83e257f2",null);g.options.__file="DesignDetail.vue";t["default"]=g.exports},"48d7":function(e,t,i){},a1dc:function(e,t,i){"use strict";var s=i("48d7"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-52b2ad94.f94c5d30.js.map