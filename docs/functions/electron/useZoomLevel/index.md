# useZoomLevel

Reactive [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) zoom level.

响应式 [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe)缩放级别。在 [@vueuse/electron](https://vueuse.org/electron/README) 附加组件中可用。

## 用法

```ts
import { useZoomLevel } from '@vueuse/electron'

// 如果您未明确提供 webFrame，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// 返回一个ref
const level = useZoomLevel()
console.log(level.value) // 打印当前缩放级别
level.value = 2 // 更改当前缩放级别
```

立即设置初始缩放级别

```js
import { useZoomLevel } from '@vueuse/electron'

const level = useZoomLevel(2)
```

通过 ref 更新

```js
import { useZoomLevel } from '@vueuse/electron'

const level = ref(1)

useZoomLevel(level) // 缩放级别将与 ref 相匹配

level.value = 2 // 缩放级别会改变
```

## 类型

```ts
export declare function useZoomLevel(level: MaybeRef<number>): Ref<number>
export declare function useZoomLevel(
  webFrame: WebFrame,
  level: MaybeRef<number>
): Ref<number>
export declare function useZoomLevel(webFrame: WebFrame): Ref<number>
export declare function useZoomLevel(): Ref<number>
```
