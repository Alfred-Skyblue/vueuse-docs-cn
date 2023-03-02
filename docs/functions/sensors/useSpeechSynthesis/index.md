
# useSpeechSynthesis

响应式 [SpeechSynthesis
](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)，它可以用于获取设备上关于可用的合成声音的信息，开始、暂停语音，或除此之外的其他命令。

> [查看兼容性](https://caniuse.com/mdn-api_speechsynthesis)

## 演示

<demo src="./demo.vue" title="useSpeechSynthesis" desc="语音合成"></demo>

## 用法

```ts
import { useSpeechSynthesis } from '@vueuse/core'

const {
  isSupported,
  isPlaying,
  status,
  voiceInfo,
  utterance,
  error,
  stop,

  toggle,
  speak,
} = useSpeechSynthesis()
```

### Options

以下显示了选项的默认值，它们将直接传递给 [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

```ts
useSpeechSynthesis({
  lang: 'en-US',
  pitch: 1,
  rate: 1,
  volume: 1,
})
```

## 类型

```ts
export type UseSpeechSynthesisStatus = 'init' | 'play' | 'pause' | 'end'
export interface UseSpeechSynthesisOptions extends ConfigurableWindow {
  /**
   * 语音合成语言
   *
   * @default 'en-US'
   */
  lang?: MaybeComputedRef<string>
  /**
   * 获取并设置语音的音高。
   *
   * @default 1
   */
  pitch?: SpeechSynthesisUtterance['pitch']
  /**
   * 获取和设置话语的朗读速度。
   *
   * @default 1
   */
  rate?: SpeechSynthesisUtterance['rate']
  /**
   * 获取并设置将用于说出话语的声音。
   */
  voice?: MaybeRef<SpeechSynthesisVoice>
  /**
   * 获取和设置话语的音量。
   *
   * @default 1
   */
  volume?: SpeechSynthesisUtterance['volume']
}
/**
 * 响应式语音合成
 *
 * @see https://vueuse.org/useSpeechSynthesis
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis SpeechSynthesis
 * @param options
 */
export declare function useSpeechSynthesis(
  text: MaybeComputedRef<string>,
  options?: UseSpeechSynthesisOptions
): {
  isSupported: Ref<boolean>
  isPlaying: Ref<boolean>
  status: Ref<UseSpeechSynthesisStatus>
  utterance: ComputedRef<SpeechSynthesisUtterance>
  error: Ref<SpeechSynthesisErrorEvent | undefined>
  stop: () => void
  toggle: (value?: boolean) => void
  speak: () => void
}
export type UseSpeechSynthesisReturn = ReturnType<typeof useSpeechSynthesis>
```
