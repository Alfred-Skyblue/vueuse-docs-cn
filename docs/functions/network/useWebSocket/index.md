# useWebSocket

响应式 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket).

## 用法

```ts
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket('ws://websocketurl')
```


### Immediate

自动连接（默认启用）。

这将 `open()` 自动为您调用，您无需自己调用。

如果 `url` 作为 `ref` 提供，这也控制当其值更改时是否重新建立连接（或者是否需要再次调用 `open()` 以使更改生效）。

### 自动关闭

自动关闭连接（默认启用）。

这将在事件被触发或关联的效果范围停止close()时自动调用。beforeunload



### 自动重连


自动重新连接错误（默认禁用）。

```ts
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: true,
})
```

或者对其行为进行更多控制：

```ts
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: {
    retries: 3,
    delay: 1000,
    onFailed() {
      alert('Failed to connect WebSocket after 3 retries')
    },
  },
})
```

> 显式调用 `close()` 不会触发自动重新连接。

### 心跳

通常的做法是在每个给定时间发送一条小消息（心跳）以保持连接处于活动状态。在这个函数中，我们提供了一个方便的助手来完成它：

```ts
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: true,
})
```

或者使用更多控件：

```ts
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: {
    message: 'ping',
    interval: 1000,
    pongTimeout: 1000,
  },
})
```

### 子协议

要使用的一个或多个子协议的列表，在本例中为 soap 和 wamp。



```ts
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket('ws://websocketurl', {
  protocols: ['soap'], // ['soap', 'wamp']
})
```

## 类型

```ts
export type WebSocketStatus = 'OPEN' | 'CONNECTING' | 'CLOSED'
export interface UseWebSocketOptions {
  onConnected?: (ws: WebSocket) => void
  onDisconnected?: (ws: WebSocket, event: CloseEvent) => void
  onError?: (ws: WebSocket, event: Event) => void
  onMessage?: (ws: WebSocket, event: MessageEvent) => void
  /**
   * 每经过 x 毫秒发送心跳
   *
   * @default false
   */
  heartbeat?:
  | boolean
  | {
    /**
     * 心跳的讯息
     *
     * @default 'ping'
     */
    message?: string | ArrayBuffer | Blob
    /**
     * 间隔，以毫秒为单位
     *
     * @default 1000
     */
    interval?: number
    /**
     * 心跳响应超时时间，单位毫秒
     *
     * @default 1000
     */
    pongTimeout?: number
  }
  /**
   * 启用自动重连
   *
   * @default false
   */
  autoReconnect?:
  | boolean
  | {
    /**
     * 最大重试次数。
     *
     * 或者你可以传递一个谓词函数（如果你想重试则返回 true）。
     *
     * @default -1
     */
    retries?: number | (() => boolean)
    /**
     * 重新连接延迟，以毫秒为单位
     *
     * @default 1000
     */
    delay?: number
    /**
     * 达到最大重试次数。
     */
    onFailed?: Fn
  }
  /**
   * 自动打开一个连接
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 自动关闭连接
   *
   * @default true
   */
  autoClose?: boolean
  /**
   * 一个或多个子协议字符串列表
   *
   * @default []
   */
  protocols?: string[]
}
export interface UseWebSocketReturn<T> {
  /**
   * 参考通过 websocket 接收到的最新数据，可以观察以响应传入的消息
   */
  data: Ref<T | null>
  /**
   * 当前的 websocket 状态，只能是以下之一：'OPEN', 'CONNECTING', 'CLOSED'
   */
  status: Ref<WebSocketStatus>
  /**
   * 关闭 websocket 连接。
   */
  close: WebSocket['close']
  /**
   * 重新打开 websocket 连接。如果当前的那个是活动的，将在打开一个新的之前关闭它。
   */
  open: Fn
  /**
   * 通过 websocket 连接发送数据。
   *
   * @param data
   * @param useBuffer 未打开时，将数据存储到缓冲区中并发送给它们一个连接。默认为真。
   */
  send: (data: string | ArrayBuffer | Blob, useBuffer?: boolean) => boolean
  /**
   * WebSocket 实例。
   */
  ws: Ref<WebSocket | undefined>
}
/**
 * 响应式 WebSocket
 *
 * @see https://vueuse.org/useWebSocket
 * @param url
 */
export declare function useWebSocket<Data = any>(
  url: MaybeComputedRef<string | URL | undefined>,
  options?: UseWebSocketOptions
): UseWebSocketReturn<Data>
```
