# resolveUnref

获取 `value/ref/getter` 的值。

## 用法

```ts
import { resolveUnref } from '@vueuse/core'

const foo = ref('hi')

const a = resolveUnref(0) // 0
const b = resolveUnref(foo) // 'hi'
const c = resolveUnref(() => 'hi') // 'hi'
```

## 类型

```ts
/**
 * 获取 `value/ref/getter` 的值。
 */
export declare function resolveUnref<T>(r: MaybeComputedRef<T>): T
```
