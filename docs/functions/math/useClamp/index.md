# useClamp

响应式的将一个数字限制在一个范围内。

## 用法

```ts
import { useClamp } from '@vueuse/math'

const min = ref(0)
const max = ref(10)
const value = useClamp(0, min, max)
```

您还可以传递一个 `ref`，当源 ref 发生变化时，返回的 `computed` 将被更新：

```ts
import { useClamp } from '@vueuse/math'

const number = ref(0)
const clamped = useClamp(number, 0, 10)
```


## 类型

```ts
export declare function useClamp(
  value: MaybeReadonlyRef<number>,
  min: MaybeComputedRef<number>,
  max: MaybeComputedRef<number>
): ComputedRef<number>
export declare function useClamp(
  value: MaybeRef<number>,
  min: MaybeComputedRef<number>,
  max: MaybeComputedRef<number>
): Ref<number>
```
