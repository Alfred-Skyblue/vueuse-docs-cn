# onClickOutside

监听元素外部的点击事件，对模态框和下拉菜单等组件很有用。

## 演示

### 基本用法

<demo src="./demo.vue" title="onClickOutside" desc="监听外部点击"></demo>

### 组件使用

```html
<OnClickOutside @trigger="count++" :options="{ ignore: [/* ... */] }">
  <div>
    点击我的外部
  </div>
</OnClickOutside>
```

### 指令用法

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const modal = ref(false)
function closeModal() {
  modal.value = false
}
</script>

<template>
  <button @click="modal = true">
    打开模态框
  </button>
  <div v-if="modal" v-on-click-outside="closeModal">
    Hello World
  </div>
</template>
```

> 此功能使用IE 11、Edge 18 及更低版本不支持的Event.composedPath() 。[如果您的目标是这些浏览器，我们建议您将此代码片段包含在您的项目中。](https://gist.github.com/sibbng/13e83b1dd1b733317ce0130ef07d4efd)



```ts
export interface OnClickOutsideOptions extends ConfigurableWindow {
  /**
   * 不应触发事件的元素列表。
   */
  ignore?: (MaybeElementRef | string)[]
  /**
   * 为内部事件侦听器使用捕获阶段。
   * @default true
   */
  capture?: boolean
  /**
   * 如果焦点移动到 iframe，则运行处理函数。
   * @default false
   */
  detectIframe?: boolean
}
export type OnClickOutsideHandler<
  T extends {
    detectIframe: OnClickOutsideOptions['detectIframe']
  } = {
    detectIframe: false
  }
> = (
  evt: T['detectIframe'] extends true ? PointerEvent | FocusEvent : PointerEvent
) => void
/**
 * 监听元素外部的点击事件。
 *
 * @see https://vueuse.org/onClickOutside
 * @param target
 * @param handler
 * @param options
 */
export declare function onClickOutside<T extends OnClickOutsideOptions>(
  target: MaybeElementRef,
  handler: OnClickOutsideHandler<{
    detectIframe: T['detectIframe']
  }>,
  options?: T
): (() => void) | undefined
```
