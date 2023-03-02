<script setup lang="ts">
import { ref, watch } from 'vue'
import { useWindowFocus } from '@vueuse/core'

const startMessage = '💡 点击文档外的某个地方取消窗口焦点.'
const message = ref(startMessage)
const focused = useWindowFocus()

watch(focused, (isFocused) => {
  if (isFocused)
    message.value = startMessage
  else message.value = 'ℹ 窗口未聚焦'
})
</script>

<template>
  <div>{{ message }}</div>
</template>
