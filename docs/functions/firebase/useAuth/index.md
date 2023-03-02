# useAuth

响应式[Firebase Auth](https://firebase.google.com/docs/auth)绑定。它提供了一种响应机制 `user`，`isAuthenticated`因此您可以轻松地对用户身份验证状态的变化做出反应。在 [@vueuse/firebase](https://vueuse.org/firebase/README) 附加组件中可用。

## 用法

```html
<script setup lang="ts">
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useAuth } from '@vueuse/firebase/useAuth'

const app = initializeApp({ /* config */ })
const auth = getAuth(app);
const { isAuthenticated, user } = useAuth(auth)

const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())
</script>

<template>
  <pre v-if="isAuthenticated">{{ user }}</pre>
  <div v-else>
    <button @click="signIn">
      使用谷歌登录
    </button>
  </div>
</template>
```


## 类型

```ts
export interface UseFirebaseAuthOptions {
  isAuthenticated: ComputedRef<boolean>
  user: Ref<User | null>
}
/**
 * 响应式 Firebase Auth binding
 *
 * @see https://vueuse.org/useAuth
 */
export declare function useAuth(auth: Auth): {
  isAuthenticated: ComputedRef<boolean>
  user: Ref<{
    readonly emailVerified: boolean
    readonly isAnonymous: boolean
    readonly metadata: {
      readonly creationTime?: string | undefined
      readonly lastSignInTime?: string | undefined
    }
    readonly providerData: {
      readonly displayName: string | null
      readonly email: string | null
      readonly phoneNumber: string | null
      readonly photoURL: string | null
      readonly providerId: string
      readonly uid: string
    }[]
    readonly refreshToken: string
    readonly tenantId: string | null
    delete: () => Promise<void>
    getIdToken: (forceRefresh?: boolean | undefined) => Promise<string>
    getIdTokenResult: (
      forceRefresh?: boolean | undefined
    ) => Promise<IdTokenResult>
    reload: () => Promise<void>
    toJSON: () => object
    readonly displayName: string | null
    readonly email: string | null
    readonly phoneNumber: string | null
    readonly photoURL: string | null
    readonly providerId: string
    readonly uid: string
  } | null>
}
```
