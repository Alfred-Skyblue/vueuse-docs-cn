# useToggle

布尔值切换器。

## 用法

```js
import { useToggle } from '@vueuse/core'

const [value, toggle] = useToggle()
```

当你传递一个 `ref` 时，`useToggle` 将返回一个简单的切换函数：

```js
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
```

注意：请注意切换函数接受第一个参数作为覆盖值。您可能希望避免直接将函数传递给模板中的事件，因为事件对象将会传入。

```html
<!-- 这样使用将会传递事件对象 -->
<button @click="toggleDark" />
<!-- 您应该这样使用 -->
<button @click="toggleDark()" />
```
