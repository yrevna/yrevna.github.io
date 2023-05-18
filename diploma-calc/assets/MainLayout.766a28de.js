import{c as S,h as N,a as X,b as Y}from "./dom.8e54e57c.js";import{c as f,h as m,r as z,j,o as R,k as H,n as A,l as M,g as C,m as E,i as K,p as L,q as D,w as T,s as G,t as Z,u as _,a as ee,v as te,x as oe,y as ne,z as k,d as q,A as le}from "./index.0d8e7420.js";import{g as ae,a as re,b as ie,c as B,u as se,Q as ue}from "./use-quasar.8f36e11e.js";var ce=S({name:"QToolbarTitle",props:{shrink:Boolean},setup(e, {slots:d}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:o.value},N(d.default))}});const de=m("div",{class:"q-space"});var fe=S({name:"QSpace",setup(){return()=>de}}),ve=S({name:"QToolbar",props:{inset:Boolean},setup(e, {slots:d}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:o.value,role:"toolbar"},N(d.default))}});function he(){const e=z(!j.value);return e.value===!1&&R(()=>{e.value=!0}),e}const J=typeof ResizeObserver!="undefined",U=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var F=S({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e, {emit:d}){let o=null,t,n={width:-1,height:-1};function s(u){u===!0||e.debounce===0||e.debounce==="0"?r():o===null&&(o=setTimeout(r,e.debounce))}function r(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:u,offsetHeight:a}=t;(u!==n.width||a!==n.height)&&(n={width:u,height:a},d("resize",n))}}const{proxy:v}=C();if(J===!0){let u;const a= g=>{t=v.$el.parentNode,t?(u=new ResizeObserver(s),u.observe(t),r()):g!==!0&&M(()=>{a(!0)})};return R(()=>{a()}),H(()=>{o!==null&&clearTimeout(o),u!==void 0&&(u.disconnect!==void 0?u.disconnect():t&&u.unobserve(t))}),A}else{let g=function(){o!==null&&(clearTimeout(o),o=null),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",s,E.passive),a=void 0)},p=function(){g(),t&&t.contentDocument&&(a=t.contentDocument.defaultView,a.addEventListener("resize",s,E.passive),r())};const u=he();let a;return R(()=>{M(()=>{t=v.$el,t&&p()})}),H(g),v.trigger=s,()=>{if(u.value===!0)return m("object",{style:U.style,tabindex:-1,type:"text/html",data:U.url,"aria-hidden":"true",onLoad:p})}}}}),me=S({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e, {slots:d,emit:o}){const{proxy:{$q:t}}=C(),n=K(D,L);if(n===L)return console.error("QHeader needs to be child of QLayout"),L;const s=z(parseInt(e.heightHint,10)),r=z(!0),v=f(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||t.platform.is.ios&&n.isContainer.value===!0),u=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return r.value===!0?s.value:0;const l=s.value-n.scroll.value.position;return l>0?l:0}),a=f(()=>e.modelValue!==!0||v.value===!0&&r.value!==!0),g=f(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const l=n.rows.value.top,b={};return l[0]==="l"&&n.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),l[2]==="r"&&n.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),b});function c(l, b){n.update("header",l,b)}function y(l, b){l.value!==b&&(l.value=b)}function P({height:l}){y(s,l),c("size",l)}function V(l){g.value===!0&&y(r,!0),o("focusin",l)}T(()=>e.modelValue, l=>{c("space",l),y(r,!0),n.animate()}),T(u, l=>{c("offset",l)}),T(()=>e.reveal, l=>{l===!1&&y(r,e.modelValue)}),T(r, l=>{n.animate(),o("reveal",l)}),T(n.scroll, l=>{e.reveal===!0&&y(r,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const $={};return n.instances.header=$,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",u.value),H(()=>{n.instances.header===$&&(n.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const l=X(d.default,[]);return e.elevated===!0&&l.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(m(F,{debounce:0,onResize:P})),m("header",{class:p.value,style:w.value,onFocusin:V},l)}}}),ge=S({name:"QPageContainer",setup(e, {slots:d}){const{proxy:{$q:o}}=C(),t=K(D,L);if(t===L)return console.error("QPageContainer needs to be child of QLayout"),L;G(Z,!0);const n=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>m("div",{class:"q-page-container",style:n.value},N(d.default))}});const{passive:W}=E,pe=["both","horizontal","vertical"];var be=S({name:"QScrollObserver",props:{axis:{type:String,validator: e=>pe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e, {emit:d}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,s;T(()=>e.scrollTarget,()=>{u(),v()});function r(){t!==null&&t();const p=Math.max(0,re(n)),w=ie(n),c={top:p-o.position.top,left:w-o.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";o.position={top:p,left:w},o.directionChanged=o.direction!==y,o.delta=c,o.directionChanged===!0&&(o.direction=y,o.inflectionPoint=o.position),d("scroll",{...o})}function v(){n=ae(s,e.scrollTarget),n.addEventListener("scroll",a,W),a(!0)}function u(){n!==void 0&&(n.removeEventListener("scroll",a,W),n=void 0)}function a(p){if(p===!0||e.debounce===0||e.debounce==="0")r();else if(t===null){const[w,c]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];t=()=>{c(w),t=null}}}const{proxy:g}=C();return T(()=>g.$q.lang.rtl,r),R(()=>{s=g.$el.parentNode,v()}),H(()=>{t!==null&&t(),u()}),Object.assign(g,{trigger:a,getPosition:()=>o}),A}}),ye=S({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator: e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e, {slots:d,emit:o}){const{proxy:{$q:t}}=C(),n=z(null),s=z(t.screen.height),r=z(e.container===!0?0:t.screen.width),v=z({position:0,direction:"down",inflectionPoint:0}),u=z(0),a=z(j.value===!0?0:B()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=f(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=f(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function y(i){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};v.value=h,e.onScroll!==void 0&&o("scroll",h)}}function P(i){const{height:h,width:x}=i;let Q=!1;s.value!==h&&(Q=!0,s.value=h,e.onScrollHeight!==void 0&&o("scrollHeight",h),$()),r.value!==x&&(Q=!0,r.value=x),Q===!0&&e.onResize!==void 0&&o("resize",i)}function V({height:i}){u.value!==i&&(u.value=i,$())}function $(){if(e.container===!0){const i=s.value>u.value?B():0;a.value!==i&&(a.value=i)}}let l=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:n,height:s,containerHeight:u,scrollbarWidth:a,totalWidth:f(()=>r.value+a.value),rows:f(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:_({size:0,offset:0,space:!1}),right:_({size:300,offset:0,space:!1}),footer:_({size:0,offset:0,space:!1}),left:_({size:300,offset:0,space:!1}),scroll:v,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i, h, x){b[i][h]=x}};if(G(D,b),B()>0){let x=function(){i=null,h.classList.remove("hide-scrollbar")},Q=function(){if(i===null){if(h.scrollHeight>t.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(x,300)},O=function(I){i!==null&&I==="remove"&&(clearTimeout(i),x()),window[`${I}EventListener`]("resize",Q)},i=null;const h=document.body;T(()=>e.container!==!0?"add":"remove",O),e.container!==!0&&O("add"),ee(()=>{O("remove")})}return()=>{const i=Y(d.default,[m(be,{onScroll:y}),m(F,{onResize:P})]),h=m("div",{class:g.value,style:p.value,ref:e.container===!0?void 0:n,tabindex:-1},i);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:n},[m(F,{onResize:V}),m("div",{class:"absolute-full",style:w.value},[m("div",{class:"scroll",style:c.value},[h])])]):h}}});const Se={__name:"MainLayout",setup(e){var s;const d=se(),o=()=>{const r=localStorage.getItem("darkTheme");return r==="true"?!0:r==="false"?!1:null};d.dark.set((s=o())!=null?s:"auto");const n=f({get:()=>d.dark.mode==="auto"?null:d.dark.mode,set: r=>{r===null?localStorage.removeItem("darkTheme"):localStorage.setItem("darkTheme",r?"true":"false"),r!==null?d.dark.set(r):d.dark.set("auto")}});return z(!1),(r, v)=>{const u=te("router-view");return oe(),ne(ye,{view:"lHh Lpr lFf"},{default:k(()=>[q(me,{elevated:""},{default:k(()=>[q(ve,null,{default:k(()=>[q(ce,null,{default:k(()=>[le(" Diploma Chart App ")]),_:1}),q(fe),q(ue,{modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]= a=>n.value=a),"toggle-indeterminate":"",label:"\u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",color:"dark"},null,8,["modelValue"])]),_:1})]),_:1}),q(ge,null,{default:k(()=>[q(u)]),_:1})]),_:1})}}};export{Se as default};
