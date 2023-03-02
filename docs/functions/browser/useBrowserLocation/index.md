# useBrowserLocation

响应式获取 Location，Location 接口表示其链接到的对象的位置（URL）

::: tip
注意：如果您使用的是 Vue Router，请改用 useRoute 获取
:::

## 演示

### 基础用法

<demo src="./demo.vue" title="useBrowserLocation" desc="响应式获取 Location"></demo>

### 组件用法

```html
<UseBrowserLocation v-slot="{ location }"> Browser Location: {{ location }} </UseBrowserLocation>
```

## 类型

```ts
export interface BrowserLocationState {
  trigger: string
  state?: any
  length?: number
  hash?: string
  host?: string
  hostname?: string
  href?: string
  origin?: string
  pathname?: string
  port?: string
  protocol?: string
  search?: string
}
/**
 * 响应式浏览器位置。
 * @see https://vueuse.org/useBrowserLocation
 * @param options
 */
export declare function useBrowserLocation({ window }?: ConfigurableWindow): Ref<{
  trigger: string
  state?: any
  length?: number | undefined
  hash?: string | undefined
  host?: string | undefined
  hostname?: string | undefined
  href?: string | undefined
  origin?: string | undefined
  pathname?: string | undefined
  port?: string | undefined
  protocol?: string | undefined
  search?: string | undefined
}>
export type UseBrowserLocationReturn = ReturnType<typeof useBrowserLocation>
```
