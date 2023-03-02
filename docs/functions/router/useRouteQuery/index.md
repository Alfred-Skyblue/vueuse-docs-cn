---
category: '@Router'
---

# useRouteQuery

响应式 `route.query`.

## 用法

```ts
import { useRouteQuery } from '@vueuse/router'

const search = useRouteQuery('search')

const search = useRouteQuery('search', 'foo') // or with a default value

console.log(search.value) // route.query.search
search.value = 'foobar' // router.replace({ query: { search: 'foobar' } })
```


## 类型

```ts
export declare function useRouteQuery(
  name: string
): Ref<null | string | string[]>
export declare function useRouteQuery<
  T extends null | undefined | string | string[] = null | string | string[]
>(name: string, defaultValue?: T, options?: ReactiveRouteOptions): Ref<T>
```
