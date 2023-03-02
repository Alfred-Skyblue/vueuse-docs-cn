<script setup lang="ts">
import { ref } from 'vue'
import { promiseTimeout, useTimeoutPoll } from '@vueuse/core'

const count = ref(0)

const fetchData = async () => {
  await promiseTimeout(1000)
  count.value++
}

const { isActive, pause, resume } = useTimeoutPoll(fetchData, 1000)
</script>

<template>
  <div>
    <div>Count: {{ count }}</div>
    <div>isActive: {{ isActive }}</div>
    <div>
      <button @click="pause">
        暂停
      </button>
      <button @click="resume">
        恢复
      </button>
    </div>
  </div>
</template>
