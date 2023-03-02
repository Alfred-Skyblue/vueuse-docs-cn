<script setup lang="ts">
import { computed } from 'vue'
import { useMagicKeys } from '@vueuse/core'

const { shift, v, u, e, s, v_u_e, u_s_e, current } = useMagicKeys()
const keys = computed(() => Array.from(current))

const getClassName = (value) => {
  return value ? 'opacity-100 text-primary bg-primary bg-opacity-15' : 'opacity-50 bg-gray-600 bg-opacity-10 dark:(bg-gray-400 bg-opacity-10)'
}
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <img
      src="/vue.svg"
      class="h-38 py-8 m-auto transform transition duration-500"
      :class="{ 'opacity-0': !v_u_e, 'rotate-180': shift }"
    >

    <div>
      <note class="text-center mt-0 mb-5">
        按以下键进行测试
      </note>
      <div class="flex gap-3 justify-center">
        <div class="font-mono px-4 py-2 rounded" :class="getClassName(v)">
          V
        </div>
        <div class="font-mono px-4 py-2 rounded" :class="getClassName(u)">
          u
        </div>
        <div class="font-mono px-4 py-2 rounded" :class="getClassName(e)">
          e
        </div>
        <div class="mx-1" />
        <div class="font-mono px-4 py-2 rounded" :class="getClassName(u)">
          U
        </div>
        <div class="font-mono px-4 py-2 rounded" :class="getClassName(s)">
          s
        </div>
        <div class="font-mono px-4 py-2 rounded" :class="getClassName(e)">
          e
        </div>
      </div>

      <div class="flex gap-3 justify-center mt-3">
        <Key class="font-mono px-4 py-2 rounded" :class="getClassName(shift)">
          Shift
        </Key>
        <Key class="font-mono px-4 py-2 rounded" :class="getClassName(v_u_e)">
          Vue
        </Key>
        <Key class="font-mono px-4 py-2 rounded" :class="getClassName(u_s_e)">
          Use
        </Key>
      </div>

      <div class="text-center mt-4">
        <Note>按下的键</Note>
        <div class="flex mt-2 justify-center space-x-1 min-h-1.5em">
          <code
            v-for="key in keys"
            :key="key"
            class="font-mono"
          >
            {{ key }}
          </code>
        </div>
      </div>
    </div>

    <img
      src="/favicon.svg"
      class="h-38 py-8 m-auto transform transition duration-500"
      :class="{ 'opacity-0': !u_s_e, 'rotate-180': shift }"
    >
  </div>
</template>
