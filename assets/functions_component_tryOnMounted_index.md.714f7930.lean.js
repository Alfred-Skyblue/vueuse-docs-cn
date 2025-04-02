import{_ as s,o as a,c as e,a as o}from"./app.a0e03023.js";const u=JSON.parse('{"title":"tryOnMounted","description":"","frontmatter":{},"headers":[],"relativePath":"functions/component/tryOnMounted/index.md","lastUpdated":1743581019000}'),t={name:"functions/component/tryOnMounted/index.md"};function p(l,n,c,r,d,i){return a(),e("div",null,n[0]||(n[0]=[o(`<h1 id="tryonmounted" tabindex="-1">tryOnMounted <a class="header-anchor" href="#tryonmounted" aria-hidden="true">#</a></h1><p>安全执行<code>onMounted</code>。如果它在组件生命周期内，则调用 <code>onMounted()</code>，如果不在，则调用该函数</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { tryOnMounted } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">tryOnMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { tryOnMounted } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">tryOnMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span></code></pre></div>`,4)]))}const E=s(t,[["render",p]]);export{u as __pageData,E as default};
