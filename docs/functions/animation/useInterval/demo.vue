<script setup lang="ts">
import { useInterval } from '@vueuse/core'

const counter = useInterval(200)
</script>

<template>
  <div>
    <p>间隔变更: {{ counter }}</p>
  </div>
</template>
