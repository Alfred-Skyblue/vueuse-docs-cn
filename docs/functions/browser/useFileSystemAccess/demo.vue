<script setup lang="ts">
import type { Ref } from 'vue'
import { computed, reactive, ref } from 'vue'
import { useFileSystemAccess } from '@vueuse/core'

const dataType = ref('Text') as Ref<'Text' | 'ArrayBuffer' | 'Blob'>
const res = useFileSystemAccess({
  dataType,
  types: [
    {
      description: 'text',
      accept: {
        'text/plain': ['.txt', '.html'],
      },
    },
  ],
  excludeAcceptAllOption: true,
})

const content = res.data
const str = computed(() =>
  JSON.stringify(
    reactive({
      isSupported: res.isSupported,
      file: res.file,
      fileName: res.fileName,
      fileMIME: res.fileMIME,
      fileSize: res.fileSize,
      fileLastModified: res.fileLastModified,
    }),
    null,
    2,
  ),
)

async function onSave() {
  await res.save()
}
</script>

<template>
  <div>
    <div flex="~ gap-1" items-center>
      <button @click="res.open()">
        打开文件
      </button>
      <button @click="res.create()">
        新建文件
      </button>
      <button :disabled="!res.file.value" @click="onSave">
        保存
      </button>
      <button :disabled="!res.file.value" @click="res.saveAs()">
        另存为
      </button>

      <div ml5>
        <div text-xs op50>
          文件类型
        </div>
        <select v-model="dataType" class="outline-none w-30 px2 py1 text-sm" border="~ main rounded">
          <option value="Text">
            Text
          </option>
          <option value="ArrayBuffer">
            ArrayBuffer
          </option>
          <option value="Blob">
            Blob
          </option>
        </select>
      </div>
    </div>

    <pre class="code-block" lang="yaml">{{ str }}</pre>

    <div v-if="content">
      内容
      <textarea v-if="typeof content === 'string'" v-model="content" rows="20" cols="40" w-full />
      <span v-else>{{ content }}</span>
    </div>
  </div>
</template>
