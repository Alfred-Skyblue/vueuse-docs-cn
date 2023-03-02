# useWindowFocus

使用 `window.onfocus` 和 `window.onblur` 事件响应式跟踪窗口焦点。

## 演示

### 基本用法

<demo src="./demo.vue" title="useWindowFocus" desc="监听文档聚焦状态"></demo>

### 使用组件

```html
<UseWindowFocus v-slot="{ focused }"> Document Focus: {{ focused }} </UseWindowFocus>
```

## 类型

```ts
/**
 * 使用 `window.onfocus` 和 `window.onblur` 事件响应式跟踪窗口焦点。.
 *
 * @see https://vueuse.org/useWindowFocus
 * @param options
 */
export declare function useWindowFocus(options: ConfigurableWindow): Ref<boolean>
```
