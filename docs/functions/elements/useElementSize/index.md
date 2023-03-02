# useElementSize

响应式监听元素尺寸变化，返回元素的尺寸信息 [`ResizeObserver MDN`](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)

## 演示

### 基本用法

<demo src="./demo/hooks.vue" title="useElementSize" desc="调整元素大小，实时获取 width height"></demo>

### 使用组件

<demo src="./demo/component.vue" title="useElementSize" desc="调整元素大小，实时获取 width height"></demo>

## 类型

```ts
export interface ElementSize {
  width: number
  height: number
}
/**
 * 响应式监听元素尺寸变化，返回元素的尺寸信息
 *
 * @see https://vueuse.org/useElementSize
 * @param target
 * @param callback
 * @param options
 */
export declare function useElementSize(
  target: MaybeComputedElementRef,
  initialSize?: ElementSize,
  options?: UseResizeObserverOptions
): {
  width: Ref<number>
  height: Ref<number>
}
export type UseElementSizeReturn = ReturnType<typeof useElementSize>
```
