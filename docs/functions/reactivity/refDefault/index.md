# refDefault

使用一个有默认值的ref

## 用法

```ts
import { refDefault, useStorage } from '@vueuse/core'

const raw = useStorage('key')
const state = refDefault(raw, 'default')

raw.value = 'hello'
console.log(state.value) // hello

raw.value = undefined
console.log(state.value) // default
```

## 类型

```ts
/**
 * 使用一个有默认值的ref
 *
 * @param source source ref
 * @param targets
 */
export declare function refDefault<T>(
  source: Ref<T | undefined | null>,
  defaultValue: T
): Ref<T>
```
