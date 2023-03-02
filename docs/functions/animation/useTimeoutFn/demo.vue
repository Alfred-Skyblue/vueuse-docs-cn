<script setup lang="ts">
import { ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'

const defaultText = '请等待3秒'
const text = ref(defaultText)
const { start, isPending } = useTimeoutFn(() => {
  text.value = 'Fired!'
}, 3000)

const restart = () => {
  text.value = defaultText
  start()
}
</script>

<template>
  <p>{{ text }}</p>
  <button :class="{ disabled: isPending }" @click="restart()">
    重新开始
  </button>
</template>
