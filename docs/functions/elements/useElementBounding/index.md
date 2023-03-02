# useElementBounding

响应式获取页面中某个元素的左，上，右和下分别相对浏览器视窗的位置 [`bounding box`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)。

## 演示

### 基本用法

<demo src="./demo/hooks.vue" title="useElementBounding" desc="调整框的大小以查看更改"></demo>

### 使用组件

<demo src="./demo/component.vue" title="useElementBounding" desc="调整框的大小以查看更改"></demo>

## 类型

```ts
export interface UseElementBoundingOptions {
  /**
     * 卸载组件时将值重置为 0
     *
     * @default true
     */
  reset?: boolean
  /**
     * 监听窗口调整大小事件，window.onresize
     *
     * @default true
     */
  windowResize?: boolean
  /**
     * 监听窗口滚动事件，window.onscroll
     *
     * @default true
     */
  windowScroll?: boolean
  /**
     * 挂载时直接调用
     *
     * @default true
     */
  immediate?: boolean
}
/**
 * 响应式获取页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
 * @param target
 * @param options
 */
export declare function useElementBounding(
  target: MaybeComputedElementRef,
  options?: UseElementBoundingOptions
): {
  height: Ref<number>
  bottom: Ref<number>
  left: Ref<number>
  right: Ref<number>
  top: Ref<number>
  width: Ref<number>
  x: Ref<number>
  y: Ref<number>
  update: () => void
}
export type UseElementBoundingReturn = ReturnType<typeof useElementBounding>
```
