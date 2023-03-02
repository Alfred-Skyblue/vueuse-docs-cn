
# useBluetooth

响应式

响应式 [蓝牙 API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)，提供连接低功耗蓝牙外围设备并与之交互的能力。

Web Bluetooth API 允许网站使用通用属性配置文件 (GATT) 通过蓝牙 4 无线标准发现设备并与之通信。

注意：它目前在 Android、Chrome、Mac 和 Windows 10 中部分实现。有关浏览器兼容性的完整概述，请参阅[`Web Bluetooth API Browser Compatibility`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#browser_compatibility)

::: warning
注意 `Web` 蓝牙 `API` 规范有许多需要注意的注意事项。请参阅`Web Bluetooth W3C` 草案报告，了解有关设备检测和连接的众多注意事项，此 API 在 Web Workers 中不可用（不通过 WorkerNavigator 公开）。
:::

## 演示

<demo src="./demo.vue" title="useBluetooth" desc="响应式蓝牙连接"></demo>

当设备配对并连接后，您就可以根据需要使用服务对象。

### 使用电池电量

此示例说明了如何使用 Web 蓝牙 API 读取电池电量，并通过低功耗蓝牙从附近的蓝牙设备电池信息获取通知。

在这里，我们使用 `characteristicvaluechanged` 事件侦听器来处理读取电池电量特征值。此事件侦听器也可以选择处理即将到来的通知。

```vue
<script lang="ts" setup>
import { pausableWatch, useBluetooth } from '@vueuse/core'

const { isSupported, isConnected, device, requestDevice, server } = useBluetooth({
  acceptAllDevices: true,
  optionalServices: ['battery_service'],
})

const batteryPercent = ref<undefined | number>()

const isGettingBatteryLevels = ref(false)

const getBatteryLevels = async () => {
  isGettingBatteryLevels.value = true

  // 获取电池服务
  const batteryService = await server.getPrimaryService('battery_service')

  // 获取当前电池电量
  const batteryLevelCharacteristic = await batteryService.getCharacteristic('battery_level')

  // 监听 `characteristicvaluechanged` 事件
  batteryLevelCharacteristic.addEventListener('characteristicvaluechanged', (event) => {
    batteryPercent.value = event.target.value.getUint8(0)
  })

  // 将收到的信息转换为数字：
  const batteryLevel = await batteryLevelCharacteristic.readValue()

  batteryPercent.value = await batteryLevel.getUint8(0)
}

const { stop } = pausableWatch(isConnected, (newIsConnected) => {
  if (!newIsConnected || !server.value || isGettingBatteryLevels.value)
    return
  // 尝试获取设备的电池电量：
  getBatteryLevels()
  // 我们只想在初始连接上运行它，因为我们将使用事件侦听器来处理更新：
  stop()
})
</script>

<template>
  <button @click="requestDevice()">
    Request Bluetooth Device
  </button>
</template>
```

## 类型

```ts
/// <reference types="@types/web-bluetooth" />
export interface UseBluetoothRequestDeviceOptions {
  /**
     * 一组 BluetoothScanFilters。此过滤器由一组 BluetoothServiceUUID、一个名称参数和一个名称前缀参数组成。
     */
  filters?: BluetoothLEScanFilter[] | undefined
  /**
     * 一组 BluetoothServiceUUID。
     */
  optionalServices?: BluetoothServiceUUID[] | undefined
}
export interface UseBluetoothOptions extends UseBluetoothRequestDeviceOptions, ConfigurableNavigator {
  /**
     * 布尔值，表示请求脚本可以接受所有蓝牙设备。默认为 false。 这可能会导致一堆不相关的设备显示在选择器中，并且由于没有过滤器而浪费能量。谨慎使用。
     */
  acceptAllDevices?: boolean
}
export declare function useBluetooth(options?: UseBluetoothOptions): UseBluetoothReturn
export interface UseBluetoothReturn {
  isSupported: Ref<boolean>
  isConnected: ComputedRef<boolean>
  device: Ref<BluetoothDevice | undefined>
  requestDevice: () => Promise<void>
  server: Ref<BluetoothRemoteGATTServer | undefined>
  error: Ref<unknown | null>
}
```
