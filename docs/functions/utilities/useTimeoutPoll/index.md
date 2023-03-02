# useTimeoutPoll

轮询一些东西。它会在最后一个任务完成后触发回调。

## 演示

<demo src="./demo.vue" title="useTimeoutPoll" desc=""></demo>

## 用法

```ts
import { useTimeoutPoll } from '@vueuse/core'

const count = ref(0)

const fetchData = async () => {
  await promiseTimeout(1000)
  count.value++
}

// 仅在最后一次fetch完成后触发
const { isActive, pause, resume } = useTimeoutPoll(fetchData, 1000)
```

## 类型

```ts
export declare function useTimeoutPoll(
  fn: () => Awaitable<void>,
  interval: MaybeComputedRef<number>,
  timeoutPollOptions?: UseTimeoutFnOptions
): Pausable
```
