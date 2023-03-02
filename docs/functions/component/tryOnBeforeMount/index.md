# tryOnBeforeMount

安全执行 `onBeforeMount`。如果在组件生命周期内就调用`onBeforeMount()`，如果不在就调用函数

## 用法

```ts
import { tryOnBeforeMount } from '@vueuse/core'

tryOnBeforeMount(() => {

})
```
