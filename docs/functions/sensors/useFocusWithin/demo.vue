<script setup lang="ts">
import { ref } from 'vue'
import { useFocusWithin } from '@vueuse/core'

const target = ref()

const { focused } = useFocusWithin(target)
</script>

<template>
  <div class="flex flex-col items-center">
    <form
      ref="target"
      class="shadow bg-base border-main rounded max-w-96 mx-auto p-8"
    >
      <input type="text" placeholder="姓名">
      <input type="text" placeholder="邮箱">
      <input type="text" placeholder="密码">
    </form>
    <div mt2>
      表单聚焦: <BooleanDisplay :value="focused" />
    </div>
  </div>
</template>
