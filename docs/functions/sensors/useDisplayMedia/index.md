# useDisplayMedia

操作 [`MediaDevices.getDisplayMedia API`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getDisplayMedia)

## 演示

<demo src="./demo.vue" title="useDisplayMedia" desc=""></demo>


## 类型

```ts
export interface UseDisplayMediaOptions extends ConfigurableNavigator {
  /**
   * 是否启用流
   * @default false
   */
  enabled?: MaybeRef<boolean>
  /**
   * 是否限制流视频媒体
   */
  video?: boolean | MediaTrackConstraints | undefined
  /**
   * 是否限制流音频媒体
   */
  audio?: boolean | MediaTrackConstraints | undefined
}
/**
 * 响应式操作 `mediaDevices.getDisplayMedia` 串流
 *
 * @see https://vueuse.org/useDisplayMedia
 * @param options
 */
export declare function useDisplayMedia(options?: UseDisplayMediaOptions): {
  isSupported: Ref<boolean>
  stream: Ref<MediaStream | undefined>
  start: () => Promise<MediaStream | undefined>
  stop: () => void
  enabled: Ref<boolean>
}
export type UseDisplayMediaReturn = ReturnType<typeof useDisplayMedia>
```
