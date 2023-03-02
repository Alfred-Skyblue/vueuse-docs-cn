<script setup lang="ts">
import { ref } from 'vue'
import { watchThrottled } from '@vueuse/core'

const input = ref('')
const updated = ref(0)

watchThrottled(input, () => {
  updated.value += 1
}, { throttle: 1000 })
</script>

<template>
  <div>
    <input v-model="input" placeholder="Try to type anything..." type="text">
    <note>
      此演示的延迟设置为 1000 毫秒。
    </note>

    <p>输入: {{ input }}</p>
    <p>更新次数: {{ updated }}</p>
  </div>
</template>
