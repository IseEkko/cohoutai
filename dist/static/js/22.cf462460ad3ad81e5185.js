webpackJsonp([22],{FOYG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("s/Rn"),i=n("MMfn"),s={name:"brandList",data:function(){return{operates:[{label:"显示品牌",value:"showBrand"},{label:"隐藏品牌",value:"hideBrand"}],operateType:null,pageNum:0,listQuery:{pn:1,pnum:10},list:[],total:null,listLoading:!0,multipleSelection:[]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i.m)(this.listQuery).then(function(e){t.listLoading=!1,t.list=t.list.concat(e.data||[]),t.total=e.total,t.totalPage=e.data.totalPage,t.pageSize=e.data.pageSize,t.pageNum=t.listQuery.pn,t.listQuery.pn=e.data.length==t.listQuery.pnum?t.listQuery.pn+2:t.listQuery.pn})},handleSelectionChange:function(t){this.multipleSelection=t},handleUpdate:function(t,e){this.$router.push({path:"/updateBrand",query:{id:e.id}})},handleDelete:function(t,e){var n=this;this.$confirm("是否要删除该品牌","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.g)(e.id).then(function(t){n.$message({message:"删除成功",type:"success",duration:1e3}),n.getList()})})},getProductList:function(t,e){console.log(t,e)},getProductCommentList:function(t,e){console.log(t,e)},handleFactoryStatusChange:function(t,e){var n=this,i=new URLSearchParams;i.append("ids",e.id),i.append("factoryStatus",e.factoryStatus),Object(a.a)(i).then(function(t){n.$message({message:"修改成功",type:"success",duration:1e3})}).catch(function(t){0===e.factoryStatus?e.factoryStatus=1:e.factoryStatus=0})},handleShowStatusChange:function(t,e){var n=this,i=new URLSearchParams;i.append("ids",e.id),i.append("showStatus",e.showStatus),Object(a.b)(i).then(function(t){n.$message({message:"修改成功",type:"success",duration:1e3})}).catch(function(t){0===e.showStatus?e.showStatus=1:e.showStatus=0})},handleSizeChange:function(t){this.listQuery.pn=1,this.listQuery.pnum=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pn=t,this.getList()},searchBrandList:function(){this.listQuery.pageNum=1,this.getList()},handleBatchOperate:function(){var t=this;if(console.log(this.multipleSelection),this.multipleSelection<1)this.$message({message:"请选择一条记录",type:"warning",duration:1e3});else{var e=0;if("showBrand"===this.operateType)e=1;else{if("hideBrand"!==this.operateType)return void this.$message({message:"请选择批量操作类型",type:"warning",duration:1e3});e=0}for(var n=[],i=0;i<this.multipleSelection.length;i++)n.push(this.multipleSelection[i].id);var s=new URLSearchParams;s.append("ids",n),s.append("showStatus",e),Object(a.b)(s).then(function(e){t.getList(),t.$message({message:"修改成功",type:"success",duration:1e3})})}},addBrand:function(){this.$router.push({path:"/addBrand"})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("i",{staticClass:"el-icon-tickets"}),t._v(" "),n("span",[t._v("数据列表")]),t._v(" "),n("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){t.addBrand()}}},[t._v("\n      添加\n    ")])],1),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"brandTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{label:"品牌id",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"品牌名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticClass:"imgs",attrs:{src:t.row.logo,alt:""}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.handleUpdate(e.$index,e.row)}}},[t._v("编辑\n          ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pnum,"current-page":t.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNum=e}}})],1)],1)},staticRenderFns:[]};var o=n("VU/8")(s,l,!1,function(t){n("Myzi")},"data-v-38e4acee",null);e.default=o.exports},Myzi:function(t,e){}});
//# sourceMappingURL=22.cf462460ad3ad81e5185.js.map