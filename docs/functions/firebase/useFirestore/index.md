# useFirestore

响应式[Firestore](https://firebase.google.com/docs/firestore)绑定。让您的本地数据开始与远程数据库保持同步变得简单明了。在[@vueuse/firebase](https://vueuse.org/firebase/README)附件中可用。

## 用法

```js {9,12,17,22}
import { computed, ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { collection, doc, getFirestore, limit, orderBy, query } from 'firebase/firestore'
import { useFirestore } from '@vueuse/firebase/useFirestore'

const app = initializeApp({ projectId: 'MY PROJECT ID' })
const db = getFirestore(app)

const todos = useFirestore(collection(db, 'todos'))

const user = useFirestore(doc(db, 'users', 'my-user-id'))

// 您还可以使用 ref 值进行响应式查询
const postsLimit = ref(10)
const postsQuery = computed(() => query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(postsLimit.value)))
const posts = useFirestore(postsQuery)

// 您可以使用布尔值来告诉查询何时可以运行
// 当它得到假值时，返回初始值
const userId = ref('')
const userQuery = computed(() => userId.value && doc(db, 'users', userId.value))
const userData = useFirestore(userQuery, null)
```

## 跨实例共享

您可以通过传递 `autoDispose: false` 来重用数据库引用
```ts
const todos = useFirestore(collection(db, 'todos'), undefined, { autoDispose: false })
```

或者从 `@vueuse/core` 中使用 `createGlobalState`

```js
// store.js
import { createGlobalState } from '@vueuse/core'
import { useFirestore } from '@vueuse/firebase/useFirestore'

export const useTodos = createGlobalState(
  () => useFirestore(collection(db, 'todos')),
)
```

```js
// app.js
import { useTodos } from './store'

export default {
  setup() {
    const todos = useTodos()
    return { todos }
  },
}
```

## 类型

```ts
export interface UseFirestoreOptions {
  errorHandler?: (err: Error) => void
  autoDispose?: boolean
}
export type FirebaseDocRef<T> = Query<T> | DocumentReference<T>
type Falsy = false | 0 | '' | null | undefined
export declare function useFirestore<T extends DocumentData>(
  maybeDocRef: MaybeRef<DocumentReference<T> | Falsy>,
  initialValue: T,
  options?: UseFirestoreOptions
): Ref<T | null>
export declare function useFirestore<T extends DocumentData>(
  maybeDocRef: MaybeRef<Query<T> | Falsy>,
  initialValue: T[],
  options?: UseFirestoreOptions
): Ref<T[]>
export declare function useFirestore<T extends DocumentData>(
  maybeDocRef: MaybeRef<DocumentReference<T> | Falsy>,
  initialValue?: T | undefined | null,
  options?: UseFirestoreOptions
): Ref<T | undefined | null>
export declare function useFirestore<T extends DocumentData>(
  maybeDocRef: MaybeRef<Query<T> | Falsy>,
  initialValue?: T[],
  options?: UseFirestoreOptions
): Ref<T[] | undefined>
```
