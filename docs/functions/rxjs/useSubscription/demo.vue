<script setup lang="ts">
import { ref } from 'vue'
import { interval } from 'rxjs'
import { useSubscription } from '@vueuse/rxjs'

const count = ref(0)
useSubscription(
  interval(1000)
    .subscribe(() => {
      count.value++
    }),
)
</script>

<template>
  <note>每秒更新一次</note>
  <p>Counter: {{ count }}</p>
</template>
