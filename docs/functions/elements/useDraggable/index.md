# useDraggable

使元素可拖动。

## 演示

<demo src="./demo.vue" title="useDocumentVisibility" desc="响应式跟踪文档可见性"></demo>

### 组件使用

> 此功能还通过包提供无渲染组件版本 `@vueuse/components`

```vue
<UseDraggable :initialValue="{ x: 10, y: 10 }" v-slot="{ x, y }">
  Drag me! I am at {{x}}, {{y}}
</UseDraggable>
```

## 类型

```ts
export interface UseDraggableOptions {
  /**
     * 仅在直接单击元素时才开始拖动
     *
     * @default false
     */
  exact?: MaybeComputedRef<boolean>
  /**
     * 阻止默认事件
     *
     * @default false
     */
  preventDefault?: MaybeComputedRef<boolean>
  /**
     * 阻止事件冒泡
     *
     * @default false
     */
  stopPropagation?: MaybeComputedRef<boolean>
  /**
     *  `pointermove` 和 `pointerup` 事件目标元素
     * @default window
     */
  draggingElement?: MaybeComputedRef<HTMLElement | SVGElement | Window | Document | null | undefined>
  /**
     * 触发拖拽事件的元素
     * @default target
     */
  handle?: MaybeComputedRef<HTMLElement | SVGElement | null | undefined>
  /**
     * 监听的鼠标类型
     * @default ['mouse', 'touch', 'pen']
     */
  pointerTypes?: PointerType[]
  /**
     * 元素的初始位置
     * @default { x: 0, y: 0 }
     */
  initialValue?: MaybeComputedRef<Position>
  /**
     * 拖动开始时的回调。返回 `false` 以防止拖动
     */
  onStart?: (position: Position, event: PointerEvent) => void | false
  /**
     * 拖动时回调
     */
  onMove?: (position: Position, event: PointerEvent) => void
  /**
     * 拖拽结束回调
     */
  onEnd?: (position: Position, event: PointerEvent) => void
}
/**
 * 使元素可拖动
 * @param target
 * @param options
 */
export declare function useDraggable(
  target: MaybeComputedRef<HTMLElement | SVGElement | null | undefined>,
  options?: UseDraggableOptions
): {
  position: Ref<{
    x: number
    y: number
  }>
  isDragging: ComputedRef<boolean>
  style: ComputedRef<string>
  x: Ref<number>
  y: Ref<number>
}
export type UseDraggableReturn = ReturnType<typeof useDraggable>
```
