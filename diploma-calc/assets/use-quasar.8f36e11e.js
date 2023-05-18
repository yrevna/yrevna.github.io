import{u as z,b as N,h as Q,d as W,c as D,Q as F,g as R,e as y}from "./dom.8e54e57c.js";import{c as l,r as V,h as i,g as H,B as f,C as S,i as K,D as M}from "./index.0d8e7420.js";const X={dark:{type:Boolean,default:null}};function Y(t, o){return l(()=>t.dark===null?o.dark.isActive:t.dark)}function G(t, o){const e=V(null),a=l(()=>t.disable===!0?null:i("span",{ref:e,class:"no-outline",tabindex:-1}));function d(r){const s=o.value;r!==void 0&&r.type.indexOf("key")===0?s!==null&&document.activeElement!==s&&s.contains(document.activeElement)===!0&&s.focus():e.value!==null&&(r===void 0||s!==null&&s.contains(r.target)===!0)&&e.value.focus()}return{refocusTargetEl:a,refocusTarget:d}}const J={name:String};function U(t={}){return(o, e, a)=>{o[e](i("input",{class:"hidden"+(a||""),...t.value}))}}function re(t){return l(()=>t.name||t.for)}var Z={xs:30,sm:35,md:40,lg:50,xl:60};const ee={...X,...W,...J,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator: t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},te=["update:modelValue"];function ne(t, o){const{props:e,slots:a,emit:d,proxy:r}=H(),{$q:s}=r,C=Y(e,s),p=V(null),{refocusTargetEl:w,refocusTarget:I}=G(e,p),q=z(e,Z),v=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),h=l(()=>{const n=f(e.val);return v.value===!0?e.modelValue.findIndex(c=>f(c)===n):-1}),u=l(()=>v.value===!0?h.value>-1:f(e.modelValue)===f(e.trueValue)),g=l(()=>v.value===!0?h.value===-1:f(e.modelValue)===f(e.falseValue)),k=l(()=>u.value===!1&&g.value===!1),E=l(()=>e.disable===!0?-1:e.tabindex||0),_=l(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(C.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),T=l(()=>{const n=u.value===!0?"truthy":g.value===!0?"falsy":"indet",c=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?u.value===!0:g.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${n}${c}`}),$=l(()=>{const n={type:"checkbox"};return e.name!==void 0&&Object.assign(n,{".checked":u.value,"^checked":u.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),n}),O=U($),L=l(()=>{const n={tabindex:E.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":k.value===!0?"mixed":u.value===!0?"true":"false"};return e.disable===!0&&(n["aria-disabled"]="true"),n});function b(n){n!==void 0&&(S(n),I(n)),e.disable!==!0&&d("update:modelValue",A(),n)}function A(){if(v.value===!0){if(u.value===!0){const n=e.modelValue.slice();return n.splice(h.value,1),n}return e.modelValue.concat([e.val])}if(u.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(g.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function B(n){(n.keyCode===13||n.keyCode===32)&&S(n)}function P(n){(n.keyCode===13||n.keyCode===32)&&b(n)}const j=o(u,k);return Object.assign(r,{toggle:b}),()=>{const n=j();e.disable!==!0&&O(n,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const c=[i("div",{class:T.value,style:q.value,"aria-hidden":"true"},n)];w.value!==null&&c.push(w.value);const x=e.label!==void 0?N(a.default,[e.label]):Q(a.default);return x!==void 0&&c.push(i("div",{class:`q-${t}__label q-anchor--skip`},x)),i("div",{ref:p,class:_.value,...L.value,onClick:b,onKeydown:B,onKeyup:P},c)}}var ue=D({name:"QToggle",props:{...ee,icon:String,iconColor:String},emits:te,setup(t){function o(e, a){const d=l(()=>(e.value===!0?t.checkedIcon:a.value===!0?t.indeterminateIcon:t.uncheckedIcon)||t.icon),r=l(()=>e.value===!0?t.iconColor:null);return()=>[i("div",{class:"q-toggle__track"}),i("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},d.value!==void 0?[i(F,{name:d.value,color:r.value})]:void 0)]}return ne("toggle",o)}});const oe=[null,document,document.body,document.scrollingElement,document.documentElement];function se(t, o){let e=R(o);if(e===void 0){if(t==null)return window;e=t.closest(".scroll,.scroll-y,.overflow-auto")}return oe.includes(e)?window:e}function ie(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function ce(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let m;function de(){if(m!==void 0)return m;const t=document.createElement("p"),o=document.createElement("div");y(t,{width:"100%",height:"200px"}),y(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(t),document.body.appendChild(o);const e=t.offsetWidth;o.style.overflow="scroll";let a=t.offsetWidth;return e===a&&(a=o.clientWidth),o.remove(),m=e-a,m}function fe(t, o=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:o?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}function ve(){return K(M)}export{ue as Q,ie as a,ce as b,de as c,X as d,Y as e,J as f,se as g,re as h,ee as i,te as j,ne as k,fe as l,ve as u};
