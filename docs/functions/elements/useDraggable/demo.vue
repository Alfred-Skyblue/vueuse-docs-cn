<script setup lang="ts">
import { ref } from 'vue'
import { isClient, useDraggable } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const target = ref<HTMLElement | null>(null)

const innerWidth = isClient ? window.innerWidth : 200

const { x, y, style } = useDraggable(el, {
  initialValue: { x: innerWidth / 4.2, y: 80 },
  preventDefault: true,
})
const {
  x: targetX,
  y: targetY,
  style: targetStyle,
} = useDraggable(target, {
  initialValue: { x: innerWidth / 2.2, y: 130 },
  preventDefault: true,
})
</script>

<template>
  <div>
    <p class="italic op50 text-center">
      它俩可以动，我不可以
    </p>
    <div
      ref="el"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="shadow-black p-3 fixed bg-$vp-c-bg select-none cursor-move z-24 gray-400/30 rounded"
      style="touch-action: none"
      :style="style"
    >
      👋 拖拽我!
      <div class="text-sm opacity-50">
        我在这 {{ Math.round(x) }}, {{ Math.round(y) }}
      </div>
    </div>
    <div
      ref="target"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="shadow-black p-3 fixed bg-$vp-c-bg select-none cursor-move z-24 gray-400/30 rounded"
      style="touch-action: none"
      :style="targetStyle"
    >
      👋 拖拽我!
      <div class="text-sm opacity-50">
        我在这 {{ Math.round(targetX) }}, {{ Math.round(targetY) }}
      </div>
    </div>
  </div>
</template>
