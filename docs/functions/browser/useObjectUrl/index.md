
# useObjectUrl

对象的响应式 URL。

为提供的 `File、Blob` 或 `MediaSource` 通过 `URL.createObjectURL()` 创建 `URL`，并在源更改或组件卸载时通过 `URL.revokeObjectURL()` 自动释放 `URL` 。


## 演示

### 基础使用

<demo src="./demo.vue" title="useObjectUrl" desc="对象的响应式 URL"></demo>


### 组件使用

```html
<template>
  <UseObjectUrl v-slot="url" :object="file">
    <a :href="url">Open file</a>
  </UseObjectUrl>
</template>
```

## 类型

```ts
/**
 * 对象的响应式 URL。
 *
 * @see https://vueuse.org/useObjectUrl
 * @param object
 */
export declare function useObjectUrl(
  object: MaybeRef<Blob | MediaSource | undefined>
): Readonly<Ref<string | undefined>>
```
