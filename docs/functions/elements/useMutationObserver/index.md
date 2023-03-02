# useMutationObserver

监听 `DOM` 的修改. [`MutationObserver MDN`](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)

## 演示

<demo src="./demo.vue" title="useMutationObserver" desc="实时监听DOM的变化"></demo>

## 类型

```ts
export interface UseMutationObserverOptions extends MutationObserverInit, ConfigurableWindow {}
/**
 * 观察对 DOM 树所做的更改。
 *
 * @see https://vueuse.org/useMutationObserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver MutationObserver MDN
 * @param target
 * @param callback
 * @param options
 */
export declare function useMutationObserver(
  target: MaybeElementRef,
  callback: MutationCallback,
  options?: UseMutationObserverOptions
): {
  isSupported: Ref<boolean>
  stop: () => void
}
export type UseMutationObserverReturn = ReturnType<typeof useMutationObserver>
```
