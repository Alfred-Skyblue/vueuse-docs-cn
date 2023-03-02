<script setup lang="ts">
import './style.css'
import { useNProgress } from '@vueuse/integrations'

const { isLoading, progress } = useNProgress()
</script>

<template>
  <note class="mb-2">
    单击以更改进度状态
  </note>
  <button @click="isLoading = !isLoading">
    {{ !isLoading ? '开始' : '停止' }}
  </button>
  <b v-if="isLoading" class="ml-2">{{ ((progress || 0) * 100).toFixed(0) }}%</b>
</template>
