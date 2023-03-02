<script setup lang="ts">
import { refAutoReset } from '@vueuse/core'

const message = refAutoReset('Default message', 1000)

const setMessage = () => {
  message.value = 'Changed'
}
</script>

<template>
  <div>
    <button @click="setMessage()">
      改变消息
    </button>
    <p>
      {{ message }}
    </p>
  </div>
</template>
