# computedWithControl

显式定义计算属性的依赖关系。

## 用法

```ts
import { computedWithControl } from '@vueuse/core'

const source = ref('foo')
const counter = ref(0)

const computedRef = computedWithControl(
  () => source.value, // 监听 source,同 `watch`
  () => counter.value, // 计算属性, 同 `computed`
)
```

这样更改counter不会触发computedRef更新，但 `sourceRef` 会触发。

```ts
console.log(computedRef.value) // 0

counter.value += 1

console.log(computedRef.value) // 0

source.value = 'bar'

console.log(computedRef.value) // 1
```

### 手动触发

> 只适用于 Vue 3

您还可以通过以下方式手动触发计算的更新：

```ts
const computedRef = computedWithControl(
  () => source.value,
  () => counter.value,
)

computedRef.trigger()
```

## 类型

```ts
export interface ComputedWithControlRefExtra {
  /**
   * 手动更新
   */
  trigger(): void
}
export interface ComputedRefWithControl<T>
  extends ComputedRef<T>,
  ComputedWithControlRefExtra {}
export interface WritableComputedRefWithControl<T>
  extends WritableComputedRef<T>,
  ComputedWithControlRefExtra {}
export declare function computedWithControl<T, S>(
  source: WatchSource<S> | WatchSource<S>[],
  fn: ComputedGetter<T>
): ComputedRefWithControl<T>
export declare function computedWithControl<T, S>(
  source: WatchSource<S> | WatchSource<S>[],
  fn: WritableComputedOptions<T>
): WritableComputedRefWithControl<T>
export { computedWithControl as controlledComputed }
```
