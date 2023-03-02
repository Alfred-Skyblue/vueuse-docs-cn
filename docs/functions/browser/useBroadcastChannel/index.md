# useBroadcastChannel

响应式 [`BroadcastChannel API`](https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel)，`BroadcastChannel` 接口代理了一个官博频道，可以让指定 `origin` 下的任意 `browsing context` 来订阅它。它允许同源的不同浏览器窗口，`Tab` 页，`frame` 或者 `iframe` 下的不同文档之间相互通信。通过触发一个 `message` 事件，消息可以广播到所有监听了该频道的 `BroadcastChannel` 对象。

## 演示

<demo src="./demo.vue" title="useBroadcastChannel" desc="发送消息到其他页面，您可以打开多个相同的页面进行测试"></demo>

## 类型

```ts
export interface UseBroadcastChannelOptions extends ConfigurableWindow {
  /**
     * 频道的名称，必须是同源的
     */
  name: string
}
/**
 * 响应式广播频道
 *
 * @see https://vueuse.org/useBroadcastChannel
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
 * @param options
 *
 */
export declare const useBroadcastChannel: <D, P>(
  options: UseBroadcastChannelOptions
) => UseBroadcastChannelReturn<D, P>
export interface UseBroadcastChannelReturn<D, P> {
  isSupported: Ref<boolean>
  channel: Ref<BroadcastChannel | undefined>
  data: Ref<D>
  post: (data: P) => void
  close: () => void
  error: Ref<Event | null>
  isClosed: Ref<boolean>
}
```
