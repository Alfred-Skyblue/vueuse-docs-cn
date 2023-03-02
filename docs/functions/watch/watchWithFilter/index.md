
# watchWithFilter

`watch` 带有额外的 `EventFilter` 控件。


## 用法

类似于 `watch`，但提供了一个 `eventFilter` 将应用于回调函数的额外选项。


```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') }, // 回调将以 500 毫秒的去抖动方式调用
  {
    eventFilter: debounceFilter(500), // throttledFilter、pausabledFilter 或自定义过滤器
  },
)
```

## 类型

```ts
export interface WatchWithFilterOptions<Immediate>
  extends WatchOptions<Immediate>,
  ConfigurableEventFilter {}
export declare function watchWithFilter<
  T extends Readonly<WatchSource<unknown>[]>,
  Immediate extends Readonly<boolean> = false
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchWithFilterOptions<Immediate>
): WatchStopHandle
export declare function watchWithFilter<
  T,
  Immediate extends Readonly<boolean> = false
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>
): WatchStopHandle
export declare function watchWithFilter<
  T extends object,
  Immediate extends Readonly<boolean> = false
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>
): WatchStopHandle
```
