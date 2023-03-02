# useRefHistory

跟踪 ref 的更改历史，提供撤消和重做功能

## 演示

<demo src="./demo.vue" title="useRefHistory" desc="跟踪历史记录"></demo>

## 刷新时机

在内部使用 `watch` 监听 `ref` 变化，将变化后的值写入 history 中，这意味着它的操作是异步的，为了见面不必要的重复调用损耗性能，如果您对数据同步更新了多次，它将只更新最后一次到 history 中

```ts
import { useRefHistory } from '@vueuse/core'
import { ref } from 'vue'

const counter = ref(0)
const { history } = useRefHistory(counter)

counter.value += 1
counter.value += 1
counter.value += 1

await nextTick()
console.log(history.value)
/* [
  { snapshot: 3, timestamp: 1601912898064 },
  { snapshot: 0, timestamp: 1601912898061 }
] */
```

-   与 `watch` 同理，可以使用 `flush` 选项修改刷新时间。

```ts
const refHistory = useRefHistory(target, {
  flush: 'sync', // 默认为 'pre' , 可选 'post' 和 'sync'
})
```

默认值为 `pre`, 以将此选项与 `Vue` 观察者的默认值对齐，这也有助于避免常见问题，例如作为引用值多步更新的一部分生成的多个历史记录点可能会破坏应用程序状态的无变化。您可以使用 commit() 以防您需要在同一个“tick”中创建多个历史记录点。

```ts
const r = ref(0)
const { history, commit } = useRefHistory(r)

r.value = 1
commit()

r.value = 2
commit()

console.log(history.value)
/* [
  { snapshot: 2 },
  { snapshot: 1 },
  { snapshot: 0 },
] */
```

另一方面，当使用 `flush` 为 `sync` 时，您可以 `batch(fn)` 为多个同步操作生成单个历史记录点

```ts
const r = ref({ names: [], version: 1 })
const { history, batch } = useRefHistory(r, { flush: 'sync' })

batch(() => {
  r.names.push('Lena')
  r.version++
})

console.log(history.value)
/* [
  { snapshot: { names: [ 'Lena' ], version: 2 },
  { snapshot: { names: [], version: 1 },
] */
```

如果使用 `{ flush: 'sync', deep: true }` ，在数组中`batch`执行可变操作时也很有用。最多可以生成三个原子操作，这些操作将被推送到引用历史记录中。`splice splice`

```ts
const arr = ref([1, 2, 3])
const { history, batch } = useRefHistory(r, { deep: true, flush: 'sync' })

batch(() => {
  arr.value.splice(1, 1) // batch 确保只生成一个历史点
})
```

## 撤销/重做

您可以调用 `undo redo` 方法实现撤销和重做的功能

```ts
console.log(counter.value) // 1
undo()
console.log(counter.value) // 0
redo()
console.log(counter.value) // 1
```

## 对象/数组

使用对象或数组时，由于更改它们的属性不会更改引用，因此不会触发提交。要跟踪属性更改，您需要将 `deep: true`， 它将为每一条历史记录创建拷贝值，此时每一条历史记录的引用地址都是独立的。

```ts
const state = ref({
  foo: 1,
  bar: 'bar',
})

const { history, undo, redo } = useRefHistory(state, {
  deep: true,
})

state.value.foo = 2

await nextTick()
console.log(history.value)
/* [
  { snapshot: { foo: 2, bar: 'bar' } },
  { snapshot: { foo: 1, bar: 'bar' } }
] */
```

## 自定义拷贝

`useRefHistory` 中使用 `(x) => JSON.pares(JSON.stringify())` 进行深拷贝，您也可以传递自定义拷贝函数进行拷贝，例如：

```ts
import { useRefHistory } from '@vueuse/core'

const refHistory = useRefHistory(target, { dump: structuredClone })
```

或者您也可以使用第三方库进行拷贝

```ts
import { useRefHistory } from '@vueuse/core'
import { cloneDeep } from 'lodash-es'

const refHistory = useRefHistory(target, { dump: cloneDeep })
```

## 历史容量

我们将默认（无限制）保留所有历史记录，直到您明确清除它们，您可以通过 `capacity` 选项设置要保留的最大历史记录量。

```ts
const refHistory = useRefHistory(target, {
  capacity: 15, // 限制最多保存 15 条历史记录
})

refHistory.clear() // 清空所有历史记录
```

## 类型

```ts
export interface UseRefHistoryOptions<Raw, Serialized = Raw> extends ConfigurableEventFilter {
  /**
     * 深度监听，当你要监听一个引用类型时，可以设置为 true，它会在属性变化时对历史记录中保存的数据进行深拷贝
     * @default false
     */
  deep?: boolean
  /**
     * flush 选项允许更好的控制记录的时机，默认为 'pre' 可以为：'pre'，'post'，'sync' 它的工作方式与 watch 和 watchEffect 中的flush 选项相同
     *
     * @default 'pre'
     */
  flush?: 'pre' | 'post' | 'sync'
  /**
     * 要保留的最大历史记录数。默认为无限制
     */
  capacity?: number
  /**
     * 快照拷贝，开启时默认使用 JSON.parse(JSON.stringify()) 进行深拷贝，也可以传入自定义的拷贝函数
     * @default false
     */
  clone?: boolean | ((v: Raw) => Raw)
  /**
     * 将数据序列化到历史中
     */
  dump?: (v: Raw) => Serialized
  /**
     * 反序列化历史数据
     */
  parse?: (v: Serialized) => Raw
}
export interface UseRefHistoryReturn<Raw, Serialized> extends UseManualRefHistoryReturn<Raw, Serialized> {
  /**
     * 表示是否正在追踪变化
     */
  isTracking: Ref<boolean>
  /**
     * 暂停跟踪变化
     */
  pause(): void
  /**
     * 恢复跟踪变化
     *
     * @param [commit] 如果为 true，恢复后将创建历史记录
     */
  resume(commit?: boolean): void
  /**
     * 批量操作的便捷方法
     * @param fn
     */
  batch(fn: (cancel: Fn) => void): void
  /**
     * 清空历史记录并且停止监听
     */
  dispose(): void
}

/**
 * Track the change history of a ref, also provides undo and redo functionality.
 *
 * @see https://vueuse.org/useRefHistory
 * @param source
 * @param options
 */
export declare function useRefHistory<Raw, Serialized = Raw>(
  source: Ref<Raw>,
  options?: UseRefHistoryOptions<Raw, Serialized>
): UseRefHistoryReturn<Raw, Serialized>
```
