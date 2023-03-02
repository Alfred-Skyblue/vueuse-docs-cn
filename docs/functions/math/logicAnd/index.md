# logicAnd

`AND` 逻辑与。

## 用法

```ts
import { logicAnd } from '@vueuse/math'
import { whenever } from '@vueuse/core'

const a = ref(true)
const b = ref(false)

whenever(logicAnd(a, b), () => {
  console.log('both a and b are now truthy!')
})
```
