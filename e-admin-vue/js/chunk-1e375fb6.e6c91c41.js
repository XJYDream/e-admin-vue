(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e375fb6"],{"1b62":function(e,t,r){"use strict";var n={data:function(){return{params:{page:1,size:10}}},methods:{handleSizeChange:function(e){this.params.size=e,this.params.page=1,this.query()},handleCurrentChange:function(e){this.params.page=e,this.query()},changeQuery:function(){this.params.page=1,this.params.size=10,this.query()}}};r.d(t,"a",(function(){return n}))},"6c6e":function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"g",(function(){return c})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return l}));var n=r("a27e"),a=function(e){return Object(n["a"])({method:"get",url:"/resource",params:e})},s=function(e){return Object(n["a"])({method:"get",url:"/resource/total",params:e})},o=function(e){return Object(n["a"])({method:"get",url:"/resource/dir",params:e})},i=function(e){return Object(n["a"])({method:"post",url:"/resource",data:e})},c=function(e){return Object(n["a"])({method:"put",url:"/resource",data:e})},u=function(e){return Object(n["a"])({method:"patch",url:"/resource",data:e})},l=function(e){return Object(n["a"])({method:"delete",url:"/resource/".concat(e.id),params:e})}},"7af4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{staticClass:"com-form media-form",attrs:{"label-width":"80px",size:"small"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"角色名"}},[r("el-input",{attrs:{placeholder:"请输入角色名",clearable:""},on:{clear:e.changeQuery},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changeQuery(t)}},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"","label-width":"0px"}},[r("el-button",{attrs:{type:"primary",loading:e.querying},on:{click:e.changeQuery}},[e._v("查询")]),r("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("添加")])],1)],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],staticClass:"com-table",attrs:{data:e.list},on:{"sort-change":e.handleSortChange}},[r("el-table-column",{attrs:{align:"center",prop:"name",label:"角色名"}}),r("el-table-column",{attrs:{align:"center",prop:"description",label:"角色描述"}}),r("el-table-column",{attrs:{align:"center",label:"添加时间",prop:"createdAt",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v("\n        "+e._s(e._f("formatDateTime")(r.createdAt))+"\n      ")]}}])}),r("el-table-column",{attrs:{align:"center",label:"修改时间",prop:"updatedAt",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v("\n        "+e._s(e._f("formatDateTime")(r.updatedAt))+"\n      ")]}}])}),r("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return["超级管理员"===n.name?[e._v("\n          -\n        ")]:[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(n)}}},[e._v("\n            编辑\n          ")]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(n)}}},[e._v("\n            删除\n          ")])]]}}])})],1),e.total?r("el-pagination",{staticClass:"com-pagination",attrs:{small:"",background:"","current-page":e.params.page,"page-size":e.params.size,"page-sizes":e.pageSizes,layout:e.paginationLayout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e(),r("edit",{ref:"dialog",on:{success:e.query}})],1)},a=[],s=(r("96cf"),r("3b8d")),o=r("cc5e"),i=r("1b62"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,visible:e.visible,width:"600px","close-on-click-modal":e.dialogModalClose,"close-on-press-escape":e.dialogEscClose},on:{close:e.onClose}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],ref:"form",staticClass:"form",attrs:{"label-width":"96px",model:e.form,rules:e.rules,size:"small"}},[r("el-form-item",{attrs:{label:"角色名: ",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入角色名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"角色描述: ",prop:"description"}},[r("el-input",{attrs:{placeholder:"请输入角色描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("el-form-item",{attrs:{label:"可用权限：",prop:"remark"}},[r("el-tree",{ref:"tree",attrs:{data:e.resourceList,"show-checkbox":"","default-checked-keys":e.checkedKeys,"node-key":"id",props:{children:"children",label:"name"}}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:e.onClose}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary",size:"small",loading:e.submiting},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)},u=[],l=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),p=(r("7f7f"),r("6c6e")),d=r("ed08");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={data:function(){return{visible:!1,submiting:!1,querying:!1,title:"添加",id:null,form:{name:"",description:""},resourceList:[],checkedKeys:[],rules:{name:[{required:!0,message:"请输入权限名",trigger:"blur"}],description:[{required:!0,message:"请输入权限名",trigger:"blur"}]}}},methods:{open:function(e){var t=this;this.visible=!0,this.title=e?"编辑":"添加",this.query(),e&&(this.id=e.id,this.$nextTick((function(){t.form={name:e.name,description:e.description}})),this.checkedKeys=e.resources.filter((function(e){return"2"===e.type})).map((function(e){return e.id})))},query:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.querying=!0,e.next=4,Object(p["e"])();case 4:t=e.sent,t.success&&(r=t.data||[],n=Object(d["a"])(r,null,"code","parentCode"),this.resourceList=n),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:return e.prev=11,this.querying=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));function t(){return e.apply(this,arguments)}return t}(),onSubmit:function(){var e=this;this.$refs.form.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var n,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=25;break}if(t.prev=1,e.submiting=!0,n={},a=e.$refs.tree.getCheckedNodes(!1,!1),s=a.map((function(e){return e.id})),i=e.$refs.tree.getHalfCheckedKeys(),!e.id){t.next=13;break}return t.next=10,Object(o["e"])(m({},e.form,{id:e.id,resources:i.concat(s)}));case 10:n=t.sent,t.next=16;break;case 13:return t.next=15,Object(o["a"])(m({},e.form,{resources:i.concat(s)}));case 15:n=t.sent;case 16:n.success&&(e.$message.closeAll(),e.$message.success(e.id?"修改成功":"添加成功"),e.visible=!1,e.$emit("success")),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](1),console.log(t.t0);case 22:return t.prev=22,e.submiting=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[1,19,22,25]])})));return function(e){return t.apply(this,arguments)}}())},onClose:function(){this.visible=!1,this.id=null,this.$refs.form.resetFields(),this.resourceList=[],this.checkedKeys=[]}}},b=h,g=r("2877"),y=Object(g["a"])(b,c,u,!1,null,null,null),v=y.exports,O={mixins:[i["a"]],components:{Edit:v},data:function(){return{querying:!1,list:[],total:0,params:{page:1,size:10,name:""}}},mounted:function(){this.query()},methods:{query:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.querying=!0,e.next=4,Object(o["c"])(this.params);case 4:t=e.sent,t.success&&(r=t.data||{},n=r.list||[],a=r.total||0,this.list=n,this.total=a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:return e.prev=11,this.querying=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));function t(){return e.apply(this,arguments)}return t}(),handleSortChange:function(e){this.params.page=1,this.params.size=10,e.prop&&e.order?(this.params.sortProp=e.prop,this.params.sortOrder="ascending"===e.order?1:-1):(this.params.sortProp=null,this.params.sortOrder=null),this.query()},handleCreate:function(){this.$refs.dialog.open()},handleEdit:function(e){this.$refs.dialog.open(e)},handleDelete:function(e){var t=this;this.$confirm("确定要删除吗？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(o["b"])({id:e.id});case 3:n=r.sent,n.success&&(t.$message.closeAll(),t.$message.success("删除成功"),t.query()),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))))}}},k=O,j=Object(g["a"])(k,n,a,!1,null,null,null),w=j.exports;r.d(t,"default",(function(){return w}))},cc5e:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return s})),r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return c}));var n=r("a27e"),a=function(e){return Object(n["a"])({method:"get",url:"/role",params:e})},s=function(){return Object(n["a"])({method:"get",url:"/role/total"})},o=function(e){return Object(n["a"])({method:"post",url:"/role",data:e})},i=function(e){return Object(n["a"])({method:"put",url:"/role",data:e})},c=function(e){return Object(n["a"])({method:"delete",url:"/role/".concat(e.id)})}},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("8e6e"),r("456d");var n=r("bd86");r("ac6a");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r,n){var a=[],i=e.filter((function(e){return e[n]===t}));return i.forEach((function(t){a.push(s({},t,{children:o(e,t[r],r,n)}))})),a}}}]);
//# sourceMappingURL=chunk-1e375fb6.e6c91c41.js.map