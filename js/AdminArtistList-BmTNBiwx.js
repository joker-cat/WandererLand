import{P as B}from"./PaginationComponent-ChWtSpMK.js";import{_ as w}from"./index-D_YhG16e.js";import{a_ as h,aR as a,a5 as l,a6 as t,ae as d,bx as p,L as k,aY as y,ad as C,aI as A,ba as m,aG as _}from"./@vue-Cqo5QHyB.js";import"./pinia-D1tb24LR.js";import"./axios-Di5RpEPX.js";import"./vue-axios-BaogFJPH.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./sweetalert2-Bxbxx77j.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-CKLWTmin.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";var v={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:f,VITE_PATH:b}=v,$={data(){return{artistsList:[],pagination:{},swalQuestionWithBootstrapButtons:null,swalInfoCheckWithBootstrapButtons:null}},methods:{getArtistList(n=1,r="artists"){const c=`${f}/api/${b}/admin/products?page=${n}&category=${r}`;this.axios.get(c).then(o=>{const{products:s,pagination:i}=o.data;this.artistsList=s,this.pagination=i}).catch(o=>{this.swalInfoCheckWithBootstrapButtons.fire({text:o.response.data.message,confirmButtonText:"確認"})})},showArtistPage(n){this.$router.push(`/admin/Artistinfo/${n}`)},deleteArtist(n){const r=`${f}/api/${b}/admin/product/${n}`;this.swalQuestionWithBootstrapButtons.fire({title:"確定要刪除藝術家嗎？",text:"這個動作無法復原",icon:"question",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認刪除"}).then(c=>{if(c.isConfirmed){const o=this.$loading.show();this.axios.delete(r).then(s=>{this.swalInfoCheckWithBootstrapButtons.fire({title:s.data.message,confirmButtonText:"確認"}),this.getArtistList()}).catch(s=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:s.response.data.message,confirmButtonText:"確認"})}).finally(()=>{o.hide()})}})}},mounted(){this.getArtistList(),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})},components:{PaginationComponent:B}},L={class:"overflow-y-scroll scrollbar-y-hide vh-100"},I={class:"d-flex justify-content-between py-4 py-md-7"},T=t("h2",{class:"fw-bold"},"藝術家管理",-1),P={class:"table align-middle fs-info fs-md-6"},W=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"名稱"),t("th",{class:"d-none d-md-table-cell text-center"},"分類"),t("th",null,"狀態"),t("th")])],-1),E={class:"d-none d-md-table-cell"},V={class:"py-1 rounded-pill bg-light text-center text-nowrap"},S={key:0,class:"text-danger text-nowrap"},D={key:1,class:"text-nowrap"},R={class:"btn-group align-items-center"},G=["onClick"],N=t("i",{class:"bi bi-pencil text-default"},null,-1),Q=[N],z=["onClick"],H=t("i",{class:"bi bi-trash text-danger"},null,-1),O=[H];function U(n,r,c,o,s,i){const u=h("router-link"),g=h("PaginationComponent");return a(),l("div",L,[t("div",I,[T,d(u,{to:"/admin/artistinfo/new",class:"btn btn-dark d-flex align-items-center"},{default:p(()=>[C("建立新的藝術家")]),_:1})]),t("div",null,[t("table",P,[W,t("tbody",null,[(a(!0),l(k,null,y(s.artistsList,e=>(a(),l("tr",{key:e.id},[t("td",null,[t("div",{class:"bg-img-center bg-img-contain bg-img-norepeat ratio-1x1",style:A([{"min-width":"50px","max-width":"100px"},{backgroundImage:`url(${e.imageUrl})`}])},null,4)]),t("td",null,m(e.title),1),t("td",E,[t("div",V,m(e.group),1)]),t("td",null,[e.is_enabled?(a(),l("p",S,"已上架")):(a(),l("p",D,"未上架"))]),t("td",null,[t("div",R,[t("button",{type:"button",class:"btn border-0",onClick:x=>i.showArtistPage(e.id)},Q,8,G),t("button",{type:"button",class:"btn border-0",onClick:x=>i.deleteArtist(e.id)},O,8,z),d(u,{class:_(["d-none d-sm-table-cell btn border-0",{"pe-none":!e.is_enabled}]),target:"_blank",to:`/artistinfo/${e.id}`},{default:p(()=>[t("i",{class:_(["bi bi-house",e.is_enabled?"text-default":"text-light"])},null,2)]),_:2},1032,["to","class"])])])]))),128))])]),d(g,{pagination:s.pagination,onGetList:i.getArtistList},null,8,["pagination","onGetList"])])])}const ct=w($,[["render",U]]);export{ct as default};
