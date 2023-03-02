# useClipboard

响应式操作[`剪贴板 API`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)。剪贴板 API 提供了响应剪贴板命令（剪切、复制和粘贴）与异步读写系统剪贴板的能力。从权限 [`Permissions API`](https://developer.mozilla.org/zh-CN/docs/Web/API/Permissions_API) 获取权限之后，才能访问剪贴板内容；如果用户没有授予权限，则不允许读取或更改剪贴板内容。

::: tip
`legacy=true` 时设置为剪贴板不可用时保留复制能力。它将使用 `execCommand` 处理文本复制。
:::

## 演示

<demo src="./demo.vue" title="useClipboard" desc="响应式操作剪切板复制粘贴"></demo>

## 类型

```ts
export interface UseClipboardOptions<Source> extends ConfigurableNavigator {
  /**
     * 启用剪贴板读取
     *
     * @default false
     */
  read?: boolean
  /**
     * 复制的值
     */
  source?: Source
  /**
     * 重置 `copied` ref 状态的毫秒数
     *
     * @default 1500
     */
  copiedDuring?: number
  /**
     * Whether fallback to document.execCommand('copy') if clipboard is undefined.
     *
     * @default false
     */
  legacy?: boolean
}
export interface UseClipboardReturn<Optional> {
  isSupported: Ref<boolean>
  text: ComputedRef<string>
  copied: ComputedRef<boolean>
  copy: Optional extends true ? (text?: string) => Promise<void> : (text: string) => Promise<void>
}
/**
 * Reactive Clipboard API.
 *
 * @see https://vueuse.org/useClipboard
 * @param options
 */
export declare function useClipboard(options?: UseClipboardOptions<undefined>): UseClipboardReturn<false>
export declare function useClipboard(options: UseClipboardOptions<MaybeComputedRef<string>>): UseClipboardReturn<true>
```
