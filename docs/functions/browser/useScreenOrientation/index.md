# useScreenOrientation

响应式[Screen Orientation API
](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)，它为网络开发人员提供有关用户当前屏幕方向的信息。


## 演示

<demo src="./demo.vue" title="useScreenOrientation" desc="获取屏幕方向信息"></demo>

如果要锁定方向，您可以将 [`OrientationLockType`](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type) 传递给 `lockOrientation` 函数。

```ts
import { useScreenOrientation } from '@vueuse/core'

const {
  isSupported,
  orientation,
  angle,
  lockOrientation,
  unlockOrientation,
} = useScreenOrientation()

lockOrientation('portrait-primary')
```

然后再次解锁，使用以下命令：

```ts
unlockOrientation()
```

接受的方向类型是一下类型之一，"landscape-primary"、"landscape-secondary"、"portrait-primary"、"portrait-secondary"、"any"、"landscape"、"natural"、"portrait"

## 类型

```ts
/**
 * 响应式获取屏幕方向信息
 *
 * @see https://vueuse.org/useScreenOrientation
 */
export declare const useScreenOrientation: (options?: ConfigurableWindow) => {
  isSupported: Ref<boolean>
  orientation: Ref<OrientationType | undefined>
  angle: Ref<number>
  lockOrientation: (type: OrientationLockType) => Promise<void>
  unlockOrientation: () => void
}
export type UseScreenOrientationReturn = ReturnType<typeof useScreenOrientation>
```
