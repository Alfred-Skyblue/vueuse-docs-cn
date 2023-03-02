# logicOr

`OR` 逻辑或

## 用法

```ts
import { logicOr } from '@vueuse/math'
import { whenever } from '@vueuse/core'

const a = ref(true)
const b = ref(false)

whenever(logicOr(a, b), () => {
  console.log('either a or b is truthy!')
})
```
