# logicNot

`NOT` 逻辑非.

## 用法

```ts
import { logicNot } from '@vueuse/math'
import { whenever } from '@vueuse/core'

const a = ref(true)

whenever(logicNot(a), () => {
  console.log('a is now falsy!')
})
```
