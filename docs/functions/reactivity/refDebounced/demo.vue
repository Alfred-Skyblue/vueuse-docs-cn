<script setup lang="ts">
import { ref, watch } from 'vue'
import { refDebounced } from '@vueuse/core'

const input = ref('')
const debounced = refDebounced(input, 1000)
const updated = ref(0)

watch(debounced, () => (updated.value += 1))
</script>

<template>
  <div>
    <input v-model="input" placeholder="Try to type anything..." type="text">
    <note>此演示的延迟设置为 1000 毫秒</note>

    <p>防抖: {{ debounced }}</p>
    <p>更新次数: {{ updated }}</p>
  </div>
</template>
