(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09f24d5c"],{"468e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.$t("app.aside.nav.i18n")))]),n("p",{staticClass:"tip"},[e._v(e._s(e.$t("app.body.demo.start.i18n.i18nTitle")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"shell"},[e._v("\n      npm install vue-i18n\n    ")]),e._v("\n    "),n("div",[e._v("src/i18n/index.js")]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("div",[e._v("main.js")]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),n("h2",[e._v(e._s(e.$t("app.body.demo.start.i18n.translate")))]),n("p",{staticClass:"tip"},[e._v(e._s(e.$t("app.body.demo.start.i18n.translateTitle")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("pre-code",{staticClass:"html"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1),n("h2",[e._v(e._s(e.$t("app.body.demo.start.i18n.findError")))]),e._m(0),e._m(1)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("通过 "),n("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table/pulls"}},[e._v("Pull requests")]),e._v(" 贡献翻译 -> "),n("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table/tree/master/packages/locale/lang"}},[e._v("添加或修改")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"lang-list"},[n("li",[n("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table/blob/master/packages/locale/lang/zh-CN.js",target:"_blank"}},[e._v("简体中文（zh-CN）")])]),n("li",[n("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table/blob/master/packages/locale/lang/zh-TC.js",target:"_blank"}},[e._v("繁体中文（zh-TC）")])]),n("li",[n("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table/blob/master/packages/locale/lang/en-US.js",target:"_blank"}},[e._v("English（en-US）")])]),n("li",[n("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table/blob/master/packages/locale/lang/ja-JP.js",target:"_blank"}},[e._v("ジャパン（ja-JP）")])])])])}],l={data:function(){return{demoCodes:["\n        import Vue from 'vue'\n        import VueI18n from 'vue-i18n'\n        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'\n        import enUS from 'vxe-table/lib/locale/lang/en-US'\n\n        const messages = {\n          zh_CN: {\n            ...zhCN\n          },\n          en_US: {\n            ...enUS\n          }\n        }\n\n        const i18n = new VueI18n({\n          locale: 'zh_CN',\n          messages,\n        })\n\n        export default i18n\n        ","\n        import Vue from 'vue'\n        import i18n from './i18n'\n        import VXETable from 'vxe-table'\n        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'\n        import enUS from 'vxe-table/lib/locale/lang/en-US'\n\n        VXETable.setup({\n          // 对组件内置的提示语进行国际化翻译\n          i18n: (key, args) => i18n.t(key, args)\n        })\n\n        Vue.use(VXETable)\n\n        new Vue({ i18n }).$mount('#app')\n        ","\n        VXETable.setup({\n          // 可选，对参数中的列头、校验提示..等进行自动翻译（只对支持国际化的有效）\n          translate (key, args) {\n            // 例如，只翻译 \"app.\" 开头的键值\n            if (key && key.indexOf('app.') > -1) {\n              return i18n.t(key, args)\n            }\n            return key\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="600"\n          :data="tableData">\n          <vxe-column field="name" title="app.body.label.name"></vxe-column>\n          <vxe-column field="age" title="app.body.label.age"></vxe-column>\n          <vxe-column field="sex" title="app.body.label.sex"></vxe-column>\n        </vxe-table>\n        ']}}},i=l,r=(n("9dce"),n("2877")),o=Object(r["a"])(i,a,s,!1,null,"c9b05d12",null);t["default"]=o.exports},"4fe8":function(e,t,n){},"9dce":function(e,t,n){"use strict";n("4fe8")}}]);