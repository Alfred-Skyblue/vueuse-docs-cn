# useToString

响应式的将 ref 转换为字符串。

## 用法

```ts
import { useToString } from '@vueuse/core'

const number = ref(3.14)
const str = useToString(number)

str.value // '3.14'
```

## 类型

```ts
/**
 * 响应式的将 ref 转换为字符串。
 *
 * @see https://vueuse.org/useToString
 */
export declare function useToString(
  value: MaybeComputedRef<unknown>
): ComputedRef<string>
```
