import{E as x,G as B,h as u,H as _,c as m,g as k,I as M}from "./index.0d8e7420.js";const j= t=>x(B(t)),A= t=>x(t);function F(t, e){return t!==void 0&&t()||e}function J(t, e){if(t!==void 0){const s=t();if(s!=null)return s.slice()}return e}function l(t, e){return t!==void 0?e.concat(t()):e}function K(t, e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function L(t, e, s, a, c, r){e.key=a+c;const i=u(t,e,s);return c===!0?_(i,r()):i}const q={xs:18,sm:24,md:32,lg:38,xl:46},D={size:String};function I(t, e=q){return m(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const h="0 0 24 24",y= t=>t,d= t=>`ionicons ${t}`,p={"mdi-": t=>`mdi ${t}`,"icon-":y,"bt-": t=>`bt ${t}`,"eva-": t=>`eva ${t}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":y,"ti-": t=>`themify-icon ${t}`,"bi-": t=>`bootstrap-icons ${t}`},S={o_:"-outlined",r_:"-round",s_:"-sharp"},E={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},C=new RegExp("^("+Object.keys(p).join("|")+")"),O=new RegExp("^("+Object.keys(S).join("|")+")"),b=new RegExp("^("+Object.keys(E).join("|")+")"),Q=/^[Mm]\s?[-+]?\.?\d/,H=/^img:/,U=/^svguse:/,G=/^ion-/,P=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var N=j({name:"QIcon",props:{...D,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t, {slots:e}){const{proxy:{$q:s}}=k(),a=I(t),c=m(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),r=m(()=>{let i,n=t.name;if(n==="none"||!n)return{none:!0};if(s.iconMapFn!==null){const o=s.iconMapFn(n);if(o!==void 0)if(o.icon!==void 0){if(n=o.icon,n==="none"||!n)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Q.test(n)===!0){const[o,v=h]=n.split("|");return{svg:!0,viewBox:v,nodes:o.split("&&").map(R=>{const[$,w,z]=R.split("@@");return u("path",{style:w,d:$,transform:z})})}}if(H.test(n)===!0)return{img:!0,src:n.substring(4)};if(U.test(n)===!0){const[o,v=h]=n.split("|");return{svguse:!0,src:o.substring(7),viewBox:v}}let f=" ";const g=n.match(C);if(g!==null)i=p[g[1]](n);else if(P.test(n)===!0)i=n;else if(G.test(n)===!0)i=`ionicons ion-${s.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(b.test(n)===!0){i="notranslate material-symbols";const o=n.match(b);o!==null&&(n=n.substring(6),i+=E[o[1]]),f=n}else{i="notranslate material-icons";const o=n.match(O);o!==null&&(n=n.substring(2),i+=S[o[1]]),f=n}return{cls:i,content:f}});return()=>{const i={class:c.value,style:a.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?u(t.tag,i,F(e.default)):r.value.img===!0?u("span",i,l(e.default,[u("img",{src:r.value.src})])):r.value.svg===!0?u("span",i,l(e.default,[u("svg",{viewBox:r.value.viewBox||"0 0 24 24"},r.value.nodes)])):r.value.svguse===!0?u("span",i,l(e.default,[u("svg",{viewBox:r.value.viewBox},[u("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(i.class+=" "+r.value.cls),u(t.tag,i,l(e.default,[r.value.content])))}}});function T(t, e){const s=t.style;for(const a in e)s[a]=e[a]}function W(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=M(t);if(e)return e.$el||e}function X(t, e){if(t==null||t.contains(e)===!0)return!0;for(let s=t.nextElementSibling; s!==null; s=s.nextElementSibling)if(s.contains(e))return!0;return!1}export{N as Q,J as a,l as b,j as c,D as d,T as e,L as f,W as g,F as h,K as i,X as j,q as k,A as l,I as u};
