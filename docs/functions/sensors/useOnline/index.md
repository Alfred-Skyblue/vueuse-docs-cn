# useOnline

响应式在线状态，包装 [useNetwork](./useNetwork/)
## 演示

### 基础使用
<demo src="./demo.vue" title="useOnline" desc="响应式在线状态"></demo>


### 组件使用

```html
<UseOnline v-slot="{ isOnline }">
  Is Online: {{ isOnline }}
</UseOnline>
```

## 类型

```ts
/**
 * 响应式在线状态
 *
 * @see https://vueuse.org/useOnline
 * @param options
 */
export declare function useOnline(options?: ConfigurableWindow): Ref<boolean>
```
