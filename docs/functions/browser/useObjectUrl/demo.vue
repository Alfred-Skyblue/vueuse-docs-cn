<script setup lang="ts">
import { shallowRef } from 'vue'
import { useObjectUrl } from '@vueuse/core'

const file = shallowRef()
const url = useObjectUrl(file)

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = target.files
  file.value = (files && files.length > 0) ? files[0] : undefined
}
</script>

<template>
  <div>
    <input type="file" @change="onFileChange">

    <div class="mt-4 mb-1">
      <note>
        Object URL:
      </note>
      <code>
        <a v-if="url" :href="url" target="_blank">{{ url }}</a>
        <span v-else>none</span>
      </code>
    </div>
  </div>
</template>
