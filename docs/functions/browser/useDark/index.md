# useDark

具有自动数据持久性的响应式暗色模式。

## 演示

### 基础使用

<demo src="./demo.vue" title="useDark" desc="使用暗色模式"></demo>

### 组件使用

```html
<UseDark v-slot="{ isDark, toggleDark }">
  <button @click="toggleDark()">Is Dark: {{ isDark }}</button>
</UseDark>
```

useDark 结合 `usePreferredDarkanduseStorage` 启动时，它会从 `localStorage/sessionStorage`（`key` 是可配置的）中读取值，以查看是否有用户配置的配色方案，如果没有，它将使用用户的系统偏好设置。当您更改`isDark` ref 时，它会更新相应元素的属性，然后将首选项存储到 `storage` (`default key: vueuse-color-scheme`) 以进行持久化。

> 请注意，`useDark` 仅处理 `DOM` 属性更改，以便您在 `CSS` 中应用正确的选择器。它不会为您处理实际的样式、主题或 `CSS`。

## 配置

默认情况下，它使用 [`Tailwind CSS favored dark mode`](https://www.tailwindcss.cn/docs/dark-mode)，当类 `dark` 应用于 `html` 标签时启用暗模式，例如：

```html
<!--light-->
<html>
  ...
</html>

<!--dark-->
<html class="dark">
  ...
</html>
```

不过，您也可以自定义它以使其适用于大多数 CSS 框架。

例如：

```ts
const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});
```

会像

```html
<!--light-->
<html>
  <body color-scheme="light">
    ...
  </body>
</html>

<!--dark-->
<html>
  <body color-scheme="dark">
    ...
  </body>
</html>
```

如果上述配置仍然不能满足您的需求，您可以使用该 `onChanged` 选项来完全控制您处理更新的方式。

```ts
const isDark = useDark({
  onChanged(dark: boolean) {
    // update the dom, call the API or something
  },
});
```

## 类型

```ts
export interface UseDarkOptions
  extends Omit<UseColorModeOptions<BasicColorSchema>, "modes" | "onChanged"> {
  /**
   * 当 isDark = true 时应用于目标元素的值
   *
   * @default 'dark'
   */
  valueDark?: string;
  /**
   * 当 isDark = false 时应用于目标元素的值
   *
   * @default ''
   */
  valueLight?: string;
  /**
   * 用于处理更新的自定义函数，指定后，默认行为将被覆盖。
   * @default undefined
   */
  onChanged?: (
    isDark: boolean,
    defaultHandler: (mode: BasicColorSchema) => void,
    mode: BasicColorSchema
  ) => void;
}
/**
 * 具有自动数据持久性的响应式暗模式。
 * @see https://vueuse.org/useDark
 * @param options
 */
export declare function useDark(
  options?: UseDarkOptions
): WritableComputedRef<boolean>;
```
