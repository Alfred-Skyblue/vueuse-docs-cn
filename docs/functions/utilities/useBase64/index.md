# useBase64

响应式 base64 转换. 支持：  `text, buffer, files, canvas, objects, maps, sets and images.`

## 演示

<demo src="./demo.vue" title="useBase64" desc="转换为base64"></demo>



## 用法

```ts
import { Ref, ref } from 'vue'
import { useBase64 } from '@vueuse/core'

const text = ref('')

const { base64 } = useBase64(text)
```

如果您使用对象、数组、Map或Set，您可以在选项中提供序列化程序。否则，您的数据将由默认序列化程序序列化，对象和数组将通过 JSON.stringify 转换为字符串， map 和 set 在 stringify 之前会分别转化为 object 和 array。



## 类型

```ts
export interface ToDataURLOptions {
  /**
   * 类型
   */
  type?: string | undefined
  /**
   * jpeg 或 webp 的图像
   */
  quality?: any
}
export interface UseBase64ObjectOptions<T> {
  serializer: (v: T) => string
}
export interface UseBase64Return {
  base64: Ref<string>
  promise: Ref<Promise<string>>
  execute: () => Promise<string>
}
export declare function useBase64(
  target: MaybeComputedRef<string>
): UseBase64Return
export declare function useBase64(
  target: MaybeComputedRef<Blob>
): UseBase64Return
export declare function useBase64(
  target: MaybeComputedRef<ArrayBuffer>
): UseBase64Return
export declare function useBase64(
  target: MaybeComputedRef<HTMLCanvasElement>,
  options?: ToDataURLOptions
): UseBase64Return
export declare function useBase64(
  target: MaybeComputedRef<HTMLImageElement>,
  options?: ToDataURLOptions
): UseBase64Return
export declare function useBase64<T extends Record<string, unknown>>(
  target: MaybeComputedRef<T>,
  options?: UseBase64ObjectOptions<T>
): UseBase64Return
export declare function useBase64<T extends Map<string, unknown>>(
  target: MaybeComputedRef<T>,
  options?: UseBase64ObjectOptions<T>
): UseBase64Return
export declare function useBase64<T extends Set<unknown>>(
  target: MaybeComputedRef<T>,
  options?: UseBase64ObjectOptions<T>
): UseBase64Return
export declare function useBase64<T>(
  target: MaybeComputedRef<T[]>,
  options?: UseBase64ObjectOptions<T[]>
): UseBase64Return
```
