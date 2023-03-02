# makeDestructurable

同时使对象和数组可解构。有关详细信息，请参阅此[博客](https://antfu.me/posts/destructuring-with-object-or-array)。


## 用法

示例：
```ts
import { makeDestructurable } from '@vueuse/core'

const foo = { name: 'foo' }
const bar = 1024

const obj = makeDestructurable(
  { foo, bar } as const,
  [foo, bar] as const,
)
```

用法:


```ts
let { foo, bar } = obj
let [foo, bar] = obj
```


## 类型

```ts
export declare function makeDestructurable<
  T extends Record<string, unknown>,
  A extends readonly any[]
>(obj: T, arr: A): T & A
```
