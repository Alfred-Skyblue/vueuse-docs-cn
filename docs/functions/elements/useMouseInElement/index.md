# useMouseInElement

响应式获取鼠标相对于元素的位置

## 演示

### 基本用法

<demo src="./demo.vue" title="useMouseInElement" desc="监听鼠标相对于元素的位置信息"></demo>

### 使用组件

```html
<script lang="ts" setup>
    import { UseMouseInElement } from "@vueuse/components";
</script>
<template>
    <UseMouseInElement v-slot="{ elementX, elementY, isOutside }">
        x: {{ elementX }} y: {{ elementY }} Is Outside: {{ isOutside }}
    </UseMouseInElement>
</template>
```

## 类型

```ts
export interface MouseInElementOptions extends UseMouseOptions {
  handleOutside?: boolean
}
/**
 * 响应式获取鼠标相对于元素的位置
 *
 * @see https://vueuse.org/useMouseInElement
 * @param target
 * @param options
 */
export declare function useMouseInElement(
  target?: MaybeElementRef,
  options?: MouseInElementOptions
): {
  x: Ref<number>
  y: Ref<number>
  sourceType: Ref<MouseSourceType>
  elementX: Ref<number>
  elementY: Ref<number>
  elementPositionX: Ref<number>
  elementPositionY: Ref<number>
  elementHeight: Ref<number>
  elementWidth: Ref<number>
  isOutside: Ref<boolean>
  stop: () => void
}
export type UseMouseInElementReturn = ReturnType<typeof useMouseInElement>
```
