import{_ as s,o as n,c as a,g as l}from"./app.b382afd7.js";const D=JSON.parse('{"title":"useWebSocket","description":"","frontmatter":{},"headers":[],"relativePath":"functions/network/useWebSocket/index.md","lastUpdated":1677736325000}'),p={name:"functions/network/useWebSocket/index.md"},o=l(`<h1 id="usewebsocket" tabindex="-1">useWebSocket <a class="header-anchor" href="#usewebsocket" aria-hidden="true">#</a></h1><p>响应式 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket" target="_blank" rel="noreferrer">WebSocket</a>.</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useWebSocket } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">send</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">close</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useWebSocket</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ws://websocketurl&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useWebSocket } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">status</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">data</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">send</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">open</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">close</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useWebSocket</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ws://websocketurl&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="immediate" tabindex="-1">Immediate <a class="header-anchor" href="#immediate" aria-hidden="true">#</a></h3><p>自动连接（默认启用）。</p><p>这将 <code>open()</code> 自动为您调用，您无需自己调用。</p><p>如果 <code>url</code> 作为 <code>ref</code> 提供，这也控制当其值更改时是否重新建立连接（或者是否需要再次调用 <code>open()</code> 以使更改生效）。</p><h3 id="自动关闭" tabindex="-1">自动关闭 <a class="header-anchor" href="#自动关闭" aria-hidden="true">#</a></h3><p>自动关闭连接（默认启用）。</p><p>这将在事件被触发或关联的效果范围停止close()时自动调用。beforeunload</p><h3 id="自动重连" tabindex="-1">自动重连 <a class="header-anchor" href="#自动重连" aria-hidden="true">#</a></h3><p>自动重新连接错误（默认禁用）。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">close</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useWebSocket</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ws://websocketurl&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  autoReconnect: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">status</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">data</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">close</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useWebSocket</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ws://websocketurl&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  autoReconnect: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span></code></pre></div><p>或者对其行为进行更多控制：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">close</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useWebSocket</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ws://websocketurl&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  autoReconnect: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    retries: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    delay: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onFailed</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Failed to connect WebSocket after 3 retries&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">status</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">data</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">close</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useWebSocket</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ws://websocketurl&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  autoReconnect: {</span></span>
<span class="line"><span style="color:#24292E;">    retries: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    delay: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onFailed</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Failed to connect WebSocket after 3 retries&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span></code></pre></div><blockquote><p>显式调用 <code>close()</code> 不会触发自动重新连接。</p></blockquote><h3 id="心跳" tabindex="-1">心跳 <a class="header-anchor" href="#心跳" aria-hidden="true">#</a></h3><p>通常的做法是在每个给定时间发送一条小消息（心跳）以保持连接处于活动状态。在这个函数中，我们提供了一个方便的助手来完成它：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">close</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useWebSocket</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ws://websocketurl&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  heartbeat: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">status</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">data</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">close</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useWebSocket</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ws://websocketurl&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  heartbeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span></code></pre></div><p>或者使用更多控件：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">close</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useWebSocket</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ws://websocketurl&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  heartbeat: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;ping&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    interval: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pongTimeout: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">status</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">data</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">close</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useWebSocket</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ws://websocketurl&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  heartbeat: {</span></span>
<span class="line"><span style="color:#24292E;">    message: </span><span style="color:#032F62;">&#39;ping&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    interval: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    pongTimeout: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span></code></pre></div><h3 id="子协议" tabindex="-1">子协议 <a class="header-anchor" href="#子协议" aria-hidden="true">#</a></h3><p>要使用的一个或多个子协议的列表，在本例中为 soap 和 wamp。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useWebSocket } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">send</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">close</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useWebSocket</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ws://websocketurl&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  protocols: [</span><span style="color:#9ECBFF;">&#39;soap&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// [&#39;soap&#39;, &#39;wamp&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useWebSocket } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">status</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">data</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">send</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">open</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">close</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useWebSocket</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ws://websocketurl&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  protocols: [</span><span style="color:#032F62;">&#39;soap&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// [&#39;soap&#39;, &#39;wamp&#39;]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebSocketStatus</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;OPEN&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;CONNECTING&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;CLOSED&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UseWebSocketOptions</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onConnected</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ws</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebSocket</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onDisconnected</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ws</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebSocket</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">event</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CloseEvent</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onError</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ws</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebSocket</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">event</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onMessage</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ws</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebSocket</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">event</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MessageEvent</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 每经过 x 毫秒发送心跳</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">false</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">heartbeat</span><span style="color:#F97583;">?:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 心跳的讯息</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">ping</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    message</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> string </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> ArrayBuffer </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> Blob</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 间隔，以毫秒为单位</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">1000</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    interval</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> number</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 心跳响应超时时间，单位毫秒</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">1000</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    pongTimeout</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> number</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 启用自动重连</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">false</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">autoReconnect</span><span style="color:#F97583;">?:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 最大重试次数。</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * 或者你可以传递一个谓词函数（如果你想重试则返回 true）。</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">-1</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    retries</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> (() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> boolean)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 重新连接延迟，以毫秒为单位</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">1000</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    delay</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> number</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 达到最大重试次数。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    onFailed</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> Fn</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 自动打开一个连接</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">true</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">immediate</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 自动关闭连接</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">true</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">autoClose</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 一个或多个子协议字符串列表</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">protocols</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UseWebSocketReturn</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 参考通过 websocket 接收到的最新数据，可以观察以响应传入的消息</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 当前的 websocket 状态，只能是以下之一：&#39;OPEN&#39;, &#39;CONNECTING&#39;, &#39;CLOSED&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">status</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">WebSocketStatus</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 关闭 websocket 连接。</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">close</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebSocket</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 重新打开 websocket 连接。如果当前的那个是活动的，将在打开一个新的之前关闭它。</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">open</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fn</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 通过 websocket 连接发送数据。</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">data</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">useBuffer</span><span style="color:#6A737D;"> 未打开时，将数据存储到缓冲区中并发送给它们一个连接。默认为真。</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">send</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ArrayBuffer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Blob</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">useBuffer</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * WebSocket 实例。</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">ws</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">WebSocket</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 响应式 WebSocket</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@see</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">https://vueuse.org/useWebSocket</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">url</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useWebSocket</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MaybeComputedRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UseWebSocketOptions</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UseWebSocketReturn</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Data</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebSocketStatus</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;OPEN&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;CONNECTING&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;CLOSED&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UseWebSocketOptions</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onConnected</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ws</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebSocket</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onDisconnected</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ws</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebSocket</span><span style="color:#24292E;">, </span><span style="color:#E36209;">event</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CloseEvent</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onError</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ws</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebSocket</span><span style="color:#24292E;">, </span><span style="color:#E36209;">event</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onMessage</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ws</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebSocket</span><span style="color:#24292E;">, </span><span style="color:#E36209;">event</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MessageEvent</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 每经过 x 毫秒发送心跳</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">false</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">heartbeat</span><span style="color:#D73A49;">?:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 心跳的讯息</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">ping</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    message</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> ArrayBuffer </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> Blob</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 间隔，以毫秒为单位</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">1000</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    interval</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> number</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 心跳响应超时时间，单位毫秒</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">1000</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    pongTimeout</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> number</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 启用自动重连</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">false</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">autoReconnect</span><span style="color:#D73A49;">?:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 最大重试次数。</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * 或者你可以传递一个谓词函数（如果你想重试则返回 true）。</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">-1</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    retries</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> (() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> boolean)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 重新连接延迟，以毫秒为单位</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">1000</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    delay</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> number</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 达到最大重试次数。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    onFailed</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> Fn</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 自动打开一个连接</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">true</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">immediate</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 自动关闭连接</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">true</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">autoClose</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 一个或多个子协议字符串列表</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">protocols</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UseWebSocketReturn</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 参考通过 websocket 接收到的最新数据，可以观察以响应传入的消息</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 当前的 websocket 状态，只能是以下之一：&#39;OPEN&#39;, &#39;CONNECTING&#39;, &#39;CLOSED&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">status</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">WebSocketStatus</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 关闭 websocket 连接。</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">close</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebSocket</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 重新打开 websocket 连接。如果当前的那个是活动的，将在打开一个新的之前关闭它。</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">open</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fn</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 通过 websocket 连接发送数据。</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">data</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">useBuffer</span><span style="color:#6A737D;"> 未打开时，将数据存储到缓冲区中并发送给它们一个连接。默认为真。</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">send</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ArrayBuffer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Blob</span><span style="color:#24292E;">, </span><span style="color:#E36209;">useBuffer</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * WebSocket 实例。</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">ws</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">WebSocket</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 响应式 WebSocket</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@see</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">https://vueuse.org/useWebSocket</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">url</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useWebSocket</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">&gt;(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MaybeComputedRef</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UseWebSocketOptions</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UseWebSocketReturn</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Data</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,27),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{D as __pageData,d as default};
