<script setup lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import { computed } from 'vue'

const location = useBrowserLocation()
const text = computed(() => JSON.stringify(location.value, null, '\t'))
</script>

<template>
  <textarea :value="text" h-80 w-full />
</template>
