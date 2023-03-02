<script setup lang="ts">
import { UseActiveElement } from '@vueuse/components'
</script>

<template>
  <div class="mb-5">
    选择下面的输入框以查看更改：
  </div>
  <UseActiveElement v-slot="{ element }">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <input
        v-for="i in [7, 8, 9, 10, 11, 12]"
        :key="i"
        type="text"
        :data-id="i"
        class="!my-0 !min-w-0"
        :placeholder="`${i}`"
      >
    </div>
    <div class="mt-2">
      当前激活的元素是第
      <span class="text-primary">{{ element.dataset.id || "null" }}</span>
      个
    </div>
  </UseActiveElement>
</template>
