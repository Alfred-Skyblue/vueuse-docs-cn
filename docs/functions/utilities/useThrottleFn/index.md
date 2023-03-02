# useThrottleFn

使用节流函数，限制函数的执行。对于限制处理程序在调整大小和滚动等事件上的执行速度特别有用。


## 演示

<demo src="./demo.vue" title="useThrottleFn" desc="使用节流函数"></demo>

## 用法

```js
import { useThrottleFn } from '@vueuse/core'

const throttledFn = useThrottleFn(() => {
  // 做某事，每秒最多调用 1 次
}, 1000)

window.addEventListener('resize', throttledFn)
```

## 类型

```ts
/**
 * 使用节流函数，限制函数的执行。对于限制处理程序在调整大小和滚动等事件上的执行速度特别有用。
 *
 * @param   fn - 节流的函数
 * @param   ms - 节流的时间
 *
 * @param [trailing=false] - 如果为true，则在时间结束后再次调用 fn
 *
 * @param [leading=true] - 如果为true，则在 ms 超时的前沿调用 fn
 *
 * @param [rejectOnCancel=false] - 如果为true，则拒绝最后一次调用（如果已取消）
 *
 * @return  返回一个节流函数
 */
export declare function useThrottleFn<T extends FunctionArgs>(
  fn: T,
  ms?: MaybeComputedRef<number>,
  trailing?: boolean,
  leading?: boolean,
  rejectOnCancel?: boolean
): PromisifyFn<T>
```
