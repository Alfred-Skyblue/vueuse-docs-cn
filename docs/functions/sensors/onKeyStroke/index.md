# onKeyStroke

监听键盘事件


## 演示

### 基本用法

<demo src="./demo.vue" title="onKeyStroke" desc=""></demo>

### 监听多个键

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke(['s', 'S', 'ArrowDown'], (e) => {
  e.preventDefault()
})

onKeyStroke(true, (e) => {
  e.preventDefault()
})
onKeyStroke((e) => {
  e.preventDefault()
})
```

### 自定义事件目标

```ts
onKeyStroke('A', (e) => {
  console.log('Key A pressed on document')
}, { target: document })
```

### 自定义键盘事件

```ts
onKeyStroke('Shift', (e) => {
  console.log('Shift key up')
}, { eventName: 'keyup' })
```
或者

```ts
onKeyUp('Shift', () => console.log('Shift key up'))
```

### 指令用法

```vue
<script setup lang="ts">
import { vOnKeyStroke } from '@vueuse/components'
function onUpdate(e: KeyboardEvent) {
  // impl...
}
</script>

<template>
  <input v-on-key-stroke:c,v="onUpdate" type="text">
  <!-- with options -->
  <input v-on-key-stroke:c,v="[onUpdate, { eventName: 'keyup' }]" type="text">
</template>
```

## 速记

+ `onKeyDown` - 别名 `onKeyStroke(key, handler, {eventName: 'keydown'})`
+ `onKeyPressed` - 别名 `onKeyStroke(key, handler, {eventName: 'keypress'})`
+ `onKeyUp` - 别名 `onKeyStroke(key, handler, {eventName: 'keyup'})`


## 类型

```ts
export type KeyPredicate = (event: KeyboardEvent) => boolean
export type KeyFilter = true | string | string[] | KeyPredicate
export type KeyStrokeEventName = 'keydown' | 'keypress' | 'keyup'
export interface OnKeyStrokeOptions {
  eventName?: KeyStrokeEventName
  target?: MaybeComputedRef<EventTarget | null | undefined>
  passive?: boolean
}
export declare function onKeyStroke(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: OnKeyStrokeOptions
): () => void
export declare function onKeyStroke(
  handler: (event: KeyboardEvent) => void,
  options?: OnKeyStrokeOptions
): () => void
/**
 * 监听键盘事件。
 *
 * @see https://vueuse.org/onKeyStroke
 */
export declare function onKeyStroke(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: OnKeyStrokeOptions
): () => void
export declare function onKeyStroke(
  handler: (event: KeyboardEvent) => void,
  options?: OnKeyStrokeOptions
): () => void
/**
 * 监听键盘 keydown 事件。
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
export declare function onKeyDown(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: Omit<OnKeyStrokeOptions, 'eventName'>
): () => void
/**
 * 监听键盘 keypress 事件
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
export declare function onKeyPressed(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: Omit<OnKeyStrokeOptions, 'eventName'>
): () => void
/**
 * 监听键盘 keyup 事件
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
export declare function onKeyUp(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: Omit<OnKeyStrokeOptions, 'eventName'>
): () => void
```
