# useTemplateRefsList

将 refs 绑定到 `v-for` 中的模板元素和组件的简写。

> 这个功能只能在 vue3 中使用

## 演示

<demo src="./demo.vue" title="useTemplateRefsList" desc=""></demo>

## 用法

```html
<template>
  <div v-for="i of 5" :key="i" :ref="refs.set"></div>
</template>

<script setup lang="ts">
import { onUpdated } from 'vue'
import { useTemplateRefsList } from '@vueuse/core'

const refs = useTemplateRefsList<HTMLDivElement>()

onUpdated(() => {
  console.log(refs)
})
</script>
```

## 类型

```ts
export type TemplateRefsList<T> = T[] & {
  set(el: Object | null): void
}
export declare function useTemplateRefsList<T = Element>(): Readonly<
  Ref<Readonly<TemplateRefsList<T>>>
>
```
