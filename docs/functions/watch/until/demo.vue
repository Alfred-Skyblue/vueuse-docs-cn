<script setup lang="ts">
import { invoke, until, useCounter } from '@vueuse/core'

const { count, inc, dec } = useCounter()

invoke(async () => {
  await until(count).toBe(7)

  alert('You got 7!')
})
</script>

<template>
  <note>添加到 7 以显示警报</note>
  <p>计数: {{ count }}</p>
  <button @click="inc()">
    加
  </button>
  <button @click="dec()">
    减
  </button>
</template>
