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
export interface UseAxiosReturn<T, R = AxiosResponse<T>, _D = any> {
    /**
     * Axios 返回的响应对象
     */
    response: ShallowRef<R | undefined>
    /**
     * Axios 返回的响应数据
     */
    data: Ref<T | undefined>
    /**
     * 表示请求是否已完成
     */
    isFinished: Ref<boolean>
    /**
     * 表示请求是否正在加载中
     */
    isLoading: Ref<boolean>
    /**
     * 表示请求是否已被取消
     */
    isAborted: Ref<boolean>
    /**
     * 表示发生的任何错误
     */
    error: ShallowRef<unknown | undefined>
    /**
     * 取消当前请求
     */
    abort: (message?: string | undefined) => void
    /**
     * `abort` 的别名
     */
    cancel: (message?: string | undefined) => void
    /**
     * `isAborted` 的别名
     */
    isCanceled: Ref<boolean>
}

// 严格模式下的 useAxios 函数返回类型
export interface StrictUseAxiosReturn<T, R, D> extends UseAxiosReturn<T, R, D> {
    /**
     * 手动调用 axios 请求
     */
    execute: (
        url?: string | AxiosRequestConfig<D>,
        config?: AxiosRequestConfig<D>
    ) => Promise<StrictUseAxiosReturn<T, R, D>>
}

// 简单模式下的 useAxios 函数返回类型
export interface EasyUseAxiosReturn<T, R, D> extends UseAxiosReturn<T, R, D> {
    /**
     * 手动调用 axios 请求
     */
    execute: (
        url: string,
        config?: AxiosRequestConfig<D>
    ) => Promise<EasyUseAxiosReturn<T, R, D>>
}

// useAxios 函数的配置选项
export interface UseAxiosOptions<T = any> {
    /**
     * 当使用 `useAxios` 时是否自动运行 axios 请求
     */
    immediate?: boolean
    /**
     * 是否使用 shallowRef
     *
     * @default true
     */
    shallow?: boolean
    /**
     * 捕获错误时的回调函数
     */
    onError?: (e: unknown) => void
    /**
     * 捕获成功时的回调函数
     */
    onSuccess?: (data: T) => void
    /**
     * 初始数据
     */
    initialData?: T
    /**
     * 在执行 Promise 前将状态设置为 initialState
     */
    resetOnExecute?: boolean
    /**
     * 请求完成时的回调函数
     */
    onFinish?: () => void
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
