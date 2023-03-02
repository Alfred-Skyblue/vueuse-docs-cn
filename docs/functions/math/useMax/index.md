# useMax

响应式 `Math.max`.

## 用法

```ts
import { useMax } from '@vueuse/math'

const array = ref([1, 2, 3, 4])
const sum = useMax(array) // Ref<4>
```

```ts
import { useMax } from '@vueuse/math'

const a = ref(1)
const b = ref(3)

const sum = useMax(a, b, 2) // Ref<3>
```
