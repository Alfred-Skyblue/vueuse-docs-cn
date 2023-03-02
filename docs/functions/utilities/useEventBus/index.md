# useEventBus

事件总线


## 演示

<demo src="./demo.vue" title="useEventBus" desc="事件总线"></demo>

## 用法

```ts
import { useEventBus } from '@vueuse/core'

const bus = useEventBus<string>('news')

const listener = (event: string) => {
  console.log(`news: ${event}`)
}

// 监听
const unsubscribe = bus.on(listener)

// 触发
bus.emit('The Tokyo Olympics has begun')

// 注销监听器
unsubscribe()
// or
bus.off(listener)

// 清空所有监听器
bus.reset()
```

setup卸载组件时，在组件内部注册的侦听器将自动注销。

## TypeScript

使用 `EventBusKey` 是将事件类型绑定到 `key` 上，类似于 `Vue` 的 [`InjectionKey`](https://antfu.me/notes#typed-provide-and-inject-in-vue)


```ts
// fooKey.ts
import type { EventBusKey } from '@vueuse/core'

export const fooKey: EventBusKey<{ name: foo }> = Symbol('symbol-key')
```

```ts
import { useEventBus } from '@vueuse/core'

import { fooKey } from './fooKey'

const bus = useEventBus(fooKey)

bus.on((e) => {
  // `e` will be `{ name: foo }`
})
```


## 类型

```ts
export type EventBusListener<T = unknown, P = any> = (
  event: T,
  payload?: P
) => void
export type EventBusEvents<T, P = any> = EventBusListener<T, P>[]
export interface EventBusKey<T> extends Symbol {}
export type EventBusIdentifier<T = unknown> = EventBusKey<T> | string | number
export interface UseEventBusReturn<T, P> {
  /**
   * 订阅一个事件。当调用 emit 时，监听器将执行。
   * @param 监听函数
   * @returns 用于注销当前回调的函数
   */
  on: (listener: EventBusListener<T, P>) => Fn
  /**
   * 类似于 `on`，但只触发一次
   * @param 监听函数
   * @returns 用于注销当前回调的函数
   */
  once: (listener: EventBusListener<T, P>) => Fn
  /**
   * 发出一个事件，对应的事件监听器就会执行。
   * @param 事件参数
   */
  emit: (event?: T, payload?: P) => void
  /**
   * 移除相应的监听器
   * @param 监听函数
   */
  off: (listener: EventBusListener<T>) => void
  /**
   * 清空所有监听器
   */
  reset: () => void
}
export declare function useEventBus<T = unknown, P = any>(
  key: EventBusIdentifier<T>
): UseEventBusReturn<T, P>
```
