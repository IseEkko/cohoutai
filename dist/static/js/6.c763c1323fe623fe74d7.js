webpackJsonp([6],{"7h8X":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"addBrand",components:{BrandDetail:n("FO5+").a}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("brand-detail",{attrs:{"is-edit":!1}})},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(e){n("soee")},null,null);t.default=o.exports},"FO5+":function(e,t,n){"use strict";var r=n("woOf"),a=n.n(r),o=n("MMfn"),s={letter:"",logo:"",name:"",sort:0},i={name:"BrandDetail",components:{SingleUpload:n("TZVV").a},props:{edit:{type:Boolean,default:!1}},data:function(){return{brand:a()({},s),isEdit:!1,rules:{name:[{required:!0,message:"请输入品牌名称",trigger:"blur"}],logo:[{required:!0,message:"请输入品牌logo",trigger:"blur"}]}}},created:function(){var e=this;this.$route.query.id?this.isEdit=!0:this.isEdit=!1,console.log("编辑平拍"),this.isEdit?Object(o.k)(this.$route.query.id).then(function(t){e.brand=t}):this.brand=a()({},s)},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(n){if(!n)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.isEdit?Object(o.D)(t.$route.query.id,t.brand).then(function(n){t.$refs[e].resetFields(),t.$message({message:"修改成功",type:"success",duration:1e3}),t.$router.back()}):Object(o.b)(t.brand).then(function(e){t.$message({message:"提交成功",type:"success",duration:1e3}),t.$router.push("/brand")})})})},resetForm:function(e){this.$refs[e].resetFields(),this.brand=a()({},s)}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[n("el-form",{ref:"brandFrom",attrs:{model:e.brand,rules:e.rules,"label-width":"150px"}},[n("el-form-item",{attrs:{label:"品牌名称：",prop:"name"}},[n("el-input",{model:{value:e.brand.name,callback:function(t){e.$set(e.brand,"name",t)},expression:"brand.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品牌LOGO：",prop:"logo"}},[n("single-upload",{model:{value:e.brand.logo,callback:function(t){e.$set(e.brand,"logo",t)},expression:"brand.logo"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("brandFrom")}}},[e._v("提交")]),e._v(" "),e.isEdit?e._e():n("el-button",{on:{click:function(t){e.resetForm("brandFrom")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(i,l,!1,function(e){n("fI4E")},null,null);t.a=u.exports},fI4E:function(e,t){},soee:function(e,t){}});
//# sourceMappingURL=6.c763c1323fe623fe74d7.js.map