# useWebWorkerFn

使用 `Promise` 语法，在不阻塞 `UI` 的情况下运行，运行 [`alewin/useWorker`](https://github.com/alewin/useWorker) 端口。



## 演示

<demo src="./demo.vue" title="useWebWorkerFn" desc=""></demo>


## 用法

### 基本使用
```ts
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn } = useWebWorkerFn(() => {
  // 在 web worker 中要做一些事情
})
```

### 有依赖关系

```ts
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(
  dates => dates.sort(dateFns.compareAsc),
  {
    timeout: 50000,
    dependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.js', // dateFns
    ],
  },
)
```


> 在使用此功能之前，我们建议您详细阅读 [`Web Worker`](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) 的文档，以了解其工作原理和限制。

## 归属

此功能是 [Alessio Koci 的https://github.com/alewin/useWorker](https://github.com/alewin/useWorker) 的 Vue 端口，在 [@Donskelle](https://github.com/Donskelle) 的帮助下迁移。


## 类型

```ts
export type WebWorkerStatus =
  | 'PENDING'
  | 'SUCCESS'
  | 'RUNNING'
  | 'ERROR'
  | 'TIMEOUT_EXPIRED'
export interface UseWebWorkerOptions extends ConfigurableWindow {
  /**
   * 销毁指定时间之前的 worker 进程
   * @default undefined
   */
  timeout?: number
  /**
   * 包含运行 worker 所需的外部依赖项的数组
   */
  dependencies?: string[]
}
/**
 * 使用 Promise 语法，在不阻塞 UI 的情况下运行运行 alewin/useWorker 端口。。
 *
 * @see https://vueuse.org/useWebWorkerFn
 * @param fn
 * @param options
 */
export declare const useWebWorkerFn: <T extends (...fnArgs: any[]) => any>(
  fn: T,
  options?: UseWebWorkerOptions
) => {
  workerFn: (...fnArgs: [...Parameters<T>]) => Promise<ReturnType<T>>
  workerStatus: Ref<WebWorkerStatus>
  workerTerminate: (status?: WebWorkerStatus) => void
}
export type UseWebWorkerFnReturn = ReturnType<typeof useWebWorkerFn>
```
