
# useSwipe

响应式滑动检测 [`TouchEvents`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent)，`TouchEvent` 是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少，等等。

## 演示

<demo src="./demo.vue" title="useSwipe" desc="响应式滑动检测"></demo>


## 用法

```vue
<script lang="ts" setup>
import { useSwipe } from '@vueuse/core'
import { ref } from 'vue'

const el = ref(null)
const { isSwiping, direction } = useSwipe(el)
</script>

<template>
  <div ref="el">
    滑动我
  </div>
</template>
```

## 类型

```ts
export declare enum SwipeDirection {
  UP = 'UP',
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  NONE = 'NONE',
}
export interface UseSwipeOptions extends ConfigurableWindow {
  /**
   * 将事件注册为被动事件
   *
   * @default true
   */
  passive?: boolean
  /**
   * @default 50
   */
  threshold?: number
  /**
   * 滑动开始回调
   */
  onSwipeStart?: (e: TouchEvent) => void
  /**
   * 滑动中的回调
   */
  onSwipe?: (e: TouchEvent) => void
  /**
   * 滑动结束回调
   */
  onSwipeEnd?: (e: TouchEvent, direction: SwipeDirection) => void
}
export interface UseSwipeReturn {
  isPassiveEventSupported: boolean
  isSwiping: Ref<boolean>
  direction: ComputedRef<SwipeDirection | null>
  coordsStart: Readonly<Position>
  coordsEnd: Readonly<Position>
  lengthX: ComputedRef<number>
  lengthY: ComputedRef<number>
  stop: () => void
}
/**
 * 响应式滑动检测
 *
 * @see https://vueuse.org/useSwipe
 * @param target
 * @param options
 */
export declare function useSwipe(
  target: MaybeComputedRef<EventTarget | null | undefined>,
  options?: UseSwipeOptions
): UseSwipeReturn
```
