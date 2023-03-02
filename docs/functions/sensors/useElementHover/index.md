# useElementHover

响应元素的悬停状态

## 演示

### 基础使用

<demo src="./demo.vue" title="useElementHover" desc="移动鼠标进入按钮"></demo>

### 指令使用

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { vElementHover } from '@vueuse/components'

const isHovered = ref(false)
function onHover(state: boolean) {
  isHovered.value = state
}
</script>

<template>
  <button v-element-hover="onHover">
    {{ isHovered ? 'Thank you!' : 'Hover me' }}
  </button>
</template>
```

## 类型

```ts
export interface UseElementHoverOptions extends ConfigurableWindow {
  /**
   * 延迟进入时间 (ms)
   */
  delayEnter?: number
  /**
   * 延迟离开时间 (ms)
   */
  delayLeave?: number
}
export declare function useElementHover(
  el: MaybeComputedRef<EventTarget | null | undefined>,
  options?: UseElementHoverOptions
): Ref<boolean>
```
