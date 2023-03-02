# useStyleTag

注入 CSS 样式

## 演示

<demo src="./demo.vue" title="useShare" desc="向指定标签注入样式"></demo>

## 用法

提供一个 `CSS` 字符串，然后 `useStyleTag` 会自动生成一个 `id` 并将其注入到 <head/>。

```ts
import { useStyleTag } from '@vueuse/core'

const {
  id,
  css,
  load,
  unload,
  isLoaded,
} = useStyleTag('.foo { margin-top: 32px; }')

// 稍后您可以修改样式
css.value = '.foo { margin-top: 64px; }'
```

此代码将被注入到<head/>：

```html
<style type="text/css" id="vueuse_styletag_1">
.foo { margin-top: 64px; }
</style>
```

### 自定义 ID

如果你需要定义你自己的 `id`，你可以 `id` 作为第一个参数传递。

```ts
import { useStyleTag } from '@vueuse/core'

useStyleTag('.foo { margin-top: 32px; }', { id: 'custom-id' })
```

```html
<!-- 注入到 <head> -->
<style type="text/css" id="custom-id">
.foo { margin-top: 32px; }
</style>
```

### 媒体查询

你可以通过最后一个对象参数传递媒体属性。

```ts
useStyleTag('.foo { margin-top: 32px; }', { media: 'print' })
```

```html
<!-- 注入到 <head> -->
<style type="text/css" id="vueuse_styletag_1" media="print">
    .foo { margin-top: 32px; }
</style>
```

## 类型

```ts
export interface UseStyleTagOptions extends ConfigurableDocument {
  /**
   * 应用样式的媒体查询
   */
  media?: string
  /**
   * 立即加载样式
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 手动控制加载时机
   *
   * @default false
   */
  manual?: boolean
  /**
   * style 标签 id
   *
   * @default auto-incremented
   */
  id?: string
}
export interface UseStyleTagReturn {
  id: string
  css: Ref<string>
  load: () => void
  unload: () => void
  isLoaded: Readonly<Ref<boolean>>
}
/**
 * 向 head 注入 style 标签
 *
 * @see https://vueuse.org/useStyleTag
 * @param css
 * @param options
 */
export declare function useStyleTag(
  css: MaybeRef<string>,
  options?: UseStyleTagOptions
): UseStyleTagReturn
```
