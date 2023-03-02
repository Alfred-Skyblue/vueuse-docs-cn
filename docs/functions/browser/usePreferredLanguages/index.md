# usePreferredLanguages

响应式 [`Navigator.languages`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages)。它为网络开发人员提供有关用户首选语言的信息。例如，这可能有助于根据用户的首选语言调整用户界面的语言，以提供更好的体验。



## 演示

### 基础使用

<demo src="./demo.vue" title="usePreferredLanguages" desc="响应式浏览器语言"></demo>

### 组件使用

```html
<UsePreferredLanguages v-slot="{ languages }">
    Preferred Languages: {{ languages }}
</UsePreferredLanguages>
```

## 类型

```ts
/**
 * 响应式 Navigator.languages.
 *
 * @see https://vueuse.org/usePreferredLanguages
 * @param options
 */
export declare function usePreferredLanguages(
  options?: ConfigurableWindow
): Ref<readonly string[]>
```
