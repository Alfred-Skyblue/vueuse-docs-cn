# useIpcRendererInvoke

响应式 [ipcRenderer.invoke API](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args) 结果。让异步操作看起来是同步的。在 [@vueuse/electron](https://vueuse.org/electron/README) 附加组件中可用。



## 用法

```ts
import { useIpcRendererInvoke } from '@vueuse/electron'

// 如果您未明确提供 ipcRenderer，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// 返回一个 ref
const result = useIpcRendererInvoke<string>('custom-channel', 'some data')
const msg = computed(() => result.value?.msg)
```


## 类型

```ts
/**
 *
 * 通过通道向主进程发送消息并期待结果~~async~~。作为 composition-api，它使异步操作看起来像同步操作。
 *
 * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args
 * @see https://vueuse.org/useIpcRendererInvoke
 * @returns Promise<any> - resolve 来自主进程的响应。
 */
export declare function useIpcRendererInvoke<T>(
  ipcRenderer: IpcRenderer,
  channel: string,
  ...args: any[]
): Ref<T | null>
/**
 * @returns Promise<any> - resolves 来自主进程的响应。
 *
 *
 * @see https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args
 * @see https://vueuse.org/useIpcRendererInvoke
 */
export declare function useIpcRendererInvoke<T>(
  channel: string,
  ...args: any[]
): Ref<T | null>
```
