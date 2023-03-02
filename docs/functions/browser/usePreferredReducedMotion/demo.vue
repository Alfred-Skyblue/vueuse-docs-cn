<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'

const motion = usePreferredReducedMotion()
</script>

<template>
  <note class="mb-2">
    动画减弱功能:
  </note>
  <code>{{ motion }}</code>
</template>
