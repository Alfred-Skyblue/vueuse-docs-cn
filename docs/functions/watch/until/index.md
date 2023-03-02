# until

观察一次性条件变化

## 演示

<demo src="./demo.vue" title="until" desc=""></demo>


## 用法

#### 等待一些异步数据准备好

```ts
import { until, useAsyncState } from '@vueuse/core'

const { state, isReady } = useAsyncState(
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(t => t.json()),
  {},
)

;(async () => {
  await until(isReady).toBe(true)

  console.log(state) // 准备好了!
})()
```

#### 等待自定义条件


> 您可以用invoke来调用异步函数。

```ts
import { invoke, until, useCounter } from '@vueuse/core'

const { count } = useCounter()

invoke(async () => {
  await until(count).toMatch(v => v > 7)

  alert('计数器现在大于 7!')
})
```

#### 延迟

```ts
// 直到 ref.value === true 或 1000ms 过去
await until(ref).toBe(true, { timeout: 1000 })

// 如果超时将抛出错误
try {
  await until(ref).toBe(true, { timeout: 1000, throwOnTimeout: true })
  // ref.value === true
}
catch (e) {
  // ref.value === false
}
```

#### 更多用法

```ts
await until(ref).toBe(true)
await until(ref).toMatch(v => v > 10 && v < 100)
await until(ref).changed()
await until(ref).changedTimes(10)
await until(ref).toBeTruthy()
await until(ref).toBeNull()

await until(ref).not.toBeNull()
await until(ref).not.toBeTruthy()
```

## 类型

```ts
export interface UntilToMatchOptions {
  /**
   * 如果 when 条件不满足，Promise resolve reject 的毫秒超时。 0 永远不会超时
   *
   * @default 0
   */
  timeout?: number
  /**
   * 超时返回 Promise.reject
   *
   * @default false
   */
  throwOnTimeout?: boolean
  /**
   * `flush` watch option 选项
   *
   * @default 'sync'
   */
  flush?: WatchOptions['flush']
  /**
   * `deep` watch option 选项
   *
   * @default 'false'
   */
  deep?: WatchOptions['deep']
}
export interface UntilBaseInstance<T, Not extends boolean = false> {
  toMatch<U extends T = T>(
    condition: (v: T) => v is U,
    options?: UntilToMatchOptions
  ): Not extends true ? Promise<Exclude<T, U>> : Promise<U>
  toMatch(
    condition: (v: T) => boolean,
    options?: UntilToMatchOptions
  ): Promise<T>
  changed(options?: UntilToMatchOptions): Promise<T>
  changedTimes(n?: number, options?: UntilToMatchOptions): Promise<T>
}
type Falsy = false | void | null | undefined | 0 | 0n | ''
export interface UntilValueInstance<T, Not extends boolean = false>
  extends UntilBaseInstance<T, Not> {
  readonly not: UntilValueInstance<T, Not extends true ? false : true>
  toBe<P = T>(
    value: MaybeComputedRef<P>,
    options?: UntilToMatchOptions
  ): Not extends true ? Promise<T> : Promise<P>
  toBeTruthy(
    options?: UntilToMatchOptions
  ): Not extends true ? Promise<T & Falsy> : Promise<Exclude<T, Falsy>>
  toBeNull(
    options?: UntilToMatchOptions
  ): Not extends true ? Promise<Exclude<T, null>> : Promise<null>
  toBeUndefined(
    options?: UntilToMatchOptions
  ): Not extends true ? Promise<Exclude<T, undefined>> : Promise<undefined>
  toBeNaN(options?: UntilToMatchOptions): Promise<T>
}
export interface UntilArrayInstance<T> extends UntilBaseInstance<T> {
  readonly not: UntilArrayInstance<T>
  toContains(
    value: MaybeComputedRef<ElementOf<ShallowUnwrapRef<T>>>,
    options?: UntilToMatchOptions
  ): Promise<T>
}

/**
 * 观察一次性条件变化
 * @param {WatchSource<T> | MaybeComputedRef<T>} r
 * @returns {UntilArrayInstance<T>}
 */
export declare function until<T extends unknown[]>(
  r: WatchSource<T> | MaybeComputedRef<T>
): UntilArrayInstance<T>
export declare function until<T>(
  r: WatchSource<T> | MaybeComputedRef<T>
): UntilValueInstance<T>
```
