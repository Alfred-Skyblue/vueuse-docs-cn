# useCounter

计数器。

## 演示

<demo src="./demo.vue" title="useCounter" desc=""></demo>

## 用法

```js
import { useCounter } from '@vueuse/core'

const { count, inc, dec, set, reset } = useCounter()
```

## 使用选项

```js
import { useCounter } from '@vueuse/core'

const { count, inc, dec, set, reset } = useCounter(1, { min: 0, max: 16 })
```
