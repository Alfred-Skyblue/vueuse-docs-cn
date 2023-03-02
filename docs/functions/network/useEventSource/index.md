# useEventSource

[`EventSource`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) 或 [`Server-Sent-Events`](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) 实例打开到 HTTP 服务器的持久连接，该服务器以文本/事件流格式发送事件。


## 用法

```ts
import { useEventSource } from '@vueuse/core'

const { status, data, error, close } = useEventSource('https://event-source-url')
```

| State | Type          | Description                                                                                             |
| ----- | ------------- | ------------------------------------------------------------------------------------------------------- |
| status | `Ref<string>` | 表示连接状态的只读值。可能的值为 CONNECTING (0)、OPEN (1) 或 CLOSED (2)|
| data   | `Ref<string \| null>` | 引用通过 EventSource 接收到的最新数据，可以观察以响应传入的消息 |
| eventSource | `Ref<EventSource \| null>` | 引用当前 EventSource 实例 |

| Method | Signature                                  | Description                            |
| ------ | ------------------------------------------ | ---------------------------------------|
| close  | `() => void` | 关闭 `EventSource` 连接。 |


## 类型

```ts
export type UseEventSourceOptions = EventSourceInit
/**
 * EventSource 的响应式包装器。
 *
 * @see https://vueuse.org/useEventSource
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource EventSource
 * @param url
 * @param events
 * @param options
 */
export declare function useEventSource(
  url: string,
  events?: Array<string>,
  options?: UseEventSourceOptions
): {
  eventSource: Ref<EventSource | null>
  event: Ref<string | null>
  data: Ref<string | null>
  status: Ref<'OPEN' | 'CONNECTING' | 'CLOSED'>
  error: Ref<Event | null>
  close: () => void
}
export type UseEventSourceReturn = ReturnType<typeof useEventSource>
```
