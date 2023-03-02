# useDebouncedRefHistory

对 [`useRefHistory`](../useRefHistory/) 进行防抖包装

## 演示

<demo src="./demo.vue" title="useDebouncedRefHistory" desc="当计数器的值开始改变时，此函数会在 1000 毫秒后为您的计数器保存快照"></demo>

## 类型

```ts
export interface UseRefHistoryOptions<Raw, Serialized = Raw> extends ConfigurableEventFilter {
  /**
     * 深度监听，当你要监听一个引用类型时，可以设置为 true，它会在属性变化时对历史记录中保存的数据进行深拷贝
     * @default false
     */
  deep?: boolean
  /**
     * flush 选项允许更好的控制记录的时机，默认为 'pre' 可以为：'pre'，'post'，'sync' 它的工作方式与 watch 和 watchEffect 中的flush 选项相同
     *
     * @default 'pre'
     */
  flush?: 'pre' | 'post' | 'sync'
  /**
     * 要保留的最大历史记录数。默认为无限制
     */
  capacity?: number
  /**
     * 快照拷贝，开启时默认使用 JSON.parse(JSON.stringify()) 进行深拷贝，也可以传入自定义的拷贝函数
     * @default false
     */
  clone?: boolean | ((v: Raw) => Raw)
  /**
     * 将数据序列化到历史中
     */
  dump?: (v: Raw) => Serialized
  /**
     * 反序列化历史数据
     */
  parse?: (v: Serialized) => Raw
}
export interface UseRefHistoryReturn<Raw, Serialized> extends UseManualRefHistoryReturn<Raw, Serialized> {
  /**
     * 表示是否正在追踪变化
     */
  isTracking: Ref<boolean>
  /**
     * 暂停跟踪变化
     */
  pause(): void
  /**
     * 恢复跟踪变化
     *
     * @param [commit] 如果为 true，恢复后将创建历史记录
     */
  resume(commit?: boolean): void
  /**
     * 批量操作的便捷方法
     * @param fn
     */
  batch(fn: (cancel: Fn) => void): void
  /**
     * 清空历史记录并且停止监听
     */
  dispose(): void
}

/**
 * 对 [`useRefHistory`](../useRefHistory/) 进行防抖包装
 * @param source
 * @param options
 */
export declare function useDebouncedRefHistory<Raw, Serialized = Raw>(
  source: Ref<Raw>,
  options?: Omit<UseRefHistoryOptions<Raw, Serialized>, 'eventFilter'> & {
    debounce?: MaybeComputedRef<number>
  }
): UseRefHistoryReturn<Raw, Serialized>
```
