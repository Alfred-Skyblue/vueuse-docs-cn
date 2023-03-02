<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
</script>

<template>
  <div>
    <span>文本域的高度是自动调整的:</span>
    <textarea
      ref="textarea"
      v-model="input"
      class="resize-none"
      placeholder="请输入文本内容"
    />
  </div>
</template>
