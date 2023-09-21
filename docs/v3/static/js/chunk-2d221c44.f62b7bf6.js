(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221c44"],{cc6d:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{staticClass:"tip"},[e._v("通过 "),t("table-column-api-link",{attrs:{prop:"events"}}),e._v(" 自定义目标组件的事件"),t("br"),t("span",{staticClass:"red"},[e._v("（注：具体请查看目标组件所支持的事件）")])],1),t("vxe-table",{attrs:{border:"",resizable:"","show-overflow":"",data:e.tableData,"edit-config":{trigger:"click",mode:"cell"}}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var o=n.row,a=n.column;return[t("vxe-input",{attrs:{type:"text"},on:{change:function(n){return e.nameChangeEvent({column:a})}},model:{value:o.name,callback:function(n){e.$set(o,"name",n)},expression:"row.name"}})]}}])}),t("vxe-column",{attrs:{field:"role",title:"Role","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var o=n.row,a=n.column;return[t("vxe-input",{attrs:{type:"text"},on:{change:function(n){return e.roleChangeEvent({column:a})}},model:{value:o.role,callback:function(n){e.$set(o,"role",n)},expression:"row.role"}})]}}])}),t("vxe-column",{attrs:{field:"nickname",title:"Nickname",filters:[{data:""}],"filter-render":{},"edit-render":{}},scopedSlots:e._u([{key:"filter",fn:function(n){var o=n.column,a=n.$panel;return e._l(o.filters,(function(n,l){return t("input",{directives:[{name:"model",rawName:"v-model",value:n.data,expression:"option.data"}],key:l,attrs:{type:"type"},domProps:{value:n.data},on:{input:[function(t){t.target.composing||e.$set(n,"data",t.target.value)},function(e){return a.changeOption(e,!!n.data,n)}],keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.enterFilterEvent({column:o,$panel:a})}}})}))}},{key:"edit",fn:function(n){var o=n.row,a=n.column;return[t("vxe-input",{attrs:{type:"text"},on:{focus:function(n){return e.roleFocusEvent({column:a})}},model:{value:o.nickname,callback:function(n){e.$set(o,"nickname",n)},expression:"row.nickname"}})]}}])}),t("vxe-column",{attrs:{field:"sex",title:"Sex","edit-render":{}},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.row;return[t("span",[e._v(e._s(e.formatSex(o.sex)))])]}},{key:"edit",fn:function(n){var o=n.row,a=n.column;return[t("vxe-select",{attrs:{transfer:""},on:{change:function(n){return e.sexChangeEvent({column:a})}},model:{value:o.sex,callback:function(n){e.$set(o,"sex",n)},expression:"row.sex"}},e._l(e.sexList,(function(e){return t("vxe-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)]}}])}),t("vxe-column",{attrs:{field:"date12",title:"Date","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var o=n.row,a=n.column;return[t("vxe-input",{attrs:{type:"date",transfer:""},on:{change:function(n){return e.dateChangeEvent({column:a})}},model:{value:o.date12,callback:function(n){e.$set(o,"date12",n)},expression:"row.date12"}})]}}])})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},a=[],l={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}],sexList:[{label:"女",value:"0"},{label:"男",value:"1"}],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          show-overflow\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{}">\n            <template #edit="{ row, column }">\n              <vxe-input v-model="row.name" type="text" @change="nameChangeEvent({ column })"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="role" title="Role" :edit-render="{}">\n            <template #edit="{ row, column }">\n              <vxe-input v-model="row.role" type="text" @change="roleChangeEvent({ column })"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="nickname" title="Nickname" :filters="[{ data: \'\' }]" :filter-render="{}" :edit-render="{}">\n            <template #filter="{ column, $panel }">\n              <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)" @keyup.enter="enterFilterEvent({ column, $panel })">\n            </template>\n            <template #edit="{ row, column }">\n              <vxe-input v-model="row.nickname" type="text" @focus="roleFocusEvent({ column })"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex" :edit-render="{}">\n            <template #default="{ row }">\n              <span>{{ formatSex(row.sex) }}</span>\n            </template>\n            <template #edit="{ row, column }">\n              <vxe-select v-model="row.sex" transfer @change="sexChangeEvent({ column })">\n                <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n              </vxe-select>\n            </template>\n          </vxe-column>\n          <vxe-column field="date12" title="Date" :edit-render="{}">\n            <template #edit="{ row, column }">\n              <vxe-input v-model="row.date12" type="date" transfer @change="dateChangeEvent({ column })"></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ],\n              sexList: [\n                { label: '女', value: '0' },\n                { label: '男', value: '1' }\n              ]\n            }\n          },\n          methods: {\n            formatSex (value) {\n              if (value === '1') {\n                return '男'\n              }\n              if (value === '0') {\n                return '女'\n              }\n              return ''\n            },\n            enterFilterEvent ({ column, $panel }) {\n              console.log(`${column.title} 筛选回车事件`)\n              $panel.confirmFilter()\n            },\n            nameChangeEvent ({ column }) {\n              console.log(`${column.title} 触发 input 事件`)\n            },\n            roleChangeEvent ({ column }) {\n              console.log(`${column.title} 触发 input 事件`)\n            },\n            roleFocusEvent ({ column }) {\n              console.log(`${column.title} 触发 focus 事件`)\n            },\n            sexChangeEvent ({ column }) {\n              console.log(`${column.title} 触发 change 事件`)\n            },\n            dateChangeEvent ({ column }) {\n              console.log(`${column.title} 触发 change 事件`)\n            }\n          }\n        }\n        "]}},methods:{formatSex:function(e){return"1"===e?"男":"0"===e?"女":""},enterFilterEvent:function(e){var n=e.column,t=e.$panel;console.log("".concat(n.title," 筛选回车事件")),t.confirmFilter()},nameChangeEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 input 事件"))},roleChangeEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 input 事件"))},roleFocusEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 focus 事件"))},sexChangeEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 change 事件"))},dateChangeEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 change 事件"))}}},r=l,i=t("2877"),c=Object(i["a"])(r,o,a,!1,null,null,null);n["default"]=c.exports}}]);