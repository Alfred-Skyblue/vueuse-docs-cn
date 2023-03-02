# useRouteHash

响应式 `route.hash` 的简写。

## 用法

```ts
import { useRouteHash } from '@vueuse/router'

const search = useRouteHash()

console.log(search.value) // route.hash
search.value = 'foobar' // router.replace({ hash: 'foobar' })
```


## 类型

```ts
export declare function useRouteHash(
  defaultValue?: string,
  { mode, route, router }?: ReactiveRouteOptions
): WritableComputedRef<string>
```
