<script setup lang="ts">
import { ref } from 'vue'
import { rand, useIntervalFn } from '@vueuse/core'

const greetings = ['Hello', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut!', '你好', 'Привет']
const word = ref('Hello')
const interval = ref(500)

const { pause, resume, isActive } = useIntervalFn(() => {
  word.value = greetings[rand(0, greetings.length - 1)]
}, interval)
</script>

<template>
  <p>{{ word }}</p>
  <p>
    间隔:
    <input v-model="interval" type="number" placeholder="interval">
  </p>
  <button v-if="isActive" class="orange" @click="pause">
    暂停
  </button>
  <button v-if="!isActive" @click="resume">
    恢复
  </button>
</template>
