# useRTDB

Reactive [Firebase Realtime Database](https://firebase.google.com/docs/database) binding. Making it straightforward to **always keep your local data in sync** with remotes databases.

响应式 [Firebase Realtime Database](https://firebase.google.com/docs/database) 实时数据库绑定。让您的本地数据始终与远程数据库保持同步变得简单明了。在[@vueuse/firebase](https://vueuse.org/firebase/README)附加组件中可用。


## 用法

```js
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { useRTDB } from '@vueuse/firebase/useRTDB'

const app = initializeApp({ /* config */ })
const db = getDatabase(app)

// in setup()
const todos = useRTDB(db.ref('todos'))
```

您可以通过传递 `autoDispose: false` 来重用数据库引用
```ts
const todos = useRTDB(db.ref('todos'), { autoDispose: false })
```

或者从 `@vueuse/core` 中使用 `createGlobalState`

```js
// store.js
import { createGlobalState } from '@vueuse/core'
import { useRTDB } from '@vueuse/firebase/useRTDB'

export const useTodos = createGlobalState(
  () => useRTDB(db.ref('todos')),
)
```

```js
// app.js
import { useTodos } from './store'

const todos = useTodos()
```


## 类型

```ts
export interface UseRTDBOptions {
  autoDispose?: boolean
}
/**
 * Reactive Firebase Realtime Database binding.
 *
 * @see https://vueuse.org/useRTDB
 */
export declare function useRTDB<T = any>(
  docRef: DatabaseReference,
  options?: UseRTDBOptions
): Ref<T | undefined>
```
