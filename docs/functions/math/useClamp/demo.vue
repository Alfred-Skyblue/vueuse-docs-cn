<script setup lang="ts">
import { ref } from 'vue'
import { useClamp } from '@vueuse/math'
const min = ref(0)
const max = ref(10)

const value = useClamp(0, min, max)
</script>

<template>
  <div>
    最小:
    <input v-model="min" type="number">
    最大:
    <input v-model="max" type="number">
    value:{{ value }}
    <div>
      <button @click="value--">
        减
      </button>
      <button @click="value++">
        加
      </button>
    </div>
  </div>
</template>
