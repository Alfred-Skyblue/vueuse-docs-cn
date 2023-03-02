<script setup lang="ts">
import { formatDate, useCounter, useRefHistory } from '@vueuse/core'

const format = (ts: number) => formatDate(new Date(ts), 'YYYY-MM-DD HH:mm:ss')

const { count, inc, dec } = useCounter()
const { history, undo, redo, canUndo, canRedo } = useRefHistory(count, {
  capacity: 10,
})
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
    撤消
  </button>
  <button :disabled="!canRedo" @click="redo()">
    重做
  </button>
  <br>
  <br>
  <note>历史记录 (限制为 10 条)</note>
  <div class="code-block mt-4">
    <div v-for="i in history" :key="i.timestamp">
      <span class="opacity-50 mr-2 font-mono">{{ format(i.timestamp) }}</span>
      <span class="font-mono">{ value: {{ i.snapshot }} }</span>
    </div>
  </div>
</template>
