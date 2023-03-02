# useProjection

从一个区域到另一个区域的响应式数字投影。

## 用法

```ts
import { useProjection } from '@vueuse/math'

const input = ref(0)
const projected = useProjection(input, [0, 10], [0, 100])

input.value = 5 // projected.value === 50
input.value = 10 // projected.value === 100
```

## 类型

```ts
/**
 * 从一个区域到另一个区域的响应式数字投影
 *
 * @see https://vueuse.org/useProjection
 */
export declare function useProjection(
  input: MaybeComputedRef<number>,
  fromDomain: MaybeComputedRef<readonly [number, number]>,
  toDomain: MaybeComputedRef<readonly [number, number]>,
  projector?: ProjectorFunction<number, number>
): ComputedRef<number>
```
