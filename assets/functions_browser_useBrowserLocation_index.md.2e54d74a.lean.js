import{j as E}from"./chunks/index.9ff118c8.js";import{d as c,b as r,o,c as p,f as y,g as l,w as C,a as e}from"./app.a414ecd8.js";import"./chunks/index.e8848682.js";const F=["value"],i=c({__name:"demo",setup(t){const s=E(),n=r(()=>JSON.stringify(s.value,null,"	"));return(a,u)=>(o(),p("textarea",{value:n.value,"h-80":"","w-full":""},null,8,F))}}),A=e("",5),D=e("",4),f=JSON.parse('{"title":"useBrowserLocation","description":"","frontmatter":{},"headers":[],"relativePath":"functions/browser/useBrowserLocation/index.md","lastUpdated":1688955591000}'),B={name:"functions/browser/useBrowserLocation/index.md"},m=Object.assign(B,{setup(t){return(s,n)=>{const a=y("demo");return o(),p("div",null,[A,l(a,{code:"%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useBrowserLocation%20%7D%20from%20'%40vueuse%2Fcore'%0Aimport%20%7B%20computed%20%7D%20from%20'vue'%0A%0Aconst%20location%20%3D%20useBrowserLocation()%0Aconst%20text%20%3D%20computed(()%20%3D%3E%20JSON.stringify(location.value%2C%20null%2C%20'%5Ct'))%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Ctextarea%20%3Avalue%3D%22text%22%20h-80%20w-full%20%2F%3E%0A%3C%2Ftemplate%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22shiki%20github-dark%20vp-code-dark%22%20%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20useBrowserLocation%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3B%40vueuse%2Fcore%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20computed%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Elocation%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3EuseBrowserLocation%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Ecomputed%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3EJSON%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Estringify%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E(location.value%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3E%5Ct%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E))%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etextarea%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3E%3Avalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Eh-80%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Ew-full%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FDAEB7%3B%20font-style%3A%20italic%22%3E%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20github-light%20vp-code-light%22%20%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20useBrowserLocation%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3B%40vueuse%2Fcore%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20computed%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Elocation%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3EuseBrowserLocation%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Ecomputed%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3EJSON%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Estringify%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E(location.value%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3E%5Ct%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E))%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etextarea%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3E%3Avalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eh-80%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Ew-full%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B31D28%3B%20font-style%3A%20italic%22%3E%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/home/runner/work/vueuse-docs-cn/vueuse-docs-cn/docs/functions/browser/useBrowserLocation/demo.vue",title:"useBrowserLocation",desc:"响应式获取 Location"},{default:C(()=>[l(i)]),_:1}),D])}}});export{f as __pageData,m as default};
