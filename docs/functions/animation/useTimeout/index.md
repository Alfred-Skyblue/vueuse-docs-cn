# useTimeout

在给定时间后更新值。

## 演示

<demo src="./demo.vue" title="useTimeout" desc=""></demo>

## 用法

```ts
import { promiseTimeout, useTimeout } from '@vueuse/core'

const ready = useTimeout(1000)
```

```ts
const { ready, start, stop } = useTimeout(1000, { controls: true })
```

```ts
console.log(ready.value) // false

await promiseTimeout(1200)

console.log(ready.value) // true
```

## 类型

```ts
export interface UseTimeoutOptions<Controls extends boolean>
  extends UseTimeoutFnOptions {
  /**
   * Expose more controls
   *
   * @default false
   */
  controls?: Controls
  /**
   * Callback on timeout
   */
  callback?: Fn
}
/**
 * 在给定时间后更新值。
 *
 * @see   {@link https://vueuse.org/useTimeout}
 * @param interval
 * @param options
 */
export declare function useTimeout(
  interval?: number,
  options?: UseTimeoutOptions<false>
): ComputedRef<boolean>
export declare function useTimeout(
  interval: number,
  options: UseTimeoutOptions<true>
): {
  ready: ComputedRef<boolean>
} & Stoppable
```
