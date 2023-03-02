# useFps

响应式 FPS（每秒帧数）。

## 演示

<demo src="./demo.vue" title="useFps" desc=""></demo>


## 类型

```ts
export interface UseFpsOptions {
  /**
     * 计算每 every 帧的 FPS。
   * @default 10
     */
  every?: number
}
export declare function useFps(options?: UseFpsOptions): Ref<number>
```
