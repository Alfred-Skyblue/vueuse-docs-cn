# watchArray

观察数组的添加和删除

## 用法

与 `watch` 类似，但将添加和删除的元素提供给回调函数。

```ts
import { watchArray } from '@vueuse/core'

const list = ref([1, 2, 3])

watchArray(list, (newList, oldList, added, removed) => {
  console.log(newList) // [1, 2, 3, 4]
  console.log(oldList) // [1, 2, 3]
  console.log(added) // [4]
  console.log(removed) // []
})

onMounted(() => {
  list.value = [...list.value, 4]
})
```

## 类型

```ts
export declare type WatchArrayCallback<V = any, OV = any> = (
  value: V,
  oldValue: OV,
  added: V,
  removed: OV,
  onCleanup: (cleanupFn: () => void) => void
) => any
/**
 * 观察带有添加和删除的数组。
 *
 * @see https://vueuse.org/watchArray
 */
export declare function watchArray<
  T,
  Immediate extends Readonly<boolean> = false
>(
  source: WatchSource<T[]> | T[],
  cb: WatchArrayCallback<T[], Immediate extends true ? T[] | undefined : T[]>,
  options?: WatchOptions<Immediate>
): WatchStopHandle
```
