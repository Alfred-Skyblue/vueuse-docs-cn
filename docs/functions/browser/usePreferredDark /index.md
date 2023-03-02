# usePreferredDark

响应式深色主题偏好。

## 演示

### 基础使用

<demo src="./demo.vue" title="usePreferredDark" desc="响应式深色主题偏好"></demo>

### 组件使用

```html
<UsePreferredDark v-slot="{ prefersDark }"> Prefers Dark: {{ prefersDark }} </UsePreferredDark>
```

## 类型

```ts
/**
 * 响应式深色主题偏好
 *
 * @see https://vueuse.org/usePreferredDark
 * @param [options]
 */
export declare function usePreferredDark(
  options?: ConfigurableWindow
): Ref<boolean>
```
