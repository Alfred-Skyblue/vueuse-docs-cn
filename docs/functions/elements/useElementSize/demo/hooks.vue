<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const el = ref(null)
const size = reactive(useElementSize(el, { width: 0, height: 0 }, { box: 'border-box' }))
const text = computed(() => JSON.stringify(size, null, 2))
</script>

<template>
  <note class="mb-2">
    Resize the box to see changes
  </note>
  <textarea ref="el" class="resizer" v-text="text" />
</template>
