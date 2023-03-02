<script lang="ts" setup>
import { UseElementSize } from '@vueuse/components'
</script>

<template>
  <UseElementSize v-slot="{ width, height }" class="resizer">
    <div>Width: {{ width }}</div>
    <div>Height: {{ height }}</div>
  </UseElementSize>
</template>
