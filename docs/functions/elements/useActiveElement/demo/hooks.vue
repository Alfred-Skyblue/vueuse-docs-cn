<script setup lang="ts">
import { computed } from 'vue'
import { useActiveElement } from '@vueuse/core'

const activeElement = useActiveElement()
const key = computed(() => activeElement.value?.dataset?.id || 'null')
</script>

<template>
  <div class="mb-5">
    选择下面的输入框以查看更改：
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
    <input v-for="i in 6" :key="i" type="text" :data-id="i" class="!my-0 !min-w-0" :placeholder="`${i}`">
  </div>
  <div class="mt-2">
    当前激活的元素是第
    <span class="text-primary">{{ key }}</span>
    个
  </div>
</template>
