# tryOnBeforeUnmount

安全执行 `onBeforeUnmount`。如果它在组件生命周期内，则调用 `onBeforeUnmount()`，如果不在，则什么都不做

## 用法

```ts
import { tryOnBeforeUnmount } from '@vueuse/core'

tryOnBeforeUnmount(() => {

})
```
