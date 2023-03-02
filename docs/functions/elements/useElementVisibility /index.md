# useElementVisibility

跟踪元素在视口中的可见性。

## 演示

### 基本用法

<demo src="./demo.vue" title="useElementVisibility" desc="当元素不可见时，返回 false"></demo>

### 使用组件

```html
<UseElementVisibility v-slot="{ isVisible }"> Is Visible: {{ isVisible }} </UseElementVisibility>
```

### 指令版本

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const target = ref(null)
const isVisible = ref(false)

function onElementVisibility(state) {
  isVisible.value = state
}
</script>

<template>
  <div v-element-visibility="onElementVisibility">
    {{ isVisible ? "inside" : "outside" }}
  </div>

  <!-- with options -->
  <div ref="target">
    <div v-element-visibility="[onElementVisibility, { scrollTarget: target }]">
      {{ isVisible ? "inside" : "outside" }}
    </div>
  </div>
</template>
```

## 类型

```ts
export interface UseElementVisibilityOptions extends ConfigurableWindow {
  scrollTarget?: MaybeComputedRef<HTMLElement | undefined | null>
}
/**
 * 跟踪元素在视口中的可见性。
 *
 * @see https://vueuse.org/useElementVisibility
 * @param element
 * @param options
 */
export declare function useElementVisibility(
  element: MaybeComputedElementRef,
  { window, scrollTarget }?: UseElementVisibilityOptions
): Ref<boolean>
```
