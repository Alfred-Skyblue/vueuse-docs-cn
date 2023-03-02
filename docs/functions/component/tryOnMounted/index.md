
# tryOnMounted

安全执行`onMounted`。如果它在组件生命周期内，则调用 `onMounted()`，如果不在，则调用该函数

## 用法

```ts
import { tryOnMounted } from '@vueuse/core'

tryOnMounted(() => {

})
```
