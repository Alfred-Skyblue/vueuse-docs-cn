# refWithControl

对 ref 响应式的细粒度控制。（仅限 Vue 3）

## 用法

`refWithControl` 用于 `extendRef` 提供两个额外的功能 `get` 和 `set` 更好地控制何时应该 `track/triggering` 。

```ts
import { refWithControl } from '@vueuse/core'

const num = refWithControl(0)
const doubled = computed(() => num.value * 2)

// 和普通的ref一样
num.value = 42
console.log(num.value) // 42
console.log(doubled.value) // 84

// 在不触发响应式的情况下设定值
num.set(30, false)
console.log(num.value) // 30
console.log(doubled.value) // 84 (doesn't update)

// 在不跟踪响应式的情况下获得价
watchEffect(() => {
  console.log(num.peek())
}) // 30

num.value = 50 // watch 效果不会被触发，因为它没有收集任何东西。
console.log(doubled.value) // 100（再次更新，因为它是一个响应值）
```

### `peek`, `lay`, `untrackedGet`, `silentSet`

我们还提供了一些在不 track/triggering 反应系统的情况下执行 `get/set` 的简写。以下几行是等效的。


```ts
const foo = refWithControl('foo')
```

```ts
// getting
foo.get(false)
foo.untrackedGet()
foo.peek() // an alias for `untrackedGet`
```

```ts
// setting
foo.set('bar', false)
foo.silentSet('bar')
foo.lay('bar') // an alias for `silentSet`
```

## 配置

### `onBeforeChange()`

onBeforeChange提供选项以控制是否应接受新值。例如：

```ts
const num = refWithControl(0, {
  onBeforeChange(value, oldValue) {
    // 不允许在一次操作中发生大于 ±5 的变化
    if (Math.abs(value - oldValue) > 5)
      return false // 返回 `false` 以取消更改
  },
})

num.value += 1
console.log(num.value) // 1

num.value += 6
console.log(num.value) // 1 (改变被驳回)
```

### `onChanged()`

`onChanged` 选项提供了与 `Vue` 的 `watch` 类似的功能，但与 `watch` 相比，同步的开销更少。

```ts
const num = refWithControl(0, {
  onChanged(value, oldValue) {
    console.log(value)
  },
})
```

## 类型

```ts
export interface ControlledRefOptions<T> {
  /**
   * ref 改变前的回调函数。
   *
   * 返回 false 以取消更改
   */
  onBeforeChange?: (value: T, oldValue: T) => void | boolean
  /**
   * ref 改变后的回调函数
   *
   * 这是同步发生的，与 `watch` 相比开销更少
   */
  onChanged?: (value: T, oldValue: T) => void
}
/**
 * 对 ref 响应式的细粒度控制。（仅限 Vue 3）
 *
 * @param source
 * @param fn
 */
export declare function refWithControl<T>(
  initial: T,
  options?: ControlledRefOptions<T>
): ShallowUnwrapRef<{
  get: (tracking?: boolean) => T
  set: (value: T, triggering?: boolean) => void
  untrackedGet: () => T
  silentSet: (v: T) => void
  peek: () => T
  lay: (v: T) => void
}> & Ref<T>
```
