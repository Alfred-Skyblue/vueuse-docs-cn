# watchOnce

`watch` 只触发一次。

## 用法

回调函数触发一次后，`watch` 会自动停止。

```ts
import { watchOnce } from '@vueuse/core'

watchOnce(source, () => {
  // triggers only once
  console.log('source changed!')
})
```

## 类型 

```ts
export declare function watchOnce<
  T extends Readonly<WatchSource<unknown>[]>,
  Immediate extends Readonly<boolean> = false
>(
  source: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchOptions<Immediate>
): void
export declare function watchOnce<
  T,
  Immediate extends Readonly<boolean> = false
>(
  sources: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchOptions<Immediate>
): void
```
