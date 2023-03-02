# useIDBKeyval

[`idb-keyval`](https://www.npmjs.com/package/idb-keyval) 包装器，在[@vueuse/integrations](https://vueuse.org/integrations/README)附加组件中可用。


## 演示

<demo src="./demo.vue" title="useIDBKeyval" desc=""></demo>

## 安装 idb-keyval 为对等依赖项

```bash
npm install idb-keyval
```

## 用法

```ts
import { useIDBKeyval } from '@vueuse/integrations/useIDBKeyval'

// bind object
const storedObject = useIDBKeyval('my-idb-keyval-store', { hello: 'hi', greeting: 'Hello' })

// update object
storedObject.value.hello = 'hola'

// bind boolean
const flag = useIDBKeyval('my-flag', true) // returns Ref<boolean>

// bind number
const count = useIDBKeyval('my-count', 0) // returns Ref<number>

// delete data from idb storage
storedObject.value = null
```


## 类型

```ts
export interface UseIDBOptions extends ConfigurableFlush {
  /**
   * 深度监听
   *
   * @default true
   */
  deep?: boolean
  /**
   * 报错时的回调，如果不设置则默认使用 `console.error`
   *
  onError?: (error: unknown) => void
  /**
   * 使用 shallow ref
   *
   * @default false
   */
  shallow?: boolean
}
/**
 *
 * @param key
 * @param initialValue
 * @param options
 */
export declare function useIDBKeyval<T>(
  key: IDBValidKey,
  initialValue: MaybeComputedRef<T>,
  options?: UseIDBOptions
): RemovableRef<T>
```
