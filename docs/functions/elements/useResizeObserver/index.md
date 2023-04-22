# useResizeObserver

监听元素边框尺寸变化，需要传递监听函数，当元素边框尺寸变化时会触发监听函数。

## 演示

<demo src="./demo.vue" title="useResizeObserver" desc="实时监听 DOM 的尺寸变化"></demo>

## 类型

```ts
export interface ResizeObserverSize {
  readonly inlineSize: number
  readonly blockSize: number
}
export interface ResizeObserverEntry {
  readonly target: Element
  readonly contentRect: DOMRectReadOnly
  readonly borderBoxSize?: ReadonlyArray<ResizeObserverSize>
  readonly contentBoxSize?: ReadonlyArray<ResizeObserverSize>
  readonly devicePixelContentBoxSize?: ReadonlyArray<ResizeObserverSize>
}
export type ResizeObserverCallback = (entries: ReadonlyArray<ResizeObserverEntry>, observer: ResizeObserver) => void
export interface UseResizeObserverOptions extends ConfigurableWindow {
  /**
     * 设置观察者将观察到哪种盒模型的变化。可以为 "content-box"（默认值）、"border-box"、"device-pixel-content-box"。
     *
     * @default 'content-box'
     */
  box?: ResizeObserverBoxOptions
}
declare class ResizeObserver {
  constructor(callback: ResizeObserverCallback)
  disconnect(): void
  observe(target: Element, options?: UseResizeObserverOptions): void
  unobserve(target: Element): void
}
/**
 * 监听元素边框尺寸变化
 * @see https://vueuse.org/useResizeObserver
 * @param target
 * @param callback
 * @param options
 */
export declare function useResizeObserver(
  target: MaybeComputedElementRef | | MaybeComputedElementRef[],
  callback: ResizeObserverCallback,
  options?: UseResizeObserverOptions
): {
  isSupported: Ref<boolean>
  stop: () => void
}
export type UseResizeObserverReturn = ReturnType<typeof useResizeObserver>
```
