# useInfiniteScroll

无限滚动元素。

## 演示

### 基础用法

<demo src="./demo.vue" title="" desc=""></demo>

### 指令用法
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { vInfiniteScroll } from '@vueuse/components'

const data = ref([1, 2, 3, 4, 5, 6])

function onLoadMore() {
  const length = data.value.length + 1
  data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
}
</script>

<template>
  <div v-infinite-scroll="onLoadMore">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>

  <!-- with options -->
  <div v-infinite-scroll="[onLoadMore, { distance: 10 }]">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>
</template>
```

## 类型

```ts
export interface UseInfiniteScrollOptions extends UseScrollOptions {
  /**
   * 元素底部与视口底部之间的最小距离
   *
   * @default 0
   */
  distance?: number
  /**
   * 滚动轴的方向。
   *
   * @default 'bottom'
   */
  direction?: 'top' | 'bottom' | 'left' | 'right'
  /**
   * 加载更多时是否保留当前滚动位置。
   *
   * @default false
   */
  preserveScrollPosition?: boolean
}
/**
 * 无限滚动元素.
 *
 * @see https://vueuse.org/useInfiniteScroll
 */
export declare function useInfiniteScroll(
  element: MaybeComputedRef<
        HTMLElement | SVGElement | Window | Document | null | undefined
        >,
  onLoadMore: (
    state: UnwrapNestedRefs<ReturnType<typeof useScroll>>
  ) => void | Promise<void>,
  options?: UseInfiniteScrollOptions
): void
```
