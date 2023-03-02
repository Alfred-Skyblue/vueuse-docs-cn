<script setup lang="ts">
import { useCycleList } from '@vueuse/core'

const list = [
  'Dog',
  'Cat',
  'Lizard',
  'Shark',
  'Whale',
  'Dolphin',
  'Octopus',
  'Seal',
]

const { state, next, prev } = useCycleList(list)
</script>

<template>
  <div>
    <div class="text-primary text-lg font-bold">
      {{ state }}
    </div>
    <button @click="prev()">
      上一个
    </button>
    <button @click="next()">
      下一个
    </button>
  </div>
</template>
