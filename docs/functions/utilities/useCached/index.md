# useCached

使用自定义比较器缓存 ref。

## 演示

<demo src="./demo.vue" title="useCached" desc="使用自定义比较器缓存 ref"></demo>


## 用法

```ts
import { useCached } from '@vueuse/core'

interface Data {
  value: number
  extra: number
}

const source = ref<Data>({ value: 42, extra: 0 })
const cached = useCached(source, (a, b) => a.value === b.value)

source.value = {
  value: 42,
  extra: 1,
}

console.log(cached.value) // { value: 42, extra: 0 }

source.value = {
  value: 43,
  extra: 1,
}

console.log(cached.value) // { value: 43, extra: 1 }
```


## 类型

```ts
export declare function useCached<T>(
  refValue: Ref<T>,
  comparator?: (a: T, b: T) => boolean,
  watchOptions?: WatchOptions
): Ref<T>
```
