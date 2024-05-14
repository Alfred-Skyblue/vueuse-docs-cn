import{_ as s,o as n,c as a,a as e}from"./app.2f286db0.js";const h=JSON.parse('{"title":"useCurrentElement","description":"","frontmatter":{},"headers":[],"relativePath":"functions/component/useCurrentElement/index.md","lastUpdated":1715699998000}'),l={name:"functions/component/useCurrentElement/index.md"},p=e(`<h1 id="usecurrentelement" tabindex="-1">useCurrentElement <a class="header-anchor" href="#usecurrentelement" aria-hidden="true">#</a></h1><p>获取当前组件的元素作为 ref。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCurrentElement } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">el</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCurrentElement</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// ComputedRef&lt;Element&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCurrentElement } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">el</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCurrentElement</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// ComputedRef&lt;Element&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a></h2><p>这个功能使用了 <a href="https://vuejs.org/api/component-instance.html#el" target="_blank" rel="noreferrer"><code>$el</code> under the hood</a>.</p><p>在安装组件之前，ref 的值将是 <code>undefined</code>。</p><ul><li>对于具有单个根元素的组件，它将指向该元素。</li><li>对于具有文本根的组件，它将指向文本节点。</li><li>对于具有多个根节点的组件，它将是 Vue 用来跟踪组件在 DOM 中的位置的占位符 DOM 节点。</li></ul><p>建议仅将此函数用于具有单个根元素的组件。</p><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCurrentElement</span><span style="color:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ComputedRefWithControl</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCurrentElement</span><span style="color:#24292E;">&lt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Element</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Element</span></span>
<span class="line"><span style="color:#24292E;">&gt;()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ComputedRefWithControl</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,11),o=[p];function t(r,c,E,i,y,d){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};