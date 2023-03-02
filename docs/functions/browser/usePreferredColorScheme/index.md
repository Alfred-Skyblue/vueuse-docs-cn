# usePreferredColorScheme

响应式[`prefers-color-scheme API`
](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme)，用于检测用户是否有将系统的主题色设置为亮色或者暗色。

## 演示

### 基础使用

<demo src="./demo.vue" title="usePreferredColorScheme" desc="响应式偏好配色方案媒体查询"></demo>

### 组件使用

```html
<UsePreferredColorScheme v-slot="{ colorScheme }">
    Preferred Color Scheme: {{ colorScheme }}
    <UsePreferredColorScheme> </UsePreferredColorScheme
></UsePreferredColorScheme>
```


## 类型

```ts
export type ColorSchemeType = 'dark' | 'light' | 'no-preference'
/**
 * 响应式偏好配色方案媒体查询.
 *
 * @see https://vueuse.org/usePreferredColorScheme
 * @param [options]
 */
export declare function usePreferredColorScheme(
  options?: ConfigurableWindow
): ComputedRef<ColorSchemeType>
```
