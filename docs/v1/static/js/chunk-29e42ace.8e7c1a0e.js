(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29e42ace"],{"28e6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("使用 "),n("virtual-tree-api-link",{attrs:{prop:"highlight-current-row"}}),e._v(" 方式")],1),n("vxe-virtual-tree",{attrs:{"row-key":"","row-id":"id","highlight-current-row":"","tree-config":{children:"children"},data:e.tableData,columns:e.tableColumn1}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("使用 radio 方式")]),n("vxe-virtual-tree",{attrs:{"row-key":"","row-id":"id","tree-config":{children:"children"},"radio-config":{labelField:"name"},data:e.tableData,columns:e.tableColumn2}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("当然也可以两种方式同时使用")]),n("vxe-virtual-tree",{ref:"xVTree3",attrs:{resizable:"","row-key":"","highlight-current-row":"","row-id":"id","tree-config":{children:"children"},"radio-config":{labelField:"name",trigger:"row"},data:e.tableData,columns:e.tableColumn3},on:{"current-change":e.currentChangeEvent}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")])],1)},r=[],i=(n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("c695")),l=n.n(i),o=n("f4e8"),d=n.n(o),s={data:function(){var e=this,t=this.$createElement;return{tableData:[],tableColumn1:[{field:"name",title:"Name",width:400,treeNode:!0},{field:"size",title:"Size"},{field:"type",title:"Type"},{field:"date",title:"Date"}],tableColumn2:[{type:"radio",title:"Name",width:400,treeNode:!0},{field:"size",title:"Size"},{field:"type",title:"Type"},{field:"date",title:"Date"}],tableColumn3:[{type:"radio",width:280,treeNode:!0,slots:{header:function(){return[t("vxe-button",{attrs:{type:"text",disabled:!e.selectRow},on:{click:e.clearCurrentRowEvent}},["取消"])]}}},{field:"size",title:"Size"},{field:"type",title:"Type"},{field:"date",title:"Date"}],selectRow:null,demoCodes:['\n        <vxe-virtual-tree\n          row-key\n          highlight-current-row\n          row-id="id"\n          :tree-config="{children: \'children\'}"\n          :data="tableData"\n          :columns="tableColumn">\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                { field: 'name', title: 'Name', width: 400, treeNode: true },\n                { field: 'size', title: 'Size' },\n                { field: 'type', title: 'Type' },\n                { field: 'date', title: 'Date' }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          }\n        }\n        ",'\n        <vxe-virtual-tree\n          row-key\n          row-id="id"\n          :tree-config="{children: \'children\'}"\n          :radio-config="{labelField: \'name\'}"\n          :data="tableData"\n          :columns="tableColumn">\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                { type: 'radio', title: 'Name', width: 400, treeNode: true },\n                { field: 'size', title: 'Size' },\n                { field: 'type', title: 'Type' },\n                { field: 'date', title: 'Date' }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          }\n        }\n        ",'\n        <vxe-virtual-tree\n          resizable\n          row-key\n          highlight-current-row\n          ref="xVTree"\n          row-id="id"\n          :tree-config="{children: \'children\'}"\n          :radio-config="{labelField: \'name\', trigger: \'row\'}"\n          :data="tableData"\n          :columns="tableColumn"\n          @current-change="currentChangeEvent">\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                {\n                  type: 'radio',\n                  width: 280,\n                  treeNode: true,\n                  slots: {\n                    header: () => {\n                      return [\n                        <vxe-button type=\"text\" onClick={ this.clearCurrentRowEvent } disabled={ !this.selectRow }>取消</vxe-button>\n                      ]\n                    }\n                  }\n                },\n                { field: 'size', title: 'Size' },\n                { field: 'type', title: 'Type' },\n                { field: 'date', title: 'Date' }\n              ],\n              selectRow: null\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          },\n          methods: {\n            currentChangeEvent ({ row }) {\n              this.selectRow = row\n            },\n            clearCurrentRowEvent () {\n              this.selectRow = null\n              this.$refs.xVTree.clearRadioRow()\n              this.$refs.xVTree.clearCurrentRow()\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=l.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){d.a.highlightBlock(e)}))},methods:{currentChangeEvent:function(e){var t=e.row;this.selectRow=t},clearCurrentRowEvent:function(){this.selectRow=null,this.$refs.xVTree3.clearRadioRow(),this.$refs.xVTree3.clearCurrentRow()}}},c=s,u=n("2877"),h=Object(u["a"])(c,a,r,!1,null,null,null);t["default"]=h.exports},"4df4":function(e,t,n){"use strict";var a=n("da84"),r=n("0366"),i=n("c65b"),l=n("7b0b"),o=n("9bdd"),d=n("e95a"),s=n("68ee"),c=n("07fa"),u=n("8418"),h=n("9a1f"),v=n("35a1"),f=a.Array;e.exports=function(e){var t=l(e),n=s(this),a=arguments.length,w=a>1?arguments[1]:void 0,p=void 0!==w;p&&(w=r(w,a>2?arguments[2]:void 0));var b,m,C,_,g,y,x=v(t),D=0;if(!x||this==f&&d(x))for(b=c(t),m=n?new this(b):f(b);b>D;D++)y=p?w(t[D],D):t[D],u(m,D,y);else for(_=h(t,x),g=_.next,m=n?new this:[];!(C=i(g,_)).done;D++)y=p?o(_,w,[C.value,D],!0):C.value,u(m,D,y);return m.length=D,m}},"9bdd":function(e,t,n){var a=n("825a"),r=n("2a62");e.exports=function(e,t,n,i){try{return i?t(a(n)[0],n[1]):t(n)}catch(l){r(e,"throw",l)}}},a630:function(e,t,n){var a=n("23e7"),r=n("4df4"),i=n("1c7e"),l=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:l},{from:r})}}]);