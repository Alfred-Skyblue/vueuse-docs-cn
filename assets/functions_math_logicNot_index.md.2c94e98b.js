import{_ as s,o as n,c as a,g as o}from"./app.b382afd7.js";const F=JSON.parse('{"title":"logicNot","description":"","frontmatter":{},"headers":[],"relativePath":"functions/math/logicNot/index.md","lastUpdated":1677736325000}'),l={name:"functions/math/logicNot/index.md"},p=o(`<h1 id="logicnot" tabindex="-1">logicNot <a class="header-anchor" href="#logicnot" aria-hidden="true">#</a></h1><p><code>NOT</code> 逻辑非.</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { logicNot } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/math&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { whenever } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">whenever</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">logicNot</span><span style="color:#E1E4E8;">(a), () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a is now falsy!&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { logicNot } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/math&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { whenever } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">whenever</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">logicNot</span><span style="color:#24292E;">(a), () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a is now falsy!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span></code></pre></div>`,4),e=[p];function t(c,r,i,E,y,d){return n(),a("div",null,e)}const _=s(l,[["render",t]]);export{F as __pageData,_ as default};
