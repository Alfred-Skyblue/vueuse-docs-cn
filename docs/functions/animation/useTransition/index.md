
# useTransition

值之间的转换

## 演示

<demo src="./demo.vue" title="useTransition" desc=""></demo>


## 用法

对于简单的转换，提供一个数字源值来观察。更改后，输出将转换为新值。如果源在过渡过程中发生变化，则新的过渡将从前一个过渡中断的地方开始。

```ts
import { ref } from 'vue'
import { TransitionPresets, useTransition } from '@vueuse/core'

const source = ref(0)

const output = useTransition(source, {
  duration: 1000,
  transition: TransitionPresets.easeInOutCubic,
})
```

要同步转换，请使用数字数组。例如，这里是我们如何在颜色之间转换。

```ts
const source = ref([0, 0, 0])

const output = useTransition(source)

const color = computed(() => {
  const [r, g, b] = output.value
  return `rgb(${r}, ${g}, ${b})`
})
```

可以使用贝塞尔曲线自定义过渡缓动。以这种方式定义的过渡效果与[CSS 缓动函数](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#easing_functions)相同。

```ts
useTransition(source, {
  transition: [0.75, 0, 0.25, 1],
})
```

以下转换可通过 `TransitionPresets` 常量获得。

- [`linear`](https://cubic-bezier.com/#0,0,1,1)
- [`easeInSine`](https://cubic-bezier.com/#.12,0,.39,0)
- [`easeOutSine`](https://cubic-bezier.com/#.61,1,.88,1)
- [`easeInOutSine`](https://cubic-bezier.com/#.37,0,.63,1)
- [`easeInQuad`](https://cubic-bezier.com/#.11,0,.5,0)
- [`easeOutQuad`](https://cubic-bezier.com/#.5,1,.89,1)
- [`easeInOutQuad`](https://cubic-bezier.com/#.45,0,.55,1)
- [`easeInCubic`](https://cubic-bezier.com/#.32,0,.67,0)
- [`easeOutCubic`](https://cubic-bezier.com/#.33,1,.68,1)
- [`easeInOutCubic`](https://cubic-bezier.com/#.65,0,.35,1)
- [`easeInQuart`](https://cubic-bezier.com/#.5,0,.75,0)
- [`easeOutQuart`](https://cubic-bezier.com/#.25,1,.5,1)
- [`easeInOutQuart`](https://cubic-bezier.com/#.76,0,.24,1)
- [`easeInQuint`](https://cubic-bezier.com/#.64,0,.78,0)
- [`easeOutQuint`](https://cubic-bezier.com/#.22,1,.36,1)
- [`easeInOutQuint`](https://cubic-bezier.com/#.83,0,.17,1)
- [`easeInExpo`](https://cubic-bezier.com/#.7,0,.84,0)
- [`easeOutExpo`](https://cubic-bezier.com/#.16,1,.3,1)
- [`easeInOutExpo`](https://cubic-bezier.com/#.87,0,.13,1)
- [`easeInCirc`](https://cubic-bezier.com/#.55,0,1,.45)
- [`easeOutCirc`](https://cubic-bezier.com/#0,.55,.45,1)
- [`easeInOutCirc`](https://cubic-bezier.com/#.85,0,.15,1)
- [`easeInBack`](https://cubic-bezier.com/#.36,0,.66,-.56)
- [`easeOutBack`](https://cubic-bezier.com/#.34,1.56,.64,1)
- [`easeInOutBack`](https://cubic-bezier.com/#.68,-.6,.32,1.6)

对于更复杂的转换，可以提供自定义函数。

```ts
const easeOutElastic = (n) => {
  return n === 0
    ? 0
    : n === 1
      ? 1
      : (2 ** (-10 * n)) * Math.sin((n * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1
}

useTransition(source, {
  transition: easeOutElastic,
})
```
要控制过渡何时开始，请设置一个 `delay` 值。围绕转换编排行为，定义 `onStarted` 或 `onFinished` 回调。

```ts
useTransition(source, {
  delay: 1000,
  onStarted() {
    // 过渡开始时调用
  },
  onFinished() {
    // 过渡结束后调用
  },
})
```

要暂时停止转换，请定义一个布尔值`disabled`属性。请注意，这与 `duration:0` 的不同。禁用转换同步跟踪源值。它们不遵守 `delay`，也不会触发 `onStarted` 或 `onFinished` 回调。


## 类型

```ts
/**
 * 贝塞尔点
 */
export type CubicBezierPoints = [number, number, number, number]
/**
 * 缓动函数
 */
export type EasingFunction = (n: number) => number
/**
 * 过渡选项
 */
export interface UseTransitionOptions {
  /**
   * 开始转换前等待的毫秒数
   */
  delay?: MaybeRef<number>
  /**
   * 禁用过渡
   */
  disabled?: MaybeRef<boolean>
  /**
   * 过渡持续时间（以毫秒为单位）
   */
  duration?: MaybeRef<number>
  /**
   * 过渡完成后执行的回调
   */
  onFinished?: () => void
  /**
   * 过渡开始时的回调
   */
  onStarted?: () => void
  /**
   * 用于计算过渡值的缓动函数或贝塞尔点
   */
  transition?: MaybeRef<EasingFunction | CubicBezierPoints>
}
/**
 * 值之间的转换
 *
 * @see https://easings.net
 */
export declare const TransitionPresets: Record<
  | 'easeInSine'
  | 'easeOutSine'
  | 'easeInOutSine'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'
  | 'easeInExpo'
  | 'easeOutExpo'
  | 'easeInOutExpo'
  | 'easeInCirc'
  | 'easeOutCirc'
  | 'easeInOutCirc'
  | 'easeInBack'
  | 'easeOutBack'
  | 'easeInOutBack',
  CubicBezierPoints
> & {
  linear: EasingFunction
}
export declare function useTransition(
  source: Ref<number>,
  options?: UseTransitionOptions
): ComputedRef<number>
export declare function useTransition<T extends MaybeRef<number>[]>(
  source: [...T],
  options?: UseTransitionOptions
): ComputedRef<{
  [K in keyof T]: number
}>
export declare function useTransition<T extends Ref<number[]>>(
  source: T,
  options?: UseTransitionOptions
): ComputedRef<number[]>
```
