# createSharedComposable

使 `hooks` 可用于多个 `Vue` 实例之间状态共享。

## 演示

<demo src="./demo.vue" title="createSharedComposable" desc=""></demo>

## 用法

- useSharedMouse.ts

```ts
import { createSharedComposable, useMouse } from '@vueuse/core'

export const useSharedMouse = createSharedComposable(useMouse)
```

-   CompA.vue

```vue
<script lang="ts" setup>
import { useSharedMouse } from '../useSharedMouse'

const { x, y } = useSharedMouse()
</script>

<template>
  <div>
    <h4>CompA</h4>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
  </div>
</template>
```

-   CompB.vue

```vue
<script lang="ts" setup>
import { useSharedMouse } from '../useSharedMouse'

const { x, y } = useSharedMouse()
</script>

<template>
  <div>
    <h4>CompB</h4>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
  </div>
</template>
```

## 类型

```ts
/**
 * 使函数可以在多个 Vue 实例之间共享状态
 */
export declare function createSharedComposable<Fn extends (...args: any[]) => any>(composable: Fn): Fn
```
