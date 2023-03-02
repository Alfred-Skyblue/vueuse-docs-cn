# useUrlSearchParams

响应式操作 [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)


## 演示

<demo src="./demo.vue" title="useUrlSearchParams" desc="响应式获取 URL 参数"></demo>

## 用法

### history 模式

```ts
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')

console.log(params.foo) // 'bar'

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `?foo=bar&vueuse=awesome`
```

### hash 模式

```ts
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('hash')

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `#/your/route?foo=bar&vueuse=awesome`
```

### hash 参数

当使用 history 模式，但是需要在 hash 中传递参数时，可以使用 `hash-params` 模式
```ts
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('hash-params')

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `/your/route#foo=bar&vueuse=awesome`
```

## 类型

```ts
export type UrlParams = Record<string, string[] | string>
export interface UseUrlSearchParamsOptions<T> extends ConfigurableWindow {
  /**
   * 删除空值
   * @default true
   */
  removeNullishValues?: boolean
  /**
   * 删除假值
   * @default false
   */
  removeFalsyValues?: boolean
  /**
   * 初始值
   * @default {}
   */
  initialValue?: T
  /**
   * 是否响应式写入
   * @default true
   */
  write?: boolean
}
/**
 * 响应式 URLSearchParams
 *
 * @see https://vueuse.org/useUrlSearchParams
 * @param mode
 * @param options
 */
export declare function useUrlSearchParams<
  T extends Record<string, any> = UrlParams
>(
  mode?: 'history' | 'hash' | 'hash-params',
  options?: UseUrlSearchParamsOptions<T>
): T
```
