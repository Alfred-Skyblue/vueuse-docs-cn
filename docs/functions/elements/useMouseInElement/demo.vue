<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)
const mouse = reactive(useMouseInElement(target))
const text = computed(() => JSON.stringify(mouse, null, 2))
</script>

<template>
  <div flex="~" gap="4">
    <div
      ref="target"
      class="el"
      w="40"
      h="40"
      bg="gray-400/20"
      border="rounded"
      flex="~"
      place="content-center"
      select="none"
    >
      <div m="auto">
        Hover me
      </div>
    </div>
    <pre>{{ text }}</pre>
  </div>
</template>
