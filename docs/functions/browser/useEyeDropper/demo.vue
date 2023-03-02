<script lang="ts" setup>
import { useEyeDropper } from '@vueuse/core'

const { isSupported, open, sRGBHex } = useEyeDropper({ initialValue: '#f10215' })
</script>

<template>
  <template v-if="isSupported">
    <div>支持: {{ isSupported }}</div>
    <div>
      sRGBHex: <span :style="{ color: sRGBHex }">{{ sRGBHex }}</span>
    </div>
    <button :disabled="!isSupported" @click="() => open()">
      打开吸管
    </button>
  </template>
  <div v-else>
    <span>您的浏览器不支持 EyeDropper API</span>
  </div>
</template>
