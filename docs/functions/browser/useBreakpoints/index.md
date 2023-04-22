# useBreakpoints

响应式布局的一个重要组成部分是响应式断点。这些断点用于在不同的屏幕尺寸上定义不同的布局。在 vueuse 中，我们可以使用 `useBreakpoints` 来获取当前的断点。

## 演示

<demo src="./demo.vue" title="useBreakpoints" desc="查询响应式断点"></demo>

## 类型

```ts
export type Breakpoints<K extends string = string> = Record<K, number | string>
/**
 * 响应式窗口断点
 *
 * @see https://vueuse.org/useBreakpoints
 * @param options
 */
export declare function useBreakpoints<K extends string>(
    breakpoints: Breakpoints<K>,
    options?: ConfigurableWindow
): Record<K, Ref<boolean>> & {
    greater(k: K): Ref<boolean>
    greaterOrEqual: (k: K) => Ref<boolean>
    smaller(k: K): Ref<boolean>
    smallerOrEqual(k: K): Ref<boolean>
    between(a: K, b: K): Ref<boolean>
    isGreater(k: K): boolean
    isGreaterOrEqual(k: K): boolean
    isSmaller(k: K): boolean
    isSmallerOrEqual(k: K): boolean
    isInBetween(a: K, b: K): boolean
    current(): ComputedRef<string[]>
}
export type UseBreakpointsReturn<K extends string = string> = {
    greater: (k: K) => ComputedRef<boolean>
    greaterOrEqual: (k: K) => ComputedRef<boolean>
    smaller(k: K): ComputedRef<boolean>
    smallerOrEqual: (k: K) => ComputedRef<boolean>
    between(a: K, b: K): ComputedRef<boolean>
    isGreater(k: K): boolean
    isGreaterOrEqual(k: K): boolean
    isSmaller(k: K): boolean
    isSmallerOrEqual(k: K): boolean
    isInBetween(a: K, b: K): boolean
    current(): ComputedRef<string[]>
} & Record<K, ComputedRef<boolean>>>
```
