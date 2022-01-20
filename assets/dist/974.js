"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[974],{8825:(t,e,a)=>{a.d(e,{H:()=>r});class s extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,e){var a;return null===(a=this.getElement(t))||void 0===a?void 0:a.getAttribute(e)}val(t){return this.getAttribute(t,"value")}isUser(){return!!salla.config.is_user}}const r=new s},4974:(t,e,a)=>{a.r(e),a.d(e,{salla_rating:()=>i});var s=a(7502),r=a(8825);const i=class{constructor(t){(0,s.r)(this,t),this.stars=[1,2,3,4,5],this.order={shipping:{id:5622},products:[{title:"ميكروفون عالى الجودة",image:"https://salla-dev.s3.eu-central-1.amazonaws.com/Mvyk/pMdEEyMVpZFj4L1Hrdm2g48AuiSx0TrKULBiOnPo.jpg",price:"‏10,978.00 ر.س",qty:"‏2",totalBefore:"‏1120 ر.س",discount:"-5%",total:"‏1064 ر.س",id:"2314513454",getOptimusRouteKey:"7351233357"},{title:"ساعة ذكية بنظام اندرويد",image:"https://salla-dev.s3.eu-central-1.amazonaws.com/Mvyk/T4kTqYNuPAZmPMLw1bx92RnjVMZyFszVXOUZQsFJ.jpg",price:"‏10,978.00 ر.س",qty:"‏2",totalBefore:"‏1120 ر.س",discount:"-5%",total:"‏1064 ر.س",id:"679822376",getOptimusRouteKey:"73233357"}]},this.isProductsRating=!1,this.ratingChain=Promise.resolve(),this.stepsCount=0,r.H.setHost(this.host)}async show(){return this.modal.show()}async hide(){return this.modal.hide()}componentWillLoad(){this.stepsCount=[this.isStoreRating,this.isProductsRating,this.isShippingRating].filter((t=>t)).length,this.getData()}componentDidRender(){this.show(),this.initiateRating()}initiateRating(){this.highlightSelectedStars(),this.starsRating(),this.handleWizard();const t=this.host.querySelector(".step:first-child");this.setModalHeight(t),salla.event.on("submit::order-rating",(()=>this.sendRating().then((()=>{let t=10,e=setInterval((()=>{t--,this.host.querySelector(".close-time").innerHTML=`00:0${t}`,0==t&&(this.hide(),clearInterval(e))}),1e3);this.host.querySelector(".wizard-footer").classList.add("opacity-0","pointer-events-0"),r.H.toggle(".step","hidden","block",(()=>!0)),r.H.toggle(".thankyou-view","is-opened","hidden",(()=>!0));const a=this.host.querySelector(".thankyou-view");this.setModalHeight(a),setTimeout((()=>{r.H.toggleElement(a,["opacity-1","translate-x-0"],["opacity-0","translate-x-3"],(()=>!0))}),200)}))))}handleWizard(){let t=0,e=document.querySelectorAll(".step"),a=document.querySelectorAll(".step-dot");this.showActiveStep(e,a,t),r.H.onClick("#prev-btn",(()=>{t>0&&t--,this.showActiveStep(e,a,t),0==t&&r.H.toggle("#prev-btn",["pointer-events-none","opacity-0"],"block",(()=>!0))})),r.H.onClick("#next-btn",(()=>{this.ratingValidation(),t==this.stepsCount-1?salla.event.dispatch("submit::order-rating"):(t<this.stepsCount-1&&t++,this.showActiveStep(e,a,t),r.H.toggle("#prev-btn","block",["pointer-events-none","opacity-0"],(()=>!0)))}))}showActiveStep(t,e,a){r.H.toggle(".step-dot","bg-gray-200","bg-primay",(()=>!0)),this.stepsCount>1&&r.H.toggleElement(e[a],"bg-primary","bg-gray-200",(()=>!0)),r.H.toggle(".step",["hidden","opacity-0","translate-x-3"],["active","opacity-1","translate-x-0"],(()=>!0)),r.H.toggleElement(t[a],"active","hidden",(()=>!0)),this.setModalHeight(t[a]),setTimeout((()=>{r.H.toggleElement(t[a],["opacity-1","translate-x-0"],["opacity-0","translate-x-3"],(()=>!0))}),200)}setModalHeight(t){const e=this.host.querySelector(".s-order-rating-steps-wrapper");setTimeout((()=>{null==e||e.setAttribute("style","height:"+(null==t?void 0:t.scrollHeight)+"px")}))}sendRating(){return r.H.all(".rating-section",(t=>{let e=t.dataset.type,a=[];t.querySelectorAll(".rating-outer-form").forEach((t=>{let s={};t.querySelectorAll("[name]").forEach((function(t){let e=salla.helpers.inputData(t.name,t.value,s);s[e.name]=e.value})),a=[],a.push(s),this.sendFeedback(e,a)}))})),this.ratingChain}sendFeedback(t,e){e&&0!=e.length&&(this.nextBtn.load(),salla.config.canLeave=!1,this.ratingChain=salla.feedback.api[t](e[0]).then((function(){salla.config.canLeave=!0})).catch((()=>salla.config.canLeave=!0)))}ratingValidation(){let t="";if(document.querySelectorAll(".rating-section.active").forEach((e=>{e.querySelectorAll(".rating-outer-form").forEach((e=>{let a=e.querySelector(".rating_hidden_input"),s=e.querySelector(".comment"),r=e.querySelector(".validation-message");if(a.value&&s.value&&s.value.length>3)return s.classList.remove("has-error"),void(r.innerHTML="");s.value&&s.value.length>3?s.classList.remove("has-error"):s.classList.add("has-error"),t=a.value?salla.lang.get("common.errors.not_less_than_chars",{chars:4})+" "+s.getAttribute("placeholder"):e.dataset.starsError||salla.lang.get("pages.rating.rate_store_stars"),r.innerHTML=t}))})),t){let e=document.querySelectorAll(".has-error");if(e.length){let t=e[0].offsetTop;window.scrollTo({top:t-80})}throw new Error(t)}}getData(){salla.api.order.endpointsMethods.details="get",salla.order.api.details(salla.config.page.id).then((t=>console.log("")))}starsRating(){let t=["selected","text-theme-yellow"];salla.document.event.onSubmit(".rate-element",(function(e){e.preventDefault();var a=e.target.querySelectorAll(".btn--star.hovered"),s=a[a.length-1];if(s){var r=parseInt(s.dataset.star,10);e.target.querySelector(".rating_hidden_input").value=r,e.target.querySelectorAll(".btn--star").forEach((function(e,a){a<r?e.classList.add(...t):e.classList.remove(...t)}));var i=e.target.querySelector('.star[aria-pressed="true"]');i&&i.removeAttribute("aria-pressed"),s.setAttribute("aria-pressed",!0)}}))}highlightSelectedStars(){let t=["hovered","text-theme-yellow"];r.H.all(".rate-element",(e=>{let a=e.querySelectorAll(".btn--star");e.addEventListener("mouseout",(()=>e.querySelectorAll(".btn--star").forEach((e=>e.classList.remove(...t))))),a.forEach(((e,s)=>{e.addEventListener("mouseover",(()=>{if(e.classList.add(...t),s<=1)"BUTTON"===e.previousElementSibling.tagName&&e.previousElementSibling.classList.add(...t);else for(let e=0;e<s;e++)a[e].classList.add(...t)})),e.addEventListener("mouseout",(()=>{e.classList.contains(...t)&&e.classList.remove(...t)}))}))}))}render(){return(0,s.h)(s.e,null,(0,s.h)("salla-modal",{class:"hidden","modal-width":"w-[800px]",ref:t=>this.modal=t,title:salla.lang.get("pages.rating.rate_order")+' <span class="unicode">(#'+this.orderId+")</span>"},(0,s.h)("div",{class:"s-order-rating-steps-wrapper mt-12 mb-10 transition-all duration-300 ease-elastic"},this.isStoreRating&&this.renderStoreRating(),this.isProductsRating&&this.renderProductsRating(),this.isShippingRating&&this.renderShippingRating(),this.renderThanksView()),(0,s.h)("div",{class:"wizard-footer relative flex justify-between items-center"},(0,s.h)("button",{id:"prev-btn",class:"font-bold text-sm w-28 h-10 px-4 text-primary hover:text-primary-d opacity-0 pointer-events-none duration-300 transition-all"},"السابق"),this.stepsCount>1?(0,s.h)("ul",{class:"flex justify-center text-center space-s-1.5 flex-1"},[0,1,2].slice(0,this.stepsCount).map((t=>(0,s.h)("li",{class:(0==t?"bg-primary":"bg-gray-200")+" step-dot w-2.5 h-2.5 rounded-full transition-colors duration-300"})))):"",(0,s.h)("salla-button",{id:"next-btn",class:"w-28",ref:t=>this.nextBtn=t},"التالي"))))}renderStoreRating(){return(0,s.h)("section",{class:"step rating-section active transition-all duration-500 opacity-0 translate-x-3 hidden","data-type":"store","data-step-name":"تقييم المتجر"},(0,s.h)("div",{class:"rating-outer-form","data-stars-error":salla.lang.get("pages.rating.rate_store_stars")},(0,s.h)("input",{type:"hidden",name:"order_id",value:this.orderId}),(0,s.h)("input",{type:"hidden",name:"type",value:"store"}),(0,s.h)("div",{class:"flex flex-col items-center "},(0,s.h)("div",{class:"w-28 h-28 border border-gray-200 rounded-full flex items-center justify-center mb-4"},(0,s.h)("img",{src:"https://salla-dev.s3.eu-central-1.amazonaws.com/Mvyk/X3NKcY7nhaFQlR7kBBHvfDpMY48cerunKrmDA1gi.png",alt:"store name",class:"w-12 object-contain"})),(0,s.h)("h2",{class:"section-title text-lg font-bold mb-4"},salla.lang.get("pages.rating.rate_the_store"))),(0,s.h)("div",{class:"rating-wrap flex items-center flex justify-center mb-4"},(0,s.h)("form",{class:"rate-element rate-element--has-label"},this.getStarsRating())),(0,s.h)("textarea",{id:"storeReview",name:"comment",class:"form-input comment h-20",placeholder:salla.lang.get("pages.rating.write_store_rate")}),(0,s.h)("small",{class:"text-red-400 validation-message"})))}renderProductsRating(){return(0,s.h)("section",{class:"step rating-section products-section transition-all duration-500 opacity-0 translate-x-3 hidden","data-type":"product","data-step-name":"تقييم المنتجات"},(0,s.h)("div",{class:"overflow-hidden"},this.order.products.map(((t,e)=>(0,s.h)("div",{class:"rating-outer-form mb-8 last:mb-0","data-stars-error":salla.lang.get("pages.rating.rate_product_stars",{item:t.title})},(0,s.h)("div",{class:"product-item"},(0,s.h)("div",{class:"flex space-s-5"},(0,s.h)("img",{src:t.image,alt:t.title,class:"w-18 h-14 object-cover rounded-md"}),(0,s.h)("div",{class:"flex-1"},(0,s.h)("h3",{class:"section-title leading-5 mb-1.5 font-bold  md:text-sm"}," ",t.title),(0,s.h)("div",{class:"rw-product-entry__rate"},(0,s.h)("div",{class:"rating-wrap flex items-center space-s-4"},(0,s.h)("form",{class:"rate-element rate-element--has-label"},this.getStarsRating())),(0,s.h)("input",{type:"hidden",name:"order_id",value:this.orderId}),(0,s.h)("input",{type:"hidden",name:`products[${e}][product_id]`,value:t.getOptimusRouteKey}),(0,s.h)("input",{type:"hidden",name:"type",value:"products"}),(0,s.h)("textarea",{"data-product-id":t.id,name:`products[${e}][comment]`,id:`productReview_${t.id}`,class:"comment form-input h-20 product-review",placeholder:salla.lang.get("pages.rating.write_product_rate")}),(0,s.h)("small",{class:"text-red-400 validation-message"}))))))))))}renderShippingRating(){return(0,s.h)("section",{class:"step rating-section py-5 rounded-md transition-all duration-500 opacity-0 translate-x-3 hidden","data-type":"shipping","data-step-name":"تقييم شركة الشحن"},(0,s.h)("div",{class:"rating-outer-form","data-stars-error":salla.lang.get("pages.rating.rate_shipping_stars")},(0,s.h)("input",{type:"hidden",name:"order_id",value:this.orderId}),(0,s.h)("input",{type:"hidden",name:"shipping_company_id",value:this.order.shipping.id}),(0,s.h)("input",{type:"hidden",name:"type",value:"shipping"}),(0,s.h)("div",{class:"flex flex-col items-center "},(0,s.h)("div",{class:"w-28 h-28 overflow-hidden border border-gray-200 rounded-full flex items-center justify-center mb-4"},(0,s.h)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPt4R6KaKDldrXb-9pUljFwL3m6A72BhN6p1qZJKprwC6VbCWC_8ASZgiJAoL_l7DepM&usqp=CAU",alt:"company name",class:"w-full h-full object-contain"})),(0,s.h)("h2",{class:"section-title text-lg font-bold mb-4"}," ",salla.lang.get("pages.rating.rate_shipping")," ارامكس")),(0,s.h)("div",{class:"rating-wrap flex flex justify-center mb-4"},(0,s.h)("form",{class:"rate-element ratFeedbackPresentere-element--has-label"},this.getStarsRating())),(0,s.h)("textarea",{id:"shippingReview",name:"comment",class:"form-input comment h-20 mb-2",placeholder:salla.lang.get("pages.rating.write_shipping_rate")}),(0,s.h)("small",{class:"text-red-400 validation-message"})))}renderThanksView(){return(0,s.h)("div",{class:"thankyou-view px-8 text-center transition-all duration-500 opacity-0 translate-x-3 hidden"},(0,s.h)("span",{class:"w-20 h-20 text-4xl inline-flex justify-center items-center bg-gray-50 rounded-full text-primary sicon-check-circle2"}),(0,s.h)("div",{class:"mt-4 mb-6"},(0,s.h)("h3",{class:"font-bold"},salla.lang.get("pages.rating.thanks")),(0,s.h)("div",{class:"text-gray-400 text-sm",innerHTML:this.thanksMsg})),(0,s.h)("a",{href:"#!",onClick:()=>this.hide(),class:"btn btn-primary h-10 flex-none px-8"},"عودة إلي تفاصيل الطلب"),(0,s.h)("time",{class:"close-time text-gray-400 block h-6 mt-3 text-sm"}))}getStarsRating(){return(0,s.h)("div",{class:"mb-1"},(0,s.h)("input",{type:"hidden",class:"rating_hidden_input",name:"rating",value:""}),this.stars.map((t=>(0,s.h)("button",{type:"submit",class:"btn btn--transparent px-1 text-2xl text-gray-400 btn--star","data-star":t},(0,s.h)("i",{class:"sicon-star2"})))))}get host(){return(0,s.g)(this)}};i.style=":host{display:block}"}}]);