(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c99"],{"1f3a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v(" 显示/隐藏列功能，通过表格设置 "),n("table-api-link",{attrs:{prop:"id"}}),e._v(" 和 "),n("table-api-link",{attrs:{prop:"custom-config"}}),e._v("={storage: true} 参数开启将列个性化 localStorage 保存功能"),n("br"),e._v(" 通过 "),n("table-api-link",{attrs:{prop:"custom"}}),e._v(" 事件实现显示/隐藏列服务端保存，通过 "),n("table-api-link",{attrs:{prop:"resizable-change"}}),e._v(" 事件实现列宽状态服务端保存 ")],1),n("vxe-toolbar",{ref:"xToolbar1",attrs:{custom:""},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",[e._v("按钮1")]),n("vxe-button",[e._v("按钮2")])]},proxy:!0}])}),n("vxe-table",{ref:"xTable1",attrs:{border:"",resizable:"",id:"toolbar_demo5",height:"400","custom-config":{storage:!0,checkMethod:e.checkColumnMethod},data:e.tableData},on:{"resizable-change":e.resizableChangeEvent}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{field:"name",title:"Name"}}),n("vxe-column",{attrs:{field:"role",title:"Role"}}),n("vxe-column",{attrs:{field:"sex",title:"Sex"}}),n("vxe-column",{attrs:{field:"age",title:"Age"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[],o=(n("d81d"),{data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}],demoCodes:['\n        <vxe-toolbar ref="xToolbar1" custom>\n          <template #buttons>\n            <vxe-button>按钮1</vxe-button>\n            <vxe-button>按钮2</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          ref="xTable1"\n          id="toolbar_demo5"\n          height="400"\n          :custom-config="{storage: true, checkMethod: checkColumnMethod}"\n          :data="tableData"\n          @resizable-change="resizableChangeEvent">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="role" title="Role"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          created () {\n            this.$nextTick(() => {\n              // 手动将表格和工具栏进行关联\n              this.$refs.xTable1.connect(this.$refs.xToolbar1)\n            })\n          },\n          methods: {\n            checkColumnMethod ({ column }) {\n              if (column.property === 'role') {\n                return false\n              }\n              return true\n            },\n            resizableChangeEvent () {\n              const columns = this.$refs.xTable1.getColumns()\n              const customData = columns.map(column => {\n                return {\n                  width: column.renderWidth\n                }\n              })\n              console.log(customData)\n            }\n          }\n        }\n        "]}},created:function(){var e=this;this.$nextTick((function(){e.$refs.xTable1.connect(e.$refs.xToolbar1)}))},methods:{checkColumnMethod:function(e){var t=e.column;return"role"!==t.property},resizableChangeEvent:function(){var e=this.$refs.xTable1.getColumns(),t=e.map((function(e){return{width:e.renderWidth}}));console.log(t)}}}),r=o,l=n("2877"),d=Object(l["a"])(r,a,s,!1,null,null,null);t["default"]=d.exports}}]);