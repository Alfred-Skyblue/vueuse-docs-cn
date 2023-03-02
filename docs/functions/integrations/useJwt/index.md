# useJwt

[`jwt-decode`](https://github.com/auth0/jwt-decode) 包装器，在[@vueuse/integrations](https://vueuse.org/integrations/README)附加组件中可用。

## 演示

<demo src="./demo.vue" title="useJwt" desc=""></demo>

## 安装

```bash
npm install jwt-decode
```

## 用法

```typescript
import { defineComponent } from 'vue'
import { useJwt } from '@vueuse/integrations/useJwt'

export default defineComponent({
  setup() {
    const encodedJwt = ref('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc')
    const { header, payload } = useJwt(encodedJwt)

    return { header, payload }
  },
})
```


## 类型

```ts
export interface UseJwtOptions<Fallback> {
  /**
   * 解码遇到错误时返回的值
   *
   * @default null
   */
  fallbackValue?: Fallback
  /**
   * 解码错误回调
   */
  onError?: (error: unknown) => void
}
export interface UseJwtReturn<Payload, Header, Fallback> {
  header: ComputedRef<Header | Fallback>
  payload: ComputedRef<Payload | Fallback>
}
/**
 * 响应式 jwt token.
 *
 * @see https://vueuse.org/useJwt
 * @param jwt
 */
export declare function useJwt<
  Payload extends object = JwtPayload,
  Header extends object = JwtHeader,
  Fallback = null
>(
  encodedJwt: MaybeComputedRef<string>,
  options?: UseJwtOptions<Fallback>
): UseJwtReturn<Payload, Header, Fallback>
```
