import{_ as s,o as n,c as e,g as a}from"./app.45f58b8a.js";const h=JSON.parse('{"title":"useIpcRendererOn","description":"","frontmatter":{},"headers":[],"relativePath":"functions/electron/useIpcRendererOn/index.md","lastUpdated":1677745265000}'),p={name:"functions/electron/useIpcRendererOn/index.md"},l=a(`<h1 id="useipcrendereron" tabindex="-1">useIpcRendererOn <a class="header-anchor" href="#useipcrendereron" aria-hidden="true">#</a></h1><p>Use <a href="https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener" target="_blank" rel="noreferrer">ipcRenderer.on</a> with ease and <a href="https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener" target="_blank" rel="noreferrer">ipcRenderer.removeListener</a> automatically on unmounted.</p><p>轻松使用<a href="https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener" target="_blank" rel="noreferrer">ipcRenderer.on</a>并在卸载时自动使用 <a href="https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener" target="_blank" rel="noreferrer">ipcRenderer.removeListener</a>。在<a href="https://vueuse.org/electron/README" target="_blank" rel="noreferrer">@vueuse/electron</a> 附加组件中可用。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useIpcRendererOn } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/electron&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果您未明确提供 ipcRenderer，则启用 nodeIntegration</span></span>
<span class="line"><span style="color:#6A737D;">// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration</span></span>
<span class="line"><span style="color:#6A737D;">// 在卸载时自动删除侦听器</span></span>
<span class="line"><span style="color:#B392F0;">useIpcRendererOn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;custom-event&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(args)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useIpcRendererOn } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vueuse/electron&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果您未明确提供 ipcRenderer，则启用 nodeIntegration</span></span>
<span class="line"><span style="color:#6A737D;">// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration</span></span>
<span class="line"><span style="color:#6A737D;">// 在卸载时自动删除侦听器</span></span>
<span class="line"><span style="color:#6F42C1;">useIpcRendererOn</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;custom-event&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(args)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 监听通道，当有新消息到达时，监听器将被调用 listener(event, args...)。</span></span>
<span class="line"><span style="color:#6A737D;"> * [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 您需要为此函数提供 \`ipcRenderer\`。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@see</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@see</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">https://vueuse.org/useIpcRendererOn</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useIpcRendererOn</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">ipcRenderer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IpcRenderer</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">channel</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">listener</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IpcRendererListener</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IpcRenderer</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 监听通道，当有新消息到达时，监听器将被调用 listener(event, args...)。</span></span>
<span class="line"><span style="color:#6A737D;"> * [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * \`ipcRenderer\` 会自动获取。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@see</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@see</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">https://vueuse.org/useIpcRendererOn</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useIpcRendererOn</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">channel</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">listener</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IpcRendererListener</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IpcRenderer</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 监听通道，当有新消息到达时，监听器将被调用 listener(event, args...)。</span></span>
<span class="line"><span style="color:#6A737D;"> * [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 您需要为此函数提供 \`ipcRenderer\`。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@see</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@see</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">https://vueuse.org/useIpcRendererOn</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useIpcRendererOn</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">ipcRenderer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IpcRenderer</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">channel</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">listener</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IpcRendererListener</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IpcRenderer</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 监听通道，当有新消息到达时，监听器将被调用 listener(event, args...)。</span></span>
<span class="line"><span style="color:#6A737D;"> * [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * \`ipcRenderer\` 会自动获取。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@see</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@see</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">https://vueuse.org/useIpcRendererOn</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useIpcRendererOn</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">channel</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">listener</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IpcRendererListener</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IpcRenderer</span></span>
<span class="line"></span></code></pre></div>`,7),o=[l];function r(c,t,i,y,E,d){return n(),e("div",null,o)}const u=s(p,[["render",r]]);export{h as __pageData,u as default};
