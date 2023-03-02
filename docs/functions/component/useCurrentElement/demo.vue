<script setup lang="ts">
import { useCurrentElement } from '@vueuse/core'
import { watchEffect } from 'vue'

const el = useCurrentElement()

watchEffect(() => {
  console.log('Current element:', el.value)
})
</script>

<template>
  <div>打开您的 console.log 以查看该元素</div>
</template>
