import{L as $,I as _,M as G,x as z,N as x,i as g,p as S,u as H,b as B,B as O,z as C,K,O as X,P as Z,Q,R as q,y as J,D as ee}from"../app.a0e03023.js";function D(e){return K()?(X(e),!0):!1}function ye(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const s=()=>t(o);return D(s),{off:s}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(s=>s(...o)))}}function we(e){let t=!1,n;const r=$(!0);return(...o)=>(t||(n=r.run(()=>e(...o)),t=!0),n)}const T=new WeakMap,te=(e,t)=>{var n;const r=(n=_())==null?void 0:n.proxy;if(r==null)throw new Error("provideLocal must be called in setup");T.has(r)||T.set(r,Object.create(null));const o=T.get(r);o[e]=t,G(e,t)},ne=(...e)=>{var t;const n=e[0],r=(t=_())==null?void 0:t.proxy;if(r==null)throw new Error("injectLocal must be called in setup");return T.has(r)&&n in T.get(r)?T.get(r)[n]:z(...e)};function Se(e,t){const n=(t==null?void 0:t.injectionKey)||Symbol(e.name||"InjectionState"),r=t==null?void 0:t.defaultValue;return[(...a)=>{const u=e(...a);return te(n,u),u},()=>ne(n,r)]}function Me(e){let t=0,n,r;const o=()=>{t-=1,r&&t<=0&&(r.stop(),n=void 0,r=void 0)};return(...s)=>(t+=1,n||(r=$(!0),n=r.run(()=>e(...s))),D(o),n)}function v(e){return typeof e=="function"?e():H(e)}const I=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const be=e=>typeof e<"u",Te=e=>e!=null,re=Object.prototype.toString,De=e=>re.call(e)==="[object Object]",oe=()=>+Date.now(),Pe=(e,t,n)=>Math.min(n,Math.max(t,e)),P=()=>{},Oe=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),Ae=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Ie=se();function se(){var e,t;return I&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function F(e,t){function n(...r){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(s)})}return n}const L=e=>e();function R(e,t={}){let n,r,o=P;const s=u=>{clearTimeout(u),o(),o=P};return u=>{const i=v(e),c=v(t.maxWait);return n&&s(n),i<=0||c!==void 0&&c<=0?(r&&(s(r),r=null),Promise.resolve(u())):new Promise((d,l)=>{o=t.rejectOnCancel?l:d,c&&!r&&(r=setTimeout(()=>{n&&s(n),r=null,d(u())},c)),n=setTimeout(()=>{r&&s(r),r=null,d(u())},i)})}}function ue(...e){let t=0,n,r=!0,o=P,s,a,u,i,c;!O(e[0])&&typeof e[0]=="object"?{delay:a,trailing:u=!0,leading:i=!0,rejectOnCancel:c=!1}=e[0]:[a,u=!0,i=!0,c=!1]=e;const d=()=>{n&&(clearTimeout(n),n=void 0,o(),o=P)};return f=>{const m=v(a),p=Date.now()-t,y=()=>s=f();return d(),m<=0?(t=Date.now(),y()):(p>m&&(i||!r)?(t=Date.now(),y()):u&&(s=new Promise((h,w)=>{o=c?w:h,n=setTimeout(()=>{t=Date.now(),r=!0,h(y()),d()},Math.max(0,m-p))})),!i&&!n&&(n=setTimeout(()=>r=!0,m)),r=!1,s)}}function ae(e=L){const t=g(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...s)=>{t.value&&e(...s)};return{isActive:C(t),pause:n,resume:r,eventFilter:o}}const Fe={mounted:"mounted",updated:"updated",unmounted:"unmounted"};function k(e,t=!1,n="Timeout"){return new Promise((r,o)=>{setTimeout(t?()=>o(n):r,e)})}function Ee(e){return e}function Ne(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function _e(e){return e()}function xe(e,...t){return t.some(n=>n in e)}function Ce(e,t){var n;if(typeof e=="number")return e+t;const r=((n=e.match(/^-?\d+\.?\d*/))==null?void 0:n[0])||"",o=e.slice(r.length),s=Number.parseFloat(r)+t;return Number.isNaN(s)?e:s+o}function Le(e,t,n=!1){return t.reduce((r,o)=>(o in e&&(!n||e[o]!==void 0)&&(r[o]=e[o]),r),{})}function je(e,t,n=!1){return Object.fromEntries(Object.entries(e).filter(([r,o])=>(!n||o!==void 0)&&!t.includes(r)))}function ke(e){return Object.entries(e)}function W(e){return e||_()}function Ye(...e){if(e.length!==1)return Z(...e);const t=e[0];return typeof t=="function"?C(x(()=>({get:t,set:P}))):g(t)}function $e(e,t=1e4){return x((n,r)=>{let o=v(e),s;const a=()=>setTimeout(()=>{o=v(e),r()},v(t));return D(()=>{clearTimeout(s)}),{get(){return n(),o},set(u){o=u,r(),clearTimeout(s),s=a()}}})}function ie(e,t=200,n={}){return F(R(t,n),e)}function He(e,t=200,n={}){const r=g(e.value),o=ie(()=>{r.value=e.value},t,n);return S(e,()=>o()),r}function le(e,t=200,n=!1,r=!0,o=!1){return F(ue(t,n,r,o),e)}function Be(e,t=200,n=!0,r=!0){if(t<=0)return e;const o=g(e.value),s=le(()=>{o.value=e.value},t,n,r);return S(e,()=>s()),o}function V(e,t,n={}){const{eventFilter:r=L,...o}=n;return S(e,F(r,t),o)}function Y(e,t,n={}){const{eventFilter:r,...o}=n,{eventFilter:s,pause:a,resume:u,isActive:i}=ae(r);return{stop:V(e,t,{...o,eventFilter:s}),pause:a,resume:u,isActive:i}}function Re(e,t,...[n]){const{flush:r="sync",deep:o=!1,immediate:s=!0,direction:a="both",transform:u={}}=n||{},i=[],c="ltr"in u&&u.ltr||(f=>f),d="rtl"in u&&u.rtl||(f=>f);return(a==="both"||a==="ltr")&&i.push(Y(e,f=>{i.forEach(m=>m.pause()),t.value=c(f),i.forEach(m=>m.resume())},{flush:r,deep:o,immediate:s})),(a==="both"||a==="rtl")&&i.push(Y(t,f=>{i.forEach(m=>m.pause()),e.value=d(f),i.forEach(m=>m.resume())},{flush:r,deep:o,immediate:s})),()=>{i.forEach(f=>f.stop())}}function We(e,t={}){if(!O(e))return Q(e);const n=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const r in e.value)n[r]=x(()=>({get(){return e.value[r]},set(o){var s;if((s=v(t.replaceRef))!=null?s:!0)if(Array.isArray(e.value)){const u=[...e.value];u[r]=o,e.value=u}else{const u={...e.value,[r]:o};Object.setPrototypeOf(u,Object.getPrototypeOf(e.value)),e.value=u}else e.value[r]=o}}));return n}function Ve(e,t){W(t)&&q(e,t)}function Ue(e,t=!0,n){W()?J(e,n):t?e():ee(e)}function N(e,t=!1){function n(l,{flush:f="sync",deep:m=!1,timeout:p,throwOnTimeout:y}={}){let h=null;const E=[new Promise(A=>{h=S(e,b=>{l(b)!==t&&(h==null||h(),A(b))},{flush:f,deep:m,immediate:!0})})];return p!=null&&E.push(k(p,y).then(()=>v(e)).finally(()=>h==null?void 0:h())),Promise.race(E)}function r(l,f){if(!O(l))return n(b=>b===l,f);const{flush:m="sync",deep:p=!1,timeout:y,throwOnTimeout:h}=f??{};let w=null;const A=[new Promise(b=>{w=S([e,l],([j,U])=>{t!==(j===U)&&(w==null||w(),b(j))},{flush:m,deep:p,immediate:!0})})];return y!=null&&A.push(k(y,h).then(()=>v(e)).finally(()=>(w==null||w(),v(e)))),Promise.race(A)}function o(l){return n(f=>!!f,l)}function s(l){return r(null,l)}function a(l){return r(void 0,l)}function u(l){return n(Number.isNaN,l)}function i(l,f){return n(m=>{const p=Array.from(m);return p.includes(l)||p.includes(v(l))},f)}function c(l){return d(1,l)}function d(l=1,f){let m=-1;return n(()=>(m+=1,m>=l),f)}return Array.isArray(v(e))?{toMatch:n,toContains:i,changed:c,changedTimes:d,get not(){return N(e,!t)}}:{toMatch:n,toBe:r,toBeTruthy:o,toBeNull:s,toBeNaN:u,toBeUndefined:a,changed:c,changedTimes:d,get not(){return N(e,!t)}}}function Ge(e){return N(e)}function ze(e=0,t={}){let n=H(e);const r=g(e),{max:o=Number.POSITIVE_INFINITY,min:s=Number.NEGATIVE_INFINITY}=t,a=(l=1)=>r.value=Math.max(Math.min(o,r.value+l),s),u=(l=1)=>r.value=Math.min(Math.max(s,r.value-l),o),i=()=>r.value,c=l=>r.value=Math.max(s,Math.min(o,l));return{count:r,inc:a,dec:u,get:i,set:c,reset:(l=n)=>(n=l,c(l))}}const ce=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,fe=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function de(e,t,n,r){let o=e<12?"AM":"PM";return r&&(o=o.split("").reduce((s,a)=>s+=`${a}.`,"")),n?o.toLowerCase():o}function M(e){const t=["th","st","nd","rd"],n=e%100;return e+(t[(n-20)%10]||t[n]||t[0])}function me(e,t,n={}){var r;const o=e.getFullYear(),s=e.getMonth(),a=e.getDate(),u=e.getHours(),i=e.getMinutes(),c=e.getSeconds(),d=e.getMilliseconds(),l=e.getDay(),f=(r=n.customMeridiem)!=null?r:de,m={Yo:()=>M(o),YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>s+1,Mo:()=>M(s+1),MM:()=>`${s+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(a),Do:()=>M(a),DD:()=>`${a}`.padStart(2,"0"),H:()=>String(u),Ho:()=>M(u),HH:()=>`${u}`.padStart(2,"0"),h:()=>`${u%12||12}`.padStart(1,"0"),ho:()=>M(u%12||12),hh:()=>`${u%12||12}`.padStart(2,"0"),m:()=>String(i),mo:()=>M(i),mm:()=>`${i}`.padStart(2,"0"),s:()=>String(c),so:()=>M(c),ss:()=>`${c}`.padStart(2,"0"),SSS:()=>`${d}`.padStart(3,"0"),d:()=>l,dd:()=>e.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>f(u,i),AA:()=>f(u,i,!1,!0),a:()=>f(u,i,!0),aa:()=>f(u,i,!0,!0)};return t.replace(fe,(p,y)=>{var h,w;return(w=y??((h=m[p])==null?void 0:h.call(m)))!=null?w:p})}function ve(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(ce);if(t){const n=t[2]-1||0,r=(t[7]||"0").substring(0,3);return new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,r)}}return new Date(e)}function Ke(e,t="HH:mm:ss",n={}){return B(()=>me(ve(v(e)),v(t),n))}function pe(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:o=!1}=n;let s=null;const a=g(!1);function u(){s&&(clearInterval(s),s=null)}function i(){a.value=!1,u()}function c(){const d=v(t);d<=0||(a.value=!0,o&&e(),u(),s=setInterval(e,d))}if(r&&I&&c(),O(t)||typeof t=="function"){const d=S(t,()=>{a.value&&I&&c()});D(d)}return D(i),{isActive:a,pause:i,resume:c}}function Xe(e=1e3,t={}){const{controls:n=!1,immediate:r=!0,callback:o}=t,s=g(0),a=()=>s.value+=1,u=()=>{s.value=0},i=pe(o?()=>{a(),o(s.value)}:a,e,{immediate:r});return n?{counter:s,reset:u,...i}:s}function Ze(e,t={}){var n;const r=g((n=t.initialValue)!=null?n:null);return S(e,()=>r.value=oe(),t),r}function he(e,t,n={}){const{immediate:r=!0}=n,o=g(!1);let s=null;function a(){s&&(clearTimeout(s),s=null)}function u(){o.value=!1,a()}function i(...c){a(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...c)},v(t))}return r&&(o.value=!0,I&&i()),D(u),{isPending:C(o),start:i,stop:u}}function Qe(e=1e3,t={}){const{controls:n=!1,callback:r}=t,o=he(r??P,e,t),s=B(()=>!o.isPending.value);return n?{ready:s,...o}:s}function qe(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=O(e),s=g(e);function a(u){if(arguments.length)return s.value=u,s.value;{const i=v(n);return s.value=s.value===i?v(r):i,s.value}}return o?a:[s,a]}function Je(e,t,n={}){const{debounce:r=0,maxWait:o=void 0,...s}=n;return V(e,t,{...s,eventFilter:R(r,{maxWait:o})})}function et(e,t,n={}){const{eventFilter:r=L,...o}=n,s=F(r,t);let a,u,i;if(o.flush==="sync"){const c=g(!1);u=()=>{},a=d=>{c.value=!0,d(),c.value=!1},i=S(e,(...d)=>{c.value||s(...d)},o)}else{const c=[],d=g(0),l=g(0);u=()=>{d.value=l.value},c.push(S(e,()=>{l.value++},{...o,flush:"sync"})),a=f=>{const m=l.value;f(),d.value+=l.value-m},c.push(S(e,(...f)=>{const m=d.value>0&&d.value===l.value;d.value=0,l.value=0,!m&&s(...f)},o)),i=()=>{c.forEach(f=>f())}}return{stop:i,ignoreUpdates:a,ignorePrevAsyncUpdates:u}}export{Je as $,oe as A,le as B,Re as C,ie as D,Ve as E,Ee as F,k as G,Ce as H,ye as I,F as J,xe as K,Ae as L,Pe as M,Le as N,be as O,Ke as P,Fe as Q,$e as R,He as S,Be as T,we as U,Se as V,Me as W,ze as X,me as Y,Ze as Z,_e as _,pe as a,Qe as b,he as c,qe as d,D as e,Ie as f,Te as g,Ue as h,De as i,ke as j,Ne as k,Ye as l,et as m,P as n,je as o,ae as p,R as q,Oe as r,L as s,v as t,Xe as u,I as v,Y as w,We as x,Ge as y,ue as z};
