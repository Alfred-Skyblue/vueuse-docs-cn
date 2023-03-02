# usePreferredReducedMotion

响应式[`prefers-reduced-motion
`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)，检测用户的系统是否被开启了动画减弱功能

## 演示

### 基础使用

<demo src="./demo.vue" title="usePreferredReducedMotion" desc="响应式检测用户的系统是否被开启了动画减弱功能"></demo>

### 组件使用

```html
<UsePreferredReducedMotion v-slot="{ motion }">
    Preferred Color Scheme: {{ motion }}
</UsePreferredReducedMotion>
```


## 类型

```ts
export type ReducedMotionType = 'reduce' | 'no-preference'
/**
 * Reactive prefers-reduced-motion media query.
 *
 * @see https://vueuse.org/usePreferredReducedMotion
 * @param [options]
 */
export declare function usePreferredReducedMotion(
  options?: ConfigurableWindow
): ComputedRef<ReducedMotionType>
```
