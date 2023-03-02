# useTextDirection

响应式操作元素[文本方向](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/dir).


## 演示

<demo src="./demo.vue" title="useTextDirection" desc="操作文本方向"></demo>


## 类型

```ts
export type UseTextDirectionValue = 'ltr' | 'rtl' | 'auto'
export interface UseTextDirectionOptions extends ConfigurableDocument {
  /**
   * 目标元素的 CSS 选择器
   * @default 'html'
   */
  selector?: string
  /**
   * 使用 MutationObserve 观察 DOM 的变化
   *
   * @default false
   */
  observe?: boolean
  /**
   * 初始值
   * @default 'ltr'
   */
  initialValue?: UseTextDirectionValue
}
/**
 * 响应式操作元素内容文本方向。
 *
 * @see https://vueuse.org/useTextDirection
 */
export declare function useTextDirection(
  options?: UseTextDirectionOptions
): WritableComputedRef<UseTextDirectionValue>
```
