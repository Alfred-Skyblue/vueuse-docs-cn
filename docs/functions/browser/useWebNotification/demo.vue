<script setup lang="ts">
import { useWebNotification } from '@vueuse/core'
import type { UseWebNotificationOptions } from '@vueuse/core'

const options: UseWebNotificationOptions = {
  title: 'Hello, world from VueUse!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
}

const {
  isSupported,
  show,
} = useWebNotification(options)
</script>

<template>
  <div>
    <p>
      支持: <BooleanDisplay :value="isSupported" />
    </p>
  </div>

  <div v-if="isSupported">
    <button @click="show()">
      发送通知
    </button>
  </div>
  <div v-else>
    您的浏览器不支持发送 Web 通知。
  </div>
</template>
