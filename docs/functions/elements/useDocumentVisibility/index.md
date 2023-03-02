# useDocumentVisibility

响应式跟踪文档可见性 `document.visibilityState`。

## 演示

<demo src="./demo.vue" title="useDocumentVisibility" desc="响应式跟踪文档可见性"></demo>

### 组件使用

> 此功能还通过包提供无渲染组件版本 `@vueuse/components`

```vue
<UseDocumentVisibility v-slot="{ visibility }">
  文档可见？: {{ visibility }}
</UseDocumentVisibility>
```

## 类型

```ts
export interface ConfigurableDocument {
  document?: Document
}

/**
 * 响应式跟踪 `document.visibilityState`.
 *
 * @param options
 */
export declare function useDocumentVisibility(options?: ConfigurableDocument): Ref<DocumentVisibilityState>
```
