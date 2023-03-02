# useAxios

[`axios`](https://github.com/axios/axios)的包装器，在[@vueuse/integrations](https://vueuse.org/integrations/README)附加组件中可用。

## 演示

<demo src="./demo.vue" title="useAxios" desc=""></demo>

## 安装

```bash
npm i axios
```

## 用法

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { data, isFinished } = useAxios('/api/posts')
```

或者使用 axios 的实例

```ts
import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

const instance = axios.create({
  baseURL: '/api',
})

const { data, isFinished } = useAxios('/posts', instance)
```

使用带有配置选项的 axios 实例

```ts
import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

const instance = axios.create({
  baseURL: '/api',
})

const { data, isFinished } = useAxios('/posts', { method: 'POST' }, instance)
```

当你没有传递 `url`时，默认选项为`{immediate: false}`

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios()
execute(url)
```

`execute` 函数的 `url` 是可选的，url2 将替换 url1.
```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios(url1, {}, { immediate: false })
execute(url2)
```

`execute` 函数只能接受 `config`。

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios(url1, { method: 'GET' }, { immediate: false })
execute({ params: { key: 1 } })
execute({ params: { key: 2 } })
```

`execute` 函数获取请求的结果。

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios()
const result = await execute(url)
```

使用带有 `immediate` 选项的 axios 实例

```ts
import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

const instance = axios.create({
  baseURL: '/api',
})

const { data, isFinished } = useAxios('/posts', { method: 'POST' }, instance, {
  immediate: false,
})
```

## 类型

```ts
export interface UseAxiosReturn<T, R = AxiosResponse<T>, D = any> {
  /**
   * Axios 响应体
   */
  response: ShallowRef<R | undefined>
  /**
   * Axios 响应数据
   */
  data: Ref<T | undefined>
  /**
   * 表示请求是否已完成
   */
  isFinished: Ref<boolean>
  /**
   * 表示请求当前是否正在加载
   */
  isLoading: Ref<boolean>
  /**
   * 表示请求是否已取消
   */
  isAborted: Ref<boolean>
  /**
   * 可能发生的任何错误
   */
  error: ShallowRef<AxiosError<T, D> | undefined>
  /**
   * 中止当前请求
   */
  abort: (message?: string | undefined) => void
  /**
   * isFinished 别名
   * @deprecated use `isFinished` instead
   */
  finished: Ref<boolean>
  /**
   * isLoading 别名
   * @deprecated use `isLoading` instead
   */
  loading: Ref<boolean>
  /**
   * isAborted 别名
   * @deprecated use `isAborted` instead
   */
  aborted: Ref<boolean>
  /**
   * abort 别名
   */
  cancel: (message?: string | undefined) => void
  /**
   * isAborted 别名
   * @deprecated use `isCanceled` instead
   */
  canceled: Ref<boolean>
  /**
   * isAborted 别名
   */
  isCanceled: Ref<boolean>
}
export interface StrictUseAxiosReturn<T, R, D> extends UseAxiosReturn<T, R, D> {
  /**
   * 手动调用axios请求
   */
  execute: (
    url?: string | RawAxiosRequestConfig<D>,
    config?: RawAxiosRequestConfig<D>
  ) => PromiseLike<StrictUseAxiosReturn<T, R, D>>
}
export interface EasyUseAxiosReturn<T, R, D> extends UseAxiosReturn<T, R, D> {
  /**
   * 手动调用axios请求
   */
  execute: (
    url: string,
    config?: RawAxiosRequestConfig<D>
  ) => PromiseLike<EasyUseAxiosReturn<T, R, D>>
}
export interface UseAxiosOptions<T = any> {
  /**
   * 使用 useAxios 时会自动运行 axios 请求
   *
   */
  immediate?: boolean
  /**
   * 使用 shallowRef.
   *
   * @default true
   */
  shallow?: boolean
  /**
   * 响应错误的回调函数
   */
  onError?: (e: unknown) => void
  /**
   * 响应成功的回调函数
   */
  onSuccess?: (data: T) => void
}
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: RawAxiosRequestConfig<D>,
  options?: UseAxiosOptions<T>
): StrictUseAxiosReturn<T, R, D> & PromiseLike<StrictUseAxiosReturn<T, R, D>>
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  instance?: AxiosInstance,
  options?: UseAxiosOptions<T>
): StrictUseAxiosReturn<T, R, D> & PromiseLike<StrictUseAxiosReturn<T, R, D>>
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config: RawAxiosRequestConfig<D>,
  instance: AxiosInstance,
  options?: UseAxiosOptions<T>
): StrictUseAxiosReturn<T, R, D> & PromiseLike<StrictUseAxiosReturn<T, R, D>>
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  config?: RawAxiosRequestConfig<D>
): EasyUseAxiosReturn<T, R, D> & PromiseLike<EasyUseAxiosReturn<T, R, D>>
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  instance?: AxiosInstance
): EasyUseAxiosReturn<T, R, D> & PromiseLike<EasyUseAxiosReturn<T, R, D>>
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  config?: RawAxiosRequestConfig<D>,
  instance?: AxiosInstance
): EasyUseAxiosReturn<T, R, D> & PromiseLike<EasyUseAxiosReturn<T, R, D>>
```
