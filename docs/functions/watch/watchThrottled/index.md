# watchThrottled

节流 `watch`.

## 用法

类似于 `watch`，但提供了一个 `throttle` 将应用于回调函数的额外选项。

```ts
import { watchThrottled } from '@vueuse/core'

watchThrottled(
  source,
  () => { console.log('changed!') },
  { throttle: 500 },
)
```

它本质上是以下代码的简写：

```ts
import { throttleFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: throttleFilter(500),
  },
)
```


## 类型

```ts
export interface WatchThrottledOptions<Immediate>
  extends WatchOptions<Immediate> {
  throttle?: MaybeComputedRef<number>
  trailing?: boolean
  leading?: boolean
}
export declare function watchThrottled<
  T extends Readonly<WatchSource<unknown>[]>,
  Immediate extends Readonly<boolean> = false
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchThrottledOptions<Immediate>
): WatchStopHandle
export declare function watchThrottled<
  T,
  Immediate extends Readonly<boolean> = false
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchThrottledOptions<Immediate>
): WatchStopHandle
export declare function watchThrottled<
  T extends object,
  Immediate extends Readonly<boolean> = false
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchThrottledOptions<Immediate>
): WatchStopHandle
export { watchThrottled as throttledWatch }
```
