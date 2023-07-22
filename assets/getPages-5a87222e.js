var u=Object.defineProperty;var h=(i,t,e)=>t in i?u(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var n=(i,t,e)=>(h(i,typeof t!="symbol"?t+"":t,e),e);import{bD as p}from"./index-465f535f.js";let a=null;async function g(){return a?await a:(a=(async()=>{const i=p(()=>import("./zip-js-lib-ec329854.js"),[]),e=await(await fetch("/tldr-pages.zip")).blob(),{BlobReader:s,ZipReader:m}=await i,l=new s(e);return new m(l)})(),await a)}let r=null;async function d(){return r?await r:(r=(async()=>await(await g()).getEntries())(),await r)}let o=null;async function f(){return o?await o:(o=(async()=>(await d()).filter(e=>e.filename.startsWith("tldr-main/pages")&&e.filename.endsWith(".md")))(),await o)}async function P(i){const{TextWriter:t}=await p(()=>import("./zip-js-lib-ec329854.js"),[]);return await i.getData(new t)}class w{constructor(t){n(this,"entry");n(this,"textPromise");n(this,"path");n(this,"filename");this.entry=t,this.filename=t.filename,this.path=x(this.filename)}get text(){return this.textPromise?this.textPromise:(this.textPromise=P(this.entry),this.textPromise)}}function x(i){const t="tldr-main",e=".md";return i.slice(t.length,-e.length)}class b{constructor(t){n(this,"pageInternal");n(this,"commandPromise");n(this,"descriptionPromise");n(this,"basename");n(this,"platform");n(this,"language");n(this,"path");n(this,"basenameLower");this.pageInternal=t,this.path=t.path,this.basename=y(this.path),this.platform=R(this.path),this.language=_(this.path),this.basenameLower=this.basename.toLowerCase()}get githubURL(){return`https://gitee.com/meeyh/tldr/blob/main${this.path}.md`}get text(){return this.pageInternal.text}get command(){return this.commandPromise?this.commandPromise:(this.commandPromise=(async()=>{var s;const e=(s=(await this.text).match(/^# (.*)/))==null?void 0:s[1];return e||this.basename})(),this.commandPromise)}get description(){return this.descriptionPromise?this.descriptionPromise:(this.descriptionPromise=(async()=>[...(await this.text).matchAll(/\n> (.*)/g)].map(m=>m[1]).join(" "))(),this.descriptionPromise)}}function y(i){const t=i.split("/");return t[t.length-1].split(".")[0]}function R(i){return i.split("/")[2]}function _(i){const e=i.split("/")[1].split(".");return e.length!==2?"":e[1]}let c=null,E=!1;async function I(){return c?await c:(c=(async()=>{const t=(await f()).map(e=>new b(new w(e)));return E=!0,t})(),await c)}export{b as P,I as a,g as b,d as g,E as i};
