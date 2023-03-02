# useColorMode

具有自动数据持久性的响应式颜色模式（深色/浅色/自定义）。

## 演示

### 基本用法

<demo src="./demo.vue" title="useColorMode" desc="响应式颜色模式"></demo>

默认情况下，它将使用 [`usePreferredDark`](../usePreferredDark/)（`auto`模式）与用户的浏览器偏好相匹配。读取 `ref` 时，默认情况下它将返回当前颜色模式（`dark`，`light`或您的自定义模式）。通过启用该选项，可以将模式 `auto` 包含在返回的模式中 `emitAuto`。当写入 `ref` 时，它会触发 `DOM` 更新并将颜色模式保存到本地存储（或您的自定义存储）。您可以 `auto` 通过设置回自动模式。

### 组件用法

```html
<UseColorMode v-slot="{ mode }">
    <button @click="mode = mode === 'dark' ? 'light' : 'dark'">Mode {{ mode }}</button>
</UseColorMode>
```

```ts
mode.value // 'dark' | 'light'

mode.value = 'dark' // 改成深色模式并坚持

mode.value = 'auto' // 更改为自动模式
```

## 配置

```ts
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // 自定义颜色
    dim: 'dim',
    cafe: 'cafe',
  },
}) // Ref<'dark' | 'light' | 'dim' | 'cafe'>
```

## 类型

```ts
export type BasicColorSchema = 'light' | 'dark' | 'auto'
export interface UseColorModeOptions<T extends string = BasicColorSchema>
  extends UseStorageOptions<T | BasicColorSchema> {
  /**
     * 应用于目标元素的 CSS 选择器
     *
     * @default 'html'
     */
  selector?: string
  /**
     * 应用目标元素的 HTML 属性
     * @default 'class'
     */
  attribute?: string
  /**
     * 初始颜色模式
     * @default 'auto'
     */
  initialValue?: T | BasicColorSchema
  /**
     * 给属性加值时的前缀
     */
  modes?: Partial<Record<T | BasicColorSchema, string>>
  /**
     * 用于处理更新的自定义处理程序。指定后，默认行为将被覆盖。
     *
     * @default undefined
     */
  onChanged?: (mode: T | BasicColorSchema, defaultHandler: (mode: T | BasicColorSchema) => void) => void
  /**
     * 自定义 storage ref，提供时，将跳过 useStorage
     */
  storageRef?: Ref<T | BasicColorSchema>
  /**
     * 将数据持久化到 localStorage SessionStorage 的键。传递 `null` 以禁用持久性
     *
     * @default 'vueuse-color-scheme'
     */
  storageKey?: string | null
  /**
     * 存储对象，可以是 localStorage 或 sessionStorage
     *
     * @default localStorage
     */
  storage?: StorageLike
  /**
     * 从状态发出“auto”模式设置为“true”时，首选模式不会转换为“light”或“dark”。当需要知道选择了“auto”模式的事实时，这很有用。
     *
     * @default undefined
     */
  emitAuto?: boolean
}
/**
 * 具有自动数据持久性的响应式颜色模式。
 * @see https://vueuse.org/useColorMode
 * @param options
 */
export declare function useColorMode<T extends string = BasicColorSchema>(
  options?: UseColorModeOptions<T>
): WritableComputedRef<BasicColorSchema | T>
```
