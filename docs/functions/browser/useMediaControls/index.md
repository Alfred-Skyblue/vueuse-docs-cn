# useMediaControls

音频和视频元素的响应式媒体控件。

## 演示

<demo src="./demo.vue" title="useMediaControls" desc="音频和视频元素的响应式媒体控件"></demo>

## 用法

### 基础用法

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'

const video = ref()
const { playing, currentTime, duration, volume } = useMediaControls(video, {
  src: 'video.mp4',
})

// 更改初始媒体属性
onMounted(() => {
  volume.value = 0.5
  currentTime.value = 60
})
</script>

<template>
  <video ref="video" />
  <button @click="playing = !playing">
    Play / Pause
  </button>
  <span>{{ currentTime }} / {{ duration }}</span>
</template>
```

### 提供字幕、副标题等...

您可以在 `useMediaControls` 函数的 `tracks` 选项中提供字幕、副标题等。该函数将返回一个 `tracks` 数组以及两个用于控制它们的函数，`enableTrack`、`disableTrack` 和 `selectedTrack`。使用这些您可以管理当前选择的曲目。如果没有选定的 track，则 `selectedTrack` 将为 -1。

```vue
<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import { ref } from 'vue'

const video = ref()

const { tracks, enableTrack } = useMediaControls(video, {
  src: 'video.mp4',
  tracks: [
    {
      default: true,
      src: './subtitles.vtt',
      kind: 'subtitles',
      label: 'English',
      srcLang: 'en',
    },
  ],
})
</script>

<template>
  <video ref="video" />
  <button v-for="track in tracks" :key="track.id" @click="enableTrack(track)">
    {{ track.label }}
  </button>
</template>
```

## 类型

```ts
/**
 * @see 文档  https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 */
export interface UseMediaSource {
  /**
     * 媒体的源地址
     */
  src: string
  /**
     * 媒体编解码器类型
     */
  type?: string
}
export interface UseMediaTextTrackSource {
  /**
     * 表示应启用该曲目，除非用户的偏好表明另一个曲目更合适
     */
  default?: boolean
  /**
     * 如何使用文本轨道。如果省略，默认类型是字幕。
     */
  kind: TextTrackKind
  /**
     * 浏览器在列出可用文本轨道时使用的文本轨道的用户可读标题。
     */
  label: string
  /**
     * 轨道地址（.vtt 文件）。必须是有效的 URL。必须指定此属性，并且其 URL 值必须与文档具有相同的来源
     */
  src: string
  /**
     * 轨道文本数据的语言。它必须是有效的 BCP 47 语言标记。如果 kind 属性设置为 subtitles，则必须定义 srclang。
     */
  srcLang: string
}
interface UseMediaControlsOptions extends ConfigurableDocument {
  /**
     * 媒体源可以是字符串、“UseMediaSource”对象或“UseMediaSource”对象列表。
     */
  src?: MaybeComputedRef<string | UseMediaSource | UseMediaSource[]>
  /**
     * 媒体的文本轨道列表
     */
  tracks?: MaybeComputedRef<UseMediaTextTrackSource[]>
}
export interface UseMediaTextTrack {
  /**
     * 文本轨道的索引
     */
  id: number
  /**
     * 文本轨道标签
     */
  label: string
  /**
     * 轨道文本数据的语言。它必须是有效的 BCP 47 语言标记。如果 kind 属性设置为 subtitles，则必须定义 srclang。
     */
  language: string
  /**
     * 指定文本轨道的显示模式，`disabled`、`hidden` 或 `showing`
     */
  mode: TextTrackMode
  /**
     * 如何使用文本轨道。如果省略，默认类型是字幕。
     */
  kind: TextTrackKind
  /**
     * 表示轨道的带内元数据轨道调度类型。
     */
  inBandMetadataTrackDispatchType: string
  /**
     * 文本轨道提示列表
     */
  cues: TextTrackCueList | null
  /**
     * 活动文本轨道提示列表
     */
  activeCues: TextTrackCueList | null
}
export declare function useMediaControls(
  target: MaybeRef<HTMLMediaElement | null | undefined>,
  options?: UseMediaControlsOptions
): {
  currentTime: Ref<number>
  duration: Ref<number>
  waiting: Ref<boolean>
  seeking: Ref<boolean>
  ended: Ref<boolean>
  stalled: Ref<boolean>
  buffered: Ref<[number, number][]>
  playing: Ref<boolean>
  rate: Ref<number>
  volume: Ref<number>
  muted: Ref<boolean>
  tracks: Ref<
        {
          id: number
          label: string
          language: string
          mode: TextTrackMode
          kind: TextTrackKind
          inBandMetadataTrackDispatchType: string
          cues: {
            [x: number]: {
              endTime: number
              id: string
              onenter: ((this: TextTrackCue, ev: Event) => any) | null
              onexit: ((this: TextTrackCue, ev: Event) => any) | null
              pauseOnExit: boolean
              startTime: number
              readonly track: {
                readonly activeCues: any | null
                readonly cues: any | null
                readonly id: string
                readonly inBandMetadataTrackDispatchType: string
                readonly kind: TextTrackKind
                readonly label: string
                readonly language: string
                mode: TextTrackMode
                oncuechange: ((this: TextTrack, ev: Event) => any) | null
                addCue: (cue: TextTrackCue) => void
                removeCue: (cue: TextTrackCue) => void
                addEventListener: {
                            <K extends 'cuechange'>(
                    type: K,
                    listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any,
                    options?: boolean | AddEventListenerOptions | undefined
                  ): void
                            (
                              type: string,
                              listener: EventListenerOrEventListenerObject,
                              options?: boolean | AddEventListenerOptions | undefined
                            ): void
                }
                removeEventListener: {
                            <K_1 extends 'cuechange'>(
                    type: K_1,
                    listener: (this: TextTrack, ev: TextTrackEventMap[K_1]) => any,
                    options?: boolean | EventListenerOptions | undefined
                  ): void
                            (
                              type: string,
                              listener: EventListenerOrEventListenerObject,
                              options?: boolean | EventListenerOptions | undefined
                            ): void
                }
                dispatchEvent: (event: Event) => boolean
              } | null
              addEventListener: {
                        <K_2 extends keyof TextTrackCueEventMap>(
                  type: K_2,
                  listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K_2]) => any,
                  options?: boolean | AddEventListenerOptions | undefined
                ): void
                        (
                          type: string,
                          listener: EventListenerOrEventListenerObject,
                          options?: boolean | AddEventListenerOptions | undefined
                        ): void
              }
              removeEventListener: {
                        <K_3 extends keyof TextTrackCueEventMap>(
                  type: K_3,
                  listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K_3]) => any,
                  options?: boolean | EventListenerOptions | undefined
                ): void
                        (
                          type: string,
                          listener: EventListenerOrEventListenerObject,
                          options?: boolean | EventListenerOptions | undefined
                        ): void
              }
              dispatchEvent: (event: Event) => boolean
            }
            readonly length: number
            getCueById: (id: string) => TextTrackCue | null
            [Symbol.iterator]: () => IterableIterator<TextTrackCue>
          } | null
          activeCues: {
            [x: number]: {
              endTime: number
              id: string
              onenter: ((this: TextTrackCue, ev: Event) => any) | null
              onexit: ((this: TextTrackCue, ev: Event) => any) | null
              pauseOnExit: boolean
              startTime: number
              readonly track: {
                readonly activeCues: any | null
                readonly cues: any | null
                readonly id: string
                readonly inBandMetadataTrackDispatchType: string
                readonly kind: TextTrackKind
                readonly label: string
                readonly language: string
                mode: TextTrackMode
                oncuechange: ((this: TextTrack, ev: Event) => any) | null
                addCue: (cue: TextTrackCue) => void
                removeCue: (cue: TextTrackCue) => void
                addEventListener: {
                            <K extends 'cuechange'>(
                    type: K,
                    listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any,
                    options?: boolean | AddEventListenerOptions | undefined
                  ): void
                            (
                              type: string,
                              listener: EventListenerOrEventListenerObject,
                              options?: boolean | AddEventListenerOptions | undefined
                            ): void
                }
                removeEventListener: {
                            <K_1 extends 'cuechange'>(
                    type: K_1,
                    listener: (this: TextTrack, ev: TextTrackEventMap[K_1]) => any,
                    options?: boolean | EventListenerOptions | undefined
                  ): void
                            (
                              type: string,
                              listener: EventListenerOrEventListenerObject,
                              options?: boolean | EventListenerOptions | undefined
                            ): void
                }
                dispatchEvent: (event: Event) => boolean
              } | null
              addEventListener: {
                        <K_2 extends keyof TextTrackCueEventMap>(
                  type: K_2,
                  listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K_2]) => any,
                  options?: boolean | AddEventListenerOptions | undefined
                ): void
                        (
                          type: string,
                          listener: EventListenerOrEventListenerObject,
                          options?: boolean | AddEventListenerOptions | undefined
                        ): void
              }
              removeEventListener: {
                        <K_3 extends keyof TextTrackCueEventMap>(
                  type: K_3,
                  listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K_3]) => any,
                  options?: boolean | EventListenerOptions | undefined
                ): void
                        (
                          type: string,
                          listener: EventListenerOrEventListenerObject,
                          options?: boolean | EventListenerOptions | undefined
                        ): void
              }
              dispatchEvent: (event: Event) => boolean
            }
            readonly length: number
            getCueById: (id: string) => TextTrackCue | null
            [Symbol.iterator]: () => IterableIterator<TextTrackCue>
          } | null
        }[]
    >
  selectedTrack: Ref<number>
  enableTrack: (track: number | UseMediaTextTrack, disableTracks?: boolean) => void
  disableTrack: (track?: number | UseMediaTextTrack) => void
  supportsPictureInPicture: boolean | undefined
  togglePictureInPicture: () => Promise<unknown>
  isPictureInPicture: Ref<boolean>
  onSourceError: EventHookOn<Event>
}
export type UseMediaControlsReturn = ReturnType<typeof useMediaControls>
```
