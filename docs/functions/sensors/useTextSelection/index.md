# useTextSelection

响应式跟踪用户文本选择基于 [`Window.getSelection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection).

## 演示

<demo src="./demo.vue" title="useTextSelection" desc="响应式跟踪用户文本选择"></demo>

## 用法

```vue
<script setup lang="ts">
import { useTextSelection } from '@vueuse/core'
const state = useTextSelection()
</script>

<template>
  <p>{{ state.text }}</p>
</template>
```


## 类型

```ts
/**
 * 响应式跟踪用户文本选择基于 [`Window.getSelection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection).
 *
 * @see https://vueuse.org/useTextSelection
 */
export declare function useTextSelection(options?: ConfigurableWindow): {
  text: ComputedRef<string>
  rects: ComputedRef<DOMRect[]>
  ranges: ComputedRef<Range[]>
  selection: Ref<{
    readonly anchorNode: Node | null
    readonly anchorOffset: number
    readonly focusNode: Node | null
    readonly focusOffset: number
    readonly isCollapsed: boolean
    readonly rangeCount: number
    readonly type: string
    addRange: (range: Range) => void
    collapse: (node: Node | null, offset?: number | undefined) => void
    collapseToEnd: () => void
    collapseToStart: () => void
    containsNode: (
      node: Node,
      allowPartialContainment?: boolean | undefined
    ) => boolean
    deleteFromDocument: () => void
    empty: () => void
    extend: (node: Node, offset?: number | undefined) => void
    getRangeAt: (index: number) => Range
    modify: (
      alter?: string | undefined,
      direction?: string | undefined,
      granularity?: string | undefined
    ) => void
    removeAllRanges: () => void
    removeRange: (range: Range) => void
    selectAllChildren: (node: Node) => void
    setBaseAndExtent: (
      anchorNode: Node,
      anchorOffset: number,
      focusNode: Node,
      focusOffset: number
    ) => void
    setPosition: (node: Node | null, offset?: number | undefined) => void
    toString: () => string
  } | null>
}
export type UseTextSelectionReturn = ReturnType<typeof useTextSelection>
```
