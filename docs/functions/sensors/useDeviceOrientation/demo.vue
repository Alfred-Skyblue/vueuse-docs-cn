<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useDeviceOrientation } from '@vueuse/core'

const orientation = reactive(useDeviceOrientation())
const text = computed(() => JSON.stringify(orientation, null, 2))
</script>

<template>
  <pre lang="json">{{ text }}</pre>
</template>
