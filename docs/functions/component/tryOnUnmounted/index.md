# tryOnUnmounted

安全执行 `onUnmounted`。如果它在组件生命周期内，则调用 `onUnmounted()`，如果不在，则什么都不做

## 用法

```ts
import { tryOnUnmounted } from '@vueuse/core'

tryOnUnmounted(() => {

})
```
