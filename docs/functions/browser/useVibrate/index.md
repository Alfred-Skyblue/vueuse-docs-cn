# useVibrate

响应式 [Vibration API](https://developer.mozilla.org/zh-CN/docs/Web/API/Vibration_API)

大多数现代移动设备都包含振动硬件，它可以让软件代码通过使设备振动来向用户提供物理反馈。

振动 API 为 Web 应用程序提供了访问该硬件（如果存在）的能力，如果设备不支持它则什么也不做。

## 演示

<demo src="./demo.vue" title="useVibrate" desc="您可以在手机浏览器进行测试，大部分浏览器是支持的（PS：iPhone不支持）"></demo>


## 类型

```ts
export interface UseVibrateOptions extends ConfigurableNavigator {
  /**
   *
   * 振动模式，一组值描述了设备振动和不振动的交替周期，数组中的每个值都被转换为一个整数，然后交替解释为设备应该振动的毫秒数和它停滞的毫秒数
   * @default []
   *
   */
  pattern?: MaybeComputedRef<number[] | number>
  /**
   * Interval to run a persistent vibration, in ms
   *
   * Pass `0` to disable
   *
   * @default 0
   *
   */
  interval?: number
}

export interface UseVibrateReturn {
  /**
   * 设备是否支持振动
   */
  isSupported: false

  /**
   * 振动模式
   */
  pattern: MaybeComputedRef<number | number[]>

  /**
   * 振动控制器
   * @param {number | number[]} pattern
   */
  vibrate: (pattern?: number | number[]) => void

  /**
   * 停止振动
   */
  stop: () => void
}

/**
 * 使设备震动
 *
 * @see https://vueuse.org/useVibrate
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
 * @param options
 */
export declare function useVibrate(options?: UseVibrateOptions): UseVibrateReturn
```
