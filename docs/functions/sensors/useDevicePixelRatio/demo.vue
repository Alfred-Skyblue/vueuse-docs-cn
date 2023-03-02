<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useDevicePixelRatio } from '@vueuse/core'

const pixelRatio = reactive(useDevicePixelRatio())
const code = computed(() => JSON.stringify(pixelRatio, null, 2))
</script>

<template>
  <div>设备像素比:</div>
  <pre>{{ code }}</pre>
</template>
