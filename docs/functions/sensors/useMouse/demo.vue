<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useMouse } from '@vueuse/core'

const mouse = reactive(useMouse())
const text = computed(() => JSON.stringify(mouse, null, 2))
</script>

<template>
  <pre lang="yaml">{{ text }}</pre>
</template>
