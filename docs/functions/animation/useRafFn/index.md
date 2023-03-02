# useRafFn

在每个 `requestAnimationFrame` 上调用函数。具有暂停和恢复控制。

## 演示

<demo src="./demo.vue" title="useRafFn" desc=""></demo>


```ts
export interface UseRafFnCallbackArguments {
  /**
   * 这一帧和最后一帧之间经过的时间。
   */
  delta: number
  /**
   * 时间戳
   */
  timestamp: DOMHighResTimeStamp
}
export interface UseRafFnOptions extends ConfigurableWindow {
  /**
   * 创建后立即启动 requestAnimationFrame 循环
   *
   * @default true
   */
  immediate?: boolean
}
/**
 * 在每个 `requestAnimationFrame` 上调用函数。具有暂停和恢复控制。
 *
 * @see https://vueuse.org/useRafFn
 * @param fn
 * @param options
 */
export declare function useRafFn(
  fn: (args: UseRafFnCallbackArguments) => void,
  options?: UseRafFnOptions
): Pausable
```
