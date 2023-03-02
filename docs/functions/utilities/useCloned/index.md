# useCloned

响应式ref克隆。默认情况下，它使用 `JSON.parse(JSON.stringify())` 克隆。

## 演示

<demo src="./demo.vue" title="useCloned" desc="响应式ref克隆"></demo>

## 用法

```ts
import { useCloned } from '@vueuse/core'

const original = ref({ key: 'value' })

const { cloned } = useCloned(original)

original.key = 'some new value'

console.log(cloned.value.key) // 'some new value'
```

## 手动克隆

```ts
import { useCloned } from '@vueuse/core'

const original = ref({ key: 'value' })

const { cloned, sync } = useCloned(original, { manual: true })

original.key = 'manual'

console.log(cloned.value.key) // 'value'

sync()

console.log(cloned.value.key)// 'manual'
```

## 自定义函数

使用 [`locash`](https://www.npmjs.com/package/locash) 

```ts
import { useCloned } from '@vueuse/core'
import { cloneDeep } from 'lodash-es'

const original = ref({ key: 'value' })

const { cloned, sync } = useCloned(original, { clone: cloneDeep })
```


## 类型

```ts
export interface UseClonedOptions<T = any> extends WatchOptions {
  /**
   * 自定义克隆函数
   *
   * 默认情况下，它使用 `JSON.parse(JSON.stringify(value))` 进行克隆。
   */
  clone?: (source: T) => T
  /**
   * 开启手动克隆
   *
   * @default false
   */
  manual?: boolean
}
export interface UseClonedReturn<T> {
  /**
   * 克隆的数据
   */
  cloned: ComputedRef<T>
  /**
   * 手动将克隆的数据与源数据同步
   */
  sync: () => void
}
export type CloneFn<F, T = F> = (x: F) => T
export declare function cloneFnJSON<T>(source: T): T
export declare function useCloned<T>(
  source: MaybeComputedRef<T>,
  options?: UseClonedOptions
): {
  cloned: Ref<UnwrapRef<T>>
  sync: () => void
}
```
