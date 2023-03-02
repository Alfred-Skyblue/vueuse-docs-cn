# onStartTyping

当用户开始在不可编辑的元素上输入时自动聚焦。

## 演示
<demo src="./demo.vue" title="onStartTyping" desc=""></demo>


## 类型

```ts
/**
 * 当用户开始在不可编辑的元素上输入时自动聚焦.
 *
 * @see https://vueuse.org/onStartTyping
 * @param callback
 * @param options
 */
export declare function onStartTyping(
  callback: (event: KeyboardEvent) => void,
  options?: ConfigurableDocument
): void
```
