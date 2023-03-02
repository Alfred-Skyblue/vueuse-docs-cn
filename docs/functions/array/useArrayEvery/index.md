# useArrayEvery

响应式 `Array.every`

## 用法

### 与多个 `ref` 数组一起使用

```js
import { useArrayEvery } from '@vueuse/core'
const item1 = ref(0)
const item2 = ref(2)
const item3 = ref(4)
const item4 = ref(6)
const item5 = ref(8)
const list = [item1, item2, item3, item4, item5]
const result = useArrayEvery(list, i => i % 2 === 0)
// result.value: true
item1.value = 1
// result.value: false
```

### 使用响应式数组

```js
import { useArrayEvery } from '@vueuse/core'
const list = ref([0, 2, 4, 6, 8])
const result = useArrayEvery(list, i => i % 2 === 0)
// result.value: true
list.value.push(9)
// result.value: false
```

## 类型

```ts
/**
 * 响应式 `Array.every`
 *
 * @see https://vueuse.org/useArrayEvery
 * @param {Array} list - 被调用的数组。
 * @param fn - 迭代器函数
 *
 * @returns {boolean} 如果 `fn` 函数中的每个元素返回treu则为true，否则为false。
 */
export declare function useArrayEvery<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: MaybeComputedRef<T>[]) => unknown
): ComputedRef<boolean>
```
