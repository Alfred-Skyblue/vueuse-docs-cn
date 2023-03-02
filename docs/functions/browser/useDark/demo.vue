<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark({
  storageKey: 'vitepress-theme-appearance',
})

const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
    <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
  </button>
</template>
