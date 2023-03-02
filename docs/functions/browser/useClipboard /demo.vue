<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard, usePermission } from '@vueuse/core'

const input = ref('')

const { text, isSupported, copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')
</script>

<template>
  <div v-if="isSupported">
    <div>
      <p>剪贴板权限</p>
      读取：
      <p>{{ permissionRead }}</p>
      写入：
      <p>{{ permissionWrite }}</p>
    </div>
    <p>
      当前已复制: <code>{{ text || "none" }}</code>
    </p>
    <input v-model="input" type="text">
    <button @click="copy(input)">
      复制
    </button>
  </div>
  <p v-else>
    Your browser does not support Clipboard API
  </p>
</template>
