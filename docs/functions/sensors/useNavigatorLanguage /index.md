# useNavigatorLanguage

响应式 [`navigator.language`](https://github.com/vueuse/vueuse/blob/main/packages/core/useNavigatorLanguage/demo.vue).

## 演示

<demo src="./demo.vue" title="" desc=""></demo>


## 类型

```ts
export interface NavigatorLanguageState {
  isSupported: Ref<boolean>
  /**
   *
   * ISO 639-1 标准语言代码
   *
   * @see https://www.iso.org/iso-639-language-codes.html
   * @see https://www.loc.gov/standards/iso639-2/php/code_list.php
   *
   */
  language: Ref<string | undefined>
}
/**
 *
 * 响应式 navigator.language
 *
 * Detects the currently selected user language and returns a reactive language
 * @see https://vueuse.org/useNavigatorLanguage
 *
 */
export declare const useNavigatorLanguage: (
  options?: ConfigurableWindow
) => Readonly<NavigatorLanguageState>
export type UseNavigatorLanguageReturn = ReturnType<typeof useNavigatorLanguage>
```
