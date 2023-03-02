# useMouse

响应式获取鼠标位置

## 演示

### 基础使用
<demo src="./demo.vue" title="useMouse" desc="响应式获取鼠标位置"></demo>


```ts
import { useMouse } from '@vueuse/core'

const { x, y, sourceType } = useMouse()
```
默认情况下启用触摸。要仅检测鼠标变化，请设置 `touch` 为 `false`，该 `dragover` 事件用于在拖动时跟踪鼠标位置。

```ts
const { x, y } = useMouse({ touch: false })
```

### 组件使用

```html
<UseMouse v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UseMouse>
```


## 类型

```ts
export interface UseMouseOptions
  extends ConfigurableWindow,
  ConfigurableEventFilter {
  /**
   * 基于页面、客户端或相对于先前位置的鼠标位置
   *
   * @default 'page'
   */
  type?: 'page' | 'client' | 'movement'
  /**
   * 监听 `touchmove` 事件
   *
   * @default true
   */
  touch?: boolean
  /**
   * 触发 "touchend" 事件时重置为初始值
   * @default false
   */
  resetOnTouchEnds?: boolean
  /**
   * 初始值
   */
  initialValue?: Position
}
export type MouseSourceType = 'mouse' | 'touch' | null
/**
 * Reactive mouse position.
 *
 * @see https://vueuse.org/useMouse
 * @param options
 */
export declare function useMouse(options?: UseMouseOptions): {
  x: Ref<number>
  y: Ref<number>
  sourceType: Ref<MouseSourceType>
}
export type UseMouseReturn = ReturnType<typeof useMouse>
```
