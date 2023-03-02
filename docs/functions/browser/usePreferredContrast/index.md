# usePreferredContrast

响应式[`prefers-contrast API`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)，用于检测用户是否请求以较低或较高对比度呈现 Web 内容。

## 演示

### 基础使用

<demo src="./demo.vue" title="usePreferredContrast" desc="响应式偏好对比媒体查询"></demo>

### 组件使用

```html
<UsePreferredContrast v-slot="{ contrast }">
    首选对比度: {{ contrast }}
    <UsePreferredContrast> </UsePreferredContrast
></UsePreferredContrast>
```


## 类型

```ts
export type ContrastType = 'more' | 'less' | 'custom' | 'no-preference'
/**
 * 响应式偏好对比媒体查询
 *
 * @see https://vueuse.org/usePreferredContrast
 * @param [options]
 */
export declare function usePreferredContrast(
  options?: ConfigurableWindow
): ComputedRef<ContrastType>
```
