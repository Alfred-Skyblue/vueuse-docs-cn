import{a1 as C,a2 as D,a3 as W}from"./index.3bec64f5.js";import{Q as z,h,H,n as w,C as E,j as N,s as Y,i as L}from"./index.b7331328.js";import{d as A,r as S,i as p,I,c as O,p as y,z as _,A as X}from"../app.efe702c0.js";function g(e){var t;const n=h(e);return(t=n==null?void 0:n.$el)!=null?t:n}const U=Y?window:void 0;function j(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=U):[t,n,r,a]=e,!t)return w;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const l=[],c=()=>{l.forEach(s=>s()),l.length=0},o=(s,u,v,f)=>(s.addEventListener(u,v,f),()=>s.removeEventListener(u,v,f)),i=y(()=>[g(t),h(a)],([s,u])=>{c(),s&&l.push(...n.flatMap(v=>r.map(f=>o(s,v,f,u))))},{immediate:!0,flush:"post"}),m=()=>{i(),c()};return E(m),m}const J=A({name:"UseActiveElement",setup(e,{slots:t}){const n=S({element:C()});return()=>{if(t.default)return t.default(n)}}});function Q(){const e=p(!1);return _()&&X(()=>{e.value=!0}),e}function R(e){const t=Q();return O(()=>(t.value,!!e()))}const K=A({name:"UseElementBounding",props:["box","as"],setup(e,{slots:t}){const n=p(),r=S(D(n));return()=>{if(t.default)return I(e.as||"div",{ref:n},t.default(r))}}}),P=A({name:"UseElementSize",props:["width","height","box"],setup(e,{slots:t}){const n=p(),r=S(W(n,{width:e.width,height:e.height},{box:e.box}));return()=>{if(t.default)return I(e.as||"div",{ref:n},t.default(r))}}});function M(e,t,n={}){const{root:r,rootMargin:a="0px",threshold:l=.1,window:c=U,immediate:o=!0}=n,i=R(()=>c&&"IntersectionObserver"in c),m=O(()=>{const d=h(e);return(Array.isArray(d)?d:[d]).map(g).filter(H)});let s=w;const u=p(o),v=i.value?y(()=>[m.value,g(r),u.value],([d,B])=>{if(s(),!u.value||!d.length)return;const b=new IntersectionObserver(t,{root:g(B),rootMargin:a,threshold:l});d.forEach(k=>k&&b.observe(k)),s=()=>{b.disconnect(),s=w}},{immediate:o,flush:"post"}):w,f=()=>{s(),v(),u.value=!1};return E(f),{isSupported:i,isActive:u,pause(){s(),u.value=!1},resume(){u.value=!0},stop:f}}const Z={[z.mounted](e,t){typeof t.value=="function"?M(e,t.value):M(e,...t.value)}};function x(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientHeight<e.scrollHeight||t.overflowY==="auto"&&e.clientWidth<e.scrollWidth)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:x(n)}}function T(e){const t=e||window.event,n=t.target;return x(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}function V(e,t=!1){const n=p(t);let r=null,a;y(N(e),o=>{if(o){const i=o;a=i.style.overflow,n.value&&(i.style.overflow="hidden")}},{immediate:!0});const l=()=>{const o=h(e);!o||n.value||(L&&(r=j(o,"touchmove",i=>{T(i)},{passive:!1})),o.style.overflow="hidden",n.value=!0)},c=()=>{const o=h(e);!o||!n.value||(L&&(r==null||r()),o.style.overflow=a,n.value=!1)};return E(c),O({get(){return n.value},set(o){o?l():c()}})}function $(){let e=!1;const t=p(!1);return(n,r)=>{if(t.value=r.value,e)return;e=!0;const a=V(n,r.value);y(t,l=>a.value=l)}}$();export{J as U,K as a,P as b,Z as v};
