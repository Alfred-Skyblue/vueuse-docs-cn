# useFocusWithin

用于跟踪元素或其后代之一是否具有焦点的响应式工具。它是匹配 `:focus-withinCSS` 伪类的行为。一个常见的用例是在表单元素上查看整个表单是否具有焦点。

## 演示

<demo src="./demo.vue" title="useFocusWithin" desc="选择聚焦表单子元素"></demo>


## 类型

```ts
export interface UseFocusWithinReturn {
  /**
     * 如果元素或其任何后代获得焦点则为 true
     */
  focused: ComputedRef<boolean>
}
/**
 * 跟踪焦点是否包含在目标元素中。
 *
 * @see https://vueuse.org/useFocusWithin
 * @param target The target element to track
 * @param options Focus within options
 */
export declare function useFocusWithin(
  target: MaybeElementRef,
  options?: ConfigurableWindow
): UseFocusWithinReturn
```
