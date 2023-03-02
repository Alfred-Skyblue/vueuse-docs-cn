# useFetch

响应式 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)，提供中止请求、在请求被触发之前拦截请求、在 `url` 更改时自动重新获取请求以及使用预定义选项创建您自己的请求的能力 `useFetch`。

::: tip
与 Nuxt 3 一起使用时，不会自动导入此功能以支持 Nuxt 的内置useFetch(). 如果你想使用 VueUse 中的函数，请使用显式导入。
:::

## 演示

### 基础使用

<demo src="./demo.vue" title="useFetch" desc="使用fetch请求"></demo>


## 用法

### 基础使用

`useFetch` 只需提供一个 `url` 即可使用该功能。`url` 可以是字符串或 `ref`，该 `data` 对象将包含请求的结果，该 `error` 对象将包含任何错误，并且该 `isFetching` 对象将表示请求是否正在加载。

```ts
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = useFetch(url)
```

### 异步使用

useFetch也可以像正常获取一样等待。请注意，只要组件是异步的，使用它的任何组件都必须将组件包装在标记中<Suspense/>。您可以在[Offical Vue 3 Docs](https://vuejs.org/guide/built-ins/suspense.html)中阅读有关 suspense api 的更多信息

```ts
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = await useFetch(url)
```

### 更改 URL 重新获取


使用 `ref` 作为 `url` 参数，当 `ref` 的值更改时，`useFetch` 将自动重新获取请求。

```ts
const url = ref('https://my-api.com/user/1')

const { data } = useFetch(url, { refetch: true })

url.value = 'https://my-api.com/user/2' // 重新触发请求
```

### 阻止请求立即触发

将选项设置 `immediate` 为 `false` 将阻止请求在 `execute` 调用函数之前触发。

```ts
const { execute } = useFetch(url, { immediate: false })

execute()
```

### 中止请求


`abort` 函数可以中止请求 `useFetch`。该 `canAbort` 属性表示是否可以中止请求。

```ts
const { abort, canAbort } = useFetch(url)

setTimeout(() => {
  if (canAbort.value)
    abort()
}, 100)
```


也可以使用属性自动中止请求 `timeout`。`abort` 当达到给定的超时时，它将调用函数。
```ts
const { data } = useFetch(url, { timeout: 100 })
```

### Intercepting a request

`beforeFetch` 选项可以在发送请求之前拦截请求并修改请求选项和url。


```ts
const { data } = useFetch(url, {
  async beforeFetch({ url, options, cancel }) {
    const myToken = await getMyToken()

    if (!myToken)
      cancel()

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${myToken}`,
    }

    return {
      options,
    }
  },
})
```

`afterFetch` 选项可以在更新之前拦截响应数据。

```ts
const { data } = useFetch(url, {
  afterFetch(ctx) {
    if (ctx.data.title === 'HxH')
      ctx.data.title = 'Hunter x Hunter' // 修改响应数据

    return ctx
  },
})
```

该 `onFetchError` 选项可以在更新之前拦截响应数据和错误。

```ts
const { data } = useFetch(url, {
  onFetchError(ctx) {
    // 5xx 响应时 ctx.data 可以为 null
    if (ctx.data === null)
      ctx.data = { title: 'Hunter x Hunter' } // 修改响应数据

    ctx.error = new Error('Custom Error') // 修改错误

    return ctx
  },
})
```

### 设置请求方法和返回类型


可以通过在末尾添加适当的方法来设置请求方法和返回类型useFetch

```ts
// 请求将使用 GET 方法发送，数据将被解析为 JSON
const { data } = useFetch(url).get().json()

// 请求将使用 POST 方法发送，数据将被解析为文本
const { data } = useFetch(url).post().text()

// 或者使用选项设置方法

// 请求将使用 GET 方法发送，数据将被解析为 blob
const { data } = useFetch(url, { method: 'GET' }, { refetch: true }).blob()
```

### 创建自定义实例

该 `createFetch` 函数将返回一个 `useFetch` 函数，其中包含提供给它的任何预配置选项。这对于在使用相同基本 `URL` 或需要授权标头的整个应用程序中与 `API` 交互非常有用。

```ts
const useMyFetch = createFetch({
  baseUrl: 'https://my-api.com',
  options: {
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

const { isFetching, error, data } = useMyFetch('users')
```

`beforeFetch` 如果你想控制, `afterFetch,onFetchError` 在预配置实例和新生成的实例之间的行为。您可以提供在 或 `combination` 之间切换的选项。`overwritechaining`

```ts
const useMyFetch = createFetch({
  baseUrl: 'https://my-api.com',
  combination: 'overwrite',
  options: {
    // 预配置实例中的 beforeFetch 仅在新生成的实例未通过 beforeFetch 时运行
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
})

// 在获取之前使用 useMyFetch
const { isFetching, error, data } = useMyFetch('users')

// 使用自定义 beforeFetch
const { isFetching, error, data } = useMyFetch('users', {
  async beforeFetch({ url, options, cancel }) {
    const myToken = await getMyToken()

    if (!myToken)
      cancel()

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${myToken}`,
    }

    return {
      options,
    }
  },
})
```

### 事件

将分别在获取请求响应和错误 `onFetchResponse` 时 `onFetchError` 触发。

```ts
const { onFetchResponse, onFetchError } = useFetch(url)

onFetchResponse((response) => {
  console.log(response.status)
})

onFetchError((error) => {
  console.error(error.message)
})
```

## 类型

```ts
export interface UseFetchReturn<T> {
  /**
   * 指请求是否已完成
   */
  isFinished: Ref<boolean>
  /**
   * HTTP 获取响应的 statusCode
   */
  statusCode: Ref<number | null>
  /**
   * 获取响应的原始响应
   */
  response: Ref<Response | null>
  /**
   * 可能发生的任何fetch错误
   */
  error: Ref<any>
  /**
   * 获取响应主体，可以是 JSON 或文本
   */
  data: Ref<T | null>
  /**
   * 表示当前是否正在获取请求。
   */
  isFetching: Ref<boolean>
  /**
   * 表示是否能够中止请求
   */
  canAbort: ComputedRef<boolean>
  /**
   * 表示获取请求是否已中止
   */
  aborted: Ref<boolean>
  /**
   * 终止请求的函数
   */
  abort: Fn
  /**
   * 手动调用 fetch
   */
  execute: (throwOnFailed?: boolean) => Promise<any>
  /**
   * 获取请求完成后触发
   */
  onFetchResponse: EventHookOn<Response>
  /**
   * 请求错误后触发
   */
  onFetchError: EventHookOn
  /**
   * 请求完成后触发
   */
  onFetchFinally: EventHookOn
  get(): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
  post(
    payload?: MaybeComputedRef<unknown>,
    type?: string
  ): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
  put(
    payload?: MaybeComputedRef<unknown>,
    type?: string
  ): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
  delete(
    payload?: MaybeComputedRef<unknown>,
    type?: string
  ): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
  patch(
    payload?: MaybeComputedRef<unknown>,
    type?: string
  ): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
  head(
    payload?: MaybeComputedRef<unknown>,
    type?: string
  ): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
  options(
    payload?: MaybeComputedRef<unknown>,
    type?: string
  ): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
  json<JSON = any>(): UseFetchReturn<JSON> & PromiseLike<UseFetchReturn<JSON>>
  text(): UseFetchReturn<string> & PromiseLike<UseFetchReturn<string>>
  blob(): UseFetchReturn<Blob> & PromiseLike<UseFetchReturn<Blob>>
  arrayBuffer(): UseFetchReturn<ArrayBuffer> &
  PromiseLike<UseFetchReturn<ArrayBuffer>>
  formData(): UseFetchReturn<FormData> & PromiseLike<UseFetchReturn<FormData>>
}
type Combination = 'overwrite' | 'chain'
export interface BeforeFetchContext {
  /**
   * 当前请求的url
   */
  url: string
  /**
   * 当前请求的请求选项
   */
  options: RequestInit
  /**
   * 取消当前请求
   */
  cancel: Fn
}
export interface AfterFetchContext<T = any> {
  response: Response
  data: T | null
}
export interface OnFetchErrorContext<T = any, E = any> {
  error: E
  data: T | null
}
export interface UseFetchOptions {
  /**
   * fetch 函数
   */
  fetch?: typeof window.fetch
  /**
   * 使用 useFetch 时会自动运行 fetch
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 在以下情况下将自动重新获取：
   * - 如果 URL 是 ref，则 URL 更改时
   * - 如果参数是ref，则有在参数变更时
   * @default false
   */
  refetch?: MaybeComputedRef<boolean>
  /**
   * 请求完成前的初始数据
   *
   * @default null
   */
  initialData?: any
  /**
   * 在毫秒数后中止请求超时 `0` 表示使用浏览器默认值
   *
   * @default 0
   */
  timeout?: number
  /**
   * 将在fetch请求之前立即运行
   */
  beforeFetch?: (
    ctx: BeforeFetchContext
  ) =>
  | Promise<Partial<BeforeFetchContext> | void>
  | Partial<BeforeFetchContext>
  | void
  /**
   * 将在返回 fetch 请求后立即运行。在任何 2xx 响应之后运行
   */
  afterFetch?: (
    ctx: AfterFetchContext
  ) => Promise<Partial<AfterFetchContext>> | Partial<AfterFetchContext>
  /**
   * 将在返回fetch请求后立即运行。在任何 4xx 和 5xx 响应后运行
   */
  onFetchError?: (ctx: {
    data: any
    response: Response | null
    error: any
  }) => Promise<Partial<OnFetchErrorContext>> | Partial<OnFetchErrorContext>
}
export interface CreateFetchOptions {
  /**
   * 除非 url 是绝对路径，否则将作为所有 url 前缀的基本 URL
   */
  baseUrl?: MaybeComputedRef<string>
  /**
   * 确定 beforeFetch、afterFetch、onFetchError 的继承行为
   * @default 'chain'
   */
  combination?: Combination
  /**
   * useFetch 函数的默认选项
   */
  options?: UseFetchOptions
  /**
   * 获取请求的选项
   */
  fetchOptions?: RequestInit
}
export declare function createFetch(
  config?: CreateFetchOptions
): typeof useFetch
export declare function useFetch<T>(
  url: MaybeComputedRef<string>
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
export declare function useFetch<T>(
  url: MaybeComputedRef<string>,
  useFetchOptions: UseFetchOptions
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
export declare function useFetch<T>(
  url: MaybeComputedRef<string>,
  options: RequestInit,
  useFetchOptions?: UseFetchOptions
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>
```
