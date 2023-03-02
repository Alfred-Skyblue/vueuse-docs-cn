# useObservable

使用 RxJS [`Observable`](https://rxjs.dev/guide/observable)，返回一个 `ref`，并在卸载组件时自动取消订阅。

## 用法

```ts
import { ref } from 'vue'
import { useObservable } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { mapTo, scan, startWith } from 'rxjs/operators'

// setup()
const count = useObservable(
  interval(1000).pipe(
    mapTo(1),
    startWith(0),
    scan((total, next) => next + total),
  ),
)
```

If you want to add custom error handling to an `Observable` that might error, you can supply an optional `onError` configuration. Without this, RxJS will treat any error in the supplied `Observable` as an "unhandled error" and it will be thrown in a new call stack and reported to `window.onerror` (or `process.on('error')` if you happen to be in Node).

如果您想向可能出错的 `Observable` 添加自定义错误处理，您可以提供一个可选的 `onError` 配置。否则，`RxJS` 会将提供的 `Observable` 中的任何错误视为“未处理的错误”，并将其抛出到新的调用堆栈中并报告给 `window.onerror`（或 `process.on('error')`如果你碰巧在 Node 中）。

```ts
import { ref } from 'vue'
import { useObservable } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

// setup()
const count = useObservable(
  interval(1000).pipe(
    map((n) => {
      if (n === 10)
        throw new Error('oops')

      return n + n
    }),
  ),
  {
    onError: (err) => {
      console.log(err.message) // "oops"
    },
  },
)
```

## 类型

```ts
export interface UseSubjectOptions<I = undefined>
  extends Omit<UseObservableOptions<I>, 'initialValue'> {}
export declare function useSubject<H>(
  subject: BehaviorSubject<H>,
  options?: UseSubjectOptions
): Ref<H>
export declare function useSubject<H>(
  subject: Subject<H>,
  options?: UseSubjectOptions
): Ref<H | undefined>
```

