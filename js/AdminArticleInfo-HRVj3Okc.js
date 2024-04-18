import{u as U}from"./adminProductStore-XiFNhrHl.js";import{b as N}from"./pinia-D1tb24LR.js";import{b as S}from"./@ckeditor-RgNY5E4z.js";import{U as R}from"./UploadImageModal-uDuTO257.js";import{a_ as f,aR as l,a5 as n,a6 as t,a4 as A,aI as y,L as m,aY as p,ae as d,bx as w,aG as v,ba as h,bz as I,bq as E,bA as q,bp as k,bm as j,ad as W}from"./@vue-Cqo5QHyB.js";import{_ as D}from"./index-D_YhG16e.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-Bxbxx77j.js";import"./vue-ZlQZhsMo.js";import"./bootstrap-CKLWTmin.js";import"./@popperjs-WhmJkuoZ.js";import"./vue-axios-BaogFJPH.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";var G={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const x=U(),{VITE_API:P,VITE_PATH:C}=G,O={data(){return{isNewArticle:!1,tempArticleInfo:{},tempCategoryList:["最新消息","活動講座","專欄文章"],tempTagList:[],tempTagInvputVaule:"",isCover:!1,editor:S,editorConfig:{toolbar:["heading","bold","italic","|","link"]},relatedProduct:{groupList:[],productList:[],currentGroup:"",currentProduct:[]},swalInfoCheckWithBootstrapButtons:null}},watch:{"relatedProduct.currentGroup":function(){const e=Object.values(x.allProducts).filter(c=>c.category==="products");this.relatedProduct.productList=e.filter(c=>{const g=c.is_enabled,s=c.group===this.relatedProduct.currentGroup;return g&&s})}},methods:{getArticleInfo(i){const e=`${P}/api/${C}/admin/article/${i}`;this.axios.get(e).then(c=>{this.tempArticleInfo=c.data.article,this.updateTag(c.data.article.author)}).catch(c=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:c.response.data.message,confirmButtonText:"確認"})})},chooseCategory(i){this.tempArticleInfo.category=i},chooseTag(i,e){this.tempArticleInfo.tag||(this.tempArticleInfo.tag=[]),e==="tagInput"&&(i=i.trim().replace(",",""),this.tempTagInvputVaule=""),this.tempArticleInfo.tag.includes(i)||this.tempArticleInfo.tag.push(i)},deleteTag(i){const e=this.tempArticleInfo.tag.indexOf(i);this.tempArticleInfo.tag.splice(e,1)},updateTag(i){this.tempTagList.includes(i)||this.tempTagList.push(i)},deleteImage(i,e){i==="imageUrl"?this.tempArticleInfo.imageUrl="":i==="imagesUrl"?this.tempArticleInfo.imagesUrl.splice(e,1):(this.tempArticleInfo.imageUrl="",this.tempArticleInfo.imagesUrl=[])},openImageModal(i){i==="isCover"?this.isCover=!0:this.isCover=!1,this.$refs.uploadImageModal.openModal()},getImgUrl(i,e){if(i==="imageUrl"){this.tempArticleInfo.imageUrl=e;return}this.tempArticleInfo.imagesUrl?this.tempArticleInfo.imagesUrl.push(e):this.tempArticleInfo.imagesUrl=[e]},deleteRelatedProduct(i){const e=this.tempArticleInfo.relatedProduct.indexOf(i);this.tempArticleInfo.relatedProduct.splice(e,1)},addRelatedProduct(){if(this.tempArticleInfo.relatedProduct||(this.tempArticleInfo.relatedProduct=[]),!this.relatedProduct.currentProduct==="")return;const i=this.tempArticleInfo.relatedProduct.filter(g=>g.id===this.relatedProduct.currentProduct.id),c=this.tempArticleInfo.relatedProduct.length===3;!i.length&&!c&&this.tempArticleInfo.relatedProduct.push(this.relatedProduct.currentProduct)},updateArticleInfo(){let i=`${P}/api/${C}/admin/article`;const e=this.isNewArticle?"post":"put";if(!this.tempArticleInfo.imageUrl||!this.tempArticleInfo.imagesUrl||this.tempArticleInfo.imageUrl===""||!this.tempArticleInfo.imagesUrl.length){this.swalInfoCheckWithBootstrapButtons.fire("圖片欄位為必填");return}this.isNewArticle||(i+=`/${this.tempArticleInfo.id}`),this.isNewArticle&&(this.tempArticleInfo.create_at=Math.floor(new Date/1e3),this.tempArticleInfo.isPublic=!!this.tempArticleInfo.isPublic),this.axios[e](i,{data:this.tempArticleInfo}).then(c=>{this.swalInfoCheckWithBootstrapButtons.fire({title:c.data.message,confirmButtonText:"確認"}),this.$router.push("/admin/articles")}).catch(c=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:c.response.data.message.join("、"),confirmButtonText:"確認"})})}},computed:{...N(U)},components:{UploadImageModal:R},async mounted(){try{const i=this.$route.params.id;i||(this.isNewArticle=!0),i&&this.getArticleInfo(i),await x.getAllProducts(),x.groupList.forEach(e=>this.updateTag(e)),this.relatedProduct.groupList=x.groupList,this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})}catch(i){throw console.log("錯誤:",i),i}}},z={class:"overflow-y-scroll scrollbar-y-hide vh-100"},H={key:0,class:"py-4 py-md-7 fw-bold"},K={key:1,class:"py-4 py-md-7 fw-bold"},F={class:"mb-7"},Y=t("h5",{class:"mb-3 fw-bold"},"封面圖片",-1),J={class:"row g-1 mb-3"},Q={class:"mb-3 col-6 col-md-2"},X={class:"ratio-1x1"},Z={class:"position-relative border border-1 h-100"},$=t("i",{class:"bi bi-trash"},null,-1),tt=[$],et=t("div",{class:"position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100"}," 封面圖片 ",-1),ot={key:2,class:"h-100"},st=t("i",{class:"bi bi-image mb-2 text-default"},null,-1),it=t("p",{class:"text-default"},"目前無封面",-1),lt=[st,it],nt=t("h5",{class:"mb-2 fw-bold"},"內文輪播圖片",-1),rt=t("p",{class:"mb-3 text-info fs-info"}," 內文圖片為輪播展示，建議上傳 16:9 橫幅圖片 ",-1),ct={class:"row g-1 mb-3"},dt={class:"position-relative border border-1 h-100 ratio-1x1"},at=["onClick"],ut=t("i",{class:"bi bi-trash"},null,-1),mt=[ut],pt={class:"col-6 col-md-2"},ft={class:"h-100 p-0 border border-1 ratio-1x1"},ht=t("i",{class:"bi bi-trash me-2"},null,-1),gt=t("span",null,"刪除所有圖片",-1),_t=[ht,gt],bt=t("h5",{class:"mb-5 fw-bold"},"文章內容",-1),vt=t("label",{for:"title",class:"form-label fw-bold has-required"},"文章標題",-1),It={class:"row g-5 g-md-1"},xt={class:"col-md-6"},yt=t("label",{for:"author",class:"form-label fw-bold has-required"},"作者",-1),At={class:"col-md-6"},wt=t("label",{for:"category",class:"form-label fw-bold has-required"},"文章分類",-1),kt={class:"d-flex align-items-center text-nowrap fs-info"},Pt=t("span",{class:"text-info"},"點擊帶入分類：",-1),Ct={class:"d-flex gap-1 mb-0 flex-wrap"},Ut=["onClick"],Vt=t("label",{for:"tag",class:"me-2 form-label fw-bold has-required"},"文章標籤",-1),Tt=t("span",{class:"fs-info text-info"},"可使用「enter」區隔每組標籤",-1),Lt={class:"form-control d-flex align-items-center py-0 mb-1",style:{"min-height":"36px"}},Bt={class:"d-flex flex-wrap align-items-center"},Mt=["onClick"],Nt={class:"text-nowrap"},St=t("i",{class:"bi bi-x ms-1 text-info"},null,-1),Rt={type:"button",class:"d-flex flex-nowrap py-1 btn btn-outline-secondary rounded-pill"},Et={class:"d-flex align-items-center text-nowrap fs-info"},qt=t("span",{class:"text-info"},"點擊帶入標籤：",-1),jt={class:"d-flex gap-1 mb-0 flex-wrap"},Wt=["onClick"],Dt=t("label",{for:"description",class:"form-label fw-bold has-required"},"簡述",-1),Gt={class:"editor-block mb-5"},Ot=t("label",{for:"description",class:"form-label fw-bold"},"文章內容",-1),zt={class:"mb-5"},Ht=t("h5",{class:"d-inline-block me-2 mb-5 fw-bold"},"關聯商品",-1),Kt=t("span",{class:"text-info fs-info"},"最多請選擇 3 個商品",-1),Ft={class:"row g-3 g-md-1"},Yt={class:"col-12 col-md-6"},Jt={class:"input-group"},Qt=t("label",{class:"input-group-text"},"類別",-1),Xt=t("option",{value:"",disabled:""},"選擇商品類別",-1),Zt=["value"],$t={class:"col-12 col-md-6"},te={class:"input-group"},ee=t("label",{class:"input-group-text"},"商品",-1),oe=t("option",{value:""},"選擇商品名稱",-1),se=["value"],ie={key:0,class:"col-12"},le={class:"row g-3 g-md-1"},ne={class:"border rounded-2 overflow-hidden h-100"},re={class:"row g-1 g-md-3"},ce={class:"col-4"},de={class:"col-6 d-flex align-items-center fs-info fs-md-6"},ae={class:"doubleline-ellipsis"},ue={class:"col-2 d-flex justify-content-center align-items-center"},me=["onClick"],pe=t("h5",{class:"mb-5 fw-bold"},"文章發布狀態",-1),fe={class:"form-check form-switch"},he={class:"form-check-label",for:"isPublic"},ge={key:0},_e={key:1},be={class:"d-flex justify-content-end gap-2 pt-3 pb-1"};function ve(i,e,c,g,s,r){const _=f("v-field"),b=f("error-message"),V=f("ckeditor"),T=f("router-link"),L=f("v-form"),B=f("UploadImageModal");return l(),n(m,null,[t("div",z,[s.isNewArticle?(l(),n("h2",H,"新增文章")):(l(),n("h2",K,"編輯文章")),t("div",null,[t("div",F,[Y,t("div",J,[t("div",Q,[t("div",X,[t("div",Z,[s.tempArticleInfo.imageUrl?(l(),n("button",{key:0,type:"button",class:"position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light",style:{width:"36px",height:"36px"},onClick:e[0]||(e[0]=a=>r.deleteImage("imageUrl",i.idx))},tt)):A("",!0),et,s.tempArticleInfo.imageUrl?(l(),n("div",{key:1,style:y(`background-image:url(${s.tempArticleInfo.imageUrl})`),class:"h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)):(l(),n("div",ot,[t("button",{onClick:e[1]||(e[1]=a=>r.openImageModal("isCover")),class:"d-flex flex-column align-items-center justify-content-center w-100 h-100 text-secondary btn btn-light rounded-0",type:"button"},lt)]))])])])]),nt,rt,t("div",ct,[(l(!0),n(m,null,p(s.tempArticleInfo.imagesUrl,(a,o)=>(l(),n("div",{class:"col-6 col-md-2",key:o},[t("div",dt,[t("button",{type:"button",class:"position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light",style:{width:"36px",height:"36px"},onClick:u=>r.deleteImage("imagesUrl",o)},mt,8,at),t("div",{style:y(`background-image:url(${a})`),class:"h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)])]))),128)),t("div",pt,[t("div",ft,[t("button",{onClick:e[2]||(e[2]=a=>r.openImageModal("inNotCover")),class:"d-flex align-items-center justify-content-center w-100 h-100 text-default btn btn-light rounded-0",type:"button"}," 新增圖片 ")])])]),t("button",{typs:"button",class:"p-0 btn text-danger",onClick:e[3]||(e[3]=(...a)=>r.deleteImage&&r.deleteImage(...a))},_t)]),t("div",null,[bt,d(L,{class:"d-flex flex-column gap-3",onSubmit:r.updateArticleInfo},{default:w(({errors:a})=>[t("div",null,[vt,d(_,{type:"text",class:v(["form-control",{"is-invalid":a.標題}]),placeholder:"請填入文章標題",modelValue:s.tempArticleInfo.title,"onUpdate:modelValue":e[4]||(e[4]=o=>s.tempArticleInfo.title=o),modelModifiers:{trim:!0},id:"title",name:"標題",rules:"required|max:25"},null,8,["modelValue","class"]),d(b,{name:"標題",class:"invalid-feedback"})]),t("div",It,[t("div",xt,[yt,d(_,{type:"text",class:v(["form-control",{"is-invalid":a.author}]),placeholder:"請填入作者",modelValue:s.tempArticleInfo.author,"onUpdate:modelValue":e[5]||(e[5]=o=>s.tempArticleInfo.author=o),modelModifiers:{trim:!0},id:"author",name:"作者",rules:"required",onBlur:e[6]||(e[6]=o=>r.updateTag(s.tempArticleInfo.author))},null,8,["modelValue","class"]),d(b,{name:"作者",class:"invalid-feedback"})]),t("div",At,[t("div",null,[wt,d(_,{type:"text",id:"category",name:"分類",class:v(["form-control mb-1",{"is-invalid":a.分類}]),placeholder:"請輸入文章分類",rules:"required",modelValue:s.tempArticleInfo.category,"onUpdate:modelValue":e[7]||(e[7]=o=>s.tempArticleInfo.category=o),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),d(b,{name:"分類",class:"invalid-feedback"})]),t("div",kt,[Pt,t("div",Ct,[(l(!0),n(m,null,p(s.tempCategoryList,(o,u)=>(l(),n("button",{type:"button",class:"btn btn-light rounded-pill py-1 fs-info text-info",value:"item",key:u,onClick:M=>r.chooseCategory(o)},h(o),9,Ut))),128))])])])]),t("div",null,[t("div",null,[Vt,Tt,t("div",Lt,[t("div",Bt,[(l(!0),n(m,null,p(s.tempArticleInfo.tag,o=>(l(),n("div",{key:o},[t("button",{type:"button",class:"d-flex flex-nowrap py-1 btn btn-light rounded-pill",onClick:u=>r.deleteTag(o)},[t("span",Nt,h(o),1),St],8,Mt)]))),128)),t("button",Rt,[I(t("input",{type:"text",id:"tag",name:"tag",class:"border-0",style:{width:"80px"},placeholder:"自訂標籤",onKeyup:e[8]||(e[8]=q(o=>r.chooseTag(s.tempTagInvputVaule,"tagInput"),["enter"])),"onUpdate:modelValue":e[9]||(e[9]=o=>s.tempTagInvputVaule=o)},null,544),[[E,s.tempTagInvputVaule,void 0,{trim:!0}]])])])])]),t("div",Et,[qt,t("div",jt,[(l(!0),n(m,null,p(s.tempTagList,(o,u)=>(l(),n("button",{type:"button",class:"btn btn-light rounded-pill py-1 fs-info text-info",value:"item",key:u,onClick:M=>r.chooseTag(o)},h(o),9,Wt))),128))])])]),t("div",null,[Dt,d(_,{id:"description",name:"簡述",class:v(["form-control",{"is-invalid":a.description}]),modelValue:s.tempArticleInfo.description,"onUpdate:modelValue":e[10]||(e[10]=o=>s.tempArticleInfo.description=o),modelModifiers:{trim:!0},as:"textarea",placeholder:"請填寫 100 字內簡述",rules:"required|max:100",style:{"min-height":"100px"}},null,8,["modelValue","class"]),d(b,{name:"簡述",class:"invalid-feedback"})]),t("div",Gt,[Ot,d(V,{editor:s.editor,config:s.editorConfig,modelValue:s.tempArticleInfo.content,"onUpdate:modelValue":e[11]||(e[11]=o=>s.tempArticleInfo.content=o),modelModifiers:{trim:!0}},null,8,["editor","config","modelValue"])]),t("div",zt,[Ht,Kt,t("div",Ft,[t("div",Yt,[t("div",Jt,[Qt,I(t("select",{class:"form-select","onUpdate:modelValue":e[12]||(e[12]=o=>s.relatedProduct.currentGroup=o)},[Xt,(l(!0),n(m,null,p(s.relatedProduct.groupList,(o,u)=>(l(),n("option",{key:u,value:o},h(o),9,Zt))),128))],512),[[k,s.relatedProduct.currentGroup]])])]),t("div",$t,[t("div",te,[ee,I(t("select",{class:"form-select","onUpdate:modelValue":e[13]||(e[13]=o=>s.relatedProduct.currentProduct=o),onChange:e[14]||(e[14]=(...o)=>r.addRelatedProduct&&r.addRelatedProduct(...o))},[oe,(l(!0),n(m,null,p(s.relatedProduct.productList,o=>(l(),n("option",{key:o.id,value:o},h(o.title),9,se))),128))],544),[[k,s.relatedProduct.currentProduct]])])]),s.tempArticleInfo.relatedProduct?(l(),n("div",ie,[t("div",le,[(l(!0),n(m,null,p(s.tempArticleInfo.relatedProduct,o=>(l(),n("div",{class:"col-6 col-md-3",key:o,style:{"min-height":"48px"}},[t("div",ne,[t("div",re,[t("div",ce,[t("div",{style:y([`background-image:url(${o.imageUrl})`,{"min-height":"48px"}]),class:"w-100 h-100 bg-img-cover bg-img-center bg-img-norepeat ratio-1x1"},null,4)]),t("div",de,[t("span",ae,h(o.title),1)]),t("div",ue,[t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:u=>r.deleteRelatedProduct(o)},null,8,me)])])])]))),128))])])):A("",!0)])]),t("div",null,[pe,t("div",fe,[I(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"isPublic","onUpdate:modelValue":e[15]||(e[15]=o=>s.tempArticleInfo.isPublic=o)},null,512),[[j,s.tempArticleInfo.isPublic]]),t("label",he,[s.tempArticleInfo.isPublic?(l(),n("span",ge,"更改為未發布")):(l(),n("span",_e,"更改為已發布"))])])]),t("div",be,[d(T,{to:"/admin/articles",class:"btn btn-outline-dark"},{default:w(()=>[W("取消")]),_:1}),t("button",{type:"button",class:"btn btn-dark text-white",onClick:e[16]||(e[16]=(...o)=>r.updateArticleInfo&&r.updateArticleInfo(...o))}," 確認 ")])]),_:1},8,["onSubmit"])])])]),d(B,{ref:"uploadImageModal",onSubmitImgUrl:r.getImgUrl,"is-Cover":s.isCover},null,8,["onSubmitImgUrl","is-Cover"])],64)}const je=D(O,[["render",ve]]);export{je as default};
