# watchTriggerable

可以手动触发的 watch

## 用法

一个 `watch` 支持手动触发的包装器 `WatchCallback`，它返回一个额外的立即 `trigger` 执行 `WatchCallback`。

```ts
import { watchTriggerable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref(0)

const { trigger, ignoreUpdates } = watchTriggerable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // logs: Changed to bar!

// 通过 `trigger` 执行 WatchCallback 不需要等待
trigger() // logs: Changed to bar!
```

### `onCleanup`

当你想手动调用一个 `watch` 使用 `onCleanup` 参数的 `a` 时；简单地取出 `WatchCallback` 并调用它并不容易实现参数 `onCleanup`。

使用 `watchTriggerable` 将解决这个问题。

```ts
import { watchTriggerable } from '@vueuse/core'
import { ref } from 'vue'

const source = ref(0)

const { trigger } = watchTriggerable(
  source,
  async (v, _, onCleanup) => {
    let canceled = false
    onCleanup(() => canceled = true)

    await new Promise(resolve => setTimeout(resolve, 500))
    if (canceled)
      return

    console.log(`The value is "${v}"\n`)
  },
)

source.value = 1 // no log
await trigger() // logs (after 500 ms): The value is "1"
```

## 类型

```ts
export interface WatchTriggerableReturn<FnReturnT = void>
  extends WatchIgnorableReturn {
  trigger: () => FnReturnT
}
type OnCleanup = (cleanupFn: () => void) => void
export type WatchTriggerableCallback<V = any, OV = any, R = void> = (
  value: V,
  oldValue: OV,
  onCleanup: OnCleanup
) => R
export declare function watchTriggerable<
  T extends Readonly<WatchSource<unknown>[]>,
  FnReturnT
>(
  sources: [...T],
  cb: WatchTriggerableCallback<
    MapSources<T>,
    MapOldSources<T, true>,
    FnReturnT
  >,
  options?: WatchWithFilterOptions<boolean>
): WatchTriggerableReturn<FnReturnT>
export declare function watchTriggerable<T, FnReturnT>(
  source: WatchSource<T>,
  cb: WatchTriggerableCallback<T, T | undefined, FnReturnT>,
  options?: WatchWithFilterOptions<boolean>
): WatchTriggerableReturn<FnReturnT>
export declare function watchTriggerable<T extends object, FnReturnT>(
  source: T,
  cb: WatchTriggerableCallback<T, T | undefined, FnReturnT>,
  options?: WatchWithFilterOptions<boolean>
): WatchTriggerableReturn<FnReturnT>
```
