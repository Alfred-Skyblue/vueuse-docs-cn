# useDebounceFn

使用防抖函数

## 演示

<demo src="./demo.vue" title="useDebounceFn" desc="使用防抖函数"></demo>

## 用法

```js
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

window.addEventListener('resize', debouncedFn)
```

You can also pass a 3rd parameter to this, with a maximum wait time, similar to [lodash debounce](https://lodash.com/docs/4.17.15#debounce)

```js
import { useDebounceFn } from '@vueuse/core'

// 如果重复输入5000ms后没有调用，
// 无论如何都会调用该函数。
const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000, { maxWait: 5000 })

window.addEventListener('resize', debouncedFn)
```

或者，您可以使用 `promise` 操作获取函数的返回值。

```js
import { useDebounceFn } from '@vueuse/core'
const debouncedRequest = useDebounceFn(() => 'response', 1000)

debouncedRequest().then((value) => {
  console.log(value) // 'response'
})

// or use async/await
async function doRequest() {
  const value = await debouncedRequest()
  console.log(value) // 'response'
}
```

由于未处理的拒绝错误在开发人员不需要返回值时非常烦人，因此如果默认取消函数，则不会拒绝Promise。您需要指定捕获拒绝的选项。`rejectOnCancel: true`


```js
import { useDebounceFn } from '@vueuse/core'
const debouncedRequest = useDebounceFn(() => 'response', 1000, { rejectOnCancel: true })

debouncedRequest()
  .then((value) => {
    // do something
  })
  .catch(() => {
    // do something when canceled
  })

// 再次调用它会取消之前的请求并被拒绝
setTimeout(debouncedRequest, 500)
```

## 类型

```ts
interface DebounceFilterOptions {
  /**
   * 在调用它之前允许延迟的最长时间。以毫秒为单位。
   */
  maxWait?: MaybeComputedRef<number>

  /**
   * 如果已取消，是否拒绝最后一次调用。
   *
   * @default false
   */
  rejectOnCancel?: boolean
}

/**
 * 使用防抖函数
 *
 * @see https://vueuse.org/useDebounceFn
 * @param  fn  - 要执行的函数
 * @param  ms  - 以毫秒为单位的零延迟或更大延迟。对于事件回调，100 或 250（甚至更高）左右的值最有用。
 * @param  opts        options
 *
 * @return 返回一个防抖函数
 */
export declare function useDebounceFn<T extends FunctionArgs>(
  fn: T,
  ms?: MaybeComputedRef<number>,
  options?: DebounceFilterOptions
): PromisifyFn<T>
```
