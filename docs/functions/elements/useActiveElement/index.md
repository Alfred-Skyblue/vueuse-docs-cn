# useActiveElement

响应式获取当前激活的元素

## 演示

### 使用函数

<demo src="./demo/hooks.vue" title="useActiveElement" desc="响应式获取当前激活的元素"></demo>

### 使用组件

<demo src="./demo/ActiveElement.vue" title="useActiveElement" desc="使用组件版本"></demo>

## 类型

```ts
export interface UseActiveElementOptions extends ConfigurableWindow, ConfigurableDocumentOrShadowRoot {}
/**
 * 响应式获取 `document.activeElement`
 * @param options
 */
export declare function useActiveElement<T extends HTMLElement>(
  options?: UseActiveElementOptions
): ComputedRefWithControl<T | null | undefined>
```
