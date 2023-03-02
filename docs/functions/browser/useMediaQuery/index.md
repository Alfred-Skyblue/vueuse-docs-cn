# useMediaQuery

响应式媒体查询。创建 [`MediaQueryList`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Testing_media_queries) 对象后，您可以检查查询结果或在结果更改时接收通知。

## 演示

<demo src="./demo.vue" title="useMediaQuery" desc="响应式媒体查询"></demo>

## 类型

```ts
/**
 * 响应式媒体查询
 *
 * @see https://vueuse.org/useMediaQuery
 * @param query
 * @param options
 */
export declare function useMediaQuery(query: MaybeComputedRef<string>, options?: ConfigurableWindow): Ref<boolean>
```
