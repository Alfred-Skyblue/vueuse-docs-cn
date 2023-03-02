
# usePointerLock

响应式[指针锁定](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API).


## 演示

### 基本使用
<demo src="./demo.vue" title="usePointerLock" desc="响应式指针锁定"></demo>


### 组件使用

```html
<UsePointerLock v-slot="{ lock }">
  <canvas />
  <button @click="lock">
    在画布上锁定指针
  </button>
</UsePointerLock>
```

## 类型

```ts
declare global {
  interface PointerLockOptions {
    unadjustedMovement?: boolean
  }
  interface Element {
    requestPointerLock(options?: PointerLockOptions): Promise<void> | void
  }
}
type MaybeHTMLElement = HTMLElement | undefined | null
export interface UsePointerLockOptions extends ConfigurableDocument {
  pointerLockOptions?: PointerLockOptions
}
/**
 * 响应式指针锁定
 *
 * @see https://vueuse.org/usePointerLock
 * @param target
 * @param options
 */
export declare function usePointerLock(
  target?: MaybeElementRef<MaybeHTMLElement>,
  options?: UsePointerLockOptions
): {
  isSupported: Ref<boolean>
  element: Ref<MaybeHTMLElement>
  triggerElement: Ref<MaybeHTMLElement>
  lock: (
    e: MaybeElementRef<MaybeHTMLElement> | Event,
    options?: PointerLockOptions
  ) => Promise<HTMLElement>
  unlock: () => Promise<boolean>
}
export type UsePointerLockReturn = ReturnType<typeof usePointerLock>
```
