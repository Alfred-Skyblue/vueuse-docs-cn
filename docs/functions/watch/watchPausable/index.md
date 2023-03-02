# watchPausable

可暂停的 `watch`


## 演示

<demo src="./demo.vue" title="watchPausable" desc=""></demo>

## 用法

像往常一样使用 `watch`，但返回额外的 `pause()` 和 `resume()` 函数来控制暂停和恢复。

```ts
import { watchPausable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { stop, pause, resume } = watchPausable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // Changed to bar!

pause()

source.value = 'foobar'
await nextTick() // (nothing happend)

resume()

source.value = 'hello'
await nextTick() // Changed to hello!
```


## 类型

```ts
export interface WatchPausableReturn extends Pausable {
  stop: WatchStopHandle
}
export declare function watchPausable<
  T extends Readonly<WatchSource<unknown>[]>,
  Immediate extends Readonly<boolean> = false
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchWithFilterOptions<Immediate>
): WatchPausableReturn
export declare function watchPausable<
  T,
  Immediate extends Readonly<boolean> = false
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>
): WatchPausableReturn
export declare function watchPausable<
  T extends object,
  Immediate extends Readonly<boolean> = false
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>
): WatchPausableReturn
export { watchPausable as pausableWatch }
```
