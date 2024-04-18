import{u as y}from"./adminProductStore-XiFNhrHl.js";import{b as C}from"./pinia-D1tb24LR.js";import{U as V}from"./UploadImageModal-uDuTO257.js";import{a_ as d,aR as n,a5 as l,a6 as t,a4 as B,aI as g,L as p,aY as I,ae as m,bx as v,aG as A,ba as M,bz as x,bq as S,bm as N,ad as T}from"./@vue-Cqo5QHyB.js";import{_ as D}from"./index-D_YhG16e.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-Bxbxx77j.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./bootstrap-CKLWTmin.js";import"./@popperjs-WhmJkuoZ.js";import"./vue-axios-BaogFJPH.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";var E={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const u=y(),{VITE_API:L,VITE_PATH:P}=E,G={data(){return{isNewArtist:!1,tempArtistInfo:{},tempGroupList:[],isCover:!1,swalInfoCheckWithBootstrapButtons:null}},methods:{getArtistInfo(s,e){this.tempArtistInfo=s[e]},chooseGroup(s){this.tempArtistInfo.group=s},deleteImage(s,e){s==="imageUrl"?this.tempArtistInfo.imageUrl="":s==="imagesUrl"?this.tempArtistInfo.imagesUrl.splice(e,1):(this.tempArtistInfo.imageUrl="",this.tempArtistInfo.imagesUrl=[])},openImageModal(s){s==="isCover"?this.isCover=!0:this.isCover=!1,this.$refs.uploadImageModal.openModal()},getImgUrl(s,e){if(s==="imageUrl"){this.tempArtistInfo.imageUrl=e;return}this.tempArtistInfo.imagesUrl?this.tempArtistInfo.imagesUrl.push(e):this.tempArtistInfo.imagesUrl=[e]},updateArtistInfo(){let s=`${L}/api/${P}/admin/product`;const e=this.isNewArtist?"post":"put";if(!this.tempArtistInfo.imageUrl||!this.tempArtistInfo.imagesUrl||this.tempArtistInfo.imageUrl===""||!this.tempArtistInfo.imagesUrl.length){this.swalInfoCheckWithBootstrapButtons.fire("圖片欄位為必填");return}this.isNewArtist||(s+=`/${this.tempArtistInfo.id}`),this.isNewArtist&&(this.tempArtistInfo.category="artists",this.tempArtistInfo.unit="人",this.tempArtistInfo.origin_price=0,this.tempArtistInfo.price=0,this.tempArtistInfo.create_at=Math.floor(Date.now()/1e3)),this.axios[e](s,{data:this.tempArtistInfo}).then(c=>{const f=c.data.message.replace("產品","藝術家");this.swalInfoCheckWithBootstrapButtons.fire(f),this.$router.push("/admin/artists")}).catch(c=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:c.response.data.message,confirmButtonText:"確認"})})},async fetchData(s){try{if(await u.getAllProducts(),this.tempGroupList=[...u.groupList],!s)return;this.getArtistInfo(u.allProducts,s)}catch(e){console.log(e.response.data.message)}}},computed:{...C(y)},components:{UploadImageModal:V},mounted(){const s=this.$route.params.id;s||(this.isNewArtist=!0),this.fetchData(s),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})}},W={class:"overflow-y-scroll scrollbar-y-hide vh-100"},j={key:0,class:"py-4 py-md-7 fw-bold"},q={key:1,class:"py-4 py-md-7 fw-bold"},R={class:"mb-7"},z=t("h5",{class:"mb-3 fw-bold"},"藝術家圖片",-1),H={class:"row g-1 mb-3"},O={class:"col-6 col-md-2"},F={class:"ratio-1x1"},Y={class:"position-relative border border-1 h-100"},J=t("i",{class:"bi bi-trash"},null,-1),K=[J],Q=t("div",{class:"position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100"}," 封面圖片 ",-1),X={key:2,class:"h-100"},Z=t("i",{class:"bi bi-image mb-2 text-default"},null,-1),$=t("p",{class:"text-default"},"目前無封面",-1),tt=[Z,$],et={class:"position-relative border border-1 h-100"},st=["onClick"],ot=t("i",{class:"bi bi-trash"},null,-1),it=[ot],nt={class:"col-6 col-md-2"},lt=t("i",{class:"bi bi-trash me-2"},null,-1),rt=t("span",null,"刪除所有圖片",-1),at=[lt,rt],mt=t("h5",{class:"mb-5 fw-bold"},"藝術家基本資訊",-1),dt=t("label",{for:"title",class:"form-label fw-bold has-required"},"藝術家名稱",-1),ct=t("label",{for:"group",class:"form-label fw-bold has-required"},"藝術家分類",-1),pt={class:"d-flex align-items-center text-nowrap fs-info"},ut=t("span",{class:"text-info"},"點擊帶入分類：",-1),ft={class:"d-flex gap-1 mb-0 flex-wrap"},ht=["onClick"],bt=t("label",{for:"content",class:"form-label fw-bold"},"藝術家介紹",-1),_t={class:"form-check form-switch"},gt={class:"form-check-label",for:"is_enabled"},It={key:0},vt={key:1},At={class:"d-flex justify-content-end gap-2 pt-3"},xt=t("button",{type:"submit",class:"btn btn-dark text-white"},"確認",-1);function yt(s,e,c,f,o,r){const h=d("v-field"),b=d("error-message"),k=d("router-link"),w=d("v-form"),U=d("UploadImageModal");return n(),l(p,null,[t("div",W,[o.isNewArtist?(n(),l("h2",j,"新增藝術家")):(n(),l("h2",q,"編輯藝術家")),t("div",null,[t("div",R,[z,t("div",H,[t("div",O,[t("div",F,[t("div",Y,[o.tempArtistInfo.imageUrl?(n(),l("button",{key:0,type:"button",class:"position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light",style:{width:"36px",height:"36px"},onClick:e[0]||(e[0]=a=>r.deleteImage("imageUrl",s.idx))},K)):B("",!0),Q,o.tempArtistInfo.imageUrl?(n(),l("div",{key:1,style:g(`background-image:url(${o.tempArtistInfo.imageUrl})`),class:"h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)):(n(),l("div",X,[t("button",{onClick:e[1]||(e[1]=a=>r.openImageModal("isCover")),class:"d-flex flex-column align-items-center justify-content-center w-100 h-100 text-secondary btn btn-light rounded-0",type:"button"},tt)]))])])]),(n(!0),l(p,null,I(o.tempArtistInfo.imagesUrl,(a,i)=>(n(),l("div",{class:"col-6 col-md-2",key:i},[t("div",et,[t("button",{type:"button",class:"position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light",style:{width:"36px",height:"36px"},onClick:_=>r.deleteImage("imagesUrl",i)},it,8,st),t("div",{style:g(`background-image:url(${a})`),class:"h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)])]))),128)),t("div",nt,[t("button",{onClick:e[2]||(e[2]=a=>r.openImageModal("inNotCover")),class:"d-flex align-items-center justify-content-center w-100 h-100 text-default btn btn-light rounded-0 ratio-1x1 border border-1",type:"button"}," 新增圖片 ")])]),t("button",{typs:"button",class:"p-0 btn text-danger",onClick:e[3]||(e[3]=(...a)=>r.deleteImage&&r.deleteImage(...a))},at)]),t("div",null,[mt,m(w,{class:"d-flex flex-column gap-5",onSubmit:r.updateArtistInfo},{default:v(({errors:a})=>[t("div",null,[dt,m(h,{type:"text",class:A(["form-control",{"is-invalid":a.名稱}]),placeholder:"請輸入藝術家名稱",modelValue:o.tempArtistInfo.title,"onUpdate:modelValue":e[4]||(e[4]=i=>o.tempArtistInfo.title=i),modelModifiers:{trim:!0},id:"title",name:"名稱",rules:"required"},null,8,["modelValue","class"]),m(b,{name:"名稱",class:"invalid-feedback"})]),t("div",null,[t("div",null,[ct,m(h,{type:"text",id:"group",name:"分類",class:A(["form-control mb-1",{"is-invalid":a.分類}]),placeholder:"請輸入藝術家分類",rules:"required",modelValue:o.tempArtistInfo.group,"onUpdate:modelValue":e[5]||(e[5]=i=>o.tempArtistInfo.group=i),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),m(b,{name:"分類",class:"invalid-feedback"})]),t("div",pt,[ut,t("div",ft,[(n(!0),l(p,null,I(o.tempGroupList,(i,_)=>(n(),l("button",{type:"button",class:"btn btn-light rounded-pill py-1 fs-info text-info",value:"item",key:_,onClick:kt=>r.chooseGroup(i)},M(i),9,ht))),128))])])]),t("div",null,[bt,x(t("textarea",{type:"text",id:"content",class:"form-control",placeholder:"請輸入藝術家介紹","onUpdate:modelValue":e[6]||(e[6]=i=>o.tempArtistInfo.content=i),style:{height:"200px"}},null,512),[[S,o.tempArtistInfo.content,void 0,{trim:!0}]])]),t("div",_t,[x(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"is_enabled","onUpdate:modelValue":e[7]||(e[7]=i=>o.tempArtistInfo.is_enabled=i)},null,512),[[N,o.tempArtistInfo.is_enabled]]),t("label",gt,[o.tempArtistInfo.is_enabled?(n(),l("span",It,"更改為未上架")):(n(),l("span",vt,"更改為已上架"))])]),t("div",At,[m(k,{to:"/admin/artists",class:"btn btn-outline-dark"},{default:v(()=>[T("取消")]),_:1}),xt])]),_:1},8,["onSubmit"])])])]),m(U,{ref:"uploadImageModal",onSubmitImgUrl:r.getImgUrl,"is-Cover":o.isCover},null,8,["onSubmitImgUrl","is-Cover"])],64)}const Ht=D(G,[["render",yt]]);export{Ht as default};