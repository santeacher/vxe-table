(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-753a76ad"],{"4df4":function(e,a,t){"use strict";var s=t("da84"),n=t("0366"),l=t("c65b"),o=t("7b0b"),d=t("9bdd"),r=t("e95a"),i=t("68ee"),c=t("07fa"),m=t("8418"),v=t("9a1f"),x=t("35a1"),b=s.Array;e.exports=function(e){var a=o(e),t=i(this),s=arguments.length,u=s>1?arguments[1]:void 0,g=void 0!==u;g&&(u=n(u,s>2?arguments[2]:void 0));var h,p,f,T,w,_,D=x(a),C=0;if(!D||this==b&&r(D))for(h=c(a),p=t?new this(h):b(h);h>C;C++)_=g?u(a[C],C):a[C],m(p,C,_);else for(T=v(a,D),w=T.next,p=t?new this:[];!(f=l(w,T)).done;C++)_=g?d(T,u,[f.value,C],!0):f.value,m(p,C,_);return p.length=C,p}},"9bdd":function(e,a,t){var s=t("825a"),n=t("2a62");e.exports=function(e,a,t,l){try{return l?a(s(t)[0],t[1]):a(t)}catch(o){n(e,"throw",o)}}},a630:function(e,a,t){var s=t("23e7"),n=t("4df4"),l=t("1c7e"),o=!l((function(e){Array.from(e)}));s({target:"Array",stat:!0,forced:o},{from:n})},da39:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p",{staticClass:"tip"},[e._v(" 斑马线条纹，通过设置 "),t("table-api-link",{attrs:{prop:"stripe"}}),e._v(" 参数"),t("br"),t("span",{staticClass:"red"},[e._v("（注：不支持树形结构，在可编辑表格场景下，临时插入的数据不会有斑马纹样式）")])],1),t("vxe-table",{attrs:{stripe:"",data:e.tableData}},[t("vxe-table-column",{attrs:{type:"seq",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name"}}),t("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-table-column",{attrs:{field:"age",title:"Age"}}),t("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),t("p",{staticClass:"tip"},[e._v("使用 "),t("table-api-link",{attrs:{prop:"highlight-hover-row"}}),e._v(" 属性启用 hover 行高亮")],1),t("vxe-table",{attrs:{stripe:"","highlight-current-row":"","highlight-hover-row":"",data:e.tableData}},[t("vxe-table-column",{attrs:{type:"seq",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name"}}),t("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-table-column",{attrs:{field:"age",title:"Age"}}),t("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},n=[],l=(t("d3b7"),t("159b"),t("a630"),t("3ca3"),t("f4e8")),o=t.n(l),d={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women ",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women ",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women ",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man ",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man ",age:35,address:"test abc"}],demoCodes:['\n        <vxe-table\n          stripe\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          stripe\n          highlight-current-row\n          highlight-hover-row\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){o.a.highlightBlock(e)}))}},r=d,i=t("2877"),c=Object(i["a"])(r,s,n,!1,null,null,null);a["default"]=c.exports}}]);