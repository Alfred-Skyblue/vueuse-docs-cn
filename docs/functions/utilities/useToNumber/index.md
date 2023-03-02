# useToNumber

响应式将字符串转换为数字。

## 用法

```ts
import { useToNumber } from '@vueuse/core'

const str = ref('123')
const number = useToNumber(str)

number.value // 123
```

## 类型

```ts
export interface UseToNumberOptions {
  /**
   * 用于将值转换为数字的方法。
   *
   * @default 'parseFloat'
   */
  method?: 'parseFloat' | 'parseInt'
  /**
   * 传递给 parseInt 的数学数字系统中的基数。仅适用于`method: 'parseInt'`
   */
  radix?: number
  /**
   * 将 NaN 替换为零
   *
   * @default false
   */
  nanToZero?: boolean
}
/**
 * 响应式将字符串转换为数字。
 */
export declare function useToNumber(
  value: MaybeComputedRef<number | string>,
  options?: UseToNumberOptions
): ComputedRef<number>
```
