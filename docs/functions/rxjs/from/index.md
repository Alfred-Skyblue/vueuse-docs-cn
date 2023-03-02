# from / fromEvent

包装 RxJS 的 [`from()`](https://rxjs.dev/api/index/function/from) 和 [`fromEvent()`](https://rxjs.dev/api/index/function/fromEvent) 以允许它们接受 ref。

## 用法

```ts
import { ref } from 'vue'
import { from, fromEvent, toObserver, useSubscription } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { map, mapTo, takeUntil, withLatestFrom } from 'rxjs/operators'

const count = ref(0)
const button = ref<HTMLButtonElement>(null)

useSubscription(
  interval(1000)
    .pipe(
      mapTo(1),
      takeUntil(fromEvent(button, 'click')),
      withLatestFrom(from(count, {
        immediate: true,
        deep: false,
      })),
      map(([curr, total]) => curr + total),
    )
    .subscribe(toObserver(count)), // same as ).subscribe(val => (count.value = val))
)
```

## 类型

```ts
export declare function from<T>(
  value: ObservableInput<T> | Ref<T>,
  watchOptions?: WatchOptions
): Observable<T>
export declare function fromEvent<T extends HTMLElement>(
  value: MaybeRef<T>,
  event: string
): Observable<Event>
```
