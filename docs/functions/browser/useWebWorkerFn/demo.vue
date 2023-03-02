<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useDateFormat, useTimestamp, useWebWorkerFn } from '@vueuse/core'

const heavyTask = () => {
  const randomNumber = () => Math.trunc(Math.random() * 5_000_00)
  const numbers: number[] = Array(5_000_000).fill(undefined).map(randomNumber)
  numbers.sort()
  return numbers.slice(0, 5)
}

const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(heavyTask)
const time = useTimestamp()
const computedTime = useDateFormat(time, 'YYYY-MM-DD HH:mm:ss SSS')
const running = computed(() => workerStatus.value === 'RUNNING')

const data = ref<number[] | null>(null)
const runner = ref('')

const baseSort = async () => {
  data.value = null
  await nextTick()
  data.value = heavyTask()
  runner.value = 'Main'
}

const workerSort = async () => {
  data.value = null
  await nextTick()
  data.value = await workerFn()
  runner.value = 'Worker'
}
</script>

<template>
  <p>当前时间: <b>{{ computedTime }}</b></p>
  <note class="mb-2">
    这是一个演示，展示了使用或不使用 WebWorker 对大型数组（500 万个数字）进行排序
    。<br>发生 UI 阻塞时停止。
  </note>
  <button @click="baseSort">
    在主线程中排序
  </button>
  <button v-if="!running" @click="workerSort">
    在 Worker 中排序
  </button>
  <button v-else class="orange" @click="workerTerminate('PENDING')">
    终止 Worker
  </button>
  <p v-if="data">
    线程: <strong>{{ runner }}</strong><br>
    Result: <strong>{{ data }}</strong>
  </p>
</template>
