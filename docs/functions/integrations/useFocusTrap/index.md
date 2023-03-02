# useFocusTrap

响应式 [`focus-trap`](https://github.com/focus-trap/focus-trap) 包装器，在 [@vueuse/integrations](https://vueuse.org/integrations/README) 附加组件中可用。

有关可以传递哪些选项的更多信息，请参阅`focus-trap`文档[`createOptions`](https://github.com/focus-trap/focus-trap#createfocustrapelement-createoptions) 。

## 演示

<demo src="./demo.vue" title="useFocusTrap" desc=""></demo>

## 安装

```bash
npm i focus-trap
```

## 用法

**Basic Usage**

```html
<script setup>
import { ref } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target)
</script>

<template>
  <div>
    <button @click="activate()">启用</button>
    <div ref="target">
      <span>是否聚焦: {{ hasFocus }}</span>
      <input type="text" />
      <button @click="deactivate()">停用</button>
    </div>
  </div>
</template>
```

**自动对焦**

```html
<script setup>
import { ref } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target, { immediate: true })
</script>

<template>
  <div>
    <div ref="target">...</div>
  </div>
</template>
```

**条件渲染**

此函数无法使用 `v-if`，正确激活对具有条件渲染的元素的关注。这是因为在焦点激活时它们不存在于 DOM 中。要解决这个问题，您需要在下一次勾选时激活。

此函数无法正确激活对使用条件渲染的元素的关注v-if。这是因为在焦点激活时它们不存在于 DOM 中。要解决这个问题，您需要在下一次勾选时激活。

```vue
<script setup>
import { nextTick, ref } from 'vue'

const target = ref()
const { activate, deactivate } = useFocusTrap(target, { immediate: true })

const show = ref(false)

const reveal = async () => {
  show.value = true

  await nextTick()
  activate()
}
</script>

<template>
  <div>
    <div v-if="show" ref="target">
      ...
    </div>

    <button @click="reveal">
      Reveal and Focus
    </button>
  </div>
</template>
```

## 使用组件

使用 `UseFocusTrap` 组件，Focus Trap 将在安装此组件时自动激活并在卸载时停用。

```html
<script setup>
import { ref } from 'vue'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'

const show = ref(false)
</script>

<template>
  <UseFocusTrap v-if="show" :options="{ immediate: true }">
    <div class="modal">...</div>
  </UseFocusTrap>
</template>

```


## 类型

```ts
export interface UseFocusTrapOptions extends Options {
  /**
   * 立即启用
   */
  immediate?: boolean
}
export interface UseFocusTrapReturn {
  /**
   * 表示焦点当前是否处于活动状态
   */
  hasFocus: Ref<boolean>
  /**
   * 表示焦点当前是否暂停
   */
  isPaused: Ref<boolean>
  /**
   * 激活焦点
   *
   * @see https://github.com/focus-trap/focus-trap#trapactivateactivateoptions
   * @param opts Activate focus trap options
   */
  activate: (opts?: ActivateOptions) => void
  /**
   * 停用焦点
   *
   * @see https://github.com/focus-trap/focus-trap#trapdeactivatedeactivateoptions
   * @param opts Deactivate focus trap options
   */
  deactivate: (opts?: DeactivateOptions) => void
  /**
   * 暂停焦点
   *
   * @see https://github.com/focus-trap/focus-trap#trappause
   */
  pause: Fn
  /**
   * 恢复焦点
   *
   * @see https://github.com/focus-trap/focus-trap#trapunpause
   */
  unpause: Fn
}
/**
 * 响应式 focus-trap
 *
 * @see https://vueuse.org/useFocusTrap
 * @param target The target element to trap focus within
 * @param options Focus trap options
 * @param autoFocus Focus trap automatically when mounted
 */
export declare function useFocusTrap(
  target: MaybeElementRef,
  options?: UseFocusTrapOptions
): UseFocusTrapReturn
```
