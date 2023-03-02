# useMath

响应式 `Math` 方法.

## 用法

```ts
import { useMath } from '@vueuse/math'

const base = ref(2)
const exponent = ref(3)
const result = useMath('pow', base, exponent) // Ref<8>

const num = ref(2)
const root = useMath('sqrt', num) // Ref<1.4142135623730951>

num.value = 4
console.log(root.value) // 2
```

## 类型

```ts
export type UseMathKeys = keyof {
  [K in keyof Math as Math[K] extends (...args: any) => any
    ? K
    : never]: unknown
}
/**
 * 响应式 `Math` 方法
 *
 * @see https://vueuse.org/useMath
 */
export declare function useMath<K extends keyof Math>(
  key: K,
  ...args: ArgumentsType<Reactified<Math[K], true>>
): ReturnType<Reactified<Math[K], true>>
```
