# useTextareaAutosize

根据内容自动更新文本区域的高度。

## 演示

<demo src="./demo.vue" title="useTextareaAutosize" desc="根据内容自动更新文本区域的高度"></demo>

## 类型

```ts
export interface UseTextareaAutosizeReturn {
  /**
   * 要自动调整大小的 Textarea 元素
   */
  textarea: Ref<HTMLTextAreaElement>
  /**
   * 文本内容
   */
  input: Ref<string>

  /**
   * 触发调整大小
   */
  triggerResize: () => void
}
export interface UseTextareaAutosizeOptions {
  // 要自动调整大小的 Textarea 元素
  element?: MaybeRef<HTMLTextAreaElement | undefined>
  /** 文本内容. */
  input?: MaybeRef<string | undefined>
  /** 监听应该触发文本区域调整大小的来源. */
  watch?: WatchSource | Array<WatchSource>
  /** 当文本区域大小改变时调用的函数. */
  onResize?: () => void
}
export declare function useTextareaAutosize(
  options?: UseTextareaAutosizeOptions
): {
  textarea: Ref<HTMLTextAreaElement>
  input: Ref<string>
  triggerResize: () => void
}
```
