<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const updated = ref(0)
const clicked = ref(0)
const debouncedFn = useDebounceFn(() => {
  updated.value += 1
}, 1000, { maxWait: 5000 })

const clickedFn = () => {
  clicked.value += 1
  debouncedFn()
}
</script>

<template>
  <button @click="clickedFn">
    点击!
  </button>
  <note>对于此演示，延迟设置为 1000ms，maxWait 设置为 5000ms</note>

  <p>单击按钮: {{ clicked }}</p>
  <p>调用的事件处理程序: {{ updated }}</p>
</template>
