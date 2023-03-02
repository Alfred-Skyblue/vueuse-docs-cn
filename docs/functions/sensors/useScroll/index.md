# useScroll

响应式滚动位置和状态。



## 演示

<demo src="./demo.vue" title="useScroll" desc="响应式滚动位置和状态"></demo>


## 用法

```html
<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(el)
</script>

<template>
  <div ref="el"></div>
</template>
```

### 有偏移量
```ts
const { x, y, isScrolling, arrivedState, directions } = useScroll(el, {
  offset: { top: 30, bottom: 30, right: 30, left: 30 },
})
```

### Setting scroll position

设置滚动位置

```vue
<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)
const { x, y } = useScroll(el)
</script>

<template>
  <div ref="el" />
  <button @click="x += 10">
    向右滚动 10px
  </button>
  <button @click="y += 10">
    向下滚动 10px
  </button>
</template>
```

### 平滑滚动
设置 `behavior：smooth` 以启用平滑滚动。 `behavior` 选项默认为 `auto`，这意味着不平滑滚动。有关详细信息，请参阅 [`window.scrollTo()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) 上的 `behavior` 选项。

```ts
import { useScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const { x, y } = useScroll(el, { behavior: 'smooth' })

// Or
const smooth = ref(false)
const behavior = computed(() => smooth.value ? 'smooth' : 'auto')
const { x, y } = useScroll(el, { behavior })
```

## 指令使用

```vue
<script setup lang="ts">
import type { UseScrollReturn } from '@vueuse/core'
import { vScroll } from '@vueuse/components'
import { ref } from 'vue'

const data = ref([1, 2, 3, 4, 5, 6])

function onScroll(state: UseScrollReturn) {
  console.log(state) // {x, y, isScrolling, arrivedState, directions}
}
</script>

<template>
  <div v-scroll="onScroll">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>

  <!-- 有选项 -->
  <div v-scroll="[onScroll, { throttle: 10 }]">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>
</template>
```

## 类型

```ts
export interface UseScrollOptions {
  /**
   * 滚动事件的节流时间，默认禁用。
   *
   * @default 0
   */
  throttle?: number
  /**
   * 滚动结束时的检查时间。配置 `throttle` 时，此配置将设置为 (throttle + idle)。
   *
   * @default 200
   */
  idle?: number
  /**
   * 将到达状态偏移 x 像素
   *
   */
  offset?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
  /**
   * 滚动时触发。
   *
   */
  onScroll?: (e: Event) => void
  /**
   * 滚动结束时触发。
   *
   */
  onStop?: (e: Event) => void
  /**
   * 滚动事件的侦听器选项
   *
   * @default {capture: false, passive: true}
   */
  eventListenerOptions?: boolean | AddEventListenerOptions
  /**
   * 可选择指定 `auto`（默认，非平滑滚动）或 `smooth`（用于平滑滚动）的滚动行为，这在更改 `x` 或 `y` refs 时生效。
   *
   * @default 'auto'
   */
  behavior?: MaybeComputedRef<ScrollBehavior>
}
/**
 * 响应式滚动位置和状态。
 *
 * @see https://vueuse.org/useScroll
 * @param element
 * @param options
 */
export declare function useScroll(
  element: MaybeComputedRef<
    HTMLElement | SVGElement | Window | Document | null | undefined
  >,
  options?: UseScrollOptions
): {
  x: WritableComputedRef<number>
  y: WritableComputedRef<number>
  isScrolling: Ref<boolean>
  arrivedState: {
    left: boolean
    right: boolean
    top: boolean
    bottom: boolean
  }
  directions: {
    left: boolean
    right: boolean
    top: boolean
    bottom: boolean
  }
}
export type UseScrollReturn = ReturnType<typeof useScroll>
```
