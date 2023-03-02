# 最佳实践

## 解构

`VueUse` 中的大多数函数返回一个 `refs` 对象，你可以使用 [ES6 的对象解构](https://es6.ruanyifeng.com/#docs/destructuring#%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC) 语法来获得您所需要的值，例如：

```ts
import { useMouse } from '@vueuse/core'

// "x" 和 "y" 的 refs 对象
const { x, y } = useMouse()

console.log(x.value)

const mouse = useMouse()

console.log(mouse.x.value)
```

如果您更喜欢将他们用作对象属性样式，则可以使用 `reactive`，例如：

```ts
import { reactive } from 'vue'
import { useMouse } from '@vueuse/core'

const mouse = reactive(useMouse())

// 使用 reactive 时，您不需要对其进行.value
console.log(mouse.x)
```

## 副作用清理

和 `Vue` 一样，`VueUse` 中的函数会在组件卸载时自动清理副作用，例如 `useEventListener`，在组件卸载时，他会自动执行 `removeEventListener`，无需手动清理。

```ts
// 组件卸载时会自动执行 removeEventListener
useEventListener('mousemove', () => {
  console.log('mouse move')
})
```

`VueUse` 中所有的函数都遵循这个约定

为了手动清理副作用，一些函数会想`watch`一样返回一个停止器，例如：

```ts
const stop = useEventListener('mousemove', () => {})

// ...

// 手动卸载 `mousemove` 事件的监听
stop()
```

虽然并非所有的函数都会返回一个停止器，但是更通用的解决方案是使用 `Vue` 中的 [`effectScope`API](https://cn.vuejs.org/api/reactivity-advanced.html#effectscope)

```ts
import { effectScope } from 'vue'

const scope = effectScope()

scope.run(() => {
  // ...

  useEventListener('mousemove', () => {})
  onClickOutside(el, () => {})
  watch(source, () => {})
})

// 在 `scope.run` 中调用的所有 compositionAPI 都将被释放
scope.stop()
```

[您可以在这个 RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md)中了解更多关于 `effectScope` 的信息

### 将 Ref 作为参数传递

在 `Vue` 中，我们使用 `setup()` 函数来构建数据和逻辑之间的 "联系"。为了使其灵活，大多数 VueUse 函数还接受参数的 ref 对象。

举个`useTitle`的 🌰：

- 正常使用

通常 `useTitle` 返回一个 `ref` 对象的页面标题引用，当您为 `ref` 对象赋值时，页面标题也会随之改变。

```ts
const isDark = useDark()
const title = useTitle('Set title')

watch(isDark, () => {
  title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
})
```

- 使用 ref 对象作为参数

如果您考虑"关联"，则可以改为传递一个 `ref` 对象作为参数

```ts
const isDark = useDark()
const title = computed(() =>
  isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
)

useTitle(title)
```

- Reactive Getter

从 VueUse 9.0 开始，我们引入了一个新的约定，将 `Reactive Getter` 作为参数传递。这个适用于响应对象和 [`reactivityTransform`](https://cn.vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform)。

```ts
const isDark = useDark()

useTitle(() => (isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'))
```
