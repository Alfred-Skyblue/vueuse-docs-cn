<script lang="ts" setup>
import CountComponent from './components/CountComponent.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import { useProvideCounterStore } from './useCounterStore'

useProvideCounterStore(1)
</script>

<template>
  <ButtonComponent />
  <CountComponent />
</template>
