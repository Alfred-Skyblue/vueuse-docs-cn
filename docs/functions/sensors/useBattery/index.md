# useBattery

[Battery Status API](https://developer.mozilla.org/zh-CN/docs/Web/API/Battery_Status_API)，通常称为 Battery API，提供有关系统电池电量的信息，并让您在电池电量或充电状态发生变化时收到发送的事件通知。这可用于调整您的应用程序的资源使用情况，以减少电池电量不足时的电池消耗，或在电池电量耗尽之前保存更改以防止数据丢失。

## 演示

### 基础使用
<demo src="./demo.vue" title="useBattery" desc="查看电池信息"></demo>

### 组件使用

```html
<UseBattery v-slot="{ charging }">
    正在充电: {{ charging }}
</UseBattery>
```
## 类型

```ts
export interface BatteryManager extends EventTarget {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number
}
/**
 * 操作 Battery Status API.
 *
 * @see https://vueuse.org/useBattery
 * @param options
 */
export declare function useBattery({ navigator }?: ConfigurableNavigator): {
  isSupported: Ref<boolean>
  charging: Ref<boolean>
  chargingTime: Ref<number>
  dischargingTime: Ref<number>
  level: Ref<number>
}
export type UseBatteryReturn = ReturnType<typeof useBattery>
```
