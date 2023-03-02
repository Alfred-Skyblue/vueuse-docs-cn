<script lang="ts" setup>
import { useVibrate } from '@vueuse/core'

// 这会使设备振动 300 毫秒，然后暂停 100 毫秒，然后再次振动设备 300 毫秒：
const { vibrate, isSupported, stop } = useVibrate({ pattern: [300, 100, 300] })
</script>

<template>
  <button :disabled="!isSupported" @click="vibrate">
    点击震动
  </button>
  <button :disabled="!isSupported" @click="stop">
    停止震动
  </button>
</template>
