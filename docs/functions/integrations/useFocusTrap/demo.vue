<script setup lang="ts">
import { ref } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target)
</script>

<template>
  <div class="flex flex-col items-center">
    <button @click="activate()">
      {{ hasFocus ? 'Focus is trapped within form' : 'Trap focus within form' }}
    </button>
    <input
      type="text"
      :placeholder="hasFocus ? 'You can\'t focus me' : 'You can focus me'"
    >

    <div
      ref="target"
      class="shadow-lg bg-gray-600 bg-opacity-10 dark:(bg-gray-400 bg-opacity-10) rounded max-w-96 mx-auto p-8"
    >
      <div class="flex flex-row items-center text-6xl text-center justify-center">
        <twemoji:face-with-monocle v-if="hasFocus" />
        <twemoji:sleeping-face v-else />
      </div>
      <input type="text" class="!w-12" placeholder="邮箱">
      <input type="text" placeholder="名称">
      <input placeholder="密码" type="text">
      <div class="flex flex-row justify-center">
        <button @click="deactivate()">
          自由对焦
        </button>
      </div>
    </div>
  </div>
</template>
