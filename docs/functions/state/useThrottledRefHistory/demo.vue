<script lang="ts" setup>
import { ref } from 'vue'
import { formatDate, useCounter, useThrottledRefHistory } from '@vueuse/core'

import type { Ref } from 'vue'

const format = (ts: number) => formatDate(new Date(ts), 'YYYY-MM-DD HH:mm:ss')
const delay: Ref<number> = ref(1000)

const { count, inc, dec } = useCounter()
const { history, undo, redo, canUndo, canRedo } = useThrottledRefHistory(count, { capacity: 10, throttle: delay })
</script>

<template>
  <div>Count: {{ count }}</div>
  <button @click="inc()">
    加
  </button>
  <button @click="dec()">
    减
  </button>
  <span class="ml-2">/</span>
  <button :disabled="!canUndo" @click="undo()">
    撤销
  </button>
  <button :disabled="!canRedo" @click="redo()">
    重做
  </button>
  <br>
  <span>延迟 (ms):</span>
  <input v-model="delay" type="number">
  <br>
  <br>
  <note>历史记录 (限制 10 条)</note>
  <div class="code-block mt-4">
    <div v-for="item in history" :key="item.timestamp">
      <span class="opacity-50 mr-2 font-mono">{{ format(item.timestamp) }}</span>
      <span class="font-mono">{ value: {{ item.snapshot }} }</span>
    </div>
  </div>
</template>
