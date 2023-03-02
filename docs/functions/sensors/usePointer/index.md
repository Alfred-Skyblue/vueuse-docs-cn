
# usePointer

响应式 [指针状态](https://developer.mozilla.org/zh-CN/docs/Web/API/Pointer_events).

## 演示

### 基本使用
<demo src="./demo.vue" title="usePointer" desc="响应式指针状态"></demo>



### 组件使用

默认情况下，组件会跟踪 `window` 上的指针

```html
<UsePointer v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UsePointer>
```

要跟踪元素中的局部位置，请设置 `target="self"`:

```html
<UsePointer target="self" v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UsePointer>
```


## 类型

```ts
export interface UsePointerState extends Position {
  pressure: number
  pointerId: number
  tiltX: number
  tiltY: number
  width: number
  height: number
  twist: number
  pointerType: PointerType | null
}
export interface UsePointerOptions extends ConfigurableWindow {
  /**
   * 监听的指针类型
   *
   * @default ['mouse', 'touch', 'pen']
   */
  pointerTypes?: PointerType[]
  /**
   * 初始值
   */
  initialValue?: MaybeRef<Partial<UsePointerState>>
  /**
   * @default window
   */
  target?: MaybeRef<EventTarget | null | undefined> | Document | Window
}
/**
 * 响应式指针状态
 *
 * @see https://vueuse.org/usePointer
 * @param options
 */
export declare function usePointer(options?: UsePointerOptions): {
  isInside: Ref<boolean>
  pressure: Ref<number>
  pointerId: Ref<number>
  tiltX: Ref<number>
  tiltY: Ref<number>
  width: Ref<number>
  height: Ref<number>
  twist: Ref<number>
  pointerType: Ref<PointerType | null>
  x: Ref<number>
  y: Ref<number>
}
export type UsePointerReturn = ReturnType<typeof usePointer>
```
