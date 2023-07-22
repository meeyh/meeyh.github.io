import{i as so,b as un}from"./usePageCommand-9db14b67.js";import{d as ce,aL as cn,ac as et,aM as uo,an as co,g as I,r as M,u as Ze,e as s,m as fo,a7 as ft,Z as ho,b as fn,i as ht,aN as hn,aO as vo,l as O,t as C,n as J,x as jt,y as Ce,aP as go,B as ge,z as vt,ah as Qe,j as Ye,T as vn,aH as po,s as ae,q as Be,v as ue,aQ as mo,w as Me,p as Et,aR as gn,aS as bo,aT as pn,aU as yo,aV as wo,ag as Lt,F as mn,f as xo,ab as Co,ae as So,aW as Po,aX as To,aC as Fo,aD as ko,a9 as Ro,aY as Mo}from"./index-465f535f.js";import{r as ct,a as Je,c as zo}from"./format-length-d5ba3936.js";import{l as bn,n as yt,q as Ut,s as yn,t as Oo,N as Ao,W as _o,u as Nt,a as Xt,o as Yt,f as Dt,V as Io,b as Bo,c as $o,h as Zt,i as Eo}from"./Popover-c6aba41b.js";import{V as Wt,b as Lo,r as Jt}from"./VResizeObserver-999483c4.js";import{d as Vt,p as pt,a as wt}from"./language-04052e06.js";import{c as ie}from"./call-7e0089d6.js";import{N as Mt}from"./Tag-aa43384d.js";function xt(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function No(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function zt(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}const Do=new WeakSet;function Wo(e){Do.add(e)}function Qt(e){return e&-e}class Vo{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let i=0;i<n+1;++i)o[i]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:i}=this;for(n+=1;n<=o;)i[n]+=t,n+=Qt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=n*o;for(;n>0;)d+=t[n],n-=Qt(n);return d}getBound(n){let t=0,o=this.l;for(;o>t;){const i=Math.floor((t+o)/2),d=this.sum(i);if(d>n){o=i;continue}else if(d<n){if(t===i)return this.sum(t+1)<=n?t+1:i;t=i}else return i}return t}}let mt;function Ko(){return mt===void 0&&("matchMedia"in window?mt=window.matchMedia("(pointer:coarse)").matches:mt=!1),mt}let Ot;function en(){return Ot===void 0&&(Ot="chrome"in window?window.devicePixelRatio:1),Ot}const Ho=yt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[yt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[yt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),jo=ce({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=cn();Ho.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:bn,ssr:n}),et(()=>{const{defaultScrollIndex:w,defaultScrollKey:T}=e;w!=null?b({index:w}):T!=null&&b({key:T})});let t=!1,o=!1;uo(()=>{if(t=!1,!o){o=!0;return}b({top:g.value,left:f})}),co(()=>{t=!0,o||(o=!0)});const i=I(()=>{const w=new Map,{keyField:T}=e;return e.items.forEach((j,ne)=>{w.set(j[T],ne)}),w}),d=M(null),l=M(void 0),a=new Map,v=I(()=>{const{items:w,itemSize:T,keyField:j}=e,ne=new Vo(w.length,T);return w.forEach((Q,ee)=>{const U=Q[j],Z=a.get(U);Z!==void 0&&ne.add(ee,Z)}),ne}),c=M(0);let f=0;const g=M(0),F=Ze(()=>Math.max(v.value.getBound(g.value-Vt(e.paddingTop))-1,0)),$=I(()=>{const{value:w}=l;if(w===void 0)return[];const{items:T,itemSize:j}=e,ne=F.value,Q=Math.min(ne+Math.ceil(w/j+1),T.length-1),ee=[];for(let U=ne;U<=Q;++U)ee.push(T[U]);return ee}),b=(w,T)=>{if(typeof w=="number"){R(w,T,"auto");return}const{left:j,top:ne,index:Q,key:ee,position:U,behavior:Z,debounce:p=!0}=w;if(j!==void 0||ne!==void 0)R(j,ne,Z);else if(Q!==void 0)A(Q,Z,p);else if(ee!==void 0){const x=i.value.get(ee);x!==void 0&&A(x,Z,p)}else U==="bottom"?R(0,Number.MAX_SAFE_INTEGER,Z):U==="top"&&R(0,0,Z)};let _,K=null;function A(w,T,j){const{value:ne}=v,Q=ne.sum(w)+Vt(e.paddingTop);if(!j)d.value.scrollTo({left:0,top:Q,behavior:T});else{_=w,K!==null&&window.clearTimeout(K),K=window.setTimeout(()=>{_=void 0,K=null},16);const{scrollTop:ee,offsetHeight:U}=d.value;if(Q>ee){const Z=ne.get(w);Q+Z<=ee+U||d.value.scrollTo({left:0,top:Q+Z-U,behavior:T})}else d.value.scrollTo({left:0,top:Q,behavior:T})}}function R(w,T,j){d.value.scrollTo({left:w,top:T,behavior:j})}function N(w,T){var j,ne,Q;if(t||e.ignoreItemResize||W(T.target))return;const{value:ee}=v,U=i.value.get(w),Z=ee.get(U),p=(Q=(ne=(j=T.borderBoxSize)===null||j===void 0?void 0:j[0])===null||ne===void 0?void 0:ne.blockSize)!==null&&Q!==void 0?Q:T.contentRect.height;if(p===Z)return;p-e.itemSize===0?a.delete(w):a.set(w,p-e.itemSize);const Y=p-Z;if(Y===0)return;ee.add(U,Y);const de=d.value;if(de!=null){if(_===void 0){const pe=ee.sum(U);de.scrollTop>pe&&de.scrollBy(0,Y)}else if(U<_)de.scrollBy(0,Y);else if(U===_){const pe=ee.sum(U);p+pe>de.scrollTop+de.offsetHeight&&de.scrollBy(0,Y)}X()}c.value++}const S=!Ko();let P=!1;function E(w){var T;(T=e.onScroll)===null||T===void 0||T.call(e,w),(!S||!P)&&X()}function D(w){var T;if((T=e.onWheel)===null||T===void 0||T.call(e,w),S){const j=d.value;if(j!=null){if(w.deltaX===0&&(j.scrollTop===0&&w.deltaY<=0||j.scrollTop+j.offsetHeight>=j.scrollHeight&&w.deltaY>=0))return;w.preventDefault(),j.scrollTop+=w.deltaY/en(),j.scrollLeft+=w.deltaX/en(),X(),P=!0,Lo(()=>{P=!1})}}}function q(w){if(t||W(w.target)||w.contentRect.height===l.value)return;l.value=w.contentRect.height;const{onResize:T}=e;T!==void 0&&T(w)}function X(){const{value:w}=d;w!=null&&(g.value=w.scrollTop,f=w.scrollLeft)}function W(w){let T=w;for(;T!==null;){if(T.style.display==="none")return!0;T=T.parentElement}return!1}return{listHeight:l,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:I(()=>{const{itemResizable:w}=e,T=pt(v.value.sum());return c.value,[e.itemsStyle,{boxSizing:"content-box",height:w?"":T,minHeight:w?T:"",paddingTop:pt(e.paddingTop),paddingBottom:pt(e.paddingBottom)}]}),visibleItemsStyle:I(()=>(c.value,{transform:`translateY(${pt(v.value.sum(F.value))})`})),viewportItems:$,listElRef:d,itemsElRef:M(null),scrollTo:b,handleListResize:q,handleListScroll:E,handleListWheel:D,handleItemResize:N}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return s(Wt,{onResize:this.handleListResize},{default:()=>{var i,d;return s("div",fo(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?s("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[s(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(l=>{const a=l[n],v=t.get(a),c=this.$slots.default({item:l,index:v})[0];return e?s(Wt,{key:a,onResize:f=>this.handleItemResize(a,f)},{default:()=>c}):(c.key=a,c)})})]):(d=(i=this.$slots).empty)===null||d===void 0?void 0:d.call(i)])}})}}),Ke="v-hidden",Uo=yt("[v-hidden]",{display:"none!important"}),tn=ce({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=M(null),o=M(null);function i(){const{value:l}=t,{getCounter:a,getTail:v}=e;let c;if(a!==void 0?c=a():c=o.value,!l||!c)return;c.hasAttribute(Ke)&&c.removeAttribute(Ke);const{children:f}=l,g=l.offsetWidth,F=[],$=n.tail?v==null?void 0:v():null;let b=$?$.offsetWidth:0,_=!1;const K=l.children.length-(n.tail?1:0);for(let R=0;R<K-1;++R){if(R<0)continue;const N=f[R];if(_){N.hasAttribute(Ke)||N.setAttribute(Ke,"");continue}else N.hasAttribute(Ke)&&N.removeAttribute(Ke);const S=N.offsetWidth;if(b+=S,F[R]=S,b>g){const{updateCounter:P}=e;for(let E=R;E>=0;--E){const D=K-1-E;P!==void 0?P(D):c.textContent=`${D}`;const q=c.offsetWidth;if(b-=F[E],b+q<=g||E===0){_=!0,R=E-1,$&&(R===-1?($.style.maxWidth=`${g-q}px`,$.style.boxSizing="border-box"):$.style.maxWidth="");break}}}}const{onUpdateOverflow:A}=e;_?A!==void 0&&A(!0):(A!==void 0&&A(!1),c.setAttribute(Ke,""))}const d=cn();return Uo.mount({id:"vueuc/overflow",head:!0,anchorMetaName:bn,ssr:d}),et(i),{selfRef:t,counterRef:o,sync:i}},render(){const{$slots:e}=this;return ft(this.sync),s("div",{class:"v-overflow",ref:"selfRef"},[ho(e,"default"),e.counter?e.counter():s("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function wn(e,n){n&&(et(()=>{const{value:t}=e;t&&Jt.registerHandler(t,n)}),fn(()=>{const{value:t}=e;t&&Jt.unregisterHandler(t)}))}const Go={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},qo=Go;function At(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,o=e.formats[t]||e.formats[e.defaultWidth];return o}}function dt(e){return function(n,t){var o=t!=null&&t.context?String(t.context):"standalone",i;if(o==="formatting"&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,l=t!=null&&t.width?String(t.width):d;i=e.formattingValues[l]||e.formattingValues[d]}else{var a=e.defaultWidth,v=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[v]||e.values[a]}var c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}function ut(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],d=n.match(i);if(!d)return null;var l=d[0],a=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],v=Array.isArray(a)?Yo(a,function(g){return g.test(l)}):Xo(a,function(g){return g.test(l)}),c;c=e.valueCallback?e.valueCallback(v):v,c=t.valueCallback?t.valueCallback(c):c;var f=n.slice(l.length);return{value:c,rest:f}}}function Xo(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function Yo(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function Zo(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.match(e.matchPattern);if(!o)return null;var i=o[0],d=n.match(e.parsePattern);if(!d)return null;var l=e.valueCallback?e.valueCallback(d[0]):d[0];l=t.valueCallback?t.valueCallback(l):l;var a=n.slice(i.length);return{value:l,rest:a}}}var Jo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qo=function(n,t,o){var i,d=Jo[n];return typeof d=="string"?i=d:t===1?i=d.one:i=d.other.replace("{{count}}",t.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+i:i+" ago":i};const er=Qo;var tr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},nr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},or={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rr={date:At({formats:tr,defaultWidth:"full"}),time:At({formats:nr,defaultWidth:"full"}),dateTime:At({formats:or,defaultWidth:"full"})};const ir=rr;var ar={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lr=function(n,t,o,i){return ar[n]};const sr=lr;var dr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ur={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},cr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},fr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},hr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},vr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gr=function(n,t){var o=Number(n),i=o%100;if(i>20||i<10)switch(i%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},pr={ordinalNumber:gr,era:dt({values:dr,defaultWidth:"wide"}),quarter:dt({values:ur,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:dt({values:cr,defaultWidth:"wide"}),day:dt({values:fr,defaultWidth:"wide"}),dayPeriod:dt({values:hr,defaultWidth:"wide",formattingValues:vr,defaultFormattingWidth:"wide"})};const mr=pr;var br=/^(\d+)(th|st|nd|rd)?/i,yr=/\d+/i,wr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xr={any:[/^b/i,/^(a|c)/i]},Cr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Sr={any:[/1/i,/2/i,/3/i,/4/i]},Pr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Tr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Fr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},kr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Rr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Mr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},zr={ordinalNumber:Zo({matchPattern:br,parsePattern:yr,valueCallback:function(n){return parseInt(n,10)}}),era:ut({matchPatterns:wr,defaultMatchWidth:"wide",parsePatterns:xr,defaultParseWidth:"any"}),quarter:ut({matchPatterns:Cr,defaultMatchWidth:"wide",parsePatterns:Sr,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:ut({matchPatterns:Pr,defaultMatchWidth:"wide",parsePatterns:Tr,defaultParseWidth:"any"}),day:ut({matchPatterns:Fr,defaultMatchWidth:"wide",parsePatterns:kr,defaultParseWidth:"any"}),dayPeriod:ut({matchPatterns:Rr,defaultMatchWidth:"any",parsePatterns:Mr,defaultParseWidth:"any"})};const Or=zr;var Ar={code:"en-US",formatDistance:er,formatLong:ir,formatRelative:sr,localize:mr,match:Or,options:{weekStartsOn:0,firstWeekContainsDate:1}};const _r=Ar,Ir={name:"en-US",locale:_r},Br=Ir;function Gt(e){const{mergedLocaleRef:n,mergedDateLocaleRef:t}=ht(hn,null)||{},o=I(()=>{var d,l;return(l=(d=n==null?void 0:n.value)===null||d===void 0?void 0:d[e])!==null&&l!==void 0?l:qo[e]});return{dateLocaleRef:I(()=>{var d;return(d=t==null?void 0:t.value)!==null&&d!==void 0?d:Br}),localeRef:o}}const $r=ce({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Er=ce({name:"Eye",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),s("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Lr=ce({name:"EyeOff",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),s("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),s("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),s("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),s("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Nr=ce({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Dr=ce({name:"ChevronDown",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Wr=vo("clear",s("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},s("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},s("g",{fill:"currentColor","fill-rule":"nonzero"},s("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Vr=ce({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function nn(e){return Array.isArray(e)?e:[e]}const Kt={STOP:"STOP"};function xn(e,n){const t=n(e);e.children!==void 0&&t!==Kt.STOP&&e.children.forEach(o=>xn(o,n))}function Kr(e,n={}){const{preserveGroup:t=!1}=n,o=[],i=t?l=>{l.isLeaf||(o.push(l.key),d(l.children))}:l=>{l.isLeaf||(l.isGroup||o.push(l.key),d(l.children))};function d(l){l.forEach(i)}return d(e),o}function Hr(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function jr(e){return e.children}function Ur(e){return e.key}function Gr(){return!1}function qr(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Xr(e){return e.disabled===!0}function Yr(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function _t(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function It(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Zr(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function Jr(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function Qr(e){return(e==null?void 0:e.type)==="group"}function ei(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class ti extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ni(e,n,t,o){return Ct(n.concat(e),t,o,!1)}function oi(e,n){const t=new Set;return e.forEach(o=>{const i=n.treeNodeMap.get(o);if(i!==void 0){let d=i.parent;for(;d!==null&&!(d.disabled||t.has(d.key));)t.add(d.key),d=d.parent}}),t}function ri(e,n,t,o){const i=Ct(n,t,o,!1),d=Ct(e,t,o,!0),l=oi(e,t),a=[];return i.forEach(v=>{(d.has(v)||l.has(v))&&a.push(v)}),a.forEach(v=>i.delete(v)),i}function Bt(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:i,indeterminateKeys:d,cascade:l,leafOnly:a,checkStrategy:v,allowNotLoaded:c}=e;if(!l)return o!==void 0?{checkedKeys:Zr(t,o),indeterminateKeys:Array.from(d)}:i!==void 0?{checkedKeys:Jr(t,i),indeterminateKeys:Array.from(d)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(d)};const{levelTreeNodeMap:f}=n;let g;i!==void 0?g=ri(i,t,n,c):o!==void 0?g=ni(o,t,n,c):g=Ct(t,n,c,!1);const F=v==="parent",$=v==="child"||a,b=g,_=new Set,K=Math.max.apply(null,Array.from(f.keys()));for(let A=K;A>=0;A-=1){const R=A===0,N=f.get(A);for(const S of N){if(S.isLeaf)continue;const{key:P,shallowLoaded:E}=S;if($&&E&&S.children.forEach(W=>{!W.disabled&&!W.isLeaf&&W.shallowLoaded&&b.has(W.key)&&b.delete(W.key)}),S.disabled||!E)continue;let D=!0,q=!1,X=!0;for(const W of S.children){const w=W.key;if(!W.disabled){if(X&&(X=!1),b.has(w))q=!0;else if(_.has(w)){q=!0,D=!1;break}else if(D=!1,q)break}}D&&!X?(F&&S.children.forEach(W=>{!W.disabled&&b.has(W.key)&&b.delete(W.key)}),b.add(P)):q&&_.add(P),R&&$&&b.has(P)&&b.delete(P)}}return{checkedKeys:Array.from(b),indeterminateKeys:Array.from(_)}}function Ct(e,n,t,o){const{treeNodeMap:i,getChildren:d}=n,l=new Set,a=new Set(e);return e.forEach(v=>{const c=i.get(v);c!==void 0&&xn(c,f=>{if(f.disabled)return Kt.STOP;const{key:g}=f;if(!l.has(g)&&(l.add(g),a.add(g),Yr(f.rawNode,d))){if(o)return Kt.STOP;if(!t)throw new ti}})}),a}function ii(e,{includeGroup:n=!1,includeSelf:t=!0},o){var i;const d=o.treeNodeMap;let l=e==null?null:(i=d.get(e))!==null&&i!==void 0?i:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(n||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(v=>v.key),a}function ai(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function li(e,n){const t=e.siblings,o=t.length,{index:i}=e;return n?t[(i+1)%o]:i===t.length-1?null:t[i+1]}function on(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const i=n==="prev"?si:li,d={reverse:n==="prev"};let l=!1,a=null;function v(c){if(c!==null){if(c===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){a=c;return}if(c.isGroup){const f=qt(c,d);f!==null?a=f:v(i(c,t))}else{const f=i(c,!1);if(f!==null)v(f);else{const g=di(c);g!=null&&g.isGroup?v(i(g,t)):t&&v(i(c,!0))}}}}return v(e),a}function si(e,n){const t=e.siblings,o=t.length,{index:i}=e;return n?t[(i-1+o)%o]:i===0?null:t[i-1]}function di(e){return e.parent}function qt(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:i}=o,d=t?i-1:0,l=t?-1:i,a=t?-1:1;for(let v=d;v!==l;v+=a){const c=o[v];if(!c.disabled&&!c.ignored)if(c.isGroup){const f=qt(c,n);if(f!==null)return f}else return c}}return null}const ui={getChild(){return this.ignored?null:qt(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return on(this,"next",e)},getPrev(e={}){return on(this,"prev",e)}};function ci(e,n){const t=n?new Set(n):void 0,o=[];function i(d){d.forEach(l=>{o.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&i(l.children)})}return i(e),o}function fi(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Cn(e,n,t,o,i,d=null,l=0){const a=[];return e.forEach((v,c)=>{var f;const g=Object.create(o);if(g.rawNode=v,g.siblings=a,g.level=l,g.index=c,g.isFirstChild=c===0,g.isLastChild=c+1===e.length,g.parent=d,!g.ignored){const F=i(v);Array.isArray(F)&&(g.children=Cn(F,n,t,o,i,g,l+1))}a.push(g),n.set(g.key,g),t.has(l)||t.set(l,[]),(f=t.get(l))===null||f===void 0||f.push(g)}),a}function hi(e,n={}){var t;const o=new Map,i=new Map,{getDisabled:d=Xr,getIgnored:l=Gr,getIsGroup:a=Qr,getKey:v=Ur}=n,c=(t=n.getChildren)!==null&&t!==void 0?t:jr,f=n.ignoreEmptyChildren?S=>{const P=c(S);return Array.isArray(P)?P.length?P:null:P}:c,g=Object.assign({get key(){return v(this.rawNode)},get disabled(){return d(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return Hr(this.rawNode,f)},get shallowLoaded(){return qr(this.rawNode,f)},get ignored(){return l(this.rawNode)},contains(S){return fi(this,S)}},ui),F=Cn(e,o,i,g,f);function $(S){if(S==null)return null;const P=o.get(S);return P&&!P.isGroup&&!P.ignored?P:null}function b(S){if(S==null)return null;const P=o.get(S);return P&&!P.ignored?P:null}function _(S,P){const E=b(S);return E?E.getPrev(P):null}function K(S,P){const E=b(S);return E?E.getNext(P):null}function A(S){const P=b(S);return P?P.getParent():null}function R(S){const P=b(S);return P?P.getChild():null}const N={treeNodes:F,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:f,getFlattenedNodes(S){return ci(F,S)},getNode:$,getPrev:_,getNext:K,getParent:A,getChild:R,getFirstAvailableNode(){return ai(F)},getPath(S,P={}){return ii(S,P,N)},getCheckedKeys(S,P={}){const{cascade:E=!0,leafOnly:D=!1,checkStrategy:q="all",allowNotLoaded:X=!1}=P;return Bt({checkedKeys:_t(S),indeterminateKeys:It(S),cascade:E,leafOnly:D,checkStrategy:q,allowNotLoaded:X},N)},check(S,P,E={}){const{cascade:D=!0,leafOnly:q=!1,checkStrategy:X="all",allowNotLoaded:W=!1}=E;return Bt({checkedKeys:_t(P),indeterminateKeys:It(P),keysToCheck:S==null?[]:nn(S),cascade:D,leafOnly:q,checkStrategy:X,allowNotLoaded:W},N)},uncheck(S,P,E={}){const{cascade:D=!0,leafOnly:q=!1,checkStrategy:X="all",allowNotLoaded:W=!1}=E;return Bt({checkedKeys:_t(P),indeterminateKeys:It(P),keysToUncheck:S==null?[]:nn(S),cascade:D,leafOnly:q,checkStrategy:X,allowNotLoaded:W},N)},getNonLeafKeys(S={}){return Kr(F,S)}};return N}const vi=O("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[C("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[J("+",[C("description",`
 margin-top: 8px;
 `)])]),C("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),C("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),gi=Object.assign(Object.assign({},Ce.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),pi=ce({name:"Empty",props:gi,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=jt(e),o=Ce("Empty","-empty",vi,go,e,n),{localeRef:i}=Gt("Empty"),d=ht(hn,null),l=I(()=>{var f,g,F;return(f=e.description)!==null&&f!==void 0?f:(F=(g=d==null?void 0:d.mergedComponentPropsRef.value)===null||g===void 0?void 0:g.Empty)===null||F===void 0?void 0:F.description}),a=I(()=>{var f,g;return((g=(f=d==null?void 0:d.mergedComponentPropsRef.value)===null||f===void 0?void 0:f.Empty)===null||g===void 0?void 0:g.renderIcon)||(()=>s(Nr,null))}),v=I(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:g},self:{[ge("iconSize",f)]:F,[ge("fontSize",f)]:$,textColor:b,iconColor:_,extraTextColor:K}}=o.value;return{"--n-icon-size":F,"--n-font-size":$,"--n-bezier":g,"--n-text-color":b,"--n-icon-color":_,"--n-extra-text-color":K}}),c=t?vt("empty",I(()=>{let f="";const{size:g}=e;return f+=g[0],f}),v,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:I(()=>l.value||i.value.description),cssVars:t?void 0:v,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),s("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${n}-empty__icon`},e.icon?e.icon():s(Qe,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${n}-empty__extra`},e.extra()):null)}});function mi(e,n){return s(vn,{name:"fade-in-scale-up-transition"},{default:()=>e?s(Qe,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>s($r)}):null})}const rn=ce({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:i,renderLabelRef:d,renderOptionRef:l,labelFieldRef:a,valueFieldRef:v,showCheckmarkRef:c,nodePropsRef:f,handleOptionClick:g,handleOptionMouseEnter:F}=ht(Ut),$=Ze(()=>{const{value:A}=t;return A?e.tmNode.key===A.key:!1});function b(A){const{tmNode:R}=e;R.disabled||g(A,R)}function _(A){const{tmNode:R}=e;R.disabled||F(A,R)}function K(A){const{tmNode:R}=e,{value:N}=$;R.disabled||N||F(A,R)}return{multiple:o,isGrouped:Ze(()=>{const{tmNode:A}=e,{parent:R}=A;return R&&R.rawNode.type==="group"}),showCheckmark:c,nodeProps:f,isPending:$,isSelected:Ze(()=>{const{value:A}=n,{value:R}=o;if(A===null)return!1;const N=e.tmNode.rawNode[v.value];if(R){const{value:S}=i;return S.has(N)}else return A===N}),labelField:a,renderLabel:d,renderOption:l,handleMouseMove:K,handleMouseEnter:_,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:i,showCheckmark:d,nodeProps:l,renderOption:a,renderLabel:v,handleClick:c,handleMouseEnter:f,handleMouseMove:g}=this,F=mi(t,e),$=v?[v(n,t),d&&F]:[Ye(n[this.labelField],n,t),d&&F],b=l==null?void 0:l(n),_=s("div",Object.assign({},b,{class:[`${e}-base-select-option`,n.class,b==null?void 0:b.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:d}],style:[(b==null?void 0:b.style)||"",n.style||""],onClick:zt([c,b==null?void 0:b.onClick]),onMouseenter:zt([f,b==null?void 0:b.onMouseenter]),onMousemove:zt([g,b==null?void 0:b.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},$));return n.render?n.render({node:_,option:n,selected:t}):a?a({node:_,option:n,selected:t}):_}}),an=ce({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=ht(Ut);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:i}}=this,d=o==null?void 0:o(i),l=n?n(i,!1):Ye(i[this.labelField],i,!1),a=s("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d==null?void 0:d.class]}),l);return i.render?i.render({node:a,option:i}):t?t({node:a,option:i,selected:!1}):a}}),{cubicBezierEaseIn:ln,cubicBezierEaseOut:sn}=po;function Sn({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:o="",originalTransition:i=""}={}){return[J("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${ln}, transform ${n} ${ln} ${i&&","+i}`}),J("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${sn}, transform ${n} ${sn} ${i&&","+i}`}),J("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${t})`}),J("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const bi=O("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[O("scrollbar",`
 max-height: var(--n-height);
 `),O("virtual-list",`
 max-height: var(--n-height);
 `),O("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[C("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),O("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),O("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),C("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),C("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),C("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),O("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),O("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ae("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),J("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),J("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ae("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ae("pending",[J("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ae("selected",`
 color: var(--n-option-text-color-active);
 `,[J("&::before",`
 background-color: var(--n-option-color-active);
 `),ae("pending",[J("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ae("disabled",`
 cursor: not-allowed;
 `,[Be("selected",`
 color: var(--n-option-text-color-disabled);
 `),ae("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),C("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Sn({enterScale:"0.5"})])])]),yi=ce({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=Ce("InternalSelectMenu","-internal-select-menu",bi,mo,e,ue(e,"clsPrefix")),t=M(null),o=M(null),i=M(null),d=I(()=>e.treeMate.getFlattenedNodes()),l=I(()=>ei(d.value)),a=M(null);function v(){const{treeMate:p}=e;let x=null;const{value:Y}=e;Y===null?x=p.getFirstAvailableNode():(e.multiple?x=p.getNode((Y||[])[(Y||[]).length-1]):x=p.getNode(Y),(!x||x.disabled)&&(x=p.getFirstAvailableNode())),w(x||null)}function c(){const{value:p}=a;p&&!e.treeMate.getNode(p.key)&&(a.value=null)}let f;Me(()=>e.show,p=>{p?f=Me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():c(),ft(T)):c()},{immediate:!0}):f==null||f()},{immediate:!0}),fn(()=>{f==null||f()});const g=I(()=>Vt(n.value.self[ge("optionHeight",e.size)])),F=I(()=>wt(n.value.self[ge("padding",e.size)])),$=I(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),b=I(()=>{const p=d.value;return p&&p.length===0});function _(p){const{onToggle:x}=e;x&&x(p)}function K(p){const{onScroll:x}=e;x&&x(p)}function A(p){var x;(x=i.value)===null||x===void 0||x.sync(),K(p)}function R(){var p;(p=i.value)===null||p===void 0||p.sync()}function N(){const{value:p}=a;return p||null}function S(p,x){x.disabled||w(x,!1)}function P(p,x){x.disabled||_(x)}function E(p){var x;xt(p,"action")||(x=e.onKeyup)===null||x===void 0||x.call(e,p)}function D(p){var x;xt(p,"action")||(x=e.onKeydown)===null||x===void 0||x.call(e,p)}function q(p){var x;(x=e.onMousedown)===null||x===void 0||x.call(e,p),!e.focusable&&p.preventDefault()}function X(){const{value:p}=a;p&&w(p.getNext({loop:!0}),!0)}function W(){const{value:p}=a;p&&w(p.getPrev({loop:!0}),!0)}function w(p,x=!1){a.value=p,x&&T()}function T(){var p,x;const Y=a.value;if(!Y)return;const de=l.value(Y.key);de!==null&&(e.virtualScroll?(p=o.value)===null||p===void 0||p.scrollTo({index:de}):(x=i.value)===null||x===void 0||x.scrollTo({index:de,elSize:g.value}))}function j(p){var x,Y;!((x=t.value)===null||x===void 0)&&x.contains(p.target)&&((Y=e.onFocus)===null||Y===void 0||Y.call(e,p))}function ne(p){var x,Y;!((x=t.value)===null||x===void 0)&&x.contains(p.relatedTarget)||(Y=e.onBlur)===null||Y===void 0||Y.call(e,p)}Et(Ut,{handleOptionMouseEnter:S,handleOptionClick:P,valueSetRef:$,pendingTmNodeRef:a,nodePropsRef:ue(e,"nodeProps"),showCheckmarkRef:ue(e,"showCheckmark"),multipleRef:ue(e,"multiple"),valueRef:ue(e,"value"),renderLabelRef:ue(e,"renderLabel"),renderOptionRef:ue(e,"renderOption"),labelFieldRef:ue(e,"labelField"),valueFieldRef:ue(e,"valueField")}),Et(Oo,t),et(()=>{const{value:p}=i;p&&p.sync()});const Q=I(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:x},self:{height:Y,borderRadius:de,color:pe,groupHeaderTextColor:ye,actionDividerColor:we,optionTextColorPressed:ze,optionTextColor:Oe,optionTextColorDisabled:me,optionTextColorActive:fe,optionOpacityDisabled:Ae,optionCheckColor:xe,actionTextColor:$e,optionColorPending:Se,optionColorActive:Pe,loadingColor:Ee,loadingSize:Le,optionColorActivePending:Ne,[ge("optionFontSize",p)]:be,[ge("optionHeight",p)]:_e,[ge("optionPadding",p)]:he}}=n.value;return{"--n-height":Y,"--n-action-divider-color":we,"--n-action-text-color":$e,"--n-bezier":x,"--n-border-radius":de,"--n-color":pe,"--n-option-font-size":be,"--n-group-header-text-color":ye,"--n-option-check-color":xe,"--n-option-color-pending":Se,"--n-option-color-active":Pe,"--n-option-color-active-pending":Ne,"--n-option-height":_e,"--n-option-opacity-disabled":Ae,"--n-option-text-color":Oe,"--n-option-text-color-active":fe,"--n-option-text-color-disabled":me,"--n-option-text-color-pressed":ze,"--n-option-padding":he,"--n-option-padding-left":wt(he,"left"),"--n-option-padding-right":wt(he,"right"),"--n-loading-color":Ee,"--n-loading-size":Le}}),{inlineThemeDisabled:ee}=e,U=ee?vt("internal-select-menu",I(()=>e.size[0]),Q,e):void 0,Z={selfRef:t,next:X,prev:W,getPendingTmNode:N};return wn(t,e.onResize),Object.assign({mergedTheme:n,virtualListRef:o,scrollbarRef:i,itemSize:g,padding:F,flattenedNodes:d,empty:b,virtualListContainer(){const{value:p}=o;return p==null?void 0:p.listElRef},virtualListContent(){const{value:p}=o;return p==null?void 0:p.itemsElRef},doScroll:K,handleFocusin:j,handleFocusout:ne,handleKeyUp:E,handleKeyDown:D,handleMouseDown:q,handleVirtualListResize:R,handleVirtualListScroll:A,cssVars:ee?void 0:Q,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender},Z)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:i,onRender:d}=this;return d==null||d(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,i,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?s("div",{class:`${t}-base-select-menu__loading`},s(gn,{clsPrefix:t,strokeWidth:20})):this.empty?s("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Je(e.empty,()=>[s(pi,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):s(yn,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?s(jo,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?s(an,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:s(rn,{clsPrefix:t,key:l.key,tmNode:l})}):s("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?s(an,{key:l.key,clsPrefix:t,tmNode:l}):s(rn,{clsPrefix:t,key:l.key,tmNode:l})))}),ct(e.action,l=>l&&[s("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),s(Vr,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),wi=O("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[J(">",[C("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[J("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),J("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),C("placeholder",`
 display: flex;
 `),C("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[bo({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ht=ce({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return pn("-base-clear",wi,ue(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-base-clear`},s(yo,null,{default:()=>{var n,t;return this.show?s("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Je(this.$slots.icon,()=>[s(Qe,{clsPrefix:e},{default:()=>s(Wr,null)})])):s("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(n=this.$slots).placeholder)===null||t===void 0?void 0:t.call(n))}}))}}),Pn=ce({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:t}=e;return s(gn,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?s(Ht,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>s(Qe,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Je(n.default,()=>[s(Dr,null)])})}):null})}}}),xi=J([O("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[O("base-loading",`
 color: var(--n-loading-color);
 `),O("base-selection-tags","min-height: var(--n-height);"),C("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),C("state-border",`
 z-index: 1;
 border-color: #0000;
 `),O("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[C("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),O("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[C("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),O("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[C("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),O("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),O("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[O("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[C("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),C("render-label",`
 color: var(--n-text-color);
 `)]),Be("disabled",[J("&:hover",[C("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ae("focus",[C("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ae("active",[C("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),O("base-selection-label","background-color: var(--n-color-active);"),O("base-selection-tags","background-color: var(--n-color-active);")])]),ae("disabled","cursor: not-allowed;",[C("arrow",`
 color: var(--n-arrow-color-disabled);
 `),O("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[O("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),C("render-label",`
 color: var(--n-text-color-disabled);
 `)]),O("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),O("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),O("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[C("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),C("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ae(`${e}-status`,[C("state-border",`border: var(--n-border-${e});`),Be("disabled",[J("&:hover",[C("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ae("active",[C("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),O("base-selection-label",`background-color: var(--n-color-active-${e});`),O("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ae("focus",[C("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),O("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),O("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[J("&:last-child","padding-right: 0;"),O("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[C("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ci=ce({name:"InternalSelection",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=M(null),t=M(null),o=M(null),i=M(null),d=M(null),l=M(null),a=M(null),v=M(null),c=M(null),f=M(null),g=M(!1),F=M(!1),$=M(!1),b=Ce("InternalSelection","-internal-selection",xi,wo,e,ue(e,"clsPrefix")),_=I(()=>e.clearable&&!e.disabled&&($.value||e.active)),K=I(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ye(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),A=I(()=>{const m=e.selectedOption;if(m)return m[e.labelField]}),R=I(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function N(){var m;const{value:k}=n;if(k){const{value:re}=t;re&&(re.style.width=`${k.offsetWidth}px`,e.maxTagCount!=="responsive"&&((m=c.value)===null||m===void 0||m.sync()))}}function S(){const{value:m}=f;m&&(m.style.display="none")}function P(){const{value:m}=f;m&&(m.style.display="inline-block")}Me(ue(e,"active"),m=>{m||S()}),Me(ue(e,"pattern"),()=>{e.multiple&&ft(N)});function E(m){const{onFocus:k}=e;k&&k(m)}function D(m){const{onBlur:k}=e;k&&k(m)}function q(m){const{onDeleteOption:k}=e;k&&k(m)}function X(m){const{onClear:k}=e;k&&k(m)}function W(m){const{onPatternInput:k}=e;k&&k(m)}function w(m){var k;(!m.relatedTarget||!(!((k=o.value)===null||k===void 0)&&k.contains(m.relatedTarget)))&&E(m)}function T(m){var k;!((k=o.value)===null||k===void 0)&&k.contains(m.relatedTarget)||D(m)}function j(m){X(m)}function ne(){$.value=!0}function Q(){$.value=!1}function ee(m){!e.active||!e.filterable||m.target!==t.value&&m.preventDefault()}function U(m){q(m)}function Z(m){if(m.key==="Backspace"&&!p.value&&!e.pattern.length){const{selectedOptions:k}=e;k!=null&&k.length&&U(k[k.length-1])}}const p=M(!1);let x=null;function Y(m){const{value:k}=n;if(k){const re=m.target.value;k.textContent=re,N()}e.ignoreComposition&&p.value?x=m:W(m)}function de(){p.value=!0}function pe(){p.value=!1,e.ignoreComposition&&W(x),x=null}function ye(m){var k;F.value=!0,(k=e.onPatternFocus)===null||k===void 0||k.call(e,m)}function we(m){var k;F.value=!1,(k=e.onPatternBlur)===null||k===void 0||k.call(e,m)}function ze(){var m,k;if(e.filterable)F.value=!1,(m=l.value)===null||m===void 0||m.blur(),(k=t.value)===null||k===void 0||k.blur();else if(e.multiple){const{value:re}=i;re==null||re.blur()}else{const{value:re}=d;re==null||re.blur()}}function Oe(){var m,k,re;e.filterable?(F.value=!1,(m=l.value)===null||m===void 0||m.focus()):e.multiple?(k=i.value)===null||k===void 0||k.focus():(re=d.value)===null||re===void 0||re.focus()}function me(){const{value:m}=t;m&&(P(),m.focus())}function fe(){const{value:m}=t;m&&m.blur()}function Ae(m){const{value:k}=a;k&&k.setTextContent(`+${m}`)}function xe(){const{value:m}=v;return m}function $e(){return t.value}let Se=null;function Pe(){Se!==null&&window.clearTimeout(Se)}function Ee(){e.disabled||e.active||(Pe(),Se=window.setTimeout(()=>{R.value&&(g.value=!0)},100))}function Le(){Pe()}function Ne(m){m||(Pe(),g.value=!1)}Me(R,m=>{m||(g.value=!1)}),et(()=>{Lt(()=>{const m=l.value;m&&(m.tabIndex=e.disabled||F.value?-1:0)})}),wn(o,e.onResize);const{inlineThemeDisabled:be}=e,_e=I(()=>{const{size:m}=e,{common:{cubicBezierEaseInOut:k},self:{borderRadius:re,color:Te,placeholderColor:tt,textColor:nt,paddingSingle:ot,paddingMultiple:rt,caretColor:He,colorDisabled:je,textColorDisabled:Ue,placeholderColorDisabled:it,colorActive:at,boxShadowFocus:Ge,boxShadowActive:ve,boxShadowHover:u,border:y,borderFocus:B,borderHover:G,borderActive:V,arrowColor:H,arrowColorDisabled:L,loadingColor:se,colorActiveWarning:De,boxShadowFocusWarning:lt,boxShadowActiveWarning:qe,boxShadowHoverWarning:Xe,borderWarning:Pt,borderFocusWarning:Tt,borderHoverWarning:gt,borderActiveWarning:Ie,colorActiveError:r,boxShadowFocusError:h,boxShadowActiveError:z,boxShadowHoverError:oe,borderError:le,borderFocusError:te,borderHoverError:Fe,borderActiveError:ke,clearColor:Re,clearColorHover:We,clearColorPressed:Ve,clearSize:st,arrowSize:Ft,[ge("height",m)]:kt,[ge("fontSize",m)]:Rt}}=b.value;return{"--n-bezier":k,"--n-border":y,"--n-border-active":V,"--n-border-focus":B,"--n-border-hover":G,"--n-border-radius":re,"--n-box-shadow-active":ve,"--n-box-shadow-focus":Ge,"--n-box-shadow-hover":u,"--n-caret-color":He,"--n-color":Te,"--n-color-active":at,"--n-color-disabled":je,"--n-font-size":Rt,"--n-height":kt,"--n-padding-single":ot,"--n-padding-multiple":rt,"--n-placeholder-color":tt,"--n-placeholder-color-disabled":it,"--n-text-color":nt,"--n-text-color-disabled":Ue,"--n-arrow-color":H,"--n-arrow-color-disabled":L,"--n-loading-color":se,"--n-color-active-warning":De,"--n-box-shadow-focus-warning":lt,"--n-box-shadow-active-warning":qe,"--n-box-shadow-hover-warning":Xe,"--n-border-warning":Pt,"--n-border-focus-warning":Tt,"--n-border-hover-warning":gt,"--n-border-active-warning":Ie,"--n-color-active-error":r,"--n-box-shadow-focus-error":h,"--n-box-shadow-active-error":z,"--n-box-shadow-hover-error":oe,"--n-border-error":le,"--n-border-focus-error":te,"--n-border-hover-error":Fe,"--n-border-active-error":ke,"--n-clear-size":st,"--n-clear-color":Re,"--n-clear-color-hover":We,"--n-clear-color-pressed":Ve,"--n-arrow-size":Ft}}),he=be?vt("internal-selection",I(()=>e.size[0]),_e,e):void 0;return{mergedTheme:b,mergedClearable:_,patternInputFocused:F,filterablePlaceholder:K,label:A,selected:R,showTagsPanel:g,isComposing:p,counterRef:a,counterWrapperRef:v,patternInputMirrorRef:n,patternInputRef:t,selfRef:o,multipleElRef:i,singleElRef:d,patternInputWrapperRef:l,overflowRef:c,inputTagElRef:f,handleMouseDown:ee,handleFocusin:w,handleClear:j,handleMouseEnter:ne,handleMouseLeave:Q,handleDeleteOption:U,handlePatternKeyDown:Z,handlePatternInputInput:Y,handlePatternInputBlur:we,handlePatternInputFocus:ye,handleMouseEnterCounter:Ee,handleMouseLeaveCounter:Le,handleFocusout:T,handleCompositionEnd:pe,handleCompositionStart:de,onPopoverUpdateShow:Ne,focus:Oe,focusInput:me,blur:ze,blurInput:fe,updateCounter:Ae,getCounter:xe,getTail:$e,renderLabel:e.renderLabel,cssVars:be?void 0:_e,themeClass:he==null?void 0:he.themeClass,onRender:he==null?void 0:he.onRender}},render(){const{status:e,multiple:n,size:t,disabled:o,filterable:i,maxTagCount:d,bordered:l,clsPrefix:a,onRender:v,renderTag:c,renderLabel:f}=this;v==null||v();const g=d==="responsive",F=typeof d=="number",$=g||F,b=s(_o,null,{default:()=>s(Pn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var K,A;return(A=(K=this.$slots).arrow)===null||A===void 0?void 0:A.call(K)}})});let _;if(n){const{labelField:K}=this,A=T=>s("div",{class:`${a}-base-selection-tag-wrapper`,key:T.value},c?c({option:T,handleClose:()=>{this.handleDeleteOption(T)}}):s(Mt,{size:t,closable:!T.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(T)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(T,!0):Ye(T[K],T,!0)})),R=()=>(F?this.selectedOptions.slice(0,d):this.selectedOptions).map(A),N=i?s("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,S=g?()=>s("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(Mt,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let P;if(F){const T=this.selectedOptions.length-d;T>0&&(P=s("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},s(Mt,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${T}`})))}const E=g?i?s(tn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:S,tail:()=>N}):s(tn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:S}):F?R().concat(P):R(),D=$?()=>s("div",{class:`${a}-base-selection-popover`},g?R():this.selectedOptions.map(A)):void 0,q=$?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,W=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},s("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,w=i?s("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},E,g?null:N,b):s("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:o?void 0:0},E,b);_=s(mn,null,$?s(Ao,Object.assign({},q,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>w,default:D}):w,W)}else if(i){const K=this.pattern||this.isComposing,A=this.active?!K:!this.selected,R=this.active?!1:this.selected;_=s("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),R?s("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},s("div",{class:`${a}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):Ye(this.label,this.selectedOption,!0))):null,A?s("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,b)}else _=s("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${a}-base-selection-input`,title:No(this.label),key:"input"},s("div",{class:`${a}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):Ye(this.label,this.selectedOption,!0))):s("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),b);return s("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,l?s("div",{class:`${a}-base-selection__border`}):null,l?s("div",{class:`${a}-base-selection__state-border`}):null)}});function St(e){return e.type==="group"}function Tn(e){return e.type==="ignored"}function $t(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Si(e,n){return{getIsGroup:St,getIgnored:Tn,getKey(o){return St(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function Pi(e,n,t,o){if(!n)return e;function i(d){if(!Array.isArray(d))return[];const l=[];for(const a of d)if(St(a)){const v=i(a[o]);v.length&&l.push(Object.assign({},a,{[o]:v}))}else{if(Tn(a))continue;n(t,a)&&l.push(a)}return l}return i(e)}function Ti(e,n,t){const o=new Map;return e.forEach(i=>{St(i)?i[t].forEach(d=>{o.set(d[n],d)}):o.set(i[n],i)}),o}const Fn=xo("n-input");function Fi(e){let n=0;for(const t of e)n++;return n}function bt(e){return e===""||e==null}function ki(e){const n=M(null);function t(){const{value:d}=e;if(!(d!=null&&d.focus)){i();return}const{selectionStart:l,selectionEnd:a,value:v}=d;if(l==null||a==null){i();return}n.value={start:l,end:a,beforeText:v.slice(0,l),afterText:v.slice(a)}}function o(){var d;const{value:l}=n,{value:a}=e;if(!l||!a)return;const{value:v}=a,{start:c,beforeText:f,afterText:g}=l;let F=v.length;if(v.endsWith(g))F=v.length-g.length;else if(v.startsWith(f))F=f.length;else{const $=f[c-1],b=v.indexOf($,c-1);b!==-1&&(F=b+1)}(d=a.setSelectionRange)===null||d===void 0||d.call(a,F,F)}function i(){n.value=null}return Me(e,i),{recordCursor:t,restoreCursor:o}}const dn=ce({name:"InputWordCount",setup(e,{slots:n}){const{mergedValueRef:t,maxlengthRef:o,mergedClsPrefixRef:i,countGraphemesRef:d}=ht(Fn),l=I(()=>{const{value:a}=t;return a===null||Array.isArray(a)?0:(d.value||Fi)(a)});return()=>{const{value:a}=o,{value:v}=t;return s("span",{class:`${i.value}-input-word-count`},zo(n.default,{value:v===null||Array.isArray(v)?"":v},()=>[a===void 0?l.value:`${l.value} / ${a}`]))}}}),Ri=O("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[C("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),C("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),C("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[J("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),J("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),J("&:-webkit-autofill ~",[C("placeholder","display: none;")])]),ae("round",[Be("textarea","border-radius: calc(var(--n-height) / 2);")]),C("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[J("span",`
 width: 100%;
 display: inline-block;
 `)]),ae("textarea",[C("placeholder","overflow: visible;")]),Be("autosize","width: 100%;"),ae("autosize",[C("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),O("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),C("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),C("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[J("+",[C("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Be("textarea",[C("placeholder","white-space: nowrap;")]),C("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),ae("textarea","width: 100%;",[O("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),ae("resizable",[O("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),C("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),C("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),ae("pair",[C("input-el, placeholder","text-align: center;"),C("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[O("icon",`
 color: var(--n-icon-color);
 `),O("base-icon",`
 color: var(--n-icon-color);
 `)])]),ae("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[C("border","border: var(--n-border-disabled);"),C("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),C("placeholder","color: var(--n-placeholder-color-disabled);"),C("separator","color: var(--n-text-color-disabled);",[O("icon",`
 color: var(--n-icon-color-disabled);
 `),O("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),O("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),C("suffix, prefix","color: var(--n-text-color-disabled);",[O("icon",`
 color: var(--n-icon-color-disabled);
 `),O("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Be("disabled",[C("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[J("&:hover",`
 color: var(--n-icon-color-hover);
 `),J("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),J("&:hover",[C("state-border","border: var(--n-border-hover);")]),ae("focus","background-color: var(--n-color-focus);",[C("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),C("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),C("state-border",`
 border-color: #0000;
 z-index: 1;
 `),C("prefix","margin-right: 4px;"),C("suffix",`
 margin-left: 4px;
 `),C("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[O("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),O("base-clear",`
 font-size: var(--n-icon-size);
 `,[C("placeholder",[O("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),J(">",[O("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),O("base-icon",`
 font-size: var(--n-icon-size);
 `)]),O("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>ae(`${e}-status`,[Be("disabled",[O("base-loading",`
 color: var(--n-loading-color-${e})
 `),C("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),C("state-border",`
 border: var(--n-border-${e});
 `),J("&:hover",[C("state-border",`
 border: var(--n-border-hover-${e});
 `)]),J("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[C("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),ae("focus",`
 background-color: var(--n-color-focus-${e});
 `,[C("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),Mi=O("input",[ae("disabled",[C("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),zi=Object.assign(Object.assign({},Ce.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Wi=ce({name:"Input",props:zi,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,inlineThemeDisabled:o,mergedRtlRef:i}=jt(e),d=Ce("Input","-input",Ri,Po,e,n);so&&pn("-input-safari",Mi,n);const l=M(null),a=M(null),v=M(null),c=M(null),f=M(null),g=M(null),F=M(null),$=ki(F),b=M(null),{localeRef:_}=Gt("Input"),K=M(e.defaultValue),A=ue(e,"value"),R=Nt(A,K),N=un(e),{mergedSizeRef:S,mergedDisabledRef:P,mergedStatusRef:E}=N,D=M(!1),q=M(!1),X=M(!1),W=M(!1);let w=null;const T=I(()=>{const{placeholder:r,pair:h}=e;return h?Array.isArray(r)?r:r===void 0?["",""]:[r,r]:r===void 0?[_.value.placeholder]:[r]}),j=I(()=>{const{value:r}=X,{value:h}=R,{value:z}=T;return!r&&(bt(h)||Array.isArray(h)&&bt(h[0]))&&z[0]}),ne=I(()=>{const{value:r}=X,{value:h}=R,{value:z}=T;return!r&&z[1]&&(bt(h)||Array.isArray(h)&&bt(h[1]))}),Q=Ze(()=>e.internalForceFocus||D.value),ee=Ze(()=>{if(P.value||e.readonly||!e.clearable||!Q.value&&!q.value)return!1;const{value:r}=R,{value:h}=Q;return e.pair?!!(Array.isArray(r)&&(r[0]||r[1]))&&(q.value||h):!!r&&(q.value||h)}),U=I(()=>{const{showPasswordOn:r}=e;if(r)return r;if(e.showPasswordToggle)return"click"}),Z=M(!1),p=I(()=>{const{textDecoration:r}=e;return r?Array.isArray(r)?r.map(h=>({textDecoration:h})):[{textDecoration:r}]:["",""]}),x=M(void 0),Y=()=>{var r,h;if(e.type==="textarea"){const{autosize:z}=e;if(z&&(x.value=(h=(r=b.value)===null||r===void 0?void 0:r.$el)===null||h===void 0?void 0:h.offsetWidth),!a.value||typeof z=="boolean")return;const{paddingTop:oe,paddingBottom:le,lineHeight:te}=window.getComputedStyle(a.value),Fe=Number(oe.slice(0,-2)),ke=Number(le.slice(0,-2)),Re=Number(te.slice(0,-2)),{value:We}=v;if(!We)return;if(z.minRows){const Ve=Math.max(z.minRows,1),st=`${Fe+ke+Re*Ve}px`;We.style.minHeight=st}if(z.maxRows){const Ve=`${Fe+ke+Re*z.maxRows}px`;We.style.maxHeight=Ve}}},de=I(()=>{const{maxlength:r}=e;return r===void 0?void 0:Number(r)});et(()=>{const{value:r}=R;Array.isArray(r)||L(r)});const pe=Co().proxy;function ye(r){const{onUpdateValue:h,"onUpdate:value":z,onInput:oe}=e,{nTriggerFormInput:le}=N;h&&ie(h,r),z&&ie(z,r),oe&&ie(oe,r),K.value=r,le()}function we(r){const{onChange:h}=e,{nTriggerFormChange:z}=N;h&&ie(h,r),K.value=r,z()}function ze(r){const{onBlur:h}=e,{nTriggerFormBlur:z}=N;h&&ie(h,r),z()}function Oe(r){const{onFocus:h}=e,{nTriggerFormFocus:z}=N;h&&ie(h,r),z()}function me(r){const{onClear:h}=e;h&&ie(h,r)}function fe(r){const{onInputBlur:h}=e;h&&ie(h,r)}function Ae(r){const{onInputFocus:h}=e;h&&ie(h,r)}function xe(){const{onDeactivate:r}=e;r&&ie(r)}function $e(){const{onActivate:r}=e;r&&ie(r)}function Se(r){const{onClick:h}=e;h&&ie(h,r)}function Pe(r){const{onWrapperFocus:h}=e;h&&ie(h,r)}function Ee(r){const{onWrapperBlur:h}=e;h&&ie(h,r)}function Le(){X.value=!0}function Ne(r){X.value=!1,r.target===g.value?be(r,1):be(r,0)}function be(r,h=0,z="input"){const oe=r.target.value;if(L(oe),r instanceof InputEvent&&!r.isComposing&&(X.value=!1),e.type==="textarea"){const{value:te}=b;te&&te.syncUnifiedContainer()}if(w=oe,X.value)return;$.recordCursor();const le=_e(oe);if(le)if(!e.pair)z==="input"?ye(oe):we(oe);else{let{value:te}=R;Array.isArray(te)?te=[te[0],te[1]]:te=["",""],te[h]=oe,z==="input"?ye(te):we(te)}pe.$forceUpdate(),le||ft($.restoreCursor)}function _e(r){const{countGraphemes:h,maxlength:z,minlength:oe}=e;if(h){let te;if(z!==void 0&&(te===void 0&&(te=h(r)),te>Number(z))||oe!==void 0&&(te===void 0&&(te=h(r)),te<Number(z)))return!1}const{allowInput:le}=e;return typeof le=="function"?le(r):!0}function he(r){fe(r),r.relatedTarget===l.value&&xe(),r.relatedTarget!==null&&(r.relatedTarget===f.value||r.relatedTarget===g.value||r.relatedTarget===a.value)||(W.value=!1),Te(r,"blur"),F.value=null}function m(r,h){Ae(r),D.value=!0,W.value=!0,$e(),Te(r,"focus"),h===0?F.value=f.value:h===1?F.value=g.value:h===2&&(F.value=a.value)}function k(r){e.passivelyActivated&&(Ee(r),Te(r,"blur"))}function re(r){e.passivelyActivated&&(D.value=!0,Pe(r),Te(r,"focus"))}function Te(r,h){r.relatedTarget!==null&&(r.relatedTarget===f.value||r.relatedTarget===g.value||r.relatedTarget===a.value||r.relatedTarget===l.value)||(h==="focus"?(Oe(r),D.value=!0):h==="blur"&&(ze(r),D.value=!1))}function tt(r,h){be(r,h,"change")}function nt(r){Se(r)}function ot(r){me(r),e.pair?(ye(["",""]),we(["",""])):(ye(""),we(""))}function rt(r){const{onMousedown:h}=e;h&&h(r);const{tagName:z}=r.target;if(z!=="INPUT"&&z!=="TEXTAREA"){if(e.resizable){const{value:oe}=l;if(oe){const{left:le,top:te,width:Fe,height:ke}=oe.getBoundingClientRect(),Re=14;if(le+Fe-Re<r.clientX&&r.clientX<le+Fe&&te+ke-Re<r.clientY&&r.clientY<te+ke)return}}r.preventDefault(),D.value||u()}}function He(){var r;q.value=!0,e.type==="textarea"&&((r=b.value)===null||r===void 0||r.handleMouseEnterWrapper())}function je(){var r;q.value=!1,e.type==="textarea"&&((r=b.value)===null||r===void 0||r.handleMouseLeaveWrapper())}function Ue(){P.value||U.value==="click"&&(Z.value=!Z.value)}function it(r){if(P.value)return;r.preventDefault();const h=oe=>{oe.preventDefault(),Yt("mouseup",document,h)};if(Xt("mouseup",document,h),U.value!=="mousedown")return;Z.value=!0;const z=()=>{Z.value=!1,Yt("mouseup",document,z)};Xt("mouseup",document,z)}function at(r){var h;switch((h=e.onKeydown)===null||h===void 0||h.call(e,r),r.key){case"Escape":ve();break;case"Enter":Ge(r);break}}function Ge(r){var h,z;if(e.passivelyActivated){const{value:oe}=W;if(oe){e.internalDeactivateOnEnter&&ve();return}r.preventDefault(),e.type==="textarea"?(h=a.value)===null||h===void 0||h.focus():(z=f.value)===null||z===void 0||z.focus()}}function ve(){e.passivelyActivated&&(W.value=!1,ft(()=>{var r;(r=l.value)===null||r===void 0||r.focus()}))}function u(){var r,h,z;P.value||(e.passivelyActivated?(r=l.value)===null||r===void 0||r.focus():((h=a.value)===null||h===void 0||h.focus(),(z=f.value)===null||z===void 0||z.focus()))}function y(){var r;!((r=l.value)===null||r===void 0)&&r.contains(document.activeElement)&&document.activeElement.blur()}function B(){var r,h;(r=a.value)===null||r===void 0||r.select(),(h=f.value)===null||h===void 0||h.select()}function G(){P.value||(a.value?a.value.focus():f.value&&f.value.focus())}function V(){const{value:r}=l;r!=null&&r.contains(document.activeElement)&&r!==document.activeElement&&ve()}function H(r){if(e.type==="textarea"){const{value:h}=a;h==null||h.scrollTo(r)}else{const{value:h}=f;h==null||h.scrollTo(r)}}function L(r){const{type:h,pair:z,autosize:oe}=e;if(!z&&oe)if(h==="textarea"){const{value:le}=v;le&&(le.textContent=(r??"")+`\r
`)}else{const{value:le}=c;le&&(r?le.textContent=r:le.innerHTML="&nbsp;")}}function se(){Y()}const De=M({top:"0"});function lt(r){var h;const{scrollTop:z}=r.target;De.value.top=`${-z}px`,(h=b.value)===null||h===void 0||h.syncUnifiedContainer()}let qe=null;Lt(()=>{const{autosize:r,type:h}=e;r&&h==="textarea"?qe=Me(R,z=>{!Array.isArray(z)&&z!==w&&L(z)}):qe==null||qe()});let Xe=null;Lt(()=>{e.type==="textarea"?Xe=Me(R,r=>{var h;!Array.isArray(r)&&r!==w&&((h=b.value)===null||h===void 0||h.syncUnifiedContainer())}):Xe==null||Xe()}),Et(Fn,{mergedValueRef:R,maxlengthRef:de,mergedClsPrefixRef:n,countGraphemesRef:ue(e,"countGraphemes")});const Pt={wrapperElRef:l,inputElRef:f,textareaElRef:a,isCompositing:X,focus:u,blur:y,select:B,deactivate:V,activate:G,scrollTo:H},Tt=So("Input",i,n),gt=I(()=>{const{value:r}=S,{common:{cubicBezierEaseInOut:h},self:{color:z,borderRadius:oe,textColor:le,caretColor:te,caretColorError:Fe,caretColorWarning:ke,textDecorationColor:Re,border:We,borderDisabled:Ve,borderHover:st,borderFocus:Ft,placeholderColor:kt,placeholderColorDisabled:Rt,lineHeightTextarea:kn,colorDisabled:Rn,colorFocus:Mn,textColorDisabled:zn,boxShadowFocus:On,iconSize:An,colorFocusWarning:_n,boxShadowFocusWarning:In,borderWarning:Bn,borderFocusWarning:$n,borderHoverWarning:En,colorFocusError:Ln,boxShadowFocusError:Nn,borderError:Dn,borderFocusError:Wn,borderHoverError:Vn,clearSize:Kn,clearColor:Hn,clearColorHover:jn,clearColorPressed:Un,iconColor:Gn,iconColorDisabled:qn,suffixTextColor:Xn,countTextColor:Yn,countTextColorDisabled:Zn,iconColorHover:Jn,iconColorPressed:Qn,loadingColor:eo,loadingColorError:to,loadingColorWarning:no,[ge("padding",r)]:oo,[ge("fontSize",r)]:ro,[ge("height",r)]:io}}=d.value,{left:ao,right:lo}=wt(oo);return{"--n-bezier":h,"--n-count-text-color":Yn,"--n-count-text-color-disabled":Zn,"--n-color":z,"--n-font-size":ro,"--n-border-radius":oe,"--n-height":io,"--n-padding-left":ao,"--n-padding-right":lo,"--n-text-color":le,"--n-caret-color":te,"--n-text-decoration-color":Re,"--n-border":We,"--n-border-disabled":Ve,"--n-border-hover":st,"--n-border-focus":Ft,"--n-placeholder-color":kt,"--n-placeholder-color-disabled":Rt,"--n-icon-size":An,"--n-line-height-textarea":kn,"--n-color-disabled":Rn,"--n-color-focus":Mn,"--n-text-color-disabled":zn,"--n-box-shadow-focus":On,"--n-loading-color":eo,"--n-caret-color-warning":ke,"--n-color-focus-warning":_n,"--n-box-shadow-focus-warning":In,"--n-border-warning":Bn,"--n-border-focus-warning":$n,"--n-border-hover-warning":En,"--n-loading-color-warning":no,"--n-caret-color-error":Fe,"--n-color-focus-error":Ln,"--n-box-shadow-focus-error":Nn,"--n-border-error":Dn,"--n-border-focus-error":Wn,"--n-border-hover-error":Vn,"--n-loading-color-error":to,"--n-clear-color":Hn,"--n-clear-size":Kn,"--n-clear-color-hover":jn,"--n-clear-color-pressed":Un,"--n-icon-color":Gn,"--n-icon-color-hover":Jn,"--n-icon-color-pressed":Qn,"--n-icon-color-disabled":qn,"--n-suffix-text-color":Xn}}),Ie=o?vt("input",I(()=>{const{value:r}=S;return r[0]}),gt,e):void 0;return Object.assign(Object.assign({},Pt),{wrapperElRef:l,inputElRef:f,inputMirrorElRef:c,inputEl2Ref:g,textareaElRef:a,textareaMirrorElRef:v,textareaScrollbarInstRef:b,rtlEnabled:Tt,uncontrolledValue:K,mergedValue:R,passwordVisible:Z,mergedPlaceholder:T,showPlaceholder1:j,showPlaceholder2:ne,mergedFocus:Q,isComposing:X,activated:W,showClearButton:ee,mergedSize:S,mergedDisabled:P,textDecorationStyle:p,mergedClsPrefix:n,mergedBordered:t,mergedShowPasswordOn:U,placeholderStyle:De,mergedStatus:E,textAreaScrollContainerWidth:x,handleTextAreaScroll:lt,handleCompositionStart:Le,handleCompositionEnd:Ne,handleInput:be,handleInputBlur:he,handleInputFocus:m,handleWrapperBlur:k,handleWrapperFocus:re,handleMouseEnter:He,handleMouseLeave:je,handleMouseDown:rt,handleChange:tt,handleClick:nt,handleClear:ot,handlePasswordToggleClick:Ue,handlePasswordToggleMousedown:it,handleWrapperKeydown:at,handleTextAreaMirrorResize:se,getTextareaScrollContainer:()=>a.value,mergedTheme:d,cssVars:o?void 0:gt,themeClass:Ie==null?void 0:Ie.themeClass,onRender:Ie==null?void 0:Ie.onRender})},render(){var e,n;const{mergedClsPrefix:t,mergedStatus:o,themeClass:i,type:d,countGraphemes:l,onRender:a}=this,v=this.$slots;return a==null||a(),s("div",{ref:"wrapperElRef",class:[`${t}-input`,i,o&&`${t}-input--${o}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:d==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&d!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},s("div",{class:`${t}-input-wrapper`},ct(v.prefix,c=>c&&s("div",{class:`${t}-input__prefix`},c)),d==="textarea"?s(yn,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,f;const{textAreaScrollContainerWidth:g}=this,F={width:this.autosize&&g&&`${g}px`};return s(mn,null,s("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(f=this.inputProps)===null||f===void 0?void 0:f.style,F],onBlur:this.handleInputBlur,onFocus:$=>{this.handleInputFocus($,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?s("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,F],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?s(Wt,{onResize:this.handleTextAreaMirrorResize},{default:()=>s("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):s("div",{class:`${t}-input__input`},s("input",Object.assign({type:d==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":d},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(n=this.inputProps)===null||n===void 0?void 0:n.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,0)},onInput:c=>{this.handleInput(c,0)},onChange:c=>{this.handleChange(c,0)}})),this.showPlaceholder1?s("div",{class:`${t}-input__placeholder`},s("span",null,this.mergedPlaceholder[0])):null,this.autosize?s("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&ct(v.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?s("div",{class:`${t}-input__suffix`},[ct(v["clear-icon-placeholder"],f=>(this.clearable||f)&&s(Ht,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>f,icon:()=>{var g,F;return(F=(g=this.$slots)["clear-icon"])===null||F===void 0?void 0:F.call(g)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?s(Pn,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?s(dn,null,{default:f=>{var g;return(g=v.count)===null||g===void 0?void 0:g.call(v,f)}}):null,this.mergedShowPasswordOn&&this.type==="password"?s("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Je(v["password-visible-icon"],()=>[s(Qe,{clsPrefix:t},{default:()=>s(Er,null)})]):Je(v["password-invisible-icon"],()=>[s(Qe,{clsPrefix:t},{default:()=>s(Lr,null)})])):null]):null)),this.pair?s("span",{class:`${t}-input__separator`},Je(v.separator,()=>[this.separator])):null,this.pair?s("div",{class:`${t}-input-wrapper`},s("div",{class:`${t}-input__input`},s("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,1)},onInput:c=>{this.handleInput(c,1)},onChange:c=>{this.handleChange(c,1)}}),this.showPlaceholder2?s("div",{class:`${t}-input__placeholder`},s("span",null,this.mergedPlaceholder[1])):null),ct(v.suffix,c=>(this.clearable||c)&&s("div",{class:`${t}-input__suffix`},[this.clearable&&s(Ht,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var f;return(f=v["clear-icon"])===null||f===void 0?void 0:f.call(v)},placeholder:()=>{var f;return(f=v["clear-icon-placeholder"])===null||f===void 0?void 0:f.call(v)}}),c]))):null,this.mergedBordered?s("div",{class:`${t}-input__border`}):null,this.mergedBordered?s("div",{class:`${t}-input__state-border`}):null,this.showCount&&d==="textarea"?s(dn,null,{default:c=>{var f;const{renderCount:g}=this;return g?g(c):(f=v.count)===null||f===void 0?void 0:f.call(v,c)}}):null)}}),Oi=J([O("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),O("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Sn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Ai=Object.assign(Object.assign({},Ce.props),{to:Dt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Vi=ce({name:"Select",props:Ai,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:o,inlineThemeDisabled:i}=jt(e),d=Ce("Select","-select",Oi,Mo,e,n),l=M(e.defaultValue),a=ue(e,"value"),v=Nt(a,l),c=M(!1),f=M(""),g=I(()=>{const{valueField:u,childrenField:y}=e,B=Si(u,y);return hi(T.value,B)}),F=I(()=>Ti(W.value,e.valueField,e.childrenField)),$=M(!1),b=Nt(ue(e,"show"),$),_=M(null),K=M(null),A=M(null),{localeRef:R}=Gt("Select"),N=I(()=>{var u;return(u=e.placeholder)!==null&&u!==void 0?u:R.value.placeholder}),S=To(e,["items","options"]),P=[],E=M([]),D=M([]),q=M(new Map),X=I(()=>{const{fallbackOption:u}=e;if(u===void 0){const{labelField:y,valueField:B}=e;return G=>({[y]:String(G),[B]:G})}return u===!1?!1:y=>Object.assign(u(y),{value:y})}),W=I(()=>D.value.concat(E.value).concat(S.value)),w=I(()=>{const{filter:u}=e;if(u)return u;const{labelField:y,valueField:B}=e;return(G,V)=>{if(!V)return!1;const H=V[y];if(typeof H=="string")return $t(G,H);const L=V[B];return typeof L=="string"?$t(G,L):typeof L=="number"?$t(G,String(L)):!1}}),T=I(()=>{if(e.remote)return S.value;{const{value:u}=W,{value:y}=f;return!y.length||!e.filterable?u:Pi(u,w.value,y,e.childrenField)}});function j(u){const y=e.remote,{value:B}=q,{value:G}=F,{value:V}=X,H=[];return u.forEach(L=>{if(G.has(L))H.push(G.get(L));else if(y&&B.has(L))H.push(B.get(L));else if(V){const se=V(L);se&&H.push(se)}}),H}const ne=I(()=>{if(e.multiple){const{value:u}=v;return Array.isArray(u)?j(u):[]}return null}),Q=I(()=>{const{value:u}=v;return!e.multiple&&!Array.isArray(u)?u===null?null:j([u])[0]||null:null}),ee=un(e),{mergedSizeRef:U,mergedDisabledRef:Z,mergedStatusRef:p}=ee;function x(u,y){const{onChange:B,"onUpdate:value":G,onUpdateValue:V}=e,{nTriggerFormChange:H,nTriggerFormInput:L}=ee;B&&ie(B,u,y),V&&ie(V,u,y),G&&ie(G,u,y),l.value=u,H(),L()}function Y(u){const{onBlur:y}=e,{nTriggerFormBlur:B}=ee;y&&ie(y,u),B()}function de(){const{onClear:u}=e;u&&ie(u)}function pe(u){const{onFocus:y,showOnFocus:B}=e,{nTriggerFormFocus:G}=ee;y&&ie(y,u),G(),B&&me()}function ye(u){const{onSearch:y}=e;y&&ie(y,u)}function we(u){const{onScroll:y}=e;y&&ie(y,u)}function ze(){var u;const{remote:y,multiple:B}=e;if(y){const{value:G}=q;if(B){const{valueField:V}=e;(u=ne.value)===null||u===void 0||u.forEach(H=>{G.set(H[V],H)})}else{const V=Q.value;V&&G.set(V[e.valueField],V)}}}function Oe(u){const{onUpdateShow:y,"onUpdate:show":B}=e;y&&ie(y,u),B&&ie(B,u),$.value=u}function me(){Z.value||(Oe(!0),$.value=!0,e.filterable&&Ue())}function fe(){Oe(!1)}function Ae(){f.value="",D.value=P}const xe=M(!1);function $e(){e.filterable&&(xe.value=!0)}function Se(){e.filterable&&(xe.value=!1,b.value||Ae())}function Pe(){Z.value||(b.value?e.filterable?Ue():fe():me())}function Ee(u){var y,B;!((B=(y=A.value)===null||y===void 0?void 0:y.selfRef)===null||B===void 0)&&B.contains(u.relatedTarget)||(c.value=!1,Y(u),fe())}function Le(u){pe(u),c.value=!0}function Ne(u){c.value=!0}function be(u){var y;!((y=_.value)===null||y===void 0)&&y.$el.contains(u.relatedTarget)||(c.value=!1,Y(u),fe())}function _e(){var u;(u=_.value)===null||u===void 0||u.focus(),fe()}function he(u){var y;b.value&&(!((y=_.value)===null||y===void 0)&&y.$el.contains(Eo(u))||fe())}function m(u){if(!Array.isArray(u))return[];if(X.value)return Array.from(u);{const{remote:y}=e,{value:B}=F;if(y){const{value:G}=q;return u.filter(V=>B.has(V)||G.has(V))}else return u.filter(G=>B.has(G))}}function k(u){re(u.rawNode)}function re(u){if(Z.value)return;const{tag:y,remote:B,clearFilterAfterSelect:G,valueField:V}=e;if(y&&!B){const{value:H}=D,L=H[0]||null;if(L){const se=E.value;se.length?se.push(L):E.value=[L],D.value=P}}if(B&&q.value.set(u[V],u),e.multiple){const H=m(v.value),L=H.findIndex(se=>se===u[V]);if(~L){if(H.splice(L,1),y&&!B){const se=Te(u[V]);~se&&(E.value.splice(se,1),G&&(f.value=""))}}else H.push(u[V]),G&&(f.value="");x(H,j(H))}else{if(y&&!B){const H=Te(u[V]);~H?E.value=[E.value[H]]:E.value=P}je(),fe(),x(u[V],u)}}function Te(u){return E.value.findIndex(B=>B[e.valueField]===u)}function tt(u){b.value||me();const{value:y}=u.target;f.value=y;const{tag:B,remote:G}=e;if(ye(y),B&&!G){if(!y){D.value=P;return}const{onCreate:V}=e,H=V?V(y):{[e.labelField]:y,[e.valueField]:y},{valueField:L}=e;S.value.some(se=>se[L]===H[L])||E.value.some(se=>se[L]===H[L])?D.value=P:D.value=[H]}}function nt(u){u.stopPropagation();const{multiple:y}=e;!y&&e.filterable&&fe(),de(),y?x([],[]):x(null,null)}function ot(u){!xt(u,"action")&&!xt(u,"empty")&&u.preventDefault()}function rt(u){we(u)}function He(u){var y,B,G,V,H;if(!e.keyboard){u.preventDefault();return}switch(u.key){case" ":if(e.filterable)break;u.preventDefault();case"Enter":if(!(!((y=_.value)===null||y===void 0)&&y.isComposing)){if(b.value){const L=(B=A.value)===null||B===void 0?void 0:B.getPendingTmNode();L?k(L):e.filterable||(fe(),je())}else if(me(),e.tag&&xe.value){const L=D.value[0];if(L){const se=L[e.valueField],{value:De}=v;e.multiple&&Array.isArray(De)&&De.some(lt=>lt===se)||re(L)}}}u.preventDefault();break;case"ArrowUp":if(u.preventDefault(),e.loading)return;b.value&&((G=A.value)===null||G===void 0||G.prev());break;case"ArrowDown":if(u.preventDefault(),e.loading)return;b.value?(V=A.value)===null||V===void 0||V.next():me();break;case"Escape":b.value&&(Wo(u),fe()),(H=_.value)===null||H===void 0||H.focus();break}}function je(){var u;(u=_.value)===null||u===void 0||u.focus()}function Ue(){var u;(u=_.value)===null||u===void 0||u.focusInput()}function it(){var u;b.value&&((u=K.value)===null||u===void 0||u.syncPosition())}ze(),Me(ue(e,"options"),ze);const at={focus:()=>{var u;(u=_.value)===null||u===void 0||u.focus()},blur:()=>{var u;(u=_.value)===null||u===void 0||u.blur()}},Ge=I(()=>{const{self:{menuBoxShadow:u}}=d.value;return{"--n-menu-box-shadow":u}}),ve=i?vt("select",void 0,Ge,e):void 0;return Object.assign(Object.assign({},at),{mergedStatus:p,mergedClsPrefix:n,mergedBordered:t,namespace:o,treeMate:g,isMounted:Fo(),triggerRef:_,menuRef:A,pattern:f,uncontrolledShow:$,mergedShow:b,adjustedTo:Dt(e),uncontrolledValue:l,mergedValue:v,followerRef:K,localizedPlaceholder:N,selectedOption:Q,selectedOptions:ne,mergedSize:U,mergedDisabled:Z,focused:c,activeWithoutMenuOpen:xe,inlineThemeDisabled:i,onTriggerInputFocus:$e,onTriggerInputBlur:Se,handleTriggerOrMenuResize:it,handleMenuFocus:Ne,handleMenuBlur:be,handleMenuTabOut:_e,handleTriggerClick:Pe,handleToggle:k,handleDeleteOption:re,handlePatternInput:tt,handleClear:nt,handleTriggerBlur:Ee,handleTriggerFocus:Le,handleKeydown:He,handleMenuAfterLeave:Ae,handleMenuClickOutside:he,handleMenuScroll:rt,handleMenuKeydown:He,handleMenuMousedown:ot,mergedTheme:d,cssVars:i?void 0:Ge,themeClass:ve==null?void 0:ve.themeClass,onRender:ve==null?void 0:ve.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(Io,null,{default:()=>[s(Bo,null,{default:()=>s(Ci,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),s($o,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Dt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(vn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),ko(s(yi,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[Ro,this.mergedShow],[Zt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Zt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Wi as N,Vi as a,yi as b,hi as c,_r as d,Si as e,Sn as f,xt as h,zt as m,Gt as u};
