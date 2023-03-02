<script setup lang="ts">
import { computed } from 'vue'
import { useAxios } from '@vueuse/integrations'

const { data, isLoading, isFinished, execute } = useAxios(
  'https://jsonplaceholder.typicode.com/todos/1',
)
const text = computed(() => JSON.stringify(data.value, null, 2))
</script>

<template>
  <button @click="execute()">
    执行
  </button>
  <p>Loading: {{ isLoading.toString() }}</p>
  <p>Finished: {{ isFinished.toString() }}</p>
  <pre lang="yaml">{{ text }}</pre>
</template>
