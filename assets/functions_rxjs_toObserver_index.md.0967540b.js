import{_ as s,o as n,c as a,g as l}from"./app.b382afd7.js";const u=JSON.parse('{"title":"toObserver","description":"","frontmatter":{},"headers":[],"relativePath":"functions/rxjs/toObserver/index.md","lastUpdated":1677736325000}'),p={name:"functions/rxjs/toObserver/index.md"},o=l(`<h1 id="toobserver" tabindex="-1">toObserver <a class="header-anchor" href="#toobserver" aria-hidden="true">#</a></h1><p>将 <code>ref</code> 转换为 <code>RxJS</code> <a href="https://rxjs.dev/guide/observer" target="_blank" rel="noreferrer">Observer</a> 的糖函数。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { from, fromEvent, toObserver, useSubscription } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/rxjs&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { interval } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;rxjs&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { map, mapTo, takeUntil, withLatestFrom } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;rxjs/operators&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLButtonElement</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">useSubscription</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">interval</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">mapTo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">takeUntil</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fromEvent</span><span style="color:#E1E4E8;">(button, </span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">withLatestFrom</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(count).</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">startWith</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">))),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">total</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">curr</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> curr </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> total),</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">toObserver</span><span style="color:#E1E4E8;">(count)), </span><span style="color:#6A737D;">// same as ).subscribe(val =&gt; (count.value = val))</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { from, fromEvent, toObserver, useSubscription } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/rxjs&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { interval } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;rxjs&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { map, mapTo, takeUntil, withLatestFrom } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;rxjs/operators&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">count</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">button</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">HTMLButtonElement</span><span style="color:#24292E;">&gt;(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">useSubscription</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">interval</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">pipe</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">mapTo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">takeUntil</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">fromEvent</span><span style="color:#24292E;">(button, </span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">)),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">withLatestFrom</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(count).</span><span style="color:#6F42C1;">pipe</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">startWith</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">))),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(([</span><span style="color:#E36209;">total</span><span style="color:#24292E;">, </span><span style="color:#E36209;">curr</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> curr </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> total),</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">subscribe</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">toObserver</span><span style="color:#24292E;">(count)), </span><span style="color:#6A737D;">// same as ).subscribe(val =&gt; (count.value = val))</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toObserver</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextObserver</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toObserver</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;(</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextObserver</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(r,c,E,y,i,F){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};
