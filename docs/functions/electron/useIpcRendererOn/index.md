# useIpcRendererOn

Use [ipcRenderer.on](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener) with ease and [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted.

轻松使用[ipcRenderer.on](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener)并在卸载时自动使用 [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener)。在[@vueuse/electron](https://vueuse.org/electron/README) 附加组件中可用。

## 用法

```ts
import { useIpcRendererOn } from '@vueuse/electron'

// 如果您未明确提供 ipcRenderer，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// 在卸载时自动删除侦听器
useIpcRendererOn('custom-event', (event, ...args) => {
  console.log(args)
})
```


## 类型

```ts
/**
 * 监听通道，当有新消息到达时，监听器将被调用 listener(event, args...)。
 * [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted.
 *
 * 您需要为此函数提供 `ipcRenderer`。
 *
 * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener
 * @see https://vueuse.org/useIpcRendererOn
 */
export declare function useIpcRendererOn(
  ipcRenderer: IpcRenderer,
  channel: string,
  listener: IpcRendererListener
): IpcRenderer
/**
 * 监听通道，当有新消息到达时，监听器将被调用 listener(event, args...)。
 * [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted.
 *
 * `ipcRenderer` 会自动获取。
 *
 * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener
 * @see https://vueuse.org/useIpcRendererOn
 */
export declare function useIpcRendererOn(
  channel: string,
  listener: IpcRendererListener
): IpcRenderer
```
