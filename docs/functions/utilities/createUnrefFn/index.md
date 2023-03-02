# createUnrefFn

创建一个接受 `ref` 和原始值作为参数的普通函数。返回未转换函数返回的相同值，并使用正确的类型。

::: tip
确保您使用正确的工具来完成这项工作。在某些情况下，如果您想根据参数的每次更改评估函数，使用 `reactify` 可能更合适。
:::

## 用法

```ts
import { ref } from 'vue'
import { createUnrefFn } from '@vueuse/core'

const url = ref('https://httpbin.org/post')
const data = ref({ foo: 'bar' })

const post = (url, data) => fetch(url, { data })
const unrefPost = createUnrefFn(post)

post(url, data) // ❌ 将抛出错误，因为参数是 refs
unrefPost(url, data) // ✔️ 会工作，因为参数将自动取消引用
```

## 类型

```ts
export type UnrefFn<T> = T extends (...args: infer A) => infer R
  ? (
      ...args: {
        [K in keyof A]: MaybeRef<A[K]>
      }
    ) => R
  : never
/**
 * 创建一个接受 `ref` 和原始值作为参数的普通函数。返回未转换函数返回的相同值，并使用正确的类型。
 */
export declare const createUnrefFn: <T extends Function>(fn: T) => UnrefFn<T>
```
