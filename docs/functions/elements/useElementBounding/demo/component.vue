<script lang="ts" setup>
import { UseElementBounding } from '@vueuse/components'
const format = (value) => {
  return JSON.stringify(value, null, 2)
}
</script>

<template>
  <UseElementBounding v-slot="bounding" contenteditable class="resizer">
    <div>{{ format(bounding) }}</div>
  </UseElementBounding>
</template>
