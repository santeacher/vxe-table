(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d6a7c44"],{"4df4":function(e,t,n){"use strict";var a=n("da84"),i=n("0366"),r=n("c65b"),l=n("7b0b"),o=n("9bdd"),d=n("e95a"),s=n("68ee"),u=n("07fa"),c=n("8418"),p=n("9a1f"),f=n("35a1"),m=a.Array;e.exports=function(e){var t=l(e),n=s(this),a=arguments.length,g=a>1?arguments[1]:void 0,b=void 0!==g;b&&(g=i(g,a>2?arguments[2]:void 0));var v,h,x,R,y,S,w=f(t),k=0;if(!w||this==m&&d(w))for(v=u(t),h=n?new this(v):m(v);v>k;k++)S=b?g(t[k],k):t[k],c(h,k,S);else for(R=p(t,w),y=R.next,h=n?new this:[];!(x=r(y,R)).done;k++)S=b?o(R,g,[x.value,k],!0):x.value,c(h,k,S);return h.length=k,h}},"9bdd":function(e,t,n){var a=n("825a"),i=n("2a62");e.exports=function(e,t,n,r){try{return r?t(a(n)[0],n[1]):t(n)}catch(l){i(e,"throw",l)}}},a630:function(e,t,n){var a=n("23e7"),i=n("4df4"),r=n("1c7e"),l=!r((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:l},{from:i})},b031:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("数据代理简单示例")]),n("vxe-grid",{attrs:{resizable:"","keep-source":"",height:"528","filter-config":{remote:!0},toolbar:e.tableToolbar,"pager-config":e.tablePage,columns:e.tableColumn,"form-config":e.tableForm,"proxy-config":e.tableProxy,"checkbox-config":{labelField:"id",highlight:!0,range:!0},"edit-rules":e.validRules,"edit-config":{trigger:"click",mode:"row",showStatus:!0}}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},i=[],r=(n("4e82"),n("d3b7"),n("159b"),n("ddb0"),n("a15b"),n("99af"),n("7db0"),n("a630"),n("3ca3"),n("628a")),l=n.n(r),o=n("c695"),d=n.n(o),s=n("f4e8"),u=n.n(s),c={data:function(){this.$createElement;return{validRules:{name:[{required:!0,message:"名称必须填写"},{min:3,max:50,message:"名称长度在 3 到 50 个字符"}],role:[{required:!0,message:"角色必须填写"}]},tablePage:{pageSize:15,pageSizes:[5,10,20,50,100,200,500,1e3]},tableProxy:{form:!0,sort:!0,filter:!0,ajax:{query:function(e){var t=e.page,n=e.sort,a=e.filters,i={sort:n.property,order:n.order};return a.forEach((function(e){var t=e.property,n=e.values;i[t]=n.join(",")})),l.a.get("/api/user/page/list/".concat(t.pageSize,"/").concat(t.currentPage),i)},delete:function(e){var t=e.body;return l.a.post("/api/user/save",t)},save:function(e){var t=e.body;return l.a.post("/api/user/save",t)}}},tableToolbar:{buttons:[{code:"insert_actived",name:"Add",icon:"fa fa-plus"},{code:"mark_cancel",name:"删除/取消",icon:"fa fa-bookmark-o"},{code:"save",name:"Save",icon:"fa fa-save"}],refresh:!0,custom:!0},tableForm:{titleWidth:100,titleAlign:"right",items:[{field:"name",title:"名称",span:8,itemRender:{name:"input",attrs:{placeholder:"请输入名称"}}},{field:"role",title:"角色",span:8,itemRender:{name:"input",attrs:{placeholder:"请输入角色"}}},{field:"nickname",title:"昵称",span:8,itemRender:{name:"input",attrs:{placeholder:"请输入昵称"}}},{field:"sex",title:"性别",span:8,folding:!0,itemRender:{name:"$select",options:[{value:"0",label:"女"},{value:"1",label:"男"}],props:{placeholder:"请选择性别"}}},{field:"age",title:"年龄",span:8,folding:!0,itemRender:{name:"$input",props:{type:"number",placeholder:"请输入年龄"}}},{span:24,align:"center",collapseNode:!0,itemRender:{name:"FormItemButtonGroup"}}]},tableColumn:[{type:"seq",width:60,fixed:"left"},{type:"checkbox",title:"ID",width:140,fixed:"left"},{field:"name",title:"Name",remoteSort:!0,editRender:{name:"input"}},{field:"age",title:"Age",remoteSort:!0,editRender:{name:"input"}},{field:"type",title:"Type",slots:{default:function(e){var t=this.$createElement,n=e.row,a=e.column,i=[{value:"1",label:"成功"},{value:"2",label:"失败"},{value:"3",label:"拒接"}],r=d.a.get(n,a.property),l=i.find((function(e){return e.value===r}));return[t("span",{style:"color:".concat("1"===r?"green":"red")},[l?l.label:""])]}}},{field:"status",title:"Status",editRender:{name:"$select",options:[{value:"1",label:"红"},{value:"2",label:"黄"},{value:"3",label:"蓝"},{value:"4",label:"绿"},{value:"5",label:"青"}]}},{field:"sex",title:"Sex",editRender:{name:"$select",options:[{value:"0",label:"女"},{value:"1",label:"男"}]}},{field:"role",title:"Role",remoteSort:!0,width:200,filters:[{label:"前端开发",value:"前端"},{label:"后端开发",value:"后端"},{label:"测试",value:"测试"},{label:"程序员鼓励师",value:"程序员鼓励师"}],filterMultiple:!1,editRender:{name:"input"}},{field:"describe",title:"Describe",showOverflow:!0,editRender:{name:"input"}}],demoCodes:['\n        <vxe-grid v-bind="xGridOptions"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              xGridOptions: {\n                resizable: true,\n                height: 528,\n                filterConfig: {\n                  remote: true\n                },\n                checkboxConfig: {\n                  labelField: 'id',\n                  highlight: true,\n                  range: true\n                },\n                editConfig: {\n                  trigger: 'click',\n                  mode: 'row',\n                  showStatus: true\n                },\n                editRules: {\n                  name: [\n                    { required: true, message: '名称必须填写' },\n                    { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }\n                  ],\n                  role: [\n                    { required: true, message: '角色必须填写' }\n                  ]\n                },\n                pagerConfig: {\n                  pageSize: 15,\n                  pageSizes: [5, 10, 20, 50, 100, 200, 500, 1000]\n                },\n                proxyConfig: {\n                  sort: true,\n                  filter: true,\n                  ajax: {\n                    query: {\n                      url: '/api/user/page/list/{{page.pageSize}}/{{page.currentPage}}'\n                    },\n                    delete: {\n                      url: '/api/user/save'\n                    },\n                    save: {\n                      url: '/api/user/save'\n                    }\n                  }\n                },\n                toolbar: {\n                  buttons: [\n                    { code: 'insert_actived', name: 'Add', icon: 'fa fa-plus' },\n                    { code: 'mark_cancel', name: '删除/取消', icon: 'fa fa-bookmark-o' },\n                    { code: 'save', name: 'Save', icon: 'fa fa-save' }\n                  ],\n                  refresh: true,\n                  custom: true\n                },\n                formConfig: {\n                  titleWidth: 100,\n                  titleAlign: 'right',\n                  items: [\n                    { field: 'name', title: '名称', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入名称' } } },\n                    { field: 'role', title: '角色', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入角色' } } },\n                    { field: 'nickname', title: '昵称', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入昵称' } } },\n                    // 表单项渲染，自动读取字典配置\n                    { field: 'sex', title: '性别', span: 8, folding: true, itemRender: { name: '$select', options: { dict: 'SEX_ALL' } } },\n                    { field: 'age', title: '年龄', span: 8, folding: true, itemRender: { name: 'input', attrs: { type: 'number', placeholder: '请输入年龄' } } },\n                    { span: 24, align: 'center', collapseNode: true, itemRender: { name: 'FormItemButtonGroup' } }\n                  ]\n                },\n                columns: [\n                  { type: 'seq', width: 60, fixed: 'left' },\n                  { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },\n                  { field: 'name', title: 'Name', remoteSort: true, editRender: { name: 'input' } },\n                  { field: 'age', title: 'Age', remoteSort: true, editRender: { name: 'input' } },\n                  // 单元格渲染，自动读取字典配置\n                  { field: 'type', title: 'Type', cellRender: { name: 'DICT', props: { code: 'OPERATE_STATUS' } } },\n                  // 单元格编辑渲染，自动读取字典配置\n                  { field: 'status', title: 'Status', editRender: { name: '$select', options: { dict: 'COLOR_STATUS' } } },\n                  // 单元格编辑渲染，自动请求异步配置\n                  { field: 'sex', title: 'Sex', remoteSort: true, editRender: { name: '$select', options: { url: '/api/conf/sex/list' } } },\n                  // 筛选渲染，自动请求异步配置\n                  { field: 'role', title: 'Role', remoteSort: true, width: 200, filters: { url: '/api/conf/role/list' }, filterMultiple: false, editRender: { name: 'input' } },\n                  { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }\n                ]\n              }\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))}},p=c,f=n("2877"),m=Object(f["a"])(p,a,i,!1,null,null,null);t["default"]=m.exports}}]);