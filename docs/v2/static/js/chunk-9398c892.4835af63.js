(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9398c892"],{"08f3":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{staticClass:"tip"},[e._v("右键菜单，实现对按钮的控制，通过 "),t("table-api-link",{attrs:{prop:"visibleMethod"}}),e._v(" 和 "),t("table-api-link",{attrs:{prop:"visible"}}),e._v(" | "),t("table-api-link",{attrs:{prop:"disabled"}}),e._v(" 属性来控制菜单选项的操作权限")],1),t("vxe-grid",{ref:"xGrid",attrs:{border:"",resizable:"","show-footer":"","highlight-current-row":"","footer-method":e.footerMethod,columns:e.tableColumn,data:e.tableData,"menu-config":e.tableMenu},on:{"cell-menu":e.cellContextMenuEvent,"menu-click":e.contextMenuClickEvent}}),e._m(0),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[e._v("    "),t("code",[e._v("\n      | Arrow Up ↑ | 移动到上一个菜单选项 |\n      | Arrow Down ↓ | 移动到下一个菜单选项 |\n      | Arrow Left ← | 关闭二级菜单 |\n      | Arrow Right → | 打开二级菜单 |\n      | Esc | 关闭菜单选项 |\n      | Enter | 选中当前菜单选项 |\n      | Spacebar | 选中当前菜单选项 |\n    ")]),e._v("\n  ")])}],i=(t("fb6a"),t("d3b7"),t("159b"),t("a630"),t("3ca3"),t("caad"),t("d81d"),t("c695")),r=t.n(i),l=t("0edb"),s=t.n(l),c=t("f4e8"),d=t.n(c),u={data:function(){return{tableData:[],tableColumn:[{type:"seq",width:50},{field:"name",title:"app.body.label.name"},{field:"age",title:"app.body.label.age"},{field:"date3",title:"Date",showOverflow:!0}],tableMenu:{header:{options:[[{code:"exportAll",name:"导出所有.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},body:{options:[[{code:"copy",name:"复制内容",prefixIcon:"fa fa-copy",visible:!0,disabled:!1},{code:"clear",name:"清除内容",visible:!0,disabled:!1},{code:"reload",name:"刷新表格",visible:!0,disabled:!1}],[{code:"myPrint",name:"打印",prefixIcon:"fa fa-print",visible:!0,disabled:!1},{code:"myExport",name:"导出.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},footer:{options:[[{code:"exportAll",name:"导出所有.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},visibleMethod:this.visibleMethod},demoCodes:['\n        <vxe-grid\n          border\n          resizable\n          show-footer\n          highlight-current-row\n          ref="xGrid"\n          :footer-method="footerMethod"\n          :columns="tableColumn"\n          :data="tableData"\n          :menu-config="tableMenu"\n          @cell-menu="cellContextMenuEvent"\n          @menu-click="contextMenuClickEvent"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'app.body.label.name' },\n                { field: 'age', title: 'app.body.label.age' },\n                { field: 'date3', title: 'Date', showOverflow: true }\n              ],\n              tableMenu: {\n                header: {\n                  options: [\n                    [\n                      { code: 'exportAll', name: '导出所有.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                    ]\n                  ]\n                },\n                body: {\n                  options: [\n                    [\n                      { code: 'copy', name: '复制内容', prefixIcon: 'fa fa-copy', visible: true, disabled: false },\n                      { code: 'clear', name: '清除内容', visible: true, disabled: false },\n                      { code: 'reload', name: '刷新表格', visible: true, disabled: false }\n                    ],\n                    [\n                      { code: 'myPrint', name: '打印', prefixIcon: 'fa fa-print', visible: true, disabled: false },\n                      { code: 'myExport', name: '导出.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                    ]\n                  ]\n                },\n                footer: {\n                  options: [\n                    [\n                      { code: 'exportAll', name: '导出所有.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                    ]\n                  ]\n                },\n                visibleMethod: this.visibleMethod\n              }\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 4)\n          },\n          methods: {\n            visibleMethod ({ type, options, column }) {\n              // 示例：只有 name 列允许操作，清除按钮只能在 age 才显示\n              // 显示之前处理按钮的操作权限\n              let isDisabled = !column || column.property !== 'name'\n              let isVisible = column && column.property === 'age'\n              options.forEach(list => {\n                list.forEach(item => {\n                  if (['copy'].includes(item.code)) {\n                    item.disabled = isDisabled\n                  }\n                  if (['clear'].includes(item.code)) {\n                    item.visible = isVisible\n                  }\n                })\n              })\n              return true\n            },\n            cellContextMenuEvent ({ row }) {\n              this.$refs.xGrid.setCurrentRow(row)\n            },\n            contextMenuClickEvent ({ menu, row, column }) {\n              let xGrid = this.$refs.xGrid\n              switch (menu.code) {\n                case 'copy':\n                  if (row && column) {\n                    if (XEClipboard.copy(row[column.property])) {\n                      this.$XModal.message({ message: '已复制到剪贴板！', status: 'success' })\n                    }\n                  }\n                  break\n                case 'clear':\n                  xGrid.clearData(row, column.property)\n                  break\n                case 'myPrint':\n                  xGrid.print()\n                  break\n                case 'myExport':\n                  xGrid.exportData()\n                  break\n              }\n            },\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age'].includes(column.property)) {\n                    return XEUtils.sum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,4)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){d.a.highlightBlock(e)}))},methods:{visibleMethod:function(e){var n=e.options,t=e.column,o=!t||"name"!==t.property,a=t&&"age"===t.property;return n.forEach((function(e){e.forEach((function(e){["copy"].includes(e.code)&&(e.disabled=o),["clear"].includes(e.code)&&(e.visible=a)}))})),!0},cellContextMenuEvent:function(e){var n=e.row;this.$refs.xGrid.setCurrentRow(n)},contextMenuClickEvent:function(e){var n=e.menu,t=e.row,o=e.column,a=this.$refs.xGrid;switch(n.code){case"copy":t&&o&&s.a.copy(t[o.property])&&this.$XModal.message({message:"已复制到剪贴板！",status:"success"});break;case"clear":a.clearData(t,o.property);break;case"myPrint":a.print();break;case"myExport":a.exportData();break}},footerMethod:function(e){var n=e.columns,t=e.data;return[n.map((function(e,n){return 0===n?"和值":["age"].includes(e.property)?r.a.sum(t,e.property):null}))]}}},f=u,p=t("2877"),b=Object(p["a"])(f,o,a,!1,null,null,null);n["default"]=b.exports},"0edb":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var o,a=window.document;function i(e){if(!o){o=a.createElement("textarea"),o.id="$XECopy";var n=o.style;n.width="48px",n.height="24px",n.position="fixed",n.zIndex="0",n.left="-500px",n.top="-500px",a.body.appendChild(o)}o.value=null===e||void 0===e?"":""+e}function r(e){var n=!1;try{i(e),o.select(),o.setSelectionRange(0,o.value.length),n=a.execCommand("copy"),o.blur()}catch(t){}return n}function l(e){return r(e)}l.copy=r;var s=l;n["default"]=s},"4df4":function(e,n,t){"use strict";var o=t("da84"),a=t("0366"),i=t("c65b"),r=t("7b0b"),l=t("9bdd"),s=t("e95a"),c=t("68ee"),d=t("07fa"),u=t("8418"),f=t("9a1f"),p=t("35a1"),b=o.Array;e.exports=function(e){var n=r(e),t=c(this),o=arguments.length,m=o>1?arguments[1]:void 0,v=void 0!==m;v&&(m=a(m,o>2?arguments[2]:void 0));var h,x,y,w,g,C,M=p(n),_=0;if(!M||this==b&&s(M))for(h=d(n),x=t?new this(h):b(h);h>_;_++)C=v?m(n[_],_):n[_],u(x,_,C);else for(w=f(n,M),g=w.next,x=t?new this:[];!(y=i(g,w)).done;_++)C=v?l(w,m,[y.value,_],!0):y.value,u(x,_,C);return x.length=_,x}},"9bdd":function(e,n,t){var o=t("825a"),a=t("2a62");e.exports=function(e,n,t,i){try{return i?n(o(t)[0],t[1]):n(t)}catch(r){a(e,"throw",r)}}},a630:function(e,n,t){var o=t("23e7"),a=t("4df4"),i=t("1c7e"),r=!i((function(e){Array.from(e)}));o({target:"Array",stat:!0,forced:r},{from:a})}}]);