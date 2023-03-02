# unrefElement

取消对 dom 元素的引用。

## 用法

```html
<template>
  <div ref="div"/>
  <HelloWorld ref="hello"/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { unrefElement } from '@vueuse/core'

const div = ref() // 获取 <div> 元素
const hello = ref() // 获取 HelloWorld 组件

onMounted(() => {
  console.log(unrefElement(div)) //  <div> element
  console.log(unrefElement(hello)) // HelloWorld 组件的根元素
})
</script>
```

## 类型

```ts
export type VueInstance = ComponentPublicInstance
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> =
  MaybeComputedRef<T>
export type MaybeElement =
  | HTMLElement
  | SVGElement
  | VueInstance
  | undefined
  | null
export type UnRefElementReturn<T extends MaybeElement = MaybeElement> =
  T extends VueInstance ? Exclude<MaybeElement, VueInstance> : T | undefined
/**
 * 取消对 dom 元素的引用。
 *
 * @param elRef
 */
export declare function unrefElement<T extends MaybeElement>(
  elRef: MaybeComputedElementRef<T>
): UnRefElementReturn<T>
```
