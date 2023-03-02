<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useFetch, useToggle } from '@vueuse/core'

const url = ref('https://httpbin.org/get')
const refetch = ref(false)

const toggleRefetch = useToggle(refetch)

const {
  data,
  error,
  abort,
  statusCode,
  isFetching,
  isFinished,
  canAbort,
  execute,
} = useFetch(url, { refetch }).get()

const text = computed(() => JSON.stringify(reactive({
  isFinished,
  isFetching,
  canAbort,
  statusCode,
  error,
  data: computed(() => {
    try {
      return JSON.parse(data.value as string)
    }
    catch (e) {
      return null
    }
  }),
}), null, 2))
</script>

<template>
  <div>
    <div>
      <note>以下网址可用于测试 useFetch 的不同功能</note>
      <div class="mt-2">
        正常请求:
        <code>
          https://httpbin.org/get
        </code>
      </div>
      <div>
        中止请求:
        <code>
          https://httpbin.org/delay/10
        </code>
      </div>
      <div>
        响应错误:
        <code>
          http://httpbin.org/status/500
        </code>
      </div>
    </div>

    <input v-model="url" type="text">
    <button @click="execute">
      执行
    </button>
    <button @click="toggleRefetch">
      <i v-if="refetch" inline-block align-middle i-carbon-checkmark />
      <i v-else inline-block align-middle i-carbon-error />

      <span class="ml-2">{{ refetch ? 'Refetch On' : 'Refetch Off' }}</span>
    </button>
    <button v-if="canAbort" class="orange" @click="abort">
      中止
    </button>
    <pre class="code-block">{{ text }}</pre>
  </div>
</template>
