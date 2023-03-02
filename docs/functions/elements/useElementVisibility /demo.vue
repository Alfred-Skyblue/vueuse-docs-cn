<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const el = ref(null)
const isVisible = useElementVisibility(el)
</script>

<template>
  <div>
    <note class="mb-2">
      可见信息在右下角展示
    </note>
    <div ref="el" class="max-w-100 relative area bg-white dark:bg-gray-800 shadow-lg z-60">
      目标元素 (向下滚动)
    </div>
  </div>
  <div class="float m-3 area shadow-lg">
    元素
    <BooleanDisplay :value="isVisible" true="在" false="不在" class="font-bold" />
    视口中
  </div>
</template>
