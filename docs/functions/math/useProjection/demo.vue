<script setup lang="ts">
import { ref } from 'vue'
import { useProjection } from '@vueuse/math'

const from = ref<[number, number]>([0, 10])
const to = ref<[number, number]>([10, 100])
const input = ref(0)

const output = useProjection(input, from, to)
</script>

<template>
  <div>
    <div>
      映射区域 [{{ from[0] }}, {{ from[1] }}] to [{{ to[0] }}, {{ to[1] }}]
    </div>
    <div>
      <input id="input" v-model.number="input" type="range" :min="from[0]" :max="from[1]">
    </div>
    <div>
      输入: {{ input }}
    </div>
    <div>
      输出: {{ output }}
    </div>
  </div>
</template>
