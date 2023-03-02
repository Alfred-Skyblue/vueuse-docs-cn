# useStorage

响应式操作 [`LocalStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)/[`SessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/SessionStorage)

## 演示

-   LocalStorage

<demo src="./LocalStorage.vue" title="操作LocalStorage" desc="响应式操作LocalStorage，当 ref 发生变化时，更新 LocalStorage 中保存的值"></demo>

-   SessionStorage

<demo src="./SessionStorage.vue" title="操作SessionStorage" desc="响应式操作SessionStorage，当 ref 发生变化时，更新 SessionStorage 中保存的值"></demo>

## 合并默认值

默认情况下，`useStorage` 如果存在则会忽略默认值，将使用存储中的值。请注意，当您向默认值添加更多属性时，如果客户端的存储没有该属性，则该属性会为 `undefined`。

```ts
localStorage.setItem('my-store', '{"hello": "hello"}')

const state = useStorage('my-store', { hello: 'hi', greeting: 'hello' }, localStorage)

console.log(state.greeting) // undefined, 因为该属性未显示在存储中
```

要解决这个问题，您可以启用 mergeDefaults 选项。

```ts
localStorage.setItem('my-store', '{"hello": "nihao"}')

const state = useStorage(
  'my-store',
  { hello: 'hi', greeting: 'hello' },
  localStorage,
  { mergeDefaults: true } // <--
)

console.log(state.hello) // 'nihao', localStorage 中获取到的值
console.log(state.greeting) // 'hello', 合并默认值
```

将其设置为 true 时，它将对对象执行浅合并。您可以传递一个函数来执行自定义合并（深度合并），例如：

```ts
const state = useStorage(
  'my-store',
  { hello: 'hi', greeting: 'hello' },
  localStorage,
  {
    mergeDefaults: (storageValue, defaults) => deepMerge(defaults, storageValue),
  } // <--
)
```

### 自定义序列化

默认情况下，`useStorage` 将根据提供的默认值的数据类型智能地使用相应的序列化程序。例如，`JSON.stringify/JSON.parse` 将用于对象，`Number.toString/parseFloat` 用于数字等。

您还可以提供自己的序列化功能

```ts
import { useStorage } from '@vueuse/core'

useStorage('key', {}, undefined, {
  serializer: {
    read: (v: any) => (v ? JSON.parse(v) : null),
    write: (v: any) => JSON.stringify(v),
  },
})
```

请注意，当您提供 `null` 默认值时，`useStorage` 不能从中获取数据类型。在这种情况下，您可以提供自定义序列化程序或显式重用内置序列化程序。

```ts
import { StorageSerializers, useStorage } from '@vueuse/core'

const objectLike = useStorage('key', null, undefined, {
  serializer: StorageSerializers.object,
})
objectLike.value = { foo: 'bar' }
```

```ts
export interface Serializer<T> {
  read(raw: string): T
  write(value: T): string
}
export interface SerializerAsync<T> {
  read(raw: string): Awaitable<T>
  write(value: T): Awaitable<string>
}
export declare const StorageSerializers: Record<
    'boolean' | 'object' | 'number' | 'any' | 'string' | 'map' | 'set' | 'date',
    Serializer<any>
>
export declare const customStorageEventName = 'vueuse-storage'
export interface StorageEventLike {
  storageArea: StorageLike | null
  key: StorageEvent['key']
  oldValue: StorageEvent['oldValue']
  newValue: StorageEvent['newValue']
}
export interface UseStorageOptions<T> extends ConfigurableEventFilter, ConfigurableWindow, ConfigurableFlush {
  /**
     * 深度监听
     * @default true
     */
  deep?: boolean
  /**
     * 监听存储变化，对多标签应用很有用
     * @default true
     */
  listenToStorageChanges?: boolean
  /**
     * 不存在时将默认值写入存储
     *
     * @default true
     */
  writeDefaults?: boolean
  /**
     * 将默认值与从存储中读取的值合并。将其设置为 true 时，它将对对象执行浅合并。您可以传递一个函数来执行自定义合并（例如深度合并）
     *
     * @default false
     */
  mergeDefaults?: boolean | ((storageValue: T, defaults: T) => T)
  /**
     * 自定义数据序列化
     */
  serializer?: Serializer<T>
  /**
     * 错误回调
     *
     * 默认调用 `console.error`
     */
  onError?: (error: unknown) => void
  /**
     * 使用 shallowRef
     *
     * @default false
     */
  shallow?: boolean
}
export declare function useStorage(
  key: string,
  defaults: MaybeComputedRef<string>,
  storage?: StorageLike,
  options?: UseStorageOptions<string>
): RemovableRef<string>
export declare function useStorage(
  key: string,
  defaults: MaybeComputedRef<boolean>,
  storage?: StorageLike,
  options?: UseStorageOptions<boolean>
): RemovableRef<boolean>
export declare function useStorage(
  key: string,
  defaults: MaybeComputedRef<number>,
  storage?: StorageLike,
  options?: UseStorageOptions<number>
): RemovableRef<number>
export declare function useStorage<T>(
  key: string,
  defaults: MaybeComputedRef<T>,
  storage?: StorageLike,
  options?: UseStorageOptions<T>
): RemovableRef<T>
export declare function useStorage<T = unknown>(
  key: string,
  defaults: MaybeComputedRef<null>,
  storage?: StorageLike,
  options?: UseStorageOptions<T>
): RemovableRef<T>
```
