<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'

const { files, open, reset } = useFileDialog()
</script>

<template>
  <button type="button" @click="open()">
    选择文件
  </button>
  <button type="button" :disabled="!files" @click="reset()">
    重置
  </button>
  <template v-if="files">
    <p>
      已选择: <b>{{ files.length }} 个文件</b>
    </p>
    <li v-for="file of files" :key="file.name">
      {{ file.name }}
    </li>
  </template>
</template>
