# useIpcRenderer



提供[ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer)及其所有 API。在[@vueuse/electron](https://vueuse.org/electron/README.html)附加组件中可用。


## 用法

```ts
import { useIpcRenderer } from '@vueuse/electron'

// 如果您未明确提供 ipcRenderer，则启用
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
const ipcRenderer = useIpcRenderer()

// 返回一个 ref
const result = ipcRenderer.invoke<string>('custom-channel', 'some data')
const msg = computed(() => result.value?.msg)

// 在卸载时自动删除侦听器
ipcRenderer.on('custom-event', (event, ...args) => {
  console.log(args)
})
```


## 类型

```ts
/**
 * 来自 useIpcRenderer 的结果
 *
 * @see https://www.electronjs.org/docs/api/ipc-renderer
 */
export interface UseIpcRendererReturn {
  /**
   * 监听通道，当有新消息到达时，监听器将被调用 listener(event, args...)。
   * [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted.
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener
   */
  on(channel: string, listener: IpcRendererListener): IpcRenderer
  /**
   * 为事件添加一次性侦听器函数。只有在下一次将消息发送到通道时才会调用此侦听器，之后将其删除。
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereroncechannel-listener
   */
  once(
    channel: string,
    listener: (event: IpcRendererEvent, ...args: any[]) => void
  ): IpcRenderer
  /**
   * 从指定通道的侦听器数组中删除指定的侦听器。
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener
   */
  removeListener(
    channel: string,
    listener: (...args: any[]) => void
  ): IpcRenderer
  /**
   * 删除所有侦听器或指定频道的侦听器。
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovealllistenerschannel
   */
  removeAllListeners(channel: string): IpcRenderer
  /**
   * 通过通道向主进程发送异步消息以及参数。
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrenderersendchannel-args
   */
  send(channel: string, ...args: any[]): void
  /**
   * @returns { Promise<any> } - 使用来自主进程的响应进行解析。通过通道向主进程发送消息并期待结果~~Promise~~。作为 composition-api，它使异步操作看起来像同步操作
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args
   */
  invoke<T>(channel: string, ...args: any[]): Ref<T | null>
  /**
   * @returns any - ipcMain 处理程序发回的值。通过通道向主进程发送消息并同步期望结果。
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrenderersendsyncchannel-args
   */
  sendSync<T>(channel: string, ...args: any[]): Ref<T | null>
  /**
   * 向主进程发送消息，可选择转移零个或多个 MessagePort 对象的所有权。
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererpostmessagechannel-message-transfer
   */
  postMessage(channel: string, message: any, transfer?: MessagePort[]): void
  /**
   * 通过通道向带有 webContentsId 的窗口发送消息
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrenderersendtowebcontentsid-channel-args
   */
  sendTo(webContentsId: number, channel: string, ...args: any[]): void
  /**
   * 与 ipcRenderer.send 类似，但事件将发送到宿主页面中的 <webview> 元素，而不是主进程。
   *
   * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrenderersendtohostchannel-args
   */
  sendToHost(channel: string, ...args: any[]): void
}
/**
 * 获取带有所有 API 的 `ipcRenderer` 模块。
 *
 * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrenderersendtohostchannel-args
 * @see https://vueuse.org/useIpcRenderer
 */
export declare function useIpcRenderer(
  ipcRenderer?: IpcRenderer
): UseIpcRendererReturn
```
