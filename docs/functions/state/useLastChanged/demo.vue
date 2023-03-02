<script setup lang="ts">
import { timestamp, useLastChanged, useTimeAgo } from '@vueuse/core'
import { ref } from 'vue'

const input = ref('')
const ms = useLastChanged(input, { initialValue: timestamp() - 1000 * 60 * 5 })
const timeAgo = useTimeAgo(ms)
</script>

<template>
  <div>
    <input v-model="input" type="text" placeholder="Type anything...">
    <div>
      最后更新: <span class="text-primary">{{ timeAgo }}</span>
      <span class="opacity-50 font-mono">({{ ms }})</span>
    </div>
  </div>
</template>
