import{P as w}from"./PaginationComponent-ChWtSpMK.js";import{_ as k}from"./index-D_YhG16e.js";import{a_ as m,aR as a,a5 as l,a6 as t,ae as u,bx as p,L as P,aY as y,ad as g,aI as C,ba as d,aG as _}from"./@vue-Cqo5QHyB.js";import"./pinia-D1tb24LR.js";import"./axios-Di5RpEPX.js";import"./vue-axios-BaogFJPH.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./sweetalert2-Bxbxx77j.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-CKLWTmin.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";var v={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:b,VITE_PATH:f}=v,$={data(){return{productsList:[],pagination:{},swalQuestionWithBootstrapButtons:null,swalInfoCheckWithBootstrapButtons:null}},methods:{getProductList(n=1,r="products"){const c=`${b}/api/${f}/admin/products?page=${n}&category=${r}`;this.axios.get(c).then(s=>{const{products:o,pagination:i}=s.data;this.productsList=o,this.pagination=i}).catch(s=>{this.swalInfoCheckWithBootstrapButtons.fire({text:s.response.data.message,confirmButtonText:"確認"})})},showProductPage(n){this.$router.push(`/admin/productinfo/${n}`)},deleteProduct(n){const r=`${b}/api/${f}/admin/product/${n}`;this.swalQuestionWithBootstrapButtons.fire({title:"確定要刪除商品嗎？",text:"這個動作無法復原",icon:"question",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認刪除"}).then(c=>{if(c.isConfirmed){const s=this.$loading.show();this.axios.delete(r).then(o=>{this.swalInfoCheckWithBootstrapButtons.fire({title:o.data.message,confirmButtonText:"確認"}),this.getProductList()}).catch(o=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:o.response.data.message,confirmButtonText:"確認"})}).finally(()=>{s.hide()})}})}},mounted(){this.getProductList(),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})},components:{PaginationComponent:w}},L={class:"overflow-y-scroll scrollbar-y-hide vh-100"},I={class:"d-flex justify-content-between py-4 py-md-7"},T=t("h2",{class:"fw-bold"},"商品管理",-1),W={class:"table align-middle fs-info fs-md-6"},E=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,[g("商品"),t("span",{class:"d-block d-sm-inline"},"名稱")]),t("th",{class:"d-none d-md-table-cell text-center"},"分類"),t("th",{class:"d-none d-lg-table-cell text-center"},"原價 / 售價"),t("th",null,"狀態"),t("th")])],-1),V={class:"d-none d-md-table-cell"},S={class:"py-1 rounded-pill bg-light text-center text-nowrap"},A={class:"d-none d-lg-table-cell"},D={class:"text-center"},R={key:0,class:"text-danger text-nowrap"},G={key:1,class:"text-nowrap"},N={class:"btn-group align-items-center"},Q=["onClick"],z=t("i",{class:"bi bi-pencil text-default"},null,-1),H=[z],O=["onClick"],U=t("i",{class:"bi bi-trash text-danger"},null,-1),j=[U];function q(n,r,c,s,o,i){const h=m("router-link"),x=m("PaginationComponent");return a(),l("div",L,[t("div",I,[T,u(h,{to:"/admin/productinfo/new",class:"btn btn-dark d-flex align-items-center"},{default:p(()=>[g("建立新的商品")]),_:1})]),t("div",null,[t("table",W,[E,t("tbody",null,[(a(!0),l(P,null,y(o.productsList,e=>(a(),l("tr",{key:e.id},[t("td",null,[t("div",{class:"bg-img-center bg-img-contain bg-img-norepeat ratio-1x1",style:C([{"min-width":"50px","max-width":"100px"},{backgroundImage:`url(${e.imageUrl})`}])},null,4)]),t("td",null,d(e.title),1),t("td",V,[t("div",S,d(e.group),1)]),t("td",A,[t("div",D,d(e.origin_price)+" / "+d(e.price),1)]),t("td",null,[e.is_enabled?(a(),l("p",R,"已上架")):(a(),l("p",G,"未上架"))]),t("td",null,[t("div",N,[t("button",{type:"button",class:"btn border-0",onClick:B=>i.showProductPage(e.id)},H,8,Q),t("button",{type:"button",class:"btn border-0",onClick:B=>i.deleteProduct(e.id)},j,8,O),u(h,{class:_(["d-none d-sm-table-cell btn border-0",{"pe-none":!e.is_enabled}]),target:"_blank",to:`/productinfo/${e.id}`},{default:p(()=>[t("i",{class:_(["bi bi-house",e.is_enabled?"text-default":"text-light"])},null,2)]),_:2},1032,["to","class"])])])]))),128))])]),u(x,{pagination:o.pagination,onGetList:i.getProductList},null,8,["pagination","onGetList"])])])}const ut=k($,[["render",q]]);export{ut as default};