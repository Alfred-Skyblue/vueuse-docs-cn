# watchAtMost

指定 watch 触发的次数。

## 用法

类似于设置回调函数被触发次数的 `watch` 额外选项。`count` 计时到后，手表会自动停止。



```ts
import { watchAtMost } from '@vueuse/core'

watchAtMost(
  source,
  () => { console.log('trigger!') }, // 最多触发3次
  {
    count: 3, // 触发次数
  },
)
```


## 类型

```ts
export interface WatchAtMostOptions<Immediate>
  extends WatchWithFilterOptions<Immediate> {
  count: MaybeComputedRef<number>
}
export interface WatchAtMostReturn {
  stop: WatchStopHandle
  count: Ref<number>
}
export declare function watchAtMost<
  T extends Readonly<WatchSource<unknown>[]>,
  Immediate extends Readonly<boolean> = false
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options: WatchAtMostOptions<Immediate>
): WatchAtMostReturn
export declare function watchAtMost<
  T,
  Immediate extends Readonly<boolean> = false
>(
  sources: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options: WatchAtMostOptions<Immediate>
): WatchAtMostReturn
```
