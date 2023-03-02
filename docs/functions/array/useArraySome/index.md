

# useArraySome

响应式 `Array.some`

## 用法

### 与多个 `ref` 数组一起使用

```js
import { useArraySome } from '@vueuse/core'
const item1 = ref(0)
const item2 = ref(2)
const item3 = ref(4)
const item4 = ref(6)
const item5 = ref(8)
const list = [item1, item2, item3, item4, item5]
const result = useArraySome(list, i => i > 10)
// result.value: false
item1.value = 11
// result.value: true
```

### 响应式数组

```js
import { useArraySome } from '@vueuse/core'
const list = ref([0, 2, 4, 6, 8])
const result = useArraySome(list, i => i > 10)
// result.value: false
list.value.push(11)
// result.value: true
```


## 类型

```ts
/**
 * 响应式 `Array.some`
 *
 * @see https://vueuse.org/useArraySome
 * @param {Array} list - 被调用的元素
 * @param fn - 迭代器函数
 *
 * @returns {boolean} 如果 `fn` 函数为数组中的任何元素返回true则为true，否则返回 fasle。
 */
export declare function useArraySome<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: MaybeComputedRef<T>[]) => unknown
): ComputedRef<boolean>
```
