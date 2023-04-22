# createReusableTemplate

在组件作用域内定义和重用模板。

## 动机

经常需要重用一些模板的一部分。例如：

```html
<template>
  <dialog v-if="showInDialog">
    <!-- something complex -->
  </dialog>
  <div v-else>
    <!-- something complex -->
  </div>
</template>
```

我们希望尽可能多地重用代码。因此，通常我们需要将这些重复的部分提取到一个组件中。但是，在一个单独的组件中，你失去了访问本地绑定的能力。为它们定义props和emits可能有些繁琐。

因此，这个函数提供了一种在组件作用域内定义和重用模板的方法。

## 使用方法

在上面的例子中，我们可以将它重构为：

```html
<script setup>
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate>
    <!-- something complex -->
  </DefineTemplate>

  <dialog v-if="showInDialog">
    <ReuseTemplate />
  </dialog>
  <div v-else>
    <ReuseTemplate />
  </div>
</template>
```

- `<DefineTemplate>` 注册模板并不渲染任何内容。
- `<ReuseTemplate>` 将渲染由 `<DefineTemplate>` 提供的模板。
- 必须在 `<ReuseTemplate>` 之前使用 `<DefineTemplate>`。

> **注意**：建议在可能的情况下将其提取为单独的组件。过度使用此功能可能会导致代码库中的不良实践。

### 传递数据

您还可以使用插槽将数据传递到模板中：

- 使用 `v-slot="..."` 来在 `<DefineTemplate>` 上访问数据。
- 直接绑定 `<ReuseTemplate>` 上的数据以将它们传递到模板中。

```html
<script setup>
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ data, msg, anything }">
    <div>{{ data }} passed from usage</div>
  </DefineTemplate>

  <ReuseTemplate :data="data" msg="The first usage" />
  <ReuseTemplate :data="anotherData" msg="The second usage" />
  <ReuseTemplate v-bind="{ data: something, msg: 'The third' }" />
</template>
```


### TypeScript 支持

`createReusableTemplate` 接受泛型类型，以提供对传递给模板的数据的类型支持：

```html
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

// 返回 DefineTemplate 和 ReuseTemplate 两个实例
const [DefineFoo, ReuseFoo] = createReusableTemplate<{ msg: string }>()

// 您可以创建多个可重用模板
const [DefineBar, ReuseBar] = createReusableTemplate<{ items: string[] }>()
</script>

<template>
  <DefineFoo v-slot="{ msg }">
    <!-- `msg` 的类型为 `string` -->
    <div>Hello {{ msg.toUpperCase() }}</div>
  </DefineFoo>

  <ReuseFoo msg="World" />

  <!-- @ts-expect-error 类型错误！ -->
  <ReuseFoo :msg="1" />
</template>
```

另外，如果您不喜欢数组解构，以下用法也是合法的：

```html
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const {
  define: DefineFoo,
  reuse: ReuseFoo,
} = createReusableTemplate<{ msg: string }>()
</script>

<template>
  <DefineFoo v-slot="{ msg }">
    <div>Hello {{ msg.toUpperCase() }}</div>
  </DefineFoo>

  <ReuseFoo msg="World" />
</template>
```

```html
<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const TemplateFoo = createReusableTemplate<{ msg: string }>()
</script>

<template>
  <TemplateFoo.define v-slot="{ msg }">
    <div>Hello {{ msg.toUpperCase() }}</div>
  </TemplateFoo.define>

  <TemplateFoo.reuse msg="World" />
</template>
```

::: warning
在 Vue 2 中不支持点符号表示法。
:::

### 传递插槽

还可以从 `<ReuseTemplate>` 中传递插槽。您可以从 `$slots` 中访问 `<DefineTemplate>` 上的插槽：

```html
<script setup>
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, otherProp }">
    <div some-layout>
      <!-- 渲染插槽 -->
      <component :is="$slots.default" />
    </div>
  </DefineTemplate>

  <ReuseTemplate>
    <div>一些内容</div>
  </ReuseTemplate>
  <ReuseTemplate>
    <div>另一些内容</div>
  </ReuseTemplate>
</template>
```

::: warning
在 Vue 2 中，传递插槽是无效的。
:::

## 参考资料

此函数来自于 [vue-reuse-template](https://github.com/antfu/vue-reuse-template)。

关于重用模板的现有 Vue 讨论/问题：

- [关于重用模板的讨论](https://github.com/vuejs/core/discussions/6898)

替代方法：

- [Vue Macros - `namedTemplate`](https://vue-macros.sxzz.moe/features/named-template.html)
- [`unplugin-@vueuse/core`](https://github.com/liulinboyi/unplugin-@vueuse/core)


## 类型

```ts
export type DefineTemplateComponent<
  Bindings extends object,
  Slots extends Record<string, Slot | undefined>
> = DefineComponent<{}> & {
  new (): {
    $slots: {
      default(
        _: Bindings & {
          $slots: Slots
        }
      ): any
    }
  }
}
export type ReuseTemplateComponent<
  Bindings extends object,
  Slots extends Record<string, Slot | undefined>
> = DefineComponent<Bindings> & {
  new (): {
    $slots: Slots
  }
}
export type ReusableTemplatePair<
  Bindings extends object,
  Slots extends Record<string, Slot | undefined>
> = [
  DefineTemplateComponent<Bindings, Slots>,
  ReuseTemplateComponent<Bindings, Slots>
] & {
  define: DefineTemplateComponent<Bindings, Slots>
  reuse: ReuseTemplateComponent<Bindings, Slots>
}
/**
 * 此函数成对创建“define”和“reuse”组件，它还允许传递泛型以与类型绑定。
 *
 * @see https://vueuse.org/createReusableTemplate
 */
export declare function createReusableTemplate<
  Bindings extends object,
  Slots extends Record<string, Slot | undefined> = Record<
    string,
    Slot | undefined
  >
>(): ReusableTemplatePair<Bindings, Slots>
```
