# toObserver

将 `ref` 转换为 `RxJS` [Observer](https://rxjs.dev/guide/observer) 的糖函数。

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
      withLatestFrom(from(count).pipe(startWith(0))),
      map(([total, curr]) => curr + total),
    )
    .subscribe(toObserver(count)), // same as ).subscribe(val => (count.value = val))
)
```


## 类型

```ts
export declare function toObserver<T>(value: Ref<T>): NextObserver<T>
```
