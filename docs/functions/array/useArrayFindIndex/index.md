# useArrayFindIndex

响应式 `Array.findIndex`

## 用法

### 与多个 `ref` 数组一起使用

```js
import { useArrayFindIndex } from '@vueuse/core'
const item1 = ref(0)
const item2 = ref(2)
const item3 = ref(4)
const item4 = ref(6)
const item5 = ref(8)
const list = [item1, item2, item3, item4, item5]
const result = useArrayFindIndex(list, i => i % 2 === 0)
// result.value: 0
item1.value = 1
// result.value: 1
```

### 响应式数组

```js
import { useArrayFindIndex } from '@vueuse/core'
const list = ref([0, 2, 4, 6, 8])
const result = useArrayFindIndex(list, i => i % 2 === 0)
// result.value: 0
list.value.unshift(-1)
// result.value: 1
```

## 类型

```ts
/**
 * 响应式 `Array.findIndex`
 *
 * @see https://vueuse.org/useArrayFindIndex
 * @param {Array} list - 被调用的元素
 * @param fn - 迭代器函数
 *
 * @returns {number} 通过测试的数组中第一个元素的index，否则返回 -1。
 */
export declare function useArrayFindIndex<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: MaybeComputedRef<T>[]) => unknown
): ComputedRef<number>
```
