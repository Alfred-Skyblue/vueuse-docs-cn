# useFileDialog

轻松打开文件对话框。

## 演示

<demo src="./demo.vue" title="useFileDialog" desc="操作文件对话框"></demo>

## 类型

```ts
export interface UseFileDialogOptions extends ConfigurableDocument {
  /**
     * 多选
     * @default true
     */
  multiple?: boolean
  /**
     * 接受的文件类型
     * @default '*'
     */
  accept?: string
  /**
     * 选择捕获文件的输入源。
     * @see [HTMLInputElement Capture](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture)
     */
  capture?: string
}
export interface UseFileDialogReturn {
  files: Ref<FileList | null>
  open: (localOptions?: Partial<UseFileDialogOptions>) => void
  reset: () => void
}
/**
 * Open file dialog with ease.
 *
 * @see https://vueuse.org/useFileDialog
 * @param options
 */
export declare function useFileDialog(options?: UseFileDialogOptions): UseFileDialogReturn
```
