# tryOnScopeDispose

安全执行 `onScopeDispose`。如果它在效果范围生命周期内，则调用 `onScopeDispose()`，如果不在，则什么都不做

## 用法

```ts
import { tryOnScopeDispose } from '@vueuse/core'

tryOnScopeDispose(() => {

})
```
