
# usePageLeave

显示鼠标是否离开页面的响应式状态。

## 演示

### 基础使用
<demo src="./demo.vue" title="usePageLeave" desc="显示鼠标是否离开页面的响应式状态"></demo>



### 组件使用
```html
<UsePageLeave v-slot="{ isLeft }">
  已离开页面: {{ isLeft }}
</UsePageLeave>
```

## 类型

```ts
/**
 * 显示鼠标是否离开页面的响应式状态
 *
 * @see https://vueuse.org/usePageLeave
 * @param options
 */
export declare function usePageLeave(options?: ConfigurableWindow): Ref<boolean>
```
