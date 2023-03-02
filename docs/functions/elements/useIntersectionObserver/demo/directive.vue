<script setup lang="ts">
import { ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'

const root = ref(null)
const isVisible = ref(false)

function onIntersectionObserver([{ isIntersecting }]) {
  isVisible.value = isIntersecting
}
</script>

<template>
  <div ref="root" class="root">
    <p class="notice">
      向下滚动
    </p>
    <div ref="target" v-intersection-observer="[onIntersectionObserver, { root }]" class="target">
      <p>Hello world!</p>
    </div>
  </div>
  <div class="text-center">
    元素
    <BooleanDisplay :value="isVisible" true="在" false="不在" class="font-bold" />
    视口中
  </div>
</template>

<style scoped>
.root {
  border: 2px dashed #ccc;
  height: 200px;
  margin: 0 2rem 1rem;
  overflow-y: scroll;
}
.notice {
  text-align: center;
  padding: 2em 0;
  margin-bottom: 300px;
  font-style: italic;
  font-size: 1.2rem;
  opacity: 0.8;
}
.target {
  border: 2px dashed var(--c-brand);
  padding: 10px;
  max-height: 150px;
  margin: 0 2rem 400px;
}
</style>
