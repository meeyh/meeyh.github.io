import{u as x}from"./useLanguage-323d64f9.js";import{E as v,a0 as L,a7 as d,d as _,a8 as y,a4 as P,G as l,H as m,I as i,J as p,K as a,D as h,M as g,_ as N,g as $,L as C,a5 as I,F as b,a6 as B,P as D,U as f,R,a1 as V}from"./index-d5026f7b.js";import{a as w}from"./getPages-71ee583f.js";import{u as G,_ as H}from"./NotFound.vue_vue_type_script_setup_true_lang-fff1ed06.js";import{u as M,a as A,_ as E}from"./usePlatformDisplay-f9e50deb.js";import{_ as F}from"./PlatformIcon.vue_vue_type_script_setup_true_lang-d591fb28.js";import{u as S}from"./usePlatformURL-311d99f6.js";import{N as T,a as U,b as z}from"./Statistic-c65016c0.js";import"./index-dc678aa9.js";import"./platform-c1fe7219.js";import"./Icon-31c39865.js";import"./format-length-46fade60.js";import"./language-38dd8b1f.js";import"./Desktop16Regular-2c9962c7.js";import"./useLanguageURL-b350e7f6.js";import"./VResizeObserver-f2da7c01.js";function J(u){const e=G();return{platformCounter:v(async()=>{try{e.start();const o=(await w()).filter(s=>s.language===L(u)),r=new Map;for(const s of o){const c=r.get(s.platform);c?r.set(s.platform,c+1):r.set(s.platform,1)}return d(e.finish),r.size===0?null:r}catch{return d(e.error),null}},void 0)}}const K=_({__name:"PlatformInfo",props:{info:{},language:{}},setup(u){const e=u,{language:n,info:t}=y(e),{platform:o}=y(t),{platformDisplay:r}=M(o),{url:s}=S(n,o);return(c,Q)=>{const k=P("RouterLink");return l(),m(k,{to:a(s),class:"platform-link"},{default:i(()=>[p(a(T),null,{label:i(()=>[p(F,{platform:a(t).platform,style:{"margin-right":"0.5em"}},null,8,["platform"]),h(g(a(r)),1)]),default:i(()=>[h(" "+g(a(t).count),1)]),_:1})]),_:1},8,["to"])}}});const j=N(K,[["__scopeId","data-v-f627f44b"]]),q=_({__name:"PlatformInfos",props:{platformCounter:{},language:{}},setup(u){const e=u,n=$(()=>Array.from(e.platformCounter,([t,o])=>({platform:t,count:o})).sort((t,o)=>o.count-t.count));return(t,o)=>(l(),m(a(z),{"x-gap":"15","y-gap":"15",cols:"2 s:3",responsive:"screen"},{default:i(()=>[(l(!0),C(b,null,I(n.value,r=>(l(),m(a(U),{key:r.platform},{default:i(()=>[p(j,{info:r,language:t.language},null,8,["info","language"])]),_:2},1024))),128))]),_:1}))}}),O={style:{"margin-right":"0.5em"}},ct=_({__name:"LanguageView",setup(u){const{language:e}=x(),{languageDisplay:n}=A(e),{platformCounter:t}=J(e),o=B();return D({title:`Commands in ${n.value} | tldr Me`,meta:[{name:"description",content:`tldr commands list in language ${n.value}.`}],link:[{rel:"canonical",href:`https://meeyh.github.io${o.path}`}]}),(r,s)=>(l(),C("main",null,[a(t)!==null?(l(),m(a(V),{key:0,prefix:"bar","align-text":""},{default:i(()=>[p(E,{style:{"margin-right":"0.5em","vertical-align":"-0.2em"}}),R("span",O,g(a(n)),1)]),_:1})):f("",!0),a(t)?(l(),m(q,{key:1,platformCounter:a(t),language:a(e)},null,8,["platformCounter","language"])):f("",!0),a(t)===null?(l(),m(H,{key:2})):f("",!0)]))}});export{ct as default};
