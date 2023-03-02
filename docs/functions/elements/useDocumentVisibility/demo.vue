<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDocumentVisibility, useTimeoutFn } from '@vueuse/core'

const startMessage = '💡 最小化页面或切换标签然后返回'
const message = ref(startMessage)
const visibility = useDocumentVisibility()

const timeout = useTimeoutFn(() => {
  message.value = startMessage
}, 3000)

watch(visibility, (current, previous) => {
  if (current === 'visible' && previous === 'hidden') {
    message.value = '🎉 欢迎回来!'
    timeout.start()
  }
})
</script>

<template>
  <div>{{ message }}</div>
</template>
