(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-711d67ea"],{"3a2f":function(t,e,i){"use strict";var a=i("ade3"),n=(i("a9e3"),i("9734"),i("4ad4")),s=i("a9ad"),o=i("16b7"),r=i("b848"),c=i("f573"),l=i("f2e7"),h=i("80d2"),d=i("d9bd"),u=i("58df");e["a"]=Object(u["a"])(s["a"],o["a"],r["a"],c["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||a?s=n+e.width/2-i.width/2:(this.left||this.right)&&(s=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=a+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=a+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(h["g"])(this.maxWidth),minWidth:Object(h["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(h["s"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===h["w"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(a["a"])(t,this.contentClass,!0),Object(a["a"])(t,"menuable__content__active",this.isActive),Object(a["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"5c3a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"dashboard",fluid:"",tag:"section"}},[i("v-row",[i("v-col",{attrs:{cols:"12",lg:"4"}},[i("base-material-chart-card",{attrs:{data:t.emailsSubscriptionChart.data,options:t.emailsSubscriptionChart.options,"responsive-options":t.emailsSubscriptionChart.responsiveOptions,color:"#E91E63","hover-reveal":"",type:"Bar"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",a,!1),n),[i("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}])},[i("span",[t._v("Refresh")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-pencil")])],1)]}}])},[i("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[i("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),i("span",{staticClass:"text-caption grey--text font-weight-light"},[t._v("updated 10 minutes ago")])]},proxy:!0}])},[i("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" Website Views ")]),i("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" Last Campaign Performance ")])])],1),i("v-col",{attrs:{cols:"12",lg:"4"}},[i("base-material-chart-card",{attrs:{data:t.dailySalesChart.data,options:t.dailySalesChart.options,color:"success","hover-reveal":"",type:"Line"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",a,!1),n),[i("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}])},[i("span",[t._v("Refresh")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-pencil")])],1)]}}])},[i("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[i("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),i("span",{staticClass:"text-caption grey--text font-weight-light"},[t._v("updated 4 minutes ago")])]},proxy:!0}])},[i("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" Daily Sales ")]),i("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[i("v-icon",{attrs:{color:"green",small:""}},[t._v(" mdi-arrow-up ")]),i("span",{staticClass:"green--text"},[t._v("55%")]),t._v("  increase in today's sales ")],1)])],1),i("v-col",{attrs:{cols:"12",lg:"4"}},[i("base-material-chart-card",{attrs:{data:t.dataCompletedTasksChart.data,options:t.dataCompletedTasksChart.options,"hover-reveal":"",color:"info",type:"Line"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",a,!1),n),[i("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}])},[i("span",[t._v("Refresh")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-pencil")])],1)]}}])},[i("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[i("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),i("span",{staticClass:"text-caption grey--text font-weight-light"},[t._v("campaign sent 26 minutes ago")])]},proxy:!0}])},[i("h3",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" Completed Tasks ")]),i("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" Last Last Campaign Performance ")])])],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("base-material-stats-card",{attrs:{color:"info",icon:"mdi-twitter",title:"Followers",value:"+245","sub-icon":"mdi-clock","sub-text":"Just Updated"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("base-material-stats-card",{attrs:{color:"primary",icon:"mdi-poll",title:"Website Visits",value:"75.521","sub-icon":"mdi-tag","sub-text":"Tracked from Google Analytics"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("base-material-stats-card",{attrs:{color:"success",icon:"mdi-store",title:"Revenue",value:"$ 34,245","sub-icon":"mdi-calendar","sub-text":"Last 24 Hours"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("base-material-stats-card",{attrs:{color:"orange",icon:"mdi-sofa",title:"Bookings",value:"184","sub-icon":"mdi-alert","sub-icon-color":"red","sub-text":"Get More Space..."}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"warning"},scopedSlots:t._u([{key:"heading",fn:function(){return[i("div",{staticClass:"text-subtitle-1 font-weight-light"},[t._v(" Employees Stats ")]),i("div",{staticClass:"text-subtitle-1 font-weight-light"},[t._v(" New employees on 15th September, 2016 ")])]},proxy:!0}])},[i("v-card-text",[i("v-data-table",{attrs:{headers:t.headers,items:t.items}})],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("base-material-card",{staticClass:"px-5 py-3",scopedSlots:t._u([{key:"heading",fn:function(){return[i("v-tabs",{attrs:{"background-color":"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[i("span",{staticClass:"subheading font-weight-light mx-3",staticStyle:{"align-self":"center"}},[t._v("Tasks:")]),i("v-tab",{staticClass:"mr-3"},[i("v-icon",{staticClass:"mr-2"},[t._v(" mdi-bug ")]),t._v(" Bugs ")],1),i("v-tab",{staticClass:"mr-3"},[i("v-icon",{staticClass:"mr-2"},[t._v(" mdi-code-tags ")]),t._v(" Website ")],1),i("v-tab",[i("v-icon",{staticClass:"mr-2"},[t._v(" mdi-cloud ")]),t._v(" Server ")],1)],1)]},proxy:!0}])},[i("v-tabs-items",{staticClass:"transparent",model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(3,(function(e){return i("v-tab-item",{key:e},[i("v-card-text",[t._l(t.tasks[t.tabs],(function(e,a){return[i("v-row",{key:a,attrs:{align:"center"}},[i("v-col",{attrs:{cols:"1"}},[i("v-list-item-action",[i("v-checkbox",{attrs:{color:"secondary"},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"task.value"}})],1)],1),i("v-col",{attrs:{cols:"9"}},[i("div",{staticClass:"font-weight-light",domProps:{textContent:t._s(e.text)}})]),i("v-col",{staticClass:"text-right",attrs:{cols:"2"}},[i("v-icon",{staticClass:"mx-1"},[t._v(" mdi-pencil ")]),i("v-icon",{staticClass:"mx-1",attrs:{color:"error"}},[t._v(" mdi-close ")])],1)],1)]}))],2)],1)})),1)],1)],1)],1)],1)},n=[],s={name:"DashboardDashboard",data:function(){return{dailySalesChart:{data:{labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}}},dataCompletedTasksChart:{data:{labels:["12am","3pm","6pm","9pm","12pm","3am","6am","9am"],series:[[230,750,450,300,280,240,200,190]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}},emailsSubscriptionChart:{data:{labels:["Ja","Fe","Ma","Ap","Mai","Ju","Jul","Au","Se","Oc","No","De"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},options:{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},headers:[{sortable:!1,text:"ID",value:"id"},{sortable:!1,text:"Name",value:"name"},{sortable:!1,text:"Salary",value:"salary",align:"right"},{sortable:!1,text:"Country",value:"country",align:"right"},{sortable:!1,text:"City",value:"city",align:"right"}],items:[{id:1,name:"Dakota Rice",country:"Niger",city:"Oud-Tunrhout",salary:"$35,738"},{id:2,name:"Minerva Hooper",country:"Curaçao",city:"Sinaai-Waas",salary:"$23,738"},{id:3,name:"Sage Rodriguez",country:"Netherlands",city:"Overland Park",salary:"$56,142"},{id:4,name:"Philip Chanley",country:"Korea, South",city:"Gloucester",salary:"$38,735"},{id:5,name:"Doris Greene",country:"Malawi",city:"Feldkirchen in Kārnten",salary:"$63,542"}],tabs:0,tasks:{0:[{text:'Sign contract for "What are conference organizers afraid of?"',value:!0},{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!1},{text:"Create 4 Invisible User Experiences you Never Knew About",value:!0}],1:[{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!1}],2:[{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!0}]},list:{0:!1,1:!1,2:!1}}},methods:{complete:function(t){this.list[t]=!this.list[t]}}},o=s,r=i("2877"),c=i("6544"),l=i.n(c),h=i("8336"),d=i("99d9"),u=i("ac7c"),v=i("62ad"),p=i("a523"),f=i("8fea"),m=i("132d"),g=i("1800"),b=i("0fd9"),w=i("5530"),y=(i("ac1f"),i("5319"),i("4e82")),x=i("1c87"),C=i("7560"),_=i("80d2"),T=i("58df"),k=Object(T["a"])(x["a"],Object(y["a"])("tabsBar"),C["a"]),S=k.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(w["a"])(Object(w["a"])({"v-tab":!0},x["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,i=this.generateRouteLink(),a=i.tag,n=i.data;return n.attrs=Object(w["a"])(Object(w["a"])({},n.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),n.on=Object(w["a"])(Object(w["a"])({},n.on),{},{keydown:function(t){t.keyCode===_["w"].enter&&e.click(t),e.$emit("keydown",t)}}),t(a,n,this.$slots.default)}}),O=i("9d65"),A=i("c3f0"),D=Object(T["a"])(O["a"],Object(y["a"])("windowGroup","v-window-item","v-window")),$=D.extend().extend().extend({name:"v-window-item",directives:{Touch:A["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(_["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(_["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),j=$.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=$.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),L=i("fe57"),B=i("aac8"),I=i("3a2f"),G=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=G.exports;l()(G,{VBtn:h["a"],VCardText:d["b"],VCheckbox:u["a"],VCol:v["a"],VContainer:p["a"],VDataTable:f["a"],VIcon:m["a"],VListItemAction:g["a"],VRow:b["a"],VTab:S,VTabItem:j,VTabs:L["a"],VTabsItems:B["a"],VTooltip:I["a"]})},9734:function(t,e,i){}}]);
//# sourceMappingURL=chunk-711d67ea.35e8e24f.js.map