<script setup lang="ts">
import { useScreenOrientation } from '@vueuse/core'

const { isSupported, orientation, angle } = useScreenOrientation()
</script>

<template>
  <note class="mb-2">
    为获得最佳效果，请使用移动设备或平板设备（或使用浏览器的原生检查器模拟方向变化）
  </note>
  <div>
    是否支持: <boolean-display :value="isSupported">
      {{ isSupported }}
    </boolean-display>
  </div>
  <div>方向类型: <b>{{ orientation }}</b></div>
  <div>方位角: <b>{{ angle }}</b></div>
</template>
