# computedInject

结合计算和注入

## 演示


<demo src="./demo.vue" title="computedInject" desc="组合计算注入"></demo>


- demoReceiver

```vue
<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import { defineComponent, ref } from 'vue'
import { computedInject } from '@vueuse/core'

type OptionsRef = Ref<{ key: number; value: string }[]>

export const ArrayKey: InjectionKey<OptionsRef> = Symbol('array')

export default defineComponent({
  name: 'DemoProvider',
  setup() {
    const computedArr = computedInject(ArrayKey, (source) => {
      if (!source)
        return ref([]) as OptionsRef
      const arr = [...source.value]
      arr.unshift({ key: 0, value: 'all' })
      return arr
    })

    return {
      computedArr,
    }
  },
})
</script>

<template>
  <div>
    <div text-primary font-bold mb-2>
      Computed Array
    </div>
    <pre>{{ computedArr }}</pre>
  </div>
</template>
```
## 用法

- 祖先组件 

```ts
import type { InjectionKey, Ref } from 'vue-demi'
import { provide, ref } from 'vue-demi'

interface Item {
  key: number
  value: string
}

export const ArrayKey: InjectionKey<Ref<Item[]>> = Symbol('symbol-key')

const array = ref([{ key: 1, value: '1' }, { key: 2, value: '2' }, { key: 3, value: '3' }])

provide(ArrayKey, array)
```

- 后代组件
```ts
import { computedInject } from '@vueuse/core'

import { ArrayKey } from './provider'

const computedArray = computedInject(ArrayKey, (source) => {
  const arr = [...source.value]
  arr.unshift({ key: 0, value: 'all' })
  return arr
})
```

## 类型

```ts
export type ComputedInjectGetter<T, K> = (source: T | undefined, ctx?: any) => K
export type ComputedInjectGetterWithDefault<T, K> = (source: T, ctx?: any) => K
export type ComputedInjectSetter<T> = (v: T) => void
export interface WritableComputedInjectOptions<T, K> {
  get: ComputedInjectGetter<T, K>
  set: ComputedInjectSetter<K>
}
export interface WritableComputedInjectOptionsWithDefault<T, K> {
  get: ComputedInjectGetterWithDefault<T, K>
  set: ComputedInjectSetter<K>
}
export declare function computedInject<T, K = any>(
  key: InjectionKey<T> | string,
  getter: ComputedInjectGetter<T, K>
): ComputedRef<K | undefined>
export declare function computedInject<T, K = any>(
  key: InjectionKey<T> | string,
  options: WritableComputedInjectOptions<T, K>
): ComputedRef<K | undefined>
export declare function computedInject<T, K = any>(
  key: InjectionKey<T> | string,
  getter: ComputedInjectGetterWithDefault<T, K>,
  defaultSource: T,
  treatDefaultAsFactory?: false
): ComputedRef<K>
export declare function computedInject<T, K = any>(
  key: InjectionKey<T> | string,
  options: WritableComputedInjectOptionsWithDefault<T, K>,
  defaultSource: T | (() => T),
  treatDefaultAsFactory: true
): ComputedRef<K>
```
