<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useMousePressed, useToggle } from '@vueuse/core'

const el = ref<HTMLElement | null>()
const [withTarget, toggle] = useToggle()
const target = computed<HTMLElement | null>(() =>
  (withTarget.value ? el.value : window) as HTMLElement,
)

watch(withTarget, (value) => {
  console.log('他变了', value)
}, { deep: true })
const mouse = reactive(useMousePressed({ target }))
const text = computed(() => JSON.stringify(mouse, null, 2))
</script>

<template>
  <div ref="el" class="select-none">
    <pre lang="yaml">{{ text }}</pre>
    <div>
      正在跟踪
      <button class="ml-2 button small" @click="toggle(!withTarget)">
        {{ withTarget ? '演示部分' : '整个页面' }}
      </button>
    </div>
  </div>
</template>
