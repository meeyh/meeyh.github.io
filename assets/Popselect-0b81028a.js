import{k as A,N as $,e as O}from"./Popover-c6aba41b.js";import{b as B,c as I,h as U,e as V,m as _}from"./Select-19623efd.js";import{f as F,l as z,d as R,i as L,x as S,y as b,aj as j,g as C,w as D,v as K,z as E,e as y,a7 as T,r as H,p as q,ak as x}from"./index-465f535f.js";import{c as v}from"./call-7e0089d6.js";function G(e){return Object.keys(e)}function J(e){return t=>{t?e.value=t.$el:e.value=null}}const k=F("n-popselect"),Q=z("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),P={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},N=G(P),W=R({name:"PopselectPanel",props:P,setup(e){const t=L(k),{mergedClsPrefixRef:o,inlineThemeDisabled:a}=S(e),m=b("Popselect","-pop-select",Q,j,t.props,o),p=C(()=>I(e.options,V("value","children")));function h(s,u){const{onUpdateValue:r,"onUpdate:value":c,onChange:d}=e;r&&v(r,s,u),c&&v(c,s,u),d&&v(d,s,u)}function n(s){i(s.key)}function l(s){U(s,"action")||s.preventDefault()}function i(s){const{value:{getNode:u}}=p;if(e.multiple)if(Array.isArray(e.value)){const r=[],c=[];let d=!0;e.value.forEach(M=>{if(M===s){d=!1;return}const g=u(M);g&&(r.push(g.key),c.push(g.rawNode))}),d&&(r.push(s),c.push(u(s).rawNode)),h(r,c)}else{const r=u(s);r&&h([s],[r.rawNode])}else if(e.value===s&&e.cancelable)h(null,null);else{const r=u(s);r&&h(s,r.rawNode);const{"onUpdate:show":c,onUpdateShow:d}=t.props;c&&v(c,!1),d&&v(d,!1),t.setShow(!1)}T(()=>{t.syncPosition()})}D(K(e,"options"),()=>{T(()=>{t.syncPosition()})});const w=C(()=>{const{self:{menuBoxShadow:s}}=m.value;return{"--n-menu-box-shadow":s}}),f=a?E("select",void 0,w,t.props):void 0;return{mergedTheme:t.mergedThemeRef,mergedClsPrefix:o,treeMate:p,handleToggle:n,handleMenuMousedown:l,cssVars:a?void 0:w,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),y(B,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{action:()=>{var t,o;return((o=(t=this.$slots).action)===null||o===void 0?void 0:o.call(t))||[]},empty:()=>{var t,o;return((o=(t=this.$slots).empty)===null||o===void 0?void 0:o.call(t))||[]}})}}),X=Object.assign(Object.assign(Object.assign(Object.assign({},b.props),x(O,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},O.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),P),se=R({name:"Popselect",props:X,inheritAttrs:!1,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=S(e),o=b("Popselect","-popselect",void 0,j,e,t),a=H(null);function m(){var n;(n=a.value)===null||n===void 0||n.syncPosition()}function p(n){var l;(l=a.value)===null||l===void 0||l.setShow(n)}return q(k,{props:e,mergedThemeRef:o,syncPosition:m,setShow:p}),Object.assign(Object.assign({},{syncPosition:m,setShow:p}),{popoverInstRef:a,mergedTheme:o})},render(){const{mergedTheme:e}=this,t={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(o,a,m,p,h)=>{const{$attrs:n}=this;return y(W,Object.assign({},n,{class:[n.class,o],style:[n.style,m]},A(this.$props,N),{ref:J(a),onMouseenter:_([p,n.onMouseenter]),onMouseleave:_([h,n.onMouseleave])}),{action:()=>{var l,i;return(i=(l=this.$slots).action)===null||i===void 0?void 0:i.call(l)},empty:()=>{var l,i;return(i=(l=this.$slots).empty)===null||i===void 0?void 0:i.call(l)}})}};return y($,Object.assign({},x(this.$props,N),t,{internalDeactivateImmediately:!0}),{trigger:()=>{var o,a;return(a=(o=this.$slots).default)===null||a===void 0?void 0:a.call(o)}})}});export{se as N,J as c};
