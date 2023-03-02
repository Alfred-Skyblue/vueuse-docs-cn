# useDrauu

响应式 [drauu](https://github.com/antfu/drauu) 包装器，在 [@vueuse/integrations](https://vueuse.org/integrations/README) 附加组件中可用。

演示请参考 [`useDrauu`](https://vueuse.org/integrations/useDrauu/)

## 安装

```bash
npm i drauu
```

## 用法

```html
<script setup>
import { ref } from 'vue'
import { toRefs } from '@vueuse/core'
import { useDrauu } from '@vueuse/integrations/useDrauu'

const target = ref()
const { undo, redo, canUndo, canRedo, brush } = useDrauu(target)
const { color, size } = toRefs(brush)
</script>

<template>
  <svg ref="target"></svg>
</template>
```


## 类型

```ts
export type UseDrauuOptions = Omit<Options, 'el'>
export interface UseDrauuReturn {
  drauuInstance: Ref<Drauu | undefined>
  load: (svg: string) => void
  dump: () => string | undefined
  clear: () => void
  cancel: () => void
  undo: () => boolean | undefined
  redo: () => boolean | undefined
  canUndo: Ref<boolean>
  canRedo: Ref<boolean>
  brush: Ref<Brush>
  onChanged: EventHookOn
  onCommitted: EventHookOn
  onStart: EventHookOn
  onEnd: EventHookOn
  onCanceled: EventHookOn
}
/**
 * 响应式 drauu
 *
 * @see https://vueuse.org/useDrauu
 * @param target The target svg element
 * @param options Drauu Options
 */
export declare function useDrauu(
  target: MaybeComputedElementRef,
  options?: UseDrauuOptions
): UseDrauuReturn
```
