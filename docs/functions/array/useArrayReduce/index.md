

# useArrayReduce

响应式 `Array.reduce`.

## 用法

### 与多个 `ref` 数组一起使用

```js
import { useArrayReduce } from '@vueuse/core'

const sum = useArrayReduce([ref(1), ref(2), ref(3)], (sum, val) => sum + val)
// sum.value: 6
```

### 响应式数组

```js
import { useArrayReduce } from '@vueuse/core'

const list = reactive([1, 2])
const sum = useArrayReduce(list, (sum, val) => sum + val)

list.push(3)
// sum.value: 6
```

### 使用初始值

```js
import { useArrayReduce } from '@vueuse/core'

const list = reactive([{ num: 1 }, { num: 2 }])
const sum = useArrayReduce(list, (sum, val) => sum + val.num, 0)
// sum.value: 3
```


## 类型

```ts
export type UseArrayReducer<PV, CV, R> = (
  previousValue: PV,
  currentValue: CV,
  currentIndex: number
) => R
/**
 * 响应式 `Array.reduce`
 *
 * @see https://vueuse.org/useArrayReduce
 * @param {Array} list - 被调用的元素
 * @param reducer - a "reducer" function.
 *
 * @returns the value that results from running the "reducer" callback function to completion over the entire array.
 */
export declare function useArrayReduce<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  reducer: UseArrayReducer<T, T, T>
): ComputedRef<T>
/**
 * 响应式 `Array.reduce`
 *
 * @see https://vueuse.org/useArrayReduce
 * @param {Array} list - 被调用的元素
 * @param reducer - 迭代器函数
 * @param initialValue - 对应 reduce 的初始值
 * @returns 在整个数组上运行"reducer"回调函数直至完成所产生的值。
 */
export declare function useArrayReduce<T, U>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  reducer: UseArrayReducer<U, T, U>,
  initialValue: MaybeComputedRef<U>
): ComputedRef<U>
```
