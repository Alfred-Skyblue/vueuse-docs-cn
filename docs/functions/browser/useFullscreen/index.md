# useFullscreen

响应式全屏 API。它添加了以全屏模式呈现特定元素（及其后代）的方法，并在不再需要时退出全屏模式。这使得可以使用用户的整个屏幕呈现所需的内容（例如在线游戏），从屏幕上删除所有浏览器用户界面元素和其他应用程序，直到关闭全屏模式。

## 演示

### 基础使用

<demo src="./demo.vue" title="useFullscreen" desc="可对视频全屏播放"></demo>

### 组件使用

```html
<UseFullscreen v-slot="{ toggle }">
    <video />
    <button @click="toggle">Go Fullscreen</button>
</UseFullscreen>
```

## 类型

```ts
export interface UseFullscreenOptions extends ConfigurableDocument {
  /**
     * 卸载组件时自动退出全屏
     *
     * @default false
     */
  autoExit?: boolean
}
/**
 * 响应式全屏 API。
 *
 * @see https://vueuse.org/useFullscreen
 * @param target
 * @param options
 */
export declare function useFullscreen(
  target?: MaybeElementRef,
  options?: UseFullscreenOptions
): {
  isSupported: Ref<boolean>
  isFullscreen: Ref<boolean>
  enter: () => Promise<void>
  exit: () => Promise<void>
  toggle: () => Promise<void>
}
export type UseFullscreenReturn = ReturnType<typeof useFullscreen>
```
