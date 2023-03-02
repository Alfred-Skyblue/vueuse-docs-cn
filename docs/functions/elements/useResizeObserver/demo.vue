<script setup lang="ts">
import { ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

const el = ref(null)
const text = ref('')

useResizeObserver(el, (entries) => {
  const [entry] = entries
  const { width, height } = entry.contentRect
  text.value = `width: ${width}\nheight: ${height}`
})
</script>

<template>
  <textarea ref="el" class="resizer" disabled v-text="text" />
</template>
