webpackJsonp([12],{QZRk:function(t,e){},UgCr:function(t,e,a){"use strict";e.a=function(t){return Object(n.a)({url:"/product/update/deleteStatus",method:"post",params:t})},e.b=function(t){return Object(n.a)({url:"/product/update/newStatus",method:"post",params:t})},e.c=function(t){return Object(n.a)({url:"/product/update/recommendStatus",method:"post",params:t})};var n=a("vLgD")},caBC:function(t,e,a){"use strict";e.a=function(t,e){return Object(n.a)({url:"/sku/"+t,method:"get",params:e})};var n=a("vLgD")},tVh0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("UgCr"),a("caBC"),a("3idm");var n=a("MMfn"),l=(a("mRsl"),{name:"userList",data:function(){return{editSkuInfo:{dialogVisible:!1,productId:null,productSn:"",productAttributeCategoryId:null,stockList:[],productAttr:[],keyword:null,pageNum:0},genderDic:{male:"男",female:"女"},operates:[{label:"商品上架",value:"publishOn"},{label:"商品下架",value:"publishOff"},{label:"设为推荐",value:"recommendOn"},{label:"取消推荐",value:"recommendOff"},{label:"设为新品",value:"newOn"},{label:"取消新品",value:"newOff"},{label:"转移到分类",value:"transferCategory"},{label:"移入回收站",value:"recycle"}],operateType:null,listQuery:{pn:1,pnum:20},list:[],total:null,listLoading:!0,selectProductCateValue:null,multipleSelection:[],productCateOptions:[],brandOptions:[],publishStatusOptions:[{value:1,label:"上架"},{value:0,label:"下架"}],verifyStatusOptions:[{value:1,label:"审核通过"},{value:0,label:"未审核"}]}},created:function(){this.getList()},watch:{selectProductCateValue:function(t){null!=t&&2==t.length?this.listQuery.productCategoryId=t[1]:this.listQuery.productCategoryId=null}},filters:{verifyStatusFilter:function(t){return 1===t?"审核通过":"未审核"}},methods:{getList:function(){var t=this;this.listLoading=!0,Object(n.w)(this.listQuery).then(function(e){t.listLoading=!1,t.list=t.list.concat(e.data),t.total=e.total,t.pageNum=t.listQuery.pn,t.listQuery.pn=e.data.length==t.listQuery.pnum?t.listQuery.pn+2:t.listQuery.pn})},handleSizeChange:function(t){this.listQuery.pn=1,this.listQuery.pnum=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pn=t,this.getList()}}}),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets"}),t._v(" "),a("span",[t._v("用户列表")])]),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"productTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{label:"用户姓名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"用户性别",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.genderDic[e.row.gender]))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"电话",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.mobile))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"生日",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.birthday))]}}])})],1)],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNum=e}}})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(l,r,!1,function(t){a("QZRk")},null,null);e.default=u.exports}});
//# sourceMappingURL=12.d36b692595921b5ae0ca.js.map