(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a53da3"],{"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function r(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))}}},"4df4":function(e,t,n){"use strict";var r=n("da84"),o=n("0366"),i=n("c65b"),a=n("7b0b"),c=n("9bdd"),s=n("e95a"),l=n("68ee"),u=n("07fa"),f=n("8418"),d=n("9a1f"),h=n("35a1"),v=r.Array;e.exports=function(e){var t=a(e),n=l(this),r=arguments.length,p=r>1?arguments[1]:void 0,b=void 0!==p;b&&(p=o(p,r>2?arguments[2]:void 0));var m,y,g,x,w,E,_=h(t),k=0;if(!_||this==v&&s(_))for(m=u(t),y=n?new this(m):v(m);m>k;k++)E=b?p(t[k],k):t[k],f(y,k,E);else for(x=d(t,_),w=x.next,y=n?new this:[];!(g=i(w,x)).done;k++)E=b?c(x,p,[g.value,k],!0):g.value,f(y,k,E);return y.length=k,y}},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(D){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),a=new R(r||[]);return i._invoke=L(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(D){return{type:"throw",arg:D}}}e.wrap=l;var f="suspendedStart",d="suspendedYield",h="executing",v="completed",p={};function b(){}function m(){}function y(){}var g={};s(g,i,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(S([])));w&&w!==n&&r.call(w,i)&&(g=w);var E=y.prototype=b.prototype=Object.create(g);function _(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var o;function i(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(e,t,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return $()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=T(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?v:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function S(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:$}}function $(){return{value:t,done:!0}}return m.prototype=y,s(E,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},_(k.prototype),s(k.prototype,a,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(E),s(E,c,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9bdd":function(e,t,n){var r=n("825a"),o=n("2a62");e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(a){o(e,"throw",a)}}},a630:function(e,t,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:a},{from:o})},bf86:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v(" 设置 "),n("table-api-link",{attrs:{prop:"mouse-config"}}),e._v("={selected: true} 启用单元格选中功能"),n("span",{staticClass:"red"},[e._v("（只能用于 "),n("table-api-link",{attrs:{prop:"edit-config"}}),e._v("."),n("table-api-link",{attrs:{prop:"mode"}}),e._v("=cell 有效）")],1),n("br"),e._v(" 设置 "),n("table-api-link",{attrs:{prop:"keyboard-config"}}),e._v("={isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true} 启用按键功能及任意键编辑功能，方向键、回车键、Tab 键、Esc 键、F2 键、Del、Back 键"),n("br"),n("span",{staticClass:"red"},[e._v("（注：isEdit 启用任意键覆盖式编辑的）")])],1),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{attrs:{icon:"fa fa-plus"},on:{click:function(t){return e.insertEvent()}}},[e._v("新增")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTable.removeCheckboxRow()}}},[e._v("删除选中")]),n("vxe-button",{on:{click:e.getSelectionEvent}},[e._v("获取选中")]),n("vxe-button",{attrs:{icon:"fa fa-save"},on:{click:e.getInsertEvent}},[e._v("获取新增")])]},proxy:!0}])}),n("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"",height:"500",data:e.tableData,"mouse-config":{selected:!0},"checkbox-config":{range:!0},"context-menu":e.tableMenu,"keyboard-config":{isArrow:!0,isDel:!0,isEnter:!0,isTab:!0,isEdit:!0},"edit-config":{trigger:"dblclick",mode:"cell"}}},[n("vxe-table-column",{attrs:{type:"seq",width:"60"}}),n("vxe-table-column",{attrs:{type:"checkbox",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"role",title:"Role","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"num",title:"Number","edit-render":{name:"$input",props:{type:"number"}}}}),n("vxe-table-column",{attrs:{field:"address",title:"Address","edit-render":{name:"input"}}})],1),e._m(0),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",[e._v("\n      mouse-config 鼠标配置：\n        | Mouse + Left | (area) 鼠标选取指定范围的单元格 |\n        | Mouse + Right | (area) 鼠标选取选中位置的单元格 |\n        | Mouse + Left + Ctrl | (area) 鼠标选取多区域的单元格 |\n        | Mouse + Left | (extension) 鼠标左键按住右下角延伸按钮，将区域横向或纵向扩大 |\n      keyboard-config 按键配置：\n        | Ctrl + X | (isClip) 将单元格标记为剪贴状态并将内容复制到剪贴板，支持 Excel 和 WPS |\n        | Ctrl + C | (isClip) 将单元格标记为复制状态并将内容复制到剪贴板，支持 Excel 和 WPS |\n        | Ctrl + V | (isClip) 将剪贴板的内容粘贴到指定区域中，支持 Excel 和 WPS |\n        | Ctrl + M | (isMerge) 将选取的单元格合并或取消合并 |\n        | Ctrl + F | (isFNR) 查找数据，全表或查找指定区域数据 |\n        | Ctrl + H | (isFNR) 替换数据，全表或替换指定区域数据 |\n        | Arrow Up ↑ | （isArrow）如果存在，则移动到上面的单元格 |\n        | Arrow Down ↓ | （isArrow）如果存在，则移动到下面的单元格 |\n        | Arrow Left ← | （isArrow）如果存在，则移动到左边的单元格 |\n        | Arrow Right → | （isArrow）如果存在，则移动到右边的单元格 |\n        | Tab | （isTab）如果存在，则移动到右边单元格；如果存在区域，则在指定区域内移动；如果移动到最后一列，则从下一行开始移到，以此循环 |\n        | Tab + Shift | （isTab）如果存在，则移动到左边单元格，则在指定区域内移动；如果移动到第一列，则从上一行开始移到，以此循环 |\n        | Spacebar | (isChecked) 如果选取的区域存在复选框，则切换勾选状态 |\n        | Enter | （isEnter）如果存在，取消单元格编辑并移动到下面的单元格，则在指定区域内移动；如果移动到最后一行，则从下一列开始移到，以此循环 |\n        | Enter + Shift | （isEnter）如果存在，取消单元格编辑并移动到上面的单元格，则在指定区域内移动；如果移动到第一行，则从上一列开始移到，以此循环 |\n        | Delete | （isDel）清空单元格内容 |\n        | Backspace | （isDel）清空单元格内容并激活为编辑状态 |\n        | F2 | 如果存在，激活单元格为编辑状态 |\n        | Esc | 如果存在，取消单元格编辑状态 |\n        | * | （isEdit）按下除功能键之外的任意键激活覆盖式单元格编辑 |\n    ")]),e._v("\n  ")])}],i=n("1da1"),a=(n("96cf"),n("fb6a"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("f4e8")),c=n.n(a),s={data:function(){return{tableData:[],tableMenu:{body:{options:[[{code:"copy",name:"复制",prefixIcon:"fa fa-copy",disabled:!1},{code:"remove",name:"删除",disabled:!1},{code:"save",name:"保存",prefixIcon:"fa fa-save",disabled:!1}]]}},demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button icon="fa fa-plus" @click="insertEvent()">新增</vxe-button>\n            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n            <vxe-button @click="getSelectionEvent">获取选中</vxe-button>\n            <vxe-button icon="fa fa-save" @click="getInsertEvent">获取新增</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          ref="xTable"\n          height="500"\n          :data="tableData"\n          :mouse-config="{selected: true}"\n          :checkbox-config="{range: true}"\n          :context-menu="tableMenu"\n          :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"\n          :edit-config="{trigger: \'dblclick\', mode: \'cell\'}">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column type="checkbox" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="role" title="Role" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="num" title="Number" :edit-render="{name: \'$input\', props: {type: \'number\'}}"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" :edit-render="{name: \'input\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableMenu: {\n                body: {\n                  options: [\n                    [\n                      { code: 'copy', name: '复制', prefixIcon: 'fa fa-copy', disabled: false },\n                      { code: 'remove', name: '删除', disabled: false },\n                      { code: 'save', name: '保存', prefixIcon: 'fa fa-save', disabled: false }\n                    ]\n                  ]\n                }\n              }\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 20)\n          },\n          methods: {\n            async insertEvent () {\n              const record = {\n                sex: '1'\n              }\n              const { row: newRow } = await this.$refs.xTable.insertAt(record)\n              await this.$refs.xTable.setActiveCell(newRow, 'name')\n            },\n            getInsertEvent () {\n              const insertRecords = this.$refs.xTable.getInsertRecords()\n              this.$XModal.alert(insertRecords.length)\n            },\n            getSelectionEvent () {\n              const selectRecords = this.$refs.xTable.getCheckboxRecords()\n              this.$XModal.alert(selectRecords.length)\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,20)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){c.a.highlightBlock(e)}))},methods:{insertEvent:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={sex:"1"},t.next=3,e.$refs.xTable.insertAt(n);case 3:return r=t.sent,o=r.row,t.next=7,e.$refs.xTable.setActiveCell(o,"name");case 7:case"end":return t.stop()}}),t)})))()},getInsertEvent:function(){var e=this.$refs.xTable.getInsertRecords();this.$XModal.alert(e.length)},getSelectionEvent:function(){var e=this.$refs.xTable.getCheckboxRecords();this.$XModal.alert(e.length)}}},l=s,u=n("2877"),f=Object(u["a"])(l,r,o,!1,null,null,null);t["default"]=f.exports}}]);