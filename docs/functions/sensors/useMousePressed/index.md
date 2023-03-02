# useMousePressed

响应式鼠标按下状态。由 `mousedown touchstart` 目标元素触发并由 `mouseup mouseleave touchend touchcancel` 事件释放。

## 演示

### 基础使用
<demo src="./demo.vue" title="useMousePressed" desc="监听鼠标按下状态"></demo>

### 组件使用

```html
<UseMousePressed v-slot="{ pressed }">
  Is Pressed: {{ pressed }}
</UseMousePressed>
```

## 使用

```ts
import { useMousePressed } from '@vueuse/core'

const { pressed } = useMousePressed()
```
默认情况下启用触摸。要使其仅检测鼠标变化，请设置 `touch` 为 `false`

```ts
const { pressed } = useMousePressed({ touch: false })
```

要仅捕获 `mousedown`、`touchstart` 特定元素，您可以 `target` 通过传递元素的 `ref` 来指定。


```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { useMousePressed } from '@vueuse/core'

const el = ref(null)

const { pressed } = useMousePressed({ target: el })
</script>

<template>
  <div ref="el">
    Only clicking on this element will trigger the update.
  </div>
</template>
```
## 类型

```ts
export interface MousePressedOptions extends ConfigurableWindow {
  /**
   * 监听 `touchstart` `touchend` 事件
   *
   * @default true
   */
  touch?: boolean
  /**
   * 监听 `dragstart` `drop` 和 `dragend` 事件
   *
   * @default true
   */
  drag?: boolean
  /**
   * 初始值
   *
   * @default false
   */
  initialValue?: boolean
  /**
   * 要捕获点击的元素目标
   */
  target?: MaybeElementRef
}
/**
 * 响应式鼠标按下状态
 *
 * @see https://vueuse.org/useMousePressed
 * @param options
 */
export declare function useMousePressed(options?: MousePressedOptions): {
  pressed: Ref<boolean>
  sourceType: Ref<MouseSourceType>
}
export type UseMousePressedReturn = ReturnType<typeof useMousePressed>
```
