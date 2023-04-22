# createTemplatePromise

模板作为Promise。用于构建自定义Dialogs、Modals、Toasts等。

::: warning
它的功能只适用于 Vue 3
:::



## 演示


<demo src="./demo.vue" title="createTemplatePromise" desc="模板作为Promise"></demo>


## 使用

```html
<script setup lang="ts">
import { createTemplatePromise } from '@vueuse/core'

const TemplatePromise = createTemplatePromise<ReturnType>()

async function open() {
  const result = await TemplatePromise.start()
  // 单击按钮，结果为“确定”
}
</script>

<template>
  <TemplatePromise v-slot="{ promise, resolve, reject, args }">
    <!-- your UI -->
    <button @click="resolve('ok')">OK</button>
  </TemplatePromise>
</template>
```
## 特点

- **可编程** - 通过调用 Promise 的方式来控制UI
- **模板** - 使用 Vue 模板进行渲染，不需要新的DSL
- **TypeScript** - 通过泛型提供全类型安全性
- **无渲染** - 您完全控制UI
- **过渡** - 支持Vue过渡效果

该函数是从 [vue-template-promise](https://github.com/antfu/vue-template-promise) 迁移而来。

## 使用方法

`createTemplatePromise` 返回一个 **Vue 组件**，您可以直接在 `<script setup>` 中使用。

```ts
import { createTemplatePromise } from '@vueuse/core'

const TemplatePromise = createTemplatePromise()
const MyPromise = createTemplatePromise<boolean>() // 带有泛型类型
```

在模板中，使用 `v-slot` 来访问 Promise 和 resolve 函数。

```html
<template>
  <TemplatePromise v-slot="{ promise, resolve, reject, args }">
    <!-- 您可以有任何内容 -->
    <button @click="resolve('ok')">OK</button>
  </TemplatePromise>
  <MyPromise v-slot="{ promise, resolve, reject, args }">
    <!-- 另外一个 -->
  </MyPromise>
</template>
```

该插槽最初不会被渲染（类似于 `v-if="false"`），直到您从组件中调用 `start` 方法。

```ts
const result = await TemplatePromise.start()
```

一旦在模板中调用 `resolve` 或 `reject`，Promise 就会被解决或拒绝，并返回您传递的值。一旦解决，该插槽将自动移除。

### 传递参数

您可以通过参数向 `start` 传递参数。

```ts
import { createTemplatePromise } from '@vueuse/core'

const TemplatePromise = createTemplatePromise<boolean, [string, number]>()
```

```ts
const result = await TemplatePromise.start('hello', 123) // Pr
```

在模板插槽中，您可以通过 `args` 属性访问参数。

```html
<template>
  <TemplatePromise v-slot="{ args, resolve }">
    <div>{{ args[0] }}</div> <!-- hello -->
    <div>{{ args[1] }}</div> <!-- 123 -->
    <button @click="resolve(true)">OK</button>
  </TemplatePromise>
</template>
```

### 过渡效果

您可以使用过渡效果来动画显示插槽。

```html
<script setup lang="ts">
const TemplatePromise = createTemplatePromise<ReturnType>({
  transition: {
    name: 'fade',
    appear: true,
  },
})
</script>

<template>
  <TemplatePromise v-slot="{ resolve }">
    <!-- 您的UI -->
    <button @click="resolve('ok')">OK</button>
  </TemplatePromise>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```

了解更多关于 [Vue 过渡效果](https://v3.vuejs.org/guide/transitions-overview.html)。

## 动机

常见的在程序中调用对话框或模态框的方式通常是这样的：

```ts
const dialog = useDialog()
const result = await dialog.open({
  title: 'Hello',
  content: 'World',
})
```

这样的方式通过将这些信息发送到顶层组件，并让它渲染对话框来实现。然而，它限制了你在UI中能够表达的灵活性。例如，你可能想让标题变成红色，或者添加额外的按钮等。你最终会得到很多选项，如：

```ts
const result = await dialog.open({
  title: 'Hello',
  titleClass: 'text-red',
  content: 'World',
  contentClass: 'text-blue text-sm',
  buttons: [
    { text: 'OK', class: 'bg-red', onClick: () => {} },
    { text: 'Cancel', class: 'bg-blue', onClick: () => {} },
  ],
  // ...
})
```

甚至这也不够灵活。如果你需要更多，你可能最终需要手动渲染函数。

```ts
const result = await dialog.open({
  title: 'Hello',
  contentSlot: () => h(MyComponent, { content }),
})
```

这就像在脚本中重新发明一个新的DSL来表达UI模板一样。

因此，这个函数允许**在模板中表达UI而不是脚本**，同时仍然能够通过编程方式进行操作。


## 类型

```ts
export interface TemplatePromiseProps<Return, Args extends any[] = []> {
    /**
     * Promise 实例。
     */
    promise: Promise<Return> | undefined
    /**
     * 完成 Promise。
     */
    resolve: (v: Return | Promise<Return>) => void
    /**
     * 拒绝 Promise。
     */
    reject: (v: any) => void
    /**
     * 传递给 TemplatePromise.start() 的参数。
     */
    args: Args
    /**
     * 表示 Promise 是否正在解析中。
     * 当将另一个 Promise 传递给 `resolve` 时，该值将设置为 `true`，直到 Promise 解析完成为止。
     */
    isResolving: boolean
    /**
     * 传递给 createTemplatePromise() 的选项。
     */
    options: TemplatePromiseOptions
    /**
     * 用于列表渲染的唯一键。
     */
    key: number
}

export interface TemplatePromiseOptions {
    /**
     * 确定 Promise 是否只能一次同时调用。
     *
     * @default false
     */
    singleton?: boolean
    /**
     * Promise 的过渡属性。
     */
    transition?: TransitionGroupProps
}

export type TemplatePromise<Return, Args extends any[] = []> = DefineComponent<{}> & {
    new (): {
        $slots: {
            default(_: TemplatePromiseProps<Return, Args>): any
        }
    }
} & {
    start: (...args: Args) => Promise<Return>
}

/**
 * 创建一个模板 Promise 组件。
 *
 * @see https://vueuse.org/createTemplatePromise
 */
export declare function createTemplatePromise<Return, Args extends any[] = []>(
    options?: TemplatePromiseOptions
): TemplatePromise<Return, Args>
```
