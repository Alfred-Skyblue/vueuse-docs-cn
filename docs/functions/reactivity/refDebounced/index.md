# refDebounced

ref值防抖。


## 演示

<demo src="./demo.vue" title="refDebounced" desc="ref值防抖"></demo>



## 用法

```js {4}
import { refDebounced } from '@vueuse/core'

const input = ref('foo')
const debounced = refDebounced(input, 1000)

input.value = 'bar'
console.log(debounced.value) // 'foo'

await sleep(1100)

console.log(debounced.value) // 'bar'
```
您还可以传递可选的第三个参数，包括 `maxWait` 选项。 详情请见`useDebounceFn`。

## 类型

```ts
/**
 * ref值防抖
 *
 * @return 新的防抖ref
 */
export declare function refDebounced<T>(
  value: Ref<T>,
  ms?: MaybeComputedRef<number>,
  options?: DebounceFilterOptions
): Readonly<Ref<T>>
export { refDebounced as useDebounce, refDebounced as debouncedRef }
```
