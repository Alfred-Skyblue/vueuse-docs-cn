<script setup lang="ts">
import { useKeyModifier } from '@vueuse/core'

const capsLock = useKeyModifier('CapsLock')
const numLock = useKeyModifier('NumLock')
const scrollLock = useKeyModifier('ScrollLock')
const shift = useKeyModifier('Shift')
const control = useKeyModifier('Control')
const alt = useKeyModifier('Alt')
const getClassName = (value) => {
  return value ? 'opacity-100 text-primary bg-primary bg-opacity-15' : 'opacity-50 bg-gray-600 bg-opacity-10 dark:(bg-gray-400 bg-opacity-10)'
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
    <div :class="getClassName(capsLock)">
      capsLock
    </div>
    <div :class="getClassName(numLock)">
      numLock
    </div>
    <div :class="getClassName(scrollLock)">
      scrollLock
    </div>
    <div :class="getClassName(shift)">
      shift
    </div>
    <div :class="getClassName(control)">
      control
    </div>
    <div :class="getClassName(alt)">
      alt
    </div>
  </div>
</template>
