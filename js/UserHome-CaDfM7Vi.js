import{u as v}from"./userArticleStore-CmGMoF0b.js";import{c as x}from"./userCartStore-ldkYgq0X.js";import{m as g,a as j}from"./pinia-D1tb24LR.js";import{S}from"./SwiperProductComponent-Dt1mHL7j.js";import{B as V}from"./BtnSeeMore-EOa-EOkp.js";import{_ as z}from"./present-CcfCreeZ.js";import{_ as C}from"./index-D_YhG16e.js";import{a_ as r,aR as b,a5 as u,a6 as s,ba as e,ae as o,bx as n,a4 as A,L as M,ac as U,ad as I,aG as p,aU as $,aS as F}from"./@vue-Cqo5QHyB.js";import"./axios-Di5RpEPX.js";import"./statusStore-bNOcWQBU.js";import"./sweetalert2-Bxbxx77j.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./userProductStore-COJptiis.js";import"./swiper-Crg6idDU.js";import"./BtnFavorite-rQr6e3-N.js";import"./favoriteStore-CUDextq_.js";import"./BtnSwiperNavigation-D-UDlg-6.js";import"./productCard-CN61M-8D.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-CKLWTmin.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";const N={data(){return{tempMessage:{type:"",Name:""},message:{subject:"",body:""}}},watch:{tempMessage:{handler(){const t=this.tempMessage.type!==void 0?this.tempMessage.type:"",l=this.tempMessage.name!==void 0?`_${this.tempMessage.name}`:"";this.message.subject=`【${t}${l}】`},deep:!0}},methods:{...g(v,["getArticlesList"]),...g(x,["copyCouponCode"]),sendEmail(){window.open(`mailto:wandererland@gmail.com?cc=${this.message.email}&subject=${this.message.subject}&body=${this.message.body}`,"_blank"),this.$refs.cooperationForm.resetForm()}},components:{SwiperProductComponent:S,BtnSeeMore:V},computed:{...j(v,["sortArticles","articlesList"]),isFormEmpty(){const{subject:t,body:l}=this.message;return!t||!l||!this.tempMessage.type}},mounted(){this.getArticlesList()}},i=t=>($("data-v-0a29a2dd"),t=t(),F(),t),B={key:0,class:"position-relative banner"},E=["src","alt"],L=i(()=>s("div",{class:"position-absolute z-1 top-0 bg-default opacity-50 w-100 h-100"},null,-1)),P={class:"position-absolute z-2 top-50 start-50 translate-middle text-center banner-title w-80 w-sm-50"},q={class:"pb-5 pb-md-7 text-white title-shadow fs-2 fs-md-1 title-letter-spacing title-letter-word-wrap"},T={class:"bg-white"},D={class:"container"},G={class:"bg-white"},H={class:"container"},R={key:0,class:"py-7 py-md-9"},W={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},J=i(()=>s("h2",{class:"fs-2 fs-md-1"},"最新消息",-1)),K={class:"row g-3 g-lg-6 home-article"},O={class:"col-12 col-lg-6 home-article-img"},Q={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},X=i(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),Y=["src","alt"],Z={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},ss={class:"mb-4 fs-info fs-md-5 fw-bold"},ts={class:"fs-info fs-md-6 doubleline-ellipsis"},es={class:"d-block d-xl-none py-3"},os={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},is={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},ls={class:"col-6 d-flex flex-column home-article-img"},ds={class:"position-relative d-flex justify-content-center align-items-center flex-grow-1 overflow-hidden"},ns=i(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),as=["src","alt"],cs={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},rs={class:"mb-4 fs-info fs-md-5 fw-bold"},ms={class:"fs-info fs-md-6 doubleline-ellipsis"},ps={class:"d-block d-xl-none py-3"},fs={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},hs={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},_s={class:"col-6 col-lg-4 home-article-img"},bs={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},us=i(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),ws=["src","alt"],vs={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},gs={class:"mb-4 fs-info fs-md-5 fw-bold"},As={class:"fs-info fs-md-6 doubleline-ellipsis"},ys={class:"d-block d-xl-none py-3"},ks={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},xs={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},js={class:"col-6 col-lg-4 d-none d-lg-block home-article-img"},Ss={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},Vs=i(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),zs=["src"],Cs={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Ms={class:"mb-4 fs-info fs-md-5 fw-bold"},Us={class:"fs-info fs-md-6 doubleline-ellipsis"},Is={class:"d-block d-xl-none py-3"},$s={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},Fs={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},Ns={class:"col-6 col-lg-4 d-none d-lg-block home-article-img"},Bs={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},Es=i(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),Ls=["src","alt"],Ps={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},qs={class:"mb-4 fs-info fs-md-5 fw-bold"},Ts={class:"fs-info fs-md-6 doubleline-ellipsis"},Ds={class:"d-block d-xl-none py-3"},Gs={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},Hs={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},Rs={class:"position-relative d-flex justify-content-center align-items-center w-100 home-coupon overflow-hidden bg-primary"},Ws={class:"position-absolute top-50 z-1 translate-middle-y text-center title-shadow"},Js=i(()=>s("h2",{class:"mb-2 fs-4 fs-md-1 text-white title-letter-spacing"},"使用優惠券",-1)),Ks=i(()=>s("p",{class:"mb-7 fs-info fs-md-6 text-white"},"為你的第一筆訂單，獲取 97 折折扣",-1)),Os=i(()=>s("img",{src:z,alt:"coupon",class:"object-fit-cover w-100 h-100","data-aos":"zoom-out","data-aos-duration":"3000"},null,-1)),Qs={class:"bg-white"},Xs={class:"container"},Ys={class:"py-7 py-md-9"},Zs=i(()=>s("h2",{class:"mb-7 mb-md-8 fs-2 fs-md-1"},"與我們聯絡",-1)),st={class:"row d-flex flex-column flex-md-row g-6 justify-content-between"},tt=U('<div class="col col-md-5" data-v-0a29a2dd><div class="mb-4 mb-md-6" data-v-0a29a2dd><p class="mb-2 fs-6 fs-md-5 fw-bold" data-v-0a29a2dd>合作說明</p><p data-v-0a29a2dd>謝謝您對 Wanderdr Land 的認可與提攜，我們歡迎各種合作，期盼與藝術激發更多靈感與火花。誠摯邀請您來信提案，我們將有專門窗口與您聯繫。</p></div><div class="mb-4" data-v-0a29a2dd><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-0a29a2dd>合作單位</p><p data-v-0a29a2dd>請附上您的提案網址及單位官網，並於來信標題寫入單位名稱。</p></div><div class="mb-4" data-v-0a29a2dd><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-0a29a2dd>空間</p><p data-v-0a29a2dd>請附上您的空間官網，並於來信標題寫入空間名稱。</p></div><div data-v-0a29a2dd><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-0a29a2dd>藝術家</p><p data-v-0a29a2dd>請附上您的 CV 或是作品集網址，並於來信標題寫入藝術家名稱。</p></div></div>',1),et={class:"col col-md-6"},ot={class:"form-floating mb-4 mb-md-7 w-100"},it=i(()=>s("option",{selected:""},"請選擇類別",-1)),lt=i(()=>s("option",{value:"異業合作"},"異業合作",-1)),dt=i(()=>s("option",{value:"空間合作"},"空間合作",-1)),nt=i(()=>s("option",{value:"藝術家合作"},"藝術家合作",-1)),at=i(()=>s("label",{for:"floatingSelect"},"來信類別",-1)),ct={class:"form-floating mb-4 mb-md-7 w-100"},rt=i(()=>s("label",{for:"name"},"姓名",-1)),mt={class:"form-floating mb-4 mb-md-7 w-100"},pt=i(()=>s("label",{for:"subject"},"信件標題",-1)),ft={class:"form-floating mb-4 mb-md-7 w-100"},ht=i(()=>s("label",{for:"body"},"留言",-1));function _t(t,l,bt,ut,d,w){const c=r("router-link"),_=r("swiperProductComponent"),y=r("btnSeeMore"),f=r("v-field"),h=r("error-message"),k=r("v-form");return b(),u(M,null,[t.sortArticles.topArticle[0]?(b(),u("div",B,[s("img",{src:t.sortArticles.topArticle[0].imageUrl,alt:t.sortArticles.topArticle[0].title,class:"position-fixed z-n1 h-100 w-100 overflow-hidden object-fit-cover","data-aos":"zoom-out","data-aos-duration":"3000"},null,8,E),L,s("div",P,[s("h2",q,e(t.sortArticles.topArticle[0].title),1),o(c,{to:`/articleinfo/${t.sortArticles.topArticle[0].id}`,class:"py-2 py-md-3 px-6 px-md-9 btn btn-light rounded-0 fw-bold"},{default:n(()=>[I("前往頁面")]),_:1},8,["to"])])])):A("",!0),s("div",T,[s("div",D,[o(_,{dataCategory:"products"}),o(_,{dataCategory:"artists"})])]),s("div",G,[s("div",H,[t.sortArticles.newestArticles[0]?(b(),u("div",R,[s("div",W,[J,o(y,{linkTo:"/articlelist"})]),s("div",K,[s("div",O,[o(c,{to:`/articleInfo/${t.sortArticles.newestArticles[0].id}`},{default:n(()=>[s("div",Q,[X,s("img",{src:t.sortArticles.newestArticles[0].imageUrl,alt:t.sortArticles.newestArticles[0].title,class:"object-fit-cover w-100 h-100"},null,8,Y),s("div",Z,[s("h3",ss,e(t.sortArticles.newestArticles[0].title),1),s("p",ts,e(t.sortArticles.newestArticles[0].description),1)])]),s("div",es,[s("h3",os,e(t.sortArticles.newestArticles[0].title),1),s("p",is,e(t.sortArticles.newestArticles[0].description),1)])]),_:1},8,["to"])]),s("div",ls,[o(c,{to:`/articleInfo/${t.sortArticles.newestArticles[1].id}`,class:"d-flex flex-column flex-grow-1"},{default:n(()=>[s("div",ds,[ns,s("img",{src:t.sortArticles.newestArticles[1].imageUrl,alt:t.sortArticles.newestArticles[1].title,class:"object-fit-cover w-100 h-100"},null,8,as),s("div",cs,[s("h3",rs,e(t.sortArticles.newestArticles[1].title),1),s("p",ms,e(t.sortArticles.newestArticles[1].description),1)])]),s("div",ps,[s("h3",fs,e(t.sortArticles.newestArticles[1].title),1),s("p",hs,e(t.sortArticles.newestArticles[1].description),1)])]),_:1},8,["to"])]),s("div",_s,[o(c,{to:`/articleInfo/${t.sortArticles.newestArticles[2].id}`},{default:n(()=>[s("div",bs,[us,s("img",{src:t.sortArticles.newestArticles[2].imageUrl,alt:t.sortArticles.newestArticles[2].title,class:"object-fit-cover w-100 h-100"},null,8,ws),s("div",vs,[s("h3",gs,e(t.sortArticles.newestArticles[2].title),1),s("p",As,e(t.sortArticles.newestArticles[2].description),1)])]),s("div",ys,[s("h3",ks,e(t.sortArticles.newestArticles[2].title),1),s("p",xs,e(t.sortArticles.newestArticles[2].description),1)])]),_:1},8,["to"])]),s("div",js,[o(c,{to:`/articleInfo/${t.sortArticles.newestArticles[3].id}`},{default:n(()=>[s("div",Ss,[Vs,s("img",{src:t.sortArticles.newestArticles[3].imageUrl,alt:"art",class:"object-fit-cover w-100 h-100"},null,8,zs),s("div",Cs,[s("h3",Ms,e(t.sortArticles.newestArticles[3].title),1),s("p",Us,e(t.sortArticles.newestArticles[3].description),1)])]),s("div",Is,[s("h3",$s,e(t.sortArticles.newestArticles[3].title),1),s("p",Fs,e(t.sortArticles.newestArticles[3].description),1)])]),_:1},8,["to"])]),s("div",Ns,[o(c,{to:`/articleInfo/${t.sortArticles.newestArticles[4].id}`},{default:n(()=>[s("div",Bs,[Es,s("img",{src:t.sortArticles.newestArticles[4].imageUrl,alt:t.sortArticles.newestArticles[4].title,class:"object-fit-cover w-100 h-100"},null,8,Ls),s("div",Ps,[s("h3",qs,e(t.sortArticles.newestArticles[4].title),1),s("p",Ts,e(t.sortArticles.newestArticles[4].description),1)])]),s("div",Ds,[s("h3",Gs,e(t.sortArticles.newestArticles[4].title),1),s("p",Hs,e(t.sortArticles.newestArticles[4].description),1)])]),_:1},8,["to"])])])])):A("",!0)])]),s("div",Rs,[s("div",Ws,[Js,Ks,s("button",{type:"button",class:"py-2 py-md-3 px-6 px-md-9 btn btn-light fw-bold rounded-0",onClick:l[0]||(l[0]=m=>t.copyCouponCode("present97"))},"點擊複製優惠碼")]),Os]),s("div",Qs,[s("div",Xs,[o(_,{dataCategory:"recently"}),s("div",Ys,[Zs,s("div",st,[tt,s("div",et,[o(k,{class:"d-flex flex-column align-items-end",onSubmit:w.sendEmail,ref:"cooperationForm"},{default:n(({errors:m})=>[s("div",ot,[o(f,{class:p(["form-select border-info rounded-0",{"is-invalid":m.類別}]),id:"floatingSelect","aria-label":"Floating label select",modelValue:d.tempMessage.type,"onUpdate:modelValue":l[1]||(l[1]=a=>d.tempMessage.type=a),as:"select",name:"類別",rules:"required"},{default:n(()=>[it,lt,dt,nt]),_:2},1032,["class","modelValue"]),o(h,{name:"類別",class:"invalid-feedback"}),at]),s("div",ct,[o(f,{id:"name",name:"姓名",type:"text",class:p(["form-control border-info rounded-0",{"is-invalid":m.姓名}]),placeholder:"請輸入您的姓名",rules:"required",modelValue:d.tempMessage.name,"onUpdate:modelValue":l[2]||(l[2]=a=>d.tempMessage.name=a)},null,8,["class","modelValue"]),o(h,{name:"姓名",class:"invalid-feedback"}),rt]),s("div",mt,[o(f,{id:"subject",name:"標題",type:"text",class:p(["form-control border-info rounded-0",{"is-invalid":m.標題}]),placeholder:"請輸入您的信件標題",rules:"required",modelValue:d.message.subject,"onUpdate:modelValue":l[3]||(l[3]=a=>d.message.subject=a)},null,8,["class","modelValue"]),o(h,{name:"標題",class:"invalid-feedback"}),pt]),s("div",ft,[o(f,{id:"body",name:"訊息",class:p(["form-control border-info rounded-0",{"is-invalid":m.訊息}]),as:"textarea",placeholder:"請輸入您的訊息",rules:"required",style:{height:"273px"},modelValue:d.message.body,"onUpdate:modelValue":l[4]||(l[4]=a=>d.message.body=a)},null,8,["class","modelValue"]),o(h,{name:"訊息",class:"invalid-feedback"}),ht]),s("button",{type:"submit",class:p(["py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto",{"cursor-notallowed":w.isFormEmpty}])}," 送出訊息 ",2)]),_:1},8,["onSubmit"])])])])])])],64)}const Jt=C(N,[["render",_t],["__scopeId","data-v-0a29a2dd"]]);export{Jt as default};
