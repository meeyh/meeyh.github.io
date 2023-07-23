import{P as _}from"./PageLanguage-3bdeafbe.js";import{u as h}from"./useLanguage-323d64f9.js";import{a as y}from"./index-dc678aa9.js";import{g as v,d as g,G as t,L as l,F as N,a5 as P,J as o,I as i,K as e,a2 as k,Q as x,a6 as $,P as w,H as s,U as n,R as D,M as L,a1 as B}from"./index-d5026f7b.js";import{a as H,_ as S}from"./NotFound.vue_vue_type_script_setup_true_lang-fff1ed06.js";import{_ as V}from"./PageInfos.vue_vue_type_script_setup_true_lang-84486f66.js";import{N as c}from"./Skeleton-810cb0fa.js";import{a as C}from"./p-8d3b5ea9.js";import{N as R}from"./Divider-0189c2ae.js";import{N as b}from"./usePageCommand-01d77dc6.js";import{u as F,a as I}from"./usePlatformDisplay-f9e50deb.js";import"./useLanguageURL-b350e7f6.js";import"./LanguageTag.vue_vue_type_script_setup_true_lang-e47ef460.js";import"./Tag-4b4c44c9.js";import"./format-length-46fade60.js";import"./call-7e0089d6.js";import"./getPages-71ee583f.js";import"./Ellipsis-e57ad811.js";import"./Select-baadafe6.js";import"./Popover-d6435fef.js";import"./VResizeObserver-f2da7c01.js";import"./language-38dd8b1f.js";import"./Popselect-961688f6.js";import"./platform-c1fe7219.js";import"./Icon-31c39865.js";function M(){const m=y("platform");return{platform:v(()=>m.value.replace(".",""))}}const j=g({__name:"PageInfosSkeleton",props:{repeat:{}},setup(m){return(a,p)=>(t(),l("div",null,[(t(!0),l(N,null,P(new Array(a.repeat),r=>(t(),l("div",{key:r},[o(e(x),null,{default:i(()=>[o(e(k),{code:""},{default:i(()=>[o(e(c),{text:"",style:{width:"3em"}})]),_:1})]),_:1}),o(e(C),null,{default:i(()=>[o(e(c),{style:{height:"calc(var(--n-line-height) * var(--n-font-size))","vertical-align":"0","max-width":"100%"},text:""})]),_:1}),o(e(R))]))),128)),o(e(b),{justify:"center"},{default:i(()=>[o(e(c),{style:{height:"28px",width:"322.636px"}})]),_:1})]))}}),z={style:{"margin-right":"0.5em"}},fe=g({__name:"PlatformView",setup(m){const{language:a}=h(),{platform:p}=M(),{pages:r}=H(a,p),{platformDisplay:u}=F(p),{languageDisplay:f}=I(a),d=$();return w({title:`${u.value} commands${a.value!==""?` in ${f.value}`:""} | tldr Me`,meta:[{name:"description",content:`tldr commands list for platform ${u.value}${a.value!==""?` in language ${f.value}`:""}.`}],link:[{rel:"canonical",href:`https://meeyh.github.io${d.path}`}]}),(A,E)=>(t(),l("main",null,[e(r)||e(r)===void 0?(t(),s(e(B),{key:0,prefix:"bar","align-text":""},{default:i(()=>[D("span",z,L(e(u)),1),e(a)!==""?(t(),s(_,{key:0,language:e(a)},null,8,["language"])):n("",!0)]),_:1})):n("",!0),e(r)?(t(),s(V,{key:1,pages:e(r)},null,8,["pages"])):n("",!0),e(r)===void 0?(t(),s(j,{key:2,repeat:5})):n("",!0),e(r)===null?(t(),s(S,{key:3})):n("",!0)]))}});export{fe as default};
