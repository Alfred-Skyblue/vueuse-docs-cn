# useTimeoutFn

`setTimeout` 包装器。

## 演示

<demo src="./demo.vue" title="useTimeoutFn" desc=""></demo>


## 用法

```ts
import { useTimeoutFn } from '@vueuse/core'

const { isPending, start, stop } = useTimeoutFn(() => {
  /* ... */
}, 3000)
```

## 类型

```ts
export interface UseTimeoutFnOptions {
  /**
   * 调用此函数后立即启动计时器
   *
   * @default true
   */
  immediate?: boolean
}
/**
 * `setTimeout` 包装器。
 * @param cb
 * @param interval
 * @param options
 */
export declare function useTimeoutFn<
  CallbackFn extends (...args: any[]) => any
>(
  cb: CallbackFn,
  interval: MaybeComputedRef<number>,
  options?: UseTimeoutFnOptions
): Stoppable<Parameters<CallbackFn> | []>
```
