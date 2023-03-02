# useDevicePixelRatio

响应式跟踪 [`window.devicePixelRatio`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio)

> 注意：没有用于 `window.devicePixelRatio` 更改的事件侦听器。因此，此函数使用应用与本示例 [`Testing media queries programmatically (window.matchMedia)`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio) 中描述的相同的机制。


## 演示

### 基础使用

<demo src="./demo.vue" title="useDevicePixelRatio" desc="放大和缩小（或将窗口移动到具有不同比例因子的屏幕）以查看值变化"></demo>

### 组件使用

```html
<UseDevicePixelRatio v-slot="{ pixelRatio }">
  Pixel Ratio: {{ pixelRatio }}
</UseDevicePixelRatio>
```

## 类型

```ts
/**
 * 响应式跟踪 `window.devicePixelRatio`.
 *
 * @see https://vueuse.org/useDevicePixelRatio
 * @param options
 */
export declare function useDevicePixelRatio({ window }?: ConfigurableWindow): {
  pixelRatio: Ref<number>
}
export type UseDevicePixelRatioReturn = ReturnType<typeof useDevicePixelRatio>
```
