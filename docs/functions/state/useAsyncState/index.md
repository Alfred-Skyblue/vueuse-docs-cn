# useAsyncState

响应式获取异步状态，在 `Promise` 完成后，自动更新状态，这在我们进行异步操作获取数据时很有用

## 演示

<demo src="./demo.vue" title="" desc=""></demo>

## 类型

```ts
export interface UseAsyncStateReturn<Data, Params extends any[], Shallow extends boolean> {
  state: Shallow extends true ? Ref<Data> : Ref<UnwrapRef<Data>>
  isReady: Ref<boolean>
  isLoading: Ref<boolean>
  error: Ref<unknown>
  execute: (delay?: number, ...args: Params) => Promise<Data>
}
export interface UseAsyncStateOptions<Shallow extends boolean, D = any> {
  /**
     * 延迟执行 Promise 的时间，单位为毫秒
     * @default 0
     */
  delay?: number
  /**
     * 在调用函数后立即执行 Promise。当设置为 false 时，您将需要手动执行它。
     *
     * @default true
     */
  immediate?: boolean
  /**
     * 捕获错误的回调
     */
  onError?: (e: unknown) => void
  /**
     * 捕获成功时回调。
     * @param {D} data
     */
  onSuccess?: (data: D) => void
  /**
     * 在执行Promise之前将状态设置为 initialState。这在多次调用执行函数时很有用（例如，刷新数据）。当设置为 false 时，当前状态保持不变，直到Promise完成。
     *
     * @default true
     */
  resetOnExecute?: boolean
  /**
     * 使用 shallowRef.
     *
     * @default true
     */
  shallow?: Shallow
  /**
     *
     * 执行 Promise reject 时抛出错误
     *
     * @default false
     */
  throwError?: boolean
}
/**
 * 响应式获取异步状态，在 `Promise` 完成后，自动更新状态，这在我们进行异步操作获取数据时很有用
 * @param promise 要执行的Promise，或者返回Promise的函数
 * @param initialState   初始状态，在第一次执行完成之前使用
 * @param options
 */
export declare function useAsyncState<Data, Params extends any[] = [], Shallow extends boolean = true>(
  promise: Promise<Data> | ((...args: Params) => Promise<Data>),
  initialState: Data,
  options?: UseAsyncStateOptions<Shallow, Data>
): UseAsyncStateReturn<Data, Params, Shallow>
```
