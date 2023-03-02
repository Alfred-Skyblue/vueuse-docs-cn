# useMemoize

根据参数缓存函数的结果并保持其响应式。它还可以用于异步函数，并将重用现有的Promise以避免同时获取相同的数据。

::: tip
结果不会自动清除。如果您不再需要结果或使用自己的缓存机制来避免内存泄漏，请调用 `clear()`。
:::

## 用法

```ts
import { useMemoize } from '@vueuse/core'

const getUser = useMemoize(
  async (userId: number): Promise<UserData> =>
    axios.get(`users/${userId}`).then(({ data }) => data),
)

const user1 = await getUser(1) // Request users/1
const user2 = await getUser(2) // Request users/2
// ...
const user1 = await getUser(1) // Retrieve from cache

// ...
const user1 = await getUser.load(1) // Request users/1

// ...
getUser.delete(1) // Delete cache from user 1
getUser.clear() // Clear full cache
```

结合 `computed` 或 `asyncComputed` 实现响应式：

```ts
const user1 = asyncComputed(() => getUser(1))
// ...
await getUser.load(1) // Will also update user1
```

### 解析缓存 `key`

The key for caching is determined by the arguments given to the function and will be serialized by default with `JSON.stringify`.
This will allow equal objects to receive the same cache key. In case you want to customize the key you can pass `getKey`

缓存的key由提供给函数的参数决定，默认情况下将序列化为JSON.stringify. 这将允许相同的对象接收相同的缓存key。如果你想自定义你可以传递 `getKey`

```ts
const getUser = useMemoize(
  async (userId: number, headers: AxiosRequestHeaders): Promise<UserData> =>
    axios.get(`users/${userId}`, { headers }).then(({ data }) => data),
  {
    // 仅使用 userId 来获取设置缓存并忽略 headers
    getKey: (userId, headers) => userId,
  },
)
```

::: warning
对于 Vue 2，`key` 必须是 `string` 或 `number`
:::

### 自定义缓存机制


默认情况下，结果缓存在一个Map（Vue 2 的普通对象）中。您可以通过传递具有以下结构的 `cache` 选项来实现自己的机制：

```ts
export interface MemoizeCache<Key, Value> {
  /**
   * Get value for key
   */
  get (key: Key): Value | undefined
  /**
   * Set value for key
   */
  set (key: Key, value: Value): void
  /**
   * Return flag if key exists
   */
  has (key: Key): boolean
  /**
   * Delete value for key
   */
  delete (key: Key): void
  /**
   * Clear cache
   */
  clear (): void
}
```

## 类型

```ts
type CacheKey = any
/**
 * 自定义 memoize 缓存处理程序
 */
export interface UseMemoizeCache<Key, Value> {
  /**
   * 获取key的值
   */
  get(key: Key): Value | undefined
  /**
   * 设置key的值
   */
  set(key: Key, value: Value): void
  /**
   * 判断是否存在key
   */
  has(key: Key): boolean
  /**
   * 删除key的值
   */
  delete(key: Key): void
  /**
   * 清除缓存
   */
  clear(): void
}
/**
 * 缓存函数
 */
export interface UseMemoizeReturn<Result, Args extends unknown[]> {
  /**
   * 从缓存中获取结果或调用 memoized 函数
   */
  (...args: Args): Result
  /**
   * 调用 memoized 函数并更新缓存
   */
  load(...args: Args): Result
  /**
   * 删除给定参数的缓存
   */
  delete(...args: Args): void
  /**
   * 清除缓存
   */
  clear(): void
  /**
   * 为给定参数生成缓存key
   */
  generateKey(...args: Args): CacheKey
  /**
   * 缓存容器
   */
  cache: UseMemoizeCache<CacheKey, Result>
}
export interface UseMemoizeOptions<Result, Args extends unknown[]> {
  getKey?: (...args: Args) => string | number
  cache?: UseMemoizeCache<CacheKey, Result>
}
/**
 * 基于参数的响应式函数结果缓存
 */
export declare function useMemoize<Result, Args extends unknown[]>(
  resolver: (...args: Args) => Result,
  options?: UseMemoizeOptions<Result, Args>
): UseMemoizeReturn<Result, Args>
```
