# useRound

响应式 `Math.round`.

## 用法

```ts
import { useRound } from '@vueuse/math'

const value = ref(20.49)
const result = useRound(value) // 20
```

## 类型

```ts
/**
 * 响应式 `Math.round`.
 *
 * @see https://vueuse.org/useRound
 */
export declare function useRound(
  value: MaybeComputedRef<number>
): ComputedRef<number>
```
