# useLocalStorage

响应式操作 LocalStorage

## 用法

请参考 [`useStorage`](../useStorage/) 用法

## 类型

```ts
export declare function useLocalStorage(
  key: string,
  initialValue: MaybeComputedRef<string>,
  options?: UseStorageOptions<string>
): RemovableRef<string>
export declare function useLocalStorage(
  key: string,
  initialValue: MaybeComputedRef<boolean>,
  options?: UseStorageOptions<boolean>
): RemovableRef<boolean>
export declare function useLocalStorage(
  key: string,
  initialValue: MaybeComputedRef<number>,
  options?: UseStorageOptions<number>
): RemovableRef<number>
export declare function useLocalStorage<T>(
  key: string,
  initialValue: MaybeComputedRef<T>,
  options?: UseStorageOptions<T>
): RemovableRef<T>
export declare function useLocalStorage<T = unknown>(
  key: string,
  initialValue: MaybeComputedRef<null>,
  options?: UseStorageOptions<T>
): RemovableRef<T>
```
