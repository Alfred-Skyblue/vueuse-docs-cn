# useSupported

SSR 兼容性 `isSupported`

## 用法

```ts
import { useSupported } from '@vueuse/core'

const isSupported = useSupported(() => navigator && 'getBattery' in navigator)

if (isSupported.value) {
  // do something
  navigator.getBattery
}
```

## 类型

```ts
export declare function useSupported(
  callback: () => unknown,
  sync?: boolean
): Ref<boolean>
```
