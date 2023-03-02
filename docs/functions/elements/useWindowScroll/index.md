# useWindowScroll

响应式获取窗口的滚动位置。

## 演示

<demo src="./demo.vue" title="useWindowScroll" desc="响应式获取窗口的滚动位置"></demo>

## 类型

```ts
/**
 * Reactive window scroll.
 *
 * @see https://vueuse.org/useWindowScroll
 * @param options
 */
export declare function useWindowScroll({ window }?: ConfigurableWindow): {
  x: Ref<number>
  y: Ref<number>
}
export type UseWindowScrollReturn = ReturnType<typeof useWindowScroll>
```
