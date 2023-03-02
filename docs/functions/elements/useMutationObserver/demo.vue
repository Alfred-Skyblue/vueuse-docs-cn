<script setup lang="ts">
import { ref } from 'vue'
import { useMutationObserver } from '@vueuse/core'

const el = ref<HTMLElement>()
const messages = ref<string[]>([])

useMutationObserver(
  el,
  (mutations) => {
    const mutation = mutations[0]

    if (!mutation)
      return

    messages.value.push(mutation.attributeName!)
  },
  { attributes: true },
)

const changeClassName = () => {
  el.value.className = 'test test2'
}

const changeStyle = () => {
  el.value.style.color = 'red'
}
</script>

<template>
  <div>
    <button @click="changeStyle">
      修改style
    </button>
    <button @click="changeClassName">
      修改class
    </button>
    <div ref="el">
      <div v-for="(text, index) of messages" :key="index">
        修改了: {{ text }}
      </div>
    </div>
  </div>
</template>
