# @vueuse/rxjs

> 这是 `VueUse` 的附加组件，支持以自然方式使用 RxJS。

## 安装

```bash
npm i @vueuse/rxjs rxjs
```

## 功能

- [`from`](https://vueuse.org/rxjs/from/) — / fromEvent
- [`toObserver`](https://vueuse.org/rxjs/toObserver/) — 将ref转换为Rxjs [Observer](https://rxjs.dev/guide/observer) 的语法糖
- [`useObservable`](https://vueuse.org/rxjs/useObservable/) — 使用 RxJS [`Observable`](https://rxjs.dev/guide/observable)
- [`useSubject`](https://vueuse.org/rxjs/useSubject/) — 将 RxJS  [`Subject`](https://rxjs.dev/guide/subject) 绑定到 `ref` 并双向传播值变化
- [`useSubscription`](https://vueuse.org/rxjs/useSubscription/) — use an RxJS [`Subscription`](https://rxjs.dev/guide/subscription) 使用 RxJS [`Subscription`](https://rxjs.dev/guide/subscription)  而不必担心取消订阅或造成内存泄漏



## 例子

```ts
import { from, fromEvent, useObservable } from '@vueuse/rxjs'
import { ref } from 'vue'
import { forkJoin, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { concatAll, map, mergeMap, pluck, scan, take } from 'rxjs/operators'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const button = ref<HTMLButtonElement>(null)

const posts = useObservable(
  fromEvent(button, 'click').pipe(
    mergeMap(() =>
      ajax.getJSON(`${BASE_URL}/posts`).pipe(
        concatAll(),
        take(4),
        mergeMap(
          ({ id, userId, title }) =>
            forkJoin({
              id: of(id),
              comments: ajax
                .getJSON(`${BASE_URL}/posts/${id}/comments`)
                .pipe(map(comments => comments.length)),
              username: ajax
                .getJSON(`${BASE_URL}/users/${userId}`)
                .pipe(pluck('username')),
            }),
          2
        ),
        scan((acc, curr) => [...acc, curr], [])
      )
    )
  )
)
```
