# useRouteParams

响应式 `route.params`.

## 用法

```ts
import { useRouteParams } from '@vueuse/router'

const userId = useRouteParams('userId')

const userId = useRouteParams('userId', '-1') // or with a default value

console.log(userId.value) // route.params.userId
userId.value = '100' // router.replace({ params: { userId: '100' } })
```

## 类型

```ts
export declare function useRouteParams(
  name: string
): Ref<null | string | string[]>
export declare function useRouteParams<
  T extends null | undefined | string | string[] = null | string | string[]
>(name: string, defaultValue?: T, options?: ReactiveRouteOptions): Ref<T>
```
