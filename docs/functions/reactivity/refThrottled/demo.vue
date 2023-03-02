<script setup lang="ts">
import { ref, watch } from 'vue'
import { refThrottled } from '@vueuse/core'

const trailing = ref(true)
const leading = ref(false)
const input = ref('')
const throttled = refThrottled(input, 1000, trailing.value, leading.value)
const updated = ref(0)

watch(throttled, () => {
  updated.value += 1
})
</script>

<template>
  <div>
    <input v-model="input" placeholder="Try to type anything..." type="text">
    <note>此演示的延迟设置为 1000 毫秒</note>

    <p>节流: {{ throttled }}</p>
    <p>更新次数: {{ updated }}</p>
    <p>结束后调用: {{ trailing }}</p>
    <p>超时前调用: {{ leading }}</p>
  </div>
</template>
