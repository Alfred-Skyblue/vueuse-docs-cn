<script lang="ts" setup>
import { useAsyncState } from '@vueuse/core'
import axios from 'axios'

const getData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => res.data)
}
const { state, isReady, isLoading, execute } = useAsyncState(getData, {})
</script>

<template>
  <p>Ready:{{ isReady }}</p>
  <p>Loading:{{ isLoading }}</p>
  <p>{{ state }}</p>
  <button @click="execute(2000)">
    请求数据
  </button>
</template>
