# useZoomFactor

响应式 [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) 缩放系数。在[@vueuse/electron](https://vueuse.org/electron/README)附加组件中可用。

## 用法

```ts
import { useZoomFactor } from '@vueuse/electron'

// 如果您未明确提供 webFrame，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// 返回一个响应式的 ref
const factor = useZoomFactor()
console.log(factor.value) // 打印当前缩放系数
factor.value = 2 // 更改当前缩放系数
```

立即设置初始缩放系数

```js
import { useZoomFactor } from '@vueuse/electron'

const factor = useZoomFactor(2)
```

通过一个ref来更新缩放系数

```js
import { useZoomFactor } from '@vueuse/electron'

const factor = ref(1)

useZoomFactor(factor) // 缩放系数将与ref相匹配

factor.value = 2 // 缩放系数会改变
```

## 类型

```ts
export declare function useZoomFactor(factor: MaybeRef<number>): Ref<number>
export declare function useZoomFactor(
  webFrame: WebFrame,
  factor: MaybeRef<number>
): Ref<number>
export declare function useZoomFactor(webFrame: WebFrame): Ref<number>
export declare function useZoomFactor(): Ref<number>
```
