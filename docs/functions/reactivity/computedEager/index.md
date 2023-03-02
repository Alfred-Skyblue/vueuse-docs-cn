
# computedEager

没有懒惰加载的计算属性。

- computed() 当您正在进行复杂的计算时使用，这实际上可以从缓存和惰性加载中获益，并且只有在确实需要时才应该（重新）计算。
- 当你有一个简单的操作时使用computedEager()，返回值很少改变——通常是布尔值。


## 用法

```js
import { computedEager } from '@vueuse/core'

const todos = ref([])
const hasOpenTodos = computedEager(() => !!todos.length)

console.log(hasOpenTodos.value) // false
toTodos.value.push({ title: 'Learn Vue' })
console.log(hasOpenTodos.value) // true
```


## 类型

```ts
export declare function computedEager<T>(
  fn: () => T,
  options?: WatchOptionsBase
): Readonly<Ref<T>>
export { computedEager as eagerComputed }
```
