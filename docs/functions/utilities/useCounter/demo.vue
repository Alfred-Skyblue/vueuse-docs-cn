<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const { count, inc, dec, set, reset } = useCounter()
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="inc()">
      加
    </button>
    <button @click="dec()">
      减
    </button>
    <button @click="inc(5)">
      加 (+5)
    </button>
    <button @click="dec(5)">
      减 (-5)
    </button>
    <button @click="set(100)">
      设置 (100)
    </button>
    <button @click="reset()">
      重置
    </button>
  </div>
</template>
