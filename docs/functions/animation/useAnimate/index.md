# useAnimate

使用响应式的 [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)。

## 演示

<demo src="./demo.vue" title="useAnimate" desc="响应式 Animations"></demo>

## 使用方法

### 基本用法

`useAnimate` 函数会返回动画及其控制函数。

```html
<template>
  <span ref="el" style="display:inline-block">useAnimate</span>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimate } from '@vueuse/core'

const el = ref()
const {
  isSupported,
  animate,

  // actions
  play,
  pause,
  reverse,
  finish,
  cancel,

  // states
  pending,
  playState,
  replaceState,
  startTime,
  currentTime,
  timeline,
  playbackRate,
} = useAnimate(el, { transform: 'rotate(360deg)' }, 1000)
</script>
```

### 自定义关键帧

可以是关键帧对象数组，关键帧对象或 `ref`。更多细节请参见 [Keyframe Formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)。

```ts
const keyframes = { transform: 'rotate(360deg)' }
// 或者
const keyframes = [
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' },
]
// 或者
const keyframes = ref([
  { clipPath: 'circle(20% at 0% 30%)' },
  { clipPath: 'circle(20% at 50% 80%)' },
  { clipPath: 'circle(20% at 100% 30%)' },
])

useAnimate(el, keyframes, 1000)
```
