<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useNetwork } from '@vueuse/core'

const network = reactive(useNetwork())
const text = computed(() => JSON.stringify(network, null, 2))
</script>

<template>
  <pre lang="yaml">{{ text }}</pre>
</template>
