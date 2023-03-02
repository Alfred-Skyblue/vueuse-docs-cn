# useArrayFind

响应式 `Array.find`.

## 用法

### 与多个 `ref` 数组一起使用

```js
import { useArrayFind } from '@vueuse/core'

const list = [ref(1), ref(-1), ref(2)]
const positive = useArrayFind(list, val => val > 0)
// positive.value: 1
```

### 响应式数组

```js
import { useArrayFind } from '@vueuse/core'

const list = reactive([-1, -2])
const positive = useArrayFind(list, val => val > 0)
// positive.value: undefined
list.push(1)
// positive.value: 1
```

## 类型

```ts
/**
 * 响应式 `Array.find`
 *
 * @see https://vueuse.org/useArrayFind
 * @param {Array} list - 被调用的数组
 * @param fn - 迭代器函数
 *
 * @returns 满足提供的测试函数的数组中的第一个元素。否则，返回 undefined。
 */
export declare function useArrayFind<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: MaybeComputedRef<T>[]) => boolean
): ComputedRef<T | undefined>
```
