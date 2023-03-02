# useWebNotification

响应式 [Web 通知](https://developer.mozilla.org/zh-CN/docs/Web/API/notification)

Notifications API 的 Web Notification 接口用于配置和向用户显示桌面通知。

## 演示

<demo src="./demo.vue" title="useWebNotification" desc="点击按钮向操作系统发送通知"></demo>


## 监听

在这个hooks中，我们使用了 `@vueuse/shared` 中的 [`createEventHook`](../utilities/createEventHook/)

```ts
const {
  onClick,
  onShow,
  onError,
  onClose,
} = useWebNotification({
  title: 'Hello, VueUse world!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
})
onClick((evt: Event) => {
  // 监听通知的点击事件
})

onShow((evt: Event) => {
  // 监听通知的显示事件
})

onError((evt: Event) => {
  // 监听通知的错误事件
})

onClose((evt: Event) => {
  // 监听通知的关闭事件
})
```

## 类型

```ts
export interface WebNotificationOptions {
  /**
   * 通知标题字符串。
   * @default ''
   */
  title?: string
  /**
   * 通知正文字符串。
   *
   * @default ''
   */
  body?: string
  /**
   * 通知文本方向。
   *
   * @default ''
   */
  dir?: 'auto' | 'ltr' | 'rtl'
  /**
   * 通知的语言
   * @default DOMString
   */
  lang?: string
  /**
   * 通知的ID
   * @default ''
   */
  tag?: string
  /**
   * 通知图像标记的图像URL
   * @default ''
   */
  icon?: string
  /**
   * 指定在新通知取旧通知后，是否应通知用户。
   * @default false
   */
  renotify?: boolean
  /**
   * 一个布尔值，表明应该保持活动状态，直接到用户点击或关闭它，而不是自动关闭。
   * @default false
   */
  requireInteraction?: boolean
  /**
   * 指定通知创建者或应用者应用时间（过去、现在或未来）的时间。
   * @default false
   */
  silent?: boolean
  /**
   * 为拥有振动硬件的终端设备指定振动模型。
   *
   * @see https://w3c.github.io/vibration/
   */
  vibrate?: number[]
}
export interface UseWebNotificationOptions
  extends WebNotificationOptions,
  ConfigurableWindow {}
/**
 * 响应式操作 Notification
 *
 * @see https://vueuse.org/useWebNotification
 * @see https://developer.mozilla.org/en-US/docs/Web/API/notification
 * @param title
 * @param defaultOptions of type WebNotificationOptions
 * @param methods of type WebNotificationMethods
 */
export declare const useWebNotification: (
  defaultOptions?: UseWebNotificationOptions
) => {
  isSupported: Ref<boolean>
  notification: Ref<Notification | null>
  show: (
    overrides?: WebNotificationOptions
  ) => Promise<Notification | undefined>
  close: () => void
  onClick: EventHook<any>
  onShow: EventHook<any>
  onError: EventHook<any>
  onClose: EventHook<any>
}
export type UseWebNotificationReturn = ReturnType<typeof useWebNotification>
```
