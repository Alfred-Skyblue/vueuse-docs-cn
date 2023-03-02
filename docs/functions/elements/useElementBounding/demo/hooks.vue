<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

const el = ref(null)
const rect = reactive(useElementBounding(el))
const text = computed(() => JSON.stringify(rect, null, 2))
</script>

<template>
  <div style="min-height: 300px">
    <textarea ref="el" readonly class="resizer" :value="text" />
  </div>
</template>
