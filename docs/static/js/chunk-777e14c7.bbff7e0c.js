(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-777e14c7"],{"0c9b":function(e,t,n){},"6e7d":function(e,t,n){"use strict";n.r(t);var l=n("7a23"),c=function(e){return Object(l["G"])("data-v-360a7414"),e=e(),Object(l["E"])(),e},b={class:"tip"},r=Object(l["l"])(" keep-alive 切换"),o=c((function(){return Object(l["j"])("span",{class:"red"},"（如果需要将表格放到隐藏的元素中，那么就必然会导致宽度无法计算）",-1)})),a=Object(l["l"])("，有以下方法解决"),u=c((function(){return Object(l["j"])("br",null,null,-1)})),j=Object(l["l"])(" 1.每次切换 Tab 页显示之后手动调用 "),O=Object(l["l"])(" 重新计算表格"),i=c((function(){return Object(l["j"])("br",null,null,-1)})),s=Object(l["l"])(" 2.使用 "),p=Object(l["l"])(" 绑定指定的变量来触发重新计算表格"),d=c((function(){return Object(l["j"])("br",null,null,-1)})),f=Object(l["l"])(" 3.使用 "),m=Object(l["l"])(" 自动监听父容器来触发重新计算表格 "),k={class:"btns"},v=Object(l["l"])("表格1"),T=Object(l["l"])("表格2"),w=Object(l["l"])("表格3"),_={class:"demo-code"},A=Object(l["l"])("      "),C=Object(l["l"])("\r\n    ");function K(e,t,n,c,K,S){var V=Object(l["L"])("table-api-link"),L=Object(l["L"])("router-link"),h=Object(l["L"])("router-view"),D=Object(l["L"])("pre-code");return Object(l["D"])(),Object(l["i"])("div",null,[Object(l["j"])("p",b,[r,o,a,u,j,Object(l["m"])(V,{prop:"recalculate"}),O,i,s,Object(l["m"])(V,{prop:"sync-resize"}),p,d,f,Object(l["m"])(V,{prop:"auto-resize"}),m]),Object(l["j"])("p",k,[Object(l["m"])(L,{class:"link",to:{name:"TableScrollKeepAliveTable1"}},{default:Object(l["V"])((function(){return[v]})),_:1}),Object(l["m"])(L,{class:"link",to:{name:"TableScrollKeepAliveTable2"}},{default:Object(l["V"])((function(){return[T]})),_:1}),Object(l["m"])(L,{class:"link",to:{name:"TableScrollKeepAliveTable3"}},{default:Object(l["V"])((function(){return[w]})),_:1})]),Object(l["m"])(h,null,{default:Object(l["V"])((function(e){var t=e.Component;return[(Object(l["D"])(),Object(l["g"])(l["b"],null,[(Object(l["D"])(),Object(l["g"])(Object(l["M"])(t)))],1024))]})),_:1}),Object(l["j"])("p",_,Object(l["O"])(e.$t("app.body.button.showCode")),1),Object(l["j"])("pre",null,[A,Object(l["m"])(D,{class:"xml"},{default:Object(l["V"])((function(){return[Object(l["l"])(Object(l["O"])(e.demoCodes[0]),1)]})),_:1}),C])])}var S=Object(l["n"])({setup:function(){return{demoCodes:['\n        // ... 代码片段，仅供参考\n        \n        <p class="btns">\n          <router-link class="link" :to="{name: \'TableScrollKeepAliveTable1\'}">表格1</router-link>\n          <router-link class="link" :to="{name: \'TableScrollKeepAliveTable2\'}">表格2</router-link>\n          <router-link class="link" :to="{name: \'TableScrollKeepAliveTable3\'}">表格3</router-link>\n        </p>\n\n        <router-view #default="{ Component }">\n          <keep-alive>\n            <component :is="Component" />\n          </keep-alive>\n        </router-view>\n        ']}}}),V=(n("a67d"),n("6b0d")),L=n.n(V);const h=L()(S,[["render",K],["__scopeId","data-v-360a7414"]]);t["default"]=h},a67d:function(e,t,n){"use strict";n("0c9b")}}]);