import{_ as l}from"./chunks/RequiresProxy.862f6a79.js";import{_ as o,o as p,c as e,e as a,h as t,g as c,a as r}from"./app.a0e03023.js";const v=JSON.parse('{"title":"toReactive","description":"","frontmatter":{},"headers":[],"relativePath":"functions/reactivity/toReactive/index.md","lastUpdated":1743581019000}'),y={name:"functions/reactivity/toReactive/index.md"};function E(i,s,d,f,F,A){const n=l;return p(),e("div",null,[s[0]||(s[0]=a("h1",{id:"toreactive",tabindex:"-1"},[t("toReactive "),a("a",{class:"header-anchor",href:"#toreactive","aria-hidden":"true"},"#")],-1)),s[1]||(s[1]=a("p",null,"将 ref 转换为 reactive。还可以创建一个 “可交换的” reactive对象。",-1)),c(n),s[2]||(s[2]=r(`<h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { toReactive } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refState</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({ foo: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(refState.value.foo) </span><span style="color:#6A737D;">// =&gt; &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toReactive</span><span style="color:#E1E4E8;">(refState) </span><span style="color:#6A737D;">// &lt;--</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(state.foo) </span><span style="color:#6A737D;">// =&gt; &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">refState.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { bar: </span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(state.foo) </span><span style="color:#6A737D;">// =&gt; undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(state.bar) </span><span style="color:#6A737D;">// =&gt; &#39;foo&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { toReactive } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refState</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({ foo: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(refState.value.foo) </span><span style="color:#6A737D;">// =&gt; &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toReactive</span><span style="color:#24292E;">(refState) </span><span style="color:#6A737D;">// &lt;--</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(state.foo) </span><span style="color:#6A737D;">// =&gt; &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">refState.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { bar: </span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(state.foo) </span><span style="color:#6A737D;">// =&gt; undefined</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(state.bar) </span><span style="color:#6A737D;">// =&gt; &#39;foo&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 将 ref 转换为 reactive。还可以创建一个 “可交换的” reactive对象。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@see</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">https://vueuse.org/toReactive</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">objectRef</span><span style="color:#6A737D;"> A ref of object</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toReactive</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">objectRef</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MaybeRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 将 ref 转换为 reactive。还可以创建一个 “可交换的” reactive对象。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@see</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">https://vueuse.org/toReactive</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">objectRef</span><span style="color:#6A737D;"> A ref of object</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toReactive</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">object</span><span style="color:#24292E;">&gt;(</span><span style="color:#E36209;">objectRef</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MaybeRef</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span></span>
<span class="line"></span></code></pre></div>`,4))])}const g=o(y,[["render",E]]);export{v as __pageData,g as default};
