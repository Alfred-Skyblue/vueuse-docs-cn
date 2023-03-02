<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

const code = computed(() =>
  JSON.stringify(
    reactive({
      isLargeScreen,
      prefersDark,
    }),
    null,
    2,
  ),
)
</script>

<template>
  <pre lang="json">{{ code }}</pre>
</template>
