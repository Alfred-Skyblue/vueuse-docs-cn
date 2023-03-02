# useEventListener

轻松使用 `EventListener`。在挂载时使用 [`addEventListener`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener) 注册，在卸载时自动使用 [`removeEventListener`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener)。

## 用法

```ts
import { useEventListener } from '@vueuse/core'

useEventListener(document, 'visibilitychange', (evt) => {
  console.log(evt)
})
```

您还可以传递一个 `ref` 作为事件目标，`useEventListener` 当您更改目标时，将注销前一个事件并注册新事件。

```vue
<script>
import { useEventListener } from '@vueuse/core'

const element = (ref < HTMLDivElement) | (null > null)
const cond = ref(true)
useEventListener(element, 'keydown', (e) => {
  console.log(e.key)
  cond.value = !cond.value
})
</script>

<template>
  <div v-if="cond" ref="element">
    Div1
  </div>
  <div v-else ref="element">
    Div2
  </div>
</template>
```

您还可以调用返回的方法来注销侦听器。

```ts
import { useEventListener } from '@vueuse/core'

const cleanup = useEventListener(document, 'keydown', (e) => {
  console.log(e.key)
})

cleanup() // 这将注销监听器。
```

## 类型

```ts
interface InferEventTarget<Events> {
  addEventListener(event: Events, fn?: any, options?: any): any
  removeEventListener(event: Events, fn?: any, options?: any): any
}
export type WindowEventName = keyof WindowEventMap
export type DocumentEventName = keyof DocumentEventMap
export interface GeneralEventListener<E = Event> {
  (evt: E): void
}
/**
 * 在挂载时使用 addEventListener 注册，在卸载时自动使用 removeEventListener。
 *
 * 函数重载 1: 省略 target，使用 window
 *
 * @see https://vueuse.org/useEventListener
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<E extends keyof WindowEventMap>(
  event: Arrayable<E>,
  listener: Arrayable<(this: Window, ev: WindowEventMap[E]) => any>,
  options?: MaybeComputedRef<boolean | AddEventListenerOptions>
): Fn
/**
 * 在挂载时使用 addEventListener 注册，在卸载时自动使用 removeEventListener。
 * 重载 2: 显示使用 window 作为 target
 *
 * @see https://vueuse.org/useEventListener
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<E extends keyof WindowEventMap>(
  target: Window,
  event: Arrayable<E>,
  listener: Arrayable<(this: Window, ev: WindowEventMap[E]) => any>,
  options?: MaybeComputedRef<boolean | AddEventListenerOptions>
): Fn
/**
 * 在挂载时使用 addEventListener 注册，在卸载时自动使用 removeEventListener。
 *
 * 重载 3：使用 document 作为 target
 *
 * @see https://vueuse.org/useEventListener
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<E extends keyof DocumentEventMap>(
  target: DocumentOrShadowRoot,
  event: Arrayable<E>,
  listener: Arrayable<(this: Document, ev: DocumentEventMap[E]) => any>,
  options?: MaybeComputedRef<boolean | AddEventListenerOptions>
): Fn
/**
 * 在挂载时使用 addEventListener 注册，在卸载时自动使用 removeEventListener。
 *
 * 重载 4：具有事件类型推断的自定义事件目标
 *
 * @see https://vueuse.org/useEventListener
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<Names extends string, EventType = Event>(
  target: InferEventTarget<Names>,
  event: Arrayable<Names>,
  listener: Arrayable<GeneralEventListener<EventType>>,
  options?: MaybeComputedRef<boolean | AddEventListenerOptions>
): Fn
/**
 * 在挂载时使用 addEventListener 注册，在卸载时自动使用 removeEventListener。
 *
 * 重载 5：自定义事件 target
 *
 * @see https://vueuse.org/useEventListener
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<EventType = Event>(
  target: MaybeComputedRef<EventTarget | null | undefined>,
  event: Arrayable<string>,
  listener: Arrayable<GeneralEventListener<EventType>>,
  options?: MaybeComputedRef<boolean | AddEventListenerOptions>
): Fn
```
