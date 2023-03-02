<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { interval } from 'rxjs'
import {
  map,
  mapTo,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators'
import { from, fromEvent, toObserver, useSubscription } from '@vueuse/rxjs'

const count = ref(0)
const button = ref<HTMLButtonElement | null>(null)

useSubscription(
  interval(1000)
    .pipe(
      mapTo(1),
      takeUntil(fromEvent(button as Ref<HTMLButtonElement>, 'click')),
      withLatestFrom(from(count, {
        immediate: true,
        deep: false,
      })),
      map(([curr, total]) => curr + total),
    )
    .subscribe(toObserver(count)),
)
</script>

<template>
  <div>
    <button @click="count++">
      计数: {{ count }}
    </button>
    <button ref="button">
      停止
    </button>
  </div>
</template>
