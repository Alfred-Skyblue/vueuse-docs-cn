<script setup lang="ts">
import { computed } from 'vue'

import { useTextDirection } from '@vueuse/core'

const dir = useTextDirection({
  selector: '#_useTextDirectionDemo',
})
const text = computed(() =>
  dir.value === 'ltr'
    ? '这段文字，从左到右是正确的。'
    : '这段文字从右到左了。',
)

const handleOnClick = () => {
  dir.value = dir.value === 'rtl' ? 'ltr' : 'rtl'
}
</script>

<template>
  <div id="_useTextDirectionDemo">
    <p>
      {{ text }}
    </p>
    <hr>
    <button @click="handleOnClick">
      <span class="ml-2">{{ dir.toUpperCase() }}</span>
    </button>
    <span class="p-4 opacity-50">点击改变方向</span>
  </div>
</template>

<style scoped>
#_useTextDirectionDemo[dir="rtl"] p {
  color: red;
}

button {
  margin-right: 0.5em;
}
</style>
