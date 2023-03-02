# useWebWorker

简单的 [Web Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) 注册和通信。

## 用法

```ts
import { useWebWorker } from '@vueuse/core'

const { data, post, terminate, worker } = useWebWorker('/path/to/worker.js')
```


## 类型

```ts
export interface UseWebWorkerReturn<Data = any> {
  /**
   * 通过 worker 接收到的最新数据
   */
  data: Ref<Data>
  /**
   * 向 worker 发送消息
   */
  post: (typeof Worker.prototype)['postMessage']
  /**
   * 停止 worker
   */
  terminate: () => void
  /**
   * worker 实例
   */
  worker: ShallowRef<Worker | undefined>
}
type WorkerFn = (...args: unknown[]) => Worker
/**
 * 简单的 Web Worker 注册和通信。
 *
 * @see https://vueuse.org/useWebWorker
 * @param url
 * @param workerOptions
 * @param options
 */
export declare function useWebWorker<T = any>(
  url: string,
  workerOptions?: WorkerOptions,
  options?: ConfigurableWindow
): UseWebWorkerReturn<T>
/**
 * S简单的 Web Worker 注册和通信。
 *
 * @see https://vueuse.org/useWebWorker
 * @param worker
 */
export declare function useWebWorker<T = any>(
  worker: Worker | WorkerFn
): UseWebWorkerReturn<T>
```
