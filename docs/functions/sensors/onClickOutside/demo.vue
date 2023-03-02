<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const modal = ref(false)
const modalRef = ref(null)

onClickOutside(
  modalRef,
  () => {
    modal.value = false
  },
)
</script>

<template>
  <button @click="modal = true">
    打开弹框
  </button>
  <div v-if="modal" ref="modalRef" class="modal">
    <div class="inner">
      <button class="button small" title="Close" @click="modal = false">
        𝖷
      </button>
      <p class="heading">
        我是弹框
      </p>
      <p>点击模态外部以将其关闭.</p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  max-width: 100%;
  z-index: 10;
}
.inner {
  background-color: var(--vp-c-bg);
  padding: 0.4em 2em;
  border-radius: 5px;
  border: 1px solid var(--vp-c-divider-light);
  box-shadow: 2px 2px 10px rgba(10, 10, 10, 0.1);
}
.heading {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 2rem;
}
.button {
  position: absolute;
  top: -0.9rem;
  right: -0.5rem;
  font-weight: bold;
}
</style>
