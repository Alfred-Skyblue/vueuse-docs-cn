# createEventHook

创建事件钩子函数

## 用法


创建一个钩子函数 `createEventHook`

```ts
import { createEventHook } from '@vueuse/core'

export function useMyFetch(url) {
  const fetchResult = createEventHook<Response>()
  const fetchError = createEventHook<any>()

  fetch(url)
    .then(result => fetchResult.trigger(result))
    .catch(error => fetchError.trigger(error.message))

  return {
    onResult: fetchResult.on,
    onError: fetchError.on,
  }
}
```

使用钩子函数
```html
<script setup lang="ts">
import { useMyFetch } from './my-fetch-function'

const { onResult, onError } = useMyFetch('my api url')

onResult((result) => {
  console.log(result)
})

onError((error) => {
  console.error(error)
})
</script>
```


## 类型

```ts
export type EventHookOn<T = any> = (fn: (param: T) => void) => {
  off: () => void
}
export type EventHookOff<T = any> = (fn: (param: T) => void) => void
export type EventHookTrigger<T = any> = (param: T) => void
export interface EventHook<T = any> {
  on: EventHookOn<T>
  off: EventHookOff<T>
  trigger: EventHookTrigger<T>
}
/**
 * 创建一个事件钩子函数
 *
 * @see https://vueuse.org/createEventHook
 */
export declare function createEventHook<T = any>(): EventHook<T>
```
