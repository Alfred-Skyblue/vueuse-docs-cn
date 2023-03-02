# useConfirmDialog

创建事件钩子以支持模态框和确认对话框关联。

可以在模板上使用函数，钩子是模态框、对话框或其他需要用户确认操作的业务逻辑的方便框架。


## 演示

<demo src="./demo.vue" title="useConfirmDialog" desc=""></demo>


## 函数和钩子

- `reveal()` - 触发 `onReveal` 钩子并设置 `revealed.value` 为 `true` 返回 Promise.resolves 到 `confirm()`  `cancel()`。
- `confirm()` - 设置 `isRevealed.value` 为 `false` 并触发 `onConfirm` 钩子。
- `cancel()` - 设置 `isRevealed.value` 为 `false` 并触发 `onCancel` 钩子.

## 用法

### 使用 hooks

```html
<script setup>
import { useConfirmDialog } from '@vueuse/core'

const {
  isRevealed,
  reveal,
  confirm,
  cancel,
  onReveal,
  onConfirm,
  onCancel,
} = useConfirmDialog()
</script>

<template>
  <button @click="reveal">打开弹框</button>

  <teleport to="body">
    <div v-if="isRevealed" class="modal-bg">
      <div class="modal">
        <h2>Confirm?</h2>
        <button @click="confirm">Yes</button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
  </teleport>
</template>
```

### Promise

如果您更喜欢使用 Promise

```html
<script setup>
import { useConfirmDialog } from '@vueuse/core'

const {
  isRevealed,
  reveal,
  confirm,
  cancel,
} = useConfirmDialog()

const openDialog = async () => {
  const { data, isCanceled } = await reveal()
  if (!isCanceled) {
    console.log(data)
  }
}
</script>

<template>
  <button @click="openDialog">打开弹框</button>

  <teleport to="body">
    <div v-if="isRevealed" class="modal-layout">
      <div class="modal">
        <h2>Confirm?</h2>
        <button @click="confirm(true)">Yes</button>
        <button @click="confirm(false)">No</button>
      </div>
    </div>
  </teleport>
</template>
```

## 类型

```ts
export type UseConfirmDialogRevealResult<C, D> =
  | {
    data?: C
    isCanceled: false
  }
  | {
    data?: D
    isCanceled: true
  }
export interface UseConfirmDialogReturn<RevealData, ConfirmData, CancelData> {
  /**
   * 显示状态
   */
  isRevealed: ComputedRef<boolean>
  /**
   * 打开对话框。创建 Promise 并返回它。触发 `onReveal` hooks。
   */
  reveal: (
    data?: RevealData
  ) => Promise<UseConfirmDialogRevealResult<ConfirmData, CancelData>>
  /**
   * 确认并关闭对话框。在 `onConfirm` 中触发回调。使用 `data` 解决来自 `reveal()` 的Promise，使用 `false` 值解决 `isCanceled` ref 的Promise。可以接受任何数据并将其传递给 `onConfirm` 钩子。
   */
  confirm: (data?: ConfirmData) => void
  /**
   * 取消并关闭对话框。在 `onCancel` 挂钩中触发回调。使用 `data` 解决来自 `reveal()` 的Promise，使用 `true` 值解决 `isCanceled` ref 的Promise。可以接受任何数据并将其传递给 `onCancel` 挂钩。
   */
  cancel: (data?: CancelData) => void
  /**
   * 在对话框创建之前触发事件。
   */
  onReveal: EventHookOn<RevealData>
  /**
   * 在 `confirm()` 上调用的事件。从 `confirm` 函数获取数据对象。
   */
  onConfirm: EventHookOn<ConfirmData>
  /**
   * 在 `cancel()` 上调用事件。从“取消”函数获取数据对象。
   */
  onCancel: EventHookOn<CancelData>
}
/**
 * 创建事件钩子以支持模态框和确认对话框关联。
 *
 * @see https://vueuse.org/useConfirmDialog/
 * @param revealed `boolean` `ref` that handles a modal window
 */
export declare function useConfirmDialog<
  RevealData = any,
  ConfirmData = any,
  CancelData = any
>(
  revealed?: Ref<boolean>
): UseConfirmDialogReturn<RevealData, ConfirmData, CancelData>
```
