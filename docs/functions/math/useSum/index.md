# useSum

响应式数组求和

## 用法

```ts
import { useSum } from '@vueuse/math'

const array = ref([1, 2, 3, 4])
const sum = useSum(array) // Ref<10>
```

```ts
import { useSum } from '@vueuse/math'

const a = ref(1)
const b = ref(3)

const sum = useSum(a, b, 2) // Ref<6>
```

## 类型

```ts
export declare function useSum(
  array: MaybeComputedRef<MaybeComputedRef<number>[]>
): ComputedRef<number>
export declare function useSum(
  ...args: MaybeComputedRef<number>[]
): ComputedRef<number>
```
