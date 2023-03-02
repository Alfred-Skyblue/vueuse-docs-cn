# whenever

观察值是真实的，然后执行回调。

## 用法

```ts
import { useAsyncState, whenever } from '@vueuse/core'

const { state, isReady } = useAsyncState(
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(t => t.json()),
  {},
)

whenever(isReady, () => console.log(state))
```

```ts
// this
whenever(ready, () => console.log(state))

// is equivalent to:
watch(ready, (isReady) => {
  if (isReady)
    console.log(state)

})
```

### 回调函数

与 `watch` 相同，将调用回调 `cb(value, oldValue, onInvalidate)`。



```ts
whenever(height, (current, lastHeight) => {
  if (current > lastHeight)
    console.log(`Increasing height by ${current - lastHeight}`)

})
```

### Computed

与 `watch` 相同，您可以传递一个 `getter` 函数来计算每个更改。



```ts
// this
whenever(
  () => counter.value === 7,
  () => console.log('counter is 7 now!'),
)
```

### Options

选项和默认值与 `watch`.

```ts
// this
whenever(
  () => counter.value === 7,
  () => console.log('counter is 7 now!'),
  { flush: 'sync' },
)
```


## 类型

```ts
/**
 * 观察值是真实的，然后执行回调。
 *
 * @see https://vueuse.org/whenever
 */
export declare function whenever<T>(
  source: WatchSource<T | false | null | undefined>,
  cb: WatchCallback<T>,
  options?: WatchOptions
): WatchStopHandle
```
