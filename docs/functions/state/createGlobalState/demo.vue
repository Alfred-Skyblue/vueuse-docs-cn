<script setup lang="ts">
import { useGlobalState } from './useGlobalState'
import Child from './components/Child.vue'
const { count, increment, doubleCount } = useGlobalState()
</script>

<template>
  <div>
    <button @click="increment">
      按钮
    </button>
    <h3>父组件</h3>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>

    <Child />
  </div>
</template>
