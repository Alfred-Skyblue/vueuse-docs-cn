

# useArrayUnique

reactive unique array

## 用法

### 与多个 `ref` 数组一起使用

```js
import { useArrayUnique } from '@vueuse/core'
const item1 = ref(0)
const item2 = ref(1)
const item3 = ref(1)
const item4 = ref(2)
const item5 = ref(3)
const list = [item1, item2, item3, item4, item5]
const result = useArrayUnique(list)
// result.value: [0, 1, 2, 3]
item5.value = 1
// result.value: [0, 1, 2]
```

### 响应式数组

```js
import { useArrayUnique } from '@vueuse/core'

const list = reactive([1, 2, 2, 3])
const result = useArrayUnique(list)
// result.value: [1, 2, 3]

list.push(1)
// result.value: [1, 2, 3]
```


## 类型

```ts
/**
 * 响应式数组去重
 * @see https://vueuse.org/useArrayUnique
 * @param {Array} list - 被调用的元素
 * @returns {Array} 唯一的数组
 */
export declare function useArrayUnique<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>
): ComputedRef<T[]>
```
