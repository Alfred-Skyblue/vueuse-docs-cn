# reactifyObject

应用于 `reactify` 对象

## 用法

```ts
import { reactifyObject } from '@vueuse/core'

const reactifiedConsole = reactifyObject(console)

const a = ref('42')

reactifiedConsole.log(a) // 不再需要 `.value`
```

## 类型

```ts
export type ReactifyNested<
  T,
  Keys extends keyof T = keyof T,
  S extends boolean = true
> = {
  [K in Keys]: T[K] extends (...args: any[]) => any ? Reactified<T[K], S> : T[K]
}
export interface ReactifyObjectOptions<T extends boolean>
  extends ReactifyOptions<T> {
  /**
   * 包括来自 Object.getOwnPropertyNames 的名称
   *
   * @default true
   */
  includeOwnProperties?: boolean
}
/**
 * 应用于 `reactify` 对象
 */
export declare function reactifyObject<T extends object, Keys extends keyof T>(
  obj: T,
  keys?: (keyof T)[]
): ReactifyNested<T, Keys, true>
export declare function reactifyObject<
  T extends object,
  S extends boolean = true
>(obj: T, options?: ReactifyObjectOptions<S>): ReactifyNested<T, keyof T, S>
```
