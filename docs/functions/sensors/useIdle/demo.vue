<script setup lang="ts">
import { computed } from 'vue'
import { useIdle, useTimestamp } from '@vueuse/core'

const { idle, lastActive } = useIdle(5000)

const now = useTimestamp()

const idledFor = computed(() =>
  Math.floor((now.value - lastActive.value) / 1000),
)
</script>

<template>
  <note class="mb-2">
    出于演示目的，在此演示中空闲超时设置为 <b>5s</b>（默认 1 分钟）。
  </note>
  <div class="mb-2">
    空闲: <BooleanDisplay :value="idle" />
  </div>
  <div>空闲了: <b class="text-primary">{{ idledFor }}s</b></div>
</template>
