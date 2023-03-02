# useDevicesList

[`enumerateDevices API`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/enumerateDevices)，列出可用输入输出设备的响应式列表

## 演示

### 基础用法

<demo src="./demo.vue" title="useDevicesList" desc="列出可用输入输出设备的响应式列表"></demo>

### 组件用法

```html
<UseDevicesList v-slot="{ videoInputs, audioInputs, audioOutputs }">
  Cameras: {{ videoInputs }}
  Microphones: {{ audioInputs }}
  Speakers: {{ audioOutputs }}
</UseDevicesList>
```

## 类型

```ts
export interface UseDevicesListOptions extends ConfigurableNavigator {
  onUpdated?: (devices: MediaDeviceInfo[]) => void
  /**
     * 未授权立即申请权限，否则label和deviceIds可能为空
     * @default false
     */
  requestPermissions?: boolean
  /**
     * 请求媒体权限类型
     *
     * @default { audio: true, video: true }
     */
  constraints?: MediaStreamConstraints
}
export interface UseDevicesListReturn {
  /**
     * 所有设备
     */
  devices: Ref<MediaDeviceInfo[]>
  videoInputs: ComputedRef<MediaDeviceInfo[]>
  audioInputs: ComputedRef<MediaDeviceInfo[]>
  audioOutputs: ComputedRef<MediaDeviceInfo[]>
  permissionGranted: Ref<boolean>
  ensurePermissions: () => Promise<boolean>
  isSupported: Ref<boolean>
}
/**
 * 列出可用输入输出设备的响应式列表
 *
 * @see https://vueuse.org/useDevicesList
 * @param options
 */
export declare function useDevicesList(
  options?: UseDevicesListOptions
): UseDevicesListReturn
```
