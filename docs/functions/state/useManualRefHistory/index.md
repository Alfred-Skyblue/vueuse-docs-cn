# useManualRefHistory

和 [`useRefHistory`](../useRefHistory/) 不同，它需要调用 `commit` 手动跟踪 `ref` 的更改历史，提供撤消和重做功能

## 演示

<demo src="./demo.vue" title="useManualRefHistory" desc="手动跟踪历史记录"></demo>

## 类型

```ts
export interface UseRefHistoryRecord<T> {
  snapshot: T
  timestamp: number
}
export interface UseManualRefHistoryOptions<Raw, Serialized = Raw> {
  /**
     * 要保留的最大历史记录数，默认为无限制。
     */
  capacity?: number
  /**
     * 快照拷贝，开启时默认使用 JSON.parse(JSON.stringify()) 进行深拷贝，也可以传入自定义的拷贝函数
     * @default false
     */
  clone?: boolean | CloneFn<Raw>
  /**
     * 将数据序列化到历史中
     */
  dump?: (v: Raw) => Serialized
  /**
     * 反序列化历史数据
     */
  parse?: (v: Serialized) => Raw
  /**
     * 设置数据源
     */
  setSource?: (source: Ref<Raw>, v: Raw) => void
}
export interface UseManualRefHistoryReturn<Raw, Serialized> {
  /**
     * 源数据
     */
  source: Ref<Raw>
  /**
     * 历史记录
     */
  history: Ref<UseRefHistoryRecord<Serialized>[]>
  /**
     * 最后一个历史记录
     */
  last: Ref<UseRefHistoryRecord<Serialized>>
  /**
     * 用于撤消记录的数组
     */
  undoStack: Ref<UseRefHistoryRecord<Serialized>[]>
  /**
     * 用于重做的记录数组
     */
  redoStack: Ref<UseRefHistoryRecord<Serialized>[]>
  /**
     * 表示是否可以撤消
     */
  canUndo: Ref<boolean>
  /**
     * 表示是否可以重做
     */
  canRedo: Ref<boolean>
  /**
     * 撤销
     */
  undo: () => void
  /**
     * 重做
     */
  redo: () => void
  /**
     * 清空历史记录
     */
  clear: () => void
  /**
     * 创建新的历史记录
     */
  commit: () => void
  /**
     * 用最新的数据重置历史记录
     */
  reset: () => void
}
/**
 * 手动跟踪 ref 的更改历史，提供撤消和重做功能
 *
 * @param source
 * @param options
 */
export declare function useManualRefHistory<Raw, Serialized = Raw>(
  source: Ref<Raw>,
  options?: UseManualRefHistoryOptions<Raw, Serialized>
): UseManualRefHistoryReturn<Raw, Serialized>
```
