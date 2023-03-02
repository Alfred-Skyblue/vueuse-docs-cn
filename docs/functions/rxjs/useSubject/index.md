# useSubject

将 RxJS [`Subject`](https://rxjs.dev/guide/subject) 绑定到 `ref` 并双向传播值更改。
## 用法

```ts
import { useSubject } from '@vueuse/rxjs'
import { Subject } from 'rxjs'

const subject = new Subject()

// setup()
const subjectRef = useSubject(subject)
```

如果你想为可能出错的 `Subject` 添加自定义错误处理，你可以提供一个可选的 `onError` 配置。如果没有这个，`RxJS` 会将提供的可观察对象中的任何错误视为“未处理的错误”，并且它将被抛出到一个新的调用堆栈中并报告给 `window.onerror`（或者 `process.on('error')` 如果你恰好在节点中）。

```ts
import { useSubject } from '@vueuse/rxjs'
import { Subject } from 'rxjs'

const subject = new Subject()

// setup()
const subjectRef = useSubject(subject,
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
