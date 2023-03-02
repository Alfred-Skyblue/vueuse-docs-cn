# useArrayFilter

响应式 `Array.filter`

## 用法

### 与多个 `ref` 数组一起使用

```js
import { useArrayFilter } from '@vueuse/core'
const item1 = ref(0)
const item2 = ref(2)
const item3 = ref(4)
const item4 = ref(6)
const item5 = ref(8)
const list = [item1, item2, item3, item4, item5]
const result = useArrayFilter(list, i => i % 2 === 0)
// result.value: [0, 2, 4, 6, 8]
item2.value = 1
// result.value: [0, 4, 6, 8]
```

### 响应式数组

```js
import { useArrayFilter } from '@vueuse/core'
const list = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
const result = useArrayFilter(list, i => i % 2 === 0)
// result.value: [0, 2, 4, 6, 8]
list.value.shift()
// result.value: [2, 4, 6, 8]
```

## 类型

```ts
/**
 * 响应式 `Array.filter`
 *
 * @see https://vueuse.org/useArrayFilter
 * @param {Array} list - 被调用的数组
 * @param fn - 为 list 的每个元素调用的函数。每次执行 `fn` 时，返回值为true时都会添加到新数组中。
 *
 * @returns {Array} 返回一个新的过滤后的数组
 */
export declare function useArrayFilter<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: T[]) => boolean
): ComputedRef<T[]>
```
