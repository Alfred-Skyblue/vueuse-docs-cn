# useStorageAsync

响应式异步操作 [`LocalStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)/[`SessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

## 演示

请参考 [`useStorage`](../useStorage/)，它们的用法是一样的，只是 `useStorage` 是同步的，而 `useStorageAsync` 是异步的。

## 类型

```ts
export interface UseStorageAsyncOptions<T> extends Omit<UseStorageOptions<T>, 'serializer'> {
  /**
     * Custom data serialization
     */
  serializer?: SerializerAsync<T>
}
export declare function useStorageAsync(
  key: string,
  initialValue: MaybeComputedRef<string>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<string>
): RemovableRef<string>
export declare function useStorageAsync(
  key: string,
  initialValue: MaybeComputedRef<boolean>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<boolean>
): RemovableRef<boolean>
export declare function useStorageAsync(
  key: string,
  initialValue: MaybeComputedRef<number>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<number>
): RemovableRef<number>
export declare function useStorageAsync<T>(
  key: string,
  initialValue: MaybeComputedRef<T>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<T>
): RemovableRef<T>
export declare function useStorageAsync<T = unknown>(
  key: string,
  initialValue: MaybeComputedRef<null>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<T>
): RemovableRef<T>
```
