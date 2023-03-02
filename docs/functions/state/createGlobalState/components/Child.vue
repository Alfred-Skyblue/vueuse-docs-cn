<script lang="ts" setup>
import { useGlobalState } from '../useGlobalState'

const { count, doubleCount } = useGlobalState()
</script>

<template>
  <h4>子组件</h4>
  <p>count：{{ count }}</p>
  <p>doubleCount：{{ doubleCount }}</p>
</template>
