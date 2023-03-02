# useMemory

响应式获取[浏览器内存使用情况](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/memory)。

## 演示

<demo src="./demo.vue" title="useMemory" desc="响应式获取浏览器内存使用情况"></demo>

## 类型

```ts
/**
 * Performance.memory
 *
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/memory
 */
export interface MemoryInfo {
  /**
     * 上下文可用的堆的最大体积（以字节为单位）
     */
  readonly jsHeapSizeLimit: number
  /**
     *  已分配的堆体积，以字节计算。
     */
  readonly totalJSHeapSize: number
  /**
     * 当前 JS 堆活跃段（segment）的体积，以字节计算。
     */
  readonly usedJSHeapSize: number
  [Symbol.toStringTag]: 'MemoryInfo'
}
export interface UseMemoryOptions extends UseIntervalFnOptions {
  interval?: number
}
/**
 * 响应式获取浏览器内存使用情况
 *
 * @see https://vueuse.org/useMemory
 * @param options
 */
export declare function useMemory(options?: UseMemoryOptions): {
  isSupported: Ref<boolean>
  memory: Ref<MemoryInfo | undefined>
}
export type UseMemoryReturn = ReturnType<typeof useMemory>
```
