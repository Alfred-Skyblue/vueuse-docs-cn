# useArrayFindLast

响应式 `Array.findLast`.

## 用法

### 与多个 `ref` 数组一起使用

```js
import { useArrayFindLast } from '@vueuse/core'

const list = [ref(1), ref(-1), ref(2)]
const positive = useArrayFindLast(list, val => val > 0)
// positive.value: 2
```

### 响应式数组

```js
import { useArrayFindLast } from '@vueuse/core'

const list = reactive([-1, -2])
const positive = useArrayFindLast(list, val => val > 0)
// positive.value: undefined
list.push(10)
// positive.value: 10
list.push(5)
// positive.value: 5
```

## 类型

```ts
/**
 * 响应式 `Array.findLast`
 *
 * @see https://vueuse.org/useArrayFindLast
 * @param {Array} list - 被调用的数组
 * @param fn - 迭代器函数
 *
 * @returns 数组中满足提供的测试函数的最后一个元素, 否则返回undefined。
 */
export declare function useArrayFindLast<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: MaybeComputedRef<T>[]) => boolean
): ComputedRef<T | undefined>
```
