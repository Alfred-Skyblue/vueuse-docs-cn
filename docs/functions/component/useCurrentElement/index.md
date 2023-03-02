# useCurrentElement

获取当前组件的元素作为 ref。

## 用法

```ts
import { useCurrentElement } from '@vueuse/core'

const el = useCurrentElement() // ComputedRef<Element>
```

## 注意事项

这个功能使用了 [`$el` under the hood](https://vuejs.org/api/component-instance.html#el).

在安装组件之前，ref 的值将是 `undefined`。

- 对于具有单个根元素的组件，它将指向该元素。
- 对于具有文本根的组件，它将指向文本节点。
- 对于具有多个根节点的组件，它将是 Vue 用来跟踪组件在 DOM 中的位置的占位符 DOM 节点。

建议仅将此函数用于具有单个根元素的组件。

## 类型

```ts
export declare function useCurrentElement<
  T extends Element = Element
>(): ComputedRefWithControl<T>
```
