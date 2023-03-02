# useDeviceOrientation

响应式 [`DeviceOrientationEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/DeviceOrientationEvent)，为开发人员提供来自运行网页的设备的物理方向的信息。


## 演示

### 基础使用
<demo src="./demo.vue" title="useDeviceOrientation" desc=""></demo>


### 组件使用

```html
<UseDeviceOrientation v-slot="{ alpha, beta, gamma }">
  Alpha: {{ alpha }}
  Beta: {{ beta }}
  Gamma: {{ gamma }}
</UseDeviceOrientation>
```



| State      | Type     | Description                                                                                                                |
| ---------- | -------- |----------------------------------------------------------------------------------------------------------------------------|
| isAbsolute | `boolean` | 表示设备是否绝对提供方向数据。                                                                                                            |
| alpha      | `number` | 表示设备绕 z 轴运动的数字，以度数表示，值范围为 0 到 360。   |
| beta       | `number` | 表示设备绕 x 轴运动的数字，以度数表示，值范围为 -180 到 180。 |
| gamma      | `number` | 表示设备绕 y 轴运动的数字，以度数表示，值范围为 -90 到 90。 |

您可以在 MDN 上找到有关状态的[更多信息](https://developer.mozilla.org/zh-CN/docs/Web/API/DeviceOrientationEvent)。

## 类型

```ts
/**
 * 响应式 DeviceOrientationEvent
 *
 * @see https://vueuse.org/useDeviceOrientation
 * @param options
 */
export declare function useDeviceOrientation(options?: ConfigurableWindow): {
  isSupported: Ref<boolean>
  isAbsolute: Ref<boolean>
  alpha: Ref<number | null>
  beta: Ref<number | null>
  gamma: Ref<number | null>
}
export type UseDeviceOrientationReturn = ReturnType<typeof useDeviceOrientation>
```
