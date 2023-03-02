# usePermission

响应式[`Permission API`](https://developer.mozilla.org/zh-CN/docs/Web/API/Permissions_API)。权限 API 提供的工具允许开发人员在权限方面实现更好的用户体验。


## 演示

<demo src="./demo.vue" title="usePermission" desc="用于操作页面权限"></demo>


## 类型

```ts
type DescriptorNamePolyfill =
  | 'accelerometer'
  | 'accessibility-events'
  | 'ambient-light-sensor'
  | 'background-sync'
  | 'camera'
  | 'clipboard-read'
  | 'clipboard-write'
  | 'gyroscope'
  | 'magnetometer'
  | 'microphone'
  | 'notifications'
  | 'payment-handler'
  | 'persistent-storage'
  | 'push'
  | 'speaker'
export type GeneralPermissionDescriptor =
  | PermissionDescriptor
  | {
    name: DescriptorNamePolyfill
  }
export interface UsePermissionOptions<Controls extends boolean>
  extends ConfigurableNavigator {
  /**
   * 公开更多控件
   *
   * @default false
   */
  controls?: Controls
}
export type UsePermissionReturn = Readonly<Ref<PermissionState | undefined>>
export interface UsePermissionReturnWithControls {
  state: UsePermissionReturn
  isSupported: Ref<boolean>
  query: () => Promise<PermissionStatus | undefined>
}
/**
 * 响应式权限 API
 *
 * @see https://vueuse.org/usePermission
 */
export declare function usePermission(
  permissionDesc:
  | GeneralPermissionDescriptor
  | GeneralPermissionDescriptor['name'],
  options?: UsePermissionOptions<false>
): UsePermissionReturn
export declare function usePermission(
  permissionDesc:
  | GeneralPermissionDescriptor
  | GeneralPermissionDescriptor['name'],
  options: UsePermissionOptions<true>
): UsePermissionReturnWithControls
```
