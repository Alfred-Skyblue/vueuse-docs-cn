# useParallax

轻松创建视差效果。如果不支持方向，它会使用 `useDeviceOrientation` 并回退到 `useMouse`。

## 演示

<demo src="./demo.vue" title="useParallax" desc="轻松创建视差效果"></demo>



## 用法

```vue
<script lang="ts" setup>
import { useParallax } from '@vueuse/core'
import { ref } from 'vue'

const container = ref(null)
const { tilt, roll, source } = useParallax(container)
</script>

<template>
  <div ref="container" />
</template>
```


## 类型

```ts
export interface UseParallaxOptions extends ConfigurableWindow {
  deviceOrientationTiltAdjust?: (i: number) => number
  deviceOrientationRollAdjust?: (i: number) => number
  mouseTiltAdjust?: (i: number) => number
  mouseRollAdjust?: (i: number) => number
}
export interface UseParallaxReturn {
  /**
   * 滚动值。`-0.5 ~ 0.5`
   */
  roll: ComputedRef<number>
  /**
   * 倾斜值。`-0.5 ~ 0.5`
   */
  tilt: ComputedRef<number>
  /**
   * 传感器源，可以是 `mouse` 或 `deviceOrientation`
   */
  source: ComputedRef<'deviceOrientation' | 'mouse'>
}
/**
 * Create parallax effect easily. It uses `useDeviceOrientation` and fallback to `useMouse`
 * if orientation is not supported.
 *
 * @param target
 * @param options
 */
export declare function useParallax(
  target: MaybeElementRef,
  options?: UseParallaxOptions
): UseParallaxReturn
```
