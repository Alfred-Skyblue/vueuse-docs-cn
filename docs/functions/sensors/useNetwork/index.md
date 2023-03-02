# useNetwork

响应式网络状态。[网络状态 API](https://developer.mozilla.org/zh-CN/docs/Web/API/Network_Information_API) 可以获取到系统的网络连接信息，比如说连接方式是 WiFi 还是蜂窝。应用程序可以根据此信息为用户展现不同清晰度的内容。该 API 是由 NetworkInformation 接口和 Navigator 接口上新增的一个 connection 属性组成的。



## 演示

### 基础使用

<demo src="./demo.vue" title="useNetwork" desc="响应式网络状态"></demo>

### 组件使用

```html
<UseNetwork v-slot="{ isOnline, type }">
    Is Online: {{ isOnline }}
    Type: {{ type }}
<UseNetwork>
```


## 用法

```ts
import { useNetwork } from '@vueuse/core'

const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork()

console.log(isOnline.value)
```

要用作对象，请将其包裹reactive()
```ts
import { reactive } from 'vue'

const network = reactive(useNetwork())

console.log(network.isOnline)
```

## 类型

```ts
export type NetworkType =
    | 'bluetooth'
    | 'cellular'
    | 'ethernet'
    | 'none'
    | 'wifi'
    | 'wimax'
    | 'other'
    | 'unknown'
export type NetworkEffectiveType = 'slow-2g' | '2g' | '3g' | '4g' | undefined
export interface NetworkState {
  isSupported: Ref<boolean>
  /**
   * 当前是否已连接。
   */
  isOnline: Ref<boolean>
  /**
   * 自用户上次连接以来的时间
   */
  offlineAt: Ref<number | undefined>
  /**
   * 重新连接标识
   */
  onlineAt: Ref<number | undefined>
  /**
   * 下载速度（以 Mbps 为单位）。
   */
  downlink: Ref<number | undefined>
  /**
   * 可达到的最大下载速度（以 Mbps 为单位）。
   */
  downlinkMax: Ref<number | undefined>
  /**
   * 检测到的有效速度类型。
   */
  effectiveType: Ref<NetworkEffectiveType | undefined>
  /**
   * 返回了当前连接下评估的往返时延。
   */
  rtt: Ref<number | undefined>
  /**
   * 只读属性，如果用户设备上设置了减少数据使用的选项时返回 `true` .
   */
  saveData: Ref<boolean | undefined>
  /**
   * 检测到的网络连接类型。
   */
  type: Ref<NetworkType>
}
/**
 * 响应式网络状态.
 *
 * @see https://vueuse.org/useNetwork
 * @param options
 */
export declare function useNetwork(
  options?: ConfigurableWindow
): Readonly<NetworkState>
export type UseNetworkReturn = ReturnType<typeof useNetwork>
```
