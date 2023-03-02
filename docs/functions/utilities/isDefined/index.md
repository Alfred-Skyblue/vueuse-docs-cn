# isDefined

Ref 的非无效检查类型保护。

## 用法

```ts
import { isDefined } from '@vueuse/core'

const example = ref(Math.random() ? 'example' : undefined) // Ref<string | undefined>

if (isDefined(example))
  example // Ref<string>
```

## 类型

```ts
export declare function isDefined<T>(
  v: Ref<T>
): v is Ref<Exclude<T, null | undefined>>
export declare function isDefined<T>(
  v: ComputedRef<T>
): v is ComputedRef<Exclude<T, null | undefined>>
export declare function isDefined<T>(v: T): v is Exclude<T, null | undefined>
```
