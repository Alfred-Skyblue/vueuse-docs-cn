# useWindowSize

响应式获取窗口尺寸

## 演示

### 基本用法

<demo src="./demo.vue" title="useWindowSize" desc="调整窗口尺寸，监听数据变化"></demo>

### 使用组件

```html
<UseWindowSize v-slot="{ width, height }"> Width: {{ width }} Height: {{ height }} </UseWindowSize>
```

## 类型

```ts
export interface UseWindowSizeOptions extends ConfigurableWindow {
  initialWidth?: number
  initialHeight?: number
  /**
     * 监听 window orientationchange 事件
     *
     * @default true
     */
  listenOrientation?: boolean
  /**
     * 滚动条是否应该包含在宽度和高度中
     * @default true
     */
  includeScrollbar?: boolean
}
/**
 * 响应式获取窗口尺寸
 *
 * @see https://vueuse.org/useWindowSize
 * @param options
 */
export declare function useWindowSize(options?: UseWindowSizeOptions): {
  width: Ref<number>
  height: Ref<number>
}
export type UseWindowSizeReturn = ReturnType<typeof useWindowSize>
```
