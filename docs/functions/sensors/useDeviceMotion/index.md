# useDeviceMotion

响应式 [`DeviceMotionEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/DeviceMotionEvent)，为开发人员提供有关设备位置和方向变化速度的信息。

## 演示

### 基础使用

<demo src="./demo.vue" title="useDeviceMotion" desc=""></demo>

### 组件使用

```html
<UseDeviceMotion v-slot="{ acceleration }">
    Acceleration: {{ acceleration }}
</UseDeviceMotion>
```

| State   | Type     | Description                                  |
| ---------| -------- |----------------------------------------------|
| acceleration  | `object` | 提供设备在 X、Y 和 Z 三个轴上的加速度的对象。                   |
| accelerationIncludingGravity | `object` | 在重力作用下，在 X、Y 和 Z 三个轴上提供设备的加速度。          |
| rotationRate                 | `object` |给出设备方向在三个方向轴 alpha、beta 和 gamma 上的变化率。. |
| interval                     | `Number` | 表示从设备获取数据的时间间隔（以毫秒为单位）。                      |

您可以在 MDN 上找到有关状态的[更多信息](https://developer.mozilla.org/zh-CN/docs/Web/API/DeviceMotionEvent)。

## 类型

```ts
export interface DeviceMotionOptions
  extends ConfigurableWindow,
  ConfigurableEventFilter {}
/**
 * 响应式 DeviceMotionEvent
 *
 * @see https://vueuse.org/useDeviceMotion
 * @param options
 */
export declare function useDeviceMotion(options?: DeviceMotionOptions): {
  acceleration: Ref<DeviceMotionEventAcceleration | null>
  accelerationIncludingGravity: Ref<DeviceMotionEventAcceleration | null>
  rotationRate: Ref<DeviceMotionEventRotationRate | null>
  interval: Ref<number>
}
export type UseDeviceMotionReturn = ReturnType<typeof useDeviceMotion>
```
