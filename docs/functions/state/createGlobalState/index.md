# createGlobalState

将状态保持在全局范围内，以便在 `Vue` 实例之间复用，实现响应式数据共享。

## 演示

<demo src="./demo.vue" title="createGlobalState" desc="创建全局状态，可在多个Vue实例之间共享数据"></demo>

## 用法

```ts
// useGlobalState.ts
import { computed, ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(() => {
  // state
  const count = ref(0)

  // getters
  const doubleCount = computed(() => count.value * 2)

  // actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

```HTML
<script lang="ts" setup>
  // Child.vue
import { useGlobalState } from '../store'

const { count, doubleCount } = useGlobalState()
</script>

<template>
  <h4>子组件</h4>
  <p>count：{{ count }}</p>
  <p>doubleCount：{{ doubleCount }}</p>
</template>
```

## 类型声明

```ts
export type CreateGlobalStateReturn<T> = () => T
/**
 * 将状态保持在全局范围内，以便在 Vue 实例之间重用。
 * @param stateFactory 创建状态的工厂函数
 */
export declare function createGlobalState<T>(stateFactory: () => T): CreateGlobalStateReturn<T>
```
