
# useInterval

响应式计数器在每个时间间隔增加

## 演示

<demo src="./demo.vue" title="useInterval" desc="响应式计数器在每个时间间隔增加"></demo>


## 用法

```ts {4}
import { useInterval } from '@vueuse/core'

const counter = useInterval(200)
```

```ts
const { counter, reset, pause, resume } = useInterval(200, { controls: true })
```

```ts
export interface UseIntervalOptions<Controls extends boolean> {
  /**
   * 暴漏更多属性
   *
   * @default false
   */
  controls?: Controls
  /**
   * 调用时立即执行更新
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 每个间隔回调
   */
  callback?: (count: number) => void
}
export interface UseIntervalControls {
  counter: Ref<number>
  reset: () => void
}
/**
 * 响应式计数器在每个时间间隔增加
 *
 * @see https://vueuse.org/useInterval
 * @param interval
 * @param options
 */
export declare function useInterval(
  interval?: MaybeComputedRef<number>,
  options?: UseIntervalOptions<false>
): Ref<number>
export declare function useInterval(
  interval: MaybeComputedRef<number>,
  options: UseIntervalOptions<true>
): UseIntervalControls & Pausable
```
