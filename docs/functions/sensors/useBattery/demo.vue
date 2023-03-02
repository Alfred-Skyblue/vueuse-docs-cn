<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useBattery } from '@vueuse/core'

const battery = reactive(useBattery())
const text = computed(() => JSON.stringify(battery, null, 2))
</script>

<template>
  <pre lang="yaml">{{ text }}</pre>
</template>
