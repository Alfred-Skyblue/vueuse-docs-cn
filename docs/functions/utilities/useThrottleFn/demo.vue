<script setup lang="ts">
import { ref } from 'vue'
import { useThrottleFn } from '@vueuse/core'

const updated = ref(0)
const clicked = ref(0)
const throttledFn = useThrottleFn(() => {
  updated.value += 1
}, 1000)

const clickedFn = () => {
  clicked.value += 1
  throttledFn()
}
</script>

<template>
  <div>
    <button @click="clickedFn">
      点击我!
    </button>
    <note>此演示的延迟设置为 1000 毫秒</note>

    <p>点击按钮: {{ clicked }}</p>
    <p>调用的事件处理程序: {{ updated }}</p>
  </div>
</template>
