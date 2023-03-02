# useScrollLock

锁定元素的滚动。

## 演示

### 基本使用

<demo src="./demo.vue" title="useScrollLock" desc="锁定元素的滚动"></demo>


### 指令使用

```vue
<script setup lang="ts">
import { vScrollLock } from '@vueuse/components'
import { useToggle } from '@vueuse/core'
import { ref } from 'vue'

const data = ref([1, 2, 3, 4, 5, 6])
const isLocked = ref(false)
const toggleLock = useToggle(isLocked)
</script>

<template>
  <div v-scroll-lock="isLocked">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>
  <button @click="toggleLock()">
    切换锁定状态
  </button>
</template>
```



## 用法

```html
<script setup lang="ts">
import { useScrollLock } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const isLocked = useScrollLock(el)

isLocked.value = true // lock
isLocked.value = false // unlock
</script>

<template>
  <div ref="el"></div>
</template>
```

## 类型

```ts
/**
 * 锁定元素的滚动。
 *
 * @see https://vueuse.org/useScrollLock
 * @param element
 */
export declare function useScrollLock(
  element: MaybeComputedRef<
    HTMLElement | SVGElement | Window | Document | null | undefined
  >,
  initialState?: boolean
): WritableComputedRef<boolean>
```
