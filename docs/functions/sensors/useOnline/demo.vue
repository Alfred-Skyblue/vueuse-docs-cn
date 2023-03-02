<script setup lang="ts">
import { computed } from 'vue'
import { useOnline } from '@vueuse/core'

const online = useOnline()

const clazz = computed(() => online.value ? 'text-primary' : 'text-gray')
const text = computed(() => online.value ? '在线' : '离线')
</script>

<template>
  <note class="mb-2">
    要不您拔掉网线试一下，看看我会不会变？
  </note>
  <div>状态: <b :class="clazz">{{ text }}</b></div>
</template>
