# useSessionStorage

响应式操作 SessionStorage

## 用法

请参阅 [useStorage](../useStorage/)

## 类型

```ts
export declare function useSessionStorage(
  key: string,
  initialValue: MaybeComputedRef<string>,
  options?: UseStorageOptions<string>
): RemovableRef<string>
export declare function useSessionStorage(
  key: string,
  initialValue: MaybeComputedRef<boolean>,
  options?: UseStorageOptions<boolean>
): RemovableRef<boolean>
export declare function useSessionStorage(
  key: string,
  initialValue: MaybeComputedRef<number>,
  options?: UseStorageOptions<number>
): RemovableRef<number>
export declare function useSessionStorage<T>(
  key: string,
  initialValue: MaybeComputedRef<T>,
  options?: UseStorageOptions<T>
): RemovableRef<T>
export declare function useSessionStorage<T = unknown>(
  key: string,
  initialValue: MaybeComputedRef<null>,
  options?: UseStorageOptions<T>
): RemovableRef<T>
```
