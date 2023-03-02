# toReactive

将 ref 转换为 reactive。还可以创建一个 “可交换的” reactive对象。



<RequiresProxy />

## 用法

```ts
import { toReactive } from '@vueuse/core'

const refState = ref({ foo: 'bar' })

console.log(refState.value.foo) // => 'bar'

const state = toReactive(refState) // <--

console.log(state.foo) // => 'bar'

refState.value = { bar: 'foo' }

console.log(state.foo) // => undefined
console.log(state.bar) // => 'foo'
```


## 类型

```ts
/**
 * 将 ref 转换为 reactive。还可以创建一个 “可交换的” reactive对象。
 *
 * @see https://vueuse.org/toReactive
 * @param objectRef A ref of object
 */
export declare function toReactive<T extends object>(objectRef: MaybeRef<T>): T
```
