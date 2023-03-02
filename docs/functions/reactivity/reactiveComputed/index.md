# reactiveComputed

计算响应式对象，不是返回一个 ref computed，而是 reactiveComputed 返回一个反应对象。

<RequiresProxy/>

## 用法

```ts
import { reactiveComputed } from '@vueuse/core'

const state = reactiveComputed(() => {
  return {
    foo: 'bar',
    bar: 'baz',
  }
})

state.bar // 'baz'
```

## 类型

```ts
/**
 * 计算响应式对象
 */
export declare function reactiveComputed<T extends {}>(fn: () => T): T
```
