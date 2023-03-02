<script setup lang="ts">
import { ref } from 'vue'
import { watchDebounced } from '@vueuse/core'

const input = ref('')
const updated = ref(0)

watchDebounced(input, () => {
  updated.value += 1
}, { debounce: 1000, maxWait: 5000 })
</script>

<template>
  <div>
    <input v-model="input" placeholder="Try to type anything..." type="text">
    <note>对于此演示，延迟设置为 1000 毫秒，maxWait 设置为 5000 毫秒。</note>

    <p>输入: {{ input }}</p>
    <p>更新次数: {{ updated }}</p>
  </div>
</template>
