# useFavicon

操作 `favicon`

## 演示

<demo src="./demo.vue" title="useFavicon" desc="响应式操作favicon"></demo>

您也可以传递 ref 给它，源引用的更改将自动反映到您的图标中。

```ts
import { computed } from 'vue'
import { useFavicon, usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()
const favicon = computed(() => (isDark.value ? 'dark.png' : 'light.png'))

useFavicon(favicon)
```

传递源引用时，返回引用将与源引用相同

```ts
const source = ref('icon.png')
const icon = useFavicon(source)

console.log(icon === source) // true
```

## 类型

```ts
export interface UseFaviconOptions extends ConfigurableDocument {
  baseUrl?: string
  rel?: string
}
/**
 * 响应式操作 favicon.
 *
 * @see https://vueuse.org/useFavicon
 * @param newIcon
 * @param options
 */
export declare function useFavicon(
  newIcon: MaybeReadonlyRef<string | null | undefined>,
  options?: UseFaviconOptions
): ComputedRef<string | null | undefined>
export declare function useFavicon(
  newIcon?: MaybeRef<string | null | undefined>,
  options?: UseFaviconOptions
): Ref<string | null | undefined>
export type UseFaviconReturn = ReturnType<typeof useFavicon>
```
