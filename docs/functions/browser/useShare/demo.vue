<script setup lang="ts">
import { ref } from 'vue'
import { isClient, useShare } from '@vueuse/core'

const options = ref({
  title: 'VueUse',
  text: 'Collection of essential Vue Composition Utilities!',
  url: isClient ? location.href : '',
})

const { share, isSupported } = useShare(options)

const startShare = () => share().catch(err => err)
</script>

<template>
  <div>
    <input
      v-if="isSupported"
      v-model="options.text"
      type="text"
      placeholder="Note"
    >
    <button :disabled="!isSupported" @click="startShare">
      {{ isSupported ? '分享' : '您的浏览器不支持 Web 共享' }}
    </button>
  </div>
</template>
