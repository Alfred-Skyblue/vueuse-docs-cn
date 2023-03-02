<script setup lang="ts">
import { ref } from 'vue'
import { onStartTyping } from '@vueuse/core'
const input = ref<HTMLInputElement | null>(null)

onStartTyping(() => {
  if (input.value !== document.activeElement)
    input.value!.focus()
})
</script>

<template>
  <note>请输入任何内容</note>
  <input ref="input" type="text" placeholder="在外部输入时聚焦到此处">
  <input type="text" placeholder="此处开始输入无效">
</template>
