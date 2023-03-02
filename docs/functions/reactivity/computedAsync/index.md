# computedAsync

异步计算属性

## 用法

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const name = ref('jack')

const userInfo = computedAsync(
  async () => {
    return await mockLookUp(name.value)
  },
  null, // initial state
)
```

### Evaluating

如果异步函数正在执行，您将需要传递一个 ref 来跟踪。

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const evaluating = ref(false)

const userInfo = computedAsync(
  async () => { /* your logic */ },
  null,
  evaluating,
)
```

### onCancel

当计算数据源源在前一个异步函数得到解析之前发生变化时，您可能想要取消前一个。下面是一个示例，展示了如何与 fetch API 结合。

```js
const packageName = ref('@vueuse/core')

const downloads = computedAsync(async (onCancel) => {
  const abortController = new AbortController()

  onCancel(() => abortController.abort())

  return await fetch(
    `https://api.npmjs.org/downloads/point/last-week/${packageName.value}`,
    { signal: abortController.signal },
  )
    .then(response => response.ok ? response.json() : { downloads: '—' })
    .then(result => result.downloads)
}, 0)
```

### 惰性

默认情况下，`computedAsync` 将在创建时立即开始解析，指定 `lazy: true` 使其在第一次访问时开始解析。

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const evaluating = ref(false)

const userInfo = computedAsync(
  async () => { /* your logic */ },
  null,
  { lazy: true, evaluating },
)
```

## 注意事项

- 就像 `Vue` 的内置 `computed` 函数一样，`computedAsync` 进行依赖跟踪，并在依赖发生变化时自动更新。但是请注意，为此只考虑在第一个调用堆栈中引用的依赖项。换句话说：异步访问的依赖项不会触发异步计算值的更新。

- 与 `Vue` 的内置 `computed` 函数相反，只要依赖项发生变化，就会触发异步计算值的重新计算，而不管其结果当前是否正在被跟踪。

- 默认值将在下一个主要版本中 `shallow` 更改为 `true`


## 类型

```ts
/**
 * 处理重叠的异步更新。
 *
 * @param cancelCallback 当在前一个计算值完成之前触发对计算值的重新更新时，将调用提供的回调
 */
export type AsyncComputedOnCancel = (cancelCallback: Fn) => void
export interface AsyncComputedOptions {
  /**
   * 惰性加载
   *
   * @default false
   */
  lazy?: boolean
  /**
   * 传递 Ref 以接收异步状态是否正在进行
   */
  evaluating?: Ref<boolean>
  /**
   * 使用 shallowRef
   *
   * 默认值将在下一个主要版本中更改为 `true`
   *
   * @default false
   */
  shallow?: boolean
  /**
   * 捕获错误时回调。
   */
  onError?: (e: unknown) => void
}
/**
 * 异步计算属性
 *
 * @see https://vueuse.org/computedAsync
 * @param evaluationCallback     The promise-returning callback which generates the computed value
 * @param initialState           The initial state, used until the first evaluation finishes
 * @param optionsOrRef           Additional options or a ref passed to receive the updates of the async evaluation
 */
export declare function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState?: T,
  optionsOrRef?: Ref<boolean> | AsyncComputedOptions
): Ref<T>
export { computedAsync as asyncComputed }
```
