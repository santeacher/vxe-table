(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75bdc193"],{3154:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._m(0),l("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"",height:"500","scroll-x":{enabled:!1},loading:e.loading,data:e.tableData}},[l("vxe-table-column",{attrs:{type:"seq",title:"序号",width:"100"}}),l("vxe-table-colgroup",{attrs:{title:"基本信息"}},[l("vxe-table-column",{attrs:{field:"name",title:"Name",width:"200",sortable:""}}),l("vxe-table-column",{attrs:{field:"age",title:"Age",width:"200"}}),l("vxe-table-column",{attrs:{field:"sex",title:"Sex",width:"200"}})],1),l("vxe-table-colgroup",{attrs:{title:"详细信息"}},[l("vxe-table-colgroup",{attrs:{title:"分组"}},[l("vxe-table-column",{attrs:{field:"rate",title:"Rate",width:"200"}}),l("vxe-table-column",{attrs:{field:"region",title:"Region",width:"200"}})],1),l("vxe-table-colgroup",{attrs:{title:"其他"}},[l("vxe-table-column",{attrs:{field:"time",title:"Time",width:"200",sortable:""}}),l("vxe-table-column",{attrs:{field:"address",title:"Address",width:"300","show-overflow":""}})],1)],1),l("vxe-table-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),l("vxe-table-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}})],1),l("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),l("pre",[e._v("    "),l("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),l("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},n=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",{staticClass:"tip"},[e._v("分组表头"),l("br"),l("span",{staticClass:"red"},[e._v("（注：分组表头不支持横向虚拟滚动，设置 scroll-x={enabled: false} 关闭即可）")])])}],o=(l("d3b7"),l("159b"),l("a630"),l("3ca3"),l("628a")),i=l.n(o),r=l("f4e8"),d=l.n(r),s={data:function(){return{loading:!1,tableData:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          show-overflow\n          ref="xTable"\n          height="500"\n          :scroll-x="{enabled: false}"\n          :loading="loading"\n          :data="tableData">\n          <vxe-table-column type="seq" title="序号" width="100"></vxe-table-column>\n          <vxe-table-colgroup title="基本信息">\n            <vxe-table-column field="name" title="Name" width="200" sortable></vxe-table-column>\n            <vxe-table-column field="age" title="Age" width="200"></vxe-table-column>\n            <vxe-table-column field="sex" title="Sex" width="200"></vxe-table-column>\n          </vxe-table-colgroup>\n          <vxe-table-colgroup title="详细信息">\n            <vxe-table-colgroup title="分组">\n              <vxe-table-column field="rate" title="Rate" width="200"></vxe-table-column>\n              <vxe-table-column field="region" title="Region" width="200"></vxe-table-column>\n            </vxe-table-colgroup>\n            <vxe-table-colgroup title="其他">\n              <vxe-table-column field="time" title="Time" width="200" sortable></vxe-table-column>\n              <vxe-table-column field="address" title="Address" width="300" show-overflow></vxe-table-column>\n            </vxe-table-colgroup>\n          </vxe-table-colgroup>\n          <vxe-table-column field="updateTime" title="UpdateTime" width="200"></vxe-table-column>\n          <vxe-table-column field="createTime" title="CreateTime" width="200"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            XEAjax.mockList(1000).then(data => {\n              this.loading = false\n              this.tableData = data\n            })\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,i.a.mockList(1e3).then((function(t){e.loading=!1,e.tableData=t}))},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){d.a.highlightBlock(e)}))}},c=s,u=l("2877"),b=Object(u["a"])(c,a,n,!1,null,null,null);t["default"]=b.exports},"4df4":function(e,t,l){"use strict";var a=l("da84"),n=l("0366"),o=l("c65b"),i=l("7b0b"),r=l("9bdd"),d=l("e95a"),s=l("68ee"),c=l("07fa"),u=l("8418"),b=l("9a1f"),v=l("35a1"),x=a.Array;e.exports=function(e){var t=i(e),l=s(this),a=arguments.length,m=a>1?arguments[1]:void 0,f=void 0!==m;f&&(m=n(m,a>2?arguments[2]:void 0));var h,w,g,p,_,T,C=v(t),A=0;if(!C||this==x&&d(C))for(h=c(t),w=l?new this(h):x(h);h>A;A++)T=f?m(t[A],A):t[A],u(w,A,T);else for(p=b(t,C),_=p.next,w=l?new this:[];!(g=o(_,p)).done;A++)T=f?r(p,m,[g.value,A],!0):g.value,u(w,A,T);return w.length=A,w}},"9bdd":function(e,t,l){var a=l("825a"),n=l("2a62");e.exports=function(e,t,l,o){try{return o?t(a(l)[0],l[1]):t(l)}catch(i){n(e,"throw",i)}}},a630:function(e,t,l){var a=l("23e7"),n=l("4df4"),o=l("1c7e"),i=!o((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:i},{from:n})}}]);