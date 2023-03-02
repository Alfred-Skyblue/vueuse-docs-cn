# useEyeDropper

响应式 [`EyeDropper API`](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API)。

## 演示

### 基础使用

<demo src="./demo.vue" title="useEyeDropper" desc="使用吸管吸取颜色"></demo>

### 组件使用

```html
<UseEyeDropper v-slot="{ isSupported, sRGBHex, open }">
    <button :disabled="!isSupported" @click="open">sRGBHex: {{ sRGBHex }}</button>
</UseEyeDropper>
```

## 类型

```ts
export interface EyeDropperOpenOptions {
  /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
  signal?: AbortSignal
}
export interface EyeDropper {
  new (): EyeDropper
  open: (options?: EyeDropperOpenOptions) => Promise<{
    sRGBHex: string
  }>
  [Symbol.toStringTag]: 'EyeDropper'
}
export interface UseEyeDropperOptions {
  /**
     * 初始化颜色
     *
     * @default ''
     */
  initialValue?: string
}
/**
 * 响应式 [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API)
 *
 * @see https://vueuse.org/useEyeDropper
 * @param initialValue string
 */
export declare function useEyeDropper(options?: UseEyeDropperOptions): {
  isSupported: Ref<boolean>
  sRGBHex: Ref<string>
  open: (openOptions?: EyeDropperOpenOptions) => Promise<
        | {
          sRGBHex: string
        }
        | undefined
    >
}
export type UseEyeDropperReturn = ReturnType<typeof useEyeDropper>
```
