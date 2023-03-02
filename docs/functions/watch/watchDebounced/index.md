# watchDebounced

防抖 watch

## 演示

<demo src="./demo.vue" title="watchDebounced" desc=""></demo>


## 用法

类似于 `watch`，但提供了额外的选项 `debounce`，`maxWait` 这些选项将应用于回调函数。


```ts
import { watchDebounced } from '@vueuse/core'

watchDebounced(
  source,
  () => { console.log('changed!') },
  { debounce: 500, maxWait: 1000 },
)
```

它本质上是以下代码的简写：

```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: debounceFilter(500, { maxWait: 1000 }),
  },
)
```

## 类型

```ts
export interface WatchDebouncedOptions<Immediate>
  extends WatchOptions<Immediate>,
  DebounceFilterOptions {
  debounce?: MaybeComputedRef<number>
}
export declare function watchDebounced<
  T extends Readonly<WatchSource<unknown>[]>,
  Immediate extends Readonly<boolean> = false
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchDebouncedOptions<Immediate>
): WatchStopHandle
export declare function watchDebounced<
  T,
  Immediate extends Readonly<boolean> = false
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchDebouncedOptions<Immediate>
): WatchStopHandle
export declare function watchDebounced<
  T extends object,
  Immediate extends Readonly<boolean> = false
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchDebouncedOptions<Immediate>
): WatchStopHandle
export { watchDebounced as debouncedWatch }
```
