import{_ as s,o as n,c as a,g as l}from"./app.c3c139c6.js";const F=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configurations.md","lastUpdated":1677818871000}'),p={name:"guide/configurations.md"},o=l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h1><p>此处说明了 <code>VueUse</code> 中大部分功能的配置选项。</p><h2 id="事件过滤器" tabindex="-1">事件过滤器 <a class="header-anchor" href="#事件过滤器" aria-hidden="true">#</a></h2><p>从 v4.0 开始，我们提供了事件过滤器，可以灵活地控制事件何时被触发。例如，您可以使用 <code>throttleFilter</code> 和 <code>debounceFilter</code> 来控制事件触发的频率：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  debounceFilter,</span></span>
<span class="line"><span style="color:#E1E4E8;">  throttleFilter,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useLocalStorage,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useMouse,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更改将以1秒的节流写入 localStorage</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">storage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useLocalStorage</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;my-key&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  { foo: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { eventFilter: </span><span style="color:#B392F0;">throttleFilter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">) }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 鼠标空闲 100 毫秒后，鼠标位置将更新</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useMouse</span><span style="color:#E1E4E8;">({ eventFilter: </span><span style="color:#B392F0;">debounceFilter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">) })</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  debounceFilter,</span></span>
<span class="line"><span style="color:#24292E;">  throttleFilter,</span></span>
<span class="line"><span style="color:#24292E;">  useLocalStorage,</span></span>
<span class="line"><span style="color:#24292E;">  useMouse,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更改将以1秒的节流写入 localStorage</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">storage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useLocalStorage</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;my-key&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  { foo: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { eventFilter: </span><span style="color:#6F42C1;">throttleFilter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">) }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 鼠标空闲 100 毫秒后，鼠标位置将更新</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">x</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useMouse</span><span style="color:#24292E;">({ eventFilter: </span><span style="color:#6F42C1;">debounceFilter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">) })</span></span>
<span class="line"></span></code></pre></div><p>此外，您可以利用它 <code>pausableFilter</code> 来暂时暂停某些事件，例如</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pausableFilter, useDeviceMotion } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">motionControl</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pausableFilter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">motion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useDeviceMotion</span><span style="color:#E1E4E8;">({ eventFilter: motionControl.eventFilter })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 暂停</span></span>
<span class="line"><span style="color:#E1E4E8;">motionControl.</span><span style="color:#B392F0;">pause</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 恢复</span></span>
<span class="line"><span style="color:#E1E4E8;">motionControl.</span><span style="color:#B392F0;">resume</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { pausableFilter, useDeviceMotion } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">motionControl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pausableFilter</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">motion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useDeviceMotion</span><span style="color:#24292E;">({ eventFilter: motionControl.eventFilter })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 暂停</span></span>
<span class="line"><span style="color:#24292E;">motionControl.</span><span style="color:#6F42C1;">pause</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 恢复</span></span>
<span class="line"><span style="color:#24292E;">motionControl.</span><span style="color:#6F42C1;">resume</span><span style="color:#24292E;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="触发时机" tabindex="-1">触发时机 <a class="header-anchor" href="#触发时机" aria-hidden="true">#</a></h2><p><code>VueUse</code> 的函数在一般情况下遵循 <code>Vue</code> 的响应式系统默认<a href="https://cn.vuejs.org/guide/essentials/watchers.html#callback-flush-timing" target="_blank" rel="noreferrer">触发时机</a>。</p><p>对于 <code>watch</code> 类的组合项（例如 <code>pausableWatch</code>、<code>whenever</code> <code>useStorage</code>、<code>useRefHistory</code> 默认为{ flush: &#39;pre&#39; }。Vue 的响应式系统会缓存副作用函数，并异步地刷新它们，这样可以避免同一个“tick”中多个状态改变导致的不必要的重复调用。</p><p>与 watch 一样，VueUse 允许您通过传递 flush 选项来配置计时：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">pause</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">resume</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pausableWatch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 可以访问到最新的 DOM</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { flush: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">pause</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">resume</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pausableWatch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 可以访问到最新的 DOM</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  { flush: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="可配置的全局依赖" tabindex="-1">可配置的全局依赖 <a class="header-anchor" href="#可配置的全局依赖" aria-hidden="true">#</a></h2><p>从 v4.0 开始，访问浏览器 API 的函数将提供一个选项字段供您指定全局依赖项（例如 window,document 和 navigator）。默认情况下它会使用全局实例，所以大多数时候你不需要担心它。此配置在使用 iframe 和测试环境时很有用。</p>`,14),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{F as __pageData,h as default};
