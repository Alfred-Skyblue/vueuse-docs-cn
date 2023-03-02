# useFocus

响应式跟踪或设置 DOM 元素的焦点状态。状态变化以反映目标元素是否是焦点元素，从外部设置响应值将分别触发focus和值的blur事件。

## 演示

### 基础使用
<demo src="./demo.vue" title="useFocus" desc=""></demo>

### 初始化时设置焦点

要将元素聚焦在它的第一个渲染器上，可以提供选项 `initialValue` as `true`。这将触发 `focus` 目标元素上的事件。
```ts
import { useFocus } from '@vueuse/core'

const target = ref()
const { focused } = useFocus(target, { initialValue: true })
```

### 改变焦点状态

ref值引用的变化 `focused` 将分别自动触发 `focus` 和值的 `blur` 事件。您可以利用此行为将目标元素作为另一个操作的结果（例如，当单击按钮时聚焦）。

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { useFocus } from '@vueuse/core'
const input = ref()
const { focused } = useFocus(input)
</script>

<template>
  <div>
    <button type="button" @click="focused = true">
      点击聚焦
    </button>
    <input ref="input" type="text">
  </div>
</template>
```

## 类型

```ts
export interface UseFocusOptions extends ConfigurableWindow {
  /**
     * 初始值。如果设置为 true，则会在第一次渲染时聚焦目标元素。
     *
     * @default false
     */
  initialValue?: boolean
}
export interface UseFocusReturn {
  /**
     * 如果设置为 true，则该元素将获得焦点。如果设置为 false，则该元素失去焦点。
     */
  focused: Ref<boolean>
}
/**
 * 响应式跟踪或设置 DOM 元素的焦点状态。状态变化以反映目标元素是否是焦点元素，从外部设置响应值将分别触发focus和值的blur事件。
 *
 * @see https://vueuse.org/useFocus
 * @param target The target element for the focus and blur events.
 * @param options
 */
export declare function useFocus(
  target: MaybeElementRef,
  options?: UseFocusOptions
): UseFocusReturn
```
