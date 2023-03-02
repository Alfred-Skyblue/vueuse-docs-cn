# syncRefs

保持目标引用与源引用同步

## 用法

```ts
import { syncRefs } from '@vueuse/core'

const source = ref('hello')
const target = ref('target')

const stop = syncRefs(source, target)

console.log(target.value) // hello

source.value = 'foo'

console.log(target.value) // foo
```


设置{ flush: 'pre' }时，目标引用将在渲染开始前的当前“["tick"](https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing)”结束时更新。

```ts
import { syncRefs } from '@vueuse/core'

const source = ref('hello')
const target = ref('target')

syncRefs(source, target, { flush: 'pre' })

console.log(target.value) // hello

source.value = 'foo'

console.log(target.value) // hello <- still unchanged, because of flush 'pre'

await nextTick()

console.log(target.value) // foo <- changed!
```


## 类型

```ts
export interface SyncRefsOptions extends ConfigurableFlushSync {
  /**
   * 深度监听
   *
   * @default false
   */
  deep?: boolean
  /**
   * 立即执行
   *
   * @default true
   */
  immediate?: boolean
}
/**
 * Keep target ref(s) in sync with the source ref
 *
 * @param source source ref
 * @param targets
 */
export declare function syncRefs<T>(
  source: WatchSource<T>,
  targets: Ref<T> | Ref<T>[],
  options?: SyncRefsOptions
): WatchStopHandle
```
