import{bV as F,h as u,B as A,d as E,o as t,c,a as n,t as y,b as o,e,F as D,r as d,w as m,f as C,g}from"./app.82b098ca.js";const[B,i]=F(p=>{const s=u(p),l=A(()=>s.value*2);function a(){s.value++}return{count:s,double:l,increment:a}}),h=E({__name:"CountComponent",setup(p){const{count:s,double:l}=i();return(a,r)=>(t(),c("ul",null,[n("li",null,"count: "+y(o(s)),1),n("li",null,"double: "+y(o(l)),1)]))}}),v=E({__name:"ButtonComponent",setup(p){const{increment:s}=i();return(l,a)=>(t(),c("button",{onClick:a[0]||(a[0]=(...r)=>o(s)&&o(s)(...r))}," + 1 "))}}),_=E({__name:"demo",setup(p){return B(1),(s,l)=>(t(),c(D,null,[e(v),e(h)],64))}}),b=n("h1",{id:"createinjectionstate",tabindex:"-1"},[C("createInjectionState "),n("a",{class:"header-anchor",href:"#createinjectionstate","aria-hidden":"true"},"#")],-1),S=n("p",null,"创建可以注入组件的全局状态。",-1),f=n("blockquote",null,[n("p",null,"注：不限于父子组件之间，只要是后代组件，都可以获取到。")],-1),x=n("h2",{id:"演示",tabindex:"-1"},[C("演示 "),n("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#")],-1),k=g("",9),I=JSON.parse('{"title":"createInjectionState","description":"","frontmatter":{},"headers":[],"relativePath":"functions/state/createInjectionState/index.md","lastUpdated":1678078032000}'),j={name:"functions/state/createInjectionState/index.md"},P=Object.assign(j,{setup(p){return(s,l)=>{const a=d("demo");return t(),c("div",null,[b,S,f,x,e(a,{code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20CountComponent%20from%20'.%2Fcomponents%2FCountComponent.vue'%0Aimport%20ButtonComponent%20from%20'.%2Fcomponents%2FButtonComponent.vue'%0Aimport%20%7B%20useProvideCounterStore%20%7D%20from%20'.%2FuseCounterStore'%0A%0AuseProvideCounterStore(1)%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3CButtonComponent%20%2F%3E%0A%20%20%3CCountComponent%20%2F%3E%0A%3C%2Ftemplate%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22shiki%20github-dark%20vp-code-dark%22%20%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20CountComponent%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3B.%2Fcomponents%2FCountComponent.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20ButtonComponent%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3B.%2Fcomponents%2FButtonComponent.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20useProvideCounterStore%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3B.%2FuseCounterStore%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3EuseProvideCounterStore%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FDAEB7%3B%20font-style%3A%20italic%22%3EButtonComponent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FDAEB7%3B%20font-style%3A%20italic%22%3ECountComponent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20github-light%20vp-code-light%22%20%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20CountComponent%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3B.%2Fcomponents%2FCountComponent.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20ButtonComponent%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3B.%2Fcomponents%2FButtonComponent.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20useProvideCounterStore%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3B.%2FuseCounterStore%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3EuseProvideCounterStore%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B31D28%3B%20font-style%3A%20italic%22%3EButtonComponent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B31D28%3B%20font-style%3A%20italic%22%3ECountComponent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/home/runner/work/vueuse-docs-cn/vueuse-docs-cn/docs/functions/state/createInjectionState/demo.vue",title:"createInjectionState",desc:"将状态注入到后代组件中"},{default:m(()=>[e(_)]),_:1}),k])}}});export{I as __pageData,P as default};