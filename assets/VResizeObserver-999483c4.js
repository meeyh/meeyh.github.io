import{d as ce,ab as ve,ac as ue,b as de,Z as he}from"./index-465f535f.js";let O=[];const U=new WeakMap;function le(){O.forEach(e=>e(...U.get(e))),O=[]}function Pe(e,...t){U.set(e,t),!O.includes(e)&&O.push(e)===1&&requestAnimationFrame(le)}function I(e,t){console.error(`[vueuc/${e}]: ${t}`)}var v=[],fe=function(){return v.some(function(e){return e.activeTargets.length>0})},pe=function(){return v.some(function(e){return e.skippedTargets.length>0})},P="ResizeObserver loop completed with undelivered notifications.",be=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:P}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=P),window.dispatchEvent(e)},b;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(b||(b={}));var u=function(e){return Object.freeze(e)},ge=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,u(this)}return e}(),J=function(){function e(t,r,n,i){return this.x=t,this.y=r,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,u(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,n=t.y,i=t.top,o=t.right,s=t.bottom,d=t.left,h=t.width,c=t.height;return{x:r,y:n,top:i,right:o,bottom:s,left:d,width:h,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),M=function(e){return e instanceof SVGElement&&"getBBox"in e},Y=function(e){if(M(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},W=function(e){var t;if(e instanceof Element)return!0;var r=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},ze=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},p=typeof window<"u"?window:{},x=new WeakMap,_=/auto|scroll/,xe=/^tb|vertical/,me=/msie|trident/i.test(p.navigator&&p.navigator.userAgent),a=function(e){return parseFloat(e||"0")},l=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new ge((r?t:e)||0,(r?e:t)||0)},F=u({devicePixelContentBoxSize:l(),borderBoxSize:l(),contentBoxSize:l(),contentRect:new J(0,0,0,0)}),Z=function(e,t){if(t===void 0&&(t=!1),x.has(e)&&!t)return x.get(e);if(Y(e))return x.set(e,F),F;var r=getComputedStyle(e),n=M(e)&&e.ownerSVGElement&&e.getBBox(),i=!me&&r.boxSizing==="border-box",o=xe.test(r.writingMode||""),s=!n&&_.test(r.overflowY||""),d=!n&&_.test(r.overflowX||""),h=n?0:a(r.paddingTop),c=n?0:a(r.paddingRight),E=n?0:a(r.paddingBottom),f=n?0:a(r.paddingLeft),ee=n?0:a(r.borderTopWidth),te=n?0:a(r.borderRightWidth),re=n?0:a(r.borderBottomWidth),ne=n?0:a(r.borderLeftWidth),D=f+c,k=h+E,y=ne+te,T=ee+re,H=d?e.offsetHeight-T-e.clientHeight:0,N=s?e.offsetWidth-y-e.clientWidth:0,ie=i?D+y:0,oe=i?k+T:0,g=n?n.width:a(r.width)-ie-N,z=n?n.height:a(r.height)-oe-H,se=g+D+N+y,ae=z+k+H+T,A=u({devicePixelContentBoxSize:l(Math.round(g*devicePixelRatio),Math.round(z*devicePixelRatio),o),borderBoxSize:l(se,ae,o),contentBoxSize:l(g,z,o),contentRect:new J(f,h,g,z)});return x.set(e,A),A},K=function(e,t,r){var n=Z(e,r),i=n.borderBoxSize,o=n.contentBoxSize,s=n.devicePixelContentBoxSize;switch(t){case b.DEVICE_PIXEL_CONTENT_BOX:return s;case b.BORDER_BOX:return i;default:return o}},we=function(){function e(t){var r=Z(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=u([r.borderBoxSize]),this.contentBoxSize=u([r.contentBoxSize]),this.devicePixelContentBoxSize=u([r.devicePixelContentBoxSize])}return e}(),Q=function(e){if(Y(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},Re=function(){var e=1/0,t=[];v.forEach(function(s){if(s.activeTargets.length!==0){var d=[];s.activeTargets.forEach(function(c){var E=new we(c.target),f=Q(c.target);d.push(E),c.lastReportedSize=K(c.target,c.observedBox),f<e&&(e=f)}),t.push(function(){s.callback.call(s.observer,d,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var r=0,n=t;r<n.length;r++){var i=n[r];i()}return e},L=function(e){v.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(i){i.isActive()&&(Q(i.target)>e?r.activeTargets.push(i):r.skippedTargets.push(i))})})},Oe=function(){var e=0;for(L(e);fe();)e=Re(),L(e);return pe()&&be(),e>0},S,j=[],Ee=function(){return j.splice(0).forEach(function(e){return e()})},ye=function(e){if(!S){var t=0,r=document.createTextNode(""),n={characterData:!0};new MutationObserver(function(){return Ee()}).observe(r,n),S=function(){r.textContent="".concat(t?t--:t++)}}j.push(e),S()},Te=function(e){ye(function(){requestAnimationFrame(e)})},R=0,Se=function(){return!!R},Be=250,Ce={attributes:!0,characterData:!0,childList:!0,subtree:!0},V=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],X=function(e){return e===void 0&&(e=0),Date.now()+e},B=!1,Me=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=Be),!B){B=!0;var n=X(t);Te(function(){var i=!1;try{i=Oe()}finally{if(B=!1,t=n-X(),!Se())return;i?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,Ce)};document.body?r():p.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),V.forEach(function(r){return p.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),V.forEach(function(r){return p.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),C=new Me,q=function(e){!R&&e>0&&C.start(),R+=e,!R&&C.stop()},De=function(e){return!M(e)&&!ze(e)&&getComputedStyle(e).display==="inline"},ke=function(){function e(t,r){this.target=t,this.observedBox=r||b.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=K(this.target,this.observedBox,!0);return De(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),He=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}(),m=new WeakMap,$=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},w=function(){function e(){}return e.connect=function(t,r){var n=new He(t,r);m.set(t,n)},e.observe=function(t,r,n){var i=m.get(t),o=i.observationTargets.length===0;$(i.observationTargets,r)<0&&(o&&v.push(i),i.observationTargets.push(new ke(r,n&&n.box)),q(1),C.schedule())},e.unobserve=function(t,r){var n=m.get(t),i=$(n.observationTargets,r),o=n.observationTargets.length===1;i>=0&&(o&&v.splice(v.indexOf(n),1),n.observationTargets.splice(i,1),q(-1))},e.disconnect=function(t){var r=this,n=m.get(t);n.observationTargets.slice().forEach(function(i){return r.unobserve(t,i.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),Ne=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");w.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!W(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");w.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!W(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");w.unobserve(this,t)},e.prototype.disconnect=function(){w.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Ae{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Ne)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const r of t){const n=this.elHandlersMap.get(r.target);n!==void 0&&n(r)}}registerHandler(t,r){this.elHandlersMap.set(t,r),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const G=new Ae,We=ce({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const r=ve().proxy;function n(i){const{onResize:o}=e;o!==void 0&&o(i)}ue(()=>{const i=r.$el;if(i===void 0){I("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){I("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(G.registerHandler(i.nextElementSibling,n),t=!0)}),de(()=>{t&&G.unregisterHandler(r.$el.nextElementSibling)})},render(){return he(this.$slots,"default")}});export{We as V,Pe as b,G as r};
