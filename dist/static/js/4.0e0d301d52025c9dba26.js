webpackJsonp([4],{"3fzM":function(e,t){},FWz8:function(e,t,i){"use strict";t.a=function(e){return Object(n.a)({url:"/order/update/close",method:"post",params:e})},t.b=function(e){return Object(n.a)({url:"/order/delete",method:"post",params:e})},t.e=function(e){return Object(n.a)({url:"/order/update/receiverInfo",method:"post",data:e})},t.c=function(e){return Object(n.a)({url:"/order/update/moneyInfo",method:"post",data:e})},t.d=function(e){return Object(n.a)({url:"/order/update/note",method:"post",params:e})};var n=i("vLgD")},g5t5:function(e,t,i){"use strict";var n=i("woOf"),r=i.n(n),l=[{name:"订单已提交，等待付款",time:"2017-04-01 12:00:00 "},{name:"订单付款成功",time:"2017-04-01 12:00:00 "},{name:"在北京市进行下级地点扫描，等待付款",time:"2017-04-01 12:00:00 "},{name:"在分拨中心广东深圳公司进行卸车扫描，等待付款",time:"2017-04-01 12:00:00 "},{name:"在广东深圳公司进行发出扫描",time:"2017-04-01 12:00:00 "},{name:"到达目的地网点广东深圳公司，快件将很快进行派送",time:"2017-04-01 12:00:00 "},{name:"订单已签收，期待再次为您服务",time:"2017-04-01 12:00:00 "}],s={name:"logisticsDialog",props:{value:Boolean},computed:{visible:{get:function(){return this.value},set:function(e){this.value=e}}},data:function(){return{logisticsList:r()({},l)}},methods:{emitInput:function(e){this.$emit("input",e)},handleClose:function(){this.emitInput(!1)}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"订单跟踪",visible:e.visible,"before-close":e.handleClose,width:"40%"},on:{"update:visible":function(t){e.visible=t}}},[i("el-steps",{attrs:{direction:"vertical",active:6,"finish-status":"success",space:"50px"}},e._l(e.logisticsList,function(e){return i("el-step",{key:e.name,attrs:{title:e.name,description:e.time}})}))],1)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(e){i("3fzM")},null,null);t.a=o.exports},u5in:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("woOf"),r=i.n(n),l=i("FWz8"),s=i("MMfn"),a=i("xT6B"),o={pageNum:1,pageSize:10,orderSn:null,receiverKeyword:null,status:null,orderType:null,sourceType:null,createTime:null},u={name:"orderList",components:{LogisticsDialog:i("g5t5").a},data:function(){return{listQuery:r()({},o),listLoading:!0,list:[],total:null,operateType:null,pageNum:0,multipleSelection:[],closeOrder:{dialogVisible:!1,content:null,orderIds:[]},statusOptions:[{label:"待付款",value:0},{label:"待发货",value:1},{label:"已发货",value:2},{label:"已完成",value:3},{label:"已关闭",value:4}],orderTypeOptions:[{label:"正常订单",value:0},{label:"秒杀订单",value:1}],sourceTypeOptions:[{label:"PC订单",value:0},{label:"APP订单",value:1}],operateOptions:[{label:"批量发货",value:1},{label:"关闭订单",value:2},{label:"删除订单",value:3}],logisticsDialogVisible:!1}},created:function(){this.getList()},filters:{formatCreateTime:function(e){var t=new Date(e);return Object(a.a)(t,"yyyy-MM-dd hh:mm:ss")},formatPayType:function(e){return 1===e?"支付宝":2===e?"微信":"未支付"},formatSourceType:function(e){return 1===e?"APP订单":"PC订单"},formatStatus:function(e){return 1===e?"待发货":2===e?"已发货":3===e?"已完成":4===e?"已关闭":5===e?"无效订单":"待付款"}},methods:{handleResetSearch:function(){this.listQuery=r()({},o)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},handleViewOrder:function(e,t){this.$router.push({path:"/oms/orderDetail",query:{id:t.id}})},handleCloseOrder:function(e,t){this.closeOrder.dialogVisible=!0,this.closeOrder.orderIds=[t.id]},handleDeliveryOrder:function(e,t){var i=this.covertOrder(t);this.$router.push({path:"/oms/deliverOrderList",query:{list:[i]}})},handleViewLogistics:function(e,t){this.logisticsDialogVisible=!0},handleDeleteOrder:function(e,t){var i=[];i.push(t.id),this.deleteOrder(i)},handleBatchOperate:function(){if(null==this.multipleSelection||this.multipleSelection.length<1)this.$message({message:"请选择要操作的订单",type:"warning",duration:1e3});else if(1===this.operateType){for(var e=[],t=0;t<this.multipleSelection.length;t++)1===this.multipleSelection[t].status&&e.push(this.covertOrder(this.multipleSelection[t]));if(0===e.length)return void this.$message({message:"选中订单中没有可以发货的订单",type:"warning",duration:1e3});this.$router.push({path:"/oms/deliverOrderList",query:{list:e}})}else if(2===this.operateType){this.closeOrder.orderIds=[];for(var i=0;i<this.multipleSelection.length;i++)this.closeOrder.orderIds.push(this.multipleSelection[i].id);this.closeOrder.dialogVisible=!0}else if(3===this.operateType){for(var n=[],r=0;r<this.multipleSelection.length;r++)n.push(this.multipleSelection[r].id);this.deleteOrder(n)}},handleSizeChange:function(e){this.listQuery.pn=1,this.listQuery.pnum=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pn=e,this.getList()},handleCloseOrderConfirm:function(){var e=this;if(null!=this.closeOrder.content&&""!==this.closeOrder.content){var t=new URLSearchParams;t.append("ids",this.closeOrder.orderIds),t.append("note",this.closeOrder.content),Object(l.a)(t).then(function(t){e.closeOrder.orderIds=[],e.closeOrder.dialogVisible=!1,e.getList(),e.$message({message:"修改成功",type:"success",duration:1e3})})}else this.$message({message:"操作备注不能为空",type:"warning",duration:1e3})},getList:function(){var e=this;this.listLoading=!0,Object(s.u)(this.listQuery).then(function(t){e.listLoading=!1,e.list=e.list.concat(t.data),e.total=t.total,e.pageNum=e.listQuery.pn,e.listQuery.pn=t.data.length==e.listQuery.pnum?e.listQuery.pn+1:e.listQuery.pn})},deleteOrder:function(e){var t=this;this.$confirm("是否要进行该删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i=new URLSearchParams;i.append("ids",e),Object(l.b)(i).then(function(e){t.$message({message:"删除成功！",type:"success",duration:1e3}),t.getList()})})},covertOrder:function(e){var t=e.receiverProvince+e.receiverCity+e.receiverRegion+e.receiverDetailAddress;return{orderId:e.id,orderSn:e.orderSn,receiverName:e.receiverName,receiverPhone:e.receiverPhone,receiverPostCode:e.receiverPostCode,address:t,deliveryCompany:null,deliverySn:null}}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[i("i",{staticClass:"el-icon-tickets"}),e._v(" "),i("span",[e._v("数据列表")])]),e._v(" "),i("div",{staticClass:"table-container"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"orderTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{label:"编号",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"收货地址",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.address))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"联系电话",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.mobile))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"联系人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"订单金额",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("￥"+e._s(t.row.total))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"支付方式",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatPayType")(t.row.post)))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"订单状态",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatStatus")(t.row.status)))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){e.handleViewOrder(t.$index,t.row)}}},[e._v("查看订单")])]}}])})],1)],1),e._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","current-page":e.pageNum,"page-size":e.listQuery.pnum,"page-sizes":[5,10,15],total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNum=t}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"关闭订单",visible:e.closeOrder.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.$set(e.closeOrder,"dialogVisible",t)}}},[i("span",{staticStyle:{"vertical-align":"top"}},[e._v("操作备注：")]),e._v(" "),i("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:e.closeOrder.content,callback:function(t){e.$set(e.closeOrder,"content",t)},expression:"closeOrder.content"}}),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.closeOrder.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleCloseOrderConfirm}},[e._v("确 定")])],1)],1),e._v(" "),i("logistics-dialog",{model:{value:e.logisticsDialogVisible,callback:function(t){e.logisticsDialogVisible=t},expression:"logisticsDialogVisible"}})],1)},staticRenderFns:[]};var d=i("VU/8")(u,c,!1,function(e){i("wxqk")},"data-v-68280087",null);t.default=d.exports},wxqk:function(e,t){},xT6B:function(e,t,i){"use strict";function n(e){return("00"+e).substr(e.length)}t.a=function(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var i={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in i)if(new RegExp("("+r+")").test(t)){var l=i[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?l:n(l))}return t}}});
//# sourceMappingURL=4.0e0d301d52025c9dba26.js.map