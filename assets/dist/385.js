"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[385],{8825:(t,s,e)=>{e.d(s,{H:()=>o});class i extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,s){var e;return null===(e=this.getElement(t))||void 0===e?void 0:e.getAttribute(s)}val(t){return this.getAttribute(t,"value")}isUser(){return!!salla.config.is_user}}const o=new i},8385:(t,s,e)=>{e.r(s),e.d(s,{salla_button:()=>n});var i=e(7502),o=e(8825);const n=class{constructor(t){(0,i.r)(this,t),this.btnStyle="primary",this.loading=!1,this.disabled=!1,this.loaderPosition="before",this.wide=!1,this.hostAttributes={};for(let t=0;t<this.host.attributes.length;t++)this.hostAttributes[this.host.attributes[t].name]=this.host.attributes[t].value;this.hostAttributes.type=this.hostAttributes.type||"button",this.hostAttributes.class+=" s-button-btn btn--has-loading btn-"+this.btnStyle+(this.wide?" s-button-wide ":"")+"loader-"+this.loaderPosition+("before"==this.loaderPosition?" flex-row-reverse":""),delete this.hostAttributes["btn-style"],delete this.hostAttributes.id,this.wide&&this.host.classList.add("s-button-wide")}async load(){return"center"==this.loaderPosition&&this.host.querySelector(".btn-text").classList.add("opacity-0"),this.host.setAttribute("loading",""),this.host}async stop(){return this.host.removeAttribute("loading"),this.host}async disable(){this.host.setAttribute("disabled","")}async enable(){this.host.removeAttribute("disabled")}handleVisible(t,s){this.btn.classList.remove("btn-"+s),this.btn.classList.add("btn-"+t)}handleLoading(t){o.H.toggleElement(this.btn,"btn--is-loading","btn--no-loading",(()=>t))}render(){return(0,i.h)("button",Object.assign({ref:t=>this.btn=t,disabled:this.disabled},this.hostAttributes),(0,i.h)("span",{class:"btn-text transition-opacity duration-300"},(0,i.h)("slot",null)),this.loading?(0,i.h)("span",{class:{"loader loader--small s-button-loader":!0,"absolute right-2":"start"===this.loaderPosition,"absolute left-2":"end"===this.loaderPosition,"absolute top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 !m-0":"center"===this.loaderPosition}}):"")}get host(){return(0,i.g)(this)}static get watchers(){return{btnStyle:["handleVisible"],loading:["handleLoading"]}}};n.style=":host{display:block}"}}]);