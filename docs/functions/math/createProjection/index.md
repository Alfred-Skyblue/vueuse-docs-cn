# createProjection

从一个区域到另一个区域的响应式数字投影。

## 用法

```ts
import { createProjection } from '@vueuse/math'

const useProjector = createProjection([0, 10], [0, 100])
const input = ref(0)
const projected = useProjector(input) // projected.value === 0

input.value = 5 // projected.value === 50
input.value = 10 // projected.value === 100
```

## 类型

```ts
export declare function createProjection(
  fromDomain: MaybeComputedRef<readonly [number, number]>,
  toDomain: MaybeComputedRef<readonly [number, number]>,
  projector?: ProjectorFunction<number, number>
): UseProjection<number, number>
```
