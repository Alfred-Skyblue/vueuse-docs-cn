# resolveRef

将 `value/ref/getter` 规范化为 `ref` or `computed`。


## 用法

```ts
import { resolveRef } from '@vueuse/core'

const foo = ref('hi')

const a = resolveRef(0) // Ref<number>
const b = resolveRef(foo) // Ref<string>
const c = resolveRef(() => 'hi') // ComputedRef<string>
```

## 类型

```ts
/**
 * 将 `value/ref/getter` 规范化为 `ref` or `computed`。
 */
export declare function resolveRef<T>(r: MaybeComputedRef<T>): ComputedRef<T>
export declare function resolveRef<T>(r: MaybeRef<T>): Ref<T>
export declare function resolveRef<T>(r: T): Ref<T>
```
