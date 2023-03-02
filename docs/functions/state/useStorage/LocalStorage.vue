<script setup lang="ts">
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

const theDefault = {
  name: 'localStorage',
  color: 'Yellow',
  size: 'Medium',
  count: 0,
}

const state = useStorage('vue-use-local-storage', theDefault, localStorage)
const state2 = useStorage('vue-use-local-storage', theDefault, localStorage)

const text = computed(() => JSON.stringify(state2.value, null, '\t'))
</script>

<template>
  <div>
    <input v-model="state.name" type="text">
    <input v-model="state.color" type="text">
    <input v-model="state.size" type="text">
    <input v-model.number="state.count" type="range" min="0" step="0.01" max="1000">

    <pre lang="json">{{ text }}</pre>
  </div>
</template>
