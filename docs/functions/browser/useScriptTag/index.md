# useScriptTag

注入 script 标签。

## 用法

```ts
import { useScriptTag } from '@vueuse/core'

useScriptTag(
  'https://unpkg.com/axios/dist/axios.min.js',
  // 加载 axios
  (el: HTMLScriptElement) => {
    // 加载完成后，可以在 window 上找到 axios
    console.log(window.axios)
  },
)
```
加载的script标签会在组件卸载时自动移除。

# 配置

设置 `manual: true` 为手动控制加载和卸载。

```ts
import { useScriptTag } from '@vueuse/core'

const { scriptTag, load, unload } = useScriptTag(
  'https://unpkg.com/axios/dist/axios.min.js',
  () => {
    // 加载完成
  },
  { manual: true },
)

// 加载 script 标签
await load()
// 卸载 script 标签
await unload()
```


## 类型

```ts
export interface UseScriptTagOptions extends ConfigurableDocument {
  /**
   * 立即加载 script 标签
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 将 async 属性添加到 script 标签
   *
   * @default true
   */
  async?: boolean
  /**
   * Script type
   *
   * @default 'text/javascript'
   */
  type?: string
  /**
   * 手动控制加载和卸载
   *
   * @default false
   */
  manual?: boolean
  crossOrigin?: 'anonymous' | 'use-credentials'
  referrerPolicy?:
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url'
  noModule?: boolean
  defer?: boolean
  /**
   * 添加其他属性
   *
   */
  attrs?: Record<string, string>
}
/**
 * 加载 script 标签
 *
 * @see https://vueuse.org/useScriptTag
 * @param src
 * @param onLoaded
 * @param options
 */
export declare function useScriptTag(
  src: MaybeComputedRef<string>,
  onLoaded?: (el: HTMLScriptElement) => void,
  options?: UseScriptTagOptions
): {
  scriptTag: Ref<HTMLScriptElement | null>
  load: (waitForScriptLoad?: boolean) => Promise<HTMLScriptElement | boolean>
  unload: () => void
}
export type UseScriptTagReturn = ReturnType<typeof useScriptTag>
```
