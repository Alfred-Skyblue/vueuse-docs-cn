<script setup lang="ts">
import { useCounterStore } from '../useCounterStore'

const { increment } = useCounterStore()
</script>

<template>
  <button @click="increment">
    + 1
  </button>
</template>
