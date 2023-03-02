# useImage

在浏览器中响应式加载图像，您可以等待结果显示它或回退。

## 演示

<demo src="./demo.vue" title="useImage" desc="加载图像"></demo>

### 组件使用

```html
<template>
    <UseImage src="https://place.dog/300/200">
        <template #loading> Loading.. </template>

        <template #error> Failed </template>
    </UseImage>
</template>
```

## 类型

```ts
export interface UseImageOptions {
  /**
     * 图片地址
     */
  src: string
  /**
     * 在不同情况下使用的图像，例如高分辨率显示器、小型显示器等
     */
  srcset?: string
  /**
     * 不同页面布局的图像大小
     */
  sizes?: string
}
/**
 * 在浏览器中响应式加载图像，您可以等待结果显示它或回退。
 *
 * @see https://vueuse.org/useImage
 * @param options Image attributes, as used in the <img> tag
 * @param asyncStateOptions
 */
export declare const useImage: <Shallow extends true>(
  options: MaybeComputedRef<UseImageOptions>,
  asyncStateOptions?: UseAsyncStateOptions<Shallow, any>
) => UseAsyncStateReturn<HTMLImageElement | undefined, [], true>
export type UseImageReturn = ReturnType<typeof useImage>
```
