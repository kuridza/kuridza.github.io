(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c7a619c"],{1681:function(t,e,s){},"269a":function(t,e){t.exports=function(t,e){var s="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var a in"function"===typeof t.exports&&(s.directives=t.exports.options.directives),s.directives=s.directives||{},e)s.directives[a]=s.directives[a]||e[a]}},"2fa4":function(t,e,s){"use strict";s("20f6");var a=s("80d2");e["a"]=Object(a["h"])("spacer","div","v-spacer")},"4b31":function(t,e,s){"use strict";s("db38")},"5e23":function(t,e,s){},"71d9":function(t,e,s){"use strict";var a=s("3835"),i=s("5530"),n=(s("a9e3"),s("0481"),s("5e23"),s("8dd9")),o=s("adda"),r=s("80d2"),l=s("d9bd");e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(i["a"])(Object(i["a"])({},this.measurableStyles),{},{height:Object(r["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var s=Object(a["a"])(e,2),i=s[0],n=s[1];t.$attrs.hasOwnProperty(i)&&Object(l["a"])(i,n,t)}))},methods:{genBackground:function(){var t={height:Object(r["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["g"])(this.computedContentHeight)}},Object(r["r"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["g"])(this.extensionHeight)}},Object(r["r"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},a844:function(t,e,s){"use strict";var a=s("5530"),i=(s("a9e3"),s("1681"),s("8654")),n=s("58df"),o=Object(n["a"])(i["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b8ee:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{tag:"section"}},[s("v-card",{attrs:{dark:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"8"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{dark:"",headers:t.headers,"single-expand":!0,items:t.filteredMesurements,"footer-props":{itemsPerPageText:"",itemsPerPageOptions:[]},"disable-sort":!0,"single-select":""},on:{"click:row":t.expandRow1},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",height:"100"}},[s("v-select",{staticClass:"select",attrs:{items:t.scales,label:"Vaga",filled:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),s("v-spacer"),s("v-checkbox",{attrs:{label:"sa zvezdicom"},model:{value:t.fav,callback:function(e){t.fav=e},expression:"fav"}})],1)]},proxy:!0},{key:"item.fav",fn:function(e){var a=e.item;return[s("v-simple-checkbox",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"off-icon":"mdi-star-outline","on-icon":"mdi-star",color:"yellow"},model:{value:a.fav,callback:function(e){t.$set(a,"fav",e)},expression:"item.fav"}})]}},{key:"item.thumb",fn:function(e){var a=e.item;return[s("v-img",{attrs:{height:t.isMobile?300:40,width:t.isMobile?300:40,src:a.thumb,contain:""}})]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),s("v-col",{attrs:{cols:"12",sm:"4"}},[s("br"),s("br"),s("br"),s("br"),s("br"),s("h2",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},[t._v("Merenje #"+t._s(t.s))]),s("v-simple-table",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},[s("tr",[s("td",[t._v("Vaga")]),s("td",[t._v(t._s(t.mesurments[t.s].scale))])]),s("tr",[s("td",[t._v("Tezina")]),s("td",[t._v(t._s(t.mesurments[t.s].kg))])]),s("tr",[s("td",[t._v("vreme")]),s("td",[t._v(t._s(t.mesurments[t.s].ts))])])]),s("v-img",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}],attrs:{src:t.kitten,"max-height":"300",contain:""}}),s("br"),s("v-textarea",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}],attrs:{solo:"",name:"input-7-4",label:"Beleske"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1)],1)],1)],1)},i=[],n=(s("d81d"),s("4de4"),s("ac1f"),s("841c"),s("159b"),{data:function(){return{kitten:"",selected:[],s:0,fav:!1,headers:[],mesurments:[{id:1,notes:"aaa",fav:!0,scale:"vaga_1",kg:123,ts:"11:22"},{id:2,notes:"bbb",fav:!1,scale:"vaga_1",kg:321,ts:"22:33"},{id:3,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:4,notes:"",fav:!1,scale:"vaga_2",kg:333,ts:"33:44"},{id:5,notes:"",fav:!1,scale:"vaga_2",kg:333,ts:"33:44"},{id:6,notes:"",fav:!0,scale:"vaga_2",kg:333,ts:"33:44"},{id:7,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:8,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:9,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:10,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:11,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:12,notes:"",fav:!1,scale:"vaga_3",kg:333,ts:"33:44"},{id:13,notes:"",fav:!1,scale:"vaga_3",kg:333,ts:"33:44"},{id:14,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:15,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:16,notes:"",fav:!1,scale:"vaga_1",kg:333,ts:"33:44"},{id:17,notes:"",fav:!1,scale:"vaga_3",kg:333,ts:"33:44"}],scales:["vaga_1","vaga_2","vaga_3"],search:""}},computed:{isMobile:function(){return screen.width<=760},note:{get:function(){return this.mesurments[this.s].notes},set:function(t){this.mesurments[this.s].notes=t}},filteredMesurements:function(){var t=this,e=this.mesurments;return e.map((function(t,e){return t.thumb="http://placekitten.com/20"+t.id+"/30"+t.id,t.selected=!1,t})),this.fav&&(e=e.filter((function(e){return e.fav===t.fav}))),this.search?e.filter((function(e){return e.scale===t.search})):e}},mounted:function(){this.expandRow1({id:1},{index:0});var t=this.isMobile?"Merenje #":"#";this.headers=[{text:"",value:"fav"},{text:"",value:"thumb",align:"center"},{text:t,value:"id"},{text:"vaga",value:"scale"},{text:"tezina",value:"kg"},{text:"vreme",value:"ts"}]},methods:{expandRow:function(t){this.kitten="http://placekitten.com/20"+t.item.id+"/30"+t.item.id},expandRow1:function(t,e){if(!this.isMobile){this.s=t.id;var s=document.querySelectorAll("table tr");s.forEach((function(t){t.classList.remove("selected")})),s[this.s].classList.add("selected"),this.kitten="http://placekitten.com/20"+t.id+"/30"+t.id}}}}),o=n,r=(s("4b31"),s("2877")),l=s("6544"),c=s.n(l),d=s("b0af"),h=s("ac7c"),u=s("62ad"),v=s("a523"),p=s("8fea"),f=s("adda"),g=s("0fd9"),m=s("b974"),b=s("9e88"),x=s("1f4f"),k=s("2fa4"),w=s("a844"),_=s("71d9"),y=s("269a"),j=s.n(y),C=s("5607"),H=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=H.exports;c()(H,{VCard:d["a"],VCheckbox:h["a"],VCol:u["a"],VContainer:v["a"],VDataTable:p["a"],VImg:f["a"],VRow:g["a"],VSelect:m["a"],VSimpleCheckbox:b["a"],VSimpleTable:x["a"],VSpacer:k["a"],VTextarea:w["a"],VToolbar:_["a"]}),j()(H,{Ripple:C["a"]})},db38:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0c7a619c.7cd742b2.js.map