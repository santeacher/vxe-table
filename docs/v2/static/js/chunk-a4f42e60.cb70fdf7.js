(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4f42e60"],{"4df4":function(e,a,t){"use strict";var s=t("da84"),n=t("0366"),o=t("c65b"),l=t("7b0b"),d=t("9bdd"),r=t("e95a"),i=t("68ee"),c=t("07fa"),m=t("8418"),x=t("9a1f"),v=t("35a1"),b=s.Array;e.exports=function(e){var a=l(e),t=i(this),s=arguments.length,u=s>1?arguments[1]:void 0,h=void 0!==u;h&&(u=n(u,s>2?arguments[2]:void 0));var g,f,p,T,w,D,_=v(a),M=0;if(!_||this==b&&r(_))for(g=c(a),f=t?new this(g):b(g);g>M;M++)D=h?u(a[M],M):a[M],m(f,M,D);else for(T=x(a,_),w=T.next,f=t?new this:[];!(p=o(w,T)).done;M++)D=h?d(T,u,[p.value,M],!0):p.value,m(f,M,D);return f.length=M,f}},"9bdd":function(e,a,t){var s=t("825a"),n=t("2a62");e.exports=function(e,a,t,o){try{return o?a(s(t)[0],t[1]):a(t)}catch(l){n(e,"throw",l)}}},a630:function(e,a,t){var s=t("23e7"),n=t("4df4"),o=t("1c7e"),l=!o((function(e){Array.from(e)}));s({target:"Array",stat:!0,forced:l},{from:n})},fb15:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p",{staticClass:"tip"},[e._v("隐藏头部，通过设置 "),t("table-column-api-link",{attrs:{prop:"show-header"}}),e._v(" 参数")],1),t("vxe-table",{attrs:{"show-header":!1,data:e.tableData}},[t("vxe-table-column",{attrs:{type:"seq",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name"}}),t("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-table-column",{attrs:{field:"age",title:"Age"}}),t("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),t("p",{staticClass:"tip"},[e._v("当纵向或横向内容过多时，自动出现滚动条")]),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:function(a){e.showHeader=!e.showHeader}}},[e._v("显示/隐藏表头")])]},proxy:!0}])}),t("vxe-table",{attrs:{height:"300","show-header":e.showHeader,data:e.tableData2}},[t("vxe-table-column",{attrs:{type:"seq",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name"}}),t("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-table-column",{attrs:{field:"age",title:"Age"}}),t("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},n=[],o=(t("d3b7"),t("159b"),t("a630"),t("3ca3"),t("f4e8")),l=t.n(o),d={data:function(){return{showHeader:!1,tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women ",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women ",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women ",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man ",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man ",age:35,address:"test abc"}],tableData2:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women ",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women ",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women ",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man ",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man ",age:35,address:"test abc"}],demoCodes:['\n        <vxe-table\n          :show-header="false"\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          }\n        }\n        ",'\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="showHeader = !showHeader">显示/隐藏表头</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          height="300"\n          :show-header="showHeader"\n          :data="tableData2">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              showHeader: true,\n              tableData2: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){l.a.highlightBlock(e)}))}},r=d,i=t("2877"),c=Object(i["a"])(r,s,n,!1,null,null,null);a["default"]=c.exports}}]);