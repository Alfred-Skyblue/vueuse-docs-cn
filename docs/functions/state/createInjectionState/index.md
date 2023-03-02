# createInjectionState

创建可以注入组件的全局状态。

> 注：不限于父子组件之间，只要是后代组件，都可以获取到。

## 演示

<demo src="./demo.vue" title="createInjectionState" desc="将状态注入到后代组件中"></demo>

## 用法

-   useCounterStore.ts

```ts
// useCounterStore.ts
import { computed, ref } from 'vue'
import { createInjectionState } from '@vueuse/core'

const [useProvideCounterStore, useCounterStore] = createInjectionState((initialValue: number) => {
  // state
  const count = ref(initialValue)

  // getters
  const double = computed(() => count.value * 2)

  // actions
  function increment() {
    count.value++
  }

  return { count, double, increment }
})

export { useProvideCounterStore, useCounterStore }
```

-   ButtonComponent.vue

```vue
<script setup lang="ts">
import { useCounterStore } from '../useCounterStore'

const { increment } = useCounterStore()
</script>

<template>
  <button @click="increment">
    + 1
  </button>
</template>
```

-   CountComponent.vue

```vue
<script setup lang="ts">
import { useCounterStore } from '../useCounterStore'

const { count, double } = useCounterStore()
</script>

<template>
  <ul>
    <li>count: {{ count }}</li>
    <li>double: {{ double }}</li>
  </ul>
</template>
```

## 类型

```ts
/**
 * 创建可以注入后代组件的全局状态
 */
export declare function createInjectionState<Arguments extends Array<any>, Return>(
  composable: (...args: Arguments) => Return
): readonly [useProvidingState: (...args: Arguments) => Return, useInjectedState: () => Return | undefined]
```
