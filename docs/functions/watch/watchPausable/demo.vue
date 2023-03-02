<script setup lang="ts">
import { ref } from 'vue'
import { onStartTyping, watchPausable } from '@vueuse/core'

const input = ref<HTMLInputElement | null>()
const log = ref('')

const source = ref('')

const watcher = watchPausable(
  source,
  v => (log.value += `Changed to "${v}"\n`),
)

onStartTyping(() => input.value?.focus())

const clear = () => {
  log.value = ''
}
const pause = () => {
  log.value += 'Paused\n'
  watcher.pause()
}
const resume = () => {
  log.value += 'Resumed\n'
  watcher.resume()
}

const { isActive } = watcher
</script>

<template>
  <div>
    <note class="mb-2">
      在下方输入内容以触发 watch
    </note>
    <input
      ref="input"
      v-model="source"
      type="text"
    >

    <button :disabled="!isActive" class="orange" @click="pause">
      暂停
    </button>
    <button :disabled="isActive" @click="resume">
      恢复
    </button>
    <button @click="clear">
      清空日志
    </button>

    <br>
    <br>

    <note>日志</note>

    <pre>{{ log }}</pre>
  </div>
</template>
