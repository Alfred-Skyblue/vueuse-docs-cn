# useWakeLock

响应式[屏幕唤醒 API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API)。提供了一种方法来防止设备在应用程序需要继续运行时调暗或锁定屏幕。

## 用法

```ts
import { useWakeLock } from '@vueuse/core'

const { isSupported, isActive, request, release } = useWakeLock()
```
如果 `request` 被调用， `isActive` 将为 `true`，如果被 `release` 调用，或显示其他选项卡，或窗口最小化，`isActive` 将为 `false`。

## 类型

```ts
type WakeLockType = 'screen'
export interface WakeLockSentinel extends EventTarget {
  type: WakeLockType
  released: boolean
  release: () => Promise<void>
}
export type UseWakeLockOptions = ConfigurableNavigator & ConfigurableDocument
/**
 * 响应式屏幕唤醒锁定 API。
 *
 * @see https://vueuse.org/useWakeLock
 * @param options
 */
export declare const useWakeLock: (options?: UseWakeLockOptions) => {
  isSupported: Ref<boolean>
  isActive: Ref<boolean>
  request: (type: WakeLockType) => Promise<void>
  release: () => Promise<void>
}
```
