# @vueuse/electron

> 这是 [VueUse](https://github.com/vueuse/vueuse) 的一个附加组件，启用 electron renderer process API 作为 Composition API。


## 安装

```bash
npm i @vueuse/electron electron
```

## Functions

`@vueuse/electron` 提供以下功能

  - [`useIpcRenderer`](https://vueuse.org/electron/useIpcRenderer/) — 提供 [ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer) 及其所有 API
  - [`useIpcRendererInvoke`](https://vueuse.org/electron/useIpcRendererInvoke/) — 提供 [ipcRenderer.invoke API](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args) 结果
  - [`useIpcRendererOn`](https://vueuse.org/electron/useIpcRendererOn/) — 使用 [ipcRenderer.on](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener) 和 [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) 并且自动卸载
  - [`useZoomFactor`](https://vueuse.org/electron/useZoomFactor/) — 响应式 [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) 缩放系数
  - [`useZoomLevel`](https://vueuse.org/electron/useZoomLevel/) — 响应式 [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) 缩放级别


