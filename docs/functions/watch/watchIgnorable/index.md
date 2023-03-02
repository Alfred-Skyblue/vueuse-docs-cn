
# watchIgnorable

可忽略的 `watch`

## 演示

<demo src="./demo.vue" title="watchIgnorable" desc=""></demo>


## 用法

扩展 `watch` 返回额外的 `ignoreUpdates(updater)` 和 `ignorePrevAsyncUpdates()` 忽略对源数据的特定更新。

```ts
import { watchIgnorable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { stop, ignoreUpdates } = watchIgnorable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // logs: Changed to bar!

ignoreUpdates(() => {
  source.value = 'foobar'
})
await nextTick() // (nothing happened)

source.value = 'hello'
await nextTick() // logs: Changed to hello!

ignoreUpdates(() => {
  source.value = 'ignored'
})
source.value = 'logged'

await nextTick() // logs: Changed to logged!
```

## 更新时机

`watchIgnorable` 接受相同的选项 `watch` 并使用相同的默认值。因此，默认情况下，可组合项使用 `flush: 'pre'`

## `ignorePrevAsyncUpdates`

功能仅适用于异步刷新'pre'和'post'. 如果 flush: 'sync' 使用，ignorePrevAsyncUpdates() 则为空操作，因为 `watch` 将在每次更新数据源后立即触发。它仍然是为同步刷新提供的，因此代码可以更通用。

```ts
import { watchIgnorable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { ignorePrevAsyncUpdates } = watchIgnorable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // logs: Changed to bar!

source.value = 'good'
source.value = 'by'
ignorePrevAsyncUpdates()

await nextTick() // (nothing happened)

source.value = 'prev'
ignorePrevAsyncUpdates()
source.value = 'after'

await nextTick() // logs: Changed to after!
```


## 类型

```ts
export type IgnoredUpdater = (updater: () => void) => void
export interface WatchIgnorableReturn {
  ignoreUpdates: IgnoredUpdater
  ignorePrevAsyncUpdates: () => void
  stop: WatchStopHandle
}
export declare function watchIgnorable<
  T extends Readonly<WatchSource<unknown>[]>,
  Immediate extends Readonly<boolean> = false
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchWithFilterOptions<Immediate>
): WatchIgnorableReturn
export declare function watchIgnorable<
  T,
  Immediate extends Readonly<boolean> = false
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>
): WatchIgnorableReturn
export declare function watchIgnorable<
  T extends object,
  Immediate extends Readonly<boolean> = false
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>
): WatchIgnorableReturn
export { watchIgnorable as ignorableWatch }
```
