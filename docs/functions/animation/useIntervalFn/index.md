# useIntervalFn

包装 `setInterval` 定时器

## 演示

<demo src="./demo.vue" title="useIntervalFn" desc=""></demo>



## 用法

```ts
import { useIntervalFn } from '@vueuse/core'

const { pause, resume, isActive } = useIntervalFn(() => {
  /* your function */
}, 1000)
```


## 类型

```ts
export interface UseIntervalFnOptions {
  /**
   * 立即启动计时器
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 调用此函数后立即执行回调
   *
   * @default false
   */
  immediateCallback?: boolean
}
/**
 * 包装 `setInterval` 定时器
 *
 * @param cb
 * @param interval
 * @param options
 */
export declare function useIntervalFn(
  cb: Fn,
  interval?: MaybeComputedRef<number>,
  options?: UseIntervalFnOptions
): Pausable
```
