# useCssVar

响应式操纵 CSS 变量

## 演示

<demo src="./demo.vue" title="useCssVar" desc="使用 CSS 变量"></demo>

## 类型

```ts
export interface UseCssVarOptions extends ConfigurableWindow {
  initialValue?: string
}
/**
 * 操纵 CSS 变量。
 *
 * @see https://vueuse.org/useCssVar
 * @param prop
 * @param target
 * @param initialValue
 * @param options
 */
export declare function useCssVar(
  prop: MaybeComputedRef<string>,
  target?: MaybeElementRef,
  { window, initialValue }?: UseCssVarOptions
): Ref<string>
```
