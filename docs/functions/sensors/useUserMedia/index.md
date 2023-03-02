# useUserMedia

响应式 [`mediaDevices.getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) 会提示用户给予使用媒体输入的许可，媒体输入会产生一个MediaStream，里面包含了请求的媒体类型的轨道。此流可以包含一个视频轨道（来自硬件或者虚拟视频源，比如相机、视频采集设备和屏幕共享服务等等）、一个音频轨道（同样来自硬件或虚拟音频源，比如麦克风、A/D 转换器等等），也可能是其它轨道类型。


## 演示

<demo src="./demo.vue" title="useUserMedia" desc=""></demo>


## 用法

```ts
import { useUserMedia } from '@vueuse/core'

const { stream, start } = useUserMedia()

start()
```

```ts
const video = document.getElementById('video')

watchEffect(() => {
  // 在视频元素上预览
  video.srcObject = stream.value
})
```

### 设备

```ts
import { useDevicesList, useUserMedia } from '@vueuse/core'

const {
  videoInputs: cameras,
  audioInputs: microphones,
} = useDevicesList({
  requestPermissions: true,
})
const currentCamera = computed(() => cameras.value[0]?.deviceId)
const currentMicrophone = computed(() => microphones.value[0]?.deviceId)

const { stream } = useUserMedia({
  videoDeviceId: currentCamera,
  audioDeviceId: currentMicrophone,
})
```


## 类型

```ts
export interface UseUserMediaOptions extends ConfigurableNavigator {
  /**
   * 是否启用流
   * @default false
   */
  enabled?: MaybeRef<boolean>
  /**
   * 输入设备 ID 更改时重新创建流
   *
   * @default true
   */
  autoSwitch?: MaybeRef<boolean>
  /**
   * 视频输入的设备 ID 当传递给 `undefined` 时，将使用默认设备。将“false”或“none”传递给禁用的视频输入
   * @default undefined
   */
  videoDeviceId?: MaybeRef<string | undefined | false | 'none'>
  /**
   * audi 输入的设备 ID 当传递给 `undefined` 时，将使用默认设备。将“false”或“none”传递给禁用的音频输入
   *
   * @default undefined
   */
  audioDeviceId?: MaybeRef<string | undefined | false | 'none'>
}
/**
 * 响应式 mediaDevices.getUserMedia 流式传输
 *
 * @see https://vueuse.org/useUserMedia
 * @param options
 */
export declare function useUserMedia(options?: UseUserMediaOptions): {
  isSupported: Ref<boolean>
  stream: Ref<MediaStream | undefined>
  start: () => Promise<MediaStream | undefined>
  stop: () => void
  restart: () => Promise<MediaStream | undefined>
  videoDeviceId: Ref<string | false | undefined>
  audioDeviceId: Ref<string | false | undefined>
  enabled: Ref<boolean>
  autoSwitch: Ref<boolean>
}
export type UseUserMediaReturn = ReturnType<typeof useUserMedia>
```
