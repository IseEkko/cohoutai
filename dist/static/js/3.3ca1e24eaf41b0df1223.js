webpackJsonp([3],{"6NFG":function(e,t,a){"use strict";var i=a("vLgD");var s={name:"ProductRelationDetail",props:{value:Object,isEdit:{type:Boolean,default:!1}},data:function(){return{subjectList:[],subjectTitles:["待选择","已选择"],prefrenceAreaList:[],prefrenceAreaTitles:["待选择","已选择"]}},created:function(){this.getSubjectList(),this.getPrefrenceAreaList()},computed:{selectSubject:{get:function(){var e=[];if(null==this.value.subjectProductRelationList||this.value.subjectProductRelationList.length<=0)return e;for(var t=0;t<this.value.subjectProductRelationList.length;t++)e.push(this.value.subjectProductRelationList[t].subjectId);return e},set:function(e){this.value.subjectProductRelationList=[];for(var t=0;t<e.length;t++)this.value.subjectProductRelationList.push({subjectId:e[t]})}},selectPrefrenceArea:{get:function(){var e=[];if(null==this.value.prefrenceAreaProductRelationList||this.value.prefrenceAreaProductRelationList.length<=0)return e;for(var t=0;t<this.value.prefrenceAreaProductRelationList.length;t++)e.push(this.value.prefrenceAreaProductRelationList[t].prefrenceAreaId);return e},set:function(e){this.value.prefrenceAreaProductRelationList=[];for(var t=0;t<e.length;t++)this.value.prefrenceAreaProductRelationList.push({prefrenceAreaId:e[t]})}}},methods:{filterMethod:function(e,t){return t.label.indexOf(e)>-1},getSubjectList:function(){var e=this;Object(i.a)({url:"/subject/listAll",method:"get"}).then(function(t){for(var a=t.data,i=0;i<a.length;i++)e.subjectList.push({label:a[i].title,key:a[i].id})})},getPrefrenceAreaList:function(){var e=this;Object(i.a)({url:"/prefrenceArea/listAll",method:"get"}).then(function(t){for(var a=t.data,i=0;i<a.length;i++)e.prefrenceAreaList.push({label:a[i].name,key:a[i].id})})},handlePrev:function(){this.$emit("prevStep")},handleFinishCommit:function(){this.$emit("finishCommit",this.isEdit)}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"50px"}},[a("el-form",{ref:"productRelationForm",staticStyle:{width:"680px"},attrs:{model:e.value,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"关联专题："}},[a("el-transfer",{staticStyle:{display:"inline-block"},attrs:{filterable:"","filter-method":e.filterMethod,"filter-placeholder":"请输入专题名称",titles:e.subjectTitles,data:e.subjectList},model:{value:e.selectSubject,callback:function(t){e.selectSubject=t},expression:"selectSubject"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"关联优选："}},[a("el-transfer",{staticStyle:{display:"inline-block"},attrs:{filterable:"","filter-method":e.filterMethod,"filter-placeholder":"请输入优选名称",titles:e.prefrenceAreaTitles,data:e.prefrenceAreaList},model:{value:e.selectPrefrenceArea,callback:function(t){e.selectPrefrenceArea=t},expression:"selectPrefrenceArea"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{size:"medium"},on:{click:e.handlePrev}},[e._v("上一步，填写商品属性")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.handleFinishCommit}},[e._v("完成，提交商品")])],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(s,l,!1,function(e){a("wTpJ")},"data-v-e176cc12",null);t.a=r.exports},Blas:function(e,t){},N3DD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("woOf"),s=a.n(i),l=(a("mRsl"),a("s/Rn"),a("MMfn")),r={name:"ProductInfoDetail",props:{},components:{MultiUpload:a("sl7S").a},data:function(){return{hasEditCreated:!1,selectProductCateValue:[],selectProductSecondCateValue:[],selectProductThirdCateValue:[],id:"",value:{images:[],brand:0},shipList:[{value:!0,label:"是"},{value:!1,label:"否"}],img1:[],img2:[],img3:[],selectProductPics:[],disabled:!1,isEdit:!1,imgList:[],productCateOptions:[],brandOptions:[],rules:{name:[{required:!0,message:"请输入商品名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],subTitle:[{required:!0,message:"请输入商品副标题",trigger:"blur"}],productCategoryId:[{required:!0,message:"请选择商品分类",trigger:"blur"}],brandId:[{required:!0,message:"请选择商品品牌",trigger:"blur"}],description:[{required:!0,message:"请输入商品介绍",trigger:"blur"}],requiredProp:[{required:!0,message:"该项为必填项",trigger:"blur"}]}}},created:function(){this.getProductCateList(),console.log(this.$route.query),this.initData(),this.getBrandsList()},computed:{productId:function(){return this.value.id}},watch:{value:function(e){console.log(e)},productId:function(e){this.isEdit&&(this.hasEditCreated||void 0!==e&&null!=e&&0!==e&&this.handleEditCreated())}},methods:{handleEditCreated:function(){null!=this.value.productCategoryId&&(this.selectProductCateValue.push(this.value.cateParentId),this.selectProductCateValue.push(this.value.productCategoryId)),this.hasEditCreated=!0},multiInput:function(e){console.log("tupian",this.value.images),this.img1=e,this.value.images=e.map(function(e){return e.url}),this.images_imgs=this.value.images_imgs},multiInput2:function(e){this.img2=e,console.log("tupian222",this.value),this.value.desc_images=e.map(function(e){return e.url}),this.$forceUpdate(),this.desc_images=this.value.desc_images},multiInput3:function(e){this.img3=e,console.log("tupian333",this.value),this.value.front_image=e.map(function(e){return e.url}),this.$forceUpdate(),console.log("bobby1"),console.log(this.value.front_image),console.log(this.value.front_image[0]),console.log("bobby2"),this.value.front_image=this.value.front_image[0]},handleCateChange:function(e){var t=this;console.log(e),this.value.category=e,this.selectProductCateValue.forEach(function(a){a.id==e&&(t.selectProductSecondCateValue=a.sub_category)}),this.getBrandsBy(e)},handleSecondCateChange:function(e){var t=this;this.value.category=e,this.selectProductSecondCateValue.forEach(function(a){a.id==e&&(t.selectProductThirdCateValue=a.sub_category)}),this.getBrandsBy(e)},handleThirdCateChange:function(e){this.value.category=e,this.getBrandsBy(e)},getBrandsBy:function(e){var t=this;Object(l.n)(e).then(function(e){t.brandOptions=e})},initData:function(){this.$route.query.id&&(this.disabled=!0,this.isEdit=!0)},edit:function(){this.disabled=!1},getProductCateList:function(){var e=this;Object(l.q)().then(function(t){console.log("分类",t),e.selectProductCateValue=t,e.$route.query.id&&(e.id=e.$route.query.id)})},getBrandsList:function(){var e=this;Object(l.m)().then(function(t){console.log("分类",t),e.brandOptions=t})},getGoods:function(){var e=this;Object(l.s)(this.id).then(function(t){e.value.images,e.images_imgs=t.images||[],e.desc_imgs=t.desc_images||[],e.value=t,e.value.front_image=[{url:t.front_image}],e.value.brand=t.brand,e.value.images=t.images.map(function(e){return{url:e}}),e.value.desc_images=t.desc_images.map(function(e){return{url:e}}),e.img1=e.value.images,e.img2=e.value.desc_images,e.img3=e.value.front_image,console.log(e.img1,e.img2,e.img3);var a=t.category.id;e.selectProductCateValue.forEach(function(t){t.id==a?(e.value.first_cate=a,e.selectProductSecondCateValue=t.sub_category):t.sub_category&&t.sub_category.length>0&&t.sub_category.forEach(function(i){i.id==a?(e.value.second_cate=a,e.value.first_cate=t.id,e.selectProductThirdCateValue=i.sub_category):i.sub_category&&i.sub_category.length>0&&i.sub_category.forEach(function(s){s.id==a&&(e.value.third_cate=a,e.value.second_cate=i.id,e.selectProductThirdCateValue=i.sub_category,e.selectProductSecondCateValue=t.sub_category,e.value.first_cate=t.id)})})})})},getCateNameById:function(e){for(var t=null,a=0;a<this.productCateOptions.length;a++)for(var i=0;i<this.productCateOptions[a].children.length;i++)if(this.productCateOptions[a].children[i].value===e)return t=this.productCateOptions[a].children[i].label;return t},handleNext:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$emit("finishCommit")})},finishCommit:function(){var e=this;this.value.shop_price=Number(this.value.shop_price)||0,this.value.stocks=Number(this.value.stocks)||0,this.value.market_price=Number(this.value.market_price)||0,this.value.category=this.value.third_cate||this.value.second_cate||this.value.first_cate,delete this.value.first_cate,delete this.value.second_cate,delete this.value.third_cate,this.isEdit?Object(l.F)(this.id,this.value).then(function(t){e.$notify({title:"提示",message:"修改成功",type:"success"}),e.$router.push("/product")}).catch(function(t){e.$notify({title:"提示",message:t.msg,type:"success"})}):Object(l.d)(this.value).then(function(t){console.log("sdfsdfsdf"),e.$notify({title:"提示",message:"新建成功",type:"success"}),e.$router.push("/product")}).catch(function(t){console.log("cuowu"),e.$notify({title:"提示",message:t.msg,type:"success"})})},handleBrandChange:function(e){}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"50px"}},[a("el-form",{ref:"productInfoForm",staticStyle:{width:"600px"},attrs:{model:e.value,rules:e.rules,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"商品名称：",prop:"name"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.value.name,callback:function(t){e.$set(e.value,"name",t)},expression:"value.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"市场价：",prop:"name"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.value.market_price,callback:function(t){e.$set(e.value,"market_price",t)},expression:"value.market_price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"库存：",prop:"name"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.value.stocks,callback:function(t){e.$set(e.value,"stocks",t)},expression:"value.stocks"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品编码",prop:"name"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.value.goods_sn,callback:function(t){e.$set(e.value,"goods_sn",t)},expression:"value.goods_sn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"销售价：",prop:"name"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.value.shop_price,callback:function(t){e.$set(e.value,"shop_price",t)},expression:"value.shop_price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否免运费：",prop:"name"}},[a("el-switch",{attrs:{"active-value":!0,"inactive-value":!1,disabled:e.disabled},model:{value:e.value.ship_free,callback:function(t){e.$set(e.value,"ship_free",t)},expression:"value.ship_free"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品分类：",prop:"brand"}},[a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择一级分类"},on:{change:e.handleCateChange},model:{value:e.value.first_cate,callback:function(t){e.$set(e.value,"first_cate",t)},expression:"value.first_cate"}},e._l(e.selectProductCateValue,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),e.value.first_cate?a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择二级分类"},on:{change:e.handleSecondCateChange},model:{value:e.value.second_cate,callback:function(t){e.$set(e.value,"second_cate",t)},expression:"value.second_cate"}},e._l(e.selectProductSecondCateValue,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})):e._e(),e._v(" "),e.value.second_cate?a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择三级分类"},on:{change:e.handleThirdCateChange},model:{value:e.value.third_cate,callback:function(t){e.$set(e.value,"third_cate",t)},expression:"value.third_cate"}},e._l(e.selectProductThirdCateValue,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"商品品牌：",prop:"brandId"}},[a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择品牌"},on:{change:e.handleBrandChange},model:{value:e.value.brand,callback:function(t){e.$set(e.value,"brand",t)},expression:"value.brand"}},e._l(e.brandOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"商品相册："}},[a("multi-upload",{key:"images",attrs:{disabled:e.disabled},on:{input:e.multiInput},model:{value:e.img1,callback:function(t){e.img1=t},expression:"img1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品简介：",prop:"name"}},[a("el-input",{attrs:{type:"textarea",disabled:e.disabled},model:{value:e.value.goods_brief,callback:function(t){e.$set(e.value,"goods_brief",t)},expression:"value.goods_brief"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品详情图片："}},[a("multi-upload",{key:"desc-images",attrs:{disabled:e.disabled},on:{input:e.multiInput2},model:{value:e.img2,callback:function(t){e.img2=t},expression:"img2"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品封面："}},[a("multi-upload",{key:"front-images",attrs:{multiple:!1,disabled:e.disabled,maxCount:1},on:{input:e.multiInput3},model:{value:e.img3,callback:function(t){e.img3=t},expression:"img3"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"text-align":"center"}},[e.disabled?a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.edit()}}},[e._v("编辑")]):a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.finishCommit("productInfoForm")}}},[e._v("确认")])],1)],1)],1)},staticRenderFns:[]};var o={albumPics:"",brandId:null,brandName:"",deleteStatus:0,description:"",detailDesc:"",detailHtml:"",detailMobileHtml:"",detailTitle:"",feightTemplateId:0,flashPromotionCount:0,flashPromotionId:0,flashPromotionPrice:0,flashPromotionSort:0,giftPoint:0,giftGrowth:0,keywords:"",lowStock:0,name:"",newStatus:0,note:"",originalPrice:0,pic:"",memberPriceList:[],productFullReductionList:[{fullPrice:0,reducePrice:0}],productLadderList:[{count:0,discount:0,price:0}],previewStatus:0,price:0,productAttributeCategoryId:null,productAttributeValueList:[],skuStockList:[],subjectProductRelationList:[],prefrenceAreaProductRelationList:[],productCategoryId:null,productCategoryName:"",productSn:"",promotionEndTime:"",promotionPerLimit:0,promotionPrice:null,promotionStartTime:"",promotionType:0,publishStatus:0,recommandStatus:0,sale:0,serviceIds:"",sort:"",stock:0,subTitle:"",unit:"",usePointLimit:0,verifyStatus:0,weight:0},u={name:"ProductDetail",components:{ProductInfoDetail:a("VU/8")(r,n,!1,function(e){a("YMcl")},"data-v-66a53efb",null).exports,ProductRelationDetail:a("6NFG").a},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{active:0,productParam:s()({},o),showStatus:[!0,!1,!1,!1]}},created:function(){this.isEdit},methods:{hideAll:function(){for(var e=0;e<this.showStatus.length;e++)this.showStatus[e]=!1},prevStep:function(){this.active>0&&this.active<this.showStatus.length&&(this.active--,this.hideAll(),this.showStatus[this.active]=!0)},nextStep:function(){this.active<this.showStatus.length-1&&(this.active++,this.hideAll(),this.showStatus[this.active]=!0)},finishCommit:function(e){var t=this;this.$confirm("是否要提交该产品","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e?Object(l.F)(t.$route.query.id,t.productParam).then(function(e){t.$message({type:"success",message:"提交成功",duration:1e3}),t.$router.back()}):Object(l.d)(t.productParam).then(function(e){t.$message({type:"success",message:"提交成功",duration:1e3}),location.reload()})})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[a("product-info-detail",{directives:[{name:"show",rawName:"v-show",value:e.showStatus[0],expression:"showStatus[0]"}],attrs:{"is-edit":e.isEdit},on:{finishCommit:e.finishCommit},model:{value:e.productParam,callback:function(t){e.productParam=t},expression:"productParam"}})],1)},staticRenderFns:[]};var d={name:"addProduct",components:{ProductDetail:a("VU/8")(u,c,!1,function(e){a("kCiI")},null,null).exports}},h={render:function(){var e=this.$createElement;return(this._self._c||e)("product-detail",{attrs:{"is-edit":!1}})},staticRenderFns:[]};var m=a("VU/8")(d,h,!1,function(e){a("Blas")},null,null);t.default=m.exports},YMcl:function(e,t){},kCiI:function(e,t){},wTpJ:function(e,t){}});
//# sourceMappingURL=3.3ca1e24eaf41b0df1223.js.map