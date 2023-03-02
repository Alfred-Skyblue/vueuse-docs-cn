# onLongPress

监听一个元素的长按事件。



## 演示

### 基本用法

<demo src="./demo.vue" title="onLongPress" desc="长按按钮"></demo>

### 组件用法

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { OnLongPress } from '@vueuse/components'

const longPressedComponent = ref(false)

const onLongPressCallbackComponent = (e: PointerEvent) => {
  longPressedComponent.value = true
}
const resetComponent = () => {
  longPressedComponent.value = false
}
</script>

<template>
  <p>Long Pressed: {{ longPressedComponent }}</p>

  <OnLongPress
    as="button"
    class="ml-2 button small"
    @trigger="onLongPressCallbackComponent"
  >
    Press long
  </OnLongPress>

  <button class="ml-2 button small" @click="resetComponent">
    Reset
  </button>
</template>
```

### 指令用法

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { vOnLongPress } from '@vueuse/components'

const longPressedDirective = ref(false)

const onLongPressCallbackDirective = (e: PointerEvent) => {
  longPressedDirective.value = true
}
const resetDirective = () => {
  longPressedDirective.value = false
}
</script>

<template>
  <p>Long Pressed: {{ longPressedDirective }}</p>

  <button v-on-long-press.prevent="onLongPressCallbackDirective" class="ml-2 button small">
    Press long
  </button>

  <button
    v-on-long-press="[onLongPressCallbackDirective, { delay: 1000, modifiers: { stop: true } }]"
    class="ml-2button small"
  >
    Press long (with options)
  </button>

  <button class="ml-2 button small" @click="resetDirective">
    Reset
  </button>
</template>
```

## 类型

```ts
export interface OnLongPressOptions {
  /**
   * 长按时间 (ms)
   *
   * @default 500
   */
  delay?: number
  /**
   * 事件修饰符
   */
  modifiers?: OnLongPressModifiers
}
export interface OnLongPressModifiers {
  /**
   * 阻止事件冒泡
   */
  stop?: boolean
  /**
   * 事件只会触发一次
   */
  once?: boolean
  /**
   * 阻止默认行为
   */
  prevent?: boolean
  /**
   * 添加事件监听器时使用事件捕获模式
   */
  capture?: boolean
  /**
   * 只当在 event.target 是当前元素自身时触发处理函数
   */
  self?: boolean
}
export declare function onLongPress(
  target: MaybeElementRef,
  handler: (evt: PointerEvent) => void,
  options?: OnLongPressOptions
): void
```
