(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d53ceaf4"],{"1b70":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p",{staticClass:"tip"},[e._v("自定义分页按钮图标，例如第三方图标库：font-awesome、inconfont")]),t("vxe-table",{attrs:{border:"","show-overflow":"",height:"400",loading:e.loading,data:e.tableData}},[t("vxe-table-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-table-column",{attrs:{type:"seq",title:"序号",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:""}}),t("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-table-column",{attrs:{field:"age",title:"Age"}}),t("vxe-table-column",{attrs:{field:"rate",title:"Rate"}})],1),t("vxe-pager",{attrs:{border:"","icon-prev-page":"fa fa-angle-left","icon-jump-prev":"fa fa-angle-double-left","icon-jump-next":"fa fa-angle-double-right","icon-next-page":"fa fa-angle-right","icon-jump-more":"fa fa-ellipsis-h",loading:e.loading,"current-page":e.tablePage.currentPage,"page-size":e.tablePage.pageSize,total:e.tablePage.totalResult,layouts:["PrevPage","JumpNumber","NextPage","FullJump","Sizes","Total"]},on:{"page-change":e.handlePageChange}}),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(t("d3b7"),t("159b"),t("a630"),t("3ca3"),t("99af"),t("628a")),o=t.n(i),r=t("f4e8"),g=t.n(r),s={data:function(){return{loading:!1,tableData:[],tablePage:{currentPage:1,pageSize:10,totalResult:0},demoCodes:['\n        <vxe-table\n          border\n          show-overflow\n          height="400"\n          :loading="loading"\n          :data="tableData">\n          <vxe-table-column type="checkbox" width="60"></vxe-table-column>\n          <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="rate" title="Rate"></vxe-table-column>\n        </vxe-table>\n\n        <vxe-pager\n          border\n          icon-prev-page="fa fa-angle-left"\n          icon-jump-prev="fa fa-angle-double-left"\n          icon-jump-next="fa fa-angle-double-right"\n          icon-next-page="fa fa-angle-right"\n          icon-jump-more="fa fa-ellipsis-h"\n          :loading="loading"\n          :current-page="tablePage.currentPage"\n          :page-size="tablePage.pageSize"\n          :total="tablePage.totalResult"\n          :layouts="[\'PrevPage\', \'JumpNumber\', \'NextPage\', \'FullJump\', \'Sizes\', \'Total\']"\n          @page-change="handlePageChange">\n        </vxe-pager>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tablePage: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 0\n              }\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              XEAjax.get(`/api/user/page/list/${this.tablePage.pageSize}/${this.tablePage.currentPage}`, this.formData)then(({ page, result }) => {\n                this.tableData = result\n                this.tablePage.totalResult = page.totalResult\n                this.loading = false\n              }).catch(e => {\n                this.loading = false\n              })\n            },\n            handlePageChange ({ currentPage, pageSize }) {\n              this.tablePage.currentPage = currentPage\n              this.tablePage.pageSize = pageSize\n              this.findList()\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){g.a.highlightBlock(e)}))},methods:{findList:function(){var e=this;this.loading=!0,o.a.get("/api/user/page/list/".concat(this.tablePage.pageSize,"/").concat(this.tablePage.currentPage),this.formData).then((function(a){var t=a.page,n=a.result;e.tableData=n,e.tablePage.totalResult=t.totalResult,e.loading=!1})).catch((function(){e.loading=!1}))},handlePageChange:function(e){var a=e.currentPage,t=e.pageSize;this.tablePage.currentPage=a,this.tablePage.pageSize=t,this.findList()}}},c=s,u=t("2877"),d=Object(u["a"])(c,n,l,!1,null,null,null);a["default"]=d.exports},"4df4":function(e,a,t){"use strict";var n=t("da84"),l=t("0366"),i=t("c65b"),o=t("7b0b"),r=t("9bdd"),g=t("e95a"),s=t("68ee"),c=t("07fa"),u=t("8418"),d=t("9a1f"),f=t("35a1"),b=n.Array;e.exports=function(e){var a=o(e),t=s(this),n=arguments.length,h=n>1?arguments[1]:void 0,p=void 0!==h;p&&(h=l(h,n>2?arguments[2]:void 0));var v,m,x,P,w,S,z=f(a),y=0;if(!z||this==b&&g(z))for(v=c(a),m=t?new this(v):b(v);v>y;y++)S=p?h(a[y],y):a[y],u(m,y,S);else for(P=d(a,z),w=P.next,m=t?new this:[];!(x=i(w,P)).done;y++)S=p?r(P,h,[x.value,y],!0):x.value,u(m,y,S);return m.length=y,m}},"9bdd":function(e,a,t){var n=t("825a"),l=t("2a62");e.exports=function(e,a,t,i){try{return i?a(n(t)[0],t[1]):a(t)}catch(o){l(e,"throw",o)}}},a630:function(e,a,t){var n=t("23e7"),l=t("4df4"),i=t("1c7e"),o=!i((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:o},{from:l})}}]);