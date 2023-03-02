# extendRef

向 Ref 添加额外的属性。


## 用法

> 此功能与 **Vue 2.6** 或更低版本不兼容。

> 请注意，在 **Vue** 的模板中将无法访问额外的属性。

```ts
import { ref } from 'vue'
import { extendRef } from '@vueuse/core'

const myRef = ref('content')

const extended = extendRef(myRef, { foo: 'extra data' })

extended.value === 'content'
extended.foo === 'extra data'
```

`Refs` 将被展开并具有响应式

```ts
const myRef = ref('content')
const extraRef = ref('extra')

const extended = extendRef(myRef, { extra: extraRef })

extended.value === 'content'
extended.extra === 'extra'

extended.extra = 'new data' // 将触发更新
extraRef.value === 'new data'
```


## 类型

```ts
export interface ExtendRefOptions<Unwrap extends boolean = boolean> {
  /**
   * 扩展属性是否可枚举
   *
   * @default false
   */
  enumerable?: boolean
  /**
   * 展开ref属性
   *
   * @default true
   */
  unwrap?: Unwrap
}
/**
 * Overload 1: Unwrap 设置为 false
 */
export declare function extendRef<
  R extends Ref<any>,
  Extend extends object,
  Options extends ExtendRefOptions<false>
>(ref: R, extend: Extend, options?: Options): ShallowUnwrapRef<Extend> & R
/**
 * Overload 2: Unwrap 设置为 true
 */
export declare function extendRef<
  R extends Ref<any>,
  Extend extends object,
  Options extends ExtendRefOptions
>(ref: R, extend: Extend, options?: Options): Extend & R
```
