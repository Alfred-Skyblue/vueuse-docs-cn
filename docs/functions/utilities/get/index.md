# get

同 `ref.value`

## 用法

```ts
import { get } from '@vueuse/core'

const a = ref(42)

console.log(get(a)) // 42
```

## 类型

```ts
/**
 * 同 `ref.value`
 */
export declare function get<T>(ref: MaybeRef<T>): T
export declare function get<T, K extends keyof T>(
  ref: MaybeRef<T>,
  key: K
): T[K]
```
