
# usePointerSwipe

响应式滑动检测 [PointerEvents](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent).


## 演示

<demo src="./demo.vue" title="usePointerSwipe" desc="响应式滑动检测"></demo>



## 用法

```html
<script setup>
import { ref } from 'vue'
import { usePointerSwipe } from '@vueuse/core'

const el = ref(null)
const { isSwiping, direction } = usePointerSwipe(el)
</script>

<template>
  <div ref="el">
    滑动
  </div>
</template>
```
