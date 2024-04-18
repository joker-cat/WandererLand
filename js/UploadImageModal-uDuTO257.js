import{M as c}from"./bootstrap-CKLWTmin.js";import{aR as r,a5 as d,a6 as e,aI as m,bz as p,bq as h}from"./@vue-Cqo5QHyB.js";import{_ as g}from"./index-D_YhG16e.js";var _={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:f,VITE_PATH:u}=_,b={props:["isCover"],data(){return{modal:null,accept:["jpg","jpeg","png"],imgUrl:""}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()},handleFile(n){const t=n.target.files[0];if(t.size/(1024*1024)>3)return this.$swal.fire({icon:"error",text:"請上傳 3MB 以內的圖檔"}),this.resetDropArea(),!1;const s=t.type.split("/")[1];if(!this.accept.find(o=>o===s))return this.$swal.fire({icon:"error",text:"僅限使用 jpg、jpeg 與 png 格式圖檔"}),this.resetDropArea(),!1;this.uploadImage(t)},uploadImage(n){const t=this.$loading.show(),a=new FormData;a.append("file-to-upload",n),this.axios.post(`${f}/api/${u}/admin/upload`,a).then(l=>{this.imgUrl=l.data.imageUrl}).catch(l=>{this.$swal.fire({icon:"error",text:l.response})}).finally(()=>{t.hide()})},resetDropArea(){this.imgUrl="",this.$refs.dropArea.value=""},submitImgUrl(){this.isCover?this.$emit("submitImgUrl","imageUrl",this.imgUrl):this.$emit("submitImgUrl","imagesUrl",this.imgUrl),this.resetDropArea(),this.closeModal()}},mounted(){this.modal=new c(this.$refs.uploadImageModal,{keyboard:!1,backdrop:"static"})}},I={ref:"uploadImageModal",class:"modal fade","aria-hidden":"true","aria-labelledby":"uploadImageModal",tabindex:"-1"},v={class:"modal-dialog modal-lg modal-dialog-centered"},U={class:"modal-content"},M={class:"modal-header"},y={key:0,class:"modal-title text-bold fw-bold"},x={key:1,class:"modal-title text-bold fw-bold"},w=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),k={class:"modal-body container"},A={class:"row g-3"},B={class:"col-12 col-md-4"},D={class:"drop-area ratio-1x1"},T={key:1},E={class:"col-12 col-md-8"},S=e("p",{class:"mb-1"},"僅限使用 jpg、jpeg 與 png 格式，檔案大小限制為 3MB 以下",-1),z={ref:"imgForm"},V=["accept"],j={class:"modal-footer"};function C(n,t,a,l,s,i){return r(),d("div",I,[e("div",v,[e("div",U,[e("div",M,[a.isCover?(r(),d("h5",y,"上傳封面")):(r(),d("h5",x,"上傳圖片")),w]),e("div",k,[e("div",A,[e("div",B,[e("div",D,[s.imgUrl?(r(),d("div",{key:0,style:m(`background-image:url(${s.imgUrl})`),class:"w-100 h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)):(r(),d("p",T,"圖片預覽"))])]),e("div",E,[S,e("form",z,[p(e("input",{class:"form-control mb-1",type:"text",placeholder:"請填入圖片網址","onUpdate:modelValue":t[0]||(t[0]=o=>s.imgUrl=o)},null,512),[[h,s.imgUrl]]),e("input",{class:"form-control",type:"file",ref:"dropArea",accept:s.accept,onChange:t[1]||(t[1]=(...o)=>i.handleFile&&i.handleFile(...o))},null,40,V)],512)])])]),e("div",j,[e("button",{type:"button",class:"btn btn-dark",onClick:t[2]||(t[2]=(...o)=>i.submitImgUrl&&i.submitImgUrl(...o))},"送出")])])])],512)}const R=g(b,[["render",C]]);export{R as U};
