import{D as p,F as a,aZ as c,bC as o}from"./index-465f535f.js";function f(r,e=!0,n=[]){return r.forEach(t=>{if(t!==null){if(typeof t!="object"){(typeof t=="string"||typeof t=="number")&&n.push(p(String(t)));return}if(Array.isArray(t)){f(t,e,n);return}if(t.type===a){if(t.children===null)return;Array.isArray(t.children)&&f(t.children,e,n)}else t.type!==c&&n.push(t)}}),n}function i(r){return r.some(e=>o(e)?!(e.type===c||e.type===a&&!i(e.children)):!0)?r:null}function m(r,e){return r&&i(r())||e()}function b(r,e,n){return r&&i(r(e))||n(e)}function x(r,e){const n=r&&i(r());return e(n||null)}function S(r){return!(r&&i(r()))}const y=/^(\d|\.)+$/,s=/(\d|\.)+/;function A(r,{c:e=1,offset:n=0,attachPx:t=!0}={}){if(typeof r=="number"){const u=(r+n)*e;return u===0?"0":`${u}px`}else if(typeof r=="string")if(y.test(r)){const u=(Number(r)+n)*e;return t?u===0?"0":`${u}px`:`${u}`}else{const u=s.exec(r);return u?r.replace(s,String((Number(u[0])+n)*e)):r}return r}export{m as a,A as b,b as c,f,S as i,x as r};
