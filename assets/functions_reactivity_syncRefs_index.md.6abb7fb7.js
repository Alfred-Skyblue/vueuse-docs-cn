import{_ as s,o as n,c as a,g as l}from"./app.82b098ca.js";const A=JSON.parse('{"title":"syncRefs","description":"","frontmatter":{},"headers":[],"relativePath":"functions/reactivity/syncRefs/index.md","lastUpdated":1678078813000}'),p={name:"functions/reactivity/syncRefs/index.md"},o=l(`<h1 id="syncrefs" tabindex="-1">syncRefs <a class="header-anchor" href="#syncrefs" aria-hidden="true">#</a></h1><p>保持目标引用与源引用同步</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { syncRefs } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;target&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">syncRefs</span><span style="color:#E1E4E8;">(source, target)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(target.value) </span><span style="color:#6A737D;">// hello</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">source.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(target.value) </span><span style="color:#6A737D;">// foo</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { syncRefs } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">target</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;target&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">stop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">syncRefs</span><span style="color:#24292E;">(source, target)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(target.value) </span><span style="color:#6A737D;">// hello</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">source.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(target.value) </span><span style="color:#6A737D;">// foo</span></span>
<span class="line"></span></code></pre></div><p>设置{ flush: &#39;pre&#39; }时，目标引用将在渲染开始前的当前“<a href="https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing" target="_blank" rel="noreferrer">&quot;tick&quot;</a>”结束时更新。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { syncRefs } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;target&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">syncRefs</span><span style="color:#E1E4E8;">(source, target, { flush: </span><span style="color:#9ECBFF;">&#39;pre&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(target.value) </span><span style="color:#6A737D;">// hello</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">source.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(target.value) </span><span style="color:#6A737D;">// hello &lt;- still unchanged, because of flush &#39;pre&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(target.value) </span><span style="color:#6A737D;">// foo &lt;- changed!</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { syncRefs } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">target</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;target&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">syncRefs</span><span style="color:#24292E;">(source, target, { flush: </span><span style="color:#032F62;">&#39;pre&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(target.value) </span><span style="color:#6A737D;">// hello</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">source.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(target.value) </span><span style="color:#6A737D;">// hello &lt;- still unchanged, because of flush &#39;pre&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(target.value) </span><span style="color:#6A737D;">// foo &lt;- changed!</span></span>
<span class="line"></span></code></pre></div><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SyncRefsOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConfigurableFlushSync</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 深度监听</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">false</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">deep</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 立即执行</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">true</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">immediate</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Keep target ref(s) in sync with the source ref</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">source</span><span style="color:#6A737D;"> source ref</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">targets</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">syncRefs</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">source</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WatchSource</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">targets</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;[],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SyncRefsOptions</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WatchStopHandle</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SyncRefsOptions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConfigurableFlushSync</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 深度监听</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">false</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">deep</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 立即执行</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">true</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">immediate</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Keep target ref(s) in sync with the source ref</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">source</span><span style="color:#6A737D;"> source ref</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">targets</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">syncRefs</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">source</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WatchSource</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">targets</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;[],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SyncRefsOptions</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WatchStopHandle</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
