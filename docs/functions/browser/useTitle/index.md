# useTitle

响应式 `document.title`

::: tip 提示
当与 `Nuxt3` 一起使用时，此功能将不会自动导入以支持 `Nuxt` 的内置`useTitle()`. 如果你想使用 `VueUse` 中的函数，请使用显式导入。
:::


## 演示

<demo src="./demo.vue" title="useTitle" desc=""></demo>


### 基本用法

- 使用默认值

```ts
const title = useTitle('New Title')
```

- 使用响应式值，当值改变时，标题也会改变

```ts
import { useTitle } from '@vueuse/core'

const messages = ref(0)

const title = computed(() => {
  return !messages.value ? 'No message' : `${messages.value} new messages`
})

useTitle(title) // 标题将与 ref 的值保持同步
```

传递可选的模板标签[Vue Meta Title Template](https://vue-meta.nuxtjs.org/guide/metainfo.html)以更新要注入此模板的标题：

::: warning 警告
observe与 不兼容titleTemplate。
:::


```ts
export type UseTitleOptionsBase =
  | {
    /**
       * 使用 MutationObserve 观察 document.title 的变化，不能与 titleTemplate 选项一起使用。
       * @default false
       */
    observe?: boolean
  }
  | {
    /**
       * 用于解析标题的模板字符串（例如，'%s | 我的网站'），不能与 `observe` 选项一起使用
       * @default '%s'
       */
    titleTemplate?: MaybeRef<string> | ((title: string) => string)
  }
export type UseTitleOptions = ConfigurableDocument & UseTitleOptionsBase
export declare function useTitle(
  newTitle: MaybeReadonlyRef<string | null | undefined>,
  options?: UseTitleOptions
): ComputedRef<string | null | undefined>
export declare function useTitle(
  newTitle?: MaybeRef<string | null | undefined>,
  options?: UseTitleOptions
): Ref<string | null | undefined>
export type UseTitleReturn = ReturnType<typeof useTitle>
```
