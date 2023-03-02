# useSpeechRecognition

响应式[语音识别 SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)，Web Speech API 的 `SpeechRecognition` 接口是识别服务的控制器接口；这也处理从识别服务发送的 `SpeechRecognitionEvent (en-US)`。

> [查看兼容性](https://caniuse.com/mdn-api_speechrecognitionevent)

## 演示


<demo src="./demo.vue" title="useSpeechRecognition" desc="语音识别"></demo>



## 用法

```ts
import { useSpeechRecognition } from '@vueuse/core'

const {
  isSupported,
  isListening,
  isFinal,
  result,
  start,
  stop,
} = useSpeechRecognition()
```

### 选项

以下显示了选项的默认值，它们将直接传递给[SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).

```ts
useSpeechRecognition({
  lang: 'en-US',
  interimResults: true,
  continuous: true,
})
```

## 类型

```ts
export interface UseSpeechRecognitionOptions extends ConfigurableWindow {
  /**
   * 控制是为每次识别返回连续结果，还是仅返回单个结果。
   *
   * @default true
   */
  continuous?: boolean
  /**
   * 控制是否应返回临时结果 (true) 或不返回 (false)。临时结果是尚未最终确定的结果
   *
   * @default true
   */
  interimResults?: boolean
  /**
   * 语音识别语言
   *
   * @default 'en-US'
   */
  lang?: MaybeComputedRef<string>
}
/**
 *
 * 响应式语音识别
 *
 * @see https://vueuse.org/useSpeechRecognition
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition SpeechRecognition
 * @param options
 */
export declare function useSpeechRecognition(
  options?: UseSpeechRecognitionOptions
): {
  isSupported: Ref<boolean>
  isListening: Ref<boolean>
  isFinal: Ref<boolean>
  recognition: SpeechRecognition | undefined
  result: Ref<string>
  error: Ref<SpeechRecognitionErrorEvent | undefined>
  toggle: (value?: boolean) => void
  start: () => void
  stop: () => void
}
export type UseSpeechRecognitionReturn = ReturnType<typeof useSpeechRecognition>
```
