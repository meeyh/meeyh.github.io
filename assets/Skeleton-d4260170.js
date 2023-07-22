import{am as P,n as f,l as R,d as N,x as A,y as k,g as E,e as b,m as H,F as L,B as O}from"./index-465f535f.js";import{i as V,p}from"./language-04052e06.js";let y=!1;function _(){if(V&&window.CSS&&!y&&(y=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const j=e=>{const{heightSmall:o,heightMedium:i,heightLarge:r,borderRadius:n}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:n,heightSmall:o,heightMedium:i,heightLarge:r}},F={name:"Skeleton",common:P,self:j},T=f([R("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),f("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),$=Object.assign(Object.assign({},k.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),M=N({name:"Skeleton",inheritAttrs:!1,props:$,setup(e){_();const{mergedClsPrefixRef:o}=A(e),i=k("Skeleton","-skeleton",T,F,e,o);return{mergedClsPrefix:o,style:E(()=>{var r,n;const s=i.value,{common:{cubicBezierEaseInOut:v}}=s,m=s.self,{color:S,colorEnd:w,borderRadius:x}=m;let a;const{circle:l,sharp:z,round:B,width:t,height:c,size:g,text:h,animated:C}=e;g!==void 0&&(a=m[O("height",g)]);const d=l?(r=t??c)!==null&&r!==void 0?r:a:t,u=(n=l?t??c:c)!==null&&n!==void 0?n:a;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:l?"50%":B?"4096px":z?"":x,width:typeof d=="number"?p(d):d,height:typeof u=="number"?p(u):u,animation:C?"":"none","--n-bezier":v,"--n-color-start":S,"--n-color-end":w}})}},render(){const{repeat:e,style:o,mergedClsPrefix:i,$attrs:r}=this,n=b("div",H({class:`${i}-skeleton`,style:o},r));return e>1?b(L,null,Array.apply(null,{length:e}).map(s=>[n,`
`])):n}});export{M as N};
