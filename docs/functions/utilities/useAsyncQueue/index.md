# useAsyncQueue

顺序执行每个异步任务，并将当前任务结果传递给下一个任务

## 演示

<demo src="./demo.vue" title="useAsyncQueue" desc="顺序执行每个异步任务，并将当前任务结果传递给下一个任务"></demo>


## 用法

```ts
import { useAsyncQueue } from '@vueuse/core'

const p1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000)
    }, 10)
  })
}

const p2 = (result: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000 + result)
    }, 20)
  })
}

const { activeIndex, result } = useAsyncQueue([p1, p2])

console.log(activeIndex.value) // 当前待处理任

console.log(result) // 任务结果
```


## 类型

```ts
export type UseAsyncQueueTask<T> = (...args: any[]) => T | Promise<T>
export interface UseAsyncQueueResult<T> {
  state: 'pending' | 'fulfilled' | 'rejected'
  data: T | null
}
export interface UseAsyncQueueReturn<T> {
  activeIndex: Ref<number>
  result: T
}
export interface UseAsyncQueueOptions {
  /**
   * 当前任务失败时中断任务
   *
   * @default true
   */
  interrupt?: boolean
  /**
   * 当任务失败时触发它
   *
   */
  onError?: () => void
  /**
   * 当任务结束时触发它
   *
   */
  onFinished?: () => void
}
/**
 * 异步队列任务控制器
 *
 * @see https://vueuse.org/useAsyncQueue
 * @param tasks
 * @param options
 */
export declare function useAsyncQueue<T1>(
  tasks: [UseAsyncQueueTask<T1>],
  options?: UseAsyncQueueOptions
): UseAsyncQueueReturn<[UseAsyncQueueResult<T1>]>
export declare function useAsyncQueue<T1, T2>(
  tasks: [UseAsyncQueueTask<T1>, UseAsyncQueueTask<T2>],
  options?: UseAsyncQueueOptions
): UseAsyncQueueReturn<[UseAsyncQueueResult<T1>, UseAsyncQueueResult<T2>]>
export declare function useAsyncQueue<T1, T2, T3>(
  tasks: [UseAsyncQueueTask<T1>, UseAsyncQueueTask<T2>, UseAsyncQueueTask<T3>],
  options?: UseAsyncQueueOptions
): UseAsyncQueueReturn<
  [UseAsyncQueueResult<T1>, UseAsyncQueueResult<T2>, UseAsyncQueueResult<T3>]
>
export declare function useAsyncQueue<T1, T2, T3, T4>(
  tasks: [
    UseAsyncQueueTask<T1>,
    UseAsyncQueueTask<T2>,
    UseAsyncQueueTask<T3>,
    UseAsyncQueueTask<T4>
  ],
  options?: UseAsyncQueueOptions
): UseAsyncQueueReturn<
  [
    UseAsyncQueueResult<T1>,
    UseAsyncQueueResult<T2>,
    UseAsyncQueueResult<T3>,
    UseAsyncQueueResult<T4>
  ]
>
export declare function useAsyncQueue<T1, T2, T3, T4, T5>(
  tasks: [
    UseAsyncQueueTask<T1>,
    UseAsyncQueueTask<T2>,
    UseAsyncQueueTask<T3>,
    UseAsyncQueueTask<T4>,
    UseAsyncQueueTask<T5>
  ],
  options?: UseAsyncQueueOptions
): UseAsyncQueueReturn<
  [
    UseAsyncQueueResult<T1>,
    UseAsyncQueueResult<T2>,
    UseAsyncQueueResult<T3>,
    UseAsyncQueueResult<T4>,
    UseAsyncQueueResult<T5>
  ]
>
export declare function useAsyncQueue<T>(
  tasks: UseAsyncQueueTask<T>[],
  options?: UseAsyncQueueOptions
): UseAsyncQueueReturn<UseAsyncQueueResult<T>[]>
```
