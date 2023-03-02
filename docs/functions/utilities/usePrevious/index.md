# usePrevious

保存 ref 的前一个值。

## 用法

```ts
import { ref } from 'vue'
import { usePrevious } from '@vueuse/core'

const counter = ref('Hello')
const previous = usePrevious(counter)

console.log(previous.value) // undefined

counter.value = 'World'

console.log(previous.value) // Hello
```

## 类型

```ts
/**
 * 保存 ref 的前一个值。
 *
 * @see   {@link https://vueuse.org/usePrevious}
 */
export declare function usePrevious<T>(
  value: MaybeComputedRef<T>
): Readonly<Ref<T | undefined>>
export declare function usePrevious<T>(
  value: MaybeComputedRef<T>,
  initialValue: T
): Readonly<Ref<T>>
```
