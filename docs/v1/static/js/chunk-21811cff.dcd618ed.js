(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21811cff"],{"4df4":function(e,t,a){"use strict";var l=a("da84"),n=a("0366"),o=a("c65b"),i=a("7b0b"),s=a("9bdd"),r=a("e95a"),d=a("68ee"),c=a("07fa"),h=a("8418"),u=a("9a1f"),v=a("35a1"),f=l.Array;e.exports=function(e){var t=i(e),a=d(this),l=arguments.length,b=l>1?arguments[1]:void 0,m=void 0!==b;m&&(b=n(b,l>2?arguments[2]:void 0));var w,x,g,p,D,_,k=v(t),C=0;if(!k||this==f&&r(k))for(w=c(t),x=a?new this(w):f(w);w>C;C++)_=m?b(t[C],C):t[C],h(x,C,_);else for(p=u(t,k),D=p.next,x=a?new this:[];!(g=o(D,p)).done;C++)_=m?s(p,b,[g.value,C],!0):g.value,h(x,C,_);return x.length=C,x}},"9bdd":function(e,t,a){var l=a("825a"),n=a("2a62");e.exports=function(e,t,a,o){try{return o?t(l(a)[0],a[1]):t(a)}catch(i){n(e,"throw",i)}}},a630:function(e,t,a){var l=a("23e7"),n=a("4df4"),o=a("1c7e"),i=!o((function(e){Array.from(e)}));l({target:"Array",stat:!0,forced:i},{from:n})},e116:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("vxe-table",{attrs:{border:"",resizable:"","highlight-hover-row":"","highlight-current-row":"",height:"500",data:e.tableData},on:{"cell-click":e.cellClickEvent}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name"}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-table-column",{attrs:{field:"age",title:"Age"}}),a("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),a("vxe-modal",{attrs:{title:"查看详情",width:"600",height:"400",mask:!1,"lock-view":!1,resize:""},scopedSlots:e._u([{key:"default",fn:function(){return[a("vxe-table",{attrs:{border:"inner","auto-resize":"","show-overflow":"","highlight-hover-row":"",height:"auto","show-header":!1,"sync-resize":e.showDetails,data:e.detailData}},[a("vxe-table-column",{attrs:{field:"label",width:"40%"}}),a("vxe-table-column",{attrs:{field:"value"}})],1)]},proxy:!0}]),model:{value:e.showDetails,callback:function(t){e.showDetails=t},expression:"showDetails"}}),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"tip"},[e._v("实现点击行弹出窗口并显示详情信息"),a("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])])}],o=(a("fb6a"),a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("d81d"),a("f4e8")),i=a.n(o),s={data:function(){return{showDetails:!1,detailData:[],tableData:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          highlight-hover-row\n          highlight-current-row\n          height="500"\n          :data="tableData"\n          @cell-click="cellClickEvent">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n\n        <vxe-modal v-model="showDetails" title="查看详情" width="600" height="400" :mask="false" :lock-view="false" resize>\n          <template v-slot>\n            <vxe-table\n              border="inner"\n              auto-resize\n              show-overflow\n              highlight-hover-row\n              height="auto"\n              :show-header="false"\n              :sync-resize="showDetails"\n              :data="detailData">\n              <vxe-table-column field="label" width="40%"></vxe-table-column>\n              <vxe-table-column field="value"></vxe-table-column>\n            </vxe-table>\n          </template>\n        </vxe-modal>\n        ',"\n        export default {\n          data () {\n            return {\n              showDetails: false,\n              detailData: [],\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 20)\n          },\n          methods: {\n            cellClickEvent ({ row }) {\n              this.detailData = ['name', 'nickname', 'role', 'sex', 'age', 'date12', 'address'].map(field => {\n                return { label: field, value: row[field] }\n              })\n              this.showDetails = true\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,20)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){i.a.highlightBlock(e)}))},methods:{cellClickEvent:function(e){var t=e.row;this.detailData=["name","nickname","role","sex","age","date12","address"].map((function(e){return{label:e,value:t[e]}})),this.showDetails=!0}}},r=s,d=a("2877"),c=Object(d["a"])(r,l,n,!1,null,null,null);t["default"]=c.exports}}]);