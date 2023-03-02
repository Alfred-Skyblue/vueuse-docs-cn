# useCookies

[`universal-cookie`](https://www.npmjs.com/package/universal-cookie) 的包装器，在 [@vueuse/integrations](https://vueuse.org/integrations/README) 附加组件中可用。

::: tip
与 `Nuxt 3` 一起使用时，不会自动导入此功能以支持 `Nuxt` 的内置 `useCookie()`. 如果你想使用 `VueUse` 中的函数，请显式导入它。
:::

## 演示

<demo src="./demo.vue" title="useCookies" desc=""></demo>

## 安装 

```bash
npm i universal-cookie
```

## 用法

### 常见用法

```html
<template>
  <div>
    <strong>locale</strong>: {{ cookies.get('locale') }}
    <hr>
    <pre>{{ cookies.getAll() }}</pre>
    <button @click="cookies.set('locale', 'zh-CN')">简体中文</button>
    <button @click="cookies.set('locale', 'en-US')">English</button>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { useCookies } from '@vueuse/integrations/useCookies'

  export default defineComponent({
    setup() {
      const cookies = useCookies(['locale'])
      return {
        cookies,
      }
    },
  })
</script>
```

## Options

Access and modify cookies using vue composition-api.

> By default, you should use it inside `setup()`, but this function also works anywhere else.

```ts
const { get, getAll, set, remove, addChangeListener, removeChangeListener } = useCookies(['cookie-name'], { doNotParse: false, autoUpdateDependencies: false })
```

### `dependencies` (optional)

Let you optionally specify a list of cookie names your component depend on or that should trigger a re-render. If unspecified, it will render on every cookie change.

### `options` (optional)

- `doNotParse` (boolean = false): do not convert the cookie into an object no matter what. **Passed as default value to `get`/`getAll` methods.**
- `autoUpdateDependencies` (boolean = false): automatically add cookie names ever provided to `get` method. If **true** then you don't need to care about provided `dependencies`.

### `cookies` (optional)

Let you provide a `universal-cookie` instance (creates a new instance by default)

> Info about methods available in the [universal-cookie api docs](https://www.npmjs.com/package/universal-cookie#api---cookies-class)

## `createCookies([req])`

Create a `universal-cookie` instance using request (default is window.document.cookie) and returns `useCookies` function with provided universal-cookie instance

- req (object): Node's [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) request object
